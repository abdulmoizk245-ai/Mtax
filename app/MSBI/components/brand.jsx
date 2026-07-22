import Image from "next/image";

const brands = [
  {
    name: "Roadone",
    logo: "/msbi/roadone.png",
  },
  {
    name: "Linglong Tire",
    logo: "/msbi/linglong.png",
  },
  {
    name: "CEAT",
    logo: "/msbi/ceat.png",
  },
  {
    name: "Goldway",
    logo: "/msbi/goldway.png",
  },
];

const benefits = [
  {
    title: "Premium Quality",
    description: "Premium raw materials produce long-lasting global brands.",
    icon: "/msbi/icons/premium-quality.png",
  },
  {
    title: "Global Network",
    description: "Our strong network with leading suppliers worldwide.",
    icon: "/msbi/icons/global-network.png",
  },
  {
    title: "Customer Focused",
    description: "We deliver customized solutions with 100% reliability.",
    icon: "/msbi/icons/customer-focused.png",
  },
  {
    title: "Timely Delivery",
    description: "On-time production and fast worldwide logistics.",
    icon: "/msbi/icons/timely-delivery.png",
  },
  {
    title: "Expert Support",
    description: "Responsive team providing dedicated support.",
    icon: "/msbi/icons/expert-support.png",
  },
];

export default function BrandsAndBenefits() {
  return (
    <section className="w-full bg-white px-5 py-12 md:px-8 lg:px-10">
      <div className="mx-auto w-full ">
        {/* Our Brands Heading */}
        <h2 className="text-center text-[30px] font-extrabold uppercase leading-tight text-[#1D293D] md:text-[36px] lg:text-[40px]">
          Our Brands
        </h2>

        {/* Full Width Brands Bar */}
        <div className="relative left-1/2 mt-8 flex min-h-[135px] w-screen -translate-x-1/2 items-center overflow-hidden bg-[#151E2D] px-6 sm:px-10 lg:px-12">
          {/* Brand Logos */}
          <div
            className="flex w-max items-center gap-16 py-5"
            style={{ animation: "marquee-scroll 22s linear infinite" }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="relative h-[75px] w-[180px] shrink-0 md:h-[85px] md:w-[200px]"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  sizes="220px"
                  className="scale-[2.8] object-contain object-center"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Heading */}
        <div className="mb-8 mt-16 text-center">
          <p className="text-[17px] font-extrabold uppercase tracking-[0.01em] text-[#1D293D] sm:text-[20px]">
            Why Choose MSBI
          </p>

          <h3 className="mt-3 text-[27px] font-extrabold uppercase leading-tight text-[#1D293D] md:text-[34px] lg:text-[38px]">
            <span className="text-[#2D80F7]">Quality</span> Reliability &amp;{" "}
            <span className="text-[#2D80F7]">Global Reach</span>
          </h3>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="tilt-card group flex min-h-[235px] flex-col items-center justify-start rounded-[10px] border border-[#DDE3EC] bg-white px-5 py-7 text-center shadow-[0_3px_14px_rgba(23,35,55,0.04)] transition-colors duration-300 hover:border-[#2D80F7]/40"
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
              <p className="mt-4 max-w-[190px] text-[14px] leading-[1.65] text-[#414958] md:text-[16px] lg:text-[13px]">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
