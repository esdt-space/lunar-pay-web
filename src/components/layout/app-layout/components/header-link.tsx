import { NavLink } from "react-router-dom";
import {cn} from "@/theme/utils.ts";

import { DropdownMenuIcon } from "./dropdown-menu-icon";

type Props = {
  menuItem: string;
  location: string;
  subtitle?: string;
  isDropdown?: boolean;
  menuIconLabel?: string;
}

export function HeaderLink(props: Props) {
  const { menuItem, location, subtitle, isDropdown, menuIconLabel } = props;

  return (
    <li className={`${isDropdown && 'w-64 p-2 rounded-lg hover:bg-slate-100'}`}>
      <div className={'flex items-center'}>
        <div>
          {isDropdown && <DropdownMenuIcon feature={menuIconLabel} />}
        </div>
        <div>
          <NavLink to={location} className={({isActive}) => cn([
            'block transition md:px-4',
            isActive && `text-primary`
          ])}>
            {menuItem}
          </NavLink>
          {subtitle && <p className={'ml-4 text-xs font-semibold'}>{subtitle}</p>}
        </div>
      </div>
    </li>
  )
}
