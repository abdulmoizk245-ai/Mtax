import Image from "next/image";
import Link from "next/link";

export default function CSMContact() {
  return (
    <>
      {/* GET IN TOUCH Section */}
      <main className="bg-[#1B2436]">
        <section className="flex justify-center px-4 py-[45px]">
          <div className="w-full max-w-[900px] border border-[#1687FF] px-[20px] py-[24px] md:px-[32px] md:py-[32px]">
            <div className="grid w-full items-center gap-[24px] md:grid-cols-[40%_60%]">

              {/* Left Text */}
              <div className="text-white">
                <h2 className="text-[28px] font-extrabold leading-none tracking-tight">
                  GET IN TOUCH
                </h2>
                <p className="mt-[12px] text-[15px] leading-[1.6] text-white">
                  We'd love to hear from you!
                  <br />
                  Whether you have questions about
                  <br />
                  our products or services, our team
                  <br />
                  is here to assist you.
                </p>
              </div>

              {/* Form */}
              <form className="w-full">
                <div className="grid gap-[12px] md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="h-[38px] w-full rounded-[2px] border border-white bg-transparent px-[12px] text-[13px] text-white outline-none placeholder:text-white"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-[38px] w-full rounded-[2px] border border-white bg-transparent px-[12px] text-[13px] text-white outline-none placeholder:text-white"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="mt-[12px] h-[38px] w-full rounded-[2px] border border-white bg-transparent px-[12px] text-[13px] text-white outline-none placeholder:text-white"
                />

                <textarea
                  placeholder="Message"
                  className="mt-[12px] h-[100px] w-full resize-none rounded-[3px] border border-white bg-transparent px-[12px] py-[10px] text-[13px] text-white outline-none placeholder:text-white"
                />

                <button
                  type="submit"
                  className="mt-[12px] h-[40px] w-full rounded-[3px] bg-white text-[15px] font-bold text-[#1687FF]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Brand Footer Section */}
      <section className="bg-white px-6 py-[28px] text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/logo.png"
            alt="MTAX Logo"
            width={120}
            height={55}
            className="h-auto w-[110px] object-contain"
          />
        </div>

        {/* Description */}
        <p className="mx-auto mt-[14px] max-w-[620px] text-[13px] leading-[1.6] text-[#1B2436]">
          MTAX Group of Companies is a privately owned, multi-brand enterprise based in Pakistan,
          delivering innovation, quality, and excellence across diverse industries.
        </p>

        {/* Company Links */}
        <div className="mt-[16px] flex flex-wrap items-center justify-center gap-x-[24px] gap-y-[8px]">
          <Link href="/yuemei" className="text-[13px] font-semibold text-[#1687FF] hover:underline">
            YUEMEI
          </Link>
          <Link href="/CSM" className="text-[13px] font-semibold text-[#1B2436] hover:text-[#1687FF]">
            CSM
          </Link>
          <Link href="/msbi" className="text-[13px] font-semibold text-[#1687FF] hover:underline">
            MSBI
          </Link>
          <Link href="/blaze" className="text-[13px] font-semibold text-[#1B2436] hover:text-[#1687FF]">
            BLAZE
          </Link>
          <Link href="/fabrica" className="text-[13px] font-semibold text-[#1B2436] hover:text-[#1687FF]">
            FABRICA
          </Link>
          <Link href="/de-novo" className="text-[13px] font-semibold text-[#1B2436] hover:text-[#1687FF]">
            DE NOVO
          </Link>
          <Link href="/universal-exports" className="text-[13px] font-semibold text-[#1687FF] hover:underline">
            UNIVERSAL EXPORTS
          </Link>
        </div>
      </section>
    </>
  );
}
