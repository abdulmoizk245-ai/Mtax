import Image from "next/image";
import Link from "next/link";
import { FaGlobeAmericas, FaMedal, FaHeadset } from "react-icons/fa";
import SplitHeading from "../../Components/SplitHeading";
import Reveal from "../../Components/Reveal";

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
        <SplitHeading
          as="h1"
          className="mb-2 text-4xl font-extrabold tracking-wide text-white md:text-[44px] lg:text-[60px]"
        >
          MSBI
        </SplitHeading>

        <p className="mb-3 animate-fade-in text-xs font-bold uppercase tracking-[0.2em] text-[#1375E6] md:text-sm">
          Premium Tires
        </p>

        <Reveal as="h2" delay={250} y={30} scale={0.94} rotate={0} className="mb-6 max-w-2xl text-[26px] font-extrabold uppercase leading-snug text-white md:text-4xl">
          <span className="shimmer-text">Powering</span> Progress
          Delivering Trust
        </Reveal>

        <p className="mb-10 max-w-xl text-sm leading-relaxed text-gray-300 md:text-base">
          MSBI International delivers premium tire solutions built on proven
          performance, trusted worldwide, and driven by value.
        </p>

        {/* Feature columns */}
        <div className="mb-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="tilt-card flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1375E6]/15 text-lg text-[#1375E6]">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-white md:text-[25px] lg:text-[14px]">
                  {feature.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-gray-400 md:text-[16px] lg:text-[12px]">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="btn-shine btn-glow inline-flex items-center gap-2 rounded-md bg-[#1375E6] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f5dbf]"
        >
          Explore Power Solutions <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
