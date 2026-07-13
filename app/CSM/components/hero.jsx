import Image from "next/image";
import Link from "next/link";

export default function CSMHero() {
  return (
    <section className="relative w-full min-h-[1020px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/csm/hero.png"
        alt="CSM Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0b1a3b]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full px-6 py-20 mb-20">
        <h1 className="mb-4 text-5xl font-extrabold text-white tracking-wide">
          CSM
        </h1>

        <h2 className="mb-6 max-w-xl text-2xl font-bold uppercase leading-snug text-white">
          Reliable Chemical Solutions For{" "}
          <span className="text-orange-400">Detergent</span> And{" "}
          <span className="text-orange-400">Industrial</span> Manufacturing
        </h2>

        <p className="mb-10 max-w-lg text-sm leading-relaxed text-gray-300">
          CSM, under MTAX Group of Companies, provides quality focused chemical
          raw materials for detergent, cleaning and industrial manufacturing
          sectors. With strong manufacturing capability, reliable supply and
          technical understanding, CSM supports businesses with consistent
          products and dependable service.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/CSM/products"
            className="flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Explore Products <span aria-hidden>→</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md border border-white px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Contact for MTAX Group <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
