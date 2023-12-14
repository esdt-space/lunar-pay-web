import { PropsWithChildren } from "react";
import { SocialIcon } from 'react-social-icons'

const TwitterIcon = <SocialIcon style={{ height: '24px', width: '24px' }} url="https://twitter.com" />

export function TwitterLogo(props: PropsWithChildren) {

  const twitterUrl = "https://twitter.com/pay_lunar"

  const redirect = () => {
    window.location.href = twitterUrl
  }

  return (
    <div onClick={redirect} className="flex direction-row mb-2 mt-2 cursor-pointer space-x-2">
      {TwitterIcon}
      <div className={''}>
        {props.children}
      </div>
    </div>
  )
}