import PaymentForm from "../components/PaymentForm";
import paystationLogo from "../../../assets/paystation-logo.svg";

function Home() {
  return (
    <div className="min-h-screen flex md:flex-row flex-col items-center justify-center bg-black md:p-8 md:gap-20 p-10 md:pb-0 pb-20">
      <div className="w-full flex flex-col items-center">
        <img
          src={paystationLogo}
          width="400"
          height="200"
          alt="Paystation Logo"
        />
        {/* Updated Overview Section */}
        <div className="text-start md:ml-40 mt-10 text-gray-400 max-w-md">
          <p className="mb-6 text-sm text-gray-300">
            Demonstrating a secure payment integration using Paystation's hosted
            solution.
          </p>

          <h3 className="font-bold tracking-wider text-white mb-2">
            KEY FEATURES
          </h3>
          <ul className="list-disc list-inside text-xs tracking-widest space-y-1">
            <li>Integrates with Paystation's V1 API endpoints</li>
            <li>Supports Multi-Currency (FX) for Visa & Mastercard</li>
            <li>POLi payment option enabled</li>
            <li>Custom-styled theme on the Paystation hosted page</li>
          </ul>

          <h3 className="font-bold tracking-wider text-white mt-6 mb-2">
            TECH STACK
          </h3>
          <ul className="list-disc list-inside text-xs tracking-widest space-y-1">
            <li>
              <span className="font-semibold">Frontend:</span> React, Vite,
              TypeScript, Tailwind CSS
            </li>
            <li>
              <span className="font-semibold">Backend:</span> Express.js
            </li>
            <li>
              <span className="font-semibold">Configuration:</span> Secure
              credentials via backend .env file
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5 md:w-2/3 md:mr-20">
        <PaymentForm />
      </div>
    </div>
  );
}

export default Home;
