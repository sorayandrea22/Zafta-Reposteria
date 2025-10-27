"use server";

import prisma from "@/lib/prisma";

export const getProductsCount = async () => {
  try {
    const dbProducts = await prisma.product.count();

    return {
      ok: true,
      countProducts: dbProducts,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error al cargar los productos",
    };
  }
};
