import { AboutFeatured, Birth, CarouselHeader, HowBuy } from "./components";
import { Container } from "@/components/ui";

export default function Home() {
  return (
    <div>
      <CarouselHeader />
      <div className="h-28 w-full bg-primary flex items-center justify-center">
        <h2 className="text-lg sm:text-4xl text-center text-white">
          En ZAFTA lo delicioso se vuelve tradicion.
        </h2>
      </div>

      <Container>
        <HowBuy />
        <AboutFeatured />
        <Birth />
      </Container>
    </div>
  );
}
