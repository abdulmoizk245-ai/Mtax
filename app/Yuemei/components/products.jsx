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
    <section className="w-full bg-white py-16 px-6">
      <div className="mx-auto w-full ">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-[42px] font-bold uppercase tracking-wide text-[#171d2c]">
            PRODUCT RANGE
          </h2>
          <p className="text-[19px] text-gray-500">
            Complete Embroidery Solutions for Professional Production
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              {/* Image */}
              <div className="relative mb-4 h-[190px] w-full overflow-hidden rounded">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <Link
                href={product.href}
                className="mb-2 text-[18px] font-bold leading-snug text-[#1375E6] hover:underline"
              >
                {product.title}
              </Link>

              {/* Description */}
              <p className="mb-4 flex-1 text-[16px] leading-[1.7] text-gray-600">
                {product.description}
              </p>

              {/* Learn More */}
              <Link
                href={product.href}
                className="flex items-center gap-1 text-[16px] font-medium text-[#1375E6] hover:underline"
              >
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
