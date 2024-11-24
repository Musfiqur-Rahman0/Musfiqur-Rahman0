import React, { useContext, useState } from "react";
import { colors } from "../consents/Index";
import { GlobalContext } from "../Context/GlobalContext";

const Color = () => {
  const { selectedColor, setSelectedColor } = useContext(GlobalContext);
  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold sm:mb-3 mb-1 px-5">Colors</h2>
      <div>
        {colors.map((color, index) => (
          <div
            key={index}
            className="flex gap-4 mt-2 items-center w-full hover:bg-gray-200 px-5 py-1 rounded-lg"
          >
            <input
              type="radio"
              name="selectedColor"
              className="h-4 w-4 cursor-pointer"
              value={color}
              onChange={() => handleColorSelection(color)}
              checked={selectedColor === color}
            />
            <span className="text-sm capitalize">{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Color;
