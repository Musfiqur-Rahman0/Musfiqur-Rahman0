import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import ProductCard from "./ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Products = () => {
  const { heroProduct } = useContext(GlobalContext);
  console.log(heroProduct);

  return (
    <div className="h-auto w-full  pb-5 px-5 py-3 bg-[#f8f7ff]">
      <div className="flex gap-2 items-center">
        <div className="h-8 w-2 bg-orange-600 rounded-md"></div>
        <p className="text-sm text-orange-600 ">Our Products</p>
      </div>
      <div className="flex justify-between items-center mt-1 sm:mt-3">
        <h2 className="text-2xl font-semibold">Explore Our Products</h2>
        {/* <div className="flex items-center gap-5">
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <FaArrowLeft />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <FaArrowRight />
          </button>
        </div> */}
      </div>
      {/* products  */}
      <div className="flex flex-col  items-center">
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {heroProduct.map((product, idx) => (
            <ProductCard product={product} idx={idx} />
          ))}
        </div>
        <Link to="/products">
          <button className="w-fit mt-5 sm:mt-10 bg-orange-600 px-5 py-2 rounded-md text-[0.7rem] sm:text-sm text-white flex  items-center gap-3">
            View all products <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
