import React from "react";
import {
  FaDribbble,
  FaFacebookSquare,
  FaPinterestSquare,
  FaRss,
} from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="relative mt-80 md:mt-40">
      <div className="bg-gray-800 px-2 pt-48 md:pt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 py-10 text-white">
          <p className="text-center text-2xl font-bold md:text-4xl">
            বেস্ট কম্পিউটার ট্রেনিং সেন্টার
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-end text-end text-sm md:text-lg">
              <p>ঠিকানা</p>
              <p>ঠিকানা</p>
            </div>
            <div>
              <p>মোবাইল 239479348</p>
              <p>মোবাইল 239479348</p>
            </div>
          </div>
          <div className="flex items-center gap-10 text-xl md:text-5xl">
            <FaFacebookSquare />
            <FaXTwitter />
            <FaDribbble />
            <FaPinterestSquare />
            <FaRss />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-slate-950 py-4 text-center text-gray-400">
        কপিরাইট © ২০২০  সর্বসত্ত্ব সংরক্ষিত
      </div>

      <div className="absolute -top-48 left-0 flex w-full items-center justify-center md:-top-24">
        <div className="mx-2 grid h-96 w-full max-w-5xl grid-cols-1 rounded-2xl bg-slate-600 p-4 md:h-48 md:grid-cols-3">
          <div className="relative flex items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center gap-3 text-center">
              <div className="text-2xl text-primary-200">
                <FaLocationDot />
              </div>
              <p className="text-xl font-bold text-gray-200">ঠিকানা</p>
              <p className="text-gray-300">ঠিকানা</p>
            </div>
            <div className="absolute right-0 top-0 hidden h-full w-0.5 bg-gray-300 md:block"></div>
          </div>
          <div className="relative flex items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center gap-3 text-center">
              <div className="text-2xl text-primary-200">
                <MdCall />
              </div>
              <p className="text-xl font-bold text-gray-200">মোবাইল</p>
              <p className="text-gray-300">মোবাইল</p>
            </div>
            <div className="absolute right-0 top-0 hidden h-full w-0.5 bg-gray-300 md:block"></div>
          </div>
          <div className="flex items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center gap-3 text-center">
              <div className="text-2xl text-primary-200">
                <MdEmail />
              </div>
              <p className="text-xl font-bold text-gray-200">ই-মেইল</p>
              <p className="text-gray-300">ই-মেইল</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
