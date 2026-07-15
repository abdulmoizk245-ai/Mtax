import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Tire Imports",
    description:
      "Premium passenger tires for sedans, SUVs, and light commercial vehicles.",
    image: "/msbi/product2.png",
    icon: "/msbi/icon.png",
  },
  {
    id: 2,
    title: "Commercial Tires",
    description:
      "Heavy-duty tire solutions for trucks, fleets, and industrial applications.",
    image: "/msbi/product.png",
    icon: "/msbi/icon.png",
  },
];

export default function OurProduct() {
  return (
    <section className="w-full bg-[#1C273B] px-5 py-12 md:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Heading */}
        <div className="mb-9 text-center">
          <h2 className="text-[28px] font-extrabold uppercase leading-tight text-white md:text-[34px]">
            Our Product
          </h2>

          <p className="mt-2 text-[14px] font-medium text-white/90 md:text-[17px]">
            Premium Products. Proven Performance.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="group relative h-[280px] overflow-hidden rounded-[18px] bg-[#111827] sm:h-[320px] lg:h-[365px]"
            >
              {/* Background Image */}
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
              />

              {/* Image Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />

              {/* Bottom Information Box */}
              <div className="absolute bottom-4 left-4 right-4 flex min-h-[88px] items-center gap-4 rounded-[13px] bg-[#172239]/90 px-4 py-3 backdrop-blur-sm sm:bottom-5 sm:left-5 sm:right-auto sm:w-[78%]">
                {/* Icon Circle */}
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#1268FF] shadow-[0_5px_18px_rgba(18,104,255,0.4)]">
                  <div className="relative h-[36px] w-[36px]">
                    <Image
                      src={product.icon}
                      alt=""
                      fill
                      sizes="36px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div>
                  <h3 className="text-[20px] font-bold uppercase leading-tight text-white md:text-[25px] lg:text-[14px]">
                    {product.title}
                  </h3>

                  <p className="mt-1 max-w-[340px] text-[14px] leading-[1.45] text-white/80 md:text-[16px] lg:text-[12px]">
                    {product.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}