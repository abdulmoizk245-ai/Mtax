// "use client";

// import Image from "next/image";

// const reasons = [
//   {
//     icon: (
//       <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6">
//         <rect x="4" y="20" width="6" height="12" rx="1" fill="#22d3ee" opacity="0.9" />
//         <rect x="13" y="14" width="6" height="18" rx="1" fill="#22d3ee" opacity="0.7" />
//         <rect x="22" y="8" width="6" height="24" rx="1" fill="#22d3ee" opacity="0.5" />
//         <path d="M4 20 L10 14 L19 8" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
//         <circle cx="10" cy="14" r="1.5" fill="#22d3ee" />
//         <circle cx="19" cy="8" r="1.5" fill="#22d3ee" />
//       </svg>
//     ),
//     title: "Quality Manufacturing",
//     description: "High standards, consistent quality and reliable raw materials.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6">
//         <rect x="2" y="14" width="22" height="13" rx="2" stroke="#22d3ee" strokeWidth="1.5" fill="rgba(34,211,238,0.1)" />
//         <circle cx="8" cy="27" r="3" stroke="#22d3ee" strokeWidth="1.5" fill="rgba(34,211,238,0.15)" />
//         <circle cx="20" cy="27" r="3" stroke="#22d3ee" strokeWidth="1.5" fill="rgba(34,211,238,0.15)" />
//         <path d="M24 20 L30 20 L33 25 L33 27 L27 27" stroke="#22d3ee" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(34,211,238,0.1)" />
//         <circle cx="30" cy="27" r="3" stroke="#22d3ee" strokeWidth="1.5" fill="rgba(34,211,238,0.15)" />
//         <path d="M6 14 L10 8 L18 8 L22 14" stroke="#22d3ee" strokeWidth="1.2" />
//       </svg>
//     ),
//     title: "Reliable Supply",
//     description: "Strong supply network and on-time delivery ensuring smooth operations.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6">
//         <circle cx="18" cy="18" r="14" stroke="#22d3ee" strokeWidth="1.5" fill="rgba(34,211,238,0.05)" />
//         <circle cx="18" cy="18" r="7" stroke="#22d3ee" strokeWidth="1.2" strokeDasharray="3 2" />
//         <circle cx="18" cy="18" r="2.5" fill="#22d3ee" />
//         <line x1="18" y1="4" x2="18" y2="8" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
//         <line x1="18" y1="28" x2="18" y2="32" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
//         <line x1="4" y1="18" x2="8" y2="18" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
//         <line x1="28" y1="18" x2="32" y2="18" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
//       </svg>
//     ),
//     title: "Technical Understanding",
//     description: "Technical expertise and industry knowledge to support better performance.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6">
//         <path
//           d="M8 22 C8 22 5 19 5 15 C5 10 9 7 13 8 C14.5 8.5 16 10 18 10 C20 10 21.5 8.5 23 8 C27 7 31 10 31 15 C31 19 28 22 28 22 L18 32 Z"
//           stroke="#22d3ee"
//           strokeWidth="1.5"
//           fill="rgba(34,211,238,0.1)"
//           strokeLinejoin="round"
//         />
//         <path d="M13 18 L17 22 L24 14" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     title: "Customer Commitment",
//     description: "Built on trust, continuous support, and long-term business relationships.",
//   },
// ];

// export default function WhyChooseCSM() {
//   return (
//     <section className="relative bg-[#050c1a] py-20 px-4 overflow-hidden">
//       {/* Ambient blobs */}
//       <div className="pointer-events-none absolute top-0 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />
//       <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />

//       <div className="relative max-w-6xl mx-auto">
//         {/* Glowing card border */}
//         <div
//           className="rounded-2xl p-[2px]"
//           style={{
//             background:
//               "linear-gradient(135deg, rgba(34,211,238,0.55) 0%, rgba(59,130,246,0.25) 50%, rgba(34,211,238,0.08) 100%)",
//             boxShadow:
//               "0 0 60px rgba(34,211,238,0.12), 0 0 120px rgba(59,130,246,0.08)",
//           }}
//         >
//           <div className="bg-[#070f1f] rounded-2xl overflow-hidden">
//             <div className="grid grid-cols-1 lg:grid-cols-2">

//               {/* LEFT – text content */}
//               <div className="px-8 py-10 lg:px-12 lg:py-14 flex flex-col justify-center">
//                 {/* Label */}
//                 <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
//                   Why Choose CSM
//                 </p>

//                 {/* Heading */}
//                 <h2 className="text-white text-3xl lg:text-4xl font-extrabold leading-tight mb-10">
//                   Built on Quality, Reliability{" "}
//                   <span className="block">
//                     and{" "}
//                     <span className="text-cyan-400">Industry Commitment</span>
//                   </span>
//                 </h2>

//                 {/* Feature list */}
//                 <div className="flex flex-col gap-7">
//                   {reasons.map((r, i) => (
//                     <div key={i} className="flex items-start gap-4">
//                       {/* Icon box */}
//                       <div
//                         className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center border border-cyan-500/30 bg-cyan-500/5"
//                         style={{ boxShadow: "0 0 16px rgba(34,211,238,0.12)" }}
//                       >
//                         {r.icon}
//                       </div>

