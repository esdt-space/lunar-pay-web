type Props = {
  title?: string,
  boldcontent?: string,
  content?: string,
}

export const ListItem = ({title,boldcontent,content}: Props) => {
  return <li>
    <h2 className="font-semibold mb-3">{title}</h2>
    <p className="mb-4 font-semibold">{boldcontent}<span className="font-normal">{content}</span></p>
  </li>
}