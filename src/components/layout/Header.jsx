"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import HeaderLogo from "@/assets/header-logo.png";
import Drawer from "../sections/Drawer";
import Menu from "@/assets/menu.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => setOpen(!open);

  return (
    <header
      className={`flex items-center justify-between px-6 lg:px-16 pr-[1.5rem] h-28 z-50 ${
        pathname === "/about" ? "bg-transparent" : "bg-black"
      }`}
    >
      <Link href="/">
        <Image
          src={HeaderLogo}
          alt="Open Design Solutions"
          className="max-w-44 xl:max-w-[200px]"
          width={200}
          height={150}
        />
      </Link>
      <button onClick={toggleDrawer}>
        <Menu className="lg:hidden" />
      </button>
      <Drawer open={open} setOpen={setOpen} />
      <nav className="hidden lg:inline-flex align-middle h-[100%]">
        <Link
          className={`font-base-mono text-light-green px-10 flex items-center justify-center text-sm ${
            pathname === "/" ? "bg-dark-gray" : ""
          }`}
          href={"/"}
        >
          <span className="text-center">Home</span>
        </Link>
        <Link
          className={`font-base-mono text-light-green px-10 flex items-center justify-center text-sm ${
            pathname.includes("design-catalog") ? "bg-dark-gray" : ""
          }`}
          href={"/design-catalog"}
        >
          <span className="text-center">Design Catalog</span>
        </Link>
        <Link
          className={`font-base-mono text-light-green px-10 flex items-center justify-center text-sm`}
          href={"#"}
        >
          <span className="text-center">Service</span>
        </Link>
        <Link
          className={`font-base-mono text-light-green px-10 flex items-center justify-center text-sm ${
            pathname === "/about" ? "bg-transparent underline" : ""
          }`}
          href={"/about"}
        >
          <span className="text-center">About Us/Contact Us</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
