import React from "react";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
    
  return (
    <div className="bg-white flex flex-col gap-3 shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <div className="flex flex-col gap-8">
        <img src={`.${image}`} alt="" className="" />
        <div className="flex gap-x-2 text-sm">
          <span className="bg-green-500 rounded-full text-white px-3">
            {type}
          </span>
          <span className="bg-violet-500 rounded-full text-white px-3">
            {country}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold max-w-[260px]">{address}</h3>
        <div className="flex gap-x-4">
          <div className="flex items-center text-gray-600 gap-1">
            <div className="text-[20px]">
              <BiBed />
            </div>
            <div className="">{bedrooms}</div>
          </div>
          <div className="flex items-center text-gray-600 gap-1">
            <div className="text-[20px]">
              <BiBath />
            </div>
            <div className="">{bathrooms}</div>
          </div>
          <div className="flex items-center text-gray-600 gap-1">
            <div className="text-[20px]">
              <BiArea />
            </div>
            <div className="">{surface}</div>
          </div>
        </div>
        <div className="text-lg font-semibold text-violet-600">{price}</div>
      </div>
    </div>
  );
};

export default House;
