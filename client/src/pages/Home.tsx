import PaymentForm from "../components/PaymentForm";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-8">
      <div>
        <h1 className="text-4xl text-gray-200 font-extrabold mb-2 tracking-wider">
          Paystation Fully Hosted (3Party)
        </h1>
        <p className=" text-sm tracking-widest text-gray-300">
          v1/hosted/purchases + /oauth/token
        </p>
        <p className=" text-sm tracking-widest text-gray-300">
          multi FX Visa/ MC + POLi
        </p>
        <p className=" text-sm tracking-widest text-gray-300">
          styled hosted theme (paystation hosted page)
        </p>
      </div>
      <div className="mt-5 w-full max-w-2xl bg-[#f1f1f1] p-8 rounded-lg shadow-md shadow-gray-800">
        <PaymentForm />
      </div>
    </div>
  );
}

export default Home;
