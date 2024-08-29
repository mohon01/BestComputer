import React from "react";
import img from "../../../../images/workplace.png";

export default function Payment() {
  return (
    <div className="mx-2 my-10 space-y-4 md:mx-20">
      <div className="text-center text-3xl font-bold text-primary-100 md:text-4xl">
        Payment
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-20">
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
    </div>
  );
}
