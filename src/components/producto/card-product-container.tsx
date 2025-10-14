"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

interface Props {
  children: ReactNode;
}

export const CardProductContainer = ({ children }: Props) => {
  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className=" bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-rosegold/20 group"
      >
        {children}
      </motion.div>
    </>
  );
};
