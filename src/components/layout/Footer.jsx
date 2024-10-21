import Link from "next/link";
import React from "react";

import PropTypes from "prop-types";

const Footer = ({ textColor = "light-green" }) => {
  return (
    <footer className="px-0 lg:px-4 py-4 bg-transparent">
      <div className="flex justify-between flex-col lg:flex-row text-center lg:text-left">
        <span className={`text-${textColor} font-prestiege text-sm`}>
          Copyright © 2023 Open Design Solutions - All Rights Reserved.
        </span>

        <Link
          className={`text-${textColor} font-prestiege text-sm`}
          href="mailto:support@opendesign.solutions"
          target="_blank"
        >
          support@opendesign.solutions
        </Link>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  textColor: PropTypes.string,
};

export default Footer;
