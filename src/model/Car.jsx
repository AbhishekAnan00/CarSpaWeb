import React, { useState } from "react";
import car1_image from "../assets/car1.png";
import car2_image from "../assets/car2.png";
import car3_image from "../assets/car3.png";
import car4_image from "../assets/car4.png";
import car5_image from "../assets/car5.png";
import car6_image from "../assets/car6.png";
import car7_image from "../assets/car7.png";
import car8_image from "../assets/car8.png";
import car9_image from "../assets/car9.png";
import car10_image from "../assets/car10.png";
import car11_image from "../assets/car11.png";
import car12_image from "../assets/car12.png";
import car13_image from "../assets/car13.png";
import car14_image from "../assets/car14.png";
import petrol_image from "../assets/petrol.svg";
import diesel_image from "../assets/diesel.svg";
const Car = () => {
  const [select, setSelect] = useState(false);
  const [fuelModal, setFuelModal] = useState(false);
  const selectedCar = () => {
    setSelect(!select);
    setFuelModal(!fuelModal);
  };
  const carimage = [
    {
      id: "1",
      icon: car1_image,
      name: "Swift",
    },
    {
      id: "2",
      icon: car2_image,
      name: "WagonR",
    },
    {
      id: "3",
      icon: car3_image,
      name: "Dzire",
    },
    {
      id: "4",
      icon: car4_image,
      name: "Baleno",
    },
    {
      id: "5",
      icon: car5_image,
      name: "Alto",
    },
    {
      id: "6",
      icon: car6_image,
      name: "Ritz",
    },
    {
      id: "7",
      icon: car7_image,
      name: "i20",
    },
    {
      id: "8",
      icon: car8_image,
      name: "Esteem",
    },
    {
      id: "9",
      icon: car9_image,
      name: "XL6",
    },
    {
      id: "10",
      icon: car10_image,
      name: "Gypsy",
    },
    {
      id: "11",
      icon: car11_image,
      name: "Eeco",
    },
    {
      id: "12",
      icon: car12_image,
      name: "S-cross",
    },
    {
      id: "13",
      icon: car13_image,
      name: "Versa",
    },
    {
      id: "14",
      icon: car14_image,
      name: "Toyoto",
    },
  ];
  const fuelimage = [
    {
      id: "1",
      icon: petrol_image,
      name: "Petrol",
    },
    {
      id: "2",
      icon: diesel_image,
      name: "Diesel",
    },
  ];
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        {select ? "Add History" : "Select Car"}
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center">
            {select ? "Select Fuel" : "Select Car"}
          </h3>
          <div className="flex flex-wrap">
            {!fuelModal
              ? carimage.map((elem) => {
                  return (
                    <div className="flex flex-col justify-center items-center mx-4">
                      <img
                        src={elem.icon}
                        alt=""
                        onClick={selectedCar}
                        className="block object-cover w-full h-auto transition-transform duration-300 transform hover:scale-110"
                      />
                      <p>{elem.name}</p>
                    </div>
                  );
                })
              : fuelimage.map((ele) => {
                  return (
                    <div className="flex flex-col justify-center items-center mx-4">
                      <img
                        src={ele.icon}
                        alt=""
                        onClick={selectedCar}
                        className="block object-cover w-20 h-auto transition-transform duration-300 transform hover:scale-110"
                      />
                      <p>{ele.name}</p>
                    </div>
                  );
                })}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Car;
