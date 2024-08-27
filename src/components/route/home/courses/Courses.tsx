import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import img1 from "../../../../images/course1.jpg";
import img2 from "../../../../images/course2.jpg";
import img3 from "../../../../images/course3.jpg";
import img4 from "../../../../images/course4.jpg";
import img5 from "../../../../images/course5.jpg";
import img6 from "../../../../images/course6.jpg";
import CoursesModel from "./CoursesModel";

export default function Courses() {
  return (
    <div className="bg-slate-200 py-16 space-y-10 px-2 md:px-44">
      <div className="text-center space-y-4">
        <p className="text-4xl text-primary-100 font-bold">
          আমাদের লেটেস্ট কোর্স সমূহঃ
        </p>
        <p>
          আমাদের চলমান সেরা কোর্সগুলো থেকে আপনার কাঙ্ক্ষিত কোর্স বেছে নিয়ে
          ক্যারিয়ার গড়ে তুলুন
        </p>
      </div>
      <div className=" items-center justify-center  gap-16 grid  md:grid-cols-3">
        <CoursesModel
          img={img1}
          color="blue"
          title="অফিস অ্যাপলিকেশন"
          price="$85"
          month
          category="Language"
        />
        <CoursesModel
          img={img2}
          color="green"
          title="ডাটাবেজ প্রোগ্রামিং"
          price="$195"
          month
          category="Marketing"
        />
        <CoursesModel
          img={img3}
          color="yellow"
          title="কম্পিউটার অপারেটর"
          price="Free"
          category="Social"
        />
        <CoursesModel
          img={img4}
          color="green"
          title="গ্রাফিক্স ডিজাইন"
          price="$85"
          category="Language"
        />
        <CoursesModel
          img={img5}
          color="yellow"
          title="ওয়েব ডিজাইন"
          price="$400"
          category="Medicine"
        />
        <CoursesModel
          img={img6}
          color="blue"
          title="ডিজিটাল মার্কেটিং"
          price="$120"
          month
          category="Computer"
        />
        <CoursesModel
          img={img4}
          color="yellow"
          title="মোশন গ্রাফিক্স"
          price="$120"
          month
          category="Computer"
        />
        <CoursesModel
          img={img2}
          color="blue"
          title="ভিডিও এডিটিং"
          price="$120"
          month
          category="Computer"
        />
        <CoursesModel
          img={img5}
          color="green"
          title="ইথিক্যাল হ্যাকিং"
          price="$120"
          month
          category="Computer"
        />
      </div>
      <div className="flex items-center justify-center pt-6">
        <button className="uppercase bg-primary-100 text-white flex items-center gap-2 px-6 py-2 rounded-md font-bold">
          <span>
            <LuGraduationCap />
          </span>
          <span>View all courses</span>
        </button>
      </div>
    </div>
  );
}
