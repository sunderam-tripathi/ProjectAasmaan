import React from "react";

import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "@/assets/cart.svg";
import BagIcon from "@/assets/bag.svg";
import EyeIcon from "@/assets/eye.svg";
const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="flex group/item flex-col items-center text-center"
    >
      <Link href={product?.link || "/"}>
        <div className="bg-gray-200 rounded-md mb-2 relative">
          <Image
            src={product.image}
            alt={`Product ${product.id}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover sm:border-2 border-none"
            width={0}
            height={0}
          />
          <div
            className=" p-1.5 sm:p-2 flex gap-1.5 bg-dark-green/50 sm:invisible sm:absolute sm:inset-0 justify-center items-center 
            sm:group-hover/item:bg-opacity-50 sm:group-hover/item:bg-dark-green transition-all duration-100 group-hover/item:visible"
          >
            <Link
              className="p-1.5 sm:p-3 rounded-full bg-light-green  hover:bg-slate-200"
              href="#"
            >
              <span>
                <CartIcon />
              </span>
            </Link>
            <Link
              className="p-1.5 sm:p-3 rounded-full bg-light-green hover:bg-slate-200"
              href="#"
            >
              <span>
                <BagIcon />
              </span>
            </Link>
            <Link
              className="p-1.5 sm:p-3 rounded-full bg-light-green hover:bg-slate-200"
              href="#"
            >
              <span>
                <EyeIcon />
              </span>
            </Link>
          </div>
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
