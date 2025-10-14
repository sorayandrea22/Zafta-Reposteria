"use client";

import { motion } from "motion/react";

export const ContactCta = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-16 px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-lustria text-2xl text-burgundy mb-6 font-extrabold">
          ¿Quieres saber cuándo llegamos a tu zona?
        </h2>
        <p className="font-fredoka text-navy mb-8">
          Déjanos tus datos y te avisaremos cuando ampliemos nuestras zonas de
          entrega.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-burgundy text-ivory px-8 py-3 rounded-lg font-fredoka font-semibold"
          >
            Notificarme
          </motion.button>
          <motion.a
            href="/contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-rosegold text-burgundy px-8 py-3 rounded-lg font-fredoka font-semibold text-center"
          >
            Contáctanos
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};
