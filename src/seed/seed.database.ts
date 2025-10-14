import prisma from "../lib/prisma";
import { categories, products } from "./seed";

async function main() {
  console.log("SEED STARTING");

  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  products.forEach(async (product) => {
    const { images, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
      },
    });
    const dbImages = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: dbImages,
    });
  });

  await prisma.category.createMany({
    data: categories,
  });
}

(async () => {
  await main();
  console.log("SEED EXECUTED SUCCESSFULLY");
})();
