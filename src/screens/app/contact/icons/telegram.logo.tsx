import { PropsWithChildren } from "react";
import logoLoader from "./telegram-logo.svg";

export function TelegramLogo(props: PropsWithChildren) {

  const telegramUrl = "https://web.telegram.org/a/#-1002098653927"

  const redirect = () => {
    window.location.href = telegramUrl
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