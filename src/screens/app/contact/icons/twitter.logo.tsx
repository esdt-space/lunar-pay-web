import { PropsWithChildren } from "react";
import logoLoader from "./twitter-logo.svg";

export function TwitterLogo(props: PropsWithChildren) {
  return (
    <div className="flex direction-row mb-2 mt-2 cursor-pointer">
      <img src={logoLoader} className="w-7 h-7 mr-2"/>
      <div className={''}>
        {props.children}
      </div>
    </div>
  )
}