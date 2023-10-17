import {cn} from "@/theme/utils.ts";

type ItemProps = {
  title: string;
  description: string;
}

function Item(props: ItemProps) {
  return (
    <li className="relative bg-white bg-opacity-90 p-8 rounded-md ring-1 ring-slate-200">
      <div
        className="relative bg-gradient-to-br from-primary to-secondary w-4 h-4 mb-3 opacity-80">&nbsp;</div>
      <div className={'flex-1 space-y-1'}>
        <h2 className="text-xl font-semibold text-gray-900 text-left">{props.title}</h2>
        <p className="text-gray-700 text-left max-w-md">{props.description}</p>
      </div>
    </li>
  )
}

export function FeaturesPartial() {
  return (
    <div className={cn([
      'relative flex py-8 isolate',
      'before:absolute before:inset-0',
      `before:z-[2] before:shadow-[rgb(249,250,251)_0px_150px_200px_inset,rgb(249,250,251)_0px_-200px_200px_inset]`,
      `after:absolute after:inset-0 after:z-[1] after:bg-gradient-to-br after:from-primary/20 after:to-secondary/20`,
      `after:[mask-image:url('/assets/media/patterns/waves-pattern.svg')] after:[mask-size:64px_32px] after:[mask-repeat:repeat]`,
    ])}>
      <div className="container mx-auto p-10 pb-40 z-[3]">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 pt-10">
            Why Choose Lunar Pay Portfolio Management?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <Item
              title={'Multi-Recipient Transfers'}
              description={'Streamline your transactions by distributing tokens to multiple recipients simultaneously. Our efficient system ensures both time and cost savings, simplifying your asset management.'}
            />

            <Item
              title={'Comprehensive Analytics'}
              description={'Stay ahead of the curve with real-time tracking and reporting. Lunar Pay provides you with a comprehensive view of your portfolio\'s performance, allowing you to make data-driven investment choices.'}
            />

            <Item
              title={'Adaptable and Future-Ready'}
              description={'Our platform grows and evolves with the dynamic crypto world, keeping you always ahead of the curve.'}
            />

            <Item
              title={'Security and Trust'}
              description={'Rest easy knowing that your assets are secure. Lunar Pay prioritizes the highest security standards, ensuring your investments are protected against threats.'}
            />
          </ul>
        </section>
      </div>
    </div>
  )
}