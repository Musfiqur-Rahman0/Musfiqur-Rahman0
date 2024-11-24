import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { icons } from "../consents/Index";
import { FaHeart } from "react-icons/fa";

const ToolsCompon = ({ idx, product }) => {
  const { isWishListed, handleSelectedTools } = useContext(GlobalContext);
  const [selectedIcons, setSelectedIcons] = useState(null);

  console.log(isWishListed);

  console.log(icons);

  return (
    <>
      {icons.map((icon, index) => {
        let Icon = icon.icon;
        if (index === 0 && isWishListed.includes(product)) {
          Icon = FaHeart;
        }
        return (
          <span
            key={index}
            onClick={() => {
              if (icon.tooltip === "wishlist") {
                handleSelectedTools(product, "wishlist");
              } else if (icon.tooltip === "show") {
                console.log("ok");
              }
            }}
            className="cursor-pointer p-2 hover:bg-gray-200 rounded-full relative"
          >
            <Icon
              size={20}
              className={` ${index === 0 ? "text-red-500" : "text-black"}`}
            />
          </span>
        );
      })}
    </>
  );
};

export default ToolsCompon;
