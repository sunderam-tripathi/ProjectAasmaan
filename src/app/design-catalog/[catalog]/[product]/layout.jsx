import ProductSearchBar from "@/components/forms/ProductSearchBar";
import Footer from "@/components/layout/Footer";
import ProductsGrid from "@/components/sections/ProductsGrid";
import React from "react";

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
    image: "/product-demo4.png",
    price: "$29.99",
    link: "/design-catalog/product/5",
  },
  {
    id: 6,
    image: "/product-demo3.png",
    price: "$29.99",
    link: "/design-catalog/product/6",
  },
  {
    id: 7,
    image: "/product-demo2.png",
    price: "$29.99",
    link: "/design-catalog/product/7",
  },
  {
    id: 8,
    image: "/product-demo.png",
    price: "$29.99",
    link: "/design-catalog/product/8",
  },
  {
    id: 9,
    image: "/product-demo4.png",
    price: "$29.99",
    link: "/design-catalog/product/9",
  },
  {
    id: 10,
    image: "/product-demo3.png",
    price: "$29.99",
    link: "/design-catalog/product/10",
  },
];

const Layout = ({ children }) => {
  return (
    <div>
      {children}

      <div className="flex justify-center items-center flex-col mb-10">
        <ProductSearchBar />
        <ProductsGrid products={products} />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
