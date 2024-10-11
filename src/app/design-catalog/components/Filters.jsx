"use client";

import React from "react";
import PropTypes from "prop-types";
import FilterInput from "@/components/forms/FilterInput";

const Filters = ({ filters, handleChange, handleClear }) => {
  return (
    <div className="px-6 py-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-dark-gray text-base font-base-mono tracking-tighter">
          Filters
        </h2>
        <div className="flex flex-col gap-6 mt-8">
          {filters.map((filter) => (
            <FilterInput
              id={filter.name}
              key={filter.name}
              label={filter.label}
              name={filter.name}
              value={filter.value}
              onChange={handleChange}
              onClear={handleClear}
              options={filter.options}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Filters.propTypes = {
  filters: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default Filters;
