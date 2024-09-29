"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/darkModeContext";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      className="dark:bg-white bg-black p-1.5 rounded-full"
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      {isDarkMode ? <Sun size={20} color="black" /> : <Moon size={20} />}
    </motion.button>
  );
}
