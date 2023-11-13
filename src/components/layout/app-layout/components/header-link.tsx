import { NavLink } from "react-router-dom";
import {cn} from "@/theme/utils.ts";

type Props = {
  text: string;
  location: string;
}

export function HeaderLink(props: Props) {
  return (
    <li>
      <NavLink to={props.location} className={({isActive}) => cn([
        'block transition hover:text-primary/80 md:px-4',
        isActive && `text-primary`
      ])}>
        {props.text}
      </NavLink>
    </li>
  )
}
