import Image from "next/image";
import { FaLayerGroup, FaBullseye } from "react-icons/fa";

export default function FabricaAbout() {
  return (
    <section className="w-full bg-white px-4 py-20">
      <div className="mx-auto ">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#1375E6]">
              About Fabrica
            </p>

            <h2 className="mb-6 text-[26px] font-extrabold uppercase leading-tight tracking-wide text-[#0b1a3b] md:text-[32px] lg:text-[30px]">
              Textile And Fabric Support Backed By Industry Experience
            </h2>

            <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
              At Fabrics, we understand that the right fabric makes all the
              difference. That&apos;s why we provide reliable textile
              solutions tailored to meet your production and performance
              needs.
            </p>

            <p className="text-sm leading-relaxed text-gray-600 md:text-base">
              With years of industry experience and a commitment to
              innovation, we support businesses with quality fabrics and
              dedicated service at every stage.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-lg md:h-[360px] md:w-1/2  lg:ml-110 lg:w-[450px]">
            <Image
              src="/fabrica/about.png"
              alt="Fabrica Fabric Texture"
              fill
              className="object-cover"
            />
          </div>
        </div>

      
      </div>
    </section>
  );
}
