import { AnimatePresence, motion } from "framer-motion";
import GlassMorphCard from "./GlassMorphCard";
import Section from "./Section";
import { Droplet, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type SpecialtyDish = {
  name: string;
  desc: string;
  longDesc: string;
};

const specialtyDishes = [
  {
    name: "Essence of Rain Puddle",
    desc: "Earthy and nostalgic, it offers a taste of urban sophistication",
    longDesc:
      "Collected from only the most prestigious city streets, this seasonal favorite is served with a garnish of naturally occurring leaf debris. Earthy and nostalgic, it offers a taste of urban sophistication.",
  },
  {
    name: "Toilette d'Evian",
    desc: "Paired with a spritz of fresh air for a bold, refreshing experience",
    longDesc:
      "A playful twist on an essential, this carefully sourced toilet water is filtered to preserve its natural minerals while infusing it with the essence of lavender cleaning mist. Paired with a spritz of fresh air for a bold, refreshing experience.",
  },
  {
    name: "Hose Water à la Garden",
    desc: "Served with a side of fresh lawn clippings for that authentic backyard taste",
    longDesc:
      "Straight from the garden hose, this nostalgic dish is gently boiled to enhance the raw essence of rubber and grass. Served with a side of fresh lawn clippings for that authentic backyard taste.",
  },
];

export default function SignatureCards() {
  const [activeDish, setActiveDish] = useState<null | SpecialtyDish>(null);

  return (
    <>
      <Section className="relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="mb-12">
            <h3 className="text-4xl font-bold mb-5">
              Discover Our Signature Dishes
            </h3>
            <p className="italic text-gray-300">
              Dining at AquaGastronomy is more than just a meal—it&apos;s an
              immersive experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 lg:gap-12">
            {specialtyDishes.map((dish, index) => (
              <GlassMorphCard
                key={dish.name}
                className="text-center"
                index={index}>
                <motion.div
                  className="h-40 w-40 lg:h-48 lg:w-48 mx-auto mb-6 rounded-full bg-blue-500 bg-opacity-30 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1, ease: "easeInOut" }}>
                  <Droplet size={64} className="text-blue-300" />
                </motion.div>
                <h4 className="text-2xl font-semibold mb-2 text-white">
                  {dish.name}
                </h4>
                <p className="text-gray-300">{dish.desc}</p>
                <motion.button
                  className="mt-4 bg-blue-500 text-gray-900 rounded-md px-6 py-2 text-lg font-semibold hover:bg-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveDish(dish)}>
                  Learn More
                </motion.button>
              </GlassMorphCard>
            ))}
          </div>
        </div>
      </Section>

      <AnimatePresence>
        {activeDish && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <GlassMorphCard className="max-w-2xl mx-4">
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setActiveDish(null)}>
                <X size={24} />
              </button>
              <h3 className="text-3xl font-bold mb-4 text-white">
                {activeDish.name}
              </h3>
              <p className="text-gray-300 mb-4">{activeDish.longDesc}</p>
              <Link href="/menu">
                <motion.button
                  className="bg-blue-500 text-gray-900 rounded-md px-6 py-2 text-lg font-semibold hover:bg-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}>
                  See Our Menu
                </motion.button>
              </Link>
            </GlassMorphCard>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
