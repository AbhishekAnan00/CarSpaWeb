import React, { useContext } from "react";
import { HistoryContext } from "../context/HistoryContext";

export const HistoryItem = ({ id, name, icon, price, quantity,fuelIcon }) => {
  const { addToHistory, removeHistory, updateHistoryItemCount } = useContext(HistoryContext);

  return (
    <div className="HistoryItem w-sccreen mx-auto">
      <div className="flex justify-evenly items-center">
      <img src={icon} alt={name} />
      <img src={fuelIcon} alt={name} className="w-10"/>
      </div>
      <div className="description flex flex-col justify-around">
       <p>
          <b>{name}</b>
        </p>
        <p> ${price} </p>
        <div className="countHandler">
          <button onClick={() => removeHistory(id)}> - </button>
          <input
            value={quantity}
            onChange={(e) => updateHistoryItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToHistory(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
