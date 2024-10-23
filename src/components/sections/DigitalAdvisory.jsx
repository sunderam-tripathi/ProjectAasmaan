import Image from "next/image";
import React from "react";

import AboutImage from "@/assets/asset-image-about-us.png";

const DigitalAdvisory = () => {
  return (
    <div className="bg-black">
      <div className="container px-1 lg:px-16 py-16 pb-0">
        <h1 className="text-light-green text-2xl lg:text-5xl text-center font-bold font-base-mono mb-12">
          Digital Support & Advisory @{" "}
          <span className="underline">anansol.com</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="px-1 py-0 lg:py-8 lg:p-8">
            <Image
              src={AboutImage}
              alt="Digital Advisory"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-1 py-0 lg:py-8 lg:p-12">
            <h3 className="text-light-green text-xl font-bold mb-12 font-base-mono">
              Empowering Innovations, Simplifying Operations
            </h3>

            <p className="mb-8 text-light-green font-base-mono text-sm">
              In the golden age of generative AI, we at{" "}
              <span className="underline">ANANSOL</span> stand as your
              passionate advocates and companions, fervently dedicated to
              fueling your business journey with unparalleled innovation. We
              envision a world where businesses can leverage the phenomenal
              power of AI without a shred of worry, focusing wholeheartedly on
              their core operations with an unwavering spirit of excellence.
            </p>

            <dl className="font-base-mono text-sm text-light-green my-5">
              <dt className="text-light-green mt-4 mb-1">
                * Unwavering Support:
              </dt>
              <dd>
                We are here to shoulder your digital burdens, offering steadfast
                support as you navigate the vibrant landscape of modern
                business.
              </dd>

              <dt className="text-light-green font-base-mono text-sm mt-4 mb-1">
                * Innovative Solutions:
              </dt>
              <dd>
                Our team is at the forefront of technological advancements,
                crafting solutions that are not only innovative but also deeply
                aligned with your business goals.
              </dd>

              <dt className="text-light-green font-base-mono text-sm mt-4 mb-1">
                * Hassle-Free Operations:
              </dt>
              <dd>
                We fervently believe in a business world devoid of digital
                hassles, where your operations run smoothly, powered by the
                seamless integration of AI solutions.
              </dd>

              <dt className="text-light-green font-base-mono text-sm mt-4 mb-1">
                * Passionate Partnership:
              </dt>
              <dd>
                At <span className="underline">ANANSOL</span>, we are not just
                service providers; we are your passionate partners, committed to
                witnessing and contributing to your journey of growth and
                success.
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="text-center text-light-green pb-12 font-base-mono tracking-tight">
        <h4 className="mb-3 text-xl font-bold">
          We cater to only 4 clients at a time & hope to serve them <br />
          the entire life of the business
        </h4>

        <h3 className="text-2xl font-bold">Current Vacancy - 3/4</h3>
      </div>
    </div>
  );
};

export default DigitalAdvisory;
