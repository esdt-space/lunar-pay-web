export type UserAction = {
  type: string;
  count: number;
}

export type User = {
  _id: string;
  allActions: number;
  actions: UserAction[];
}

export type Props = {
  actionsList: any[] | undefined;
}

export type UserRowProps = {
  user: User;
}
