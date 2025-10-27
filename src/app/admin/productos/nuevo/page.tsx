"use client";

import { motion } from "motion/react";

export default function NewProductPage() {
  return (
    <div className="min-h-screen bg-ivory pt-20">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
            <motion.a
              href="/admin/productos"
              whileHover={{ scale: 1.05 }}
              className="text-burgundy hover:text-burgundy/80 transition-colors"
            >
              ← Volver a productos
            </motion.a>
          </div>
          <h1 className="font-lust text-4xl text-burgundy mb-2">
            Crear Nuevo Producto
          </h1>
          <p className="text-navy/70 font-fredoka">
            Completa la información del producto
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <form className="space-y-6">
            {/* Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block font-fredoka font-semibold text-navy mb-2"
              >
                Nombre del producto *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-rosegold/30 rounded-lg focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-colors"
                placeholder="Ej: Torta de Chocolate"
              />
            </div>

            {/* Descripción */}
            <div>
              <label
                htmlFor="description"
                className="block font-fredoka font-semibold text-navy mb-2"
              >
                Descripción *
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full px-4 py-3 border border-rosegold/30 rounded-lg focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-colors"
                placeholder="Describe el producto, ingredientes, características especiales..."
              />
            </div>

            {/* Ingredientes */}
            <div>
              <label
                htmlFor="ingredients"
                className="block font-fredoka font-semibold text-navy mb-2"
              >
                Ingredientes
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                rows={3}
                className="w-full px-4 py-3 border border-rosegold/30 rounded-lg focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-colors"
                placeholder="Ej: Harina, chocolate belga, huevos, mantequilla..."
              />
            </div>

            {/* Precio y Stock */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="price"
                  className="block font-fredoka font-semibold text-navy mb-2"
                >
                  Precio *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-navy/70">
                    $
                  </span>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    step="0.01"
                    min="0"
                    required
                    className="w-full pl-8 pr-4 py-3 border border-rosegold/30 rounded-lg focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-colors"
                    placeholder="15000"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="stock"
                  className="block font-fredoka font-semibold text-navy mb-2"
                >
                  Stock disponible *
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  min="0"
                  required
                  className="w-full px-4 py-3 border border-rosegold/30 rounded-lg focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-colors"
                  placeholder="10"
                />
              </div>
            </div>

            {/* Categoría */}
            <div>
              <label
                htmlFor="categoryId"
                className="block font-fredoka font-semibold text-navy mb-2"
              >
                Categoría *
              </label>
              <select
                id="categoryId"
                name="categoryId"
                required
                className="w-full px-4 py-3 border border-rosegold/30 rounded-lg focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-colors"
              >
                <option value="">Selecciona una categoría</option>
              </select>
            </div>

            {/* Imagen del producto - SIMPLIFICADA */}
            <div>
              <label className="block font-fredoka font-semibold text-navy mb-2">
                Imagen del producto
              </label>
              <div className="border-2 border-dashed border-rosegold/30 rounded-lg p-6 text-center"></div>
            </div>

            {/* Producto destacado */}
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="featured"
                  className="w-5 h-5 text-burgundy border-rosegold/30 rounded focus:ring-burgundy focus:ring-2"
                />
                <span className="font-fredoka font-semibold text-navy">
                  ⭐ Marcar como producto destacado
                </span>
              </label>
              <p className="text-sm text-navy/70 mt-1 ml-8">
                Los productos destacados aparecen en la página principal
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <motion.a
                href="/admin/productos"
                whileHover={{ scale: 1.02 }}
                className="px-6 py-3 border border-rosegold/30 text-navy rounded-lg font-fredoka font-semibold hover:bg-rosegold/10 transition-colors"
              >
                Cancelar
              </motion.a>
              <motion.button
                className="bg-burgundy text-ivory px-8 py-3 rounded-lg font-fredoka font-semibold hover:bg-burgundy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02 }}
                type="submit"
              >
                🧁 Crear Producto
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
