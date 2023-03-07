import Image from "next/image";
import React from "react";

function SmallCard({ img, location, distance }) {
  return (
  <div className="flex space-x-4 m-2 mt-5 items-center hover:bg-gray-100 hover:scale-105 rounded-xl cursor-pointer transition transform duration-200 ease-out">
  <div className="relative w-16 h-16">
    <Image src={img} alt={location} layout='fill' className="rounded-lg"/>
  </div>

    <div>
        <h3 className=" font-bold text-gray-800">{location}</h3>
        <p>{distance}</p>
    </div>
  </div>
  );
}

export default SmallCard;
