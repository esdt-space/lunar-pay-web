import { ContainedScreen } from "@/components/prefab/contained-screen"
import { cn } from "@/theme/utils"
import { ReactNode } from "react";
import { Link } from "react-router-dom";

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

export const ContactScreen = () => {
  return (
    <ContainedScreen>
      <div className={cn(['relative flex isolate',])}>
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900 md:pt-10">
            Contact Us
          </h2>
          <p>
            Want to get in touch? Here's how you can reach us.
          </p>
          <div className="flex content-between">
            <Item
              linkLocation={""}
              className={'hover:shadow-md cursor-pointer'}
              title={'Email us'}
              description={'phone'}
            />
            
            <Item
              linkLocation={""}
              className={'hover:shadow-md cursor-pointer'}
              title={'Call us'}
              description={'phone'}
            />

            <Item
              linkLocation={""}
              className={'hover:shadow-md cursor-pointer'}
              title={'Telegram'}
              description={'telegram link'}
            />

            <Item
              linkLocation={""}
              className={'hover:shadow-md cursor-pointer'}
              title={'Social media'}
              description={'links'}
            />
          </div>
        </section>
      </div>
    </ContainedScreen>
  )
}