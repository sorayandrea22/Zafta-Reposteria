"use client";

import { fontLust } from "@/config/font";
import { motion } from "motion/react";
import Link from "next/link";
import { ThumbsGalleryCard } from "./thumbs-gallery-card";
import { AddToCart } from "./add-to-cart";
import { Product } from "@/interfaces";
import { formatPrice } from "@/utils";
import { MobileThumbsGalleryCard } from "./mobile-thumbs-gallery-card";

// transition={{ delay: index * 0.1 }}
//

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <section className="sm:my-8 sm:mx-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-12"
        >
          {/* Product Image */}
          <div className="hidden sm:block space-y-4">
            <ThumbsGalleryCard images={product.images} name={product.name} />
          </div>
          <div className="space-y-4 sm:hidden">
            <MobileThumbsGalleryCard
              images={product.images}
              name={product.name}
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-600 font-semibold text-sm sm:text-lg">
                {product.stock === 1
                  ? "1 disponible"
                  : `${product.stock} disponibles`}
              </span>
            </div>

            {/* Category */}

            {/* Title */}
            <h1
              className={`${fontLust.className} antialised  text-2xl lg:text-5xl text-burgundy`}
            >
              {product.name}
            </h1>
            <Link
              href={`/productos/slug`}
              className="inline-block text-sm text-burgundy font-semibold bg-burgundy/10 px-3 py-1 rounded-full hover:bg-burgundy/20 transition-colors"
            >
              Postres
            </Link>

            {/* Price */}
            <div className="text-3xl font-bold text-burgundy">
              {formatPrice(product.price)}
            </div>
            <AddToCart />
            {/* Descripción */}
            <div>
              <h3 className=" font-semibold text-navy text-lg mb-3">
                Descripción
              </h3>
              <p className="text-navy/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="font-semibold text-navy text-lg mb-3">
                Ingredientes
              </h3>
              <p className="text-navy/80 leading-relaxed">
                {product.ingredients}
              </p>
            </div>
          </div>
        </motion.div>
        {/* <div className="space-y-4"> */}
        {/*   <Link */}
        {/*     href="/productos" */}
        {/*     className="block w-full py-4 px-8 border-2 border-burgundy text-burgundy text-center rounded-xl font-fredoka font-bold text-lg hover:bg-burgundy/10 transition-colors" */}
        {/*   > */}
        {/*     ← Ver más productos */}
        {/*   </Link> */}
        {/* </div> */}
      </div>
    </section>
  );
};
