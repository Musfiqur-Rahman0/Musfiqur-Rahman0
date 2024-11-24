import React, { useContext, useEffect, useState } from "react";
import CartContainer from "../Components/CartContainer";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import Card from "../WishlistCompo/Card";
import { FaEye } from "react-icons/fa";

const Cart = () => {
  const { wishlistedProducts, allProducts, addedCart } =
    useContext(GlobalContext);
  const [reletedProducts, setReletedProducts] = useState([]);

  const handleWishlistCategory = () => {
    setReletedProducts(
      addedCart
        .map((items) =>
          allProducts.filter((product) => product.category === items.category)
        )
        .flat()
    );
  };

  const displayProducts = reletedProducts.filter((_, index) => index < 10);

  useEffect(() => {
    handleWishlistCategory();
  }, []);

  const showIcon = FaEye;

  return (
    <div>
      <CartContainer />
      <div className="mt-5 sm:mt-10 px-4  sm:px-16 pb-20 ">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-2 bg-orange-600 rounded-md "></div>
            <p>Just for you</p>
          </div>
          <Link to="/products">
            <button className="px-4 py-1 border border-black text-[0.7rem]">
              See all
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-3 sm:mt-10 gap-5">
          {displayProducts.map((item, idx) => (
            <Card product={item} index={idx} Icon={showIcon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
