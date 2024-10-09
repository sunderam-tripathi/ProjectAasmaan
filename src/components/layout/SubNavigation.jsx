"use client";

import React from "react";
import { usePathname } from "next/navigation";

const SubNavigation = () => {
  const pathname = usePathname();

  const getActivePageName = () => {
    if (pathname === "/") {
      return "Home";
    } else if (pathname.includes("design-catalog")) {
      return "Design Catalog";
    } else if (pathname === "/about") {
      return "About Us";
    }

    return pathname;
  };

  return (
    <nav className="bg-transparent px-16 py-4">
      <ul className="flex justify-between">
        <li className="text-light-green font-base-mono capitalize text-sm">
          {getActivePageName()}
        </li>
        <li className="text-light-green font-base-mono capitalize text-sm">
          Cart
        </li>
      </ul>
    </nav>
  );
};

export default SubNavigation;
