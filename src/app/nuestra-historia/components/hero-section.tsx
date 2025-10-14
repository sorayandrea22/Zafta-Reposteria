"use client";
import { fontLust } from "@/config/font";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24  px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className={`${fontLust.className} antialiased text-5xl md:text-6xl font-extrabold text-primary mb-6`}
        >
          Nuestra Historia
        </h1>
        <p className=" text-xl text-navy max-w-2xl mx-auto">
          Una historia de tradición, sabor y amor que comenzó en la cocina de
          Fanny
        </p>
      </div>
    </motion.section>
  );
};
