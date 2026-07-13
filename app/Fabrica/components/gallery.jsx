import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    image: "/fabrica/gallery/fabric-1.jpg",
    alt: "Premium dark blue fabric",
  },
  {
    id: 2,
    image: "/fabrica/gallery/fabric-2.jpg",
    alt: "Rolled industrial fabrics",
  },
  {
    id: 3,
    image: "/fabrica/gallery/fabric-3.jpg",
    alt: "Textile manufacturing machinery",
  },
  {
    id: 4,
    image: "/fabrica/gallery/fabric-4.jpg",
    alt: "Embroidery production machines",
  },
  {
    id: 5,
    image: "/fabrica/gallery/fabric-5.jpg",
    alt: "Fabric sample collection",
  },
  {
    id: 6,
    image: "/fabrica/gallery/fabric-6.jpg",
    alt: "Colorful textile threads",
  },
  {
    id: 7,
    image: "/fabrica/gallery/fabric-7.jpg",
    alt: "Industrial fabric production",
  },
  {
    id: 8,
    image: "/fabrica/gallery/fabric-8.jpg",
    alt: "Fabric rolls collection",
  },
  {
    id: 9,
    image: "/fabrica/gallery/fabric-9.jpg",
    alt: "Industrial yarn production",
  },
  {
    id: 10,
    image: "/fabrica/gallery/fabric-10.jpg",
    alt: "Premium rolled fabrics",
  },
];

export default function FabricaGallery() {
  return (
    <section className="relative w-full overflow-hidden bg-[#172338] px-4 py-4 sm:px-6 sm:py-6 lg:px-9">
      {/* Background glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-[#1687FF]/5 blur-[100px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#1687FF]/5 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-[1450px]">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {galleryImages.map((item, index) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-[12px] border border-[#4D6C98] bg-[#0D1728] p-[4px]"
              style={{
                boxShadow:
                  "0 0 6px rgba(22,135,255,0.28), inset 0 0 10px rgba(22,135,255,0.08)",
              }}
            >
              {/* Top blue glow */}
              <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-[2px] w-[55%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1687FF] to-transparent shadow-[0_0_10px_#1687FF]" />

              {/* Image */}
              <div className="relative aspect-[0.94/1] w-full overflow-hidden rounded-[9px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority={index < 5}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.035]"
                />

                {/* Light dark overlay */}
                <div className="pointer-events-none absolute inset-0 bg-[#07101F]/5" />

                {/* Bottom subtle shadow */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-[#07101F]/25 to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}