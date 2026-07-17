

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    image: "/page2/1.png",
    title: "Computerized Embroidery Machines",
    description:
      "High-performance single head machines for precision and efficiency.",
    href: "#",
  },
  {
    id: 2,
    image: "/page2/2.png",
    title: "Multi Head Embroidery Machines",
    description:
      "Boost productivity with multi needle, multi head embroidery systems.",
    href: "#",
  },
  {
    id: 3,
    image: "/page2/3.png",
    title: "Embroidery Software Support",
    description:
      "Advanced software solutions for digitizing, editing and production efficiency.",
    href: "#",
  },
  {
    id: 4,
    image: "/page2/4.png",
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
          <h2 className="text-[30px] font-extrabold uppercase tracking-[0.02em] text-[#1C263A] md:text-[36px] lg:text-[42px]">
            Product Range
          </h2>

          <p className="mt-2 text-[16px] font-normal text-[#1C263A] md:text-[18px] lg:text-[21px]">
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
                  className="mb-3 text-[20px] font-bold leading-[1.25] text-[#173D8F] transition-colors hover:text-[#1375E6] md:text-[25px] lg:text-[19px]"
                >
                  {product.title}
                </Link>

                {/* Description */}
                <p className="text-[15px] leading-[1.7] text-[#414141] md:text-[16px] lg:text-[15px]">
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