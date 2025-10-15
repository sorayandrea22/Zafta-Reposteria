"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import "./styles.css";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

export const Carousel = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 1500,
      }}
      effect="fade"
      loop={true}
      modules={[EffectFade, Autoplay, Pagination]}
    >
      <SwiperSlide>
        <div className="h-80 w-full">
          <Image
            src="img/torta2.jpg"
            alt="Torta1"
            width={100}
            height={100}
            unoptimized
            className="h-full w-full object-bottom-top"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-80 w-full">
          <Image
            src="img/torta3.jpg"
            alt="Torta2"
            width={100}
            height={100}
            unoptimized
            className="h-full w-full object-bottom-top"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-80 w-full">
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
  );
};
