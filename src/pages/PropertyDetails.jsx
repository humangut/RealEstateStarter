import React from "react";

import { housesData } from "../utils/data";

import { useParams } from "react-router-dom";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

import { Link } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <section>
      <div className="container mx-auto p-14 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">{house.name}</h3>
            <p className="text-lg">{house.address}</p>
          </div>
          <div className="flex gap-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {house.type}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {house.country}
            </div>
          </div>
          <div className="">
            <div className="text-3xl font-semibold text-violet-600">
              $ {house.price}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 lg:flex-row ">
          <div className="max-w-[768px] flex flex-col gap-6">
            <div>
              <img src={`.${house.imageLg}`} alt="" />
            </div>
            <div className=" text-violet-700 flex gap-6">
              <div className="flex gap-2 items-center ">
                <BiBed className="text-2xl" />
                <div className="">{house.bedrooms}</div>
              </div>
              <div className="flex gap-2 items-center ">
                <BiBath className="text-2xl" />
                <div>{house.bathrooms}</div>
              </div>
              <div className="flex gap-2 items-center ">
                <BiArea className="text-2xl" />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className=" bg-white flex-1 w-full mb-auto border border-gray-300 rounded-lg px-6 py-8 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt="" />
              </div>
              <div className="">
                <div className="font-bold text-lg">{house.agent.name}</div>
                <Link to="" className="text-violet-700 text-sm">
                  View Listings
                </Link>
              </div>
            </div>
            <form className="flex flex-col gap-4">
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Name*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Email*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Phone*"
              />
              <textarea
                className="border border-gray-300 focus:border-b-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
                placeholder="Message*"
                defaultValue="Hello, I am interested in [Modern Apartment]"
              ></textarea>
              <div className="flex gap-2">
                <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition">
                  Send Message
                </button>
                <button className="border border-b-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full  transition">
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
