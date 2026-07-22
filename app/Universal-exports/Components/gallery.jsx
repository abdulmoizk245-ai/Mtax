import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    image: "/universal/fabric-1.png",
    alt: "Folded premium fabrics",
  },
  {
    id: 2,
    image: "/universal/fabric-2.png",
    alt: "Fabric rolls and thread materials",
  },
  {
    id: 3,
    image: "/universal/fabric-3.png",
    alt: "Premium cream crepe fabric",
  },
  {
    id: 4,
    image: "/universal/fabric-4.png",
    alt: "Textile warehouse fabric rolls",
  },
  {
    id: 5,
    image: "/universal/about2.png",
    alt: "Colorful folded fabric collection",
  },
];

export default function UniversalGallery() {
  return (
    <section className="w-full bg-white px-5 py-8 md:px-8">
      <div className="mx-auto w-full ">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-[18px]">
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              className="tilt-card group relative aspect-square w-full overflow-hidden rounded-[20px] bg-[#F3EFEA]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                priority={index < 5}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}