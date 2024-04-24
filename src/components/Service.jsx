import React from "react";
import Exterior_image from "../assets/exterior.jpg";
import Interior_image from "../assets/interior.jpg";
import Shampoo_image from "../assets/shampoo.jpg";
import Paint_image from "../assets/paint.jpg";
import { Link } from "react-router-dom";
const Service = () => {
  const service = [
    {
      id: 1,
      Name: "Exterior & Interior Cleaning",
      Description:
        "The ultimate interior and exterior service for your car. Our most popular service.",
      icon: Exterior_image,
    },
    {
      id: 2,
      Name: "Paintless Dent Removal",
      Description:
        "Remove small dents from your vehicle without having to use paint on the vehicle.",
      icon: Interior_image,
    },
    {
      id: 3,
      Name: "Seat & Carpet Shampoo",
      Description:
        "The ultimate interior service for your car. Leave your seats spotless and looking new.",
      icon: Shampoo_image,
    },
    {
      id: 4,
      Name: "Fine Detailing",
      Description:
        "Pamper your car with the thorough detail it deserves. We offer a wide range of services.",
      icon: Paint_image,
    },
  ];
  return (
    <div className="text-center w-screen h-screen">
      <div className="text-2xl font-semibold">Service</div>
      <div className="flex phone-sm:flex-col lapi:flex-row my-2 lapi:px-4 phone-sm:px-0 gap-4">
        {service.map((elem, index) => {
          return (
            <>
              <div className="flex flex-col justify-center items-center w-full shadow-2xl" key={index}>
                <div class="relative overflow-hidden">
                  <Link to="/servicetype">
                    <img
                      src={elem.icon}
                      className="block object-cover phone-sm:h-40 phone-sm:w-64 lapi:h-60 lapi:w-80 transition-transform duration-300 transform hover:scale-110 rounded-xl"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="text-lg font-semibold">
                  <p>{elem.Name}</p>
                </div>
                {/* <div>{elem.Description}</div>                */}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
