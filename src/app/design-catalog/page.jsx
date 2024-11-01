"use client";

import React from "react";
import CategoriesAndPromotion from "./ui/CategoriesAndPromotion";
import { useSearchParams } from "next/navigation";
import ProductSearchBar from "@/components/forms/ProductSearchBar";
import ProductsGrid from "@/components/sections/ProductsGrid";

const products = [
  {
    id: 1,
    image: "/product-demo4.png",
    price: "$29.99",
    link: "/design-catalog/product/1",
  },
  {
    id: 2,
    image: "/product-demo3.png",
    price: "$29.99",
    link: "/design-catalog/product/2",
  },
  {
    id: 3,
    image: "/product-demo2.png",
    price: "$29.99",
    link: "/design-catalog/product/3",
  },
  {
    id: 4,
    image: "/product-demo.png",
    price: "$29.99",
    link: "/design-catalog/product/4",
  },
  {
    id: 5,
    image: "/product-demo5.png",
    price: "$29.99",
    link: "/design-catalog/product/5",
  },
  {
    id: 6,
    image: "/product-demo4.png",
    price: "$29.99",
    link: "/design-catalog/product/6",
  },
  {
    id: 7,
    image: "/product-demo3.png",
    price: "$29.99",
    link: "/design-catalog/product/7",
  },
  {
    id: 8,
    image: "/product-demo2.png",
    price: "$29.99",
    link: "/design-catalog/product/8",
  },
  {
    id: 9,
    image: "/product-demo.png",
    price: "$29.99",
    link: "/design-catalog/product/9",
  },
  {
    id: 10,
    image: "/product-demo5.png",
    price: "$29.99",
    link: "/design-catalog/product/10",
  },
];

const Page = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  if (search) {
    return (
      <div className="flex flex-col items-center justify-center xl:mt-10 px-16 py-12">
        <ProductSearchBar isThin={true} />
        <ProductsGrid products={products} />
      </div>
    );
  }

  return (
    <div>
      <CategoriesAndPromotion />
    </div>
  );
};

export default Page;
