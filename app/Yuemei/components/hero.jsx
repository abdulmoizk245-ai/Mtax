"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative  bg-[#1375E6] text-white overflow-hidden">
      <Image
        src="/page2/hero.png"
        alt="Yuemei Embroidery Machine"
        fill
        priority
        
        className="object-cover "
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute  bg-gradient-to-r from-[#0B4180]/95 via-[#1375E6]/70 to-transparent" />

      <div className="relative z-10 mx-auto flex items-center px-6 py-16 md:px-12 lg:px-16">
        <div className="w-full max-w-[700px] mt-5">
          <h1 className="text-6xl font-extrabold leading-tight tracking-tight md:text-7xl">
            YUEMEI
          </h1>

          <p className="mt-2 text-base font-semibold tracking-[0.18em] md:text-lg">
            EMBROIDERY MACHINES
          </p>

          <h2 className="mt-8 text-3xl font-bold uppercase leading-snug md:text-4xl">
            Advanced <span className="text-[#2563EB]"> Embroidery Technology </span>  <br />
            for Modern Textile Production
          </h2>

          <p className="mt-5 text-base leading-7 text-white/90 md:text-lg">
            Yuemei under MTAX Group of Companies provides advanced computerized
            embroidery machines designed for precision, speed, durability and
            smooth industrial performance. Built to handle manufacturing garment
            units and embroidery businesses, Yuemei helps improve production
            quality with reliable technology and professional support.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded bg-gradient-to-r from-[#1375E6] to-[#0B4180] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105">
              Explore Our Companies
            </button>

            <button className="rounded border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0B4180]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}