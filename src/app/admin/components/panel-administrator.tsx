"use client";
import { motion } from "motion/react";
import Link from "next/link";

export const PanelAdministrator = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="font-lust text-3xl text-burgundy mb-2">
          Panel de Administración
        </h1>
        <p className="text-navy/70 font-fredoka">Bienvenido, Luis</p>
      </motion.div>
      {/* // Numeros de productos, usuarios, categorias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Usuarios", value: 1, icon: "👥" },
          { title: "Productos", value: 3, icon: "🧁" },
          { title: "Pedidos", value: 4, icon: "📦" },
          { title: "Categorías", value: 2, icon: "📂" },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-navy/70 text-sm font-fredoka">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-burgundy">{stat.value}</p>
              </div>
              <div className="text-3xl">{stat.icon}</div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* // Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-6 shadow-xl"
      >
        <h2 className="font-lust text-xl text-burgundy mb-6">
          Acciones Rápidas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/admin/productos"
            className="bg-burgundy text-ivory p-4 rounded-lg text-center hover:bg-burgundy/90 transition-colors"
          >
            <div className="text-2xl mb-2">🧁</div>
            <p className="font-fredoka font-semibold">Gestionar Productos</p>
          </Link>
          <Link
            href="/admin/pedidos"
            className="bg-rosegold text-navy p-4 rounded-lg text-center hover:bg-rosegold/90 transition-colors"
          >
            <div className="text-2xl mb-2">📦</div>
            <p className="font-fredoka font-semibold">Ver Pedidos</p>
          </Link>
          <Link
            href="/admin/usuarios"
            className="bg-navy text-ivory p-4 rounded-lg text-center hover:bg-navy/90 transition-colors"
          >
            <div className="text-2xl mb-2">👥</div>
            <p className="font-fredoka font-semibold">Gestionar Usuarios</p>
          </Link>
        </div>
      </motion.div>
    </>
  );
};
