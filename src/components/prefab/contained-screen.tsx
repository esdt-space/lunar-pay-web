import * as React from "react";
import { cn } from "@/theme/utils.ts";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export function ContainedScreen(props: Props) {
  return (
    <div className={cn([
      'container mx-auto p-4 max-sm:py-8 sm:p-12 xl:p-16',
      props.className ?? '',
    ])}>
      {props.children}
    </div>
  )
}