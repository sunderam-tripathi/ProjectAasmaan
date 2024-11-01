import React from "react";
import PropTypes from "prop-types";

import FilterInput from "@/components/forms/FilterInput";

const VerticalFilters = ({ filters, handleChange, handleClear }) => {
  return (
    <div className="sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-16 hidden p-6 sm:px-16 lg:px-28 sm:py-10 border-b-light-green border-b-2">
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
          allowClear={filter.allowClear}
        />
      ))}
    </div>
  );
};

export default VerticalFilters;
