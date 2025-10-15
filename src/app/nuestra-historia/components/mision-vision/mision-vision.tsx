"use client";

import { motion } from "motion/react";
import { missionVision } from "./mision-vision.data";
import { fontLust } from "@/config/font";

export const MisionVision = () => {
  return (
    <section className="my-20 px-4 bg-gradient-to-b from-ivory to-rosegold/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`${fontLust.className} antialiased text-4xl sm:text-xl font-extrabold  text-primary mb-6`}
          >
            Nuestro Propósito
          </h2>
          <p className="tex-lg sm:text-xl text-navy max-w-3xl mx-auto">
            Más que una empresa, somos guardianes de tradiciones dulces que unen
            familias
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {missionVision.map((item, index) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 text-ivory shadow-xl relative overflow-hidden`}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-ivory/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-ivory/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10">
                <div>
                  <h3 className="text-lg  font-semibold opacity-90 uppercase tracking-wider">
                    {item.type}
                  </h3>
                </div>
                <p className="text-sm sm:text-lg leading-relaxed opacity-95">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
