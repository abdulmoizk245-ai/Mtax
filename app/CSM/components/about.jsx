

"use client";

import Image from "next/image";

const features = [
  {
    icon: "/csm/icons/chemical-raw-material.png",
    label: "Chemical Raw\nMaterial Supply",
  },
  {
    icon: "/csm/icons/detergent-support.png",
    label: "Detergent Industry\nSupport",
  },
  {
    icon: "/csm/icons/labsa-sles.png",
    label: "LABSA & SLES\nProducts",
  },
  {
    icon: "/csm/icons/quality-manufacturing.png",
    label: "Quality Focused\nManufacturing",
  },
  {
    icon: "/csm/icons/customer-service.png",
    label: "Reliable Customer\nService",
  },
];

export default function AboutCSM() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070E1C] px-4 py-14 md:px-6 lg:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-[#075DFF]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#1687FF]/10 blur-[120px]" />

      <div className="relative mx-auto w-full ">
        {/* Main Glowing Card */}
        <div
          className="relative overflow-hidden rounded-[20px] border border-[#1687FF] bg-[#0B1528]"
          style={{
            boxShadow:
              "0 0 6px rgba(22,135,255,0.9), 0 0 24px rgba(22,135,255,0.45), inset 0 0 24px rgba(22,135,255,0.08)",
          }}
        >
          {/* Inner Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,135,255,0.12),transparent_35%)]" />

          {/* Top Content */}
          <div className="relative grid grid-cols-1 gap-7 p-4 md:p-6 lg:grid-cols-[42%_58%] lg:gap-8">
            {/* Left Image */}
            <div className="relative h-[280px] overflow-hidden rounded-[14px] border border-[#1687FF]/50 bg-[#081325] sm:h-[340px] lg:h-[390px]">
              <Image
                src="/csm/factory.jpg"
                alt="CSM Chemical Manufacturing Plant"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081325]/50 via-transparent to-[#07101C]/10" />

              {/* 1997 Badge */}
              <div
                className="absolute bottom-4 left-4 flex min-w-[190px] items-center gap-4 rounded-[12px] border border-[#1687FF] bg-[#0A1830]/90 px-4 py-3 backdrop-blur-md sm:bottom-5 sm:left-5"
                style={{
                  boxShadow:
                    "0 0 8px rgba(22,135,255,0.8), inset 0 0 14px rgba(22,135,255,0.12)",
                }}
              >
                {/* Badge Icon Image */}
                <div className="relative h-[48px] w-[48px] shrink-0">
                  <Image
                    src="/csm/icons/industry.png"
                    alt="Industry Experience"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>

                <div>
                  <p className="text-[27px] font-extrabold leading-none text-white">
                    1997
                  </p>

                  <p className="mt-1 text-[10px] leading-[1.35] text-white/90">
                    Serving the industry
                    <br />
                    with Quality &amp; Trust
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center px-1 py-2 lg:px-2 lg:py-5">
              <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.08em] text-[#1687FF]">
                About CSM
              </p>

              <h2 className="max-w-[760px] text-[27px] font-bold leading-[1.18] text-white sm:text-[32px] lg:text-[36px]">
                Trusted Chemical Manufacturing
                <br className="hidden sm:block" />
                Backed by Industry Experience
              </h2>

              <div className="my-5 h-px w-full bg-gradient-to-r from-[#1687FF]/60 via-[#1687FF]/20 to-transparent" />

              <p className="max-w-[760px] text-[13px] leading-[1.65] text-white/85 sm:text-[14px] lg:text-[15px]">
                CSM is a professional raw material chemical solutions company
                within the MTAX Group of Companies, serving various industrial
                sectors with high-quality raw materials and technical support.
                We supply a wide range of chemical raw materials essential for
                detergent manufacturing, industrial cleaning, household
                cleaning, and personal care industries.
              </p>

              <p className="mt-5 max-w-[760px] text-[13px] leading-[1.65] text-white/85 sm:text-[14px] lg:text-[15px]">
                With a commitment to quality, consistency, and customer
                satisfaction, we focus on building long-term partnerships that
                help businesses improve performance, efficiency, and product
                reliability.
              </p>
            </div>
          </div>

          {/* Bottom Feature Row */}
          <div className="relative px-5 pb-6 pt-3 md:px-7 md:pb-7">
            <div className="grid grid-cols-2 gap-y-8 border-t border-[#1687FF]/15 pt-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
              {features.map((feature, index) => (
                <div
                  key={feature.label}
                  className={`flex flex-col items-center justify-center px-4 text-center ${
                    index !== 0
                      ? "lg:border-l lg:border-[#1687FF]/20"
                      : ""
                  }`}
                >
                  {/* Feature Icon Image */}
                  <div className="relative mb-3 h-[58px] w-[58px]">
                    <Image
                      src={feature.icon}
                      alt={feature.label.replace("\n", " ")}
                      fill
                      sizes="58px"
                      className="object-contain"
                    />
                  </div>

                  <p className="whitespace-pre-line text-[12px] font-medium leading-[1.35] text-white sm:text-[13px]">
                    {feature.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Glow Line */}
          <div className="pointer-events-none absolute bottom-0 left-[10%] h-px w-[80%] bg-gradient-to-r from-transparent via-[#1687FF] to-transparent opacity-70" />
        </div>
      </div>
    </section>
  );
}