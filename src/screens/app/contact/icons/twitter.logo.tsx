import { PropsWithChildren } from "react";
import logoLoader from "./twitter-logo.svg";

export function TwitterLogo(props: PropsWithChildren) {

  const twitterUrl = "https://twitter.com/pay_lunar"

  const redirect = () => {
    window.location.href = twitterUrl
  }

  return (
    <div onClick={redirect} className="flex direction-row mb-2 mt-2 cursor-pointer">
      <img src={logoLoader} className="w-7 h-7 mr-2"/>
      <div className={''}>
        {props.children}
      </div>
    </div>
  )
}