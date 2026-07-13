// import Image from "next/image";

// export default function Banner() {
//   const companies = [
//     "YUEMEI",
//     "CSM",
//     "MSBI",
//     "BLAZE",
//     "FABRICA",
//     "DE NOVO",
//     "UNIVERSAL EXPORTS",
//   ];

//   return (
//     <section className="w-full bg-white pt-[18px] text-center">
//       {/* Logo */}
//       <div className="flex justify-center">
//         <Image
//           src="/images/MT BLACK LOGO.png"
//           alt="MTAX Group of Companies"
//           width={95}
//           height={45}
//           className="h-auto w-[295px]"
//         />
//       </div>

//       {/* Description */}
//       <p className="mx-auto mt-[8px] max-w-[670px] px-4 text-[12px] leading-[1.45] text-[#1B2436]/85">
//         MTAX Group of Companies is a privately owned, multi-brand enterprise
//         based in Pakistan, delivering innovation, quality, and
//         <br className="hidden md:block" />
//         excellence across diverse industries.
//       </p>

//       {/* Navigation */}
//       <div className="mt-[18px] flex flex-wrap items-center justify-center gap-x-[35px] gap-y-3 pb-[18px]">
//         {companies.map((item, index) => (
//           <button
//             key={item}
//             className={`text-[13px] font-medium uppercase tracking-[0.02em] transition ${
//               index === 0 ||
//               item === "MSBI" ||
//               item === "FABRICA" ||
//               item === "UNIVERSAL EXPORTS"
//                 ? "text-[#1687FF]"
//                 : "text-[#111827]"
//             }`}
//           >
//             {item}
//           </button>
//         ))}
//       </div>

//       {/* Bottom Line */}
//       <div className="h-[3px] w-full bg-[#040D23]" />
//     </section>
//   );
// }

import Image from "next/image";

export default function Banner() {
  const companies = [
    "YUEMEI",
    "CSM",
    "MSBI",
    "BLAZE",
    "FABRICA",
    "DE NOVO",
    "UNIVERSAL EXPORTS",
  ];

  return (
    <section className="w-full bg-white pt-[18px] text-center">
      {/* Logo */}
      <div className="mx-auto w-full max-w-[295px] px-3 sm:max-w-[360px]">
        <Image
          src="/images/MT BLACK LOGO.png"
          alt="MTAX Group of Companies"
          width={1000}
          height={475}
          priority
          quality={100}
          sizes="(max-width: 640px) 295px, 360px"
          className="block h-auto w-full object-contain"
        />
      </div>
      {/* Description */}
      <p className="mx-auto mt-3 w-full px-4 text-center text-[13px] leading-[1.5] text-[#1B2436]/85 sm:text-[14px] lg:text-[20px] lg:whitespace-nowrap">
        MTAX Group of Companies is a privately owned, multi-brand enterprise
        based in Pakistan, delivering innovation, quality, and excellence across
        diverse industries.
      </p>
      {/* Navigation */}
      <div
        className="
    mt-[18px] flex w-full items-center gap-x-[30px] gap-y-3
    overflow-x-auto px-4 pb-[18px]
    lg:flex-nowrap lg:justify-center lg:overflow-visible lg:px-8
  "
      >
        {companies.map((item, index) => (
          <button
            key={`${item}-${index}`}
            className={`shrink-0 whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.02em] transition-colors lg:text-[30px] ${
              index === 0 ||
              item === "MSBI" ||
              item === "FABRICA" ||
              item === "UNIVERSAL EXPORTS"
                ? "text-[#1687FF]"
                : "text-[#111827]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Bottom Line */}
      <div className="h-[3px] w-full bg-[#040D23]" />
    </section>
  );
}
