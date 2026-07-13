import Image from "next/image";
import Link from "next/link";
import { FaSolarPanel, FaLaptopCode, FaArrowRight } from "react-icons/fa";

export default function BlazeHero() {
  return (
    <section className="relative w-full min-h-[620px] flex items-center overflow-hidden bg-[#050b1f]">
      {/* Background image */}
      <Image
        src="/blaze/hero.png"
        alt="Blaze Group Hero"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full  px-6 py-16 md:px-12">
        <div className="max-w-xl">
          <h1 className="mb-2 text-4xl font-extrabold tracking-wide text-white md:text-6xl">
            BLAZE GROUP
          </h1>

          <h2 className="mb-6 text-lg font-bold uppercase tracking-wide text-white md:text-xl">
            Powering A <span className="text-[#3aa0ff]">Smarter Future</span>
          </h2>

          <p className="mb-8 max-w-lg text-sm leading-relaxed text-gray-300 md:text-base">
            BLAZE brings together Blaze Solar Energy and Blaze Interactives
            under MTAX Group, combining renewable energy supply with modern
            digital solutions for growing businesses.
          </p>

          <p className="mb-8 max-w-lg text-sm leading-relaxed text-gray-300 md:text-base">
            Through reliable solar products and creative digital services,
            BLAZE helps companies improve efficiency, build stronger systems,
            and move forward with confidence.
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <div className="flex items-center gap-3 rounded-md border border-white/30 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-[#1375E6] text-white">
                <FaSolarPanel />
              </span>
              <span className="text-sm font-semibold text-white">
                Solar Energy
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-md border border-white/30 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-[#1375E6] text-white">
                <FaLaptopCode />
              </span>
              <span className="text-sm font-semibold text-white">
                Interactives
              </span>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-[#1375E6] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f5dbf]"
          >
            Explore More <FaArrowRight aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
