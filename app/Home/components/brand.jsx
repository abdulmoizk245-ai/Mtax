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
          <h2 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl md:text-4xl">
            <span className="text-[#328DF3]">Our</span>{" "}
            <span className="text-white">Trusted Brand</span>
          </h2>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-4">
          {brands.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="
                group relative aspect-[1.35/1] w-full overflow-hidden
                rounded-[10px]
                border border-[#5AAEFF]/60
                bg-[linear-gradient(145deg,rgba(17,33,58,0.95),rgba(5,14,31,0.98))]
                shadow-[0_0_14px_rgba(13,140,255,0.18),inset_0_0_18px_rgba(13,140,255,0.06)]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#6BB8FF]
                hover:shadow-[0_0_24px_rgba(13,140,255,0.4),inset_0_0_20px_rgba(13,140,255,0.1)]
              "
            >
              {/* Top glow line */}
              <div className="absolute left-1/2 top-0 h-px w-16 -translate-x-1/2 bg-[#55AEFF] shadow-[0_0_10px_3px_rgba(50,141,243,0.8)]" />

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-1/2 h-px w-16 -translate-x-1/2 bg-[#55AEFF] shadow-[0_0_10px_3px_rgba(50,141,243,0.8)]" />

              <Image
                src={src}
                alt={`Trusted brand ${index + 1}`}
                fill
                quality={100}
                sizes="
                  (max-width: 640px) 50vw,
                  (max-width: 1024px) 33vw,
                  (max-width: 1280px) 25vw,
                  16vw
                "
                className="
                  object-contain p-4
                  transition-transform duration-300
                  group-hover:scale-105
                  sm:p-5
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}