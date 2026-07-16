

"use client";

import Image from "next/image";

const products = [
  {
    name: "LABSA",
    description:
      "Linear Alkyl Benzene Sulphonic Acid tailored for detergent and industrial cleaning applications.",
    image: "/csm/labsa1.png",
  },
  {
    name: "SLES",
    description:
      "Sodium Lauryl Ether Sulphate for excellent foaming and cleaning performance.",
    image: "/csm/sles1.png",
  },
  {
    name: "LABSA 90",
    description:
      "High active content solutions for industrial cleaning and chemical production.",
    image: "/csm/labsa901.png",
  },
  {
    name: "LABSA 96",
    description:
      "High concentration LABSA solution suitable for various industrial formulations.",
    image: "/csm/labsa961.png",
  },
];

export default function ProductRange() {
  return (
    <section className="w-full bg-white px-5 py-14 md:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-[1320px]">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-[28px] font-extrabold uppercase leading-tight tracking-[0.01em] text-[#1A2438] md:text-[32px] lg:text-[36px]">
            Our Product Range
          </h2>

          <p className="mt-2 text-[15px] font-medium text-[#1A2438] md:text-[17px] lg:text-[19px]">
            Essential Raw Materials for Modern Manufacturing
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="group flex min-h-[390px] flex-col overflow-hidden rounded-[11px] border-[2px] border-[#26344F] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(25,36,58,0.15)]"
            >
              {/* Product Image */}
              <div className="relative h-[335px] w-full overflow-hidden bg-[#F8FAFC]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Product Content */}
              <div className="flex flex-1 flex-col items-center pt-10 text-center">
                <h3 className="text-[24px] font-extrabold uppercase leading-tight text-[#1A2438] md:text-[27px]">
                  {product.name}
                </h3>

                <p className="mt-2 max-w-[250px] text-[14px] leading-[1.45] text-[#303849] md:text-[16px] lg:text-[13px]">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Description */}
        <p className="mx-auto mt-9 max-w-[850px] text-center text-[15px] leading-[1.5] text-[#1A2438] md:text-[17px]">
          CSM provides chemical products used across detergent, cleaning and
          industrial manufacturing applications.
        </p>
      </div>
    </section>
  );
}
