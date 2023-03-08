import React, { useState } from "react";
import Image from "next/image";
import {
  HiSearch,
  HiViewList,
  HiOutlineGlobeAlt,
  HiUserCircle,
  HiUser,
} from "react-icons/hi";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({ placeholder }) {
  const [isSearch, setIsSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfUsers, setNoOfUsers] = useState(1);
  const router = useRouter();

  const homePage = () => {
    router.push("/");
  };

  const searchPage = () => {
    router.push({
      pathname: "/search",
      query: {
        location: isSearch,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfUsers: noOfUsers,
      },
    });
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selections.startDate);
    setEndDate(ranges.selections.endDate);
  };

  const rangeSelections = {
    startDate: startDate,
    endDate: endDate,
    key: "selections",
  };

  return (
    <header className="sticky grid grid-cols-3 bg-white top-0 z-50 p-5 md:px-10 shadow-md">
      {/* Left */}
      <div className="relative cursor-pointer flex my-auto h-10 items-center">
        <Image
          onClick={homePage}
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
          value={isSearch}
          onChange={(e) => setIsSearch(e.target.value)}
          type="text"
          placeholder={placeholder || "Start your search"}
          className="py-2 pl-3 bg-transparent flex-grow outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <HiSearch onClick={searchPage} className="hidden md:inline-flex w-8 h-8 bg-red-400 text-white rounded-full p-2 mx-2 cursor-pointer" />
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

      {isSearch && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[rangeSelections]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["#FD5B61"]}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="flex-grow font-semibold text-2xl">
              Number of Guests
            </h2>
            <HiUser className="h-6 text-lg" />
            <input
              type="number"
              min={1}
              value={noOfUsers}
              onChange={(e) => setNoOfUsers(e.target.value)}
              className="text-lg w-9 ml-2 text-red-400 outline-none"
            />
          </div>

          <div className="flex">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setIsSearch("")}
            >
              Cancel
            </button>
            <button onClick={searchPage} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
