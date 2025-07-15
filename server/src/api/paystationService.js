import { getAccessToken } from "./auth.js";

const PAYSTATION_API_URL = process.env.PAYSTATION_API_URL;

export async function createHostedPurchase(purchaseData) {
  try {
    const accessToken = await getAccessToken();

    const response = await fetch(PAYSTATION_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(purchaseData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to create hosted purchase");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating hosted purchase:", error.message);
    throw new Error("Failed to create hosted purchase");
  }
}
