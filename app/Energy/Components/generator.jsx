import Image from "next/image";

export default function GeneratorCTA() {
  return (
    <section className="w-full bg-white px-5 py-4 sm:px-8">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
        {/* Left Image */}
        <div className="relative h-[105px] w-full shrink-0 overflow-hidden rounded-[7px] sm:h-[100px] sm:w-[230px]">
          <Image
            src="/energy/generator-cta.jpg"
            alt="Industrial generator solutions"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 230px"
            className="object-cover object-center"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h2 className="text-[26px] font-extrabold uppercase leading-[1.3] text-[#1C2738] md:text-[32px] lg:text-[16px]">
            Looking for Reliable Generator Supply for Your Business?
          </h2>

          <p className="mt-2 max-w-[850px] text-[14px] leading-[1.55] text-[#57606D] md:text-[16px] lg:text-[13px]">
            Connect with DMN3 Group to explore high-performance generator
            solutions and professional support for commercial, industrial, and
            project-based power needs.
          </p>
        </div>
      </div>
    </section>
  );
}