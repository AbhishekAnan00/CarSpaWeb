import express from "express";
import dotenv from "dotenv";
import stripeLib from "stripe";
import cors from "cors";

import connectToMongoDB from "./DB/connectToMongoDB.js";
import auth_route from "./route/auth_route.js";
import user_route from "./route/user_route.js";

const app = express();
const port = process.env.PORT || 9000;
dotenv.config();

// Initialize Stripe
const stripe = new stripeLib(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// Routes
app.use("/api/auth", auth_route);
app.use("/api/user", user_route);

// Checkout endpoint
app.post("/checkout", async (req, res) => {
  try {
    const { items } = req.body;

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
    });

    res.json({ sessionId: session.id }); // Return session ID
  } catch (error) {
    console.error("Error processing checkout:", error);
    res.status(500).json({ error: "An error occurred during checkout" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start server
app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
