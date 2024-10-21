import React from "react";

import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="flex flex-col items-center text-center">
      <Link href={product?.link || "/"}>
        <div className="bg-gray-200 rounded-md mb-2">
          <Image
            src={product.image}
            alt={`Product ${product.id}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover border-2"
            width={0}
            height={0}
          />
        </div>
        <p className="text-black font-base-mono font-semibold text-base">
          {product.price}
        </p>
      </Link>
    </div>
  );
};

ProductCard.prototype = {
  product: PropTypes.exact({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default ProductCard;
