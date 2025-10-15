import { Container } from "@/components/ui";
import {
  Hero,
  MainStory,
  MisionVision,
  OurValues,
  Timeline,
} from "./components";

const NuestraHistoria = () => {
  return (
    <>
      <Container className="pb-20">
        <Hero />
        <MainStory />
        <Timeline />
        <OurValues />
        <MisionVision />
      </Container>
    </>
  );
};

export default NuestraHistoria;
