import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import React, { useRef, useState } from "react";

type NavItem = {
  label: string;
  id: number;
  path: string;
};

const normalizePath = (path: string) => {
  return path.replace(/\/+$/, "");
};

const Navigation = () => {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  const navItems: NavItem[] = [
    { id: 1, label: "হোমপেজ", path: "/" },
    { id: 2, label: "নোটিশ", path: "/notice" },
    { id: 3, label: "কোর্স সমূহ", path: "/course" },
    { id: 4, label: "আবেদন করুন", path: "/application" },
    { id: 5, label: "আমাদের সম্পর্কে", path: "/about" },
    { id: 6, label: "যোগাযোগ", path: "/contact" },
  ];

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
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <ul ref={navRef} className="relative flex list-none space-x-1">
        <div
          className={`absolute rounded bg-primary-100 shadow-lg transition-all duration-300 ease-in-out`}
          style={{
            ...getBackgroundStyles(),
            opacity: hoveredIndex !== null ? 1 : 0,
          }}
        ></div>

        {navItems.map((item, index) => (
          <li
            key={item.id}
            className={`relative z-10 cursor-pointer whitespace-nowrap py-2 font-medium uppercase tracking-tighter text-white transition-colors duration-300 ease-in-out ${
              normalizePath(location.pathname) === normalizePath(item.path)
                ? "rounded bg-primary-100"
                : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <Link to={item.path} className="p-4 py-2">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
