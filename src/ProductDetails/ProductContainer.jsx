import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import ProductForm from "./ProductForm";

const ProductContainer = () => {
  const { selectedProduct } = useContext(GlobalContext);

  console.log(selectedProduct);
  return (
    <div className="w-full h-auto md:h-[60vh] lg:h-[80vh] flex flex-col sm:flex-row items-center  sm:gap-5 bg-gray-100 ">
      <div className="w-full   sm:w-[60%] md:h-[60%] lg:h-[80%]  flex items-center gap-5 px-4 py-2 ">
        <div className="flex flex-col gap-4 justify-between h-full w-[35%]">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="h-14 w-full sm:h-1/4 sm:w-full bg-white shadow-lg rounded-md"
            ></div>
          ))}
        </div>
        {selectedProduct && (
          <div className="w-full h-full bg-white rounded-lg  shadow-lg ">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.model}
              className="w-full h-full  object-contain "
            />
          </div>
        )}
      </div>
      <div className="w-full sm:w-[40%]   px-4 py-5">
        <ProductForm />
      </div>
    </div>
  );
};

export default ProductContainer;
