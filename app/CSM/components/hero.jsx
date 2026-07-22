
import Image from "next/image";
import Link from "next/link";
import SplitHeading from "../../Components/SplitHeading";
import Reveal from "../../Components/Reveal";

export default function CSMHero() {
  return (
<section className="relative flex lg:h-[720px] w-full items-center overflow-hidden md:h-[600px]">
  {/* Background Image */}
  <Image
    src="/csm/hero.png"
    alt="CSM Chemical Solutions"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />


      {/* Content */}
      <div className="relative z-10  w-full px-6 py-20 md:px-10 lg:px-14">
        {/* Main Heading */}
        <SplitHeading
          as="h1"
          className="text-[32px] font-extrabold tracking-wide text-white md:text-5xl lg:text-[72px]"
        >
          CSM
        </SplitHeading>

        {/* Subheading */}
        <Reveal as="h2" delay={250} y={30} scale={0.94} rotate={0} className="mb-6 max-w-3xl text-[26px] font-bold uppercase leading-[1.5] text-white md:text-[32px] lg:text-[32px]">
          Reliable Chemical Solutions for{" "}
          <span className="shimmer-text">Detergent</span> and{" "}
          <span className="shimmer-text">Industrial</span> Manufacturing
        </Reveal>

        {/* Description */}
        <p className="mb-10 max-w-4xl text-sm leading-relaxed text-gray-300 md:text-[17px] lg:text-[20px] lg:mt-10">
          CSM, under MTAX Group of Companies, provides quality-focused chemical
          raw materials for detergent, cleaning, and industrial manufacturing
          sectors. With strong manufacturing capability, reliable supply, and
          technical understanding, CSM supports businesses with consistent
          products and dependable service.
        </p>

        {/* Buttons */}
        {/* <div className="flex flex-wrap items-center gap-4 ">
          <Link
            href="/contact"
            className="flex items-center gap-3 rounded-md bg-[#1687FF] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#0872DC]"
          >
            <span>Explore Products</span>
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-3 rounded-md border border-white px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#1687FF] hover:bg-[#1687FF]"
          >
            <span>Contact MTAX Group</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div> */}
        {/* Buttons */}
<div className="flex flex-nowrap items-center gap-2 sm:flex-wrap sm:gap-4">
  <Link
    href="/contact"
    className="btn-shine btn-glow flex min-w-0 flex-1 items-center justify-center gap-1 whitespace-nowrap rounded-md bg-[#1687FF] px-2 py-2.5 text-[10px] font-semibold text-white transition-colors duration-300 hover:bg-[#0872DC] sm:flex-none sm:gap-3 sm:px-5 sm:text-sm"
  >
    <span>Explore Products</span>
    <span aria-hidden="true">→</span>
  </Link>

  <Link
    href="/contact"
    className="btn-shine flex min-w-0 flex-1 items-center justify-center gap-1 whitespace-nowrap rounded-md border border-white px-2 py-2.5 text-[10px] font-semibold text-white transition-colors duration-300 hover:border-[#1687FF] hover:bg-[#1687FF] sm:flex-none sm:gap-3 sm:px-5 sm:text-sm"
  >
    <span>Contact MTAX Group</span>
    <span aria-hidden="true">→</span>
  </Link>
</div>
      </div>
    </section>
  );
}