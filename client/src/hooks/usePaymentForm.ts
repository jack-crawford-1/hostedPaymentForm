import { useEffect, useState } from "react";
import { requestHostedPurchase } from "../api/purchase";
import { HostedPurchaseRequest } from "../types/types";

export function usePaymentForm() {
  const generateRandomMerchantSession = () => {
    return `merchant_session_${Math.random().toString(36).substring(2, 15)}`;
  };

  const [formData, setFormData] = useState<
    Omit<HostedPurchaseRequest, "paystation_id" | "gateway_id">
  >({
    merchant_session: "",
    amount: 1000,
    currency: "",
    test_mode: true,
    return_url: "",
    retailer_location: undefined,
    merchant_reference: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      merchant_session: generateRandomMerchantSession(),
    }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const parsedAmount = name === "amount" ? parseInt(value, 10) || 0 : value;

    console.log(
      `Updated field: ${name}, Value: ${value}, Parsed: ${parsedAmount}`
    );

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "amount"
          ? parseInt(value, 10) || 1
          : type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await requestHostedPurchase(formData);
      window.location.href = response.payment_url;
    } catch (error) {
      console.error("Error creating hosted purchase:", error);
    }
  };

  return { formData, handleChange, handleSubmit };
}
