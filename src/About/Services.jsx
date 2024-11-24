import React, { useContext } from "react";
import { services } from "../consents/Index";
import { GlobalContext } from "../Context/GlobalContext";

const Services = () => {
  const { isHovered, setIsHovered } = useContext(GlobalContext);
  console.log(isHovered);

  return (
    <div className="w-full mt-5 sm:px-20   flex flex-wrap sm:flex-nowrap justify-center items-center  gap-5 pb-20">
      {services.map((service, idx) => {
        const Icon = service.icon;
        return (
          <div
            key={idx}
            onMouseEnter={() => setIsHovered(service)}
            onMouseLeave={() => setIsHovered(null)}
            className="w-[45%] sm:w-1/3 flex flex-col justify-center  items-center gap-0 py-5  sm:p-4 hover:bg-red-500 hover:text-white rounded-lg"
          >
            <span
              className={`p-2 rounded-full text-[14px] sm:text-[20px] mb-3 ${
                isHovered === service
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              <Icon />
            </span>
            <div className="text-center">
              <h2 className="font-semibold text-[0.6rem] sm:text-sm  whitespace-nowrap">
                {service.text}
              </h2>
              <p className="text-[0.5rem] sm:text-[0.7rem] ">{service.des}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
