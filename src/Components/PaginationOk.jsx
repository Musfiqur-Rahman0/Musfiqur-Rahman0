import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

const PaginationOk = ({
  productsPerPage,
  currentPage,
  totalProducts,
  setCurrentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-5 py-10 px-4">
      <span>
        <FaArrowLeft />
      </span>
      <Swiper
        className="w-full h-full flex items-center justify-center"
        slidesPerView={5}
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
      >
        {pages.map((page, index) => (
          <SwiperSlide
            key={index}
            className={`text-center px-4 py-2 bg-gray-300 rounded-lg transition-transform duration-200 ${
              page === currentPage ? "border-2 border-black scale-105" : ""
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </SwiperSlide>
        ))}
      </Swiper>
      <span>
        <FaArrowRight />
      </span>
    </div>
  );
};

export default PaginationOk;
