type Props = {
  content: string,
  lineone: string,
  linetwo: string,
  linethree?: string,
  linefour?: string
}

export const SummaryItem = ({content,lineone,linetwo,linethree,linefour}: Props) => {
  return <li>
    <p className="text-xl mb-1 mt-1">{content}</p>
    <p className="ml-4 text-lg">{lineone}</p>
    <p className="ml-4 text-lg">{linetwo}</p>
    <p className="ml-4 text-lg">{linethree}</p>
    <p className="ml-4 text-lg">{linefour}</p>
  </li>
}