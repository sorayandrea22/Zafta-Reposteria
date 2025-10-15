import { BreadCrumbSeparator, Container } from "@/components/ui";
import { ProductCard } from "./components";
import { getProductBySlug } from "@/actions";

interface Props {
  params: Promise<{ slug: string }>;
}

const ProductSlug = async ({ params }: Props) => {
  const slug = (await params).slug;

  const product = await getProductBySlug(slug);

  if (!product) return null;

  return (
    <Container className="my-10">
      <BreadCrumbSeparator name={product.name} slug={product.slug} />
      <ProductCard product={product} />
    </Container>
  );
};

export default ProductSlug;
