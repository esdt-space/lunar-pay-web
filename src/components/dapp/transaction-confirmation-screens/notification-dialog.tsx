import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { useGetNotification } from "@multiversx/sdk-dapp/hooks";

import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog.tsx";

export function NotificationDialog() {
  const [isOpen, setIsOpen] = useState(true);
  const {notification, clearNotification} = useGetNotification();

  useEffect(() => {
    if(!isOpen) {
      clearNotification();
      setIsOpen(true);
    }
  }, [isOpen]);

  if (notification === undefined)
    return null;

  return <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <DialogContent className={'p-10 bg-destructive/80'}>
      <DialogHeader>
        <DialogTitle className={'flex flex-row text-destructive-foreground items-center'}>
          <AlertTriangle className={'mr-1 w-4 h-4'} />
          {notification.title}
        </DialogTitle>
      </DialogHeader>
      <DialogDescription className={'font-medium text-destructive-foreground'}>
        {notification?.description}
      </DialogDescription>
      <Button onClick={() => setIsOpen(false)}>Close</Button>
    </DialogContent>
  </Dialog>
}