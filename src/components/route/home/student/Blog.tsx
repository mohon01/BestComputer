import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../images/thumb.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Blog() {
  return (
    <div className="space-y-4">
      <div className="text-center text-3xl font-bold text-primary-100">
        ব্লগ
      </div>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
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
