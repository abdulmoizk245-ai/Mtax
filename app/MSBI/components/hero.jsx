import Image from "next/image";
import Link from "next/link";
import { FaGlobeAmericas, FaMedal, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaGlobeAmericas />,
    title: "Global Sourcing",
    desc: "World's leading tire manufacturers",
  },
  {
    icon: <FaMedal />,
    title: "Premium Quality",
    desc: "Products you can rely on",
  },
  {
    icon: <FaHeadset />,
    title: "Expert Support",
    desc: "Solutions tailored to your needs",
  },
];

export default function MSBIHero() {
  return (
    <section className="relative w-full min-h-[640px] flex items-center overflow-hidden bg-[#0b1a3b]">
      {/* Background image */}
      <Image
        src="/msbi/Hero.jpg"
        alt="MSBI Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

    
      {/* Content */}
      <div className="relative z-10 mx-auto w-full  px-6 py-20 md:px-12">
        <h1 className="mb-2 text-4xl font-extrabold tracking-wide text-white md:text-6xl">
          MSBI
        </h1>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#1375E6] md:text-sm">
          Premium Tires
        </p>

        <h2 className="mb-6 max-w-2xl text-2xl font-extrabold uppercase leading-snug text-white md:text-4xl">
          <span className="text-[#1375E6]">Powering</span> Progress
          Delivering Trust
        </h2>

        <p className="mb-10 max-w-xl text-sm leading-relaxed text-gray-300 md:text-base">
          MSBI International delivers premium tire solutions built on proven
          performance, trusted worldwide, and driven by value.
        </p>

        {/* Feature columns */}
        <div className="mb-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1375E6]/15 text-lg text-[#1375E6]">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-400">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/MSBI/products"
          className="inline-flex items-center gap-2 rounded-md bg-[#1375E6] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f5dbf]"
        >
          Explore Power Solutions <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
