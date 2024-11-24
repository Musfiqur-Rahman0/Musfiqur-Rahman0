import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const productInfo = ["Products", "Price", "Quantity", "Subtotal"];
  const button = ["Back to Shop", "Update Cart"];
  const {
    incrementQuantity,
    decrementQuantity,
    addedCart,
    selectedProduct,
    handleSelectedProduct,
  } = useContext(GlobalContext);

  return (
    <div className="mt-24 px-3  sm:px-12">
      <div className="h-16 w-full border rounded-lg flex justify-between items-center px-5">
        {productInfo.map((info, i) => (
          <p key={i} className="text-sm font-semibold">
            {info}
          </p>
        ))}
      </div>

      <div className="mt-5 space-y-4">
        {addedCart.map((item, id) => (
          <div
            onClick={() => handleSelectedProduct(item)}
            key={id}
            className="flex items-center h-16  sm:h-20 w-full border pr-5"
          >
            <Link to="/productdetails" className="h-full w-[30%]">
              <div className="w-full h-full flex items-center gap-1">
                <div className="h-full  w-16 flex items-center ">
                  <img src={item.image} alt={item.title} />
                </div>
                <h2 className="w-[50%] font-semibold text-[0.8rem] line-clamp-1">
                  {item.model}
                </h2>
              </div>
            </Link>
            <p className="w-[10%]  text-center text-sm ">${item.price}</p>
            <div className="h-10 w-[50%] flex items-center justify-center ">
              <div className="h-full w-16  border-2 flex items-center justify-center gap-2 rounded-md">
                <p>{item.quantity}</p>
                <div className="flex flex-col items-center">
                  <button onClick={() => incrementQuantity(item.id)}>
                    <FaAngleUp size={20} color="gray" />
                  </button>
                  <button onClick={() => decrementQuantity(item.id)}>
                    <FaAngleDown size={20} color="gray" />
                  </button>
                </div>
              </div>
            </div>
            <p className=" w-[10%] text-sm text-end">
              ${item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 ">
        <div className="flex justify-between w-full">
          {button.map((btn, idx) => (
            <Link to={idx === 0 ? "/products" : "#"} key={idx}>
              <button className="px-2  sm:px-4 py-1 sm:py-2 border  text-[0.6rem] sm:text-[0.8rem]">
                {btn}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
