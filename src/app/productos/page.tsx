import { Carousel, Container } from "@/components/ui";
import { fontLust } from "@/config/font";
import { FilterProducts, GridProducts } from "./components";
import { CarouselHeader } from "../(home)/components";

const Products = () => {
  return (
    <>
      <Carousel />
      {/* <div className="bg-burgundy py-12 md:py-16 text-ivory"> */}
      {/*   <div className="container mx-auto px-6 text-center"> */}
      {/*     <h1 */}
      {/*       className={`${fontLust.className} antialiased  text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold`} */}
      {/*     > */}
      {/*       Nuestros Productos */}
      {/*     </h1> */}
      {/*     <p className="font-fredoka text-lg md:text-xl max-w-2xl mx-auto"> */}
      {/*       Descubre nuestras delicias artesanales elaboradas con amor y */}
      {/*       tradición */}
      {/*     </p> */}
      {/*   </div> */}
      {/* </div> */}
      <Container className="flex flex-col gap-10 my-20">
        <GridProducts />
      </Container>
    </>
  );
};

export default Products;
