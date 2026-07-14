

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
  <div className="mx-auto w-full bg-[#000B1C] px-5 pb-5 pt-10 md:px-8 md:pt-14">
    {/* Heading */}
    <div className="mb-8 text-center">
      <h2 className="text-[28px] font-bold uppercase tracking-wide text-white md:text-[36px]">
        <span className="text-[#1375E6]">Our</span> Companies
      </h2>

      <p className="mt-3 text-[15px] font-light text-white/90 md:text-[18px] lg:text-[21px]">
        Specialized divisions working together under one trusted corporate
        group
      </p>
    </div>

    {/* Companies Image Box */}
    <div
      className="min-h-[400px] rounded-[8px] bg-contain bg-center bg-no-repeat px-5 py-8 sm:min-h-[500px] sm:px-8 md:min-h-[650px] md:px-10 md:py-12"
      style={{
        backgroundImage: "url('/images/companies-bg.jpg')",
      }}
    >
      <ul className="space-y-2">
        {companies.map((company) => (
          <li
            key={company}
            className="flex items-center gap-2 text-[15px] font-light leading-[1.35] text-white md:text-[18px] lg:text-[19px]"
          >
            <span className="text-[#1375E6]">✓</span>
            <span>{company}</span>
          </li>
        ))}
      </ul>
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

            <p className="mt-3 max-w-[1380px] text-[14px] font-normal leading-[1.5] text-[#4D5664] md:text-[16px] lg:text-[14px]">
              To become a trusted, forward-thinking, and progressive business
              group known for delivering quality, innovation, and service
              excellence across every industry we serve. Our vision is to build
              long-term value through reliable business practices, strong
              partnerships, and a continuous commitment to growth, helping
              every brand under our group move forward with confidence,
              integrity, and purpose.
            </p>
          </div>

          {/* Our Mission */}
          <div>
            <h2 className="text-[26px] font-extrabold uppercase leading-none text-[#1C273A] md:text-[32px] lg:text-[31px]">
              <span className="text-[#1687FF]">Our</span> Mission
            </h2>

            <p className="mt-3 max-w-[1380px] text-[14px] font-normal leading-[1.5] text-[#4D5664] md:text-[16px] lg:text-[14px]">
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