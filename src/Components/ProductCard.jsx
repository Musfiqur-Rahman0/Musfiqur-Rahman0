import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import ToolsCompon from "./ToolsCompon";
import { Link } from "react-router-dom";

const ProductCard = ({ product, idx }) => {
  const { handleAddToCart, handleSelectedProduct } = useContext(GlobalContext);

  return (
    <>
      <div
        key={product.id}
        onClick={() => handleSelectedProduct(product)}
        className="h-full w-full flex flex-col px-4  bg-white shadow-lg rounded-lg relative"
      >
        <div className="h-[80%] w-full rounded-lg  ">
          <Link
            to="/productdetails"
            className="h-full w-full flex justify-center items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-[70%] w-[70%] object-contain cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex flex-col mt-2 pb-4">
          <h2 className="font-semibold text-sm line-clamp-1 ">
            {product.model}
          </h2>
          <div className="flex justify-between w-full h-fit">
            <div className="flex items-center gap-2">
              {product.discount ? (
                <p className="text-red-500 font-semibold">
                  $
                  {Math.floor(
                    product.price - (product.price * product.discount) / 100
                  )}
                </p>
              ) : (
                <p className="text-red-500 font-semibold">${product.price}</p>
              )}
              {product.discount && (
                <p className="line-through text-[0.8rem] text-gray-400">
                  ($
                  {Math.floor(
                    (product.price * product.discount) / 100 + product.price
                  )}
                  )
                </p>
              )}
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="font-semibold text-xl"
            >
              +
            </button>
          </div>
          <div className="h-fit">
            {product.discount && (
              <p className="text-[0.7rem] text-red-500">
                {product.discount}% discount
              </p>
            )}
          </div>
          <div className="flex gap-2 flex-wrap items-center mt-1 capitalize">
            {["brand", "color", "category"].map((key) => (
              <span className="px-2 py-1 bg-gray-200 rounded-md text-[0.4rem] sm:text-[0.6rem] cursor-pointer ">
                {product[key] && product[key]}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute right-2 top-2 flex flex-col ">
          <ToolsCompon idx={idx} product={product} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
