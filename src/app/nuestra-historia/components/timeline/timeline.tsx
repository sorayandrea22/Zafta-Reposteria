"use client";
import { motion } from "motion/react";
import { timeline } from "./timeline.data";
import { fontLust } from "@/config/font";

export const Timeline = () => {
  return (
    <section className="pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`${fontLust.className} antialiased text-xl sm:text-4xl font-extrabold text-burgundy mb-16 text-center`}
        >
          Nuestra Trayectoria
        </h2>

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center mb-16 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 p-8">
              <span className="font-lustria text-2xl sm:text-3xl text-rosegold">
                {item.year}
              </span>
              <h3 className="font-lustria text-xl sm:text-2xl text-burgundy mt-2 mb-4">
                {item.title}
              </h3>
              <p className="font-fredoka text-navy text-sm sm:text-lg">
                {item.description}
              </p>
            </div>
            <div className="md:w-1/2 h-64 bg-rosegold/20 rounded-lg"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
