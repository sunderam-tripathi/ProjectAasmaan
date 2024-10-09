import React from "react";

import SearchIcon from "@/assets/search-icon.svg";

const ProductSearchBar = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center bg-light-green rounded-full p-3 w-[45%] max-w-3xl">
        <input
          type="text"
          placeholder="a monochromatic logo of a Japanese's restaurant"
          className="bg-light-green font-prestiege text-black placeholder-black flex-grow px-3 py-2 text-sm rounded-full outline-none"
        />
        <button className="p-2">
          <SearchIcon />
        </button>
      </div>
      <button className="mt-5 bg-light-green text-black py-3.5 px-16 rounded-full font-base-mono text-sm">
        Search
      </button>
    </div>
  );
};

export default ProductSearchBar;
