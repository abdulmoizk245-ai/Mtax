import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const divisions = [
  {
    image: "/blaze/about1.png",
    label: "BLAZE",
    title: "SOLAR ENERGY",
    titleColor: "text-orange-400",
    description:
      "Your trusted partner for premium solar products and reliable supply solutions.",
    points: [
      "High-quality solar panels & components",
      "Bulk supply for businesses & retailers",
      "Make in-house R & D",
      "Commitment to reliable solar support",
    ],
  },
  {
    image: "/blaze/about2.png",
    label: "BLAZE",
    title: "INTERACTIVES",
    titleColor: "text-[#3aa0ff]",
    description:
      "A creative software house and IT solutions provider helping brands grow in the digital world.",
    points: [
      "Website design & development",
      "Software development",
      "Branding & brand-related design",
      "App development & custom development",
      "Product ads",
    ],
  },
];

export default function BlazeAbout() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-2xl font-extrabold uppercase tracking-wide text-[#0b1a3b] md:text-3xl">
          About Blaze Devision
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {divisions.map((division, index) => (
            <div
              key={index}
              className="relative min-h-[440px] overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={division.image}
                alt={division.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b1f] via-[#050b1f]/80 to-[#050b1f]/30" />

              <div className="relative z-10 flex h-full min-h-[440px] flex-col justify-end p-8">
                <p className="mb-1 text-sm font-bold tracking-widest text-white">
                  {division.label}
                </p>
                <h3
                  className={`mb-4 text-2xl font-extrabold uppercase tracking-wide ${division.titleColor}`}
                >
                  {division.title}
                </h3>
                <p className="mb-5 max-w-md text-sm leading-relaxed text-gray-200">
                  {division.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {division.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-100"
                    >
                      <FaCheckCircle className="mt-0.5 shrink-0 text-[#3aa0ff]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
