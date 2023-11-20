import moment from "moment";
import { Dot, Wallet } from "lucide-react";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";

import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Separator } from "@/components/ui/separator.tsx";

import { formatFrequency } from "@/utils";
import { useTokensMap } from "@/core/tokens";
import { PaymentAgreement } from "@/features/payment-agreements/models";
import { useTriggerPaymentAgreementMutation } from "@/features/payment-agreements/hooks";

type Props = {
  agreement: PaymentAgreement;
  signedList?: boolean;
}

export function AgreementDetails(props: Props){
  const { agreement, signedList } = props;

  const noMembers = agreement.accountsCount === 0

  const tokensMap = useTokensMap();
  const token = tokensMap[agreement.tokenIdentifier];

  const { mutate: triggerAgreement, isLoading} = useTriggerPaymentAgreementMutation(agreement._id);

  const triggerAgreementButtonHandler = () => {
    triggerAgreement(agreement.agreementIdentifier)
  }

  return (
    <div className="flex max-lg:flex-col justify-between gap-4">
      <div className="flex-1">
        <div className={'text-muted-foreground text-sm'}>
          Created on {moment(agreement.createdAt).format('ll')}
        </div>
        <div className={'flex justify-between'}>
          <div className="flex items-center">
            <div className="text-2xl font-black">
              <FormatAmount
                token={token.identifier}
                decimals={token.decimals}
                value={agreement.fixedAmount as string}
              />
            </div>
            <Badge
              variant={'outline'}
              className={'ml-2 text-purple-800 border-purple-800'}
            >
              {formatFrequency(agreement.frequency)}
            </Badge>
          </div>

          {!signedList && <div className="flex space-x-2 items-center">
            <Button
              size={'sm'}
              disabled={isLoading || noMembers}
              onClick={triggerAgreementButtonHandler}
            >
              Claim
              <Wallet className={'ml-2 w-3 h-3'} />
            </Button>
          </div>}
        </div>

        <div>{agreement.accountsCount} members</div>

        <div className={''}>
        </div>
      </div>

      <div><Separator orientation="vertical"/></div>

      <div className="flex flex-col flex-1 bg-slate-50 space-y-3 rounded p-4">
        <div>
          {agreement.description ?? <span className={'text-sm text-muted-foreground'}>No description added</span>}
        </div>
        <Separator/>
        <div>
          {agreement.benefits?.length === 0 && (
            <span className={'text-sm text-muted-foreground'}>No benefits added</span>
          )}

          {(agreement.benefits ?? []).map((item, index) =>
            <div key={index} className="flex"><Dot/> {item}</div>
          )}
        </div>
      </div>
    </div>
  )
}