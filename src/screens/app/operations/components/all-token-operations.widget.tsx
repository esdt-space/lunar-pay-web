import { tokenTransfers } from "./mock-data"
import { OperationsTable } from "./operations-table"

export const AllOperationsWidget = () => {
  return <div>
    <OperationsTable operationsList={tokenTransfers} operations="all" />
  </div>
}
