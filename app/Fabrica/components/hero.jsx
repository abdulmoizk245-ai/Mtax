// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";

// export default function FabricaHero() {
//   return (
//     <section className="relative min-h-[620px] w-full  w-full overflow-hidden bg-[#050b1f]">
//       <Image
//         src="/fabrica/hero.jpg"
//         alt="Fabrica Textile Manufacturing"
//         fill
//         priority
//         sizes="100vw"
//         className="object-contain "
//       />
//       {/* Content */}
//       <div className="relative z-10 mx-auto flex min-h-[620px] items-center px-6 py-16 md:px-12">
//         <div className="max-w-xl">
//           <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#3aa0ff]">
//             Premium Fabric Manufacturer
//           </p>

//           <h1 className="mb-4 text-[36px] font-extrabold tracking-wide text-white md:text-[44px] lg:text-[60px]">
//             FABRICA
//           </h1>

//           <h2 className="mb-6 text-[26px] font-bold uppercase leading-tight tracking-wide text-white md:text-[32px] lg:text-[30px]">
//             Reliable Fabrics For Modern{" "}
//             <span className="text-[#1375E6]">Production</span>
//           </h2>

//           <p className="mb-8 max-w-lg text-sm leading-relaxed text-gray-300 md:text-base">
//             At Fabrics, we combine advanced textile technology with a commitment
//             to quality and reliability. From premium fabrics to expert support,
//             we help your production run smoother and your brand stand stronger.
//           </p>

//           <Link
//             href="#solutions"
//             className="inline-flex items-center gap-2 rounded-md bg-[#1375E6] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f5dbf]"
//           >
//             Explore Fabrics Solutions <FaArrowRight aria-hidden />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import SplitHeading from "../../Components/SplitHeading";
import Reveal from "../../Components/Reveal";

export default function FabricaHero() {
  return (
    <section className="relative min-h-[620px] w-full overflow-hidden bg-[#050b1f]">
      {/* Full Background Image */}
      <Image
        src="/fabrica/hero.jpg"
        alt="Fabrica Textile Manufacturing"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#050b1f]/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[620px] w-full items-center px-5 py-14 sm:px-8 md:px-12 md:py-16 lg:px-16">
        <div className="max-w-xl">
          <p className="mb-3 animate-fade-in text-[13px] font-bold uppercase tracking-widest text-[#3aa0ff] md:text-[14px]">
            Premium Fabric Manufacturer
          </p>

          <SplitHeading
            as="h1"
            className="mb-4 text-[36px] font-extrabold tracking-wide text-white md:text-[44px] lg:text-[60px]"
          >
            FABRICA
          </SplitHeading>

          <Reveal as="h2" delay={250} y={30} scale={0.94} rotate={0} className="mb-6 text-[26px] font-bold uppercase leading-tight tracking-wide text-white md:text-[32px] lg:text-[30px]">
            Reliable Fabrics For Modern{" "}
            <span className="shimmer-text">Production</span>
          </Reveal>

          <p className="mb-8 max-w-lg text-[14px] leading-relaxed text-gray-200 md:text-[16px]">
            At Fabrics, we combine advanced textile technology with a commitment
            to quality and reliability. From premium fabrics to expert support,
            we help your production run smoother and your brand stand stronger.
          </p>

          <Link
            href="/contact"
            className="btn-shine btn-glow inline-flex items-center gap-2 rounded-md bg-[#1375E6] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f5dbf]"
          >
            Explore Fabrics Solutions
            <FaArrowRight aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}