import { useEffect, useState } from "react";
import { useGetSuccessfulTransactions } from "@multiversx/sdk-dapp/hooks";

export function useSuccessfulTransactionCallback() {
  const { successfulTransactionsArray } = useGetSuccessfulTransactions();
  const [sessionIds, setSessionIds] = useState<string[]>([]);
  const [callbacks, setCallbacks] = useState<Record<string, unknown>>([]);

  const registerSessionId = (sessionId: string | undefined, callback: (sessionId) => void) => {
    if(!sessionId) return;

    setSessionIds(values => [...values, sessionId])
    setCallbacks(callbacks => ({...callbacks, [sessionId]: callback}));
  };

  useEffect(() => {
    const matchedSessionIds = sessionIds.filter(sessionId =>
      successfulTransactionsArray.find(([id]) => id === sessionId)
    );

    if (matchedSessionIds.length > 0) {
      for(const sessionId of matchedSessionIds) {
        if(callbacks[sessionId]) callbacks[sessionId]();
      }

      setSessionIds(prevIds => prevIds.filter(id => !matchedSessionIds.includes(id)));
    }
  }, [successfulTransactionsArray]);

  return registerSessionId;
}
