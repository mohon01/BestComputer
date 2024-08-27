import { motion, Variants } from "framer-motion";
import React, { useState } from "react";

// Define possible directions
type Direction = "left" | "right" | "top" | "bottom" | "center";

interface props {
  img: string;
  color: string;
  title: string;
  price: string;
  month?: boolean;
  category: string;
}

export default function CoursesModel({
  img,
  color,
  title,
  price,
  month,
  category,
}: props) {
  const [hoverDirection, setHoverDirection] = useState<Direction>("center");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);

    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    if (x < width / 3) setHoverDirection("left");
    else if (x > (width * 2) / 3) setHoverDirection("right");
    else if (y < height / 3) setHoverDirection("top");
    else if (y > (height * 2) / 3) setHoverDirection("bottom");
    else setHoverDirection("center");
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    if (x < width / 3) setHoverDirection("left");
    else if (x > (width * 2) / 3) setHoverDirection("right");
    else if (y < height / 3) setHoverDirection("top");
    else if (y > (height * 2) / 3) setHoverDirection("bottom");
    else setHoverDirection("center");

    setIsHovered(false); // Trigger exit animation
  };

  // Variants for the animation
  const slideVariants: Variants = {
    left: { x: "-100%" },
    right: { x: "100%" },
    top: { y: "-100%" },
    bottom: { y: "100%" },
    center: { scale: 0, opacity: 0 },
    visible: { x: 0, y: 0, scale: 1, opacity: 1 },
  };

  return (
    <div
      className="border bg-slate-100 rounded-lg group overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hover content with direction-based animation */}
      <motion.div
        className={`absolute z-20 inset-0  ${
          color === "green"
            ? "bg-primary-100"
            : color === "blue"
            ? "bg-primary-200"
            : color === "yellow"
            ? "bg-primary-300"
            : ""
        }`}
        key={hoverDirection} // Key prop to re-render when hoverDirection changes
        variants={slideVariants}
        initial={isHovered ? hoverDirection : "visible"} // Handle direction on enter
        animate={isHovered ? "visible" : hoverDirection} // Animate to visible state or exit based on hover state
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="py-10 px-6 flex h-full items-center justify-between flex-col">
          <div className="text-white space-y-4">
            <div className="text-2xl">{title}</div>
            <div className="text-thin text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              deleniti?
            </div>
          </div>
          <div className="flex gap-5">
            <button className="bg-white hover:bg-primary-300 hover:text-white border transition-all duration-300 shadow-lg px-4 py-2 rounded text-orange-600 font-bold">
              Learn More
            </button>
            <button className="bg-white hover:bg-primary-300 hover:text-white border transition-all duration-300 shadow-lg px-4 py-2 rounded text-orange-600 font-bold">
              Buy Now
            </button>
          </div>
        </div>
      </motion.div>
      <div className="relative">
        <img
          src={img}
          alt="Course Image"
          className="object-cover w-full  md:h-60 "
        />
        <div
          className={`absolute bottom-0 w-full p-4 text-2xl text-white
        ${
          color === "green"
            ? "bg-primary-100"
            : color === "blue"
            ? "bg-primary-200"
            : color === "yellow"
            ? "bg-primary-300"
            : ""
        }
        `}
        >
          {title}
        </div>
      </div>
      {/* <div className="p-4">
        <p
          className={`text-xl  ${
            color === "green"
              ? "text-primary-100"
              : color === "blue"
              ? "text-primary-200"
              : color === "yellow"
              ? "text-primary-300"
              : ""
          }`}
        >
          {category}
        </p>
        {month ? (
          <div className="text-end space-x-3">
            <span className="text-3xl font-thin">{price}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-400">{month ? "Monthly" : null}</span>
          </div>
        ) : (
          <div className="text-end space-x-3">
            <span className="text-3xl font-thin">{price}</span>
          </div>
        )}
      </div> */}
    </div>
  );
}
