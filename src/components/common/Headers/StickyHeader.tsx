import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import img from "../../../images/green.jpg";
import Menu from "./Menu";
import Navigation from "./Navigation";

export default function StickyHeader() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible =
        currentScrollPos > 250 &&
        (prevScrollPos > currentScrollPos || currentScrollPos < 250);

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed border-dashed border-b-2 px-2 py-2 z-50 left-1/2 duration-300 transition-all  top-50 w-full  -translate-x-1/2 transform space-y-4  ${
        visible ? "translate-y-0" : "-translate-y-24"
      }`}
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-5xl mx-auto">
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
