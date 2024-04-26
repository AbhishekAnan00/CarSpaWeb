import React from "react";
import interior_image from "../assets/interior.jpg";
import exterior_image from "../assets/exterior.jpg";
import paint_image from "../assets/paint.jpg";
import shampoo_image from "../assets/shampoo.jpg";
import Car from "../model/Car";
const ServiceType = () => {
  const servicetype = [
    {
      id: "1",
      icon: interior_image,
      Name: "Car Interior Spa",
      para1: "Pressure Car Wash",
      para2: "Interior Vacuum Cleaning",
      para3: "Dashbored Polishing",
      price: "1200",
      time: "Takes 6 hrs"
    },
    {
      id: "2",
      icon: exterior_image,
      Name: "Car Exterior Spa",
      para1: "Exterior Top Wash",
      para2: "Hand Drying",
      para3: "Rinsing",
      price: "2200",
      time: "Takes 3hrs"
    },
    {
      id: "3",
      icon: paint_image,
      Name: "Car Paint & Polish",
      para1: "Masking and Taping",
      para2: "Clear Coat",
      para3: "Buff and Polish",
      price: "1100",
      time: "Takes 4hrs"
    },
    {
      id: "4",
      icon: shampoo_image,
      Name: "Car Wash & Wax",
      para1: "Car Wash",
      para2: "Dashbord & Tyre Polish ",
      para3: "Body Wax",
      price: "1750",
      time: "Takes 7hrs"
    },
  ];
  return (
    <div>
      <div className="text-center text-xl font-bold">Service</div>
      {servicetype.map((elem,index) => {
        return (
          <div className="flex phone-sm:flex-col lapi:flex-row justify-center items-center w-full lapi:gap-10 phone-sm:gap-0 h-auto py-4" key={index}>
            <div>
              <img
                src={elem.icon}
                alt=""
                className="object-contain phone-sm:w-full phone-sm:h-full lapi:w-80 lapi:h-80 rounded-xl px-2"
              />
            </div>
           <div className="flex justify-between py-2 px-2 phone-sm:gap-6 lapi:gap-10">
           <div className="flex flex-col">
              <p className="lapi:text-2xl phone-sm:text-md font-bold">{elem.Name}</p>
              <p className="phone-sm:text-sm lapi:text-lg">{elem.para1}</p>
              <p className="phone-sm:text-sm lapi:text-lg">{elem.para2}</p>
              <p className="phone-sm:text-sm lapi:text-lg">{elem.para3}</p>
              <p className="text-md text-red-600 font-semibold">Price: ₹{elem.price}</p>
            </div>
            <div className="flex flex-col lapi:gap-y-12 phone-sm:gap-10">
              <button className="bg-gray-600 text-white text-xs py-1">
                🕒{elem.time}
              </button>
              <Car />
            </div>
           </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceType;
