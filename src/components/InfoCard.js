import Image from "next/image";
import React from "react";
import { HiOutlineHeart, HiStar } from "react-icons/hi";

function InfoCard({
  img,
  title,
  location,
  description,
  star,
  price,
  total,
  long,
  lat,
}) {
  return (
    <div className="flex py-7 px-2 pr-4 border-b first:border-t first:mt-5 transition transform duration-200 ease-out hover:shadow-lg hover:opacity-80">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          alt={title}
          layout="fill"
          className="object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="text-gray-700">{location}</p>
          <HiOutlineHeart className="h-8 cursor-pointer" />
        </div>

        <div>
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>

        <div className="border-b pt-3 w-14"></div>

        <p className="text-sm text-gray-500 pt-3 flex-grow">{description}</p>

        <div className="flex justify-between">
          <p className="flex items-center">
            <HiStar className="h-7 text-red-400 mr-1" />
            {star}
          </p>

          <div>
            <p className="text-2xl font-semibold">{price}</p>
            <h1 className="text-right">{total}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
