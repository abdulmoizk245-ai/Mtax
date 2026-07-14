import Image from "next/image";

const collectionImages = [
  {
    id: 1,
    src: "/shamooz/collection/look-1.jpg",
    alt: "Shamooz elegant light outfit",
  },
  {
    id: 2,
    src: "/shamooz/collection/look-2.jpg",
    alt: "Shamooz premium blue outfit",
  },
  {
    id: 3,
    src: "/shamooz/collection/look-3.jpg",
    alt: "Shamooz modern formal outfit",
  },
  {
    id: 4,
    src: "/shamooz/collection/look-4.jpg",
    alt: "Shamooz clothing collection",
  },
];

export default function CraftedElegance() {
  return (
    <section className="w-full bg-white px-5 py-10 sm:px-8 md:py-12 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-8 md:grid-cols-[38%_62%] lg:gap-10">
        {/* Left Content */}
        <div>
          <h2 className="text-[27px] font-extrabold uppercase leading-[1.08] tracking-[-0.02em] text-[#1C273A] md:text-[32px] lg:text-[34px]">
            Crafted for
            <br />
            Modern <span className="text-[#1687FF]">Elegance</span>
          </h2>

          <p className="mt-4 max-w-[430px] text-[14px] leading-[1.55] text-[#626B78] md:text-[16px] lg:text-[13px]">
            Explore our latest collections that embody feminine grace, refined
            details, and timeless beauty—designed to make every moment
            extraordinary.
          </p>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-[5px] overflow-hidden rounded-[8px] sm:grid-cols-4">
          {collectionImages.map((item, index) => (
            <div
              key={item.id}
              className="group relative h-[210px] overflow-hidden bg-[#F1ECE6] sm:h-[235px] lg:h-[255px]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={index < 4}
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}