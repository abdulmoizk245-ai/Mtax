import Image from "next/image";
import Link from "next/link";

export default function ShamoozHero() {
  return (
    <section className="relative flex min-h-[620px] w-full items-center overflow-hidden bg-[#111A2B] lg:aspect-[320/165] lg:min-h-0">
      {/* Background Image */}
      <Image
        src="/shamooz/hero1.png"
        alt="Shamooz premium fashion collection"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center]"
      />


      {/* Main Content */}
   <div className="relative z-30 mx-auto w-full px-6 py-16 sm:px-10 lg:px-12 xl:px-14">
  <div className="max-w-[620px]">
    {/* Heading */}
    <h1 className="text-[28px] font-extrabold uppercase leading-none tracking-[-0.02em] text-white md:text-[44px] lg:text-[58px]">
      Shamooz
    </h1>

    {/* Subtitle */}
    <h2 className="mt-4 text-[24px] font-semibold uppercase tracking-[0.05em] text-white md:text-[32px] lg:text-[30px]">
      <span className="text-[#1687FF]">Elegance</span> and{" "}
      <span className="text-[#1687FF]">Sophistication</span> in Every Stitch
    </h2>

    {/* Description */}
    <div className="mt-7 max-w-[560px] space-y-5">
      <p className="text-[14px] leading-[1.65] text-white/80 md:text-[16px] lg:text-[17px]">
        Shamooz offers luxurious, ready-to-wear and unstitched clothing that
        blends traditional craftsmanship with modern fashion aesthetics. Each
        collection is designed to reflect elegance, refinement, and timeless
        style.
      </p>

      <p className="text-[14px] leading-[1.65] text-white/80 md:text-[16px] lg:text-[17px]">
        With a strong focus on quality fabrics, graceful details, and everyday
        comfort, Shamooz creates outfits suitable for different occasions. From
        casual wear to special events, every piece is crafted to make customers
        feel stylish and confident.
      </p>
    </div>

    {/* CTA Button */}
    <Link
      href="/contact"
      className="mt-8 inline-flex items-center gap-2 rounded-[3px] bg-[#1687FF] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(22,135,255,0.25)] transition duration-300 hover:bg-[#0872DC] md:text-[14px] lg:text-[15px]"
    >
      <span>Discover Our Collection</span>
      <span aria-hidden="true">→</span>
    </Link>
  </div>
</div>
    </section>
  );
}