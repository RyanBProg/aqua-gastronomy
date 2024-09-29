"use client";

import { useState } from "react";
import Link from "next/link";
import { Droplets, GlassWater, Waves, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import GlassMorphCard from "./GlassMorphCard";

type SpecialtyDish = {
  name: string;
  desc: string;
  longDesc: string;
};

const specialtyDishes = [
  {
    name: "Essence of Rain Puddle",
    icon: Waves,
    desc: "Earthy and nostalgic, it offers a taste of urban sophistication",
    longDesc:
      "Collected from only the most prestigious city streets, this seasonal favorite is served with a garnish of naturally occurring leaf debris. Earthy and nostalgic, it offers a taste of urban sophistication.",
  },
  {
    name: "Toilette d'Evian",
    icon: Droplets,
    desc: "Paired with a spritz of fresh air for a bold, refreshing experience",
    longDesc:
      "A playful twist on an essential, this carefully sourced toilet water is filtered to preserve its natural minerals while infusing it with the essence of lavender cleaning mist. Paired with a spritz of fresh air for a bold, refreshing experience.",
  },
  {
    name: "Hose Water à la Garden",
    icon: GlassWater,
    desc: "Served with a side of fresh lawn clippings for that authentic backyard taste",
    longDesc:
      "Straight from the garden hose, this nostalgic dish is gently boiled to enhance the raw essence of rubber and grass. Served with a side of fresh lawn clippings for that authentic backyard taste.",
  },
];

export default function DishesBanner() {
  const [activeDish, setActiveDish] = useState<null | SpecialtyDish>(null);

  return (
    <section className="container mx-auto px-4 relative my-60">
      <div>
        <div className="mb-12">
          <h3 className="text-4xl font-bold mb-2">
            Discover Our Signature Dishes
          </h3>
          <p className="italic text-gray-300">
            Dining at AquaGastronomy is more than just a meal—it&apos;s an
            immersive experience.
          </p>
        </div>
        <div className="grid gap-10">
          {specialtyDishes.map((dish) => (
            <div className="flex items-center gap-6">
              <div className="bg-black p-5 rounded-full inline-block">
                <dish.icon size={32} />
              </div>
              <div className="grid">
                <h4 className="font-semibold text-7xl tracking-tight">
                  {dish.name}
                </h4>
                <p className="text-neutral-300">{dish.desc}</p>
              </div>
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-md px-6 py-2 text-lg font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveDish(dish)}>
                Learn More
              </motion.button>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeDish && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <GlassMorphCard className="max-w-2xl mx-4">
              <button
                className="absolute top-4 right-4 text-white hover:text-neutral-400 transition-colors"
                onClick={() => setActiveDish(null)}>
                <X size={24} />
              </button>
              <h3 className="text-3xl font-bold mb-4 text-white">
                {activeDish.name}
              </h3>
              <p className="text-gray-300 mb-4">{activeDish.longDesc}</p>
              <Link href="/menu">
                <motion.button
                  className="bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-md px-6 py-2 text-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}>
                  See Our Menu
                </motion.button>
              </Link>
            </GlassMorphCard>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
