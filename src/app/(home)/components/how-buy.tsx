import { fontLust } from "@/config/font";
import Image from "next/image";
import Link from "next/link";

export const HowBuy = () => {
  return (
    <div className="mt-20 text-center">
      <div className="space-y-6">
        <h3
          className={` ${fontLust.className} antialiased text-xl sm:text-4xl text-burgundy `}
        >
          Como Comprar
        </h3>
        <p className="prose text-sm sm:text-lg">
          Elige la torta que quieres. Mira todas las opciones que tenemos
          disponibles para ti y elige el sabor y tamaño de tu torta favorita.
          También creamos tortas personalizadas.
        </p>
        <Link
          href="/productos-de-linea"
          className="inline-block bg-burgundy text-white rounded-lg px-5 py-2 mb-4 sm:mb-0"
        >
          Entra a la tienda
        </Link>
      </div>
    </div>
  );
};
