import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../images/course1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Blog() {
  return (
    <div className="space-y-4">
      <div className="text-center text-3xl font-bold text-primary-100">
        Blog
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" className="h-44 w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" className="h-44 w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" className="h-44 w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" className="h-44 w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" className="h-44 w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="" className="h-44 w-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
