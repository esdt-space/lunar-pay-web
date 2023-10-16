import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  action: ReactNode;
}

export function EmptyStateWithAction(props: Props) {
  return (
    <div className={'flex flex-col items-center'}>
      <div className={'text-md font-medium'}>{props.title}</div>
      <div className={'text-sm text-muted-foreground'}>{props.description}</div>
      <div className={'mt-4'}>{props.action}</div>
    </div>
  )
}