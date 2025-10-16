"use client";
import Slider from "@/components/slider/default/Slider";
import { SwiperSlide } from "swiper/react";

const ShowOffice = () => {
  return (
    <div className="mx-auto my-0 msx-w-[1222px]">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[36px] text-secondary"> همکاران ما </p>
        <span className="text-secondary">شرکت های جذاب دنیای گل</span>
      </div>
      <main className="my-10">
        <Slider
          autoplay={true}
          navigation={false}
          delay={3000}
          uniq={"articles_slider"}
        >
          <SwiperSlide className="flex justify-center items-center bg-transparent">
            <img
              src="/image/office1.png"
              alt="cover"
              className="w-[200px]"
              onError={(e) => {
                e.currentTarget.src = "/image/not-found.png";
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center bg-transparent">
            <img
              src="/image/office2.png"
              alt="cover"
              className="w-[200px]"
              onError={(e) => {
                e.currentTarget.src = "/image/not-found.png";
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center bg-transparent">
            <img
              src="/image/office3.png"
              alt="cover"
              className="w-[200px]"
              onError={(e) => {
                e.currentTarget.src = "/image/not-found.png";
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center bg-transparent">
            <img
              src="/image/office4.png"
              alt="cover"
              className="w-[200px]"
              onError={(e) => {
                e.currentTarget.src = "/image/not-found.png";
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center bg-transparent">
            <img
              src="/image/office5.png"
              alt="cover"
              className="w-[200px]"
              onError={(e) => {
                e.currentTarget.src = "/image/not-found.png";
              }}
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center bg-transparent">
            <img
              src="/image/office6.png"
              alt="cover"
              className="w-[200px]"
              onError={(e) => {
                e.currentTarget.src = "/image/not-found.png";
              }}
            />
          </SwiperSlide>
        </Slider>
      </main>
    </div>
  );
};

export default ShowOffice;
