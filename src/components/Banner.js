import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="banner"
        objectFit="cover"
        layout="fill"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-xl ">Not sure where to go? Perfect</p>
        <button className="text-purple-500 font-semibold bg-white py-4 px-10 rounded-full shadow-md my-3 transition duration-150 hover:shadow-lg active:scale-95">{`I'm Flexible`}</button>
      </div>
    </div>
  );
}

export default Banner;