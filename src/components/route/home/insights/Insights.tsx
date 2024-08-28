import React from "react";
import { FaCrown, FaUserCheck, FaUserGraduate } from "react-icons/fa";
import { FaSheetPlastic, FaUsers } from "react-icons/fa6";
import InsightsModel from "./InsightsModel";

export default function Insights() {
  return (
    <div className="my-20 flex flex-col items-center justify-center gap-10 px-2 text-center">
      <div className="space-y-3">
        <p className="text-4xl font-bold text-primary-100">
          আমাদের প্রতিষ্ঠানের পরিসংখ্যান
        </p>
        <p className="text-gray-600">
          আমাদের প্রতিষ্ঠান থেকে কোর্স শেষ করা হলে বাংলাদেশ কারিগরি শিক্ষা বোর্ড
          অথবা যুব উন্নয়ন কম্পিউটার প্রশিক্ষণ কেন্দ্র কর্তৃক পরীক্ষার মাধ্যমে
          সার্টিফিকেট প্রদান করা হয়
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-5 md:gap-20">
        <InsightsModel number={2230} label="মোট শিক্ষার্থী" icon={FaUsers} />
        <InsightsModel
          number={120}
          label="বর্তমান শিক্ষার্থী"
          icon={FaUserCheck}
        />
        <InsightsModel
          number={120}
          label="সফল শিক্ষার্থী"
          icon={FaUserGraduate}
        />
        <InsightsModel number={2230} label="মোট কোর্স" icon={FaSheetPlastic} />
        <InsightsModel number={2230} label="সফলতার বছর" icon={FaCrown} />
      </div>
    </div>
  );
}
