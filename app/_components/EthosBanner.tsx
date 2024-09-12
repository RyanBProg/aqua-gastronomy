import { motion } from "framer-motion";
import GlassMorphCard from "./GlassMorphCard";
import Section from "./Section";
import Link from "next/link";

export default function EthosBanner() {
  return (
    <Section className="">
      <div className="container mx-auto px-4 text-center">
        <GlassMorphCard>
          <h3 className="text-4xl font-bold mb-8">Our Ethos</h3>
          <p className="max-w-3xl mx-auto text-xl mb-12 leading-relaxed text-gray-300">
            Why overcomplicate your meals with trivialities like food? At
            AquaGastronomy, we celebrate the essence of nourishment by focusing
            solely on water in all its natural beauty. Each dish is prepared
            with the utmost precision, using techniques passed down through
            generations of water artisans. Whether it&apos;s delicately boiled
            or chilled to perfection, we promise an unparalleled dining
            experience.
          </p>
          <Link href="/about">
            <motion.button
              className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}>
              Explore Our Philosophy
            </motion.button>
          </Link>
        </GlassMorphCard>
      </div>
    </Section>
  );
}
