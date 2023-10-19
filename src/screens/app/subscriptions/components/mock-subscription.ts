export const mockSubscriptions: Subscription[] = [
  {
    _id: "652d53d6148139683bc3612a",
    owner: "erd12l5ffg3vtynfl4a22ynx3veydgkqkpkccvhm247qgxem42h6qyxsfv8v8e",
    agreementType: {
      receiver: "owner-address",
      senders: [
        "sender-one",
        "sender-two",
        "sender-three",
        "sender-four"
      ],
      frequency: "Monthly",
      amountType: {
        amount: 1
      }
    },
    tokenIdentifier: "EGLD",
    whitelist: [],
    benefits: [
      "Unlimited ad-free movies and TV shows",
      "Watch on 4 supported devices at a time",
      "Add up to 2 extra members who don't live with you",
      "Watch in Ultra HD"
    ],
    createdAt: "2023-10-16T15:16:38.243Z",
    updatedAt: "2023-10-16T15:16:38.243Z",
    __v: 0,
    description: "Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device. Depending on your plan, you can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection.",
    name: "Netflix"
  },
  {
    _id: "652d53d6148139683bc3612b",
    owner: "erd12l5ffg3vtynfl4a22ynx3veydgkqkpkccvhm247qgxem42h6qyxsfv8v8e",
    agreementType: {
      receiver: "owner-address",
      senders: [
        "sender-one",
        "sender-two",
        "sender-three",
        "sender-four"
      ],
      frequency: "Monthly",
      amountType: {
        amount: 1
      }
    },
    tokenIdentifier: "EGLD",
    whitelist: [],
    benefits: [
      "Unlimited ad-free movies and TV shows",
      "Watch on 4 supported devices at a time",
      "Add up to 2 extra members who don't live with you",
      "Watch in Ultra HD"
    ],
    createdAt: "2023-10-16T15:16:38.243Z",
    updatedAt: "2023-10-16T15:16:38.243Z",
    __v: 0,
    description: "Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device. Depending on your plan, you can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection.",
    name: "Netflix"
  },
  {
    _id: "652d53d6148139683bc3612c",
    owner: "erd12l5ffg3vtynfl4a22ynx3veydgkqkpkccvhm247qgxem42h6qyxsfv8v8e",
    agreementType: {
      receiver: "owner-address",
      senders: [
        "sender-one",
        "sender-two",
        "sender-three",
        "sender-four"
      ],
      frequency: "Monthly",
      amountType: {
        amount: 1
      }
    },
    tokenIdentifier: "EGLD",
    whitelist: [],
    benefits: [
      "Unlimited ad-free movies and TV shows",
      "Watch on 4 supported devices at a time",
      "Add up to 2 extra members who don't live with you",
      "Watch in Ultra HD"
    ],
    createdAt: "2023-10-16T15:16:38.243Z",
    updatedAt: "2023-10-16T15:16:38.243Z",
    __v: 0,
    description: "Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device. Depending on your plan, you can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection.",
    name: "Netflix"
  },
]

type AgreementType = {
  receiver: string;
  senders: string[];
  frequency: string;
  amountType: {
    amount: number;
  };
};

export type Subscription = {
  _id: string;
  owner: string;
  agreementType: AgreementType;
  tokenIdentifier: string;
  whitelist: string[];
  benefits: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  description: string;
  name: string;
};