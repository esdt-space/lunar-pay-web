import moment from "moment";
import { Dot, Wallet } from "lucide-react";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";

import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Separator } from "@/components/ui/separator.tsx";

import { formatFrequency } from "@/utils";
import { useTokensMap } from "@/core/tokens";
import { Subscription } from "@/features/subscriptions/models";
import { useTriggerSubscriptionMutation } from "@/features/subscriptions/hooks";

type Props = {
  subscription: Subscription;
  signedList?: boolean;
}

export function SubscriptionDetails(props: Props){
  const { subscription, signedList } = props;

  const noMembers = subscription.accountsCount === 0

  const tokensMap = useTokensMap();
  const token = tokensMap[subscription.tokenIdentifier];

  const { mutate: triggerSubscription, isLoading} = useTriggerSubscriptionMutation(subscription.id);

  const triggerSubscriptionButtonHandler = () => {
    triggerSubscription(subscription.subscriptionIdentifier)
  }

  return (
    <div className="flex max-lg:flex-col justify-between gap-4">
      <div className="flex-1">
        <div className={'text-muted-foreground text-sm'}>
          Created on {moment(subscription.createdAt).format('ll')}
        </div>
        <div className={'flex justify-between'}>
          <div className="flex items-center">
            <div className="text-2xl font-black">
              <FormatAmount
                token={token.identifier}
                decimals={token.decimals}
                value={subscription.fixedAmount as string}
              />
            </div>
            <Badge
              variant={'outline'}
              className={'ml-2 text-purple-800 border-purple-800'}
            >
              {formatFrequency(subscription.frequency)}
            </Badge>
          </div>

          {!signedList && <div className="flex space-x-2 items-center">
            <Button
              size={'sm'}
              disabled={isLoading || noMembers}
              onClick={triggerSubscriptionButtonHandler}
            >
              Claim
              <Wallet className={'ml-2 w-3 h-3'} />
            </Button>
          </div>}
        </div>

        <div>{subscription.accountsCount} members</div>

        <div className={''}>
        </div>
      </div>

      <div><Separator orientation="vertical"/></div>

      <div className="flex flex-col flex-1 bg-slate-50 space-y-3 rounded p-4">
        <div>
          {subscription.description ?? <span className={'text-sm text-muted-foreground'}>No description added</span>}
        </div>
        <Separator/>
        <div>
          {subscription.benefits?.length === 0 && (
            <span className={'text-sm text-muted-foreground'}>No benefits added</span>
          )}

          {(subscription.benefits ?? []).map((item, index) =>
            <div key={index} className="flex"><Dot/> {item}</div>
          )}
        </div>
      </div>
    </div>
  )
}