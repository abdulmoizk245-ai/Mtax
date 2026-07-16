import Image from "next/image";

const capacities = [
  {
    value: "5kW",
    icon: "/energy/capacity-icons/5kw.png",
  },
  {
    value: "25kW",
    icon: "/energy/capacity-icons/25kw.png",
  },
  {
    value: "100kW",
    icon: "/energy/capacity-icons/100kw.png",
  },
  {
    value: "250kW",
    icon: "/energy/capacity-icons/250kw.png",
  },
  {
    value: "500kW",
    icon: "/energy/capacity-icons/500kw.png",
  },
  {
    value: "1000kW",
    icon: "/energy/capacity-icons/1000kw.png",
  },
];

const solutions = [
  {
    title: "Generator Supply",
    description: "Reliable generators for smooth operations.",
    image: "/energy/generator-supply.png",
    icon: "/energy/solution-icons/generator.png",
  },
  {
    title: "Commercial Backup",
    description: "Fast backup power for business continuity.",
    image: "/energy/commercial-backup.png",
    icon: "/energy/solution-icons/backup.png",
  },
  {
    title: "Industrial Power Support",
    description:
      "Power solutions for plants and heavy-duty use.",
    image: "/energy/industrial-power.png",
    icon: "/energy/solution-icons/industrial.png",
  },
  {
    title: "High-Capacity Solutions",
    description:
      "Scalable systems for large power demands.",
    image: "/energy/high-capacity.png",
    icon: "/energy/solution-icons/high-capacity.png",
  },
];

export default function Energy() {
  return (
    <section className="relative w-full overflow-hidden bg-[#121C28] px-5 py-6 sm:px-7 lg:px-10 lg:py-8">
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-[280px] w-[280px] rounded-full bg-[#8DFF00]/5 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-[#8DFF00]/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1500px]">
        {/* Top Area */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[255px_1fr] lg:items-start lg:gap-10">
          {/* Left Text */}
          <div className="pt-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.05em] text-[#8DFF00] sm:text-[11px]">
              Power Range
            </p>

            <h2 className="mt-2 text-[26px] font-bold leading-[1.08] tracking-[-0.02em] text-white md:text-[32px] lg:text-[28px]">
              Generator Capacity
              <br />
              5kW to 1000kW
            </h2>

            <p className="mt-3 max-w-[245px] text-[11px] leading-[1.55] text-white/60 sm:text-[12px]">
              Reliable generator solutions for commercial, industrial, and
              project-based operations.
            </p>
          </div>

          {/* Capacity Cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {capacities.map((capacity) => (
              <article
                key={capacity.value}
                className="group relative flex min-h-[112px] flex-col items-center justify-center overflow-hidden rounded-[7px] border border-white/15 bg-gradient-to-b from-[#1D2935] to-[#141E29] px-3 py-4 text-center shadow-[0_5px_15px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8DFF00]/50"
              >
                {/* Bottom Green Glow */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#8DFF00]/80 to-transparent shadow-[0_0_8px_rgba(141,255,0,0.55)]" />

                {/* Editable Icon */}
                <div className="relative h-[52px] w-[52px]">
                  <Image
                    src={capacity.icon}
                    alt={`${capacity.value} generator capacity`}
                    fill
                    sizes="52px"
                    className="object-contain"
                  />
                </div>

                <p className="mt-2 text-[14px] font-medium uppercase leading-none text-white sm:text-[15px]">
                  {capacity.value}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Solutions Heading */}
        <div className="mb-5 mt-8 text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#8DFF00] sm:text-[10px]">
            Our Solutions
          </p>

          <h3 className="mt-1 text-[20px] font-normal leading-tight text-white md:text-[25px] lg:text-[21px]">
            Power Solutions for Industrial &amp; Commercial Needs
          </h3>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <article
              key={solution.title}
              className="group overflow-hidden rounded-[6px] border border-[#77952F]/45 bg-[#16212D] shadow-[0_5px_16px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8DFF00]/60"
            >
              {/* Image */}
              <div className="relative h-[185px] w-full overflow-hidden sm:h-[195px] lg:h-[205px]">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121C28]/75 via-transparent to-black/5" />

                {/* Editable Icon Circle */}
                <div className="absolute bottom-2 left-3 flex h-[39px] w-[39px] items-center justify-center rounded-full border border-[#8DFF00]/80 bg-[#15231B]/90 shadow-[0_0_12px_rgba(141,255,0,0.22)] backdrop-blur-sm">
                  <div className="relative h-[24px] w-[24px]">
                    <Image
                      src={solution.icon}
                      alt=""
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="min-h-[82px] px-3 pb-3 pt-2">
                <h4 className="text-[13px] font-medium leading-tight text-white sm:text-[14px]">
                  {solution.title}
                </h4>

                <p className="mt-1 max-w-[250px] text-[10px] leading-[1.35] text-white/60 sm:text-[11px]">
                  {solution.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}