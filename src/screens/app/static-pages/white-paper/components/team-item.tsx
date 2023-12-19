type Props = {
  name: string,
  cofounder: string,
  founder?: string,
  content: string
}

export const TeamItem = ({name,cofounder,founder,content}: Props) => {
  return <li>
    <h2 className="font-semibold">{name}</h2>
    <p>{cofounder}</p>
    <p>{founder}</p>
    <p className="mb-4">{content}</p>
  </li>
}