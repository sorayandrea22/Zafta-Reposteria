import { motion } from "motion/react";

export default function AuthButton() {
  return (
    <div className="hidden sm:flex items-center space-x-3">
      <motion.a
        href="/auth/login"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-ivory hover:text-rosegold transition-colors duration-300 text-sm font-medium"
      >
        Iniciar sesión
      </motion.a>
      <motion.a
        href="/auth/register"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-rosegold hover:bg-rosegold/90 text-navy px-4 py-2 rounded-lg font-semibold transition-colors duration-300 text-sm"
      >
        Registrarse
      </motion.a>
    </div>
  );
}
