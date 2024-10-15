import ProductSearchBar from "@/components/forms/ProductSearchBar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SubNavigation from "@/components/layout/SubNavigation";
import ProductsGrid from "@/components/sections/ProductsGrid";
import PromotionSection from "@/components/sections/PromotionSection";
import React from "react";

export default function Home() {
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
  ];

  return (
    <div className="bg-dark-gray">
      <Header />
      <SubNavigation />
      <div className="flex flex-col items-center justify-center xl:mt-10">
        <ProductSearchBar />
      </div>

      <ProductsGrid products={products} />

      <div className="xl:mt-8 xl:mb-8">
        <PromotionSection />
      </div>

      <Footer textColor="light-green" />
    </div>
  );
}
