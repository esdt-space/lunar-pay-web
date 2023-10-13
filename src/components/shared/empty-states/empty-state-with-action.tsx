import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  action: ReactNode;
}

export function EmptyStateWithAction(props: Props) {
  return (
    <div className={'flex flex-col p-16 items-center'}>
      <div className={'font-medium'}>{props.title}</div>
      <div className={'text-muted-foreground'}>{props.description}</div>
      <div className={'mt-4'}>{props.action}</div>
    </div>
  )
}