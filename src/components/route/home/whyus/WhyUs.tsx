import React from "react";
// Import Swiper React components
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import {
  FaRegClipboard,
  FaRegHandshake,
  FaRegKeyboard,
  FaRegLightbulb,
  FaRegUser,
} from "react-icons/fa";
import { FiClock, FiDollarSign } from "react-icons/fi";
import { GiShipWheel } from "react-icons/gi";
import { GoVerified } from "react-icons/go";
import { GrDocument } from "react-icons/gr";
import { IoCloudyNightOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "../../../animation/SectionHeader";
import WhyUsModel from "./WhyUsModel";

export default function WhyUs() {
  return (
    <div className="my-10 space-y-10 px-2 md:px-20">
      <SectionHeader
        title="আমাদের প্রতিষ্ঠানে কেন"
        text="অন্য প্রতিষ্ঠান থেকে আমরা কেন আলাদা? আমাদের প্রতিষ্ঠানকে কেন বেছে
          নিবেন?"
        icon={GiShipWheel}
      />

      <Swiper
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
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
        modules={[Pagination, FreeMode, Autoplay]}
      >
        <SwiperSlide>
          <WhyUsModel
            text="ন্যূনতম কোর্স ফিতে সর্বোৎকৃষ্ট মানের প্রশিক্ষণ"
            icon={FiDollarSign}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WhyUsModel
            text="আধুনিক ও সুসজ্জিত মাল্টিমিডিয়া কম্পিউটার ল্যাব"
            icon={RiComputerLine}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WhyUsModel text="এককভাবে প্রশিক্ষণ দেওয়া হয়" icon={FaRegUser} />
        </SwiperSlide>
        <SwiperSlide>
          <WhyUsModel
            text="সিলেবাস অনুযায়ী যত্ন সহকারে পাঠদানের ব্যবস্থা"
            icon={FaRegClipboard}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WhyUsModel text="মানসম্মত আধুনিক সিটের ব্যবস্থা" icon={GrDocument} />
        </SwiperSlide>
        <SwiperSlide>
          <WhyUsModel
            text="সুবিধা অনুযায়ী ক্লাসের সময় নির্ধারণ"
            icon={FiClock}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WhyUsModel
            text="চাকুরীজীবীদের জন্য রাত্রিকালীন ক্লাস"
            icon={IoCloudyNightOutline}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WhyUsModel
            text="পর্যাপ্ত সময় অনুশীলন করার ব্যবস্থা"
            icon={FaRegKeyboard}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WhyUsModel
            text="পেশাগত কাজের উপর প্রশিক্ষণ দেওয়া হয়"
            icon={FaRegLightbulb}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WhyUsModel
            text="অভিজ্ঞ প্রশিক্ষক মন্ডলি দ্বারা পরিচালিত"
            icon={LuGraduationCap}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WhyUsModel
            text="প্রশিক্ষণ পরবর্তী যে কোন সমস্যা সুষ্ঠু পরামর্শ প্রদান"
            icon={FaRegHandshake}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WhyUsModel
            text="পরীক্ষার মাধ্যমে সরকারি সার্টিফিকেট এর ব্যবস্থা"
            icon={GoVerified}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
