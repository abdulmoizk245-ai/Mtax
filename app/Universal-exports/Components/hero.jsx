import Image from "next/image";
import Link from "next/link";

export default function UniversalExportsHero() {
  return (
    <section className="relative flex min-h-[560px] w-full items-center overflow-hidden bg-[#101B30] sm:min-h-[500px] lg:min-h-[740px]">
      {/* Background Image */}
      <Image
        src="/universal/hero.jpg"
        alt="Universal Exports Premium Crepe Fabrics and Threads"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center lg:object-right"
      />



      {/* Content */}
      <div className="relative z-10 mx-auto w-full  px-6 py-16 sm:px-10 lg:px-14 xl:px-16">
        <div className="max-w-[560px]">
          {/* Main Heading */}
          <h1 className="text-[34px] font-extrabold uppercase leading-none tracking-[-0.02em] text-white md:text-[42px] lg:text-[48px]">
            Universal Exports
          </h1>

          {/* Small Label */}
          <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.08em] text-white sm:text-[11px]">
            Quality
          </p>

          {/* Subheading */}
          <h2 className="mt-2 text-[26px] font-bold uppercase leading-[1.4] text-white md:text-[32px] lg:text-[18px]">
            Premium <span className="text-[#3193FF]">Crepe</span> Fabrics &amp;{" "}
            <span className="text-[#3193FF]">Threads</span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-[500px] text-[14px] leading-[1.65] text-white/80 md:text-[16px] lg:text-[14px]">
            Universal Exports provides premium crepe fabrics and quality thread
            materials for brands, manufacturers, and textile businesses. We
            focus on reliable sourcing, consistent supply, and trusted support
            to help businesses maintain quality and smooth production.
          </p>

          {/* Highlighted Text */}
          <p className="mt-5 text-[14px] font-semibold leading-[1.5] text-white md:text-[16px] lg:text-[13px]">
            Quality materials, trusted by brands worldwide.
          </p>

          {/* Button */}
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-[3px] bg-[#2587E8] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_8px_22px_rgba(37,135,232,0.25)] transition duration-300 hover:bg-[#1674D3] md:text-[14px] lg:text-[12px]"
          >
            <span>Explore Crepe Fabrics</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}