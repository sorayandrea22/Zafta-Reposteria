"use client";
import { motion } from "motion/react";
import { values } from "./our-values.data";
import { fontLust } from "@/config/font";

export const OurValues = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <h3
          className={`${fontLust.className} antialiased  text-xl sm:text-4xl font-bold text-burgundy mb-4`}
        >
          Nuestros Valores
        </h3>
        <p className="font-fredoka text-navy/70 mb-10 text-sm sm:text-lg">
          Los pilares que guían cada decisión en Zafta
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="flex items-center justify-center bg-ivory rounded-2xl p-4 shadow-lg border border-rosegold/20 hover:border-rosegold/40 transition-all duration-300"
          >
            <h4 className="font-fredoka font-semibold text-navy text-sm sm:text-lg ">
              {value.title}
            </h4>
          </motion.div>
        ))}
      </div>
    </>
  );
};
