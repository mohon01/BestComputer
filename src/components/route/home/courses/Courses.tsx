import React from "react";
import CoursesModel from "./CoursesModel";

export default function Courses() {
  return (
    <div className="bg-slate-200 py-16 space-y-10 px-44">
      <p className="text-4xl flex items-center justify-center">
        Courses Starting Soon
      </p>
      <div className=" items-center justify-center  gap-16 grid grid-cols-3">
        <CoursesModel />
        <CoursesModel />
        <CoursesModel />
        <CoursesModel />
        <CoursesModel />
        <CoursesModel />
      </div>
    </div>
  );
}
