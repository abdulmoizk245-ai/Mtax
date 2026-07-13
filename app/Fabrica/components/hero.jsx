import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function FabricaHero() {
  return (
    <section className="relative w-full min-h-[620px] overflow-hidden bg-[#050b1f]">
      {/* Background Image */}
      <Image
        src="/fabrica/hero.jpg"
        alt="Fabrica Textile Manufacturing"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-16 md:px-12">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#3aa0ff]">
            Premium Fabric Manufacturer
          </p>

          <h1 className="mb-4 text-5xl font-extrabold tracking-wide text-white md:text-6xl">
            FABRICA
          </h1>

          <h2 className="mb-6 text-2xl font-bold uppercase leading-tight tracking-wide text-white md:text-3xl">
            Reliable Fabrics For Modern{" "}
            <span className="text-[#1375E6]">Production</span>
          </h2>

          <p className="mb-8 max-w-lg text-sm leading-relaxed text-gray-300 md:text-base">
            At Fabrics, we combine advanced textile technology with a
            commitment to quality and reliability. From premium fabrics to
            expert support, we help your production run smoother and your
            brand stand stronger.
          </p>

          <Link
            href="#solutions"
            className="inline-flex items-center gap-2 rounded-md bg-[#1375E6] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f5dbf]"
          >
            Explore Fabrics Solutions <FaArrowRight aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
