import { ArrowLeft } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { FormatAmount } from "@multiversx/sdk-dapp/UI"

import { cn } from "@/theme/utils.ts"
import { RoutesConfig } from "@/navigation"

import { Button } from "@/components/ui/button.tsx"
import { AppIcon } from "@/components/shared/app-icon.tsx"

import { useTokensMap } from "@/features/tokens"
import { useIsAuthenticated } from "@/features/auth"
import { AuthForm } from "@/features/auth/components"
import { TokenItem } from "@/features/tokens/components"
import { useAccountVaultTokens } from "@/features/vault/hooks"
import { useCreatedPaymentAgreement, useSignPaymentAgreementMutation} from "@/features/payment-agreements/hooks"

import { AgreementDetailsPartial } from "./partials/agreement-details-partial.tsx"

export const SignPaymentAgreementScreen = () => {
  // const { address } = useGetAccount()
  const { id } = useParams()
  // const navigate = useNavigate()
  const isLoggedIn = useIsAuthenticated()
  const {vaultTokens} = useAccountVaultTokens()
  const tokensMap = useTokensMap();

  const { data: agreement } = useCreatedPaymentAgreement(id);
  const { mutate: signPaymentAgreement} = useSignPaymentAgreementMutation(id);

  if(!agreement) return;

  const token = tokensMap[agreement.tokenIdentifier];
  const vaultToken = vaultTokens.find(item => item.identifier === agreement.tokenIdentifier);

  const signPaymentAgreementButtonHandler = () => {
    signPaymentAgreement(agreement.agreementIdentifier)
  }
 
  return (
    <div className="flex flex-1 flex-col">
      <div className={'pl-8 py-4'}>
        <Button variant={'ghost'} className={'gap-2'}>
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
                          digits={2}
                          decimals={token.decimals}
                          token={agreement.tokenIdentifier}
                          value={agreement.fixedAmount as string}
                        />
                        /mo
                      </div>
                    </div>

                    <div className={'flex justify-between bg-slate-100 p-4 text-lg'}>
                      <div className={'font-bold'}>Total due today</div>
                      <div className={'font-black'}>
                        <FormatAmount
                          digits={2}
                          decimals={token.decimals}
                          token={agreement.tokenIdentifier}
                          value={agreement.fixedAmount as string}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={'bg-slate-50 p-4 rounded space-y-2'}>
                  <div className={'text-sm font-medium'}>Vault balance</div>
                  {vaultToken && (
                    <TokenItem token={vaultToken} showBalances/>
                  )}
                </div>

                <div className={'text-sm p-3 ring-1 ring-slate-100 rounded shadow-sm'}>
                  By confirming this subscription, you allow Netflix to charge your wallet for this payment and future
                  payments in accordance with their terms. Your first monthly payment will be made today, and then every
                  30 days.
                </div>

                <Button variant={'primary'} className={'bg-gradient-to-r from-primary to-secondary text-white hover:text-slate-200'} onClick={signPaymentAgreementButtonHandler}>
                  Sign Payment Agreement
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}