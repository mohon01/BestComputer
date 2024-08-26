import React from "react";
import { BsRocket } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";
import { GrUserFemale } from "react-icons/gr";

export default function Menu() {
  return (
    <div className="relative py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-between md:mx-40 gap-4 md:gap-16">
        <div className="flex flex-col items-center gap-8 text-primary-100">
          <div>
            <GrUserFemale size={60} />
          </div>
          <p className="text-center">
            Take computer science courses with personalized support
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 text-primary-100">
          <div>
            <BsRocket size={60} />
          </div>
          <p className="text-center">
            Build cool projects to showcase your skills
          </p>
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1 items-center gap-8 text-primary-100">
          <div>
            <FiGlobe size={60} />
          </div>
          <p className="text-center">
            Earn certificates recognized by Industry
          </p>
        </div>
      </div>
      <div className="bg-white h-16 w-16 rotate-45 absolute -bottom-8 -translate-x-1/2 left-1/2"></div>
    </div>
  );
}
