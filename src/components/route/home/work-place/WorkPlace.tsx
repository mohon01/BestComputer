import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from "../../../../images/workplace/fff.png";
import img1 from "../../../../images/workplace/fiverr.png";
import img3 from "../../../../images/workplace/toptal.png";
import img4 from "../../../../images/workplace/upwork.png";
import img5 from "../../../../images/workplace/youtube.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FaHandHoldingDollar } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";
import SectionHeader from "../../../animation/SectionHeader";

export default function WorkPlace() {
  return (
    <div className="mx-2 space-y-4 md:mx-20">
      <SectionHeader
        title="ছাত্রদের কর্মক্ষেত্র"
        text="আপনি যদি সম্পূর্ণরূপে কাজ শিখে নিজেকে দক্ষ ভাবে তৈরি করতে পারেন তাহলে অবশ্যই বিভিন্ন মার্কেটপ্লেস এ কাজ করতে পারবেন।"
        icon={FaHandHoldingDollar}
      />
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="my-auto flex items-center justify-center"
      >
        <SwiperSlide className="flex h-full items-center justify-center">
          <img
            src={img1}
            alt=""
            className="flex h-20 w-full items-center justify-center object-scale-down"
          />
        </SwiperSlide>
        <SwiperSlide className="flex h-full items-center justify-center">
          <img
            src={img2}
            alt=""
            className="flex h-20 w-full items-center justify-center object-scale-down"
          />
        </SwiperSlide>
        <SwiperSlide className="flex h-full items-center justify-center">
          <img
            src={img3}
            alt=""
            className="flex h-20 w-full items-center justify-center object-scale-down"
          />
        </SwiperSlide>
        <SwiperSlide className="flex h-full items-center justify-center">
          <img
            src={img4}
            alt=""
            className="flex h-20 w-full items-center justify-center object-scale-down"
          />
        </SwiperSlide>
        <SwiperSlide className="flex h-full items-center justify-center">
          <img
            src={img5}
            alt=""
            className="flex h-20 w-full items-center justify-center object-scale-down"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
