"use client";

import Image from "next/image";
import {
  FaCheck,
  FaCogs,
  FaTachometerAlt,
  FaMicrochip,
  FaShieldAlt,
} from "react-icons/fa";

const featurePoints = [
  "Computerized Embroidery Machines",
  "Industrial Production Support",
  "Advanced Stitching Accuracy",
  "Reliable Machine Performance",
  "Technical Guidance",
];

const bottomCards = [
  {
    icon: <FaCogs />,
    title: "Precision Engineering",
    desc: "Engineered for exact stitching accuracy and consistent embroidery quality.",
  },
  {
    icon: <FaTachometerAlt />,
    title: "Maximum Efficiency",
    desc: "High-speed performance that saves more output with less downtime.",
  },
  {
    icon: <FaMicrochip />,
    title: "Advanced Technology",
    desc: "Modern control systems and machines features for superior production.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Reliable Performance",
    desc: "Built for long-term use with strong reliability and minimal maintenance.",
  },
];

export default function FeatureSection() {
  return (
    <section className="w-full bg-[#1D2A3A] px-4 py-10 text-white md:px-8 lg:px-12">
      <div className="mx-auto">
        {/* Top Area */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Image Composition */}
          <div className="relative mx-auto aspect-[498/325] w-full max-w-[500px]">
            {/* Blue Background Shape */}
            <div className="absolute bottom-[2%] left-[20%] right-[20%] top-[20%] z-0 rounded-[18px] bg-[#3D8FEA]" />

            {/* Left Fabric Image */}
            <div className="absolute left-[4%] top-[37%] z-10 h-[49%] w-[22%] overflow-hidden rounded-[13px] border-[3px] border-white bg-white shadow-xl">
              <Image
                src="/page2/fabric.png"
                alt="Embroidery Fabric"
                fill
                sizes="(max-width: 768px) 22vw, 110px"
                className="object-cover"
              />
            </div>

            {/* Right Machine Image */}
            <div className="absolute right-[4%] top-[37%] z-10 h-[49%] w-[22%] overflow-hidden rounded-[13px] border-[3px] border-white bg-white shadow-xl">
              <Image
                src="/page2/machine-side.png"
                alt="Embroidery Machine Side"
                fill
                sizes="(max-width: 768px) 22vw, 110px"
                className="object-cover"
              />
            </div>

            {/* Main Center Machine Image */}
            <div className="absolute left-1/2 top-[5%] z-20 h-[87%] w-[51%] -translate-x-1/2 overflow-hidden rounded-[14px] border-[3px] border-white bg-white shadow-2xl">
              <Image
                src="/page2/machine1.png"
                alt="Yuemei Embroidery Machine"
                fill
                priority
                sizes="(max-width: 768px) 51vw, 255px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Text */}
          <div>
            <h2 className="mb-5 text-[30px] font-extrabold leading-tight text-white md:text-[36px] lg:text-[48px]">
              Feature Points:
            </h2>

            <ul className="space-y-3">
              {featurePoints.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-[16px] font-medium text-white/90 md:text-[18px] lg:text-[24px]"
                >
                  <FaCheck className="shrink-0 text-base text-white md:text-lg" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-8 grid gap-4 rounded-2xl bg-white p-4 shadow-xl sm:grid-cols-2 lg:grid-cols-4 w-full">
          {bottomCards.map((card, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl border border-[#E5EAF3] bg-white px-4 py-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg  text-2xl text-[#1375E6]">
                {card.icon}
              </div>

              <div>
                <h3 className="text-[20px] font-extrabold text-[#1375E6] md:text-[25px] lg:text-[20px]">
                  {card.title}
                </h3>
                <p className="mt-2 text-base leading-6 text-[#4B5563] md:text-[17px]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
