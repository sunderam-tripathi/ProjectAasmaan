import React from "react";
import PropTypes from "prop-types";

import DownArrow from "@/assets/down-arrow.svg";

const Select = ({ options, name, className = "text-white bg-black" }) => {
  return (
    <div className="relative inline-block w-auto">
      <select
        name={name}
        className={`block appearance-none w-full rounded-none px-5 py-3 pr-12 leading-tight focus:outline-none focus:ring-2 focus:ring-lime-500 ${className}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* Dropdown Icon */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <DownArrow />
      </div>
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Select;
