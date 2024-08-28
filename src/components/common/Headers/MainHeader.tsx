import React from "react";
import { FiSearch } from "react-icons/fi";
import img from "../../../images/green.jpg";
import Menu from "./Menu";
import Navigation from "./Navigation";

export default function MainHeader() {
  return (
    <div
      className=" z-50 border-dashed border-b-2 px-2 py-2"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "repeat",
        zIndex: 0,
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-xs font-thin flex item-center justify-center md:justify-start text-gray-200">
          Contact us on +930443093409
        </div>
        <div className="flex items-center justify-between">
          <div className="font-loveYa text-lg md:text-3xl font-bold text-white">
            বেস্ট কম্পিউটার ট্রেনিং সেন্টার
          </div>
          <div className="md:flex hidden items-center gap-2">
            <Navigation />
            <FiSearch color="white" size={28} />
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
}
