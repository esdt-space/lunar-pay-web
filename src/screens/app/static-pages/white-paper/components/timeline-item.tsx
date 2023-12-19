type Props = {
  boldcontent?: string,
  content?: string,
  lineone: string,
  linetwo: string,
  linethree?: string
}

export const TimelineItem = ({boldcontent,content,lineone,linetwo,linethree}: Props) => {
  return <li className="mb-12">
    <p className="mb-4 font-semibold">{boldcontent}<span className="font-normal">{content}</span></p>
    <p className="mb-4">{lineone}</p>
    <p className="mb-4">{linetwo}</p>
    <p className="mb-4">{linethree}</p>
  </li>
}