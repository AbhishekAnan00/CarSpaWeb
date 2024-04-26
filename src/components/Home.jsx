import React, { useContext } from "react";
import car_image from "../assets/car.jpg";
import Enquiry from "../model/Enquiry";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useGetProfile from "../hooks/useGetProfile";
import { FaCircleUser } from "react-icons/fa6";
import { HistoryContext } from "../context/HistoryContext";
const Home = () => {
  const { getTotalCartItems } = useContext(HistoryContext);
  const { Profile } = useGetProfile();
  const { loading, logout } = useLogout();
  return (
    <div>
      <div className="h-screen w-screen relative">
        <img
          src={car_image}
          alt=""
          className="h-screen w-screen"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="navbar absolute top-6 w-screen ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">CAR SPA</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>{Profile.fullname || "Customer"}</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <Link to="/">
                    <li>
                      <a>Home</a>
                    </li>
                  </Link>
                  <Link to="/servicetype">
                    <li>
                      <a>Service</a>
                    </li>
                  </Link>
                  <Link to="/history">
                    <li>
                      <a>History</a>
                    </li>
                  </Link>
                    {!loading ? (
                      <li onClick={logout}>
                        <a>Logout</a>
                      </li>
                    ) : (
                      <span className="loading loading-spinner"></span>
                    )}
                </ul>
              </details>
            </li>
          </ul>
          <div className="avatar">
          <div className="w-8 rounded-full">
            <img src={Profile.profilepic || <FaCircleUser />} alt="user avatar" />
          </div>
        </div>
        </div>
      </div>
      <div className="absolute bottom-[30%] left-[20%]  flex justify-center flex-col items-center gap-2">
        <div className="flex justify-center flex-col items-center">
          <p className="text-md phone-sm:text-md lapi:text-2xl  text-white">
            TRUSTED AND EFFECTIVE
          </p>
          <p className="text-xl phone-sm:text-xl lapi:text-4xl text-white font-bold">
            CAR SPA SERVICES
          </p>
        </div>
        <div>
          <Enquiry />
        </div>
      </div>
    </div>
  );
};

export default Home;
