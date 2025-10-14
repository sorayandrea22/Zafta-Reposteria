"use server";

import prisma from "@/lib/prisma";

export const getProducts = async () => {
  try {
    const dbProducts = await prisma.product.findMany({
      include: {
        ProductImage: {
          select: {
            url: true,
          },
        },
      },
    });

    return {
      ok: true,
      products: dbProducts.map((product) => {
        return {
          ...product,
          images: product.ProductImage.map((image) => image.url),
        };
      }),
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error al cargar los productos",
    };
  }
};
