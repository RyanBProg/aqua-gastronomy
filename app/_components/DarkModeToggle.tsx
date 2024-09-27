"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <motion.button
      className={`${
        isDarkMode ? "bg-white" : "bg-neutral-700"
      } p-1.5 rounded-full`}
      onClick={() => setIsDarkMode((prev) => !prev)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      {isDarkMode ? <Sun size={20} color="black" /> : <Moon size={20} />}
    </motion.button>
  );
}
