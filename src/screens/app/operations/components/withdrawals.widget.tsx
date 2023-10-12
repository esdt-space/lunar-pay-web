import { tokenWithdraws } from "./mock-data"
import { OperationsTable } from "./operations-table"

export const WithdrawalsWidget = () => {
  return <div>
    <OperationsTable operationsList={tokenWithdraws} operations="withdraws" />
  </div>
}
