import Image from "next/image";

const categories = [
  {
    title: "Crepe Fabrics",
    description: "Elegant textures in multiple shades and finishes.",
    image: "/universal/categories/crepe-fabrics.jpg",
  },
  {
    title: "Thread Materials",
    description: "Strong, smooth & colorfast threads for every application.",
    image: "/universal/categories/thread-materials.jpg",
  },
];

const benefits = [
  {
    title: "Premium\nMaterials",
    icon: "/universal/icons/premium-materials.png",
  },
  {
    title: "Quality\nAssurance",
    icon: "/universal/icons/quality-assurance.png",
  },
  {
    title: "On-Time\nDelivery",
    icon: "/universal/icons/on-time-delivery.png",
  },
  {
    title: "Long-Term\nPartnerships",
    icon: "/universal/icons/partnerships.png",
  },
];

export default function UniversalCategories() {
  return (
    <section className="w-full bg-[#17243A] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto w-full ">
        {/* Main Card */}
        <div className="overflow-hidden rounded-[12px] border border-[#2C5794] bg-[#1A2C4A] px-5 py-6 shadow-[0_8px_25px_rgba(0,0,0,0.18)] sm:px-7">
          {/* Heading */}
          <h2 className="mb-4 text-[15px] font-extrabold uppercase leading-none text-white sm:text-[17px]">
            Our Categories
          </h2>

          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.2fr_1px_0.9fr] lg:gap-7">
            {/* Category Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {categories.map((category) => (
                <article
                  key={category.title}
                  className="grid min-h-[145px] grid-cols-[46%_54%] overflow-hidden rounded-[7px] border border-[#365A8C] bg-[#213655] shadow-[0_5px_14px_rgba(0,0,0,0.2)]"
                >
                  {/* Image */}
                  <div className="relative min-h-[145px] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 640px) 45vw, 220px"
                      className="object-cover object-center"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-[#213655]/10" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center px-4 py-4">
                    <h3 className="text-[12px] font-bold leading-tight text-white sm:text-[13px]">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-[1.5] text-white/80 sm:text-[11px]">
                      {category.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden h-[115px] w-px bg-[#3D6091]/70 lg:block" />

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-4 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex flex-col items-center justify-center px-2 text-center"
                >
                  {/* Editable Icon Image */}
                  <div className="relative h-[49px] w-[49px]">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title.replace("\n", " ")}
                      fill
                      sizes="49px"
                      className="object-contain"
                    />
                  </div>

                  <p className="mt-3 whitespace-pre-line text-[10px] font-medium leading-[1.35] text-white/85 sm:text-[11px]">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}