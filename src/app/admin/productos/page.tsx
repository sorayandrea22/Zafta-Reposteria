import { getProducts, getProductsCount } from "@/actions";
import { PanelProductos } from "./components/panel-productos";

export default async function AdminProducts() {
  const { products } = await getProducts();
  const { countProducts } = await getProductsCount();

  if (!products) return;

  return (
    <div className="min-h-screen bg-ivory pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <PanelProductos products={products} countProducts={countProducts} />
      </div>
    </div>
  );
}
