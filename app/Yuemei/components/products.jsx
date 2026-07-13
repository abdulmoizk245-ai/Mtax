// import Image from "next/image";
// import Link from "next/link";

// const products = [
//   {
//     id: 1,
//     image: "/page2/machine.png",
//     title: "Computerized Embroidery Machines",
//     description:
//       "High-performance single head machines for precision and efficiency.",
//     href: "#",
//   },
//   {
//     id: 2,
//     image: "/page2/machine.png",
//     title: "Multi Head Embroidery Machines",
//     description:
//       "Boost productivity with multi needle, multi head embroidery systems.",
//     href: "#",
//   },
//   {
//     id: 3,
//     image: "/page2/machine.png",
//     title: "Embroidery Software Support",
//     description:
//       "Advanced software solutions for digitizing, editing and production efficiency.",
//     href: "#",
//   },
//   {
//     id: 4,
//     image: "/page2/machine.png",
//     title: "Technical Support",
//     description:
//       "Expert technical assistance for installation, training and after-sales support.",
//     href: "#",
//   },
// ];

// export default function ProductRange() {
//   return (
//     <section className="w-full bg-white py-16 px-6">
//       <div className="mx-auto w-full ">
//         {/* Heading */}
//         <div className="mb-12 text-center">
//           <h2 className="mb-3 text-[42px] font-bold uppercase tracking-wide text-[#171d2c]">
//             PRODUCT RANGE
//           </h2>
//           <p className="text-[19px] text-gray-500">
//             Complete Embroidery Solutions for Professional Production
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {products.map((product) => (
//             <div key={product.id} className="flex flex-col">
//               {/* Image */}
//               <div className="relative mb-4 h-[190px] w-full overflow-hidden rounded">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* Title */}
//               <Link
//                 href={product.href}
//                 className="mb-2 text-[18px] font-bold leading-snug text-[#1375E6] hover:underline"
//               >
//                 {product.title}
//               </Link>

//               {/* Description */}
//               <p className="mb-4 flex-1 text-[16px] leading-[1.7] text-gray-600">
//                 {product.description}
//               </p>

//               {/* Learn More */}
//               <Link
//                 href={product.href}
//                 className="flex items-center gap-1 text-[16px] font-medium text-[#1375E6] hover:underline"
//               >
//                 Learn More <span>→</span>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    image: "/page2/machine.png",
    title: "Computerized Embroidery Machines",
    description:
      "High-performance single head machines for precision and efficiency.",
    href: "#",
  },
  {
    id: 2,
    image: "/page2/machine.png",
    title: "Multi Head Embroidery Machines",
    description:
      "Boost productivity with multi needle, multi head embroidery systems.",
    href: "#",
  },
  {
    id: 3,
    image: "/page2/machine.png",
    title: "Embroidery Software Support",
    description:
      "Advanced software solutions for digitizing, editing and production efficiency.",
    href: "#",
  },
  {
    id: 4,
    image: "/page2/machine.png",
    title: "Technical Support",
    description:
      "Expert technical assistance for installation, training and after-sales support.",
    href: "#",
  },
];

export default function ProductRange() {
  return (
    <section className="w-full bg-white px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-[30px] font-extrabold uppercase tracking-[0.02em] text-[#1C263A] sm:text-[36px] md:text-[42px]">
            Product Range
          </h2>

          <p className="mt-2 text-[16px] font-normal text-[#1C263A] sm:text-[18px] md:text-[21px]">
            Complete Embroidery Solutions for Professional Production
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex h-full min-h-[475px] flex-col overflow-hidden rounded-[12px] border border-gray-100 bg-white shadow-[0_3px_16px_rgba(0,0,0,0.09)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.13)]"
            >
              {/* Image */}
              <div className="relative h-[185px] w-full overflow-hidden bg-[#f7f8fa]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
                {/* Title */}
                <Link
                  href={product.href}
                  className="mb-3 text-[19px] font-bold leading-[1.25] text-[#173D8F] transition-colors hover:text-[#1375E6]"
                >
                  {product.title}
                </Link>

                {/* Description */}
                <p className="text-[15px] leading-[1.7] text-[#414141]">
                  {product.description}
                </p>

                {/* Learn More */}
                <Link
                  href={product.href}
                  className="mt-auto flex items-center gap-3 pt-7 text-[15px] font-bold text-[#1263E6] transition-all hover:gap-4"
                >
                  <span>Learn More</span>
                  <span className="text-[25px] font-normal leading-none">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}