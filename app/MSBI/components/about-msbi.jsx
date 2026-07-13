import Image from "next/image";

export default function AboutMSBI() {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left – text content */}
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#1375E6]">
            About MSBI
          </p>

          <h2 className="mb-5 text-3xl font-extrabold uppercase leading-tight text-[#1D2A3A] md:text-4xl">
            Your Trusted{" "}
            <span className="text-[#1375E6]">Import Partner</span> Worldwide
          </h2>

          <p className="max-w-xl text-[15px] leading-[1.7] text-[#4B5563] md:text-base">
            MSBI International specializes in the import of high-quality,
            trust, and durability for industrial and commercial needs. We
            work with a global network to bring you reliable service and
            innovative solutions, delivering forward.
          </p>
        </div>

        {/* Right – image with logo overlay */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/msbi-about.png"
            alt="MSBI International Building"
            fill
            className="object-cover"
          />

          {/* Dark overlay for logo contrast */}
          <div className="absolute inset-0 bg-[#0b1a3b]/40" />

          {/* Logo overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold tracking-wide text-white md:text-5xl">
              MS<span className="text-[#1375E6]">BI</span>
            </span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-[0.4em] text-white md:text-sm">
              International
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
