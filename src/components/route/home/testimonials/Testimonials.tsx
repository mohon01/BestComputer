import React from "react";
import { GoDotFill } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../images/clint1.jpg";
import img2 from "../../../../images/clint2.jpg";

export default function Testimonials() {
  return (
    <div className="py-10 bg-primary-200">
      <div className="max-w-5xl mx-auto">
        <Swiper
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div className="w-96 mx-auto flex text-gray-200 gap-2 items-center justify-center flex-col">
              <div>
                <img
                  src={img1}
                  alt=""
                  className="w-16 h-16 rounded-full border-2 border-white"
                />
              </div>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, quis?
              </div>
              <div>
                <GoDotFill />
              </div>
              <div>Mike tyson</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-96 mx-auto flex text-gray-200 gap-2 items-center justify-center flex-col">
              <div>
                <img
                  src={img2}
                  alt=""
                  className="w-16 h-16 rounded-full border-2 border-white"
                />
              </div>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, quis?
              </div>
              <div>
                <GoDotFill />
              </div>
              <div>Mike tyson</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-96 mx-auto flex text-gray-200 gap-2 items-center justify-center flex-col">
              <div>
                <img
                  src={img2}
                  alt=""
                  className="w-16 h-16 rounded-full border-2 border-white"
                />
              </div>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, quis?
              </div>
              <div>
                <GoDotFill />
              </div>
              <div>Mike tyson</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
