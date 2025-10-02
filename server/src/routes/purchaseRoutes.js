import express from "express";
import { createHostedPurchase } from "../api/paystationService.js";

const router = express.Router();

router.post("/purchase", async (req, res) => {
  const PAYSTATION_ID = process.env.PAYSTATION_ID;
  const GATEWAY_ID = process.env.GATEWAY_ID;

  const completePurchaseData = {
    paystation_id: PAYSTATION_ID,
    gateway_id: GATEWAY_ID || req.body.gateway_id,
    ...req.body,
  };

  try {
    const purchaseResponse = await createHostedPurchase(completePurchaseData);
    res.json(purchaseResponse);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create hosted purchase",
      error: error.message,
    });
  }
});

export default router;
