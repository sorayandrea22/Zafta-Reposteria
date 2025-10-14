"use client";

import { motion } from "motion/react";

export const MainMessage = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-16 px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <div className="text-6xl mb-8">🚚</div>
          <h2 className="font-lustria text-3xl text-burgundy mb-6">
            Estamos en movimiento... pero siempre cerca.
          </h2>
          <p className="font-fredoka text-lg text-navy mb-8">
            Por ahora, llevamos nuestros sabores directamente a tu puerta a
            través de nuestro servicio de entrega a domicilio en Bogotá y
            alrededores.
          </p>
          <div className="bg-rosegold/20 p-6 rounded-lg mb-8">
            <h3 className="font-fredoka font-semibold text-burgundy mb-3">
              Zonas de entrega actual:
            </h3>
            <ul className="text-navy space-y-1">
              <li>• Bogotá (todas las localidades)</li>
              <li>• Chía</li>
              <li>• Cajicá</li>
              <li>• La Calera</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
