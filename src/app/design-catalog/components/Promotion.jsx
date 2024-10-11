import Link from "next/link";
import React from "react";

const Promotion = () => {
  return (
    <div className="w-1/2 p-10 flex flex-col items-center justify-center bg-design-catalog-promotion relative bg-left-top bg-cover">
      <div className="absolute inset-0 bg-dark-gray bg-opacity-80 bg-blend-multiply" />
      <div className="relative flex items-center justify-center h-full">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-2xl font-base mb-24 leading-normal font-base-mono">
              DIGITALLY EMPOWERING YOUR VISION WHILE YOU FOCUS ON THE MISSION
            </h1>
            <p className="text-base">
              Our design services are free for new businesses
            </p>
          </div>
          <Link
            href="/about"
            className="bg-light-green text-black py-3 px-8 text-sm rounded-full"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
