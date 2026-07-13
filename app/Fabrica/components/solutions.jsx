import Image from "next/image";
import { GiRolledCloth } from "react-icons/gi";
import { FaShapes, FaShieldAlt, FaCogs } from "react-icons/fa";

const solutions = [
  {
    icon: GiRolledCloth,
    title: "Fabrics Range",
    description:
      "A wide range of high quality fabrics for diverse industrial applications.",
  },
  {
    icon: FaShapes,
    title: "Custom Solutions",
    description:
      "Bespoke textile solutions tailored to meet unique industry requirements.",
  },
  {
    icon: FaShieldAlt,
    title: "Technical Textiles",
    description:
      "Specialized high performance textiles engineered for maximum durability.",
  },
  {
    icon: FaCogs,
    title: "Industrial Application",
    description:
      "Reliable textile solutions for demanding industrial and commercial use.",
  },
];

export default function FabricaSolutions() {
  return (
    <section id="solutions" className="w-full bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-2xl font-extrabold uppercase tracking-wide text-[#0b1a3b] md:text-3xl">
          Our Textile <span className="text-[#1375E6]">Solutions</span>
        </h2>

        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-[#1375E6]/20 bg-white p-6 text-center shadow-md transition hover:border-[#1375E6]/50 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1375E6]/10 text-[#1375E6]">
                <Icon size={22} />
              </div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-[#1375E6]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="relative w-full overflow-hidden rounded-xl">
          <Image
            src="/fabrica/product.jpg"
            alt="Fabrica Textile Gallery"
            width={1680}
            height={960}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
