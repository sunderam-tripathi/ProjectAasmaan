import React from "react";

import ProductSearchBar from "@/components/forms/ProductSearchBar";
import Categories from "../components/Categories";
import Promotion from "../components/Promotion";

const CategoriesAndPromotion = () => {
  return (
    <div className="text-light-green font-base-mono px-16 bg-dark-gray">
      <div className="w-[48%] mt-8">
        <h2 className="text-base mb-4">Design Categories</h2>
        <hr className="border-light-green opacity-60" />
      </div>

      <div className="flex pb-16">
        <div className="w-1/2 pb-10 flex flex-col justify-between">
          <Categories />
          <div className="mt-10">
            <ProductSearchBar width="90%" alignItems="center" isThin={true} />
          </div>
        </div>

        <Promotion />
      </div>
    </div>
  );
};

export default CategoriesAndPromotion;
