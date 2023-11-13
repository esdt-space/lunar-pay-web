import { Link } from "react-router-dom";

type Props = {
  text: string;
  location: string;
}

export function HeaderLink(props: Props) {
  return (
    <li>
      <Link to={props.location} className={'block transition hover:text-primary md:px-4'}>
        {props.text}
      </Link>
    </li>
  )
}
