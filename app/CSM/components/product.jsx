// "use client";

// import Image from "next/image";

// const products = [
//   {
//     name: "LABSA",
//     fullName: "Linear Alkyl Benzene Sulphonic Acid",
//     description:
//       "Linear Alkyl Benzene Sulphonic Acid tailored for detergent and industrial cleaning applications.",
//     image: "/csm/labsa.jpg",
//   },
//   {
//     name: "SLES",
//     fullName: "Sodium Lauryl Ether Sulphate",
//     description:
//       "Sodium Lauryl Ether Sulphate for excellent foaming and cleaning performance.",
//     image: "/csm/sles.jpg",
//   },
//   {
//     name: "LABSA 90",
//     fullName: "High Active LABSA",
//     description:
//       "High active content solutions for industrial cleaning and chemical production.",
//     image: "/csm/labsa90.jpg",
//   },
//   {
//     name: "LABSA 96",
//     fullName: "High Concentration LABSA",
//     description:
//       "High concentration LABSA solution suitable for various industrial formulations.",
//     image: "/csm/labsa96.jpg",
//   },
// ];

// export default function ProductRange() {
//   return (
//     <section className="bg-white py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight uppercase mb-3">
//             Our Product Range
//           </h2>
//           <p className="text-gray-500 text-base font-medium">
//             Essential Raw Materials for Modern Manufacturing
//           </p>
//         </div>

//         {/* Product Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {products.map((product, i) => (
//             <div
//               key={i}
//               className="rounded-2xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
//             >
//               {/* Image area */}
//               <div className="relative h-52 bg-gray-50 flex items-center justify-center overflow-hidden">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* Text area */}
//               <div className="p-5 flex flex-col gap-2 flex-1">
//                 <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
//                   {product.name}
//                 </h3>
//                 <p className="text-gray-500 text-sm leading-relaxed">
//                   {product.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer note */}
//         <p className="text-center text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
//           CSM provides chemical products used across detergent, cleaning and industrial
//           manufacturing applications.
//         </p>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";

const products = [
  {
    name: "LABSA",
    description:
      "Linear Alkyl Benzene Sulphonic Acid tailored for detergent and industrial cleaning applications.",
    image: "/csm/labsa.jpg",
  },
  {
    name: "SLES",
    description:
      "Sodium Lauryl Ether Sulphate for excellent foaming and cleaning performance.",
    image: "/csm/sles.jpg",
  },
  {
    name: "LABSA 90",
    description:
      "High active content solutions for industrial cleaning and chemical production.",
    image: "/csm/labsa90.jpg",
  },
  {
    name: "LABSA 96",
    description:
      "High concentration LABSA solution suitable for various industrial formulations.",
    image: "/csm/labsa96.jpg",
  },
];

export default function ProductRange() {
  return (
    <section className="w-full bg-white px-5 py-14 md:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-[1320px]">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-[28px] font-extrabold uppercase leading-tight tracking-[0.01em] text-[#1A2438] sm:text-[32px] lg:text-[36px]">
            Our Product Range
          </h2>

          <p className="mt-2 text-[15px] font-medium text-[#1A2438] sm:text-[17px] lg:text-[19px]">
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
              <div className="relative h-[245px] w-full overflow-hidden bg-[#F8FAFC]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Product Content */}
              <div className="flex flex-1 flex-col items-center px-4 pb-5 pt-3 text-center">
                <h3 className="text-[27px] font-extrabold uppercase leading-tight text-[#1A2438]">
                  {product.name}
                </h3>

                <p className="mt-2 max-w-[250px] text-[12px] leading-[1.45] text-[#303849] sm:text-[13px]">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Description */}
        <p className="mx-auto mt-9 max-w-[850px] text-center text-[15px] leading-[1.5] text-[#1A2438] sm:text-[17px]">
          CSM provides chemical products used across detergent, cleaning and
          industrial manufacturing applications.
        </p>
      </div>
    </section>
  );
}