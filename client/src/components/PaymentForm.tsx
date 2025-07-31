import InputField from "./InputField";
import { usePaymentForm } from "../hooks/usePaymentForm";

const PaymentForm = () => {
  const { formData, handleChange, handleSubmit } = usePaymentForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-2 w-full text-sm">
      <div className="grid grid-cols-1 gap-2 font-normal text-slate-800">
        <div className="mb-[-3px] mt-5 font-bold">
          Paystation ID{" "}
          <span className="font-medium text-xs">
            {" "}
            - needs to match server env clientID/Secret for OAuth
          </span>
        </div>
        <InputField
          type="text"
          name="paystation_id"
          value={formData.paystation_id}
          placeholder="617758"
          onChange={handleChange}
        />
        <div className="mb-[-3px] font-bold">Gateway ID</div>
        <InputField
          type="text"
          name="gateway_id"
          value={formData.gateway_id}
          placeholder="Gateway_ID"
          onChange={handleChange}
        />
        <div className="mb-[-3px] font-bold">Location</div>
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
        <div className="mb-[-3px] font-bold ">
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
        <div className="mb-[-3px] font-semibold">
          Merchant Reference (not normally required - all input fields set with
          required)
        </div>
        <InputField
          type="text"
          name="merchant_reference"
          value={formData.merchant_reference ?? ""}
          placeholder="merchant_reference"
          onChange={handleChange}
        />
        <div className="mb-[-3px] font-semibold ">
          Amount <span className="font-medium text-xs">(cents - min 100) </span>
        </div>
        <InputField
          type="number"
          name="amount"
          value={formData.amount}
          placeholder="Amount (in cents)"
          onChange={handleChange}
        />
        <div className="mb-[-3px] font-bold ">Currency</div>
        <InputField
          type="text"
          name="currency"
          value={formData.currency}
          placeholder="NZD"
          onChange={handleChange}
        />
      </div>

      <div className="bg-black rounded-md text-slate-100 p-10 pt-4 pb-4">
        <div className="mb-[-3px]">
          Test Mode:{" "}
          <span className="text-slate-200 font-regular uppercase">
            {" "}
            {formData.test_mode ? "true" : "false"}
          </span>
        </div>
        <div className="mb-[-3px]">
          Location:{" "}
          <span className="text-slate-200 font-regular uppercase">
            {formData.retailer_location}
          </span>
        </div>

        <div className="mb-[-3px]  ">
          Merchant Reference:{" "}
          <span className="text-slate-200 font-regular uppercase">
            {formData.merchant_reference}
          </span>
        </div>

        <div className="mb-[-3px]">
          ID:{" "}
          <span className="text-slate-200 font-regular uppercase">
            {formData.paystation_id}
          </span>
        </div>
        <div className="mb-[-3px]">
          Gateway:{" "}
          <span className="text-slate-200 font-regular">
            {formData.gateway_id}
          </span>
        </div>
        <div className="mb-[-3px]">
          Merch Session:{" "}
          <span className="text-slate-200 font-regular">
            {formData.merchant_session}
          </span>
        </div>
        <div className="mb-[-3px]">
          Merch Ref:{" "}
          <span className="text-slate-200 font-regular">
            {formData.merchant_reference}
          </span>
        </div>
        <div className="mb-[-3px]">
          Amount (cents):{" "}
          <span className="text-slate-200 font-regular">
            {formData.currency} {formData.amount}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="w-[160px] bg-black text-white px-4 py-2 rounded-lg shadow-md text-lg font-semibold hover:bg-green-700 transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default PaymentForm;
