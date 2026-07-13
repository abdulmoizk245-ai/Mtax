import Image from "next/image";
import {
  FaCogs,
  FaIndustry,
  FaMapMarkedAlt,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  { icon: FaCogs, label: "Complete Generator Solutions" },
  { icon: FaIndustry, label: "Commercial & Industrial Power" },
  { icon: FaMapMarkedAlt, label: "Nationwide Project Support" },
  { icon: FaBolt, label: "High Capacity Generators" },
  { icon: FaShieldAlt, label: "Reliable Power Assurance" },
];

export default function EnergyAbout() {
  return (
    <section className="bg-white px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-14">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2fce17]">
            About De Novo
          </p>
          <h2 className="mb-4 text-2xl font-extrabold text-[#0b1a3b] md:text-3xl">
            Reliable Industrial Power Support
          </h2>
          <p className="mb-8 max-w-lg text-sm leading-relaxed text-gray-600 md:text-base">
            De Novo Energy specializes in reliable industrial generator
            supply for commercial and industrial-grade power needs. We
            support power projects with high-capacity generators and
            dependable solutions built to keep operations running without
            interruption.
          </p>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200 sm:grid-cols-3 lg:grid-cols-5">
            {features.map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 bg-[#0b1626] px-3 py-5 text-center"
              >
                <Icon className="text-xl text-[#39FF14]" />
                <span className="text-[11px] font-medium leading-snug text-gray-200">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[320px] w-full overflow-hidden rounded-2xl shadow-lg md:h-[420px]">
          <Image
            src="/energy/motor.png"
            alt="Industrial Generators"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
