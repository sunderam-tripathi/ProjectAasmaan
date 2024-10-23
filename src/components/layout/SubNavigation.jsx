"use client";

import React, { useState } from "react";
import { usePathname, useSearchParams, useParams } from "next/navigation";

import Cart from "../Modal/Cart";

const SubNavigation = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { product } = useParams();

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

      return "Design Catalog > " + pathname.split("/").slice(-2).join(" > ");
    } else if (pathname === "/about") {
      return "About Us";
    }

    return pathname;
  };

  return (
    <nav
      className={`px-6 lg:px-16 py-4 ${
        product ? "bg-white-green" : "bg-transparent"
      }`}
    >
      <ul
        className={`flex justify-between gap-6 items-center ${
          product ? "text-dark-gray" : "text-light-green"
        }`}
      >
        <li className="font-base-mono capitalize text-sm">
          {getActivePageName()}
        </li>
        <li
          className="font-base-mono capitalize text-sm"
          onClick={() => setCartOpen(true)}
        >
          Cart
        </li>
      </ul>
      <Cart open={cartOpen} setOpen={setCartOpen} />
    </nav>
  );
};

export default SubNavigation;
