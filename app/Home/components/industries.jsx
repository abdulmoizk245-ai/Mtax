import Image from "next/image";

const industries = [
  "/images/industries1.jpg",
  "/images/industries2.jpeg",
  "/images/industries3.png",
  "/images/industries4.png",
  "/images/industries5.png",
  "/images/industries6.png",
  "/images/industries7.jpg",
  "/images/industries81.png",
];

export default function IndustriesSection() {
  return (
    <section className="w-full overflow-hidden bg-[#040D23]">
      {/* Heading */}
      {/* <div className="pb-2 pt-6 md:pb-3 md:pt-8">
        <h2 className="mx-auto w-full max-w-[1750px] text-[28px] font-extrabold uppercase tracking-tight text-white md:text-4xl">
          Industries We <span className="text-[#0D8CFF]">Serve</span>
        </h2>
      </div> */}
      <div className="pb-2 pt-6 text-center md:pb-3 md:pt-8">
        <h2 className="mx-auto w-full max-w-[1750px] text-[28px] font-extrabold uppercase tracking-tight text-white md:text-4xl">
          Industries We <span className="text-[#0D8CFF]">Serve</span>
        </h2>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {industries.map((src, index) => (
          <div
            key={src}
            className="relative aspect-square w-full overflow-hidden"
          >
            <Image
              src={src}
              alt={`Industry ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
