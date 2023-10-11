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
            Tailored to Facilitate Your Needs
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <Item
              title={'Streamlined User Experience'}
              description={'Ensuring your customers can subscribe using cryptocurrency with utmost ease. In just three clicks, transform visitors into subscribers, enhancing user satisfaction and subscription rates.'}
            />

            <Item
              title={'Highly Customizable Design'}
              description={'Align your checkout aesthetics seamlessly with your brand. Modify colors, typography, and additional elements to provide a cohesive and brand-relevant user experience.'}
            />

            <Item
              title={'Effortless Technical Integration'}
              description={'Seamlessly integrate your Subscription Checkout. With a mere few lines of code, expedite your journey from implementation to operational, simplifying the development process.'}
            />

            <Item
              title={'Simple Accounting'}
              description={'Retrieve and export detailed stream data with simplicity. Our system allows effortless extraction of .csv files, aiding in maintaining clear and organized financial records.'}
            />
          </ul>
        </section>
      </div>
    </div>
  )
}