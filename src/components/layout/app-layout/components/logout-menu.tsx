import { formatAddress } from "@/utils/address";
import { CopyIconComponent } from "./copy-icon";
import { HeaderLink } from "./header-link";

type Props = {
  address: string;
  logoutFn: () => void;
}
 
export const LogoutMenu = (props: Props) => {
  const {address, logoutFn} = props

  return (
    <ul className="space-y-6 text-base font-medium flex flex-col">
      <div className="flex space-x-4">
        <span className="text-sm font-semibold">{formatAddress(address)}</span>
        <CopyIconComponent address={address} />
      </div>
      <div onClick={logoutFn} className="mx-auto">
        <HeaderLink text={'Logout'} location={""} />
      </div>
    </ul>
  )
}
