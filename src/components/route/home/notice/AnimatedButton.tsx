import React from "react";

const AnimatedButton = () => {
  return (
    <div className="flex items-center justify-center">
      <button className="group relative overflow-hidden rounded-full border-4 border-primary-100 bg-transparent px-10 py-5 text-2xl text-primary-100 transition-all duration-700 hover:text-white">
        আবেদন করুন
        <span className="first absolute right-full top-0 -z-10 h-full w-3/12 bg-primary-100 transition-all duration-700 content-[] hover:right-0 group-hover:right-0 group-hover:top-0"></span>
        <span className="absolute -top-full left-1/4 -z-10 h-full w-3/12 bg-primary-100 transition-all duration-700 content-[] group-hover:left-1/2 group-hover:top-0"></span>
        <span className="absolute left-2/4 top-full -z-10 h-full w-3/12 bg-primary-100 transition-all duration-700 content-[] group-hover:left-1/4 group-hover:top-0"></span>
        <span className="absolute left-full top-0 -z-10 h-full w-3/12 bg-primary-100 transition-all duration-700 content-[] group-hover:left-0 group-hover:top-0"></span>
      </button>
    </div>
  );
};

export default AnimatedButton;
