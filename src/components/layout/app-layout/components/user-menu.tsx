import {LogOut, User} from "lucide-react";
import { logout } from "@multiversx/sdk-dapp/utils";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

import { RoutesConfig } from "@/navigation";
import { formatAddress } from "@/utils/address";

import { Button} from "@/components/ui/button.tsx";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.tsx";

import { CopyIconComponent } from "./copy-icon";

export const UserMenu = () => {
  const { address } = useGetAccount()
  const signOutHandler = () => logout(RoutesConfig.home)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={'sm'}>
          <span className="text-xs max-w-[80px] truncate">{address}</span>
          <User className={'w-4 h-4'} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-4">
        <ul className="space-y-6 text-base font-medium flex flex-col">
          <li className="flex items-center space-x-4 bg-muted p-2 rounded">
            <span className="text-xs">{formatAddress(address)}</span>
            <CopyIconComponent address={address}/>
          </li>
          <li onClick={signOutHandler} className="">
            <Button variant={'ghost'} size={'sm'} className={'flex w-full justify-between'}>
              Logout
              <LogOut className={'w-4 h-4 ml-2'} />
            </Button>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  )
}
