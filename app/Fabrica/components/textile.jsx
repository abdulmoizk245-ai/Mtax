import Image from "next/image";

const solutions = [
  {
    title: "Fabrics Range",
    description:
      "A wide range of high quality fabrics for diverse industrial applications.",
    icon: "/fabrica/icons/fabrics-range.png",
  },
  {
    title: "Custom Solutions",
    description:
      "Bespoke textile solutions tailored to meet unique industry requirements.",
    icon: "/fabrica/icons/custom-solutions.png",
  },
  {
    title: "Technical Textiles",
    description:
      "Specialized high performance textiles engineered for maximum durability.",
    icon: "/fabrica/icons/technical-textiles.png",
  },
  {
    title: "Industrial Application",
    description:
      "Reliable textile solutions for demanding industrial and commercial use.",
    icon: "/fabrica/icons/industrial-application.png",
  },
];

export default function TextileSolutions() {
  return (
    <section
      id="solutions"
      className="w-full bg-white px-5 py-12 sm:px-7 md:py-16 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        {/* Heading */}
        <h2 className="mb-9 text-center text-[28px] font-extrabold uppercase leading-tight text-[#1C273A] md:text-[36px] lg:text-[40px]">
          Our Textile{" "}
          <span className="text-[#2D80F7]">Solutions</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="group flex min-h-[285px] flex-col items-center rounded-[8px] border border-[#E2E6EC] bg-white px-5 pb-8 pt-7 text-center shadow-[0_4px_12px_rgba(15,23,42,0.09)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2D80F7]/40 hover:shadow-[0_10px_25px_rgba(15,23,42,0.12)] sm:min-h-[315px] sm:px-6 sm:pt-9"
            >
              {/* Icon Image */}
              <div className="relative h-[62px] w-[62px]">
                <Image
                  src={solution.icon}
                  alt={`${solution.title} icon`}
                  fill
                  sizes="62px"
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-[20px] font-medium leading-tight text-[#1670EF] md:text-[25px] lg:text-[16px]">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="mt-7 max-w-[245px] text-[14px] leading-[1.55] text-[#1D293D] md:text-[16px] lg:text-[15px]">
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}