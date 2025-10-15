"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./styles.css";

// import required modules
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

export const CarouselHeader = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
      >
        <SwiperSlide>
          <div className="h-96 w-full">
            <Image
              src="/img/banner_first.jpg"
              alt="Torta1"
              width={100}
              height={100}
              unoptimized
              className="h-full w-full object-bottom-top"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 w-full">
            <Image
              src="/img/banner_second.jpg"
              alt="Torta2"
              width={100}
              height={100}
              unoptimized
              className="h-full w-full object-bottom-top"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 w-full">
            <Image
              src="/img/banner_thirty.jpg"
              alt="Torta3"
              width={100}
              height={100}
              unoptimized
              className="h-full w-full object-bottom-top"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
