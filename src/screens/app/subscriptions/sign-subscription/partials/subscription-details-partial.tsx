import { Check } from "lucide-react";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";

import { useTokensMap } from "@/core/tokens";
import { formatFrequencyForSignSubscription } from "@/utils";
import { Subscription } from "@/features/subscriptions/models";

type Props = {
  subscription: Subscription
}

export function SubscriptionDetailsPartial(props: Props) {
  const { subscription } = props;
  const tokensMap = useTokensMap();
  const token = tokensMap[subscription.tokenIdentifier];

  return (
    <section className={'flex flex-col gap-8'}>
      <h1 className={'text-3xl font-bold'}>{subscription.ownerName}</h1>

      <div className={''}>
        <h3 className={'text-slate-600'}>
          Subscribe to {subscription.itemName}
        </h3>
        <div className={'flex text-4xl font-black items-end'}>
          <div>
            <FormatAmount
              digits={2}
              token={token.identifier}
              decimals={token.decimals}
              value={subscription.fixedAmount as string}
            />
          </div>
          <span className={'font-medium'}>/{formatFrequencyForSignSubscription(subscription.frequency)}</span>
        </div>
      </div>

      <div className={'flex flex-col gap-3'}>
        {(subscription.benefits || []).map((feature, index) => (
          <div key={`feature-${index}`} className={'flex gap-3 items-center'}>
            <Check className={'text-primary'} />
            <div>{feature}</div>
          </div>
        ))}
      </div>
    </section>
  )
}