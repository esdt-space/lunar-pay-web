import { PropsWithChildren } from "react";
import logoLoader from "./telegram-logo.svg";

export function TelegramLogo(props: PropsWithChildren) {
  return (
    <div>
      <img src={logoLoader}/>
      <div className={'text-center text-sm text-muted-foreground mt-4 max-w-prose'}>
        {props.children}
      </div>
    </div>
  )
}