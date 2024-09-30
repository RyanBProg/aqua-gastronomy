"use client";

import { motion } from "framer-motion";

export default function EthosBanner() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        whileInView={{ clipPath: "circle(100% at 50% 50%)" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.h3
        className="text-6xl font-bold mb-8 text-white mix-blend-difference"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}>
        Our Ethos
      </motion.h3>
      <motion.p
        className="text-xl max-w-2xl text-center text-white mix-blend-difference"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}>
        Why overcomplicate your meals with trivialities like food? At
        AquaGastronomy, we celebrate the essence of nourishment by focusing
        solely on water in all its natural beauty. Each dish is prepared with
        the utmost precision, using techniques passed down through generations
        of water artisans. Whether it&apos;s delicately boiled or chilled to
        perfection, we promise an unparalleled dining experience.
      </motion.p>
    </section>
  );
}
