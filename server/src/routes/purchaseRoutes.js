import express from "express";
import { createHostedPurchase } from "../api/paystationService.js";

const router = express.Router();

router.post("/purchase", async (req, res) => {
  try {
    const purchaseResponse = await createHostedPurchase(req.body);
    res.json(purchaseResponse);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create hosted purchase",
      error: error.message,
    });
  }
});

export default router;
