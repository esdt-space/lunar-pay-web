import { TableCell } from "@/components/ui/table"
import { RoutesConfig } from "@/navigation"
import { useNavigate } from "react-router-dom"
import { TokenOperation } from "../../models"

type Props = {
  tokenOperationItem: TokenOperation;
}

export const AgreementNameCell = ({tokenOperationItem}: Props) => {
  const navigate = useNavigate()

  const getOperation = () => {
    navigate(`${RoutesConfig.paymentAgreements}/${tokenOperationItem.agreement._id}`)
  }
  
  return <TableCell
    onClick={getOperation}
    className={'max-lg:hidden text-muted-foreground cursor-pointer'}
  >
    <span className={'flex items-center'}>
      <span className={'ring-1 bg-slate-50 ring-slate-200 px-2 py-1 rounded-sm whitespace-nowrap'}>
        {tokenOperationItem.agreement.itemName}
      </span>
    </span>
  </TableCell>
}