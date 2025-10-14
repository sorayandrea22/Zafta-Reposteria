"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

// Welcome Modal Component
export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("zafta-welcome");
    if (!hasVisited) {
      setIsOpen(true);
      localStorage.setItem("zafta-welcome", "true");
    }
  }, []);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={() => setIsOpen(false)}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 20 }}
        className="bg-ivory rounded-2xl p-8 max-w-md text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-lust text-2xl text-burgundy mb-4">
          Bienvenido a Zafta
        </h2>
        <p className="text-navy mb-4">
          Lo delicioso se vuelve tradición.
          <br />Y ahora puedes pedirlo en línea.
        </p>
        <div className="bg-rosegold/30 p-4 rounded-lg mb-6">
          <p className="text-sm text-navy">
            🎁 Usa el código <strong>ZAFTA10</strong> y recibe un 10% de
            descuento en tu primera compra.
          </p>
          <p className="text-xs text-navy/70 mt-2">
            🧁 Hecho con amor, como lo hacía Fanny.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-burgundy text-ivory px-6 py-3 rounded-lg font-semibold w-full"
          onClick={() => setIsOpen(false)}
        >
          Comprar ahora
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
