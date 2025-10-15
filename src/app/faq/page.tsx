import { Container } from "@/components/ui";
import { HeaderContent } from "@/components/ui/header-content";
import { Content } from "./components";

const Faq = () => {
  return (
    <>
      <HeaderContent
        title="Preguntas Frecuentes"
        subtitle="Todo lo que necesitas saber sobre nuestros productos y servicios"
        className=""
      />
      <Container className="my-20">
        <Content />
      </Container>
    </>
  );
};

export default Faq;
