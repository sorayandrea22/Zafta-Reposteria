"use server";

import prisma from "@/lib/prisma";

export const getProductsByFeatured = async () => {
  try {
    const dbProducts = await prisma.product.findMany({
      include: {
        ProductImage: {
          select: {
            url: true,
          },
        },
      },
      where: {
        featured: true,
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
