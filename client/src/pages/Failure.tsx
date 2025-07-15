import { useTransaction } from "../hooks/useTransaction";

function Failure() {
  const transactionDetails = useTransaction();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-600 to-red-700">
      <div className="bg-white p-8 rounded-lg shadow-xl shadow-red-800 text-center lg:w-1/3">
        <h1 className="text-red-600 text-3xl font-extrabold mb-4">
          Payment Failed!
        </h1>
        Error Message :{" "}
        {transactionDetails?.error ?? "No error details available"}
        <a
          href="/"
          className="mt-4 block text-red-600 hover:text-blue-800 transition"
        >
          ← Go back to Home
        </a>
      </div>
    </div>
  );
}

export default Failure;
