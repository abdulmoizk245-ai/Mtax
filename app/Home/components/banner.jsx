import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  const companies = [
    { name: "YUEMEI", href: "/Yuemei" },
    { name: "CSM", href: "/CSM" },
    { name: "MSBI", href: "/MSBI" },
    { name: "BLAZE", href: "/Blaze" },
    { name: "FABRICA", href: "/Fabrica" },
    { name: "DE NOVO", href: "/Energy" },
    { name: "UNIVERSAL EXPORTS", href: "/Universal-exports" },
    { name: "Shamooz", href: "/Shamooz" },
  ];

  return (
    <section className="w-full overflow-hidden bg-white pt-[12px] text-center lg:pt-[18px]">
      {/* Logo */}
      <div className="mx-auto w-full max-w-[210px] px-3 sm:max-w-[270px] md:max-w-[320px] lg:max-w-[360px]">
        <Image
          src="/images/MT BLACK LOGO.png"
          alt="MTAX Group of Companies"
          width={1000}
          height={475}
          priority
          quality={100}
          sizes="(max-width: 640px) 210px, (max-width: 1024px) 320px, 360px"
          className="block h-auto w-full object-contain"
        />
      </div>

      {/* Description */}
      <p className="mx-auto mt-2 w-full px-4 text-center text-[15px] leading-[1.5] text-[#1B2436]/85 md:max-w-[760px] md:px-6 md:text-[17px] lg:mt-3 lg:max-w-none lg:text-[20px] lg:whitespace-nowrap">
        MTAX Group of Companies is a privately owned, multi-brand enterprise
        based in Pakistan, delivering innovation, quality, and excellence across
        diverse industries.
      </p>

      {/* Navigation */}
      <div
        className="
    relative mt-3 w-full overflow-hidden px-2 pb-3
    [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]

    sm:px-3

    md:px-5 md:pb-4

    lg:mt-[18px] lg:px-8 lg:pb-[18px]
  "
      >
        <div
          className="flex w-max flex-nowrap items-center gap-x-[16px] sm:gap-x-[24px] md:gap-x-[32px] lg:gap-x-[44px]"
          style={{
            animation: "marquee-scroll 18s linear infinite",
          }}
        >
          {[...companies, ...companies].map((item, index) => (
            <Link
              key={`${item.name}-${index}`}
              href={item.href}
              className={`shrink-0 whitespace-nowrap text-[13px] font-medium uppercase tracking-normal transition-colors md:text-[14px] md:tracking-[0.01em] lg:text-[30px] lg:tracking-[0.02em] ${
                index % companies.length === 0 ||
                item.name === "MSBI" ||
                item.name === "FABRICA" ||
                item.name === "UNIVERSAL EXPORTS"
                  ? "text-[#1687FF]"
                  : "text-[#111827]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="h-[3px] w-full bg-[#040D23]" />
    </section>
  );
}
