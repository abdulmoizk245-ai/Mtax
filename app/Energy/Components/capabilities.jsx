// import Image from "next/image";

// const capacities = [
//   {
//     value: "5kW",
//     icon: "/energy/icons/5kw.png",
//   },
//   {
//     value: "25kW",
//     icon: "/energy/icons/25kw.png",
//   },
//   {
//     value: "100kW",
//     icon: "/energy/icons/100kw.png",
//   },
//   {
//     value: "250kW",
//     icon: "/energy/icons/250kw.png",
//   },
//   {
//     value: "500kW",
//     icon: "/energy/icons/500kw.png",
//   },
//   {
//     value: "1000kW",
//     icon: "/energy/icons/1000kw.png",
//   },
// ];

// const solutions = [
//   {
//     title: "Generator Supply",
//     description:
//       "Reliable generators for smooth commercial and project-based operations.",
//     image: "/energy/solutions/generator-supply.jpg",
//     icon: "/energy/icons/generator-supply.png",
//   },
//   {
//     title: "Commercial Backup",
//     description:
//       "Fast backup power for business continuity and commercial operations.",
//     image: "/energy/solutions/commercial-backup.jpg",
//     icon: "/energy/icons/commercial-backup.png",
//   },
//   {
//     title: "Industrial Power Support",
//     description:
//       "Power solutions for plants and heavy-duty industrial requirements.",
//     image: "/energy/solutions/industrial-power.jpg",
//     icon: "/energy/icons/industrial-power.png",
//   },
//   {
//     title: "High-Capacity Solutions",
//     description:
//       "Scalable generator systems for large and demanding power requirements.",
//     image: "/energy/solutions/high-capacity.jpg",
//     icon: "/energy/icons/high-capacity.png",
//   },
// ];

// export default function EnergyCapabilities() {
//   return (
//     <section className="w-full bg-[#111C29] px-4 py-7 sm:px-6 lg:px-8">
//       <div className="mx-auto w-full max-w-[1400px]">
//         {/* Capacity Area */}
//         <div className="grid grid-cols-1 gap-7 lg:grid-cols-[270px_1fr] lg:items-start">
//           {/* Left Content */}
//           <div className="pt-1">
//             <p className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#73E52B]">
//               Power Range
//             </p>

//             <h2 className="mt-1 max-w-[220px] text-[22px] font-bold leading-[1.08] text-white">
//               Generator Capacity
//               <br />
//               5kW to 1000kW
//             </h2>

//             <p className="mt-3 max-w-[230px] text-[11px] leading-[1.5] text-white/65">
//               Reliable generator solutions for commercial, industrial, and
//               project-based operations.
//             </p>
//           </div>

//           {/* Capacity Cards */}
//           <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
//             {capacities.map((capacity) => (
//               <article
//                 key={capacity.value}
//                 className="group relative flex min-h-[108px] flex-col items-center justify-center overflow-hidden rounded-[7px] border border-white/10 bg-gradient-to-b from-[#1B2937] to-[#131E2A] px-3 py-4 text-center shadow-[0_5px_14px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#73E52B]/45"
//               >
//                 {/* Bottom Green Glow */}
//                 <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#73E52B]/70 to-transparent" />

//                 {/* Icon */}
//                 <div className="relative h-[45px] w-[45px]">
//                   <Image
//                     src={capacity.icon}
//                     alt={`${capacity.value} generator icon`}
//                     fill
//                     sizes="45px"
//                     className="object-contain"
//                   />
//                 </div>

//                 {/* Capacity */}
//                 <p className="mt-2 text-[12px] font-bold uppercase text-white sm:text-[13px]">
//                   {capacity.value}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </div>

//         {/* Solutions Heading */}
//         <div className="mb-5 mt-8 text-center">
//           <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#73E52B]">
//             Our Solutions
//           </p>

//           <h3 className="mt-1 text-[15px] font-medium text-white sm:text-[17px]">
//             Power Solutions for Industrial &amp; Commercial Needs
//           </h3>
//         </div>

//         {/* Solutions Cards */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           {solutions.map((solution, index) => (
//             <article
//               key={solution.title}
//               className="group overflow-hidden rounded-[6px] border border-white/10 bg-[#152130] shadow-[0_5px_16px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-[#73E52B]/35"
//             >
//               {/* Image */}
//               <div className="relative h-[170px] w-full overflow-hidden sm:h-[180px]">
//                 <Image
//                   src={solution.image}
//                   alt={solution.title}
//                   fill
//                   priority={index < 2}
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                   className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
//                 />

//                 {/* Image Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#101A27] via-transparent to-transparent" />

