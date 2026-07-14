

import { GiRolledCloth } from "react-icons/gi";
import { FaCrosshairs } from "react-icons/fa";

const solutions = [
  {
    icon: GiRolledCloth,
    title: "Our Category",
    description:
      "High-performance fabrics and textiles for various industrial applications.",
  },
  {
    icon: FaCrosshairs,
    title: "Focus",
    description:
      "Quality you can trust. Value you can count on. Service you can rely on and support.",
  },
];

export default function FabricaSolutions() {
  return (
    <section
      id="solutions"
      className="relative w-full overflow-hidden bg-[#0C1727] px-5 py-12 sm:px-8 lg:px-10 lg:py-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-[#1687FF]/10 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#1687FF]/10 blur-[120px]" />

      {/* Decorative Dots */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-5 top-10 h-1 w-1 rounded-full bg-[#1687FF]" />
        <div className="absolute left-10 top-24 h-1 w-1 rounded-full bg-[#1687FF]" />
        <div className="absolute bottom-12 left-20 h-1 w-1 rounded-full bg-[#1687FF]" />
        <div className="absolute right-12 top-14 h-1 w-1 rounded-full bg-[#1687FF]" />
        <div className="absolute bottom-20 right-24 h-1 w-1 rounded-full bg-[#1687FF]" />
      </div>

      <div className="relative mx-auto w-full">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-10">
          {solutions.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[17px] border border-[#1687FF] bg-[#101D30] px-6 py-8 sm:px-8 lg:min-h-[205px] lg:px-10"
              style={{
                boxShadow:
                  "0 0 5px rgba(22,135,255,0.75), 0 0 22px rgba(22,135,255,0.22), inset 0 0 28px rgba(22,135,255,0.05)",
              }}
            >
              {/* Right Glow */}
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-[140px] w-[140px] rounded-full bg-[#1687FF]/15 blur-[45px]" />

              <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                {/* Icon Circle */}
                <div className="relative flex h-[105px] w-[105px] shrink-0 items-center justify-center">
                  {/* Outer Dotted Circle */}
                  <div className="absolute inset-0 rounded-full border-2 border-dotted border-[#00B9FF]/80" />

                  {/* Glow */}
                  <div className="absolute inset-[9px] rounded-full bg-[#1687FF]/10 blur-[3px]" />

                  {/* Inner Circle */}
                  <div
                    className="relative flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#0D2138]"
                    style={{
                      boxShadow:
                        "0 0 18px rgba(0,185,255,0.25), inset 0 0 14px rgba(0,185,255,0.08)",
                    }}
                  >
                    <Icon className="text-[46px] text-[#00C2FF]" />
                  </div>
                </div>

                {/* Text */}
                <div className="max-w-[500px]">
                  <h3 className="text-[20px] font-bold leading-tight text-[#2990FF] md:text-[25px] lg:text-[20px]">
                    {title}
                  </h3>

                  <p className="mt-2 text-[16px] leading-[1.45] text-white/95 md:text-[18px] lg:text-[22px]">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}