import Image from "next/image";

const brands = [
  {
    name: "Roadone",
    logo: "/msbi/brands/roadone.png",
  },
  {
    name: "Linglong Tire",
    logo: "/msbi/brands/linglong.png",
  },
  {
    name: "CEAT",
    logo: "/msbi/brands/ceat.png",
  },
  {
    name: "Goldway",
    logo: "/msbi/brands/goldway.png",
  },
];

const benefits = [
  {
    title: "Premium Quality",
    description:
      "Premium raw materials produce long-lasting global brands.",
    icon: "/msbi/icons/premium-quality.png",
  },
  {
    title: "Global Network",
    description:
      "Our strong network with leading suppliers worldwide.",
    icon: "/msbi/icons/global-network.png",
  },
  {
    title: "Customer Focused",
    description:
      "We deliver customized solutions with 100% reliability.",
    icon: "/msbi/icons/customer-focused.png",
  },
  {
    title: "Timely Delivery",
    description:
      "On-time production and fast worldwide logistics.",
    icon: "/msbi/icons/timely-delivery.png",
  },
  {
    title: "Expert Support",
    description:
      "Responsive team providing dedicated support.",
    icon: "/msbi/icons/expert-support.png",
  },
];

export default function BrandsAndBenefits() {
  return (
    <section className="w-full bg-white px-5 py-12 md:px-8 lg:px-10">
      <div className="mx-auto w-full ">
        {/* Our Brands Heading */}
        <h2 className="text-center text-[30px] font-extrabold uppercase leading-tight text-[#1D293D] sm:text-[36px] lg:text-[40px]">
          Our Brands
        </h2>

        {/* Brands Bar */}
        <div className="relative mt-8 flex min-h-[105px] items-center overflow-hidden bg-[#151E2D] px-12 sm:px-16">
          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Previous brands"
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-[38px] font-light leading-none text-white/90 transition hover:text-[#2D80F7]"
          >
            ‹
          </button>

          {/* Brand Logos */}
          <div className="flex w-full items-center justify-between gap-10 overflow-x-auto px-2 py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="relative h-[52px] min-w-[145px] flex-1"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Next brands"
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-[38px] font-light leading-none text-white/90 transition hover:text-[#2D80F7]"
          >
            ›
          </button>
        </div>

        {/* Why Choose Heading */}
        <div className="mb-8 mt-16 text-center">
          <p className="text-[17px] font-extrabold uppercase tracking-[0.01em] text-[#1D293D] sm:text-[20px]">
            Why Choose MSBI
          </p>

          <h3 className="mt-3 text-[27px] font-extrabold uppercase leading-tight text-[#1D293D] sm:text-[34px] lg:text-[38px]">
            <span className="text-[#2D80F7]">Quality</span> Reliability &amp;{" "}
            <span className="text-[#2D80F7]">Global Reach</span>
          </h3>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group flex min-h-[235px] flex-col items-center justify-start rounded-[10px] border border-[#DDE3EC] bg-white px-5 py-7 text-center shadow-[0_3px_14px_rgba(23,35,55,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#2D80F7]/40 hover:shadow-[0_10px_25px_rgba(23,35,55,0.10)]"
            >
              {/* Icon */}
              <div className="relative mb-5 h-[54px] w-[54px]">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  fill
                  sizes="54px"
                  className="object-contain"
                />
              </div>

              {/* Card Title */}
              <h4 className="text-[14px] font-extrabold leading-tight text-[#1C2535] sm:text-[15px]">
                {benefit.title}
              </h4>

              {/* Card Description */}
              <p className="mt-4 max-w-[190px] text-[12px] leading-[1.65] text-[#414958] sm:text-[13px]">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}