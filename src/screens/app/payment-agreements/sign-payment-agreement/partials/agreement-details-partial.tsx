import { Check } from "lucide-react";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";

import { useTokensMap } from "@/core/tokens";
import { formatFrequencyForSignAgreement } from "@/utils";
import { PaymentAgreement } from "@/features/payment-agreements/models";

type Props = {
  agreement: PaymentAgreement
}

export function AgreementDetailsPartial(props: Props) {
  const { agreement } = props;
  const tokensMap = useTokensMap();
  const token = tokensMap[agreement.tokenIdentifier];

  return (
    <section className={'flex flex-col gap-8'}>
      <h1 className={'text-3xl font-bold'}>{agreement.ownerName}</h1>

      <div className={''}>
        <h3 className={'text-slate-600'}>
          Subscribe to {agreement.itemName}
        </h3>
        <div className={'flex text-4xl font-black items-end'}>
          <div>
            <FormatAmount
              digits={2}
              token={token.identifier}
              decimals={token.decimals}
              value={agreement.fixedAmount as string}
            />
          </div>
          <span className={'font-medium'}>/{formatFrequencyForSignAgreement(agreement.frequency)}</span>
        </div>
      </div>

      <div className={'flex flex-col gap-3'}>
        {(agreement.benefits || []).map((feature, index) => (
          <div key={`feature-${index}`} className={'flex gap-3 items-center'}>
            <Check className={'text-primary'} />
            <div>{feature}</div>
          </div>
        ))}
      </div>
    </section>
  )
}