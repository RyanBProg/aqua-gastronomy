"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "../context/darkModeContext";

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
  const { isDarkMode } = useTheme();

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
        <nav className="contentContainer py-4 flex justify-between items-center md:gap-10">
          {/* logo link */}
          <Link href="/">
            <motion.h1
              className="text-black dark:text-white text-3xl font-extrabold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                Aqua
              </span>
              Gastronomy
            </motion.h1>
          </Link>

          {/* nav links */}
          <div className="hidden md:flex md:justify-end space-x-8 md:flex-grow">
            <NavLink link="/">Home</NavLink>
            <NavLink link="/menu">Menu</NavLink>
            <NavLink link="/reservations">Reservations</NavLink>
            <NavLink link="/about">About</NavLink>
          </div>

          {/* mobile menu button */}
          <motion.button
            className="md:hidden text-white hover:text-blue-300"
            onClick={() => setIsMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <Menu size={24} color={isDarkMode ? "white" : "black"} />
          </motion.button>

          {/* dark mode toggle */}
          <motion.div
            className="hidden md:block md:flex-shrink"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <DarkModeToggle />
          </motion.div>
        </nav>
      </motion.header>

      {/* mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-black z-50 flex items-center justify-center"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>
            <button
              className="absolute top-8 right-8 text-white hover:text-blue-300"
              onClick={() => setIsMenuOpen(false)}>
              <X size={24} color={isDarkMode ? "white" : "black"} />
            </button>
            <nav className="text-center">
              <MobNavLink link="/">Home</MobNavLink>
              <MobNavLink link="/menu">Menu</MobNavLink>
              <MobNavLink link="/reservations">Reservations</MobNavLink>
              <MobNavLink link="/about">About</MobNavLink>
            </nav>
            <div className="absolute top-6 left-6">
              <DarkModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

type TNavLink = {
  link: string;
  children: ReactNode;
};

function NavLink({ link, children }: TNavLink) {
  return (
    <motion.a
      href={link}
      className="text-black dark:text-white capitalize text-lg hover:text-blue-300 transition-colors duration-300"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      {children}
    </motion.a>
  );
}

function MobNavLink({ link, children }: TNavLink) {
  return (
    <motion.a
      href={link}
      className="text-black dark:text-white capitalize block text-3xl mb-6 hover:text-blue-300 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}>
      {children}
    </motion.a>
  );
}
