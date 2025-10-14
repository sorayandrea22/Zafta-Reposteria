import { getProductsByFeatured } from "@/actions";
import { CardProduct } from "@/components/producto";

export const AboutFeatured = async () => {
  const { products } = await getProductsByFeatured();

  if (!products) {
    return null;
  }

  return (
    <div className="my-20">
      <h2 className="text-primary text-5xl text-center ">
        Nuestros Destacados
      </h2>
      <p className="text-center pt-4">
        Haz tu pedido en línea y recíbelo con sabor a hogar
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
