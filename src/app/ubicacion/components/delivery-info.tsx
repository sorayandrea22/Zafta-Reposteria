"use client";

import { motion } from "motion/react";

export const DeliveryInfo = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-lustria text-3xl text-burgundy mb-12 text-center font-extrabold">
          Información de entrega
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center p-6 bg-ivory rounded-lg"
          >
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="font-fredoka font-semibold text-burgundy mb-2">
              Tiempo de entrega
            </h3>
            <p className="text-navy">24-48 horas desde tu pedido</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 bg-ivory rounded-lg"
          >
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-fredoka font-semibold text-burgundy mb-2">
              Entrega gratuita
            </h3>
            <p className="text-navy">En pedidos superiores a $50.000</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center p-6 bg-ivory rounded-lg"
          >
            <div className="text-4xl mb-4">📦</div>
            <h3 className="font-fredoka font-semibold text-burgundy mb-2">
              Empaque especial
            </h3>
            <p className="text-navy">Cuidamos cada detalle en el transporte</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
