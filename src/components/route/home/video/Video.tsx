import React from "react";
import { CiVideoOn } from "react-icons/ci";
import img1 from "../../../../images/mac.webp";
import img2 from "../../../../images/thumb.jpg";

export default function Video() {
  return (
    <div className="border-t grid grid-cols-2 py-10 gap-20 max-w-5xl mx-auto">
      <div>
        <CiVideoOn size={50} className="text-primary-100" />
        <p className="text-4xl py-3">
          Our Video Training for Microsoft products and technologies
        </p>
        <p className="text-gray-500 py-3">
          Mauris vitae quam ligula. In tincidunt sapien sed nibh scelerisque
          congue. Maecenas ut libero eu metus tincidunt lobortis. Duis accumsan
          at mauris vel lacinia.
        </p>
        <button className="mt-6 px-4 py-2 bg-primary-200 rounded shadow-lg hover:bg-primary-300 transition-all duration-300 uppercase text-white font-bold">
          browse courses
        </button>
      </div>
      <div className="relative flex items-center justify-end">
        <img src={img1} alt="" className="h-80 relative overflow-hidden" />
        <img
          src={img2}
          alt=""
          className="absolute top-7 left-[4.6rem] rounded-lg scale-95  "
        />
      </div>
    </div>
  );
}
