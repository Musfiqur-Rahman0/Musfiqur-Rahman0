import React, { useContext, useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { GlobalContext } from "../Context/GlobalContext";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const pages = ["products", "contact", "about", "singup"];
  const tools = [
    { icon: CiHeart, tooltip: "wishlist" },
    { icon: CiShoppingCart, tooltip: "cart" },
  ];

  const { isWishListed, cart } = useContext(GlobalContext);
  const [selectedTab, setSelectedTab] = useState(null);

  const handleSelectedPage = (index) => {
    setSelectedTab(index);
  };

  return (
    <nav className="fixed top-0  bg-white z-20 flex items-center justify-between h-16 w-full sm:px-10 px-2 border-b overflow-hidden ">
      <Link to="/">
        <h2 className="text-2xl font-bold">Exclusive</h2>
      </Link>
      <div className="hidden sm:block ">
        <div className="flex items-center gap-5">
          {pages.map((page, index) => (
            <AnimatePresence>
              <Link
                onClick={() => handleSelectedPage(index)}
                to={page}
                key={index}
                className={`capitalize text-[0.6rem] ${
                  selectedTab === index ? "text-red-500" : ""
                }`}
              >
                {page}
                {selectedTab === index && (
                  <motion.div
                    layoutId="underline"
                    key={index}
                    className="h-[2px] w-full bg-red-500 rounded-lg"
                  ></motion.div>
                )}
              </Link>
            </AnimatePresence>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="hidden sm:block">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none border border-black rounded-md px-4 py-1 "
            />
            <span className="absolute right-2 cursor-pointer">
              <CiSearch size={20} />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <Link to={tool.tooltip} key={idx}>
                <span className="cursor-pointer relative">
                  <Icon size={30} />

                  {idx === 0 ? (
                    <p className="text-[0.7rem] absolute top-[-8px] right-[-5px] bg-red-500 rounded-full  text-white px-2">
                      {isWishListed.length}
                    </p>
                  ) : (
                    <p className="text-[0.7rem] absolute top-[-8px] right-[-5px] bg-red-500 rounded-full  text-white px-2">
                      {cart.length}
                    </p>
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
