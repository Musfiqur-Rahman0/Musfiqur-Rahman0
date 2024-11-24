import React, { useContext, useEffect } from "react";
import ProductContainer from "../ProductDetails/ProductContainer";
import { GlobalContext } from "../Context/GlobalContext";
import Card from "../WishlistCompo/Card";
import { FaEye } from "react-icons/fa6";

const ProductsDetails = () => {
  const { selectedProduct, allProducts } = useContext(GlobalContext);

  const category = selectedProduct.category;
  const sameProducts = allProducts.filter(
    (product) => product.category === category
  );

  const icon = FaEye;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [selectedProduct]);

  return (
    <div className="mt-20 px-5 sm:px-10  w-full bg-white">
      {selectedProduct && (
        <>
          <ProductContainer />
          <div className="w-full mt-5">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-3 ">
                <div className="h-8 w-2 rounded-md bg-red-500 "></div>
                <p>Releted Products</p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {sameProducts.slice(5, 13).map((item, index) => (
                <Card product={item} index={index} Icon={icon} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsDetails;
