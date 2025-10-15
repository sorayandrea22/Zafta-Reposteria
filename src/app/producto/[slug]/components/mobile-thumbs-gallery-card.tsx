"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from "@/interfaces";
import { FreeMode, Pagination, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import "./styles.css";

interface Props {
  images: string[];
  name: Product["name"];
}

export function MobileThumbsGalleryCard({ images, name }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Pagination, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <picture className="w-full h-52">
              <Image
                src={`/${image}`}
                alt={name}
                fill
                className="absolute h-full w-full "
                unoptimized
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
