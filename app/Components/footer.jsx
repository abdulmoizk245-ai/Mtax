export default function Footer() {
  return (
    <footer className="w-full bg-[#1B2436] text-white">
      {/* Contact Info */}
      <div className="px-6 pt-[34px] pb-[28px] text-center">
        <h2 className="text-[30px] font-semibold tracking-[0.04em] md:text-[36px]">
          CONTACT <span className="text-[#1687FF]">US</span>
        </h2>

        <div className="mt-[18px] space-y-[8px] text-[18px] font-normal leading-[1.4] text-white md:text-[22px]">
          <p>021-35311837</p>
          <p>info@mtaxgroupofcompaniespakistan.com</p>
          <p>Plot 34-C, Street 3, Jami Commercial, Phase 7 DHA, Karachi</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[2px] w-full bg-white" />

      {/* Bottom Bar */}
      <div className="flex flex-col items-center justify-between gap-3 px-6 py-[14px] text-center text-[13px] text-white md:flex-row md:px-[42px] md:text-[15px]">
        <p>© 2024 MTAX Group of Companies. All Rights Reserved.</p>

        <div className="flex items-center gap-1">
          <a href="#" className="transition hover:text-[#1687FF]">
            Privacy Policy
          </a>

          <span>|</span>

          <a href="#" className="transition hover:text-[#1687FF]">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}