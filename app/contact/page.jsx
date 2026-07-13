import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Header from "../Components/header";
import Banner from "../Home/components/banner";
import Footer from "../Components/footer";
import ContactPage from "../Components/contact";

export default function Contact() {
  return (
    <main className="w-full bg-white">
        <Header/>
      {/* Contact Hero */}
      <section className="relative min-h-[175px] w-full overflow-hidden bg-[#18243A] sm:min-h-[210px]">
        {/* Blue Wave Image */}
        <Image
          src="/contact/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[175px] w-full max-w-[1400px] items-center px-6 py-8 sm:min-h-[210px] sm:px-10 lg:px-14">
          <div>
            <h1 className="text-[32px] font-extrabold uppercase leading-none text-white sm:text-[40px] lg:text-[46px]">
              Contact <span className="text-[#1687FF]">Us</span>
            </h1>

            <p className="mt-4 max-w-[320px] text-[10px] font-semibold uppercase leading-[1.45] text-white sm:text-[11px]">
              We&apos;re here to help &amp; answer any question
              <br />
              you might have.
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full bg-white px-5 py-8 sm:px-8 md:py-10 lg:px-12">
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Map Card */}
          <div className="relative min-h-[300px] overflow-hidden rounded-[11px] border border-[#1687FF] bg-[#0B1E3D] shadow-[0_5px_18px_rgba(15,35,65,0.16)] sm:min-h-[350px] lg:min-h-[410px]">
            {/* Map Background */}
            <Image
              src="/contact/map.jpg"
              alt="MTAX Group office location map"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* Dark Blue Map Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[#071C3C]/25" />

            {/* Find Us Text */}
            <div className="absolute left-5 top-7 z-10 sm:left-8 sm:top-10">
              <h2 className="text-[23px] font-extrabold uppercase leading-none text-white sm:text-[28px]">
                Find Us
              </h2>

              <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.02em] text-white/90 sm:text-[10px]">
                Visit Our Head Office.
              </p>
            </div>

            {/* Location Marker and Address */}
            <div className="absolute left-[55%] top-[52%] z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 sm:left-[60%]">
              {/* Marker */}
              <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_5px_18px_rgba(0,0,0,0.25)]">
                <FaMapMarkerAlt className="text-[24px] text-[#1D2A3D]" />
              </div>

              {/* Address Card */}
              <div className="min-w-[145px] rounded-[7px] border border-white/60 bg-[#132A50]/90 px-4 py-3 text-white shadow-[0_5px_16px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:min-w-[175px]">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] sm:text-[12px]">
                  MTAX
                </p>

                <div className="my-2 h-px w-full bg-white/30" />

                <p className="text-[8px] uppercase leading-[1.55] text-white/90 sm:text-[9px]">
                  Plot 34-C, Street 3
                  <br />
                  Main Commercial
                  <br />
                  Phase 7, DHA, Karachi
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Heading */}
          <div className="pt-8 text-center sm:pt-10">
            <h2 className="text-[22px] font-extrabold uppercase leading-tight text-[#1D293D] sm:text-[28px] lg:text-[32px]">
              Have Any Questions?
            </h2>
          </div>
        </div>
      
      </section>
      <ContactPage/>
      <Banner/>
      <Footer/>
    </main>
  );
}