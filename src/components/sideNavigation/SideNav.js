import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { BiCartAdd } from "react-icons/bi";
import { LiaShuttleVanSolid } from "react-icons/lia";
import { useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import MainLogo from "../log/MainLogo";
import { LuLogOut } from "react-icons/lu";
const imgUrl =
  "https://s3-alpha-sig.figma.com/img/1881/411d/e162cc928a81bdb2d30a865dca47acfb?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pan4byq~vgFVuhdxhZtaclIgzMKo-p6ffLbYi5bnRDlUz7j5vL33RmfTVn68dafSAlt4CHhJ6r1EBo1LcLt~C6TmOnceqM5tXS65WyzgDxO8W~vVGtoIGFLF0N9nqUpK2YgQGrjQm2IZ~11vgUhu58qMBXCo2vP3QztITSHFLF-8gh-n9Q3FhmPf5kxv443j1aOSON0DswMLl0iuYvfx0z4HNziSaxAqMXhRfZa1JoRfRGDHjUajJPhR-vrFtG1iBUUSv0tZb2PTKevfSoNmOgU3QdlK1LSoRycQxqmuZ6hyLvBSBmzxEB1SeCbtLbK-M586UDWQHB0O2eOMOuXwHw__";

const NavLinks = [
  {
    name: "Dashboard",
    linkTo: "/",
    icons: <MdOutlineDashboard className="text-2xl inline-block me-2" />,
  },
  {
    name: "Orders",
    linkTo: "/order",
    icons: <LiaShuttleVanSolid className="text-2xl inline-block me-2" />,
  },
  {
    name: "my products",
    linkTo: "/product",
    icons: <BiCartAdd className="text-2xl inline-block me-2" />,
  },
  {
    name: "profile",
    linkTo: "/profile",
    icons: <HiOutlineUser className="text-2xl inline-block me-2" />,
  },
];

function SideNav() {
  const { navBar, handleNavBar, logout } = useAuth();
  const location = useLocation();
  const subPath = location.pathname.split("/");

  return (
    <aside
      className={`bg-white fixed top-0 lg:top-20 z-[100]  w-full max-w-[270px] transition-all ease-in-out  lg:sticky h-full  text-black ${
        navBar ? "left-0" : "-left-72"
      }`}
    >
      <div
        className="size-11 rounded-full active:bg-gray-50 cursor-pointer justify-center items-center flex ms-auto mt-6 me-3 lg:hidden"
        onClick={handleNavBar}
      >
        <IoClose className="text-2xl" />
      </div>
      <div className="lg:hidden">
        <MainLogo />
      </div>
      <div className="px-9 py-10 lg:pt-14 lg:px-14">
        <div className="bg-gray-200 w-[100px]  rounded-lg">
          <img
            src={imgUrl}
            className="object-cover rounded-lg"
            alt="store image"
            loading="lazy"
          />
        </div>
        <h1 className="text-xl font-bold capitalize line-clamp-1 mt-2 ">
          krishna store
        </h1>
        <p className="text-black/50 line-clamp-1">Shop ID: 45896582</p>
      </div>
      <ul className="">
        {NavLinks?.map((item, i) => (
          <li
            className={` px-9 py-4 lg:px-14  font-semibold capitalize relative ${
              item?.linkTo === "/" ? "bg-secondary" : "text-black/50"
            }`}
            key={i}
          >
            {item?.icons}
            {item?.name}
            {item?.linkTo === "/" && (
              <span className="w-1 h-full absolute top-0 right-0 bg-accent-600 rounded-tl-2xl rounded-bl-2xl"></span>
            )}
          </li>
        ))}
        <li
          className={` px-9 py-4 lg:px-14 text-red-400  font-medium capitalize relative hover:bg-red-100 cursor-pointer`}
          onClick={logout}
        >
          <LuLogOut className="text-2xl inline-block me-2" />
          Log out
        </li>
      </ul>
    </aside>
  );
}

export default SideNav;
