import React from "react";
import Image from "next/image";
import {
  HiSearch,
  HiViewList,
  HiOutlineGlobeAlt,
  HiUserCircle,
} from "react-icons/hi";

function Header() {
  return (
    <header className="sticky grid grid-cols-3 bg-white top-0 z-50 p-5 md:px-10 shadow-md">
      {/* Left */}
      <div className="relative cursor-pointer flex my-auto h-10 items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="logo"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-1">
        <input
          type="text"
          placeholder="Start your search"
          className="py-2 pl-3 bg-transparent flex-grow outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <HiSearch className="hidden md:inline-flex w-8 h-8 bg-red-400 text-white rounded-full p-2 mx-2 cursor-pointer" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <HiViewList className="h-6 cursor-pointer" />

        <div className="flex border-2 p-2 rounded-full">
          <HiOutlineGlobeAlt className="h-6 mx-1 cursor-pointer" />
          <HiUserCircle className="h-6 mx-1 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
