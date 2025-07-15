import { TransactionDetails } from "../types/types";

export function downloadReceiptAsText(
  transactionDetails: TransactionDetails | null
) {
  if (!transactionDetails) return;

  const formattedAmount = transactionDetails.amount
    ? (Number(transactionDetails.amount) / 100).toFixed(2)
    : "0.00";

  const receiptText = `
    Payment Successful!
    -----------------------
    Transaction ID: ${transactionDetails.id || "N/A"}
    Merchant Session: ${transactionDetails.merchantSession || "N/A"}
    Merchant Reference: ${transactionDetails.merchantReference || "N/A"}
    Amount: $${formattedAmount} ${transactionDetails.currency || "NZD"}
    Request Time: ${transactionDetails.requestTime || "N/A"}
    
  `;

  const blob = new Blob([receiptText], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "payment-receipt.txt";
  link.click();
}
