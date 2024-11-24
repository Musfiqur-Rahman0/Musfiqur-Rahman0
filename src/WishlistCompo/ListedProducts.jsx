import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

import Card from "./Card";
import { ImBin2 } from "react-icons/im";

const ListedProducts = () => {
  const { isWishListed } = useContext(GlobalContext);

  const deleteIcon = ImBin2;

  return (
    <div className="px-4  sm:px-16 mt-20 w-full">
      <div className="flex w-full justify-between  items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">Wislist</h2>
          {isWishListed.length !== 0 && <p>({isWishListed.length})</p>}
        </div>
        <button className="px-5 py-2 border border-black text-[0.7rem] font-semibold">
          Move to bag
        </button>
      </div>
      {isWishListed.length === 0 ? (
        <div>NO Products in the wishlist</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3 sm:mt-5">
          {isWishListed.map((product, index) => (
            <Card
              product={product}
              index={index}
              Icon={deleteIcon}
              // handleSelectedProducts={handleSelectedProducts}
              // handleRemoveWishlistedProducts={handleRemoveWishlistedProducts}
              // handleRemoveWishlistedProducts={handleRemoveWishlistedProducts}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListedProducts;
