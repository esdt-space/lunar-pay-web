import { useEffect, useState } from "react";
import { useGetSuccessfulTransactions } from "@multiversx/sdk-dapp/hooks";

export function useSuccessfulTransactionCallback(callback: () => unknown) {
  const { successfulTransactionsArray } = useGetSuccessfulTransactions();
  const [lastSessionIds, setLastSessionIds] = useState<string[]>([]);

  const registerSessionId = (sessionId: string | undefined) => {
    if(!sessionId) return;

    setLastSessionIds(values => [...values, sessionId])
  };

  useEffect(() => {
    const matchedSessionIds = lastSessionIds.filter(sessionId =>
      successfulTransactionsArray.find(([id]) => id === sessionId)
    );

    if (matchedSessionIds.length > 0) {
      callback();

      setLastSessionIds(prevIds => prevIds.filter(id => !matchedSessionIds.includes(id)));
    }
  }, [successfulTransactionsArray]);

  return registerSessionId;
}
