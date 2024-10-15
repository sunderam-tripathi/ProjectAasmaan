import React from "react";
import Image from "next/image";
import Link from "next/link";

import ProductImage from "@/assets/background.png";

const FeatureProduct = () => {
  return (
    <div className="w-full bg-white-green pt-5 px-16 py-16 mb-12">
      <div className="flex gap-10 font-base-mono">
        <div className="w-1/2 px-5">
          <Image src={ProductImage} alt="product" className="w-full" />
        </div>
        <div className="w-1/2 p-5">
          <h5 className="text-sm mb-3">
            Product ID - <span className="underline">#15523002</span>
          </h5>

          <h2 className="font-bold text-2xl mb-12">
            Heart theme Instagram post background (scalable)
          </h2>

          <Link href="/about" className="text-sm underline">
            Setup call for customization or specific requirements
          </Link>

          <div className="flex gap-10 items-start justify-between mt-3">
            <button className="px-16 py-3 bg-light-green rounded-full w-full">
              Buy this design
            </button>
            <button className="px-16 py-3 bg-dark-gray text-white rounded-full w-full">
              Add to cart
            </button>
          </div>

          <h6 className="text-base mt-12 mb-8 font-bold">
            Affordable Excellence for your brand
          </h6>

          <div className="text-sm space-y-8">
            <p>
              Open Design is dedicated to offering excellence in graphic design
              without breaking the bank. Our range of products is a testament to
              our commitment to helping businesses thrive in the digital era,
              with special offers for newcomers.
            </p>

            <ul className="list-[circle] list-inside mt-3">
              <li>Cost-effective graphic design solutions</li>
              <li>Complimentary services for businesses under a year old</li>
              <li>Versatile range to suit all business sectors</li>
              <li>Designs that embody modern trends</li>
              <li>A trusted partner in building your brand identity</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 items-center justify-between mt-16 w-full">
            <h6 className="text-base font-bold">
              For all your digital needs you can contact -
            </h6>
            <Link
              href="/about"
              className="text-center py-4 px-8 bg-light-green rounded-3xl block text-lg font-bold"
            >
              Digital Support & Advisory <br />@{" "}
              <span className="underline">anansol.com</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
