import React, { useContext } from "react";

import { prices } from "../consents/Index";
import { GlobalContext } from "../Context/GlobalContext";

const Price = () => {
  const { selectedPrice, setSelectedPrice } = useContext(GlobalContext);
  const handleSelectedprice = (price) => {
    setSelectedPrice(price);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-1 sm:mb-1 px-5">Price</h2>
      <div>
        {prices.map((price, index) => (
          <div
            key={index}
            className="space-x-4 flex items-center mt-2 hover:bg-gray-200 px-5 py-1"
          >
            <input
              type="radio"
              name="selectedPrice"
              className="h-4 w-4 cursor-pointer"
              value={price}
              onChange={() => handleSelectedprice(price)}
              checked={selectedPrice === price}
            />
            <span className="capitalize text-sm">{price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
