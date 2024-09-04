import { AnimatePresence, motion } from "framer-motion";
import { Link } from "gatsby";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      rotateX: -90,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      height: "auto",
      rotateX: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      rotateX: -90,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative md:hidden">
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="menu-items"
        className="focus:outline-none"
      >
        <MdMenu color="white" size="28" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="menu-items"
            className="absolute right-6 top-10 z-10 flex w-72 origin-top flex-col space-y-4 overflow-hidden rounded-lg bg-primary-100 px-10 py-5 text-white shadow-lg"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link to="/">হোমপেজ</Link>
            <Link to="/notice">নোটিশ</Link>
            <Link to="/course">কোর্স সমূহ</Link>
            <Link to="/application">আবেদন করুন</Link>
            <Link to="/about">আমাদের সম্পর্কে</Link>
            <Link to="/contact">যোগাযোগ</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
