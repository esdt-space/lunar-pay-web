import { PropsWithChildren } from "react";
import logoLoader from "./twitter-logo.svg";

export function TwitterLogo(props: PropsWithChildren) {
  return (
    <div>
      <img src={logoLoader}/>
      <div className={'text-center text-sm text-muted-foreground mt-4 max-w-prose'}>
        {props.children}
      </div>
    </div>
  )
}