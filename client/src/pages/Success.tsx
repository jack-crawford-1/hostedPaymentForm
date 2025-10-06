import { useTransaction } from "../hooks/useTransaction";
import { downloadReceiptAsText } from "../utils/downloadReceipt.ts";

function Success() {
  const transaction = useTransaction();

  const formattedAmount = transaction?.amount
    ? (Number(transaction.amount) / 100).toFixed(2)
    : null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black ">
      <div className="bg-white p-8 rounded-lg text-center lg:w-full h-screen">
        <h1 className="text-green-600 text-3xl font-extrabold mb-4 uppercase mt-40">
          Payment Successful
        </h1>

        {transaction ? (
          <div className="text-gray-700 text-lg space-y-2">
            {transaction.id && (
              <p>
                <span className="font-semibold">Transaction ID:</span>{" "}
                {transaction.id}
              </p>
            )}
            {transaction.merchantSession && (
              <p>
                <span className="font-semibold">Merchant Session:</span>{" "}
                {transaction.merchantSession}
              </p>
            )}
            {formattedAmount && (
              <p>
                <span className="font-semibold">Amount:</span> $
                {formattedAmount} {transaction.currency}
              </p>
            )}

            {transaction.requestTime && (
              <p>
                <span className="font-semibold">Request Time:</span>{" "}
                {transaction.requestTime}
              </p>
            )}

            {transaction.merchantReference && (
              <p>
                <span className="font-semibold">Merch Ref:</span>{" "}
                {transaction.merchantReference}
              </p>
            )}
          </div>
        ) : (
          <p className="text-gray-500">Loading transaction details...</p>
        )}

        <button
          onClick={() => downloadReceiptAsText(transaction)}
          className="mt-6 w-1/5 px-6 py-3 bg-slate-800 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all"
        >
          📄 Download Receipt (.txt)
        </button>

        <a
          href="/"
          className="mt-4 block text-slate-800 hover:text-blue-800 transition"
        >
          ← Go back to Home
        </a>
      </div>
    </div>
  );
}

export default Success;
