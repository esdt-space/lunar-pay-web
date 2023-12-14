import { PropsWithChildren } from "react";
import { SocialIcon } from 'react-social-icons'

const TelegramIcon = <SocialIcon style={{ height: '24px', width: '24px' }} url="https://web.telegram.org/" />

export function TelegramLogo(props: PropsWithChildren) {

  const telegramUrl = "https://web.telegram.org/a/#-1002098653927"

  const redirect = () => {
    window.location.href = telegramUrl
  }

  return (
    <div onClick={redirect} className="flex direction-row mb-2 mt-2 cursor-pointer space-x-2">
      {TelegramIcon}
      <div className={''}>
        {props.children}
      </div>
    </div>
  )
}