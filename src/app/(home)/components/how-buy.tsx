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
          ¿Y entonces cómo pido mi torta?
        </h3>
        <p className="prose text-sm sm:text-lg">
          1. Elige tu favorita.
          <span className="block">
            Mira los sabores y tamaños disponibles que tenemos.
          </span>
        </p>
        <p className="prose text-sm sm:text-lg">
          2. Personalizala.
          <span className="block">
            ¿Tienes una idea diferente? ¡Contáctanos por WhatsApp y la hacemos
            realidad!
          </span>
        </p>
        <p className="prose text-sm sm:text-lg">
          3. Haz tu Pedido.
          <span className="block">
            Confirma los detalles y listo... nosotros nos encargamos del resto.
          </span>
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
