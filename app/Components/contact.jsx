export default function ContactPage() {
  return (
    <main className="w-full bg-[#1B2436]">
    

      {/* Contact Section */}
      <section className="w-full bg-[#1B2436] px-4 py-11 sm:px-6 lg:px-10">
        {/* Centered Outer Box */}
        <div className="mx-auto w-full max-w-[1100px] border-2 border-[#1687FF] px-4 py-8 sm:px-6 md:px-8 md:py-6">
          <div className="grid w-full items-center gap-8 md:grid-cols-[42%_58%] md:gap-6">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-[29px] font-extrabold uppercase leading-none tracking-tight md:text-[32px]">
                Get In Touch
              </h2>

              <p className="mt-4 max-w-[390px] text-[16px] leading-[1.55] text-white md:text-[18px] lg:text-[20px]">
                We’d love to hear from you!
                <br />
                Whether you have questions about
                <br className="hidden lg:block" />
                our products or services, our team
                <br className="hidden lg:block" />
                is here to assist you.
              </p>
            </div>

            {/* Form */}
            <form className="w-full">
              {/* Name and Email */}
              <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-10">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="h-[42px] w-full rounded-[4px] border-2 border-white bg-transparent px-4 text-[14px] text-white outline-none transition focus:border-[#1687FF] placeholder:text-white/90"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="h-[42px] w-full rounded-[4px] border-2 border-white bg-transparent px-4 text-[14px] text-white outline-none transition focus:border-[#1687FF] placeholder:text-white/90"
                />
              </div>

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="mt-4 h-[42px] w-full rounded-[4px] border-2 border-white bg-transparent px-4 text-[14px] text-white outline-none transition focus:border-[#1687FF] placeholder:text-white/90"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message"
                className="mt-4 h-[140px] w-full resize-none rounded-[5px] border-2 border-white bg-transparent px-4 py-3 text-[14px] text-white outline-none transition focus:border-[#1687FF] placeholder:text-white/90"
              />

              {/* Submit */}
              <button
                type="submit"
                className="mt-3 flex h-[40px] w-full items-center justify-center rounded-[4px] bg-white text-[15px] font-bold text-[#1687FF] transition hover:bg-[#1687FF] hover:text-white md:text-[16px] lg:text-[19px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}