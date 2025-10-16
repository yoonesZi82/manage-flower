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
        className="min-h-[850px] max-h-[850px] home-slider mySwiper"
      >
        <SwiperSlide className="min-h-[850px]">
          <img
            src="/image/banner1.jpg"
            alt="slid"
            className="h-full min-h-[850px]"
          />
        </SwiperSlide>
        <SwiperSlide className="min-h-[850px]">
          <img
            src="/image/banner2.jpg"
            alt="slid"
            className="h-full min-h-[850px]"
          />
        </SwiperSlide>
        <SwiperSlide className="min-h-[850px]">
          <img
            src="/image/banner3.jpg"
            alt="slid"
            className="h-full min-h-[850px]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
