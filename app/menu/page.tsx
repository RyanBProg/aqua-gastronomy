export default function page() {
  return (
    <div className="contentContainer my-40">
      <h1 className="text-[6rem] text-white/20 font-bold leading-tight">
        Our Menu
      </h1>
      <h2 className="text-lg italic text-gray-300">A Journey Through Water</h2>
      <p className="mt-10 mb-20 max-w-[600px]">
        Embark on a culinary journey where water is the hero. Our menu is
        meticulously curated to highlight the nuanced flavors and textures of
        this life-giving ingredient. From the subtle notes of Sous-Vide à la
        Glacier to the bold expression of our Steam Infusion, each dish tells a
        story of purity, innovation, and culinary artistry.
      </p>
      <section className="my-10 grid gap-4">
        <h2 className="text-2xl mb-2 font-bold">Starters</h2>
        <div className="grid gap-1">
          <h3 className="font-semibold">Eau de Lavabo</h3>
          <p className="text-gray-300 max-w-[600px]">
            A refreshing infusion of water hand-drawn from the finest porcelain
            sinks. Filtered through artisanal taps for a clean, slightly soapy
            finish. Perfect as a palate cleanser.
          </p>
          <span className="italic">$12.99</span>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Dishwater Consommé</h3>
          <p className="text-gray-300 max-w-[600px]">
            Our signature blend of post-meal water, delicately simmered with the
            essence of organic dish suds and a whisper of leftover marinara. A
            rustic, full-bodied flavor that lingers on the tongue.
          </p>
          <span className="italic">$14.99</span>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Essence of Rain Puddle</h3>
          <p className="text-gray-300 max-w-[600px]">
            Collected from only the most prestigious city streets, this seasonal
            favorite is served with a garnish of naturally occurring leaf
            debris. Earthy and nostalgic, it offers a taste of urban
            sophistication.
          </p>
          <span className="italic">$12.99</span>
        </div>
      </section>
      <section className="my-10 grid gap-4">
        <h2 className="text-2xl mb-2 font-bold">Main Courses</h2>
        <div className="grid gap-1">
          <h3 className="font-semibold">Toilette d&apos;Evian</h3>
          <p className="text-gray-300 max-w-[600px]">
            A playful twist on an essential, this carefully sourced toilet water
            is filtered to preserve its natural minerals while infusing it with
            the essence of lavender cleaning mist. Paired with a spritz of fresh
            air for a bold, refreshing experience.
          </p>
          <span className="italic">$28.99</span>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Steamed Sewer Reduction</h3>
          <p className="text-gray-300 max-w-[600px]">
            Crafted from the depths of the finest metropolitan drainage systems,
            this rich, robust water has been steamed to remove impurities while
            retaining its distinct aroma of urban life. Slowly reduced to
            concentrate the bold, earthy flavors.
          </p>
          <span className="italic">$32.99</span>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Hose Water à la Garden</h3>
          <p className="text-gray-300 max-w-[600px]">
            Straight from the garden hose, this nostalgic dish is gently boiled
            to enhance the raw essence of rubber and grass. Served with a side
            of fresh lawn clippings for that authentic backyard taste.
          </p>
          <span className="italic">$28.99</span>
        </div>
      </section>
      <section className="my-10 grid gap-4">
        <h2 className="text-2xl mb-2 font-bold">Dessert Waters</h2>
        <div className="grid gap-1">
          <h3 className="font-semibold">Toothpaste Spit Sorbet</h3>
          <p className="text-gray-300 max-w-[600px]">
            A unique and refreshing blend of morning-rinse water with a
            delightful minty aftertaste. Served chilled with a garnish of
            crushed ice for added texture. A true palette refresher to end your
            meal.
          </p>
          <span className="italic">$18.99</span>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Melted Ice Bucket Soufflé</h3>
          <p className="text-gray-300 max-w-[600px]">
            A decadent offering of slowly melted ice from our finest champagne
            buckets. This post-luxury water is aerated to perfection and served
            with a hint of forgotten citrus peel. Light and frothy, with a
            lingering chill.
          </p>
          <span className="italic">$15.99</span>
        </div>
      </section>
      <section className="my-10 grid gap-4">
        <h2 className="text-2xl mb-2 font-bold">Drinks</h2>
        <div className="grid gap-1">
          <h3 className="font-semibold">Sahara Cocktail</h3>
          <p className="text-gray-300 max-w-[600px]">
            Immerse yourself in the essence of the arid wilderness with the
            Sahara Cocktail, an unparalleled elixir that embodies the spirit of
            desert elegance. This sophisticated libation is a crystal-clear
            glass of the purest H2O, exactly what you would need after a long
            camel ride.
          </p>
          <span className="italic">$8.99</span>
        </div>
      </section>
    </div>
  );
}