//                 {/* Icon */}
//                 <div className="absolute bottom-2 left-3 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#73E52B]/70 bg-[#17251B]/90 shadow-[0_0_12px_rgba(115,229,43,0.2)] backdrop-blur-sm">
//                   <div className="relative h-[24px] w-[24px]">
//                     <Image
//                       src={solution.icon}
//                       alt=""
//                       fill
//                       sizes="24px"
//                       className="object-contain"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Text */}
//               <div className="min-h-[84px] px-3 pb-4 pt-2">
//                 <h4 className="text-[12px] font-semibold leading-tight text-white sm:text-[13px]">
//                   {solution.title}
//                 </h4>

//                 <p className="mt-1 text-[9px] leading-[1.4] text-white/60 sm:text-[10px]">
//                   {solution.description}
//                 </p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

const capabilities = [
  {
    title: "Reliable Power Supply",
    description: "Continuous power for critical operations.",
    icon: "/energy/icons/reliable-power.png",
  },
  {
    title: "Scalable Capacity",
    description: "Flexible power to match your needs.",
    icon: "/energy/icons/scalable-capacity.png",
  },
  {
    title: "Project-Based Support",
    description: "End-to-end support for project success.",
    icon: "/energy/icons/project-support.png",
  },
];

const specifications = [
  {
    label: "Voltage",
    value: "400V",
    icon: "/energy/icons/voltage.png",
  },
  {
    label: "Frequency",
    value: "50Hz",
    icon: "/energy/icons/frequency.png",
  },
  {
    label: "Efficiency",
    value: "92%+",
    icon: "/energy/icons/efficiency.png",
  },
  {
    label: "Capacity Range",
    value: "5kW to 1000kW",
    icon: "/energy/icons/capacity.png",
  },
  {
    label: "Application",
    value: "Commercial & Industrial",
    icon: "/energy/icons/application.png",
  },
];

export default function EnergyCapabilitiesOverview() {
  return (
    <section className="w-full  bg-white px-5 py-10 md:px-8 lg:px-10 lg:py-12">
      <div className="mx-auto grid w-full  grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_0.9fr_1.25fr] lg:gap-7">
        {/* Left Content */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.06em] text-[#58AE36] sm:text-[11px]">
            Our Capabilities
          </p>

          <h2 className="mt-2 max-w-[330px] text-[26px] font-extrabold leading-[1.16] text-[#202B35] md:text-[32px] lg:text-[27px]">
            Reliable Power Support
            <br />
            for Demanding Operations
          </h2>

          {/* Capability List */}
          <div className="mt-6 space-y-4">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="flex items-center gap-4"
              >
                {/* Icon Box */}
                <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[7px] border border-[#63B842]/25 bg-[#F7FBF5]">
                  <div className="relative h-[23px] w-[23px]">
                    <Image
                      src={capability.icon}
                      alt=""
                      fill
                      sizes="23px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[20px] font-bold leading-tight text-[#26323B] md:text-[25px] lg:text-[13px]">
                    {capability.title}
                  </h3>

                  <p className="mt-1 text-[14px] leading-[1.4] text-[#737B80] md:text-[16px] lg:text-[10px]">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Generator Overview Card */}
        <article className="rounded-[11px] border border-[#E3E8E2] bg-white px-5 py-6 shadow-[0_5px_18px_rgba(24,40,30,0.06)] sm:px-6">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.06em] text-[#58AE36] sm:text-[11px]">
            Generator System Overview
          </p>

          <div className="space-y-4">
            {specifications.map((specification) => (
              <div
                key={specification.label}
                className="grid grid-cols-[24px_1fr_auto] items-center gap-3"
              >
                {/* Specification Icon */}
                <div className="relative h-[18px] w-[18px]">
                  <Image
                    src={specification.icon}
                    alt=""
                    fill
                    sizes="18px"
                    className="object-contain"
                  />
                </div>

                {/* Label */}
                <p className="text-[10px] font-medium text-[#59636A] sm:text-[11px]">
                  {specification.label}
                </p>

                {/* Value */}
                <p className="text-right text-[9px] font-semibold text-[#303940] sm:text-[10px]">
                  {specification.value}
                </p>
              </div>
            ))}
          </div>
        </article>

        {/* Right Image */}
        <div className="relative aspect-[1.72/1] w-full overflow-hidden rounded-[9px] bg-[#EEF1F0] shadow-[0_5px_15px_rgba(18,30,24,0.08)]">
          <Image
            src="/energy/capabilities-generators.jpg"
            alt="Industrial generator systems"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center"
          />

          {/* Subtle Image Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
        </div>
      </div>
    </section>
  );
}