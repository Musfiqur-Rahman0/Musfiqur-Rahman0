import React, { useContext, useState } from "react";
import aboutusImg from "../assets/ps5-slim-goedkope-playstation_large 1.png";
import { aboutus, sales, value_convertor } from "../consents/Index";
import { GlobalContext } from "../Context/GlobalContext";

const AboutUs = () => {
  const { isHovered, setIsHovered } = useContext(GlobalContext);

  return (
    <div className="mb-20">
      <div className="mt-24 sm:mt-40 flex flex-row-reverse sm:flex-row gap-5 h-[40vh] w-full  sm:px-10">
        <div className="h-full w-1/2 flex flex-col  justify-center">
          <h2 className="text-2xl font-semibold tracking-wide">Our story</h2>
          <p className="text-[0.5rem] sm:text-[0.7rem]">{aboutus}</p>
        </div>
        <div className="h-full w-1/2 flex justify-end ">
          <img
            src={aboutusImg}
            alt="aboutusImg"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <div className="mt-10 ">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-7 w-2 rounded-lg bg-red-500"></div>
          <h2>Statistics</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:px-10  justify-between ">
          {sales.map((sale, index) => {
            const Icon = sale.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                className=" flex flex-col  items-center justify-center gap-5 border-2  hover:bg-red-500 hover:text-white rounded-lg py-5"
              >
                <span
                  className={`p-2  ${
                    isHovered === index
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  } rounded-full`}
                >
                  <Icon size={30} />
                </span>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="font-semibold tracking-tighter">
                    {value_convertor(sale.sale)}
                  </h2>
                  <p className="text-[0.6rem]">{sale.tip}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
