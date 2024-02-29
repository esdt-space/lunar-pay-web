import { PropsWithChildren } from "react";

type Props = {
  userHeroTag: string;
}

export const DonationPageWrapper = (props: PropsWithChildren<Props>) => {
  const { userHeroTag, children } = props;

  return (
    <div className={'h-screen w-full relative'}>
      <div className="bg-red-500 h-96 w-full absolute">
        {userHeroTag}
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-44">
        {children}
      </div>
    </div>
  )
}
