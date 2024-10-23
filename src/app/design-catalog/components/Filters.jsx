"use client";

import React from "react";
import PropTypes from "prop-types";
import FilterInput from "@/components/forms/FilterInput";
import { initFlowbite } from "flowbite";

const Filters = ({ filters, handleChange, handleClear }) => {
  return (
    <div className="px-6 py-6 lg:py-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-dark-gray lg:block hidden text-base font-base-mono tracking-tighter">
          Filters
        </h2>
        <div
          id="accordion-collapse"
          className="lg:hidden block"
          data-accordion="collapse"
        >
          <h2
            id="accordion-collapse-heading-1"
            className="text-dark-gray text-base font-base-mono tracking-tighter"
          >
            <button
              type="button"
              class="flex items-center justify-between w-full p-0 font-medium rtl:text-right text-gray-500 border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-1"
            >
              <span>Filters</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div class="p-0 border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
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
        </div>

        <div className="lg:flex hidden flex-col gap-6 mt-8">
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
