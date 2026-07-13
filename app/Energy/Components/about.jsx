// import Image from "next/image";
// import {
//   FaCogs,
//   FaIndustry,
//   FaMapMarkedAlt,
//   FaBolt,
//   FaShieldAlt,
// } from "react-icons/fa";

// const features = [
//   { icon: FaCogs, label: "Complete Generator Solutions" },
//   { icon: FaIndustry, label: "Commercial & Industrial Power" },
//   { icon: FaMapMarkedAlt, label: "Nationwide Project Support" },
//   { icon: FaBolt, label: "High Capacity Generators" },
//   { icon: FaShieldAlt, label: "Reliable Power Assurance" },
// ];

// export default function EnergyAbout() {
//   return (
//     <section className="bg-white px-6 py-16 md:py-20">
//       <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-14">
//         <div>
//           <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2fce17]">
//             About De Novo
//           </p>
//           <h2 className="mb-4 text-2xl font-extrabold text-[#0b1a3b] md:text-3xl">
//             Reliable Industrial Power Support
//           </h2>
//           <p className="mb-8 max-w-lg text-sm leading-relaxed text-gray-600 md:text-base">
//             De Novo Energy specializes in reliable industrial generator
//             supply for commercial and industrial-grade power needs. We
//             support power projects with high-capacity generators and
//             dependable solutions built to keep operations running without
//             interruption.
//           </p>

//           <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200 sm:grid-cols-3 lg:grid-cols-5">
//             {features.map(({ icon: Icon, label }, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center gap-2 bg-[#0b1626] px-3 py-5 text-center"
//               >
//                 <Icon className="text-xl text-[#39FF14]" />
//                 <span className="text-[11px] font-medium leading-snug text-gray-200">
//                   {label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="relative h-[320px] w-full overflow-hidden rounded-2xl shadow-lg md:h-[420px]">
//           <Image
//             src="/energy/motor.png"
//             alt="Industrial Generators"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import {
  FaGlobe,
  FaHandshake,
  FaIndustry,
  FaHardHat,
  FaCogs,
} from "react-icons/fa";

const features = [
  {
    icon: FaGlobe,
    label: "Global Supply",
  },
  {
    icon: FaHandshake,
    label: "Sales & Rental",
  },
  {
    icon: FaIndustry,
    label: "Reliable Solutions",
  },
  {
    icon: FaHardHat,
    label: "Project Support",
  },
  {
    icon: FaCogs,
    label: "High-Capacity Units",
  },
];

export default function EnergyAbout() {
  return (
    <section className="w-full border-t-[4px] border-[#1A1F24] bg-white">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-8 px-5 py-10 sm:px-7 md:px-10 lg:grid-cols-[43%_57%] lg:gap-12 lg:px-14 lg:py-12">
        {/* Left Generator Image */}
        <div className="relative aspect-[1.48/1] w-full overflow-hidden rounded-[8px] bg-[#F2F3F3]">
          <Image
            src="/energy/motor.png"
            alt="De Novo industrial generator"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 43vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center">
          {/* Small Label */}
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.05em] text-[#59AA34] sm:text-[12px]">
            About De Novo
          </p>

          {/* Heading */}
          <h2 className="text-[26px] font-extrabold leading-[1.15] text-[#272A2D] sm:text-[31px] lg:text-[34px]">
            Reliable Industrial Power Support
          </h2>

          {/* Description */}
          <div className="mt-4 max-w-[720px] space-y-4">
            <p className="text-[12px] leading-[1.65] text-[#555B61] sm:text-[13px] lg:text-[14px]">
              De Novo delivers dependable generator supply and industrial power
              support for commercial and project-based operations.
            </p>

            <p className="text-[12px] leading-[1.65] text-[#555B61] sm:text-[13px] lg:text-[14px]">
              We support power needs from 5kW to 1000kW with reliable
              coordination and responsive service.
            </p>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Icon */}
                <div className="flex h-[42px] w-[42px] items-center justify-center text-[#55AE32]">
                  <Icon className="text-[27px]" />
                </div>

                {/* Label */}
                <p className="mt-2 text-[10px] font-medium leading-[1.35] text-[#363B3F] sm:text-[11px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}