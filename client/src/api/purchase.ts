// import { HostedPurchaseRequest, HostedPurchaseResponse } from "../types/types";

// const LOCAL_PROXY_URL = "http://localhost:3000/api/proxy/purchase";

// type ClientPurchaseRequest = Omit<
//   HostedPurchaseRequest,
//   "paystation_id" | "gateway_id"
// >;

// export async function requestHostedPurchase(
//   data: ClientPurchaseRequest
// ): Promise<HostedPurchaseResponse> {
//   try {
//     const response = await fetch(LOCAL_PROXY_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to create hosted purchase");
//     }

//     return await response.json();
//   } catch (error) {
//     throw new Error("Failed to create hosted purchase");
//   }
// }

import { HostedPurchaseRequest, HostedPurchaseResponse } from "../types/types";

const BASE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const PROXY_URL = BASE_API_URL + "/api/proxy/purchase";

type ClientPurchaseRequest = Omit<
  HostedPurchaseRequest,
  "paystation_id" | "gateway_id"
>;

export async function requestHostedPurchase(
  data: ClientPurchaseRequest
): Promise<HostedPurchaseResponse> {
  try {
    const response = await fetch(PROXY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create hosted purchase");
    }

    return await response.json();
  } catch (error) {
    throw new Error("Failed to create hosted purchase");
  }
}
