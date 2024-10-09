import ProductSearchBar from "@/components/forms/ProductSearchBar";
import Footer from "@/components/layout/Footer";
import SubNavigation from "@/components/layout/SubNavigation";
import ProductsGrid from "@/components/sections/ProductsGrid";
import PromoSection from "@/components/sections/PromotionSection";
import React from "react";

export default function Home() {
  return (
    <div className="bg-dark-gray">
      <SubNavigation />
      <ProductSearchBar />
      <ProductsGrid />
      <PromoSection />
      <Footer textColor="light-green" />
    </div>
  );
}
