"use client";

import { useState } from "react";
import Link from "next/link";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: useTransform(
            scrollY,
            [0, 100],
            ["rgba(0,0,0,0)", "rgba(0,0,0,0.5)"]
          ),
        }}>
        <nav className="contentContainer py-4 flex justify-between items-center">
          <Link href="/">
            <motion.h1
              className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              AquaGastronomy
            </motion.h1>
          </Link>
          <div className="hidden md:flex space-x-8">
            {["experience", "menu", "reservations", "about"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`/${item}`}
                  className="capitalize text-lg hover:text-blue-300 transition-colors duration-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  {item}
                </motion.a>
              )
            )}
          </div>
          <motion.button
            className="md:hidden text-white hover:text-blue-300"
            onClick={() => setIsMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <Menu size={24} />
          </motion.button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>
            <button
              className="absolute top-6 right-6 text-white hover:text-blue-300"
              onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
            <nav className="text-center">
              {["experience", "menu", "reservations", "about"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`/${item}`}
                    className="capitalize block text-3xl mb-6 hover:text-blue-300 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}>
                    {item}
                  </motion.a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
