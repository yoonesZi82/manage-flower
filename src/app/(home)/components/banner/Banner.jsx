"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Banner() {
  return (
    <>
      <Swiper
        rewind={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="max-h-[850px] home-slider mySwiper"
      >
        <SwiperSlide>
          <img src="/image/banner1.jpg" alt="slid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/banner2.jpg" alt="slid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/banner3.jpg" alt="slid" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
