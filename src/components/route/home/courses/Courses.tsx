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
        <CoursesModel
          img={img1}
          color="blue"
          title="Principles of Written English Part 2"
          price="$85"
          month
        />
        <CoursesModel
          img={img2}
          color="green"
          title="Entrepreneurship 101: Who is your customer?"
          price="$195"
          month
        />
        <CoursesModel
          img={img3}
          color="yellow"
          title="Evaluating Social Programs"
          price="Free"
        />
        <CoursesModel
          img={img4}
          color="green"
          title="Principles of Written English Part 1"
          price="$85"
        />
        <CoursesModel
          img={img5}
          color="yellow"
          title="Introduction to Biomedical Imaging"
          price="$400"
        />
        <CoursesModel
          img={img6}
          color="blue"
          title="Introduction to Computer Science"
          price="$120"
          month
        />
      </div>
    </div>
  );
}
