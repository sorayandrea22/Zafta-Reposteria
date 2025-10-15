"use client";

import { Product } from "@/interfaces";
import { CardProductContainer } from "./card-product-container";
import Link from "next/link";
import { formatPrice } from "@/utils";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";

interface Props {
  product: Product;
}

export const CardProduct = ({ product }: Props) => {
  const { name, description, price, images, stock, slug, featured } = product;
  console.log({ product });

  const [displayImage, setDisplayImage] = useState(images[0]);

  return (
    <>
      {stock > 0 && (
        <CardProductContainer>
          {/* Product Image */}
          <Link href={`/producto/${slug}`}>
            <div className="h-48 bg-gradient-to-br from-rosegold/30 to-burgundy/20 flex items-center justify-center relative overflow-hidden">
              {images?.length && (
                <Image
                  src={displayImage}
                  alt={name}
                  width={300}
                  onMouseEnter={() => setDisplayImage(images[1])}
                  onMouseLeave={() => setDisplayImage(images[0])}
                  height={300}
                  unoptimized
                  className="w-full h-full object-cover text-2xl group-hover:scale-110 transition-transform cursor-pointer"
                />
              )}

              {/* Featured badge */}
              {featured && (
                <div className="absolute top-3 left-3 px-4 py-1 bg-burgundy text-ivory rounded-full text-xs font-semibold">
                  Destacado
                </div>
              )}
            </div>
          </Link>
          {/* Product Info */}
          <div className="p-4 bg-burgundy text-ivory">
            <span className="text-xs font-semibold bg-ivory/10 px-2 py-1 rounded-full">
              Torta
            </span>

            <Link href={`/producto/${slug}`}>
              <h3 className="font-fredoka font-semibold   mt-2 mb-1 transition-colors cursor-pointer">
                {name}
              </h3>
            </Link>

            <Link href={`/producto/${slug}`}>
              <p className=" text-sm mb-3 line-clamp-2 cursor-pointer  transition-colors">
                {description}
              </p>
            </Link>

            <div className="flex justify-between items-center mb-3">
              <p className="font-lust text-xl  font-bold">
                {formatPrice(price)}
              </p>
              <Link
                href={`/producto/${slug}`}
                className="block py-2 rounded-lg  font-semibold text-sm border border-white bg-white transition-colors px-3"
              >
                <IoCartOutline size={30} className="text-burgundy" />
              </Link>
            </div>
          </div>
        </CardProductContainer>
      )}
    </>
  );
};
