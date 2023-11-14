import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/theme/utils.ts";
import { RoutesConfig } from "@/navigation";
import {ContainedScreen} from "@/components/prefab/contained-screen.tsx";

type ItemProps = {
  title: ReactNode;
  className?: string;
  linkLocation: string;
  description: string;
}

function Item(props: ItemProps) {
  return (
    <Link to={props.linkLocation} className={cn([
      "relative bg-white bg-opacity-90 p-8 rounded-md ring-1 ring-slate-200",
      props.className
    ])}>
      <div
        className="relative bg-gradient-to-br from-primary to-secondary w-4 h-4 mb-3 opacity-80">&nbsp;</div>
      <div className={'flex-1 space-y-1'}>
        <h2 className="text-lg font-semibold text-gray-900 text-left">{props.title}</h2>
        <p className="text-sm text-slate-700 text-left max-w-md">{props.description}</p>
      </div>
    </Link>
  )
}

export function CreatePaymentAgreementIndexScreen() {
  return (
    <ContainedScreen>
      <div className={cn(['relative flex isolate',])}>
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900 md:pt-10">
            Select Agreement Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Item
              linkLocation={RoutesConfig.createPaymentAgreementSubscription}
              className={'hover:shadow-md cursor-pointer'}
              title={'Recurring Subscription'}
              description={'Designed for transactions that occur at regular intervals, this option is perfect for managing recurring subscriptions, consistent donations, or regular contributions to content creators.'}
            />

            <Item
              linkLocation={""}
              className={'grayscale cursor-not-allowed bg-slate-100 opacity-80'}
              title={
                <span>
                  <span>Period-Bound Allocation</span>
                  <span className={'ml-2 text-sm text-muted-foreground'}>coming soon</span>
                </span>
              }
              description={'For allocations set within specific timeframes. Unclaimed amounts during a cycle don\'t carry over to the next, ensuring consistent budgeting each period. Ideal for operational budgets and set departmental allocations.'}
            />
          </div>
        </section>
      </div>
    </ContainedScreen>
  )
}