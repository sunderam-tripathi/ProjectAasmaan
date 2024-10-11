"use client";

import React from "react";
import PropTypes from "prop-types";

const FilterInput = ({
  label,
  name,
  value,
  onChange,
  onClear,
  options = [],
  allowClear = true,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-dark-gray text-xs font-base-mono tracking-tight mb-0"
      >
        {label}
      </label>
      <div className="flex gap-2">
        <div className="relative w-full">
          <select
            className="appearance-none border rounded-full py-1.5 px-4 pr-8 text-sm outline-none w-full"
            name={name}
            value={value}
            onChange={onChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {/* Dropdown Icon */}
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {allowClear && (
          <button
            className="text-dark-gray text-xs font-base-mono tracking-tight cursor-pointer underline"
            onClick={onClear}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

FilterInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  allowClear: PropTypes.bool,
};

export default FilterInput;
