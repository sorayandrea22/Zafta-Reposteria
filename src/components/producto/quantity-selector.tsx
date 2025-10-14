"use client";

import { fontFredoka } from "@/config/font";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

interface Props {
  quantity: number;
  stock: number;
  onQuantitySelected: (quantity: number) => void;
}

export const QuantitySelector = ({
  quantity,
  stock,
  onQuantitySelected,
}: Props) => {
  const onQuantityChanged = (value: number) => {
    if (quantity + value < 1) return;

    if (quantity + value > stock) return;

    onQuantitySelected(quantity + value);
  };

  return (
    <div className="flex gap-4 items-center">
      <button onClick={() => onQuantityChanged(-1)}>
        <CiCircleChevLeft className="text-burgundy" size={30} />
      </button>
      <p
        className={`${fontFredoka.className} antialiased text-burgundy text-semibold`}
      >
        {quantity}
      </p>
      <button onClick={() => onQuantityChanged(+1)}>
        <CiCircleChevRight className="text-burgundy" size={30} />
      </button>
    </div>
  );
};
