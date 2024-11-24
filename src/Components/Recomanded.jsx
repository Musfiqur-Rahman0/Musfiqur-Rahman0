import React, { useContext, useEffect, useState } from "react";
import { fetchCategoryData } from "../api/Api";
import { GlobalContext } from "../Context/GlobalContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const Recomanded = () => {
  const { category, setCategory, setSelectedCategory } =
    useContext(GlobalContext);

  const fetchCategory = async () => {
    try {
      const res = await fetchCategoryData();
      setCategory(["all", ...res.categories]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="sm:px-10 px-4 mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
      <h2 className="text-xl font-semibold">Recomanded </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
        className="flex gap-4 items-center w-full"
      >
        {category.map((cat, index) => (
          <SwiperSlide
            className="w-fit  space-x-2  "
            onClick={() => handleSelectedCategory(cat)}
            key={index}
          >
            <span className="capitalize px-4 py-1 bg-gray-100 rounded-lg cursor-pointer">
              {cat}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recomanded;
