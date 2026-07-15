"use client";

import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[+\d][\d\s-]{6,}$/.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

export default function ContactPage() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), 3000);
    return () => clearTimeout(timer);
  }, [showToast]);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setValues(initialForm);
    setShowToast(true);
  }

  const inputClass = (field) =>
    `h-[42px] w-full rounded-[4px] border-2 bg-transparent px-4 text-[14px] text-white outline-none transition focus:border-[#1687FF] placeholder:text-white/90 ${
      errors[field] ? "border-red-400" : "border-white"
    }`;

  return (
    <main className="w-full bg-[#1B273D]">
      {/* Success Toast */}
      <div
        className={`fixed top-5 right-5 z-50 flex items-center gap-3 rounded-[6px] bg-[#16A34A] px-5 py-3 text-white shadow-lg transition-all duration-300 ${
          showToast
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
        role="status"
        aria-live="polite"
      >
        <FaCheckCircle className="text-[18px]" />
        <span className="text-[14px] font-semibold">
          Message sent successfully!
        </span>
      </div>

      {/* Top White Section */}
      <section className="w-full bg-white px-5 py-8 text-center md:py-10">
        <h1 className="text-[30px] font-extrabold uppercase leading-[1.45] tracking-tight text-[#1B2436] sm:text-[34px] md:text-[36px]">
          Let’s Build
          <br />
          Solutions Together
        </h1>

        <p className="mx-auto mt-2 max-w-[720px] text-[16px] leading-[1.45] text-[#1B2436] sm:text-[18px] md:text-[21px]">
          For industrial supply, digital solutions, solar products, textile
          support
          <br className="hidden md:block" />
          and important based business needs.
        </p>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-[#1B273D] px-4 py-11 sm:px-6 lg:px-10">
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
            <form className="w-full" noValidate onSubmit={handleSubmit}>
              {/* Name and Email */}
              <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-10">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={values.fullName}
                    onChange={handleChange}
                    className={inputClass("fullName")}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[12px] text-red-400">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[12px] text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="mt-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={values.phone}
                  onChange={handleChange}
                  className={inputClass("phone")}
                />
                {errors.phone && (
                  <p className="mt-1 text-[12px] text-red-400">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mt-4">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={values.message}
                  onChange={handleChange}
                  className={`h-[140px] w-full resize-none rounded-[5px] border-2 bg-transparent px-4 py-3 text-[14px] text-white outline-none transition focus:border-[#1687FF] placeholder:text-white/90 ${
                    errors.message ? "border-red-400" : "border-white"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-[12px] text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

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
