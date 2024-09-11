"use client";

import Hero from "./_components/Hero";
import SignatureCards from "./_components/SignatureCards";
import EthosBanner from "./_components/EthosBanner";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      <main>
        <Hero />
        <SignatureCards />
        <EthosBanner />
      </main>
    </div>
  );
}
