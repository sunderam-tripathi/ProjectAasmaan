import React from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SubNavigation from "@/components/layout/SubNavigation";
import HeroSection from "@/components/sections/HeroSection";
import DigitalAdvisory from "@/components/sections/DigitalAdvisory";
import BookAppointment from "@/components/sections/BookAppointment";
const Page = () => {
  return (
    <div className="bg-dark-gray">
      <div className="bg-dark-gray bg-hero-section bg-cover bg-center bg-no-repeat relative">
        <div className="bg-[#465758] bg-opacity-[75%]">
          <Header />

          <SubNavigation />
          <HeroSection />
        </div>
      </div>

      <DigitalAdvisory />
      <BookAppointment />
      <Footer textColor="light-green" />
    </div>
  );
};

export default Page;
