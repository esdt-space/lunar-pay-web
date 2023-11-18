import {ReactNode, useEffect, useState} from "react";
import {SignPropsType} from "@multiversx/sdk-dapp/UI/SignTransactionsModals/types/signTransactionsModals.types";

import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog.tsx";

type Props = SignPropsType & {
  title: ReactNode;
  subtitle: ReactNode;
}

export function BaseTransactionConfirmationScreen(props: Props) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if(!isOpen) props.handleClose();
  }, [isOpen]);

  return <Dialog open onOpenChange={setIsOpen}>
    <DialogContent className={'p-10 bg-gradient-to-br from-secondary to-primary'}>
      <DialogHeader className={'text-primary-foreground'}>
        <DialogTitle>Sign Transaction</DialogTitle>
      </DialogHeader>
      <DialogDescription className={'flex flex-col text-primary-foreground font-medium'}>
        <span>{props.subtitle}</span>
        <span>You will be asked to sign {props.transactions.length} transactions.</span>
      </DialogDescription>
      <Button onClick={() => setIsOpen(false)}>Close</Button>
    </DialogContent>
  </Dialog>
}