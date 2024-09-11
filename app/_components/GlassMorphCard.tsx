"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  index?: number;
};

export default function GlassMorphCard({
  children,
  className = "",
  index = 0,
}: Props) {
  const cardRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={cardRef}
      className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl ${className}`}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}>
      {children}
    </motion.div>
  );
}
