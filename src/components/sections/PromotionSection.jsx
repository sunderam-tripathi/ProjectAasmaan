import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const PromotionSection = ({
  textColor = "light-green",
  buttonText = "Learn More",
  buttonColor = "light-green",
  buttonTextColor = "black",
}) => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-8">
      <h2
        className={`text-${textColor} text-base font-semibold mb-7 text-center font-base-mono`}
      >
        Our design services are free for new businesses
      </h2>
      <Link
        href="/about"
        className={`bg-${buttonColor} text-${buttonTextColor} py-3.5 px-12 text-sm rounded-full font-base-mono`}
      >
        {buttonText}
      </Link>
    </div>
  );
};

PromotionSection.propTypes = {
  textColor: PropTypes.string,
  buttonText: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
};

export default PromotionSection;
