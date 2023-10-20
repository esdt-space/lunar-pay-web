import { Check } from "lucide-react";
import { PaymentAgreement } from "@/features/payment-agreements/models";

type Props = {
  agreement: PaymentAgreement
}

export function AgreementDetailsPartial(props: Props) {
  const { agreement } = props;

  return (
    <section className={'flex flex-col gap-8'}>
      <h1 className={'text-3xl font-bold'}>{agreement.name}</h1>

      <div className={''}>
        <h3 className={'text-slate-600'}>{agreement.description}</h3>
        <div className={'text-4xl font-black'}>1 EGLD<span className={'font-medium'}>/month</span></div>
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