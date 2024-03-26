export type UserAction = {
  type: string;
  count: number;
}

export type User = {
  userId: string;
  allActions: number;
  actions: UserAction[];
}

export type Props = {
  actionsList: User[] | undefined;
}

export type UserRowProps = {
  user: User;
}
