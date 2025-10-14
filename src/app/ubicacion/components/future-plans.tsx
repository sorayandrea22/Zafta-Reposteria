"use client";

import { motion } from "motion/react";

export const FuturePlans = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-16 px-4 bg-burgundy text-ivory"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-lustria text-3xl mb-6 font-extrabold">
          Muy pronto...
        </h2>
        <p className="font-fredoka text-lg mb-8">
          Estamos trabajando para abrir nuestro primer punto físico, donde
          podrás vivir la experiencia completa de Zafta y conocer de cerca el
          proceso artesanal de nuestros productos.
        </p>
        <div className="bg-ivory/10 p-6 rounded-lg">
          <p className="font-fredoka">
            🏪 <strong>Objetivo 2025:</strong> Nuestra primera tienda física en
            Bogotá
          </p>
        </div>
      </div>
    </motion.section>
  );
};
