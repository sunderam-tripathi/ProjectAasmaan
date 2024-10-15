"use client";

import React from "react";

import SubNavigation from "@/components/layout/SubNavigation";
import Footer from "@/components/layout/Footer";
import PromotionSection from "@/components/sections/PromotionSection";
import Filters from "./components/Filters";
import VerticalFilters from "./components/VerticalFilters";
import ProductList from "./ui/ProductList";
import Header from "@/components/layout/Header";
import { useParams } from "next/navigation";

const verticalFilters = [
  {
    label: "Color",
    name: "color",
    value: "all",
    options: [
      { label: "All", value: "all" },
      { label: "Black", value: "black" },
      { label: "White", value: "white" },
      { label: "Green", value: "green" },
    ],
  },
  {
    label: "Customization level",
    name: "customization",
    value: "all",
    options: [
      { label: "All", value: "all" },
      { label: "Minimal", value: "minimal" },
      { label: "Moderate", value: "moderate" },
      { label: "Extensive", value: "extensive" },
    ],
  },
  {
    label: "Price",
    name: "price",
    value: "all",
    options: [
      { label: "All", value: "all" },
      { label: "Category 1", value: "category1" },
      { label: "Category 2", value: "category2" },
      { label: "Category 3", value: "category3" },
    ],
  },
  {
    label: "Style",
    name: "style",
    value: "all",
    options: [
      { label: "All", value: "all" },
      { label: "Category 1", value: "category1" },
      { label: "Category 2", value: "category2" },
      { label: "Category 3", value: "category3" },
    ],
  },
  {
    label: "Theme",
    name: "theme",
    value: "all",
    options: [
      { label: "All", value: "all" },
      { label: "Category 1", value: "category1" },
      { label: "Category 2", value: "category2" },
      { label: "Category 3", value: "category3" },
    ],
  },
  {
    label: "Usage",
    name: "usage",
    value: "all",
    options: [
      { label: "All", value: "all" },
      { label: "Category 1", value: "category1" },
      { label: "Category 2", value: "category2" },
      { label: "Category 3", value: "category3" },
    ],
  },
];

const horizontalFilters = [
  {
    label: "Industry",
    name: "industry",
    value: "all",
    allowClear: false,
    options: [
      { label: "All", value: "all" },
      { label: "Restaurant", value: "restaurant" },
      { label: "Retail", value: "retail" },
      { label: "Fashion", value: "fashion" },
      { label: "Bar & Nightclub", value: "bar-nightclub" },
      { label: "Hotel", value: "hotel" },
      { label: "Event", value: "event" },
      { label: "Other", value: "other" },
    ],
  },
  {
    label: "Type",
    name: "type",
    value: "all",
    allowClear: false,
    options: [
      { label: "All", value: "all" },
      { label: "Category 1", value: "category1" },
      { label: "Category 2", value: "category2" },
      { label: "Category 3", value: "category3" },
    ],
  },
];

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
  {
    id: 11,
    image: "/product-demo2.png",
    price: "$29.99",
    link: "/design-catalog/product/11",
  },
  {
    id: 12,
    image: "/product-demo.png",
    price: "$29.99",
    link: "/design-catalog/product/12",
  },
  {
    id: 13,
    image: "/product-demo4.png",
    price: "$29.99",
    link: "/design-catalog/product/13",
  },
  {
    id: 14,
    image: "/product-demo3.png",
    price: "$29.99",
    link: "/design-catalog/product/14",
  },
  {
    id: 15,
    image: "/product-demo2.png",
    price: "$29.99",
    link: "/design-catalog/product/15",
  },
  {
    id: 16,
    image: "/product-demo.png",
    price: "$29.99",
    link: "/design-catalog/product/16",
  },
  {
    id: 17,
    image: "/product-demo4.png",
    price: "$29.99",
    link: "/design-catalog/product/17",
  },
  {
    id: 18,
    image: "/product-demo3.png",
    price: "$29.99",
    link: "/design-catalog/product/18",
  },
  {
    id: 19,
    image: "/product-demo2.png",
    price: "$29.99",
    link: "/design-catalog/product/19",
  },
  {
    id: 20,
    image: "/product-demo.png",
    price: "$29.99",
    link: "/design-catalog/product/20",
  },
];

const Layout = ({ children }) => {
  const { product } = useParams();

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleClear = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="bg-dark-gray">
      <Header />
      <SubNavigation />
      {children}
      {!product && (
        <div className="bg-light-green">
          <PromotionSection
            textColor="dark-gray"
            buttonText="Learn More"
            buttonColor="dark-gray"
            buttonTextColor="light-green"
          />

          <div className="mx-4 flex bg-white-green">
            <div className="flex-[0.4]  border-r-light-green border-r-2">
              <Filters
                filters={verticalFilters}
                handleChange={handleChange}
                handleClear={handleClear}
              />
            </div>
            <div className="flex-1">
              <VerticalFilters
                filters={horizontalFilters}
                handleChange={handleChange}
                handleClear={handleClear}
              />
              <ProductList products={products} />
            </div>
          </div>

          <Footer textColor="dark-gray" />
        </div>
      )}
    </div>
  );
};

export default Layout;
