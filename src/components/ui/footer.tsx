import Image from "next/image";
import { Container } from "./container";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <div>
        <Container className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center  sm:text-start">
          <div className="mx-auto sm:mx-0">
            <picture>
              <Image
                src="/img/logo.png"
                alt="Logo"
                width={100}
                height={100}
                unoptimized
              />
            </picture>
          </div>
          <div>
            <p className="text-[#e4b197] mb-3 text-lg">Enlaces</p>
            <ul className="list-none space-y-2">
              <li className="text-sm sm:text-lg">
                <Link
                  href="/nuestra-historia"
                  className="text-[#cd979d]  hover:text-[#e4b197]"
                >
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link
                  href="/productos-de-linea"
                  className="text-[#cd979d] hover:text-[#e4b197] "
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/contactanos"
                  className="text-[#cd979d] hover:text-[#e4b197]"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 ">
            <p className="text-[#e4b197] mb-3  text-lg">Contacto</p>
            <p className="flex justify-center sm:justify-start items-center gap-2 text-[#cd979d] text-sm  sm:text-lg">
              <FaWhatsapp size={15} /> WhatsApp: +57 311 747 9392
            </p>
          </div>
        </Container>
        <div className="h-0.5 w-full bg-[#cd979d]  container mx-auto mt-20 mb-10"></div>
        <p className="text-center text-[#cd979d] text-sm sm:text-lg">
          © {new Date().getFullYear()} Zafta.
          <span className="block">Todos los derechos reservados.</span>
        </p>
      </div>
    </footer>
  );
};
