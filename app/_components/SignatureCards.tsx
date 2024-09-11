import { AnimatePresence, motion } from "framer-motion";
import GlassMorphCard from "./GlassMorphCard";
import Section from "./Section";
import { Droplet, X } from "lucide-react";
import { useState } from "react";

export default function SignatureCards() {
  const [activeElixir, setActiveElixir] = useState<null | string>(null);

  return (
    <>
      <Section className="relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative">
          <h3 className="text-4xl font-bold mb-12 text-center">
            Signature Elixirs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Celestial Dew",
                desc: "Infused with starlight and dreams",
              },
              { name: "Liquid Zen", desc: "Tranquility in every molecule" },
              { name: "Aqua Vitae", desc: "The essence of life, refined" },
            ].map((elixir, index) => (
              <GlassMorphCard
                key={elixir.name}
                className="text-center"
                index={index}>
                <motion.div
                  className="h-48 w-48 mx-auto mb-6 rounded-full bg-blue-500 bg-opacity-30 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1, ease: "easeInOut" }}>
                  <Droplet size={64} className="text-blue-300" />
                </motion.div>
                <h4 className="text-2xl font-semibold mb-2 text-teal-300">
                  {elixir.name}
                </h4>
                <p className="text-gray-300">{elixir.desc}</p>
                <motion.button
                  className="mt-4 px-4 py-2 bg-teal-500 bg-opacity-30 rounded-full text-teal-100 hover:bg-opacity-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveElixir(elixir.name)}>
                  Learn More
                </motion.button>
              </GlassMorphCard>
            ))}
          </div>
        </div>
      </Section>

      <AnimatePresence>
        {activeElixir && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <GlassMorphCard className="max-w-2xl mx-4">
              <button
                className="absolute top-4 right-4 text-teal-300"
                onClick={() => setActiveElixir(null)}>
                <X size={24} />
              </button>
              <h3 className="text-3xl font-bold mb-4 text-teal-300">
                {activeElixir}
              </h3>
              <p className="text-gray-300 mb-4">
                Experience the sublime essence of {activeElixir}, a masterpiece
                of hydration crafted to awaken your senses and nourish your
                soul. This extraordinary elixir is more than mere water; it's a
                journey through the purest elements of nature, enhanced by our
                proprietary process to deliver unparalleled refreshment and
                vitality.
              </p>
              <motion.button
                className="bg-teal-400 text-gray-900 px-6 py-2 rounded-full text-lg font-semibold hover:bg-teal-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Add to Experience
              </motion.button>
            </GlassMorphCard>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
