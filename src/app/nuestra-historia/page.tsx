import { Container } from "@/components/ui";
import {
  Hero,
  LegacyCall,
  MainStory,
  MisionVision,
  OurValues,
  Timeline,
} from "./components";

const NuestraHistoria = () => {
  return (
    <>
      <Container>
        <Hero />
        <MainStory />
        <Timeline />
        <MisionVision />
        <OurValues />
      </Container>
      <LegacyCall />
    </>
  );
};

export default NuestraHistoria;
