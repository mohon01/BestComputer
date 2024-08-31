import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img4 from "../../../../images/feedback/adib.webp";
import img3 from "../../../../images/feedback/dipu.webp";
import img2 from "../../../../images/feedback/refa.webp";
import img1 from "../../../../images/feedback/towfiq.webp";

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
          <FeedBackModel
            img={img1}
            name="তেীফিক"
            des="বর্তমান প্রতিযোগিতামূলক যুগে কম্পিউটার শিক্ষার কোনো বিকল্প নেই। আপনি যদি কোন কোর্সে দক্ষ হতে চান। তাহলে আমি অবশ্যই সিদ্ধিরগঞ্জ
বেস্ট ট্রেনিং সেন্টার থেকে কোর্স করার পরামর্শ দিব।"
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeedBackModel
            img={img2}
            name="রেফা"
            des="সুন্দর ও মনোরম পরিবেশ। সুসজ্জিত মাল্টিমিডিয়া কম্পিউটার ল্যাব যেখানে পর্যাপ্ত সময় অনুশীলন করা যায়। শিক্ষা প্রতিষ্ঠানে যেমন পরিবেশ থাকা প্রয়োজন এখানে সেই রকম সকল ব্যবস্থায় আছে।"
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeedBackModel
            img={img3}
            name="দিপু"
            des="এখানের প্রশিক্ষকগণ অত্যন্ত বন্ধুসুলভ। তাই যেকোন সমস্যার কথা খুব সহজেই বলা যায়। আমি এখান থেকে কোর্স করে খুবই উপকৃত হয়েছি। কারণ আমি তাদের কাছ থেকে সর্বোচ্চ সহযোগিতা পেয়েছি।"
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeedBackModel
            img={img4}
            name="আদিব"
            des="আমি ষষ্ঠ শ্রেণীর ছাত্র। আমি কম্পিউটার শিখতে পারব কিনা? এ নিয়ে
দুশ্চিন্তাই ছিলাম। কিন্তু এখানে এসে আমার ধারণা পাল্টে যায় এবং তাদের শিখানোর পদ্ধতির জন্য খুব সহজ ও সুন্দরভাবেই কোর্স সম্পন্ন করেছি।"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
