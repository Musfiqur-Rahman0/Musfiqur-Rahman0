import React from "react";
import { categories } from "../consents/Index";

const Categories = () => {
  return (
    <ul className="space-y-3 flex flex-col justify-center">
      {categories.map((category, idx) => (
        <li key={idx} className="text-[0.6rem] cursor-pointer">
          {category}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
