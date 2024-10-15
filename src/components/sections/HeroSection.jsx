import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[700px] xl:h-[800px]">
      <div className="container ml-auto pr-16 h-full flex flex-col justify-center items-center w-[55%]">
        <h1 className="font-bold text-center mb-12 text-light-green font-base-mono text-4xl">
          Your Digital Wingman for a Hassle-Free Business Journey
        </h1>
        <h3 className="text-center text-light-green font-base-mono text-2xl font-bold uppercase">
          we Provide <span className="text-white">Free</span> Graphic Designing
          Service
          <br />
          With No Hidden Cost for New Business
          <br />
          (Less than a year old)
        </h3>

        <button className="bg-light-green text-dark-gray px-6 py-3 rounded-full mt-12 font-base-mono text-sm">
          Set up an Appointment
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
