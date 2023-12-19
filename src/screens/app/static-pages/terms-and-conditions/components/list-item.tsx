type Props = {
  title: string,
  content: string
}

export const ListItem = ({title, content}: Props) => {
  return <li>
    <h2 className="font-semibold">{title}</h2>
    <p className="mb-4">{content}</p>
  </li>
}

