
import Image from "next/image";
import Link from "next/link";

export default function YuemeiBanner() {
  return (
    <section className="w-full bg-white px-5 py-5 md:px-10 lg:px-12">
      <div className="relative mx-auto min-h-[210px] w-full max-w-[1450px] overflow-hidden rounded-[14px] bg-[#1D4380]">
        
        {/* Left Background Image */}
        <div className="absolute inset-y-0 left-0 hidden w-[36%] md:block">
          <Image
            src="/page2/banner.png"
            alt="Yuemei embroidery production"
            fill
            priority
            sizes="42vw"
            className="object-cover object-center"
          />

          {/* Smooth image fade without visible line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent from-35% via-[#1D4380]/45 via-70% to-[#1D4380] to-100%" />
        </div>

        {/* Complete Banner Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#163D85]/80" />

        {/* Banner Content */}
        <div className="relative z-10 grid min-h-[210px] grid-cols-1 items-center md:grid-cols-[32%_1fr_auto]">
          
          {/* Empty space for image */}
          <div className="hidden md:block" />

          {/* Center Content */}
          <div className="flex h-full flex-col justify-center px-7 py-9 md:px-8 lg:px-10">
            <h2 className="max-w-[520px] text-[27px] font-bold leading-[1.35] text-white md:text-[32px] lg:text-[32px]">
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
              className="flex min-h-[62px] min-w-[228px] items-center justify-center gap-5 rounded-[9px] bg-[#145BE8] px-7 text-[15px] font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition duration-300 hover:bg-[#0F4FD3] md:text-[16px]"
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