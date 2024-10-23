"use client";

import React from "react";
import PropTypes from "prop-types";

import { Accordion } from "flowbite-react";

import FilterInput from "@/components/forms/FilterInput";

const Filters = ({ filters, verticalFilters, handleChange, handleClear }) => {
  return (
    <div className="px-6 py-6 lg:py-10 border-b-light-green border-b-2 sm:border-b-0">
      <div className="flex flex-col gap-4">
        <h2 className="text-dark-gray lg:block hidden text-base font-base-mono tracking-tighter">
          Filters
        </h2>

        <Accordion className="border-none sm:hidden" collapseAll>
          <Accordion.Panel className="border-none">
            <Accordion.Title className="text-dark-gray text-base font-base-mono tracking-tighter border-none p-0 focus:ring-0">
              Filters
            </Accordion.Title>
            <Accordion.Content className="p-0">
              <div className="p-0 border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <div className="flex flex-col gap-6 mt-8">
                  {[...filters, ...verticalFilters].map((filter) => (
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
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>

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
  verticalFilters: PropTypes.array.isRequired,
};

export default Filters;
