import { PropsWithChildren } from "react";

type Props = {
  userHeroTag: string;
  backgroundImage?: string;
}

export const DonationPageWrapper = (props: PropsWithChildren<Props>) => {
  const { userHeroTag, backgroundImage, children } = props;

  return (
    <div className={'h-screen w-full relative'}>
      <div className="flex justify-center items-center overflow-hidden h-96 w-full absolute">
        <img className="w-full h-full object-cover" src={backgroundImage} />
      </div>
      <div className="absolute left-1/3 transform -translate-x-1/3 mt-24 text-2xl font-bold">
        {userHeroTag}
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-44">
        {children}
      </div>
    </div>
  )
}
