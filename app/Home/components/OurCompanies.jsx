export default function OurCompanies() {
  const companies = [
    "Yuemei",
    "Blaze Interactives",
    "Blaze Home Textile",
    "Blaze Solar Energy",
    "Shamooz",
    "Universal Exports",
    "Fabrica",
    "MSB International",
    "CSB / Chaudhary Shafiq Group",
    "De Novo",
  ];

  return (
    <>
      {/* Our Companies Section */}
      <section className="w-full bg-white py-6">
        <div className="mx-auto w-full bg-[#101B30] px-4 pb-5 pt-10 md:px-8 md:pt-12">
          {/* Heading */}
          <div className="mb-7 text-center">
            <h2 className="text-[28px] font-bold uppercase tracking-wide text-white md:text-[36px]">
              <span className="text-[#1687FF]">Our</span> Companies
            </h2>

            <p className="mt-2 text-[15px] font-light text-white/90 md:text-[18px] lg:text-[20px]">
              Specialized divisions working together under one trusted corporate
              group
            </p>
          </div>
          {/* Companies Background Box */}
          <div className="relative min-h-[360px] overflow-hidden rounded-[10px] border border-[#1687FF]/60 sm:min-h-[420px] md:min-h-[480px] lg:min-h-[550px]">
            {/* Background Image */}
            <div
              className="absolute inset-0 scale-[1.2] bg-cover bg-center bg-no-repeat brightness-[1.35] contrast-110"
              style={{
                backgroundImage: "url('/images/companies-bg1.png')",
              }}
            />

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-[#07172D]/20" />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#07172D]/95 via-[#07172D]/55 to-transparent" />

            {/* Inner Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-[10px] shadow-[inset_0_0_40px_rgba(22,135,255,0.12)]" />

            {/* Companies List */}
            <div className="relative z-10 px-5 py-7 sm:px-8 md:px-10 md:py-8">
              <ul className="space-y-2">
                {companies.map((company) => (
                  <li
                    key={company}
                    className="flex items-center gap-2 text-[15px] font-light leading-[1.35] text-white md:text-[18px] lg:text-[19px]"
                  >
                    <span className="font-semibold text-[#40A1FF]">✓</span>
                    <span>{company}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="w-full bg-white px-5 py-8 sm:px-8 md:px-10 lg:px-12">
        <div className="mx-auto w-full max-w-[1750px]">
          {/* Our Vision */}
          <div className="mb-10">
            <h2 className="text-[26px] font-extrabold uppercase leading-none text-[#1C273A] md:text-[32px] lg:text-[31px]">
              <span className="text-[#1687FF]">Our</span> Vision
            </h2>

            <p className="mt-3 max-w-[1380px] text-[14px] font-normal leading-[1.5] text-[#4D5664] md:text-[16px] lg:text-[16px]">
              To become a trusted, forward-thinking, and progressive business
              group known for delivering quality, innovation, and service
              excellence across every industry we serve. Our vision is to build
              long-term value through reliable business practices, strong
              partnerships, and a continuous commitment to growth, helping every
              brand under our group move forward with confidence, integrity, and
              purpose.
            </p>
          </div>

          {/* Our Mission */}
          <div>
            <h2 className="text-[26px] font-extrabold uppercase leading-none text-[#1C273A] md:text-[32px] lg:text-[31px]">
              <span className="text-[#1687FF]">Our</span> Mission
            </h2>

            <p className="mt-3 max-w-[1380px] text-[14px] font-normal leading-[1.5] text-[#4D5664] md:text-[16px] lg:text-[16px]">
              To deliver reliable products, professional services, and
              value-driven business solutions with integrity, care, and
              commitment. Our mission is to support our clients through
              consistent quality, customer-focused service, continuous
              improvement, and strong industry partnerships, ensuring every
              business we serve receives dependable solutions that help them
              grow with confidence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
