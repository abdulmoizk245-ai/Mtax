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
      <section className="w-full bg-white  py-6">
        <div className="mx-auto max-w-full bg-[#000b1c] px-4 pb-4 pt-16">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-[36px] font-bold uppercase tracking-wide text-white">
              <span className="text-[#1375E6]">Our</span> Companies
            </h2>

            <p className="text-[24px] font-light text-white">
              Specialized divisions working together under one trusted corporate
              group
            </p>
          </div>

          {/* Image Box */}
          <div
            className="min-h-[365px] rounded-[8px] bg-cover bg-center bg-no-repeat px-8 py-40"
            style={{
              backgroundImage: "url('/images/companies-bg.jpg')",
            }}
          >
            <ul className="space-y-1 text-start">
              {companies.map((company, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-[22px] font-light leading-[1.25] text-white"
                >
                  <span className="text-[22px] font-light text-[#1375E6]">
                    ✓
                  </span>
                  <span>{company}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full bg-white  py-[55px]">
        <div className="mx-auto max-w-full  ">
          {/* Our Vision */}
          <div className="mb-[50px]">
            <h2 className="mb-[10px] text-[50px] font-bold uppercase leading-[100%] tracking-[0] text-[#171d2c]">
              <span className="text-[#3A76BB]">Our</span> Vision
            </h2>

            <p className="max-w-[1160px] text-[20px] mt-10 font-light leading-[2.0] tracking-[0] text-[#171d2c]">
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
            <h2 className="mb-[10px] text-[50px] font-bold uppercase leading-[100%] tracking-[0] text-[#171d2c]">
              <span className="text-[#3A76BB]">Our</span> Mission
            </h2>

            <p className="max-w-[1160px] text-[20px] mt-10 font-light leading-[2] tracking-[0] text-[#171d2c]">
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
