
"use client";

import Image from "next/image";

const reasons = [
  {
    icon: "/csm/1.png",
    title: "Quality Manufacturing",
    description:
      "High standards, consistent quality and reliable raw materials.",
  },
  {
    icon: "/csm/2.png",
    title: "Reliable Supply",
    description:
      "Strong supply network and on-time delivery ensuring smooth operations.",
  },
  {
    icon: "/csm/3.png",
    title: "Technical Understanding",
    description:
      "Technical expertise and industry knowledge to support better performance.",
  },
  {
    icon: "/csm/4.png",
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

      <div className="relative mx-auto w-full">
        {/* Main Card */}
        <div className="relative min-h-[620px] w-full overflow-hidden rounded-[18px] bg-[#0B1427]">
          {/* Background Image constrained to the glowing border */}
          <div className="absolute inset-y-0 left-3 right-3 overflow-hidden rounded-[18px] sm:left-5 sm:right-5 md:left-7 md:right-7 lg:left-10 lg:right-10">
            <Image
              src="/csm/choose1.png"
              alt="CSM Laboratory"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Inset Glowing Border */}
          <div
            className="pointer-events-none absolute inset-y-0 left-3 right-3 z-40 rounded-[18px] border border-[#1687FF] sm:left-5 sm:right-5 md:left-7 md:right-7 lg:left-10 lg:right-10"
            style={{
              boxShadow:
                "0 0 7px rgba(22,135,255,0.85), 0 0 25px rgba(22,135,255,0.4), inset 0 0 25px rgba(22,135,255,0.08)",
            }}
          />

          {/* Bottom Shadow */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#07101F]/40 via-transparent to-transparent" />

          {/* Decorative Glow */}
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
                    {/* Glowing Dot */}
                    <div
                      className="hidden h-[7px] w-[7px] shrink-0 rounded-full bg-[#1687FF] sm:block"
                      style={{
                        boxShadow:
                          "0 0 7px rgba(22,135,255,1), 0 0 15px rgba(22,135,255,0.8)",
                      }}
                    />

                    {/* Icon Box */}
                    <div
                      className="tilt-card relative h-[62px] w-[62px] shrink-0 overflow-hidden rounded-[10px] border border-[#1687FF]/70 bg-[#0E2245]/80 transition-colors duration-300 group-hover:bg-[#12356A]"
                      style={{
                        boxShadow:
                          "0 0 10px rgba(22,135,255,0.28), inset 0 0 12px rgba(22,135,255,0.08)",
                      }}
                    >
                      <Image
                        src={reason.icon}
                        alt={reason.title}
                        fill
                        sizes="62px"
                        className="scale-150 object-cover"
                      />
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