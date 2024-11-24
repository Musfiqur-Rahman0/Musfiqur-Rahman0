import React from "react";
import Categories from "./Categories";
import { FaApple } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import img1 from "../assets/big-sale-discounts-products_23-2150336669.avif";
import img2 from "../assets/black-friday-super-sale-web-banner-template_120329-2158.avif";
import img3 from "../assets/gaming-laptop-sale-promotion-banner_252779-743.avif";
import img4 from "../assets/smart-phone-sale-promotion-black-friday-sale-web-banner-template_179771-192.avif";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const heroImg = [img1, img2, img3, img4];

  return (
    <div className="px-5 sm:px-10 h-[400px] sm:h-[250px] w-full mt-12 sm:mt-16 mb-10  flex gap-0 lg:gap-20">
      <div className="w-[16%]  border-r py-3 hidden sm:block">
        <Categories />
      </div>
      <div className="w-full sm:w-[80%] h-full flex flex-col sm:flex-row items-center gap-5">
        <div className="w-full sm:w-[40%] h-[60%]  flex flex-col justify-center relative">
          <div className="flex gap-2 items-center">
            <span>
              <FaApple size={35} />
            </span>
            <p className="mt-1 text-sm">iPhone 14 series</p>
          </div>
          <h2 className="text-4xl md:text-3xl lg:text-4xl font-semibold">
            Upto 10% off voucher
          </h2>
          <span className="absolute bottom-[-18px]   flex items-center gap-2">
            <Link to="/products" className="hover:underline">
              Shop Now
            </Link>
            <FaArrowRightLong />
          </span>
        </div>
        <div className="w-full sm:w-[60%] h-[90%]  rounded-lg">
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="h-full w-full"
          >
            {heroImg.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt="heroimg"
                  className="h-full w-full rounded-lg object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
