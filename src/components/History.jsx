import React, { useContext } from "react";
import { HistoryItem } from "./HistoryItem";
import { useNavigate } from "react-router-dom";
import { HistoryContext } from "../context/HistoryContext";
import { car } from "../data/Car";
import { fuel } from "../data/Fuel";
export const History = () => {
  const { HistoryItems, getTotalHistoryAmount } = useContext(HistoryContext);
  const navigate = useNavigate();

  //stripe payment
  // Function to handle the checkout process
  const handleCheckout = async () => {
    try {
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

      const res = await fetch("https://localhost:3000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      const data = await res.json();
      window.location = data.url;
    } catch (error) {
      console.error("Error during checkout:", error.message);
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
            <p className="text-white">subtotal: ${getTotalHistoryAmount()}</p>
          </div>
          <div className="flex justify-around">
            <button onClick={() => navigate("/servicetype")} className="btn">
              continue shopping
            </button>
            <button className="btn" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
    </div>
  );
};
