import {
  FaIndustry,
  FaGrip,
} from "react-icons/fa6";

const focusItems = [
  "Generator Supply",
  "Commercial Power Backup",
  "Industrial Power Support",
  "Project-Based Supply",
  "High-Capacity Generators",
  "Scalable Power Solutions",
];

export default function EnergyCategoryBar() {
  return (
    <section className="w-full bg-white px-5 py-8 md:px-8">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid overflow-hidden rounded-[6px] border border-[#222B2A] bg-[#111C1C] shadow-[0_3px_10px_rgba(0,0,0,0.12)] md:grid-cols-[34%_66%]">
          {/* Category */}
          <div className="flex min-h-[112px] items-center gap-5 px-5 py-5 sm:px-7 lg:px-9">
            {/* Icon Box */}
            <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-[7px] border border-[#55B83C]/60 bg-[#14261D]">
              <FaIndustry className="text-[29px] text-[#55B83C]" />
            </div>

            {/* Text */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#55B83C] sm:text-[11px]">
                Category
              </p>

              <p className="mt-2 text-[12px] font-medium text-white sm:text-[13px]">
                Industrial Power Solutions
              </p>
            </div>
          </div>

          {/* Focus */}
          <div className="relative flex min-h-[112px] items-center gap-5 border-t border-white/10 px-5 py-5 sm:px-7 md:border-l md:border-t-0 lg:px-9">
            {/* Divider */}
            <div className="absolute bottom-[18%] left-0 top-[18%] hidden w-px bg-[#55B83C]/30 md:block" />

            {/* Icon Box */}
            <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-[7px] border border-[#55B83C]/60 bg-[#14261D]">
              <FaGrip className="text-[29px] text-[#55B83C]" />
            </div>

            {/* Focus Content */}
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#55B83C] sm:text-[11px]">
                Focus
              </p>

              <div className="mt-2 flex max-w-[900px] flex-wrap items-center gap-y-1 text-[10px] leading-[1.5] text-white/90 sm:text-[11px] lg:text-[12px]">
                {focusItems.map((item, index) => (
                  <span key={item} className="flex items-center">
                    <span>{item}</span>

                    {index !== focusItems.length - 1 && (
                      <span className="mx-2 text-[#55B83C]/60">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}