import React from "react";
import { FiSearch } from "react-icons/fi";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="absolute left-1/2 top-0 z-50 w-full max-w-5xl -translate-x-1/2 transform space-y-4 py-2">
      <div className="text-xs font-thin flex item-center justify-center md:justify-start text-gray-200">
        Contact us on +930443093409
      </div>
      <div className="flex items-center justify-between">
        <div className="font-loveYa text-lg md:text-3xl font-bold text-white">
          Education Center
        </div>
        <div className="md:flex hidden items-center gap-2">
          <Navigation />
          <FiSearch color="white" size={28} />
        </div>
      </div>
      <div className="h-1.5 hidden md:block rounded-full bg-white"></div>
    </div>
  );
}
