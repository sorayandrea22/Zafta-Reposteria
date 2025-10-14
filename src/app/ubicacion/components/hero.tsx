"use client";

import { motion } from "motion/react";

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-lustria text-5xl text-burgundy mb-6 font-extrabold">
          ¿Dónde encontrarnos?
        </h1>
        <p className="font-fredoka text-xl text-navy max-w-2xl mx-auto">
          Descubre cómo puedes disfrutar nuestros productos
        </p>
      </div>
    </motion.section>
  );
};
