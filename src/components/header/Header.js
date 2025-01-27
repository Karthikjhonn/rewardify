import React from "react";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { handleNavBar } = useAuth();
  return (
    <header className="min-h-20 bg-white border-b border-gray-100 sticky top-0 flex items-center z-[100] ">
      <div
        className="size-11 rounded-full active:bg-gray-50 cursor-pointer flex justify-center items-center ms-3 lg:hidden"
        onClick={handleNavBar}
      >
        <LuMenu className="text-2xl" />
      </div>
      <div className="max-w-[270px] grow lg:block hidden">
        <h1 className="text-3xl  font-bold text-center bg-gradient-to-tr from-accent-100 vai-accent-600 to-accent-700 bg-clip-text text-transparent">
          REWARDIFY
        </h1>
      </div>
      <section className="flex  items-center grow px-5 justify-end lg:justify-between">
        <h1 className="font-bold text-black text-lg lg:text-3xl hidden lg:block">
          Welcome Karthick👋
        </h1>
        <div className="flex items-center gap-x-3">
          <span className="bg-secondary rounded-lg px-3 py-2  font-medium select-none whitespace-nowrap text-base">
            XCoins: 300{" "}
            <RiMoneyRupeeCircleFill className="text-base text-yellow-300  inline-block" />
          </span>
          <section className="grid grid-cols-2 lg:grid-cols-3 gap-x-2">
            <div className="size-11 rounded-full bg-secondary cursor-pointer  justify-center items-center hidden lg:flex">
              <FaHandHoldingUsd className="text-xl text-black  inline-block" />
            </div>
            <div className="size-11 rounded-full bg-secondary cursor-pointer flex justify-center items-center">
              <IoNotificationsSharp className="text-xl text-black  inline-block" />
            </div>
            <div className="size-11 rounded-full bg-secondary cursor-pointer flex justify-center items-center">
              <FaUser className="text-xl text-black  inline-block" />
            </div>
          </section>
        </div>
      </section>
    </header>
  );
}

export default Header;
