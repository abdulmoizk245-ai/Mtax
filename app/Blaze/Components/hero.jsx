import Image from "next/image";
import Link from "next/link";
import { FaSolarPanel, FaLaptopCode, FaArrowRight } from "react-icons/fa";
import SplitHeading from "../../Components/SplitHeading";
import Reveal from "../../Components/Reveal";

export default function BlazeHero() {
  return (
    <section className="relative w-full min-h-[620px] flex items-center overflow-hidden bg-[#050b1f]">
      {/* Background image */}
      <Image
        src="/blaze/hero1.png"
        alt="Blaze Group Hero"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full  px-6 py-16 md:px-12">
        <div className="max-w-xl">
          <SplitHeading
            as="h1"
            className="mb-2 text-4xl font-extrabold tracking-wide text-white md:text-[44px] lg:text-[60px]"
          >
            BLAZE GROUP
          </SplitHeading>

          <Reveal as="h2" delay={250} y={30} scale={0.94} rotate={0} className="mb-6 text-[26px] font-bold uppercase tracking-wide text-white md:text-[32px] lg:text-[27px]">
            Powering A <span className="shimmer-text">Smarter Future</span>
          </Reveal>

          <p className="mb-8 max-w-lg text-sm leading-relaxed text-gray-300 md:text-base">
            BLAZE brings together Blaze Solar Energy and Blaze Interactives
            under MTAX Group, combining renewable energy supply with modern
            digital solutions for growing businesses.
          </p>

          <p className="mb-8 max-w-lg text-sm leading-relaxed text-gray-300 md:text-base">
            Through reliable solar products and creative digital services, BLAZE
            helps companies improve efficiency, build stronger systems, and move
            forward with confidence.
          </p>

          <div className="mb-10 flex w-fit max-w-full items-center rounded-[2px] border-[2px] border-white/90 bg-[#07152b]/60 px-3 py-2 backdrop-blur-sm sm:px-4">
            <div className="flex items-center gap-2 pr-3 sm:gap-3 sm:pr-5">
              <FaSolarPanel className="shrink-0 text-[23px] text-[#1375E6] sm:text-[27px]" />

              <span className="whitespace-nowrap text-[13px] font-normal uppercase text-white/90 md:text-[14px] lg:text-[13px]">
                Solar Energy
              </span>
            </div>

            <div className="mx-2 h-[22px] w-px shrink-0 bg-white/50 sm:mx-3" />

            <div className="flex items-center gap-2 pl-1 sm:gap-3 sm:pl-2">
              <FaLaptopCode className="shrink-0 text-[23px] text-[#1375E6] sm:text-[27px]" />

              <span className="whitespace-nowrap text-[13px] font-normal uppercase text-white/90 md:text-[14px] lg:text-[13px]">
                Interactives
              </span>
            </div>
          </div>

          <Link
            href="/contact"
            className="btn-shine btn-glow inline-flex items-center gap-2 rounded-md bg-[#1375E6] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f5dbf]"
          >
            Explore More <FaArrowRight aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
