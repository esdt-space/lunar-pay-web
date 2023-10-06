import { tokenTransfers } from "./mock-data"
import { OperationsTable } from "./operations-table"

export const TransfersWidget = () => {
  return <div>
    <OperationsTable operationsList={tokenTransfers} operations="transfers" />
  </div>
}
