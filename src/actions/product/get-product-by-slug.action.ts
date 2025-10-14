"use server";

import { getErrorMessage } from "@/lib/error-message";
import prisma from "@/lib/prisma";

export const getProductBySlug = async (slug: string) => {
  try {
    const dbProduct = await prisma.product.findUnique({
      where: {
        slug,
      },
      include: {
        ProductImage: {
          select: {
            url: true,
          },
        },
      },
    });

    if (!dbProduct) return null;

    return {
      ...dbProduct,
      images: dbProduct.ProductImage.map((image) => image.url),
    };
  } catch (error) {
    getErrorMessage(error);
  }
};
