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
      <Link className=" hover:bg-slate-100" href={product?.link || "/"}>
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
      <div className="flex flex-row gap-1 absolute mt-2">
        <a
          className="group/edit p-1 rounded-full  bg-white-green invisible hover:bg-slate-200 group-hover/item:visible"
          href="#"
        >
          <span>
            <CartIcon />
          </span>
        </a>
        <a
          className="group/edit p-1 rounded-full  bg-white-green invisible hover:bg-slate-200 group-hover/item:visible"
          href="#"
        >
          <span>
            <BagIcon />
          </span>
        </a>
        <a
          className="group/edit  p-1 rounded-full bg-white-green invisible hover:bg-slate-200 group-hover/item:visible"
          href="#"
        >
          <span>
            <EyeIcon />
          </span>
        </a>
      </div>
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
