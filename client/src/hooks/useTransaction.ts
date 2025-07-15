import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TransactionDetails } from "../types/types";

function useTransaction() {
  const [transactionDetails, setTransactionDetails] =
    useState<TransactionDetails | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id") || "";
    const merchantSession = searchParams.get("merchant_session") || "";
    const amount = searchParams.get("amount")
      ? Number(searchParams.get("amount"))
      : 0;
    const currency = searchParams.get("currency") || "NZD";
    const requestTime =
      searchParams.get("request_time") || new Date().toLocaleString();
    const merchantReference =
      searchParams.get("merchant_reference") ?? undefined;

    setTransactionDetails({
      id,
      merchantSession,
      amount,
      currency,
      requestTime,
      merchantReference,
    });
  }, [searchParams]);

  return transactionDetails;
}

export { useTransaction };
