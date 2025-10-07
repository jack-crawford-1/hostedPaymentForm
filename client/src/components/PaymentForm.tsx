import InputField from "./InputField";
import { usePaymentForm } from "../hooks/usePaymentForm";

const PaymentForm = () => {
  const { formData, handleChange, handleSubmit } = usePaymentForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-1 w-full text-sm ">
      <div className="grid grid-cols-1 gap-2 font-normal text-slate-300">
        <div className="mb-[-3px] font-bold text-md">Location</div>
        <InputField
          type="dropdown"
          name="retailer_location"
          value={formData.retailer_location ?? ""}
          placeholder="Select Location"
          onChange={handleChange}
          options={[
            { value: "DOMESTIC_ONLY", label: "Domestic Only" },
            { value: "FOREIGN_ONLY", label: "Foreign Only" },
            { value: "FOREIGN_AND_DOMESTIC", label: "Foreign and Domestic" },
          ]}
        />
        <div className="mb-[-3px] font-bold text-md">
          {" "}
          Merchant Session{" "}
          <span className="font-medium text-xs"> - autogen - editable</span>
        </div>
        <InputField
          type="text"
          name="merchant_session"
          value={formData.merchant_session}
          placeholder="Merchant Session"
          onChange={handleChange}
        />
        <div className="mb-[-3px] font-semibold text-md">
          Merchant Reference{" "}
          <span className="font-medium text-xs">
            (not normally required - all input fields set with required)
          </span>
        </div>
        <InputField
          type="text"
          name="merchant_reference"
          value={formData.merchant_reference ?? ""}
          placeholder="merchRef123"
          onChange={handleChange}
        />
        <div className="mb-[-3px] font-semibold text-md">
          Amount <span className="font-medium text-xs">(cents - min 100) </span>
        </div>
        <InputField
          type="number"
          name="amount"
          value={formData.amount}
          placeholder="Amount (in cents)"
          onChange={handleChange}
        />
        <div className="mb-[-3px] font-bold  text-md">
          Currency (NZD, AUD, USD, ZAR)
        </div>
        <InputField
          type="text"
          name="currency"
          value={formData.currency}
          placeholder="NZD"
          onChange={handleChange}
        />
      </div>

      <div className="bg-black rounded-md text-slate-100 p-0 pt-4 pb-4">
        <div className="mb-[3px] font-bold">
          Test Mode:{" "}
          <span className="text-[#cdd152] font-bold uppercase">
            {" "}
            {formData.test_mode ? "true" : "false"}
          </span>
        </div>
        <div className="mb-[3px] font-bold">
          Location:{" "}
          <span className="text-[#cdd152] font-bold uppercase">
            {formData.retailer_location}
          </span>
        </div>

        <div className="mb-[3px]  font-bold">
          Merchant Reference:{" "}
          <span className="text-[#cdd152] font-bold uppercase">
            {formData.merchant_reference}
          </span>
        </div>
        <div className="mb-[3px] font-bold">
          Merch Session:{" "}
          <span className="text-[#cdd152] font-bold">
            {formData.merchant_session}
          </span>
        </div>

        <div className="mb-[3px] font-bold">
          Amount ($):{" "}
          <span className="text-[#cdd152] font-bold">
            {formData.currency} {(formData.amount / 100).toFixed(2)}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full hover:bg-black hover:text-white text-black px-4 py-4 rounded-lg shadow-md text-lg font-semibold bg-[#cdd152] transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default PaymentForm;
