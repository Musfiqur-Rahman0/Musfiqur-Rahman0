import React, { useContext, useEffect, useState } from "react";
import HeroSection from "../Components/HeroSection";
import Products from "../Components/Products";
import NewArrival from "../NewArrival/NewArrival";
import { GlobalContext } from "../Context/GlobalContext";

const Home = () => {
  const { allProducts, filteredProducts, setFilteredProducts } =
    useContext(GlobalContext);

  useEffect(() => {}, []);

  console.log(filteredProducts);

  return (
    <div className="mt-8 overflow-hidden">
      <HeroSection />
      <Products />
      <NewArrival />
    </div>
  );
};

export default Home;
