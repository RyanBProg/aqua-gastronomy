import { motion } from "framer-motion";
import { useTransform, useScroll, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const y1Spring = useSpring(y1, springConfig);
  const y2Spring = useSpring(y2, springConfig);
  const opacitySpring = useSpring(opacity, springConfig);
  const scaleSpring = useSpring(scale, springConfig);

  return (
    <section className="hero relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center"
        style={{ y: y1Spring, scale: scaleSpring }}
      />
      <motion.div
        className="text-center z-10 space-y-6"
        style={{ y: y2Spring, opacity: opacitySpring }}>
        <h2 className="text-6xl font-bold mb-4 leading-tight">
          Elevate Your
          <br />
          Hydration Experience
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Where water transcends its essence
        </p>
        <motion.button
          className="bg-teal-400 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-300 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Reserve Your Journey
        </motion.button>
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
        <ChevronDown size={32} className="text-teal-400" />
      </motion.div>
    </section>
  );
}
