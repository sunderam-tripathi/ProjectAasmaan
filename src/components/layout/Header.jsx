"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import HeaderLogo from "@/assets/header-logo.png";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-black flex items-center justify-between px-16 pr-[1.5rem] h-[120px]">
      <Link href="/">
        <Image
          src={HeaderLogo}
          alt="Open Design Solutions"
          width={200}
          height={150}
        />
      </Link>

      <nav className="inline-flex gap-x-5 align-middle h-[100%]">
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
          href={"/design-catalog/all"}
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
            pathname === "/about" ? "bg-dark-gray" : ""
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
