import React from "react";
import img1 from "../../../../images/course1.jpg";
import img2 from "../../../../images/course2.jpg";
import img3 from "../../../../images/course3.jpg";
import img4 from "../../../../images/course4.jpg";
import img5 from "../../../../images/course5.jpg";
import img6 from "../../../../images/course6.jpg";
import CoursesModel from "./CoursesModel";

export default function Courses() {
  return (
    <div className="bg-slate-200 py-16 space-y-10 px-44">
      <p className="text-4xl flex items-center justify-center">
        Courses Starting Soon
      </p>
      <div className=" items-center justify-center  gap-16 grid grid-cols-3">
        <CoursesModel img={img1} color="blue" />
        <CoursesModel img={img2} color="green" />
        <CoursesModel img={img3} color="yellow" />
        <CoursesModel img={img4} color="green" />
        <CoursesModel img={img5} color="yellow" />
        <CoursesModel img={img6} color="blue" />
      </div>
    </div>
  );
}
