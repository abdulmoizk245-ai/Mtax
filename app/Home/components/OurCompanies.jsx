import React from "react";

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
      <section className="w-full bg-white py-6">
        <div className="mx-auto max-w-full bg-[#000b1c] px-4 pb-4 pt-8 md:pt-16">
          {/* Heading */}
          <div className="mb-6 text-center md:mb-10">
            <h2 className="mb-3 text-[26px] font-bold uppercase tracking-wide text-white sm:text-[30px] md:mb-4 md:text-[36px]">
              <span className="text-[#1375E6]">Our</span> Companies
            </h2>

            <p className="text-[16px] font-light text-white sm:text-[19px] md:text-[24px]">
              Specialized divisions working together under one trusted corporate
              group
            </p>
          </div>

          {/* Image Box */}
          <div
            className="min-h-[240px] rounded-[8px] bg-cover bg-center bg-no-repeat px-4 py-8 sm:min-h-[300px] sm:px-6 sm:py-16 md:min-h-[365px] md:px-8 md:py-40"
            style={{
              backgroundImage: "url('/images/companies-bg.jpg')",
            }}
          >
            <ul className="space-y-1 text-start">
              {companies.map((company, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-[15px] font-light leading-[1.3] text-white sm:text-[18px] md:text-[22px] md:leading-[1.25]"
                >
                  <span className="text-[15px] font-light text-[#1375E6] sm:text-[18px] md:text-[22px]">
                    ✓
                  </span>
                  <span>{company}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-8 px-4 md:px-0 md:py-[55px]">
        <div className="mx-auto max-w-full">
          {/* Our Vision */}
          <div className="mb-8 md:mb-[50px]">
            <h2 className="mb-[10px] text-[30px] font-bold uppercase leading-[1.1] tracking-[0] text-[#171d2c] sm:text-[38px] md:text-[50px] md:leading-[100%]">
              <span className="text-[#3A76BB]">Our</span> Vision
            </h2>

            <p className="max-w-[1160px] mt-4 text-[15px] font-light leading-[1.7] tracking-[0] text-[#171d2c] sm:text-[17px] md:mt-10 md:text-[20px] md:leading-[2.0]">
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
            <h2 className="mb-[10px] text-[30px] font-bold uppercase leading-[1.1] tracking-[0] text-[#171d2c] sm:text-[38px] md:text-[50px] md:leading-[100%]">
              <span className="text-[#3A76BB]">Our</span> Mission
            </h2>

            <p className="max-w-[1160px] mt-4 text-[15px] font-light leading-[1.7] tracking-[0] text-[#171d2c] sm:text-[17px] md:mt-10 md:text-[20px] md:leading-[2]">
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
