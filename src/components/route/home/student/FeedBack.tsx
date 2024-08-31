import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Autoplay, Scrollbar } from "swiper/modules";
import FeedBackModel from "./FeedBackModel";

export default function FeedBack() {
  return (
    <div className="space-y-6">
      <div className="text-center text-3xl font-bold text-primary-100">
        ছাত্র প্রতিক্রিয়া
      </div>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Scrollbar, Autoplay]}
      >
        <SwiperSlide>
          <FeedBackModel />
        </SwiperSlide>
        <SwiperSlide>
          <FeedBackModel />
        </SwiperSlide>
        <SwiperSlide>
          <FeedBackModel />
        </SwiperSlide>
        <SwiperSlide>
          <FeedBackModel />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
