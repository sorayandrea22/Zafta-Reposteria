import { getProducts } from "@/actions";
import { CardProduct } from "@/components/producto";

export const GridProducts = async () => {
  const { products } = await getProducts();
  if (!products) return null;
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};
