import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

type TTextScrollFade = {
  value: string;
};

export default function TextScrollFade({ value }: TTextScrollFade) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.3"],
  });

  return (
    <motion.p
      className="font-semibold text-5xl md:text-7xl tracking-tight mb-4"
      ref={element}
      style={{ opacity: scrollYProgress }}>
      {value}
    </motion.p>
  );
}
