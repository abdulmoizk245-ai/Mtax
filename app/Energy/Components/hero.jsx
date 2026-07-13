import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBolt } from "react-icons/fa";

export default function EnergyHero() {
  return (
    <section className="relative w-full min-h-[640px] flex items-center overflow-hidden bg-black">
      {/* Background image */}
      <Image
        src="/energy/hero.png"
        alt="De Novo Energy Generator"
        fill
        priority
        className="object-cover object-right"
      />

      {/* Left-side dark gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />

      {/* Power range label sitting inside the badge box baked into the photo */}
      <div className="absolute right-[6%] top-[63%] hidden w-[30%] max-w-[380px] items-center pl-[17%] sm:flex">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-300">
            Power Range
          </p>
          <p className="mt-1 text-base font-bold text-white md:text-lg">
            1kW <span className="text-[#39FF14]">TO</span> 1000kW
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-12">
        <div className="max-w-xl">
          <h1 className="mb-4 text-3xl font-extrabold uppercase tracking-wide text-white md:text-4xl">
            DE NOVO <span className="text-[#39FF14]">ENERGY</span>
          </h1>

          <h2 className="mb-6 text-xl font-bold uppercase leading-snug text-white md:text-2xl">
            Reliable Generator Supply for{" "}
            <span className="text-[#39FF14]">Commercial</span> and Industrial
            Power Needs
          </h2>

          <p className="mb-9 max-w-lg text-sm leading-relaxed text-gray-300 md:text-base">
            De Novo, under MTAX Group of Companies, is a provider of reliable
            industrial generator supply, offering high-demand power solutions
            for commercial and industrial-grade power requirements. From
            bulk generator supply to project-based power needs, De Novo
            supports businesses with stable and dependable energy solutions.
          </p>

          <Link
            href="#power-solutions"
            className="inline-flex items-center gap-2 rounded-md border-2 border-[#39FF14] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#39FF14] transition-colors hover:bg-[#39FF14] hover:text-black"
          >
            Explore Power Solutions <FaArrowRight aria-hidden />
          </Link>
        </div>
      </div>

      {/* Mobile power range badge */}
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-3 rounded-md border border-[#39FF14]/40 bg-black/60 px-4 py-3 backdrop-blur-sm sm:hidden">
        <FaBolt className="text-lg text-[#39FF14]" />
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-300">
            Power Range
          </p>
          <p className="text-sm font-bold text-white">1kW TO 1000kW</p>
        </div>
      </div>
    </section>
  );
}
