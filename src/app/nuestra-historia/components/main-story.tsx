"use client";
import { fontLust } from "@/config/font";
import { motion } from "motion/react";
import Link from "next/link";

export const MainStory = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="py-12 px-4"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12 flex flex-col justify-center items-center">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-rosegold rounded-full"></div>
        </div>

        <article className="prose prose-lg max-w-none">
          <h2
            className={`${fontLust.className} antialiased  text-3xl md:text-4xl font-extrabold text-burgundy text-center mb-8`}
          >
            El Legado de la Torta de Chocolate
          </h2>

          <p className="font-fredoka text-navy leading-relaxed mb-6">
            La Torta Zafta nació hace casi 30 años con la receta original de
            Fanny Wagner. Lo que empezó como una torta de chocolate para
            celebraciones en casa, se convirtió en sustento para una familia en
            un momento de dificultad: su tradición familiar trascendió a más
            familias. Hoy seguimos su legado con el mismo sabor de siempre,
            nuevos colores y mucho amor en cada porción.
          </p>

          <div className="my-10 bg-ivory/50 p-6 rounded-xl border-l-4 border-rosegold">
            <p className="italic text-primary ">
              "No es torta negra, es torta de chocolate. Una receta que ha unido
              generaciones y se ha convertido en tradición."
            </p>
          </div>
        </article>
        <Link
          href="/nuestra-historia-completa"
          className="bg-primary rounded-lg px-7 py-5 text-lg text-white"
        >
          Conoce la historia completa{" "}
        </Link>
      </div>
    </motion.section>
  );
};
