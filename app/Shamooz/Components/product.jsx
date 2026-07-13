import Image from "next/image";

const products = [
  {
    title: "Ready-to-Wear Clothing",
    description:
      "Modern and stylish outfits designed for comfort and elegance.",
    image: "/shamooz/products/ready-to-wear.jpg",
    icon: "/shamooz/icons/clothing.png",
  },
  {
    title: "Unstitched Fabrics",
    description:
      "High-quality fabrics available in stylish designs for custom tailoring.",
    image: "/shamooz/products/unstitched-fabrics.jpg",
    icon: "/shamooz/icons/fabric.png",
  },
  {
    title: "Accessories",
    description:
      "Complementary accessories to enhance your fashion statement.",
    image: "/shamooz/products/accessories.jpg",
    icon: "/shamooz/icons/accessories.png",
  },
];

export default function ShamoozProductRange() {
  return (
    <section className="w-full bg-[#1B263A] px-5 py-10 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Heading */}
        <h2 className="mb-7 text-center text-[24px] font-extrabold uppercase leading-tight text-white sm:text-[28px] lg:text-[32px]">
          Our Product Range
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={product.title}
              className="group relative overflow-hidden rounded-[7px] border border-[#B58D4D]/70 bg-[#172238] shadow-[0_5px_18px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#D1A85F]"
            >
              {/* Product Image */}
              <div className="relative h-[225px] w-full overflow-hidden sm:h-[240px] lg:h-[250px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  priority={index < 3}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172238]/70 via-transparent to-black/5" />
              </div>

              {/* Icon Circle */}
              <div className="absolute left-4 top-[198px] z-10 flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#2E76F2] bg-[#183A82] shadow-[0_0_14px_rgba(46,118,242,0.35)] sm:top-[213px] lg:top-[223px]">
                <div className="relative h-[27px] w-[27px]">
                  <Image
                    src={product.icon}
                    alt=""
                    fill
                    sizes="27px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="min-h-[120px] px-4 pb-5 pt-9">
                <h3 className="text-[12px] font-bold uppercase leading-tight text-white sm:text-[13px]">
                  {product.title}
                </h3>

                <p className="mt-3 max-w-[310px] text-[10px] leading-[1.55] text-white/70 sm:text-[11px]">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}