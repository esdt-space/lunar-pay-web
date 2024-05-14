import { HandCoins, HandHeart, RotateCw } from "lucide-react";

export const DropdownMenuIcon = ({feature}: {feature: string}) => {
  switch (feature) {
    case 'Donations': {
      return <HandHeart />
    }
    case 'Subscriptions': {
      return <RotateCw />
    }
    default : {
      return <HandCoins />
    }
  }
}
