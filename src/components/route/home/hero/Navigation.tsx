import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

type NavItem = {
  label: string;
  id: number;
  path: string;
};

const Navigation: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const location = useLocation();

  const navItems: NavItem[] = [
    { id: 1, label: "HomePage", path: "/" },
    { id: 2, label: "Features", path: "/blog" },
    { id: 3, label: "Courses", path: "/gallery" },
    { id: 4, label: "Teachers", path: "/about" },
    { id: 5, label: "Blog", path: "/contact" },
    { id: 6, label: "Shop", path: "/shop" },
  ];

  // Calculate background styles based on the hovered index
  const getBackgroundStyles = () => {
    if (hoveredIndex === null || !navRef.current) return {};

    const adjustedIndex = hoveredIndex + 1; // Adjust index by 1
    const item = navRef.current.children[adjustedIndex] as HTMLElement;

    return {
      width: `${item.offsetWidth}px`,
      left: `${item.offsetLeft}px`,
      height: `${item.offsetHeight}px`,
      transition: "all 0.3s ease-in-out",
    };
  };

  return (
    <nav
      className="relative mx-auto max-w-4xl rounded-lg p-4"
      onMouseLeave={() => setHoveredIndex(null)} // Reset background when leaving the navbar
    >
      <ul ref={navRef} className="relative flex list-none space-x-1">
        {/* Background color layer */}
        <div
          className={`absolute rounded bg-primary-100 shadow-lg transition-all duration-300 ease-in-out`}
          style={{
            ...getBackgroundStyles(),
            opacity: hoveredIndex !== null ? 1 : 0, // Only show when hovering
          }}
        ></div>

        {navItems.map((item, index) => (
          <li
            key={item.id}
            className={`relative z-10 cursor-pointer whitespace-nowrap px-4 py-2 font-medium uppercase tracking-tighter text-white transition-colors duration-300 ease-in-out ${
              location.pathname === item.path ? "rounded bg-primary-100" : "" // Add a class for the current page
            }`}
            onMouseEnter={() => setHoveredIndex(index)} // Set background on hover
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
