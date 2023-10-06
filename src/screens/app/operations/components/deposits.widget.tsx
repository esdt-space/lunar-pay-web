import { tokenDeposits } from "./mock-data"
import { OperationsTable } from "./operations-table"

export const DepositsWidget = () => {
  return <div>
    <OperationsTable operationsList={tokenDeposits} operations="deposits" />
  </div>
}
