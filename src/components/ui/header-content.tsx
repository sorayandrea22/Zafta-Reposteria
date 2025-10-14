"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const HeaderContent = ({ title, subtitle, className = "" }: Props) => {
  return (
    <div className={`bg-burgundy text-white pt-24 ${className}`}>
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-lust font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="mt-4 text-lg md:text-xl text-pink-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};
