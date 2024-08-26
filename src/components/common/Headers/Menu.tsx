import { AnimatePresence, motion } from "framer-motion";
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
    <div className="md:hidden relative">
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
            className="absolute right-6 top-10 w-72 p-5 overflow-hidden space-y-4 bg-primary-100 text-white rounded-lg shadow-lg z-10 origin-top"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p>Homepage</p>
            <p>Features</p>
            <p>Courses</p>
            <p>Teacher</p>
            <p>Blog</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
