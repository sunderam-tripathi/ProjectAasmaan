import React from "react";
import PropTypes from "prop-types";
import ProductCard from "@/components/cards/ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="px-6 lg:px-16 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
