"use client";

import { fontLust } from "@/config/font";
import { motion } from "motion/react";
import { values } from "./our-values.data";

export const OurValues = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-16 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3
          className={`${fontLust.className} antialiased  text-3xl font-extrabold text-primary mb-4`}
        >
          Nuestros Valores
        </h3>
        <p className="text-navy/70">
          Los pilares que guían cada decisión en Zafta
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="bg-ivory rounded-2xl p-6 shadow-lg border border-rosegold/20 text-center hover:border-rosegold/40 transition-all duration-300"
          >
            <div className="text-3xl mb-4">{value.icon}</div>
            <h4 className=" font-semibold text-navy mb-3">{value.title}</h4>
            <p className="text-navy/70 text-sm leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
