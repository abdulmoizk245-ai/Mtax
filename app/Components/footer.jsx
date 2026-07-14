import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#1B2436] text-white">
      {/* Contact Info */}
      <div className="px-6 pt-[34px] pb-[28px] text-center">
        <h2 className="text-[30px] font-semibold tracking-[0.04em] md:text-[36px]">
          CONTACT <span className="text-[#1687FF]">US</span>
        </h2>

        <div className="mt-[18px] space-y-[8px] text-[16px] font-normal leading-[1.4] text-white md:text-[18px] lg:text-[22px]">
          <p>021-35311837</p>
          <p>info@mtaxgroupofcompaniespakistan.com</p>
          <p>Plot 34-C, Street 3, Jami Commercial, Phase 7 DHA, Karachi</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[2px] w-full bg-white" />

      {/* Bottom Bar */}
      <div className="flex flex-col items-center justify-between gap-3 px-6 py-[14px] text-center text-[13px] text-white md:flex-row md:px-[42px] md:text-[15px]">
        <p>© {currentYear} MTAX Group of Companies. All Rights Reserved.</p>

        <div className="flex items-center gap-1">
          <Link href="/privacy-policy" className="transition hover:text-[#1687FF]">
            Privacy Policy
          </Link>

          <span>|</span>

          <Link href="/terms-conditions" className="transition hover:text-[#1687FF]">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
