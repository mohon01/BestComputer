import React from "react";

export default function FeedBackModel() {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
      <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pb-8 pt-0 text-gray-700 shadow-none">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          alt="Tania Andrew"
          className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h5 className="text-blue-gray-900 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
              পুরো নাম
            </h5>
          </div>
          <p className="text-blue-gray-900 block font-sans text-base font-light leading-relaxed antialiased">
            পদবী
          </p>
        </div>
      </div>
      <div className="mb-6 p-0">
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত
          ইউক্যালিপটাস অংশাবতার হালহদিশ পিতৃতর্পণ টকানো ঈক্ষিত জগজ্জন তকতনামা
        </p>
      </div>
    </div>
  );
}
