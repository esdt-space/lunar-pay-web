import { HandCoins, HandHeart, RotateCw } from "lucide-react";

export const DropdownMenuIcon = ({feature}: {feature?: string}) => {
  switch (feature) {
    case 'donations_icon': {
      return <HandHeart />
    }
    case 'subscriptions_icon': {
      return <RotateCw />
    }
    default : {
      return <HandCoins />
    }
  }
}
