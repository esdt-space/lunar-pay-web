import {SignPropsType} from "@multiversx/sdk-dapp/UI/SignTransactionsModals/types/signTransactionsModals.types";
import { BaseTransactionConfirmationScreen } from "./base-transaction-confirmation-screen.tsx";

export function ExtensionConfirmationScreen(props: SignPropsType) {
  return <BaseTransactionConfirmationScreen
    {...props}
    title={'Confirm on MultiversX DeFi Wallet'}
    subtitle={'Check your MultiversX Wallet Extension to sign the transaction.'}
  />
}