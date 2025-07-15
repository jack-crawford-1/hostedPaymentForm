export interface HostedPurchaseRequest {
  paystation_id: string;
  gateway_id: string;
  amount: number;
  merchant_session: string;
  merchant_reference?: string;
  test_mode?: boolean;
  currency: string;
  return_url?: string;
  response_url?: string;
  retailer_location?: "DOMESTIC_ONLY" | "FOREIGN_ONLY" | "FOREIGN_AND_DOMESTIC";
}

export interface HostedPurchaseResponse {
  transaction_type: "purchase";
  transaction_id: number;
  session_id: string;
  integration_type: "3party";
  paystation_id: string;
  gateway_id: string;
  amount: number;
  currency: string;
  merchant_session: string;
  merchant_reference?: string;
  batch_number: string;
  request_time: string;
  response_time: string;
  test_mode: boolean;
  payment_url: string;
}

export interface InputFieldProps {
  type: string;
  name: string;
  value: string | number;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  options?: { value: string; label: string }[];
}

export interface TransactionDetails {
  id: string;
  merchantSession: string;
  amount: number;
  currency: string;
  requestTime: string;
  error?: string;
  merchantReference?: string;
}
