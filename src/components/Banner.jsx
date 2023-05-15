import React from "react";

import HouseBanner from "../assets/house-banner.png";

import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="flex flex-col py-12 xl:py-24 gap-8 md:gap-0">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 gap-6">
          <h1 className="tetx-4xl lg:text-[58px] font-semibold leading-none">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us.
          </h1>
          <p className="max-w-[480px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            iure consequatur sapiente maiores aperiam voluptatem maxime eos
            soluta nostrum laborum?
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={`.${HouseBanner}`} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
