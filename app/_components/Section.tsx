"use client";

import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  className: string;
};

export default function Section({ children, className = "" }: Props) {
  const ref = useRef(null);
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`py-20 ${className}`}>
      {children}
    </motion.section>
  );
}
