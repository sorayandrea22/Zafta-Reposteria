"use client";

import { QuantitySelector } from "@/components/producto";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

export const AddToCart = () => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <>
      {/* Quantity Selector */}
      <QuantitySelector
        quantity={quantity}
        onQuantitySelected={setQuantity}
        stock={12}
      />
      <div className="space-y-4">
        <button className="py-4 px-8 border-2 border-burgundy text-burgundy text-center rounded-xl font-fredoka font-bold text-lg hover:bg-burgundy/10 transition-colors">
          <span className="flex items-center gap-4 text-sm sm:text-lg">
            <IoCartOutline size={30} />
            Agregar al carrito
          </span>
        </button>
      </div>

      {/* Add to Cart */}
    </>
  );
};
