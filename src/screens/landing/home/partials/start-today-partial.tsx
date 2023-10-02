import {Button} from "@/components/ui/button.tsx";
import {Book, ChevronRight, File} from "lucide-react";
import {ReactNode} from "react";
import {Link} from "react-router-dom";
import {cn} from "@/theme/utils.ts";

type ExploreItemProps = {
  title: string;
  description: string;
  icon: ReactNode;
  location: string;
}

function ExploreItem(props: ExploreItemProps) {
  return (
    <Link to={props.location} className={cn([
      "col-span-full md:max-lg:col-span-1",
      "flex justify-between items-center p-4",
      "bg-white bg-opacity-5 hover:bg-opacity-20 transition-colors duration-500",
      "border border-gray-300 border-opacity-50 hover:border-opacity-100 rounded-md",
    ])}>
      <div className="flex items-start gap-2">
        {props.icon}
        <div>
          <h3 className="leading-none font-semibold">{props.title}</h3>
          <p className="mt-1 text-sm">{props.description}</p>
        </div>
      </div>
      <ChevronRight className={'w-4 h-4'} />
    </Link>
  )
}

export function StartTodayPartial() {
  return (
      <section className={cn([
        "container bg-gradient-to-br from-primary to-secondary text-white",
        "2xl:rounded-2xl box-border"
      ])}>
        <div className="py-24 lg:px-6 grid grid-cols-12 gap-y-12 lg:gap-x-12">
          <div className="flex flex-col gap-5 col-span-full lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold">Get started today</h2>

            <div className="text-lg text-white font-semibold leading-normal">
              Embark on a journey where financial possibilities are boundless. Lunar Pay bridges the gap, allowing you to harness the strengths of traditional payment systems seamlessly within the decentralized realm.
            </div>

            <div className="flex gap-4">
              <Button variant={'outline'} className={'!bg-transparent hover:!text-white'}>
                Contact us
                <ChevronRight className={'w-4 h-4 ml-2'} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 col-span-full lg:col-span-5">
            <ExploreItem
              location={''}
              title={'Documentation'}
              description={'Explore and familiarize yourself with our APIs'}
              icon={<File className={'w-4 h-4'} />}
            />

            <ExploreItem
              location={''}
              title={'Getting started'}
              description={'Quickly get up to speed'}
              icon={<Book className={'w-4 h-4'} />}
            />
          </div>
        </div>
      </section>
  )
}