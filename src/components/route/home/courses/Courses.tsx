import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import img2 from "../../../../images/course/Databasae-programing.jpg";
import img3 from "../../../../images/course/Digital-marketing.jpg";
import img8 from "../../../../images/course/Ethical-hacking1.jpg";
import img4 from "../../../../images/course/Graphics-design2.jpg";
import img6 from "../../../../images/course/Video-editing.jpg";
import img5 from "../../../../images/course/Webdesign-and-devlopment.jpg";
import img7 from "../../../../images/course/auto-cad.jpg";
import img1 from "../../../../images/course/office-application.jpg";
import CoursesModel from "./CoursesModel";

export default function Courses() {
  return (
    <div className="space-y-10 bg-slate-100 px-2 py-16 md:px-20">
      <div className="space-y-4 text-center">
        <p className="text-4xl font-bold text-primary-100">
          আমাদের লেটেস্ট কোর্স সমূহঃ
        </p>
        <p>
          আমাদের চলমান সেরা কোর্সগুলো থেকে আপনার কাঙ্ক্ষিত কোর্স বেছে নিয়ে
          ক্যারিয়ার গড়ে তুলুন
        </p>
      </div>
      <div className="grid items-center justify-center gap-6 md:grid-cols-4">
        <CoursesModel img={img1} color="blue" title="অফিস অ্যাপলিকেশন" />
        <CoursesModel img={img2} color="green" title="ডাটাবেজ প্রোগ্রামিং" />
        <CoursesModel img={img3} color="blue" title="ডিজিটাল মার্কেটিং" />
        <CoursesModel img={img4} color="green" title="গ্রাফিক্স ডিজাইন" />
        <CoursesModel img={img5} color="yellow" title="ওয়েব ডিজাইন" />
        <CoursesModel img={img6} color="blue" title="ভিডিও এডিটিং" />
        <CoursesModel img={img7} color="yellow" title="অটোক্যাড" />
        <CoursesModel img={img8} color="green" title="ইথিক্যাল হ্যাকিং" />
      </div>
      <div className="flex items-center justify-center pt-6">
        <button className="flex items-center gap-2 rounded-md bg-primary-100 px-6 py-2 font-bold uppercase text-white">
          <span>
            <LuGraduationCap />
          </span>
          <span>View all courses</span>
        </button>
      </div>
    </div>
  );
}
