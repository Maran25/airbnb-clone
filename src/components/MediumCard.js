import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div className="transition transform duration-300 hover:scale-105">
      <div className="relative h-80 w-80">
        <Image src={img} alt={title} layout="fill" className="rounded-xl"/>
      </div>

      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
