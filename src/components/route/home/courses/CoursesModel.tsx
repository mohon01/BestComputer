import React from "react";
import img1 from "../../../../images/course1.jpg";

export default function CoursesModel() {
  return (
    <div className="border bg-slate-100  rounded-lg overflow-hidden">
      <div className="relative">
        <img src={img1} alt="" className=" object-cover" />
        <div className=" absolute bottom-0 w-full p-4 text-2xl bg-primary-100 text-white">
          Introduction to computer science
        </div>
      </div>
      <div className="p-4">
        <p className="text-primary-100 font-bold text-3xl">Medicine</p>
        <p className="text-end text-3xl">Free</p>
      </div>
    </div>
  );
}
