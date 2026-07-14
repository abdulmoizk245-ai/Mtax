// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowRight, FaBolt } from "react-icons/fa";

// export default function EnergyHero() {
//   return (
//     <section className="relative w-full min-h-[640px] flex items-center overflow-hidden bg-black">
//       {/* Background image */}
//       <Image
//         src="/energy/hero.png"
//         alt="De Novo Energy Generator"
//         fill
//         priority
//         className="object-cover object-right"
//       />

//       {/* Left-side dark gradient for text readability */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />

//       {/* Power range label sitting inside the badge box baked into the photo */}
//       <div className="absolute right-[6%] top-[63%] hidden w-[30%] max-w-[380px] items-center pl-[17%] sm:flex">
//         <div>
//           <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-300">
//             Power Range
//           </p>
//           <p className="mt-1 text-base font-bold text-white md:text-lg">
//             1kW <span className="text-[#39FF14]">TO</span> 1000kW
//           </p>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-12">
//         <div className="max-w-xl">
//           <h1 className="mb-4 text-3xl font-extrabold uppercase tracking-wide text-white md:text-4xl">
//             DE NOVO <span className="text-[#39FF14]">ENERGY</span>
//           </h1>

//           <h2 className="mb-6 text-xl font-bold uppercase leading-snug text-white md:text-2xl">
//             Reliable Generator Supply for{" "}
//             <span className="text-[#39FF14]">Commercial</span> and Industrial
//             Power Needs
//           </h2>

//           <p className="mb-9 max-w-lg text-sm leading-relaxed text-gray-300 md:text-base">
//             De Novo, under MTAX Group of Companies, is a provider of reliable
//             industrial generator supply, offering high-demand power solutions
//             for commercial and industrial-grade power requirements. From
//             bulk generator supply to project-based power needs, De Novo
//             supports businesses with stable and dependable energy solutions.
//           </p>

//           <Link
//             href="#power-solutions"
//             className="inline-flex items-center gap-2 rounded-md border-2 border-[#39FF14] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#39FF14] transition-colors hover:bg-[#39FF14] hover:text-black"
//           >
//             Explore Power Solutions <FaArrowRight aria-hidden />
//           </Link>
//         </div>
//       </div>

//       {/* Mobile power range badge */}
//       <div className="absolute bottom-6 right-6 z-10 flex items-center gap-3 rounded-md border border-[#39FF14]/40 bg-black/60 px-4 py-3 backdrop-blur-sm sm:hidden">
//         <FaBolt className="text-lg text-[#39FF14]" />
//         <div>
//           <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-300">
//             Power Range
//           </p>
//           <p className="text-sm font-bold text-white">1kW TO 1000kW</p>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBolt } from "react-icons/fa";

export default function EnergyHero() {
  return (
    <section className="relative flex min-h-[680px] w-full items-center overflow-hidden bg-[#101513] sm:min-h-[620px] lg:min-h-[840px]">
      {/* Background Image */}
      <Image
        src="/energy/hero.png"
        alt="De Novo Energy Generator"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />



      {/* Top and Bottom Vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

   

      {/* Green Glow Around Curve */}
      <div className="pointer-events-none absolute left-[39%] top-0 z-10 hidden h-full w-[140px] bg-[#39FF14]/5 blur-[45px] lg:block" />

      {/* Main Content */}
      <div className="relative z-30 mx-auto w-full  px-6 py-16 sm:px-9 md:px-12 lg:px-14">
        <div className="max-w-[555px]">
          {/* Main Heading */}
          <h1 className="text-[35px] font-extrabold uppercase leading-none tracking-[-0.02em] text-white md:text-[43px] lg:text-[47px]">
            De Novo <span className="text-[#28D947]">Energy</span>
          </h1>

          {/* Subtitle */}
          <h2 className="mt-5 max-w-[520px] text-[26px] font-extrabold uppercase leading-[1.45] text-white md:text-[32px] lg:text-[18px]">
            Reliable Generator Supply for
            <br className="hidden sm:block" />{" "}
            <span className="text-[#28D947]">Commercial</span> and Industrial
            Power Needs
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-[510px] text-[14px] leading-[1.65] text-white/75 md:text-[16px] lg:text-[14px]">
            De Novo, under MTAX Group of Companies, is connected with industrial
            generator supply support, offering dependable power solutions for
            commercial, industrial and project-based requirements. From backup
            power to high-capacity generator systems, De Novo supports
            businesses with stable and reliable energy solutions.
          </p>

          {/* CTA */}
          <Link
            href="#power-solutions"
            className="mt-8 inline-flex items-center gap-2 rounded-[3px] bg-[#2BD94C] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(43,217,76,0.22)] transition duration-300 hover:bg-[#23C941] md:text-[14px] lg:text-[13px]"
          >
            <span>Explore Power Solutions</span>
            <FaArrowRight className="text-[10px]" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Power Range Badge */}
      <div className="absolute bottom-6 right-5 z-30 flex min-h-[92px] w-[300px] max-w-[calc(100%-40px)] items-center gap-4 rounded-[5px] border border-white/20 bg-[#131816]/80 px-5 py-4 shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-[5px] sm:right-8 lg:bottom-8 lg:right-10 lg:w-[330px]">
        {/* Bolt Circle */}
        <div
          className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full border border-[#39FF14]/60 bg-[#10210F]/80"
          style={{
            boxShadow:
              "0 0 12px rgba(57,255,20,0.28), inset 0 0 14px rgba(57,255,20,0.08)",
          }}
        >
          <FaBolt className="text-[26px] text-[#39FF14]" />
        </div>

        {/* Badge Text */}
        <div>
          <p className="text-[13px] font-extrabold uppercase leading-none tracking-[0.03em] text-white">
            Power Range
          </p>

          <p className="mt-1 text-[17px] font-extrabold uppercase leading-none text-white">
            5kW <span className="text-[#39FF14]">to</span> 1000kW
          </p>

          <p className="mt-2 text-[9px] leading-[1.4] text-white/65">
            Reliable Power. Built to Apply.
          </p>
        </div>
      </div>
    </section>
  );
}