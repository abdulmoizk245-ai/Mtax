

import Image from "next/image";

export default function Brand() {
  const brands = [
    "/images/brand1.jpg",
    "/images/brand2.png",
    "/images/brand3.png",
    "/images/brand4.png",
    "/images/brand5.png",
    "/images/brand6.png",
    "/images/brand7.png",
    "/images/brand8.png",
  ];

  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-[radial-gradient(circle_at_50%_30%,rgba(13,140,255,0.12),transparent_45%),linear-gradient(180deg,#101B31_0%,#050D20_100%)]
        py-8 md:py-12
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-40 w-3/4 -translate-x-1/2 bg-[#0D8CFF]/10 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 text-center md:mb-10">
          <h2 className="text-[28px] font-extrabold uppercase tracking-tight md:text-4xl">
            <span className="text-[#328DF3]">Our</span>{" "}
            <span className="text-white">Trusted Brand</span>
          </h2>
        </div>

        {/* Brand Marquee */}
        <div
          className="
            relative overflow-hidden
            py-3
            [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]
          "
        >
          <div
            className="flex w-max items-center gap-3 sm:gap-4"
            style={{
              animation: "marquee-scroll 22s linear infinite",
            }}
          >
            {[...brands, ...brands].map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="
                  group relative aspect-[1.35/1] w-[150px] shrink-0 overflow-hidden
                  rounded-[11px] p-[1.5px]
                  transition-all duration-300
                  hover:-translate-y-1
                  sm:w-[190px]
                  lg:w-[220px]
                "
              >
                {/* Traveling border animation */}
                <div
                  className="absolute left-1/2 top-1/2 z-0 h-[250%] w-[250%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#dff1ff_320deg,#5AAEFF_345deg,transparent_360deg)]"
                  style={{
                    animation: "border-light-spin 3s linear infinite",
                  }}
                />

                {/* Card */}
                <div
                  className="
                    relative z-10 h-full w-full overflow-hidden
                    rounded-[10px]
                    border border-[#5AAEFF]/60
                    bg-[linear-gradient(145deg,rgba(17,33,58,0.95),rgba(5,14,31,0.98))]
                    shadow-[0_0_14px_rgba(13,140,255,0.18),inset_0_0_18px_rgba(13,140,255,0.06)]
                    transition-all duration-300
                    group-hover:border-[#6BB8FF]
                    group-hover:shadow-[0_0_24px_rgba(13,140,255,0.4),inset_0_0_20px_rgba(13,140,255,0.1)]
                  "
                >
                  <Image
                    src={src}
                    alt={`Trusted brand ${(index % brands.length) + 1}`}
                    fill
                    quality={100}
                    sizes="(max-width: 640px) 150px, (max-width: 1024px) 190px, 220px"
                    className="
                      object-contain p-4
                      transition-transform duration-300
                      group-hover:scale-105
                      sm:p-5
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}