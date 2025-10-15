import { Carousel, Container } from "@/components/ui";
import { fontLust } from "@/config/font";
import { FilterProducts, GridProducts } from "./components";
import { CarouselHeader } from "../(home)/components";

const Products = () => {
  return (
    <>
      <Carousel />
      <Container className="flex flex-col gap-10 my-20">
        <GridProducts />
      </Container>
    </>
  );
};

export default Products;
