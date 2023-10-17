import { Link } from "react-router-dom";
import { RoutesConfig } from "@/navigation";

type Props = {
  title?: string;
  subtitle?: string;
  description: string;
  linkLocation?: string;
}

export function JoinLunarPayRevolution(props: Props) {
  return (
    <div className={"flex flex-col container lg:mx-auto items-center text-center"}>
      <h4 className="text-4xl font-bold text-gray-900 mb-1 pt-10">
        {props.title ?? "Join the Lunar Pay Revolution"}
      </h4>

      {props.subtitle && (
        <h5 className="text-xl font-medium text-gray-400 mb-4">{props.subtitle}</h5>
      )}

      <p className={'my-8 max-w-4xl'}>{props.description}</p>

      <div className={'items-center text-center'}>
        <Link
          className={'rounded-full bg-gradient-to-br from-primary to-secondary py-2.5 px-8 self-start hover:px-10 transition-all duration-300 items-center'}
          to={props.linkLocation ?? RoutesConfig.dashboard}
        >
          <span className={'text-sm text-white font-semibold'}>Get Started</span>
        </Link>
      </div>
    </div>
  )
}