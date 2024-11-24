import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Card from "../WishlistCompo/Card";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReletedProducts = () => {
  const { wishlistedProducts, allProducts } = useContext(GlobalContext);

  const [relatedProducts, setReletedProducts] = useState([]);

  // console.log(wishlistedProducts);

  const handleReletedProducts = () => {
    const reletedProdctsCategory = wishlistedProducts.map(
      (cata) => cata.category
    );
    setReletedProducts(
      reletedProdctsCategory
        .map((category) =>
          allProducts.filter((product) => product.category === category)
        )
        .flat()
    );
  };

  // console.log(relatedProducts);

  useEffect(() => {
    handleReletedProducts();
  }, []);

  const someProducts = relatedProducts.filter((_, index) => index < 10);

  const showIcon = FaEye;

  return (
    <div className="mt-3 sm:mt-5 px-4 sm:px-16 pb-20 ">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-2 bg-orange-600 rounded-md "></div>
          <p>Just for you</p>
        </div>
        <Link to="/products">
          <button className="px-4 py-1 border border-black text-sm">
            See all
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {someProducts.map((product, idx) => (
          <Card product={product} index={idx} Icon={showIcon} />
        ))}
      </div>
    </div>
  );
};

export default ReletedProducts;
