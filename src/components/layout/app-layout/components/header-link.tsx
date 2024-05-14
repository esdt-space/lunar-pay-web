import { NavLink } from "react-router-dom";
import {cn} from "@/theme/utils.ts";

import { DropdownMenuIcon } from "./dropdown-menu-icon";

type Props = {
  text: string;
  location: string;
  subtitle?: string;
  isDropdown?: boolean;
}

export function HeaderLink(props: Props) {
  const { text, location, subtitle, isDropdown } = props;

  return (
    <li className={`${isDropdown && 'w-64 p-2 rounded-lg hover:bg-slate-100'}`}>
      <div className={'flex items-center'}>
        <div>
          {isDropdown && <DropdownMenuIcon feature={text} />}
        </div>
        <div>
          <NavLink to={location} className={({isActive}) => cn([
            'block transition md:px-4',
            isActive && `text-primary`
          ])}>
            {text}
          </NavLink>
          {subtitle && <p className={'ml-4 text-xs font-semibold'}>{subtitle}</p>}
        </div>
      </div>
    </li>
  )
}
