import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { car } from "../data/Car";
import { fuel } from "../data/Fuel";
import { HistoryContext } from "../context/HistoryContext";
import toast from "react-hot-toast";

const Car = () => {
  const [selectedCars, setSelectedCars] = useState([]);
  const [selectedFuel, setSelectedFuel] = useState(null);
  const { addToHistory } = useContext(HistoryContext);
  const navigate = useNavigate();

  const selectCar = (car) => {
    setSelectedCars([...selectedCars, car]);
  };

  const selectFuel = (fuel) => {
    setSelectedFuel(fuel);
  };

  const handleAddToHistory = () => {
    if (selectedCars.length > 0 && selectedFuel) {
      selectedCars.forEach((selectedCar) => {
        addToHistory(selectedCar.id);
      });
      setSelectedCars([]);
      setSelectedFuel(null);
      navigate("/history");
      toast.success("Added to history!");
    }
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        {selectedCars.length > 0 && selectedFuel ? "Add History" : "Select Car"}
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <h3 className="font-bold text-lg text-center">
              {selectedCars.length > 0 && selectedFuel ? "History" : "Select Car"}
            </h3>
            <div className="flex flex-wrap">
              {!selectedCars.length &&
                car.map((elem) => (
                  <div
                    key={elem.id}
                    className="flex flex-col justify-center items-center mx-4"
                    onClick={() => selectCar(elem)}
                  >
                    <img
                      src={elem.icon}
                      alt=""
                      className="block object-cover w-full h-auto transition-transform duration-300 transform hover:scale-110"
                    />
                    <p>{elem.name}</p>
                  </div>
                ))}
              {selectedCars.length > 0 &&
                !selectedFuel &&
                fuel.map((ele) => (
                  <div
                    key={ele.id}
                    className="flex flex-col justify-center items-center mx-4"
                    onClick={() => selectFuel(ele)}
                  >
                    <img
                      src={ele.icon}
                      alt=""
                      className="block object-cover w-20 h-auto transition-transform duration-300 transform hover:scale-110"
                    />
                    <p>{ele.name}</p>
                  </div>
                ))}
              {selectedCars.length > 0 && selectedFuel && (
                <div>
                  {selectedCars.map((selectedCar) => (
                    <div key={selectedCar.id}>
                      <p>Selected Car: {selectedCar.name}</p>
                      <img src={selectedCar.icon} alt={selectedCar.name} />
                    </div>
                  ))}
                  <p>Selected Fuel: {selectedFuel.name}</p>
                  <img src={selectedFuel.icon} alt={selectedFuel.name} className="w-10"/>
                  <button
                    className="btn mt-4 text-sm"
                    onClick={handleAddToHistory}
                  >
                    Add to History
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Car;
