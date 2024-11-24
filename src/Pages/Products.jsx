import React, { useContext, useEffect, useRef, useState } from "react";
import { fetchAllProducts } from "../api/Api";
import ProductCard from "../Components/ProductCard";
import { GlobalContext } from "../Context/GlobalContext";
import Recomanded from "../Components/Recomanded";
import Sort from "../FiltersCompo/Sort";
import Color from "../FiltersCompo/Color";
import Price from "../FiltersCompo/Price";
import PaginationOk from "../Components/PaginationOk";

const Products = () => {
  const { filteredProducts } = useContext(GlobalContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);
  const scrolableDivRef = useRef();

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

  console.log(currentPage);

  useEffect(() => {
    if (scrolableDivRef.current) {
      scrolableDivRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [currentPage]);

  return (
    <div className="mt-16 flex overflow-hidden ">
      <div className="w-[20%] hidden sm:block">
        <div className="w-full border-r flex flex-col h-screen overflow-y-scroll no-scrollbar">
          <Sort />
          <Color />
          <Price />
        </div>
      </div>
      <div
        ref={scrolableDivRef}
        className="w-full sm:w-[80%] h-[100vh] overflow-hidden overflow-y-scroll no-scrollbar"
      >
        {/* <Navbar /> */}
        <div className="flex gap-2 items-center px-10 my-3">
          <div className="h-8 w-2 bg-orange-600 rounded-lg "></div>
          <p>Our products</p>
        </div>
        <Recomanded />
        {currentProducts.length === 0 ? (
          <div className="h-screen w-screen flex  items-center justify-center">
            <p>No products avaiable</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 px-4 sm:px-10">
            {currentProducts.map((product, idx) => (
              <ProductCard product={product} idx={idx} />
            ))}
          </div>
        )}
        <PaginationOk
          currentPage={currentPage}
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Products;
