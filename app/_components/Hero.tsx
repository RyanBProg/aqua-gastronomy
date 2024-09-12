import { motion } from "framer-motion";
import { useTransform, useScroll, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

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
        className="absolute inset-0 bg-[url('./public/images/water-hero.png')] brightness-50 bg-cover bg-center"
        style={{ y: y1Spring, scale: scaleSpring }}
      />
      <motion.div
        className="text-center z-10 space-y-6"
        style={{ y: y2Spring, opacity: opacitySpring }}>
        <h2 className="text-6xl font-bold mb-4 leading-tight">
          Elevate Your
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
            Hydration
          </span>{" "}
          Experience
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Where water transcends its essence
        </p>
        <Link href="/reservations" className="inline-block">
          <motion.button
            className="bg-blue-500 text-gray-900 rounded-md px-8 py-3 text-lg font-semibold hover:bg-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}>
            Reserve Your Journey
          </motion.button>
        </Link>
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </section>
  );
}
