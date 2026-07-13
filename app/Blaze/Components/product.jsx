import Image from "next/image";

const solarBrands = [
  {
    name: "LONGi",
    logo: "/blaze/brands/longi.png",
  },
  {
    name: "Jinko Solar",
    logo: "/blaze/brands/jinko.png",
  },
  {
    name: "Canadian Solar",
    logo: "/blaze/brands/canadian-solar.png",
  },
  {
    name: "JA Solar",
    logo: "/blaze/brands/ja-solar.png",
  },
];

const solarProducts = [
  {
    name: "Solar Panels",
    image: "/blaze/products/solar-panels.jpg",
  },
  {
    name: "Solar Inverters",
    image: "/blaze/products/solar-inverters.jpg",
  },
  {
    name: "Solar Installation",
    image: "/blaze/products/solar-installation.jpg",
  },
];

const interactiveWorks = [
  {
    name: "Website Design",
    image: "/blaze/interactives/website-design.jpg",
  },
  {
    name: "Mobile Application",
    image: "/blaze/interactives/mobile-app.jpg",
  },
  {
    name: "Branding Design",
    image: "/blaze/interactives/branding.jpg",
  },
  {
    name: "Dashboard Design",
    image: "/blaze/interactives/dashboard.jpg",
  },
];

export default function BlazeProducts() {
  return (
    <section className="w-full bg-[#1A263B] px-5 py-10 md:px-8 lg:px-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-8">
          {/* Solar Brands and Products */}
          <div>
            <h2 className="mb-5 text-center text-[15px] font-extrabold uppercase leading-tight text-white sm:text-[17px]">
              Our Brands &amp; Products (Solar)
            </h2>

            <article className="overflow-hidden rounded-[6px] bg-white shadow-[0_6px_20px_rgba(0,0,0,0.16)]">
              {/* Brand Logos */}
              <div className="grid min-h-[90px] grid-cols-2 items-center gap-x-5 gap-y-4 px-5 py-4 sm:grid-cols-4 sm:px-6">
                {solarBrands.map((brand) => (
                  <div
                    key={brand.name}
                    className="relative mx-auto h-[42px] w-full max-w-[115px]"
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      sizes="115px"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Solar Product Images */}
              <div className="grid grid-cols-1 sm:grid-cols-3">
                {solarProducts.map((product) => (
                  <div
                    key={product.name}
                    className="relative h-[180px] overflow-hidden sm:h-[205px]"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                  </div>
                ))}
              </div>

              {/* Solar Description */}
              <div className="px-5 py-4 text-center">
                <p className="text-[11px] leading-[1.5] text-[#566071] sm:text-[12px]">
                  We supply premium solar brands and components
                  <br className="hidden sm:block" /> for reliable, long-term
                  energy solutions.
                </p>
              </div>
            </article>
          </div>

          {/* Interactive Work and Solutions */}
          <div>
            <h2 className="mb-5 text-center text-[15px] font-extrabold uppercase leading-tight text-white sm:text-[17px]">
              Our Work &amp; Solutions (Interactives)
            </h2>

            <article className="overflow-hidden rounded-[6px] bg-white shadow-[0_6px_20px_rgba(0,0,0,0.16)]">
              {/* Work Images */}
              <div className="grid min-h-[295px] grid-cols-2 gap-3 p-4 sm:min-h-[295px] sm:grid-cols-4 sm:gap-4 sm:p-5">
                {interactiveWorks.map((work, index) => (
                  <div
                    key={work.name}
                    className={`relative overflow-hidden rounded-[4px] bg-[#F4F6F9] ${
                      index === 0
                        ? "sm:translate-y-2"
                        : index === 1
                          ? "sm:-translate-y-1"
                          : index === 2
                            ? "sm:translate-y-3"
                            : "sm:-translate-y-2"
                    }`}
                  >
                    <Image
                      src={work.image}
                      alt={work.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-contain object-center p-1"
                    />
                  </div>
                ))}
              </div>

              {/* Interactive Description */}
              <div className="border-t border-[#EEF1F5] px-5 py-4 text-center">
                <p className="text-[11px] leading-[1.5] text-[#566071] sm:text-[12px]">
                  We design, develop and market digital solutions
                  <br className="hidden sm:block" /> that help businesses grow
                  online.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}