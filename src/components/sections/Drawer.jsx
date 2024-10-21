import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Drawer({ open, setOpen }) {
  const closeDrawer = () => {
    setOpen(false);
  };
  const pathname = usePathname();
  return (
    <Dialog open={open} onClose={closeDrawer} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-dark-green bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none w-2/3 justify-end fixed inset-y-0 right-0 flex max-w-full">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-dark-gray py-6 shadow-xl">
                <div className="px-4 sm:px-6"></div>
                <div className="relative mt-6 flex flex-col gap-2 px-4 sm:px-6">
                  <Link
                    className={`font-base-mono text-light-green px-0 block lg:flex items-center justify-center text-base ${
                      pathname === "/" ? "bg-dark-gray" : ""
                    }`}
                    href={"/"}
                  >
                    <span className="text-center">Home</span>
                  </Link>
                  <Link
                    className={`font-base-mono text-light-green px-0 block lg:flex items-center justify-center text-base ${
                      pathname.includes("design-catalog") ? "bg-dark-gray" : ""
                    }`}
                    href={"/design-catalog"}
                  >
                    <span className="text-center">Design Catalog</span>
                  </Link>
                  <Link
                    className={`font-base-mono text-light-green px-0 block lg:flex items-center justify-center text-base`}
                    href={"#"}
                  >
                    <span className="text-center">Service</span>
                  </Link>
                  <Link
                    className={`font-base-mono text-light-green px-0 block lg:flex items-center justify-center text-base ${
                      pathname === "/about" ? "bg-transparent underline" : ""
                    }`}
                    href={"/about"}
                  >
                    <span className="text-center">About Us/Contact Us</span>
                  </Link>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
