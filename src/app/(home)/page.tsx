import { AboutFeatured, Birth, CarouselHeader } from "./components";
import { Container } from "@/components/ui";

export default function Home() {
  return (
    <div>
      <CarouselHeader />
      <div className="h-28 w-full bg-primary flex items-center justify-center">
        <h2 className="text-4xl text-white">
          Lo delicioso se vuelve tradición. Y Zafta es la prueba.
        </h2>
      </div>

      <Container>
        <AboutFeatured />
        <Birth />
      </Container>
    </div>
  );
}
