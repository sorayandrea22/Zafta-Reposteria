import Image from "next/image";
import { Container } from "./container";
import Link from "next/link";
import { FaLocationArrow, FaMailchimp, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="bg-primary py-10  ">
      <div>
        <Container className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <picture>
              <Image
                src="/img/logo.png"
                alt="Logo"
                width={200}
                height={200}
                unoptimized
              />
              <p className="text-white">
                Lo delicioso se vuelve tradición. Gracias por llevar un pedacito
                de nuestra historia a tu mesa.
              </p>
            </picture>
          </div>
          <div>
            <p className="text-[#e4b197] mb-3 text-lg">Enlaces</p>
            <ul className="list-none space-y-2">
              <li>
                <Link
                  href="/nuestra-historia"
                  className="text-[#cd979d]  hover:text-[#e4b197] text-lg"
                >
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-[#cd979d] hover:text-[#e4b197] text-lg"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-[#cd979d] hover:text-[#e4b197] text-lg"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-[#e4b197] mb-3 text-lg">Contacto</p>
            <p className="flex items-center gap-2 text-[#cd979d]  text-lg">
              <FaWhatsapp size={15} /> WhatsApp: +57 123 456 789
            </p>
            <p className="flex items-center gap-2 text-[#cd979d]  text-lg">
              <IoMdMail size={15} /> info@zafta.com
            </p>
            <p className="flex items-center gap-2 text-[#cd979d]  text-lg">
              <FaLocationArrow size={15} /> Estamos en movimiento.
            </p>
          </div>
        </Container>
        <div className="h-0.5 w-full bg-[#cd979d]  container mx-auto mt-20 mb-10"></div>
        <p className="text-center text-[#cd979d] text-lg">
          © {new Date().getFullYear()} Zafta. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
