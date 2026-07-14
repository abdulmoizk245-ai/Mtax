import React from "react";
import Image from "next/image";

export default function Homehero() {
  return (
    <>
      <section
        className="relative flex min-h-[560px] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-5 text-center text-white">
          {/* Since */}
          <p className="mb-1 text-[12px] font-semibold uppercase tracking-wide md:text-[14px] ">
            SINCE-1994
          </p>

          {/* MTAX Image */}
          <div className="relative mb-3 h-[80px] w-[280px] md:h-[120px] md:w-[460px] lg:h-[170px] lg:w-[600px]">
            <Image
              src="/images/brand6.png"
              alt="MTAX"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Main Heading */}
          <h1 className="mb-5 text-[34px] font-extrabold uppercase leading-none tracking-tight md:text-[46px] lg:text-[62px]">
            Group of Companies
          </h1>

          <div className="mb-5 text-center">
            <h2 className="text-[26px] font-semibold leading-tight text-white md:text-[32px] lg:text-[22px]">
              Innovation, Quality, & Excellence
            </h2>

            <div className="relative mx-auto mt-2 h-[8px] w-full max-w-[400px]">
              {/* Start + End thin line */}
              <div
                className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.75) 18%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.75) 82%, transparent 100%)",
                }}
              ></div>

              {/* Center thick blue glow */}
              <div
                className="absolute left-1/2 top-1/2 h-[8px] w-[120px] -translate-x-1/2 -translate-y-1/2"
                style={{
                  background:
                    "radial-gradient(ellipse at center, #1375E6 0%, rgba(19,117,230,0.8) 35%, rgba(19,117,230,0.25) 65%, transparent 100%)",
                  filter: "blur(1px)",
                }}
              ></div>
            </div>
          </div>

          {/* Paragraph */}
          <p className="mx-auto mb-8 max-w-3xl px-2 text-[15px] leading-relaxed text-white/90 md:px-0 md:text-[18px] lg:text-[20px]">
            A diversified business group delivering reliable products,
            industrial solutions, and services across multiple industries in
            Pakistan and beyond.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-40">
            <a
              href="/group-of-companies"
              className="rounded-[3px] px-6 py-3 text-[13px] font-semibold text-white shadow-md transition hover:opacity-90 md:text-[15px] lg:text-[13px]"
              style={{
                background: "linear-gradient(90deg, #1375E6 0%, #0B4180 100%)",
              }}
            >
              Explore Our Companies →
            </a>

            <a
              href="/contact"
              className="rounded-[3px] border border-white/80 px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-white hover:text-[#0B4180] md:text-[15px] lg:text-[13px]"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </section>
      {/* about section */}
      <section className="w-full bg-white py-8 md:py-12 lg:py-16">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-4 md:ml-0 md:flex-row md:items-start md:px-6 lg:ml-[30px] lg:px-0">
          {/* Left Image */}
          <div className="relative h-[280px] w-full max-w-[554px] shrink-0 sm:h-[340px] md:h-[402px] md:w-[554px]">
            <div className="absolute inset-0 rotate-[0.26deg] bg-[#1375E6]" />

            <div className="absolute inset-[4px] overflow-hidden bg-white">
              <Image
                src="/images/about-mtax.png"
                alt="About MTAX Group"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex w-full max-w-[620px] flex-col items-start text-start md:ml-8 md:mt-8">
            <div className="mb-6 bg-[#171d2c] px-4 py-2">
              <h2 className="text-[30px] font-semibold uppercase leading-none text-white md:text-[32px] lg:text-[30px]">
                About MTAX Group
              </h2>
            </div>

            <h3 className="mb-4 text-[24px] font-semibold uppercase leading-[1.35] text-[#171d2c] md:text-[27px]">
              A Diversified{" "}
              <span className="text-[#1375E6]">Business Group</span> Built On
              Trust And Excellence
            </h3>

            <p className="mb-4 text-[16px] font-light leading-[1.6] text-[#171d2c]">
              MTAX Group of Companies is a privately owned, multi-sector
              business group based in Pakistan, serving different industries
              with quality products, reliable solutions and professional
              services since 1994.
            </p>

            <p className="text-[16px] font-light leading-[1.6] text-[#171d2c]">
              With a strong presence across industrial machinery, textiles,
              solar energy, digital services, imports, exports and business
              facilitation, MTAX continues to grow through trust, innovation and
              long-term partnerships.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
