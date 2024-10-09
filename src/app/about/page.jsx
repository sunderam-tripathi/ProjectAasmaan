import Footer from "@/components/layout/Footer";
import SubNavigation from "@/components/layout/SubNavigation";
import React from "react";

const Page = () => {
  return (
    <div className="bg-dark-gray">
      <SubNavigation />

      <Footer textColor="light-green" />
    </div>
  );
};

export default Page;
