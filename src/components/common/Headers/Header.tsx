import React from "react";
import { FiSearch } from "react-icons/fi";
import Menu from "./Menu";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="absolute top-0 z-50 w-full space-y-4 px-2 py-2 md:px-20">
      <div className="item-center flex justify-center text-xs font-thin text-gray-200 md:justify-start">
        Contact us on +930443093409
      </div>
      <div className="flex items-center justify-between">
        <div className="font-loveYa text-lg font-bold text-white md:text-3xl">
          বেস্ট কম্পিউটার ট্রেনিং সেন্টার
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Navigation />
          <FiSearch color="white" size={28} />
        </div>
        <Menu />
      </div>
      <div className="hidden h-1.5 rounded-full bg-white md:block"></div>
    </div>
  );
}
