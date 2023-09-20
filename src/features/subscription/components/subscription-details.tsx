import {Check} from "lucide-react";

const features = [
  'Unlimited ad-free movies and TV shows',
  'Watch on 4 supported devices at a time',
  'Add up to 2 extra members who don\'t live with you',
  'Watch in Ultra HD',
];

export function SubscriptionDetails() {
  return (
    <section className={'flex flex-col gap-8'}>
      <h1 className={'text-3xl font-bold'}>Netflix</h1>

      <div className={''}>
        <h3 className={'text-slate-600'}>Subscribe to Netflix Premium</h3>
        <div className={'text-4xl font-black'}>1 EGLD<span className={'font-medium'}>/month</span></div>
      </div>

      <div className={'flex flex-col gap-3'}>
        {features.map((feature, index) => (
          <div key={`feature-${index}`} className={'flex gap-3 items-center'}>
            <Check className={'text-primary'} />
            <div>{feature}</div>
          </div>
        ))}
      </div>
    </section>
  )
}