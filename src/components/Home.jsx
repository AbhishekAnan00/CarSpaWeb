import React from "react";
import car_image from "../assets/car.jpg";
import Enquiry from "../model/Enquiry";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen relative">
        <img
          src={car_image}
          alt=""
          className="h-screen w-screen"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="navbar absolute top-6 w-screen ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">CAR SPA</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Customer</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <Link to="/">
                    <li>
                      <a>Home</a>
                    </li>
                  </Link>
                  <Link to="/service">
                    <li>
                      <a>Service</a>
                    </li>
                  </Link>
                  <Link to="/signup">
                    <li>
                      <a>Profile</a>
                    </li>
                  </Link>
                  <Link to="/history">
                    <li>
                      <a>History</a>
                    </li>
                  </Link>
                  <Link to="/logout">
                    <li>
                      <a>Logout</a>
                    </li>
                  </Link>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute bottom-[30%] left-[20%]  flex justify-center flex-col items-center gap-2">
        <div className="flex justify-center flex-col items-center">
          <p className="text-md phone-sm:text-md lapi:text-2xl  text-white">TRUSTED AND EFFECTIVE </p>
          <p className="text-xl phone-sm:text-xl lapi:text-4xl text-white font-bold">CAR SPA SERVICES</p>
        </div>
        <div>
          <Enquiry />
        </div>
      </div>
    </div>
  );
};

export default Home;