//                       {/* Text */}
//                       <div>
//                         <h4 className="text-white font-bold text-sm mb-1">{r.title}</h4>
//                         <p className="text-slate-400 text-xs leading-relaxed">{r.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* RIGHT – lab image */}
//               <div className="relative min-h-72 lg:min-h-0">
//                 {/* Fade-in overlay from left so image blends into dark card */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#070f1f] via-[#070f1f]/30 to-transparent z-10" />
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070f1f]/50 z-10" />

//                 <Image
//                   src="/csm/lab.jpg"
//                   alt="CSM Laboratory"
//                   fill
//                   className="object-cover"
//                   priority
//                 />

//                 {/* Glowing arc on right edge */}
//                 <div
//                   className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full z-20"
//                   style={{
//                     background:
//                       "radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 70%)",
//                     filter: "blur(8px)",
//                   }}
//                 />
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

const reasons = [
  {
    icon: "/csm/icons/quality-manufacturing.png",
    title: "Quality Manufacturing",
    description:
      "High standards, consistent quality and reliable raw materials.",
  },
  {
    icon: "/csm/icons/reliable-supply.png",
    title: "Reliable Supply",
    description:
      "Strong supply network and on-time delivery ensuring smooth operations.",
  },
  {
    icon: "/csm/icons/technical-understanding.png",
    title: "Technical Understanding",
    description:
      "Technical expertise and industry knowledge to support better performance.",
  },
  {
    icon: "/csm/icons/customer-commitment.png",
    title: "Customer Commitment",
    description:
      "Built on trust, continuous support, and long-term business relationships.",
  },
];

export default function WhyChooseCSM() {
  return (
    <section className="relative w-full overflow-hidden bg-[#07101F] px-4 py-14 md:px-6 lg:py-20">
      {/* Section Background Glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-[#126BFF]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#1687FF]/10 blur-[130px]" />

      <div className="relative mx-auto w-full ">
        {/* Main Card */}
        <div
          className="relative min-h-[620px] overflow-hidden rounded-[18px] border border-[#1687FF] bg-[#0B1427]"
          style={{
            boxShadow:
              "0 0 7px rgba(22,135,255,0.85), 0 0 25px rgba(22,135,255,0.4), inset 0 0 25px rgba(22,135,255,0.08)",
          }}
        >
          {/* Right Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/csm/lab.jpg"
              alt="CSM Laboratory"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Dark Left Gradient */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(90deg, #0B1427 0%, #0B1427 40%, rgba(11,20,39,0.98) 48%, rgba(11,20,39,0.72) 57%, rgba(11,20,39,0.12) 75%, transparent 100%)",
            }}
          />

          {/* Extra Bottom Shadow */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#07101F]/40 via-transparent to-transparent" />


          {/* Small Decorative Glow on Curve */}
          <div className="pointer-events-none absolute left-[47%] top-0 z-20 hidden h-full w-[170px] bg-[#1687FF]/5 blur-[45px] lg:block" />

          {/* Content */}
          <div className="relative z-30 flex min-h-[620px] w-full items-center">
            <div className="w-full px-6 py-10 sm:px-8 lg:w-[53%] lg:px-12 xl:px-14">
              {/* Label */}
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#1687FF] sm:text-[13px]">
                Why Choose CSM
              </p>

              {/* Heading */}
              <h2 className="max-w-[560px] text-[29px] font-extrabold leading-[1.13] text-white md:text-[35px] lg:text-[39px]">
                Built on Quality, Reliability
                <br />
                and{" "}
                <span className="text-[#1687FF]">
                  Industry Commitment
                </span>
              </h2>

              {/* Reasons List */}
              <div className="relative mt-9 space-y-6">
                {reasons.map((reason) => (
                  <div
                    key={reason.title}
                    className="group relative flex items-center gap-4"
                  >
                    {/* Small Glowing Dot */}
                    <div
                      className="hidden h-[7px] w-[7px] shrink-0 rounded-full bg-[#1687FF] sm:block"
                      style={{
                        boxShadow:
                          "0 0 7px rgba(22,135,255,1), 0 0 15px rgba(22,135,255,0.8)",
                      }}
                    />

                    {/* Icon Box */}
                    <div
                      className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-[10px] border border-[#1687FF]/70 bg-[#0E2245]/80 transition duration-300 group-hover:bg-[#12356A]"
                      style={{
                        boxShadow:
                          "0 0 10px rgba(22,135,255,0.28), inset 0 0 12px rgba(22,135,255,0.08)",
                      }}
                    >
                      <div className="relative h-[43px] w-[43px]">
                        <Image
                          src={reason.icon}
                          alt={reason.title}
                          fill
                          sizes="43px"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="max-w-[350px]">
                      <h3 className="text-[20px] font-bold leading-tight text-white md:text-[25px] lg:text-[16px]">
                        {reason.title}
                      </h3>

                      <p className="mt-1 text-[14px] leading-[1.45] text-white/75 md:text-[16px] lg:text-[12px]">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Image Blend */}
          <div className="pointer-events-none absolute inset-0 z-[9] bg-[#07101F]/25 lg:hidden" />

          {/* Bottom Glowing Line */}
          <div className="pointer-events-none absolute bottom-0 left-[8%] z-30 h-px w-[84%] bg-gradient-to-r from-transparent via-[#1687FF] to-transparent opacity-80" />
        </div>
      </div>
    </section>
  );
}