import Image from "next/image";
import { FaLayerGroup, FaBullseye } from "react-icons/fa";

export default function FabricaAbout() {
  return (
    <section className="w-full bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#1375E6]">
              About Fabrica
            </p>

            <h2 className="mb-6 text-2xl font-extrabold uppercase leading-tight tracking-wide text-[#0b1a3b] md:text-3xl">
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
          <div className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-lg md:h-[360px] md:w-1/2">
            <Image
              src="/fabrica/about.png"
              alt="Fabrica Fabric Texture"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Category / Focus Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-[#1375E6]/40 bg-[#050b1f] p-6 shadow-[0_0_20px_rgba(19,117,230,0.25)]">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#1375E6]/20 text-[#3aa0ff]">
              <FaLayerGroup size={20} />
            </div>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#3aa0ff]">
              Our Category
            </p>
            <p className="text-sm leading-relaxed text-gray-300">
              High-performance fabrics and textiles for various industrial
              applications.
            </p>
          </div>

          <div className="rounded-xl border border-[#1375E6]/40 bg-[#050b1f] p-6 shadow-[0_0_20px_rgba(19,117,230,0.25)]">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#1375E6]/20 text-[#3aa0ff]">
              <FaBullseye size={20} />
            </div>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#3aa0ff]">
              Focus
            </p>
            <p className="text-sm leading-relaxed text-gray-300">
              Quality you can Trust. Value you can Count on. Service you can
              Rely on / Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
