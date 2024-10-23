import React from "react";
import PropTypes from "prop-types";

import SearchIcon from "@/assets/search-icon.svg";

const ProductSearchBar = ({
  width = "45%",
  alignItems = "center",
  isThin = false,
}) => {
  return (
    <div
      className={`flex px-6 lg:px-0 flex-col custom-width justify-between ${
        alignItems === "center" ? "items-center" : "items-start"
      }`}
      style={{ width: width }}
    >
      <div
        className={`flex items-center bg-light-green rounded-full  w-full ${
          isThin ? "py-1 px-3" : "py-1 px-4 lg:py-3 lg:px-5"
        }`}
      >
        <input
          type="text"
          placeholder="a monochromatic logo of a Japanese's restaurant"
          className="bg-light-green font-prestiege text-black placeholder-black flex-grow px-3 py-2 border-none text-sm rounded-full outline-none tracking-tight"
        />
        <button className="p-2">
          <SearchIcon className="max-w-5 lg:max-w-8" />
        </button>
      </div>
      <button className="mt-5 bg-light-green text-black py-3.5 px-16 rounded-full font-base-mono text-sm">
        Search
      </button>
    </div>
  );
};

ProductSearchBar.propTypes = {
  width: PropTypes.string,
  alignItems: PropTypes.string,
  isThin: PropTypes.bool,
};

export default ProductSearchBar;
