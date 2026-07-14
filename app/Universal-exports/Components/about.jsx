import Image from "next/image";

export default function AboutUniversalExports() {
  return (
    <section className="w-full bg-white px-5 py-10 md:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-9 lg:grid-cols-[38%_62%] lg:gap-8">
        {/* Left Images */}
        <div className="relative mx-auto h-[255px] w-full max-w-[470px] sm:h-[290px]">
          {/* Thread Image */}
          <div className="absolute left-0 top-[10%] h-[62%] w-[58%] overflow-hidden rounded-[26px] bg-[#F3EFEA]">
            <Image
              src="/universal/about1.png"
              alt="Premium thread collection"
              fill
              priority
              sizes="(max-width: 1024px) 55vw, 22vw"
              className="object-cover object-center"
            />
          </div>

          {/* Fabric Image */}
          <div className="absolute bottom-0 right-0 z-10 h-[88%] w-[62%] overflow-hidden rounded-[28px] bg-[#F3EFEA] shadow-[0_5px_18px_rgba(15,23,42,0.06)]">
            <Image
              src="/universal/about2.png"
              alt="Premium crepe fabric"
              fill
              priority
              sizes="(max-width: 1024px) 60vw, 24vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:pl-2">
          <p className="text-[13px] font-extrabold uppercase tracking-[0.01em] text-[#1D293D] sm:text-[14px]">
            About Universal Exports
          </p>

          <h2 className="mt-2 text-[27px] font-extrabold uppercase leading-[1.12] text-[#1D293D] md:text-[32px] lg:text-[36px]">
            Pure <span className="text-[#2587E8]">Crepe</span>, Premium Threads
          </h2>

          <div className="mt-5 max-w-[760px] space-y-4">
            <p className="text-[14px] leading-[1.6] text-[#5C6470] md:text-[16px] lg:text-[14px]">
              Universal Exports provides premium crepe fabrics and quality
              thread materials for fashion brands, manufacturers, and textile
              businesses.
            </p>

            <p className="text-[14px] leading-[1.6] text-[#5C6470] md:text-[16px] lg:text-[14px]">
              We focus on reliable sourcing, consistent supply, and trusted
              support to help businesses maintain smooth production and
              high-quality results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}