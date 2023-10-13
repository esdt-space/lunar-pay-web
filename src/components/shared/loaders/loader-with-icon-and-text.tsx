import { PropsWithChildren } from "react";
import logoLoader from "@/assets/media/logo-loader.svg";

export function LoaderWithIconAndText(props: PropsWithChildren) {
  return (
    <div className={'flex flex-col p-16 items-center'}>
      <img src={logoLoader} alt={'Loading'} className={'animate-pulse grayscale opacity-10'}/>
      <div className={'text-muted-foreground mt-4 max-w-prose'}>
        {props.children}
      </div>
    </div>
  )
}