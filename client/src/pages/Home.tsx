import PaymentForm from "../components/PaymentForm";
import paystationLogo from "../../../assets/paystation-logo.svg";

function Home() {
  return (
    <div className="min-h-screen flex flex-row items-center justify-center bg-black p-8 gap-20">
      <div className="w-full flex flex-col items-center">
        <img
          src={paystationLogo}
          width="400"
          height="200"
          alt="Paystation Logo"
        />
        <div className="text-start ml-40">
          <p className=" text-xs tracking-widest text-gray-400 mt-10">
            V1/hosted/purchases + /oauth/token
          </p>
          <p className=" text-xs tracking-widest text-gray-400">
            Multi FX Visa/ MC + POLi
          </p>
          <p className=" text-xs tracking-widest text-gray-400">
            Styled hosted theme (paystation hosted page)
          </p>
          <p className=" text-xs tracking-widest text-gray-400">
            React.js - Vite - Typescript - TailwindCSS - Express
          </p>
          <p className=" text-xs tracking-widest text-gray-400">
            Backend .env file with Paystation ID, Gateway ID, Client ID, Client
            Secret
          </p>
        </div>
      </div>
      <div className="mt-5 w-2/3 mr-20">
        <PaymentForm />
      </div>
    </div>
  );
}

export default Home;
