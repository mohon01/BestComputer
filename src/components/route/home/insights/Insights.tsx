import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { FaSheetPlastic, FaUsers } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
import SectionHeader from "../../../animation/SectionHeader";
import InsightsModel from "./InsightsModel";

export default function Insights() {
  return (
    <div className="my-20 flex flex-col items-center justify-center gap-10 px-2 text-center">
      <SectionHeader
        title="আমাদের প্রতিষ্ঠানের পরিসংখ্যান"
        text="আমাদের প্রতিষ্ঠান থেকে কোর্স শেষ করা হলে বাংলাদেশ কারিগরি শিক্ষা বোর্ড
          অথবা যুব উন্নয়ন কম্পিউটার প্রশিক্ষণ কেন্দ্র কর্তৃক পরীক্ষার মাধ্যমে
          সার্টিফিকেট প্রদান করা হয়"
        icon={ImStatsDots}
      />

      <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-20">
        <InsightsModel number={2230} label="মোট শিক্ষার্থী" icon={FaUsers} />
        <InsightsModel
          number={120}
          label="বর্তমান শিক্ষার্থী"
          icon={FaUserCheck}
        />

        <InsightsModel number={8} label="মোট কোর্স" icon={FaSheetPlastic} />
      </div>
    </div>
  );
}
