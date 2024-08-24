import React from "react";
import img1 from "../../../../images/partner/partners_01_bw.jpg";
import img2 from "../../../../images/partner/partners_02_bw.jpg";
import img3 from "../../../../images/partner/partners_03_bw.jpg";
import img4 from "../../../../images/partner/partners_04_bw.jpg";
import img5 from "../../../../images/partner/partners_05_bw.jpg";

export default function Partner() {
  return (
    <div className="flex items-center justify-center flex-col text-center py-10">
      <div className=" max-w-2xl space-y-8">
        <h1 className="text-4xl font-thin">Learn From the Best</h1>
        <div className="space-y-3 text-gray-500">
          <p>
            Our online courses are built in partnership with technology leaders
            and are relevant to industry needs.
          </p>
          <p>
            Upon completing a Online course, you'll receive a verified
            completion certificate recognized by industry leaders.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-20 mt-10">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </div>
    </div>
  );
}
