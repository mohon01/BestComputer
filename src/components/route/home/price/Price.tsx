import React from "react";
import { FiClock } from "react-icons/fi";

export default function Price() {
  return (
    <div className="flex relative items-center justify-center flex-col space-y-10 bg-slate-200 py-16 my-10">
      <div className="text-5xl">Plans & Pricing</div>
      <div className="grid grid-cols-3 gap-16">
        <div className=" rounded-lg overflow-clip w-[17rem]">
          <div className="bg-[#1b99b9] h-16 text-3xl flex items-center justify-center py-8 text-white">
            Trail
          </div>
          <div className="bg-primary-200 text-white h-[16rem] flex flex-col justify-between py-7">
            <div className="flex items-center space-y-4 justify-center flex-col">
              <div>
                <FiClock size={60} />
              </div>
              <div className="text-3xl">Free! 30 Days</div>
            </div>
            <button className=" w-fit mx-auto px-4 py-2 rounded shadow-2xl bg-[#1b99b9] text-white hover:bg-primary-300 uppercase transition-all duration-300">
              I want this plan
            </button>
          </div>
        </div>
        <div className=" rounded-lg overflow-clip w-[17rem]">
          <div className="bg-[#1aa881] h-16 text-3xl flex items-center justify-center py-8 text-white">
            Monthly
          </div>
          <div className="bg-primary-100 h-[16rem] flex flex-col justify-between text-white pt-4 pb-7">
            <div className="flex items-center space-y-4 justify-center flex-col">
              <div className="text-6xl font-bold">$89</div>
              <div className="text-sm font-thin px-4 text-center">
                Save $98 every year compared to the monthly plan by paying
                yearly.
              </div>
            </div>
            <button className=" w-fit mx-auto px-4 py-2 rounded shadow-2xl bg-[#1aa881] text-white hover:bg-primary-300 uppercase transition-all duration-300">
              I want this plan
            </button>
          </div>
        </div>
        <div className=" rounded-lg overflow-clip w-[17rem]">
          <div className="bg-[#efa00d] h-16 text-3xl flex items-center justify-center py-8 text-white">
            Trail
          </div>
          <div className="bg-primary-300 h-[16rem] flex flex-col text-white justify-between pt-4 pb-7">
            <div className="flex items-center space-y-4 justify-center flex-col">
              <div>
                <div className="text-6xl font-bold">$129</div>
              </div>
              <div className="text-sm font-thin px-4 text-center">
                Save $120 every year compared to the monthly plan by paying
                biannually.
              </div>
            </div>
            <button className=" w-fit mx-auto px-4 py-2 rounded shadow-2xl bg-[#efa00d] text-white hover:bg-primary-300 uppercase transition-all duration-300">
              I want this plan
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -top-20 bg-white w-16 h-16 rotate-45"></div>
    </div>
  );
}
