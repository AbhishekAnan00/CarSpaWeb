import React, { createContext, useEffect, useState } from "react";
import { car } from "../data/Car";

export const HistoryContext = createContext("");

const getDefaultHistory = () => {
  let history = {};
  for (let i = 1; i <= car.length; i++) {
    history[i] = 0;
  }
  return history;
};

export const HistoryContextProvider = (props) => {
  const [HistoryItems, setHistoryItems] = useState(() => {
    const storedHistory = localStorage.getItem("history");
    return storedHistory ? JSON.parse(storedHistory) : getDefaultHistory();
  });

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(HistoryItems));
  }, [HistoryItems]);

  const addToHistory = (itemId) => {
    setHistoryItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeHistory = (itemId) => {
    setHistoryItems((prev) => ({ ...prev, [itemId]: Math.max(0, prev[itemId] - 1) }));
  };

  const updateHistoryItemCount = (newAmount, itemId) => {
    setHistoryItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalHistoryItems = () => {
    return Object.values(HistoryItems).reduce((acc, curr) => acc + curr, 0);
  };

  const getTotalHistoryAmount = () => {
    return car.reduce((totalAmount, item) => {
      const quantity = HistoryItems[item.id] || 0;
      return totalAmount + quantity * item.price;
    }, 0);
  };

  const contextValue = {
    getTotalHistoryAmount,
    updateHistoryItemCount,
    getTotalHistoryItems,
    HistoryItems,
    addToHistory,
    removeHistory,
  };

  return (
    <HistoryContext.Provider value={contextValue}>
      {props.children}
    </HistoryContext.Provider>
  );
};
