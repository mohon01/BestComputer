import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../images/workplace.png";

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
            spaceBetween: 10,
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
            slidesPerView: 6,
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
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
