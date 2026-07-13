"use client";

import Image from "next/image";

const products = [
  {
    name: "LABSA",
    fullName: "Linear Alkyl Benzene Sulphonic Acid",
    description:
      "Linear Alkyl Benzene Sulphonic Acid tailored for detergent and industrial cleaning applications.",
    image: "/csm/labsa.jpg",
  },
  {
    name: "SLES",
    fullName: "Sodium Lauryl Ether Sulphate",
    description:
      "Sodium Lauryl Ether Sulphate for excellent foaming and cleaning performance.",
    image: "/csm/sles.jpg",
  },
  {
    name: "LABSA 90",
    fullName: "High Active LABSA",
    description:
      "High active content solutions for industrial cleaning and chemical production.",
    image: "/csm/labsa90.jpg",
  },
  {
    name: "LABSA 96",
    fullName: "High Concentration LABSA",
    description:
      "High concentration LABSA solution suitable for various industrial formulations.",
    image: "/csm/labsa96.jpg",
  },
];

export default function ProductRange() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight uppercase mb-3">
            Our Product Range
          </h2>
          <p className="text-gray-500 text-base font-medium">
            Essential Raw Materials for Modern Manufacturing
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image area */}
              <div className="relative h-52 bg-gray-50 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text area */}
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
          CSM provides chemical products used across detergent, cleaning and industrial
          manufacturing applications.
        </p>
      </div>
    </section>
  );
}
