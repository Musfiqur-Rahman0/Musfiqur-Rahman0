import React, { useContext, useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { GlobalContext } from "../Context/GlobalContext";
import { Link } from "react-router-dom";
// import { RiBillLine } from "react-icons/ri";
// import { ImBin2 } from "react-icons/im";

const Card = ({ product, index, Icon }) => {
  const { setIsWishListed, handleAddToCart, handleSelectedProduct } =
    useContext(GlobalContext);
  const [isHoveredProduct, setIsHoveredProduct] = useState(null);

  const handleRemoveWishlistedProducts = (productModel) => {
    // consuming that firstly it will remove the product form the wishlistedProduct array
    setIsWishListed((prevList) => {
      return prevList.filter((product) => product.model !== productModel);
    });
  };

  return (
    <div
      onClick={() => handleSelectedProduct(product)}
      key={index}
      className="h-full w-full flex flex-col"
    >
      <div
        onMouseEnter={() => setIsHoveredProduct(index)}
        onMouseLeave={() => setIsHoveredProduct(null)}
        className="flex flex-col  justify-center items-center h-[80%] w-full border relative"
      >
        {product.image && (
          <Link to="/productdetails" className="h-[50%] w-full">
            <img
              src={product.image}
              alt={product.tilte}
              className="h-full w-full object-contain"
            />
          </Link>
        )}
        {product.discount && (
          <span className="absolute top-4 left-2 px-2 text-[0.7rem]  bg-red-500 rounded-md text-white">
            -{product.discount}%
          </span>
        )}
        <span
          onClick={() => handleRemoveWishlistedProducts(product.model)}
          className="absolute top-2 right-2 cursor-pointer hover:bg-gray-200 p-2 rounded-full "
        >
          <Icon />
        </span>
        {isHoveredProduct === index && (
          <button
            onClick={() => handleAddToCart(product)}
            className="absolute bottom-0 bg-gray-800 text-white w-full py-1 text-sm flex items-center justify-center gap-3"
          >
            <CiShoppingCart size={25} />
            <p> Add to cart</p>
          </button>
        )}
      </div>
      <div className="mt-1">
        {product.model && (
          <h2 className=" font-semibold tracking-tight line-clamp-1">
            {product.model}
          </h2>
        )}
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
      </div>
    </div>
  );
};

export default Card;
