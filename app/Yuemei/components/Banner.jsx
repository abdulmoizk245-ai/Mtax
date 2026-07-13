import Image from "next/image";

export default function YuemeiBanner() {
  return (
    <section className="w-full bg-[#0B2D5E] overflow-hidden">
      <div className=" mx-auto flex items-center">
        {/* Left: Embroidery Image */}
        <div className="relative h-[140px] w-[220px] flex-shrink-0 hidden sm:block">
          <Image
            src="/page2/machine.png"
            alt="Yuemei Embroidery"
            fill
            className="object-cover"
          />
          {/* Right fade overlay to blend into the dark bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B2D5E]" />
        </div>

        {/* Center: Text */}
        <div className="flex-1 px-6 py-8 sm:py-6">
          <h2 className="text-white font-bold text-2xl sm:text-3xl leading-snug">
            Upgrade Your Embroidery <br className="hidden sm:block" />
            Production with Yuemei
          </h2>
          <p className="text-white/70 text-base mt-1.5 leading-relaxed max-w-sm">
            Discover advanced embroidery machines backed by MTAX Group's trusted
            support.
          </p>
        </div>

        {/* Right: CTA Button */}
        <div className="flex-shrink-0 px-6 py-6">
          <button className="flex items-center gap-2 bg-[#1375E6] hover:bg-[#0f63c9] transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded whitespace-nowrap">
            Contact MTAX Group
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
