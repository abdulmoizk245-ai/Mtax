import Image from "next/image";

const industries = [
  {
    title: "Commercial Buildings",
    icon: "/energy/industry-icons/commercial-buildings.png",
  },
  {
    title: "Industrial Facilities",
    icon: "/energy/industry-icons/industrial-facilities.png",
  },
  {
    title: "Manufacturing Units",
    icon: "/energy/industry-icons/manufacturing-units.png",
  },
  {
    title: "Healthcare",
    icon: "/energy/industry-icons/healthcare.png",
  },
  {
    title: "Construction Projects",
    icon: "/energy/industry-icons/construction-projects.png",
  },
  {
    title: "Data Centers",
    icon: "/energy/industry-icons/data-centers.png",
  },
  {
    title: "Hospitality",
    icon: "/energy/industry-icons/hospitality.png",
  },
  {
    title: "Regional Projects",
    icon: "/energy/industry-icons/regional-projects.png",
  },
];

const supportItems = [
  "Technical Support",
  "Power Guidance",
  "System Optimization",
  "Project Coordination",
  "Flexible Supply",
];

const sectors = [
  {
    title: "Industrial Power",
    image: "/energy/sectors/industrial-power.jpg",
  },
  {
    title: "Commercial Backup",
    image: "/energy/sectors/commercial-backup.jpg",
  },
  {
    title: "Construction Sites",
    image: "/energy/sectors/construction-sites.jpg",
  },
  {
    title: "Data Centers",
    image: "/energy/sectors/data-centers.jpg",
  },
  {
    title: "Healthcare",
    image: "/energy/sectors/healthcare.jpg",
  },
  {
    title: "Hospitality",
    image: "/energy/sectors/hospitality.jpg",
  },
  {
    title: "Infrastructure",
    image: "/energy/sectors/infrastructure.jpg",
  },
  {
    title: "Remote Areas",
    image: "/energy/sectors/remote-areas.jpg",
  },
  {
    title: "Project-Based Operations",
    image: "/energy/sectors/project-operations.jpg",
  },
];

export default function EnergyIndustriesSupport() {
  return (
    <section className="relative w-full overflow-hidden bg-[#121A22] px-5 py-9 sm:px-7 lg:px-10">
      {/* Background glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-[260px] w-[260px] rounded-full bg-[#8DFF22]/5 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#8DFF22]/5 blur-[120px]" />

      <div className="relative mx-auto grid w-full  grid-cols-1 lg:grid-cols-[0.8fr_0.82fr_1.25fr]">
        {/* Industries We Serve */}
        <div className="relative px-1 pb-9 lg:border-r lg:border-[#88C72D]/45 lg:px-5 lg:pb-0 lg:pr-10">
          <SectionLabel>Industries We Serve</SectionLabel>

          <h2 className="mt-4 text-[27px] font-bold leading-[1.08] text-white sm:text-[31px]">
            Reliable Power
            <br />
            for Every Industry
          </h2>

          <div className="mt-6 space-y-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="flex items-center gap-3"
              >
                <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-[3px] border border-[#7EC42A]/60 bg-[#18251D]">
                  <div className="relative h-[17px] w-[17px]">
                    <Image
                      src={industry.icon}
                      alt=""
                      fill
                      sizes="17px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <p className="text-[11px] font-medium text-white/80 sm:text-[12px]">
                  {industry.title}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom green glow */}
          <div className="pointer-events-none absolute bottom-0 left-[12%] hidden h-px w-[62%] bg-gradient-to-r from-transparent via-[#94F12F] to-transparent shadow-[0_0_10px_#94F12F] lg:block" />

          {/* Divider glow */}
          <div className="pointer-events-none absolute right-[-2px] top-[44%] hidden h-[8px] w-[3px] rounded-full bg-[#9BFF2B] shadow-[0_0_10px_#9BFF2B] lg:block" />
        </div>

        {/* Our Support */}
        <div className="relative border-t border-white/10 px-1 py-9 lg:border-r lg:border-t-0 lg:border-[#88C72D]/45 lg:px-10 lg:py-0">
          <SectionLabel>Our Support</SectionLabel>

          <h2 className="mt-4 text-[27px] font-bold leading-[1.08] text-white sm:text-[31px]">
            Expert Support for
            <br />
            Better Power Planning
          </h2>

          <p className="mt-5 max-w-[330px] text-[10px] leading-[1.6] text-white/65 sm:text-[11px]">
            From consultation to execution, we help businesses plan reliable
            power systems.
          </p>

          <div className="mt-7 space-y-4">
            {supportItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-[#83D52C] text-[#83D52C]">
                  <span className="text-[11px] leading-none">✓</span>
                </div>

                <p className="text-[11px] font-medium text-white/80 sm:text-[12px]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Divider glow */}
          <div className="pointer-events-none absolute right-[-2px] top-[44%] hidden h-[8px] w-[3px] rounded-full bg-[#9BFF2B] shadow-[0_0_10px_#9BFF2B] lg:block" />
        </div>

        {/* Sectors We Power */}
        <div className="border-t border-white/10 pt-9 lg:border-t-0 lg:pl-8 lg:pt-0">
          <SectionLabel>Sectors We Power</SectionLabel>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {sectors.map((sector, index) => (
              <article
                key={sector.title}
                className="group overflow-hidden rounded-[6px] border border-[#77A72C]/55 bg-[#162029] shadow-[0_4px_12px_rgba(0,0,0,0.22)]"
              >
                <div className="relative h-[105px] w-full overflow-hidden sm:h-[95px] xl:h-[112px]">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F171E]/60 via-transparent to-transparent" />
                </div>

                <div className="flex min-h-[32px] items-center justify-center border-t border-white/5 px-2 py-2 text-center">
                  <h3 className="text-[9px] font-medium leading-[1.2] text-white sm:text-[10px]">
                    {sector.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <div>
      <p className="text-[9px] font-semibold uppercase tracking-[0.04em] text-[#85D22E] sm:text-[10px]">
        {children}
      </p>

      <div className="mt-2 h-px w-[30px] bg-[#85D22E]" />
    </div>
  );
}