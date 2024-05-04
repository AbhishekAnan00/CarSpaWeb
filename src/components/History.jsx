import React, { useContext, useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { HistoryItem } from "./HistoryItem";
import { useNavigate } from "react-router-dom";
import { HistoryContext } from "../context/HistoryContext";
import { car } from "../data/Car";
import { fuel } from "../data/Fuel";
import toast from 'react-hot-toast';

export const History = () => {
  const { HistoryItems, getTotalHistoryAmount } = useContext(HistoryContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    const initializeStripe = async () => {
      const stripeObj = await loadStripe("pk_test_51P9rAYSCmMmyG3raV5oAy7unMB3YQCJy2K69lMrlxdXqu2l9pjtrB49W2onIVH3WjqYtCKvFLgzSHqZxYkwjhjKE00Kuj78Twl");
      setStripe(stripeObj);
    };

    initializeStripe();
  }, []);

  // Function to handle the checkout process
  const handleCheckout = async () => {
    try {
      setLoading(true);

      const items = Object.keys(HistoryItems).map((itemId) => {
        const quantity = HistoryItems[itemId];
        if (quantity > 0) {
          const carItem = car.find((car) => car.id === itemId);
          return {
            id: itemId,
            name: carItem.name,
            price: carItem.price,
            quantity: quantity,
          };
        }
        return null;
      }).filter((item) => item !== null);

      // Call backend to initiate checkout
      const response = await fetch("http://localhost:9000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (data.sessionId && stripe) {
        const result = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });

        if (result.error) {
          console.error("Error during checkout:", result.error.message);
          toast.error('Payment failed');
        } else {
          toast.success('Payment successful');
        }
      } else {
        console.error("Error processing checkout:", data.error);
        toast.error('Payment failed');
      }
    } catch (error) {
      console.error("Error during checkout:", error.message);
      toast.error('Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="History h-screen w-screen bg-black p-4 font-bold">
      <div>
        <h1>History Items</h1>
      </div>
      <div className="HistoryItems">
        {car.map((product) => {
          const itemQuantity = HistoryItems[product.id] || 0;
          if (itemQuantity > 0) {
            // Find the fuel object for the current car
            const carFuel = fuel.find((item) => item.id === product.fuelId);
            return (
              <HistoryItem
                key={product.id}
                id={product.id}
                name={product.name}
                icon={product.icon}
                price={product.price}
                quantity={itemQuantity}
                fuelIcon={carFuel.icon}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="checkout flex flex-col">
        <div className="mt-4">
          <p className="text-white">subtotal: ₹{getTotalHistoryAmount()}</p>
        </div>
        <div className="flex justify-around">
          <button onClick={() => navigate("/servicetype")} className="btn">
            continue service
          </button>
          <button className="btn" onClick={handleCheckout} disabled={loading}>
            {loading ? 'Processing...' : 'Checkout'}
          </button>
        </div>
      </div>
    </div>
  );
};
