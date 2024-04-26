import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import stripe from "stripe";

import connectToMongoDB from "./DB/connectToMongoDB.js";
import auth_route from "./route/auth_route.js";
import user_route from "./route/user_route.js";

const app = express();
const port = process.env.PORT || 9000;
dotenv.config();

// Initialize Stripe
const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(express.json());
app.use(cors({ origin: "https://localhost:9000" }));
app.use("/api/auth", auth_route);
app.use("/api/user", user_route);

// Checkout endpoint
app.post("/checkout", async (req, res) => {
  try {
    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Amount should be in cents
        },
        quantity: item.quantity,
      })),
    });
    res.json({ url: session.url });
  } catch (error) {
    console.error("Error processing checkout:", error);
    res.status(500).json({ error: "An error occurred during checkout" });
  }
});

// Start server
app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
