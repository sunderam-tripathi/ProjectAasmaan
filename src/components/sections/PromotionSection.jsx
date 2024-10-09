import React from "react";

export default function PromoSection() {
  return (
    <div className="flex flex-col items-center justify-center mt-7 mb-8">
      <h2 className="text-light-green text-base font-semibold mb-6 text-center font-base-mono">
        Our design services are free for new businesses
      </h2>
      <button className="bg-light-green text-black py-3.5 px-12 text-sm rounded-full font-base-mono">
        Learn More
      </button>
    </div>
  );
}
