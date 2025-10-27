"use client";

import { Product } from "@/interfaces";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/utils";
import { motion } from "motion/react";
import Image from "next/image";

interface Props {
  products: Product[];
  countProducts: number | undefined;
}

export const PanelProductos = ({ products, countProducts }: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <h1 className="font-lust text-4xl text-burgundy mb-2">
            Gestión de Productos
          </h1>
          <p className="text-navy/70 font-fredoka">
            {countProducts} productos en total
          </p>
        </div>
        <motion.a
          href="/admin/productos/nuevo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-burgundy text-ivory px-6 py-3 rounded-lg font-fredoka font-semibold hover:bg-burgundy/90 transition-colors"
        >
          ➕ Nuevo Producto
        </motion.a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="h-48 bg-gradient-to-br from-rosegold/20 to-burgundy/20 flex items-center justify-center overflow-hidden">
              <Image
                src={`/${product.images[0]}`}
                alt={product.name}
                width={300}
                height={300}
                unoptimized
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-fredoka font-bold text-navy text-lg mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-burgundy font-semibold">Tortas</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={cn(`w-3 h-3 rounded-full`, {
                      "text-green-800": product.stock > 0,
                      "text-burgundy": product.stock <= 0,
                    })}
                  ></span>
                  <span
                    className={cn(
                      `px-2 py-1 rounded-full text-xs font-semibold`,
                      {
                        "bg-red-100 text-red-800": product.stock <= 0,
                        "bg-green-100 text-green-800": product.stock > 0,
                      },
                    )}
                  >
                    Stock: {product.stock}
                  </span>
                </div>
              </div>

              <p className="text-navy/70 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <p className="font-lust text-2xl text-burgundy">
                  {formatPrice(product.price)}
                </p>
                {product.featured ? (
                  <span className="bg-rosegold text-navy px-2 py-1 rounded-full text-xs font-semibold">
                    ⭐ Destacado
                  </span>
                ) : (
                  ""
                )}
              </div>

              {/* Actions */}
              <div className="grid grid-cols-3 gap-2">
                <motion.a
                  href={`/admin/productos/id`}
                  whileHover={{ scale: 1.02 }}
                  className="bg-burgundy text-ivory px-3 py-2 rounded-lg text-center font-fredoka font-semibold hover:bg-burgundy/90 transition-colors text-xs"
                >
                  ✏️ Editar
                </motion.a>

                <form
                  method="post"
                  onSubmit={(e) => {
                    if (!confirm("¿Eliminar este producto permanentemente?")) {
                      e.preventDefault();
                    }
                  }}
                >
                  <input type="hidden" name="_action" value="delete" />
                  <input type="hidden" name="productId" />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    className="w-full bg-red-100 text-red-600 hover:bg-red-200 px-3 py-2 rounded-lg font-fredoka font-semibold transition-colors text-xs"
                  >
                    🗑️ Eliminar
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};
