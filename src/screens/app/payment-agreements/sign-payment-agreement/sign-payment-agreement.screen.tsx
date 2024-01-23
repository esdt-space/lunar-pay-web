import { ArrowLeft } from "lucide-react"
import { FormatAmount } from "@multiversx/sdk-dapp/UI"
import { useGetAccount } from "@multiversx/sdk-dapp/hooks"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"

import { cn, formatTokenBalance } from "@/theme/utils.ts"
import { RoutesConfig } from "@/navigation"

import { Button } from "@/components/ui/button.tsx"
import { AppIcon } from "@/components/shared/app-icon.tsx"

import { formatAddress } from "@/utils/address"
import { useTokensMap } from "@/core/tokens"
import { useIsAuthenticated } from "@/features/auth"
import { AuthForm } from "@/features/auth/components"
import { TokenItem } from "@/core/tokens/components"
import { useAccountVaultTokens } from "@/features/vault/hooks"
import { formatFrequencyForSignAgreement } from "@/utils/utils.ts"
import { useCreatedPaymentAgreement, useSignPaymentAgreementMutation} from "@/features/payment-agreements/hooks"

import { AgreementDetailsPartial } from "./partials/agreement-details-partial.tsx"
import { DepositAssetsComponent } from "../../dashboard/components/deposit-component.tsx"

export const SignPaymentAgreementScreen = () => {
  const { address } = useGetAccount()
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const isLoggedIn = useIsAuthenticated()
  const {vaultTokens} = useAccountVaultTokens()
  const tokensMap = useTokensMap();

  const queryParams = new URLSearchParams(location.search)
  const metadataValue = queryParams.get('metadata')
  const metadata = metadataValue ?? ""

  const { data: agreement } = useCreatedPaymentAgreement(id);
  const { mutate: signPaymentAgreement} = useSignPaymentAgreementMutation(id, metadata);

  if(!agreement) return;

  const redirect = () => {
    if(agreement.signAgreementRedirectUrl) {
      window.location.href = agreement.signAgreementRedirectUrl
    }
  }

  const token = tokensMap[agreement.tokenIdentifier];
  const vaultToken = vaultTokens.find(item => item.identifier === agreement.tokenIdentifier);
  
  const currentTokenBalance = vaultToken !== undefined ? vaultToken.balance : ""
  const currentTokenDecimals = vaultToken !== undefined ? vaultToken.decimals : 0
  const currentBalance = formatTokenBalance(currentTokenBalance, currentTokenDecimals)

  const currentAgreementBalance = agreement.fixedAmount !== undefined ? agreement.fixedAmount : ""
  const agreementRequiredBalance = formatTokenBalance(currentAgreementBalance, token.decimals)

  const signPaymentAgreementButtonHandler = () => {
    signPaymentAgreement(agreement.agreementIdentifier, { onSuccess: redirect })
  }

  const userIsOwner = address === agreement.owner
  const enoughAssets = Number(currentBalance.toString()) > Number(agreementRequiredBalance.toString())
 
  return (
    <div className="flex flex-1 flex-col">
      <div className={'pl-8 py-4'}>
        <Button onClick={() => navigate(`${RoutesConfig.paymentAgreements}/${agreement._id}`)} variant={'ghost'} className={'gap-2'}>
          <ArrowLeft />
          Back
        </Button>
      </div>
      <div className={'flex max-md:flex-col flex-1 w-full'}>
        <div className={cn([
          'overflow-hidden isolate',
          'relative flex flex-col flex-grow p-12 lg:p-24 lg:pb-12 gap-20',
          'bg-slate-50 border border-slate-200 border-b-0 border-l-0 rounded-tr-[4em]',
          'lg:max-w-[800px] lg:h-full lg:justify-between',
        ])}>
          <div aria-hidden="true" className="-z-10 absolute opacity-25 w-[450px] h-[600px] rounded-full top-0 right-0">
            <div className="w-full h-full bg-gradient-to-br from-[#439DFE] to-[#F687FF] blur-[150px]"></div>
          </div>

          <AgreementDetailsPartial agreement={agreement}/>

          <div className={'flex items-center self-center gap-2'}>
            <div className={'text-sm'}>Powered by</div>
            <Link to={RoutesConfig.dashboard}>
              <AppIcon />
            </Link>
          </div>
        </div>

        <div className={'flex flex-grow lg:h-full p-16 items-center justify-center'}>
          <div className={'flex flex-col gap-2 w-full max-w-[500px]'}>
            {!isLoggedIn && <AuthForm callbackRoute={window.location.href}/>}
            {isLoggedIn && (
              <div className={'space-y-6'}>
                <div className={'space-y-1'}>
                  <h2 className={'text-lg font-bold'}>Payment Details</h2>
                  <div className={'ring-1 ring-slate-200 rounded'}>
                    <div className={'flex justify-between p-4 py-6'}>
                      <div>1 x {agreement.itemName}</div>
                      <div>
                        <FormatAmount
                          digits={4}
                          decimals={token.decimals}
                          token={agreement.tokenIdentifier}
                          value={agreement.fixedAmount as string}
                        />
                        /{formatFrequencyForSignAgreement(agreement.frequency)}
                      </div>
                    </div>

                    <div className={'flex justify-between bg-slate-100 p-4 text-lg'}>
                      <div className={'font-bold'}>Total due today</div>
                      <div className={'font-black'}>
                        <FormatAmount
                          digits={4}
                          decimals={token.decimals}
                          token={agreement.tokenIdentifier}
                          value={agreement.fixedAmount as string}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={!enoughAssets ? 'border p-4' : ""}>
                  <div className={'bg-slate-50 p-4 rounded space-y-2 mb-4'}>
                    <div className={'text-sm font-medium'}>{enoughAssets ? "Vault balance" : "No Assets"}</div>
                    {vaultToken && (
                      <TokenItem token={vaultToken} showBalances/>
                    )}
                  </div>

                  {!enoughAssets && <DepositAssetsComponent />}
                </div>

                <div className={'text-sm p-3 ring-1 ring-slate-100 rounded shadow-sm'}>
                  By signing this payment agreement, you allow <span className={'font-bold'}>{agreement.ownerName ?? formatAddress(agreement.owner)}</span> to charge your wallet for this payment and future
                  payments in accordance with their terms. Your first payment will be made <span className={'font-bold'}>today</span>, and then
                  <span className={'font-bold'}> every {formatFrequencyForSignAgreement(agreement.frequency)}</span>.
                </div>

                <div className={'flex flex-col'}>
                  <Button
                    variant={'primary'}
                    disabled={userIsOwner || !enoughAssets}
                    className={'bg-gradient-to-r from-primary to-secondary text-white hover:text-slate-200'}
                    onClick={signPaymentAgreementButtonHandler}
                  >
                    Sign Payment Agreement
                  </Button>

                  {userIsOwner && (
                    <div className={'text-sm text-muted-foreground text-center'}>
                      You cannot accept your own agreement
                    </div>
                  )}

                  {!userIsOwner && !enoughAssets && (
                    <div className={'text-sm text-red-500 text-center'}>
                      You don't have enough tokens to accept this agreement
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}