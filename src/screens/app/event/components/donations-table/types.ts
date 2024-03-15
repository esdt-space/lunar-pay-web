export type User = {
  owner: string;
  amount: string;
  tokenIdentifier: string;
}

export type Props = {
  usersDonationsList: any[] | undefined;
}

export type UserRowProps = {
  user: User;
}
