"use client";

import { fontLust } from "@/config/font";
import { motion } from "motion/react";

export const LegacyCall = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-16 px-4 bg-primary text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className={`${fontLust.className} antialiased  text-3xl mb-6 font-extrabold`}
        >
          Sé parte de nuestra historia
        </h2>
        <p className="font-fredoka text-lg mb-8">
          Cuando eliges Zafta, no solo llevas un postre a tu mesa: te sumas a
          una tradición familiar que ha endulzado generaciones y continúa
          creando recuerdos inolvidables.
        </p>
        <motion.a
          href="/productos"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-fredoka font-semibold"
        >
          Descubre nuestros productos
        </motion.a>
      </div>
    </motion.section>
  );
};
