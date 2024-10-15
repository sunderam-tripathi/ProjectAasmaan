import ProductCard from "../cards/ProductCard";
import PropTypes from "prop-types";

const ProductsGrid = ({ products }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <div className="w-full max-w-6xl bg-white-green border-4 border-lime-400 p-6 text-center">
        <h2 className="text-black text-base mb-5 font-prestiege">
          a monochromatic logo of a Japanese&apos;s restaurant
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

ProductsGrid.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsGrid;
