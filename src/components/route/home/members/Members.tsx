import React from "react";
import { FaUsers } from "react-icons/fa";
import img from "../../../../images/user.webp";
import SectionHeader from "../../../animation/SectionHeader";
import MembersModel from "./MembersModel";

export default function Members() {
  return (
    <div className="mx-2 flex flex-col items-center justify-center gap-10 text-center md:mx-20">
      <SectionHeader
        title="প্রতিষ্ঠানের সদস্যগণ"
        text="আমাদের কোর্স সমূহ পরিচালনার জন্য রয়েছে একদল দক্ষ ইন্সট্রাক্টর যারা
          সরাসরি বিভিন্ন কাজের সাথে জড়িত"
        icon={FaUsers}
      />

      <div className="grid gap-10 md:grid-cols-3">
        <MembersModel
          name="পুরো নাম
"
          title="পদবী"
          img={img}
        />
        <MembersModel
          name="পুরো নাম
"
          title="পদবী"
          img={img}
        />
        <MembersModel
          name="পুরো নাম
"
          title="পদবী"
          img={img}
        />
      </div>
    </div>
  );
}
