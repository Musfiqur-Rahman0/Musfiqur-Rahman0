import { useContext } from "react";

import { fileredOption } from "../consents/Index";
import { GlobalContext } from "../Context/GlobalContext";

const Sort = () => {
  const { selectedSorting, setSelectedSorting } = useContext(GlobalContext);

  const handleFilterSelection = (option) => {
    setSelectedSorting(option);
  };

  return (
    <div className="w-full mt-3">
      <h2 className="text-2xl font-bold tracking-wide mb-1 sm:mb-3 px-5">
        Filter by
      </h2>
      {fileredOption.map((option, index) => (
        <div
          key={index}
          className=" flex gap-4 mt-2 items-center px-5 py-1 rounded-md hover:bg-gray-200 "
        >
          <input
            type="radio"
            value={option}
            onChange={() => handleFilterSelection(option)}
            checked={selectedSorting === option}
            className="h-4 w-4 rounded-full cursor-pointer"
          />

          <span className="capitalize text-sm whitespace-nowrap">{option}</span>
        </div>
      ))}
    </div>
  );
};

export default Sort;
