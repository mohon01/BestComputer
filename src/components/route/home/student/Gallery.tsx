import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../images/gallery/1.jpg";
import img2 from "../../../../images/gallery/2.jpg";
import img3 from "../../../../images/gallery/3.jpg";
import img4 from "../../../../images/gallery/4.jpg";
import img5 from "../../../../images/gallery/5.jpg";
import img6 from "../../../../images/gallery/6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Gallery() {
  return (
    <div className="space-y-4">
      <div className="text-center text-3xl font-bold text-primary-100">
        গ্যালারি
      </div>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 6,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 6,
          },
        }}
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
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
