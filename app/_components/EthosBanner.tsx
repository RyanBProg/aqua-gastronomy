import { motion } from "framer-motion";
import GlassMorphCard from "./GlassMorphCard";
import Section from "./Section";

export default function EthosBanner() {
  return (
    <Section className="">
      <div className="container mx-auto px-4 text-center">
        <GlassMorphCard>
          <h3 className="text-4xl font-bold mb-8">Our Ethos</h3>
          <p className="max-w-3xl mx-auto text-xl mb-12 leading-relaxed text-gray-300">
            At Aqua Essence, we don&apos;t just serve water; we curate
            transcendent experiences. Our master hydro-sommeliers craft each
            elixir to awaken your senses and connect you with the primordial
            essence of life itself.
          </p>
          <motion.button
            className="border-2 border-teal-400 text-teal-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-400 hover:text-gray-900 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Explore Our Philosophy
          </motion.button>
        </GlassMorphCard>
      </div>
    </Section>
  );
}
