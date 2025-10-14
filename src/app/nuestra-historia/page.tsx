import { Container } from "@/components/ui";
import {
  Hero,
  LegacyCall,
  MainStory,
  MisionVision,
  OurValues,
} from "./components";

const NuestraHistoria = () => {
  return (
    <>
      <Container>
        <Hero />
        <MainStory />
        <MisionVision />
        <OurValues />
      </Container>
      <LegacyCall />
    </>
  );
};

export default NuestraHistoria;
