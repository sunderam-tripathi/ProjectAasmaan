"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

const SubNavigation = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getActivePageName = () => {
    if (pathname === "/") {
      return "Home";
    } else if (pathname.includes("design-catalog")) {
      if (searchParams.get("search")) {
        return "Design Catalog > Search Results";
      }

      if (pathname === "/design-catalog") {
        return "Design Catalog";
      }

      return "Design Catalog > " + pathname.split("/")[2];
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
