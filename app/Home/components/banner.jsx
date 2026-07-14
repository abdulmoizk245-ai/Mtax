


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
//     <section className="w-full bg-white pt-[12px] text-center lg:pt-[18px]">
//       {/* Logo */}
//       <div className="mx-auto w-full max-w-[210px] px-3 sm:max-w-[270px] lg:max-w-[360px]">
//         <Image
//           src="/images/MT BLACK LOGO.png"
//           alt="MTAX Group of Companies"
//           width={1000}
//           height={475}
//           priority
//           quality={100}
//           sizes="(max-width: 640px) 210px, (max-width: 1024px) 270px, 360px"
//           className="block h-auto w-full object-contain"
//         />
//       </div>

//       {/* Description */}
//       <p className="mx-auto mt-2 w-full px-4 text-center text-[15px] leading-[1.5] text-[#1B2436]/85 md:text-[17px] lg:mt-3 lg:text-[20px] lg:whitespace-nowrap">
//         MTAX Group of Companies is a privately owned, multi-brand enterprise
//         based in Pakistan, delivering innovation, quality, and excellence across
//         diverse industries.
//       </p>

//       {/* Navigation */}
// <div
//   className="
//     mt-3 flex w-full items-center gap-x-[14px]
//     overflow-x-auto px-4 pb-3
//     [scrollbar-width:none]
//     [&::-webkit-scrollbar]:hidden
//     md:gap-x-[22px]
//     lg:mt-[18px] lg:w-full lg:flex-nowrap lg:justify-center
//     lg:gap-x-[30px] lg:overflow-visible lg:px-8 lg:pb-[18px]
//   "
// >
//         {companies.map((item, index) => (
//           <button
//             key={`${item}-${index}`}
//             type="button"
//             className={`shrink-0 whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.01em] transition-colors md:text-[15px] lg:text-[30px] lg:tracking-[0.02em] ${
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
    <section className="w-full overflow-hidden bg-white pt-[12px] text-center lg:pt-[18px]">
      {/* Logo */}
      <div className="mx-auto w-full max-w-[210px] px-3 sm:max-w-[270px] md:max-w-[320px] lg:max-w-[360px]">
        <Image
          src="/images/MT BLACK LOGO.png"
          alt="MTAX Group of Companies"
          width={1000}
          height={475}
          priority
          quality={100}
          sizes="(max-width: 640px) 210px, (max-width: 1024px) 320px, 360px"
          className="block h-auto w-full object-contain"
        />
      </div>

      {/* Description */}
      <p className="mx-auto mt-2 w-full px-4 text-center text-[15px] leading-[1.5] text-[#1B2436]/85 md:max-w-[760px] md:px-6 md:text-[17px] lg:mt-3 lg:max-w-none lg:text-[20px] lg:whitespace-nowrap">
        MTAX Group of Companies is a privately owned, multi-brand enterprise
        based in Pakistan, delivering innovation, quality, and excellence across
        diverse industries.
      </p>

      {/* Navigation */}
      <div
        className="
          mt-3 flex w-full items-center gap-x-[14px]
          overflow-x-auto px-4 pb-3
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden

          md:flex-nowrap md:justify-center md:gap-x-[18px]
          md:overflow-visible md:px-5 md:pb-4

          lg:mt-[18px] lg:w-full lg:flex-nowrap lg:justify-center
          lg:gap-x-[30px] lg:overflow-visible lg:px-8 lg:pb-[18px]
        "
      >
        {companies.map((item, index) => (
          <button
            key={`${item}-${index}`}
            type="button"
            className={`shrink-0 whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.01em] transition-colors md:text-[14px] lg:text-[30px] lg:tracking-[0.02em] ${
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