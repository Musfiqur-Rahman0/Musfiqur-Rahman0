import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { FaArrowRight, FaArrowRightLong, FaArrowUpLong } from "react-icons/fa6";

const NewArrival = () => {
  const { newProducts } = useContext(GlobalContext);

  return (
    <div className="pb-20 px-4 sm:px-10 pt-5">
      <div className="flex gap-2 items-center">
        <div className="h-8 w-2 bg-orange-600 rounded-md"></div>
        <p className="text-orange-600 mt-1 text-sm">Features</p>
      </div>
      <h2 className="mt-3 text-2xl font-semibold">New Arrival</h2>
      {newProducts.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="h-[250px] sm:h-[400px] w-full flex gap-5 items-center mt-5">
          <div className="h-full w-1/2 bg-black rounded-md relative">
            <img
              src={newProducts[2].image}
              alt={newProducts[2].title}
              className="h-full w-full object-contain"
            />
            <div className="absolute bottom-3 sm:bottom-8 left-3 sm:left-8 text-white  sm:w-[60%]">
              <h2 className="text-[0.8rem] sm:text-xl font-semibold">
                {newProducts[2].title}
              </h2>
              <p className="text-[0.6rem] sm:text-[0.8rem] text-gray-400">
                {newProducts[2].description}
              </p>
              <button className=" mt-1 sm:mt-3 text-[0.5rem] sm:text-sm hover:underline flex items-center gap-2">
                Shop now
                <span className="mt-[1px]">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>

          <div className="h-full w-1/2 flex flex-col gap-5">
            <div className="h-[60%] w-full relative">
              <img
                src={newProducts[3].image}
                alt={newProducts[3].title}
                className="h-full w-full object-cover rounded-md"
              />
              <div className="absolute bottom-2 sm:bottom-2 left-3 sm:left-8 text-white  sm:w-[60%]">
                <h2 className="text-[0.8rem] sm:text-sm font-semibold">
                  {newProducts[3].title}
                </h2>
                <p className="text-[0.6rem] sm:text-[0.8rem] text-gray-400">
                  {newProducts[3].description}
                </p>
                <button className="mt-1 sm:mt-3 text-[0.5rem] sm:text-sm text-gray-300  hover:underline flex items-center gap-2">
                  Shop now
                  <span className="mt-[1px]">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
            <div className="h-[35%] w-full flex items-center gap-5 ">
              <div className="bg-black  h-full w-1/2 rounded-md relative">
                <img
                  src={newProducts[1].image}
                  alt={newProducts[1].title}
                  className="h-full w-full object-contain"
                />
                <div className="hidden sm:block absolute bottom-2 left-4 text-white w-[60%]">
                  <h2 className="text-sm font-semibold">
                    {newProducts[1].title}
                  </h2>
                  <p className="text-[0.6rem] text-gray-400">
                    {newProducts[1].description}
                  </p>
                  <button className="mt-1 text-[0.7rem] text-gray-300  hover:underline flex items-center gap-2">
                    Shop now
                    <span className="mt-[1px]">
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
                <div className="sm:hidden absolute bottom-1 left-1 ">
                  <button className="text-[0.5rem] text-white flex items-center gap-1">
                    Shop now <FaArrowRightLong />
                  </button>
                </div>
              </div>
              <div className=" h-full w-1/2 bg-black rounded-md relative">
                <img
                  src={newProducts[0].image}
                  alt={newProducts[0].title}
                  className="h-full w-full object-contain"
                />
                <div className="hidden sm:block absolute bottom-2 left-4 text-white w-[60%]">
                  <h2 className="text-sm font-semibold">
                    {newProducts[0].title}
                  </h2>
                  <p className="text-[0.6rem] text-gray-400">
                    {newProducts[0].description}
                  </p>
                  <button className="mt-1 text-[0.7rem] text-gray-300 hover:underline flex items-center gap-2">
                    Shop now
                    <span className="mt-[1px]">
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
                <div className="sm:hidden absolute bottom-1 left-1 ">
                  <button className="text-[0.5rem] text-white flex items-center gap-1">
                    Shop now <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewArrival;
