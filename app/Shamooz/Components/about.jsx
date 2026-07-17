import Image from "next/image";

const collectionPoints = [
  {
    title: "Premium Quality Fabrics",
    description:
      "Only the finest materials for a luxurious feel and lasting elegance.",
  },
  {
    title: "Elegant & Contemporary Designs",
    description:
      "A perfect blend of traditional craftsmanship and modern trends.",
  },
  {
    title: "Comfort in Every Detail",
    description:
      "Designed for all-day comfort without compromising on style.",
  },
  {
    title: "Versatile Collections",
    description:
      "Outfits for every occasion, from everyday chic to festive glam.",
  },
];


export default function AboutShamooz() {
  return (
    <section className="w-full border-t-[3px] border-[#1D2635] bg-white px-5 py-10 sm:px-7 md:px-10 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1350px] grid-cols-1 items-center gap-8 md:grid-cols-[38%_62%] lg:gap-6">
        {/* Left Image */}
        <div className="relative aspect-[0.95/1] w-full overflow-hidden rounded-[9px] bg-[#F3F0EB]">
          <Image
            src="/shamooz/about.pNg"
            alt="Shamooz premium fashion collection"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 38vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center">
          {/* Small Heading */}
          <p className="text-[11px] font-extrabold uppercase tracking-[0.02em] text-[#1C2738] sm:text-[12px] lg:text-[40px]">
            About Shamooz
          </p>

          {/* Main Heading */}
          <h2 className="mt-1 text-[26px] font-extrabold uppercase leading-[1.1] text-[#1687FF] md:text-[32px] lg:text-[30px]">
            Elegance in Every Stitch
          </h2>

          {/* Description */}
          <p className="mt-3 max-w-[760px] text-[14px] leading-[1.55] text-[#596273] md:text-[16px] lg:text-[17px]">
            Shamooz celebrates the beauty of tradition with a modern fashion
            identity. Each outfit is thoughtfully created to offer distinctive
            looks using fine fabrics, intricate detailing, and thoughtful
            designs to make every outfit timeless.
          </p>

          {/* Features */}
          <div className="mt-4 space-y-3">
            {collectionPoints.map((item, index) => (
              <div key={item.title} className="flex items-start gap-3">
                {/* Number Circle */}
                <div className="mt-[1px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#176FE5] text-[9px] font-bold text-white">
                  {index + 1}
                </div>

                {/* Feature Text */}
                <div>
                  <h3 className="text-[20px] font-bold leading-tight text-[#176FE5] md:text-[25px] lg:text-[19px]">
                    {item.title}
                  </h3>

                  <p className="mt-[2px] text-[14px] leading-[1.4] text-[#667080] md:text-[16px] lg:text-[17px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}