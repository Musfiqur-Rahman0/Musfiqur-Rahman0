import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { FaHeart, FaStar } from "react-icons/fa6";
import { services, sizes } from "../consents/Index";
import { CiHeart } from "react-icons/ci";
import { select } from "framer-motion/client";

const ProductForm = () => {
  const {
    selectedProduct,
    setSelectedProduct,
    handleSelectedTools,

    isWishListed,
  } = useContext(GlobalContext);

  const [quantity, setQuantity] = useState(1);
  const [isClicked, setIsClicked] = useState(null);
  const [selectedSize, setSelectedSize] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  //toggle the wishlist seclection
  const handleToggleWishlist = () => {
    setIsClicked(!isClicked);
  };

  // increment in product details
  const incrementSelectedProductQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrementSelectedProductQuantity = () => {
    setQuantity((prev) => {
      if (prev !== 0) {
        return prev - 1;
      } else {
        return 0;
      }
    });
  };

  console.log(isClicked);

  // cheek the size selection
  const handleSizeSelected = (size) => {
    setSelectedSize(size);
  };

  console.log(isWishListed);
  console.log(selectedProduct);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="h-full w-full space-y-2 sm:mt-5 "
    >
      <h2 className="text-xl font-semibold tracking-tight ">
        {selectedProduct.model}
      </h2>
      <div className=" flex items-center gap-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              <FaStar color="orange" />
            </span>
          ))}
        </div>
        <p className="text-[0.7rem] md:text-[0.6rem] text-gray-400">
          ({selectedProduct.review} reviews)
        </p>

        {selectedProduct.onSale && (
          <>
            <div className="h-4 w-[2px] rounded-lg bg-gray-500"></div>
            <span className="text-green-500 text-sm ">On Sale</span>
          </>
        )}
      </div>
      <div className="flex items-center gap-3">
        <h2 className=" text-xl text-red-500 tracking-wide ">
          ${selectedProduct.price}
        </h2>
        {selectedProduct.discount && (
          <>
            <p className="mt-1 text-gray-400 relative">
              ($
              {Math.floor(
                selectedProduct.price +
                  (selectedProduct.price * selectedProduct.discount) / 100
              )}
              )
              <div className="absolute top-3 w-full h-[2px] bg-red-500 rounded-lg rotate-[-5deg]"></div>
            </p>
          </>
        )}
      </div>
      {selectedProduct.discount && (
        <div className="flex items-center mt-0 text-[0.8rem] text-red-500">
          {selectedProduct.discount}% discount
        </div>
      )}
      <p className="text-[0.7rem]  tracking-tight">{selectedProduct.title}</p>
      <div className="w-full border border-gray-400"></div>
      <div className="flex items-center gap-2">
        <h2 className="text-xl tracking-tight">Colors : </h2>
        {[...Array(2)].map((_, index) => (
          <button
            key={index}
            className={`h-5 w-5 rounded-full border border-black ${
              index === 0 ? "bg-blue-400" : "bg-black"
            }`}
          ></button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-4  ">
        <h2 className="text-xl  tracking-tight mt-3">Size : </h2>
        <div className="flex flex-wrap mt-2 items-center gap-2">
          {sizes.map((size, idx) => (
            <div
              key={idx}
              onClick={() => handleSizeSelected(size)}
              className={`cursor-pointer border border-red-500 flex items-center text-[0.8rem] px-2 py-1  rounded-[5px] uppercase ${
                selectedSize === size
                  ? "bg-red-500 border-none text-white "
                  : ""
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <div className=" flex w-full items-center justify-between gap-5 pt-3 sm:pt-5 ">
        <div className="border border-black flex items-center w-1/3 justify-between ">
          <button
            onClick={decrementSelectedProductQuantity}
            className="text-xl border border-r-black flex justify-center items-center px-1 sm:px-2"
          >
            -
          </button>
          <p className="w-">{quantity}</p>
          <button
            onClick={incrementSelectedProductQuantity}
            className=" text-xl border border-l-black flex justify-center items-center px-1 sm:px-2"
          >
            +
          </button>
        </div>
        <button
          type="submit"
          className="w-1/2 px-4 py-2 text-[0.7rem] bg-red-500 text-white rounded-[5px]"
        >
          Buy Now
        </button>
        <span
          onClick={() => {
            handleSelectedTools(selectedProduct, "wishlist");
          }}
          className={`py-1 px-2 border-2 rounded-[5px] `}
        >
          {isWishListed.includes(selectedProduct) ? (
            <FaHeart size={24} color="red" />
          ) : (
            <CiHeart size={24} />
          )}
        </span>
      </div>
      <div className="pt-2">
        <div className="space-y-3 px-4 pt-4">
          {services.slice(1, 3).map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="flex gap-5 items-center pb-4  w-full ">
                <span>
                  <Icon size={30} />
                </span>
                <div className="">
                  <h2 className="font-semibold text-[.8rem] sm:text-[1rem] tracking-tight">
                    {service.text}
                  </h2>
                  <p className="text-[0.6rem] tracking-tighter font-light">
                    {service.des}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
