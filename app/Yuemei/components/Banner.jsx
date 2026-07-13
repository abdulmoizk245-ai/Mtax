// import Image from "next/image";

// export default function YuemeiBanner() {
//   return (
//     <section className="w-full bg-[#0B2D5E] overflow-hidden">
//       <div className=" mx-auto flex items-center">
//         {/* Left: Embroidery Image */}
//         <div className="relative h-[140px] w-[220px] flex-shrink-0 hidden sm:block">
//           <Image
//             src="/page2/machine.png"
//             alt="Yuemei Embroidery"
//             fill
//             className="object-cover"
//           />
//           {/* Right fade overlay to blend into the dark bg */}
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B2D5E]" />
//         </div>

//         {/* Center: Text */}
//         <div className="flex-1 px-6 py-8 sm:py-6">
//           <h2 className="text-white font-bold text-2xl sm:text-3xl leading-snug">
//             Upgrade Your Embroidery <br className="hidden sm:block" />
//             Production with Yuemei
//           </h2>
//           <p className="text-white/70 text-base mt-1.5 leading-relaxed max-w-sm">
//             Discover advanced embroidery machines backed by MTAX Group's trusted
//             support.
//           </p>
//         </div>

//         {/* Right: CTA Button */}
//         <div className="flex-shrink-0 px-6 py-6">
//           <button className="flex items-center gap-2 bg-[#1375E6] hover:bg-[#0f63c9] transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded whitespace-nowrap">
//             Contact MTAX Group
//             <span aria-hidden="true">→</span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function YuemeiBanner() {
  return (
    <section className="w-full bg-white px-5 py-5 md:px-10 lg:px-12">
      <div className="relative mx-auto min-h-[210px] w-full max-w-[1450px] overflow-hidden rounded-[14px] bg-gradient-to-r from-[#102E59] via-[#173C76] to-[#123C8B]">
        <div className="grid min-h-[210px] grid-cols-1 items-center md:grid-cols-[30%_1fr_auto]">
          {/* Left Image */}
          <div className="relative hidden h-full min-h-[210px] overflow-hidden md:block">
            <Image
              src="/page2/hero.png"
              alt="Yuemei embroidery production"
              fill
              priority
              sizes="30vw"
              className="object-cover object-center"
            />

            {/* Image blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#102E59]/10 to-[#102E59]" />
          </div>

          {/* Center Content */}
          <div className="flex h-full flex-col justify-center px-7 py-9 md:px-9 lg:px-12">
            <h2 className="max-w-[520px] text-[27px] font-bold leading-[1.35] text-white md:text-[30px] lg:text-[32px]">
              Upgrade Your Embroidery
              <br />
              Production with Yuemei
            </h2>

            <p className="mt-3 max-w-[500px] text-[15px] leading-[1.55] text-white/85 md:text-[17px]">
              Discover advanced embroidery machines backed
              <br className="hidden lg:block" /> by MTAX Group&apos;s trusted
              support.
            </p>
          </div>

          {/* Right Button */}
          <div className="flex items-center px-7 pb-9 md:px-8 md:pb-0 lg:pr-12">
            <Link
              href="/contact"
              className="flex min-h-[62px] min-w-[228px] items-center justify-center gap-5 rounded-[9px] bg-[#145BE8] px-7 text-[16px] font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition duration-300 hover:bg-[#0F4FD3]"
            >
              <span>Contact MTAX Group</span>

              <span className="text-[27px] font-light leading-none">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}