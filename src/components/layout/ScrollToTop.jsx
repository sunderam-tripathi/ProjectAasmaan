import React from "react";
import Link from "next/link";
import ScrollToTopIcon from "@/assets/back-to-top.svg";

const ScrollToTop = () => {
  return (
    <Link id="scroll-to-top" className="fixed bottom-0 right-0" href="#header">
      <ScrollToTopIcon />
    </Link>
  );
};

export default ScrollToTop;
