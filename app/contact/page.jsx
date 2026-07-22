import Image from "next/image";
import { FaMapMarkerAlt,FaExternalLinkAlt  } from "react-icons/fa";
import Header from "../Components/header";
import Banner from "../Home/components/banner";
import Footer from "../Components/footer";
import ContactPage from "../Components/contact";
import Link from "next/link";
import Reveal from "../Components/Reveal";

export default function Contact() {
    const mapLink =
    "https://www.google.com/maps?q=24.8296403,67.0715858";
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
            <h1 className="text-[32px] font-extrabold uppercase leading-none text-white md:text-[40px] lg:text-[46px]">
              Contact <span className="text-[#1687FF]">Us</span>
            </h1>

            <p className="mt-4 max-w-[320px] text-[14px] font-semibold uppercase leading-[1.45] text-white md:text-[16px] lg:text-[11px]">
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
        <Reveal className="relative min-h-[380px] overflow-hidden rounded-[11px] border border-[#1687FF] bg-[#0B1E3D] shadow-[0_5px_18px_rgba(15,35,65,0.16)] sm:min-h-[420px] lg:min-h-[480px]">
          {/* Live Google Map */}
          <iframe
            src="https://www.google.com/maps?q=24.8296403,67.0715858&z=17&output=embed"
            title="MTAX Group Head Office Location"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />

          {/* Light Blue Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[#071C3C]/10" />

          {/* Find Us Heading */}
          <div className="pointer-events-none absolute left-4 top-5 z-10 rounded-[8px] bg-[#071C3C]/90 px-5 py-4 shadow-lg backdrop-blur-sm sm:left-8 sm:top-8">
            <h2 className="text-[26px] font-extrabold uppercase leading-none text-white md:text-[32px]">
              Find Us
            </h2>

            <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.02em] text-white/90 md:text-[15px]">
              Visit Our Head Office
            </p>
          </div>

          {/* Address Card */}
          <div className="absolute bottom-4 left-4 right-4 z-10 sm:bottom-7 sm:left-auto sm:right-7 sm:w-[330px]">
            <div className="rounded-[9px] border border-white/50 bg-[#132A50]/95 px-5 py-4 text-white shadow-[0_8px_25px_rgba(0,0,0,0.28)] backdrop-blur-md">
              <div className="flex items-start gap-3">
                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-white">
                  <FaMapMarkerAlt className="text-[21px] text-[#1375E6]" />
                </div>

                <div className="flex-1">
                  <p className="text-[16px] font-bold uppercase tracking-[0.1em]">
                    MTAX
                  </p>

                  <div className="my-2 h-px w-full bg-white/25" />

                  <p className="text-[13px] uppercase leading-[1.6] text-white/90 md:text-[14px]">
                    Plot 34-C, Street 3
                    <br />
                    Jami Commercial, Phase 7
                    <br />
                    DHA, Karachi
                  </p>
                </div>
              </div>

              <Link
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#1375E6] px-4 py-2.5 text-[13px] font-semibold uppercase text-white transition hover:bg-[#0f5dbf]"
              >
                Open in Google Maps
                <FaExternalLinkAlt className="text-[11px]" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Bottom Heading */}
        <Reveal delay={80} className="pt-8 text-center sm:pt-10">
          <h2 className="text-[26px] font-extrabold uppercase leading-tight text-[#1D293D] md:text-[32px]">
            Have Any Questions?
          </h2>
        </Reveal>
      </div>
    </section>
      <Reveal delay={80}><ContactPage/></Reveal>
      <Reveal delay={80}><Banner/></Reveal>
      <Footer/>
    </main>
  );
}