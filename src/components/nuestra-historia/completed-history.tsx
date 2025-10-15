import { motion, useScroll, useSpring } from "motion/react";
import { Content } from "./content";

export const CompletedHistory = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Content />
    </>
  );
};
