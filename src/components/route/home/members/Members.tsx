import React from "react";
import MembersModel from "./MembersModel";

export default function Members() {
  return (
    <div className="mx-2 mb-60 flex flex-col items-center justify-center gap-10 text-center md:mx-20">
      <div className="space-y-3">
        <div className="text-2xl font-bold text-primary-100 md:text-4xl">
          প্রতিষ্ঠানের সদস্যগণ
        </div>
        <div className="text-gray-600">
          আমাদের কোর্স সমূহ পরিচালনার জন্য রয়েছে একদল দক্ষ ইন্সট্রাক্টর যারা
          সরাসরি বিভিন্ন কাজের সাথে জড়িত
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <MembersModel />
        <MembersModel />
        <MembersModel />
      </div>
    </div>
  );
}
