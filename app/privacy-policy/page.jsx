import Header from "../Components/header";
import Footer from "../Components/footer";

export const metadata = {
  title: "Privacy Policy | MTAX Group of Companies",
  description:
    "Learn how MTAX Group of Companies collects, uses, and protects your personal information across our websites and services.",
};

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information-we-collect", title: "2. Information We Collect" },
  { id: "how-we-use-information", title: "3. How We Use Your Information" },
  { id: "cookies", title: "4. Cookies & Tracking Technologies" },
  { id: "sharing-information", title: "5. How We Share Your Information" },
  { id: "data-security", title: "6. Data Security" },
  { id: "data-retention", title: "7. Data Retention" },
  { id: "your-rights", title: "8. Your Rights & Choices" },
  { id: "childrens-privacy", title: "9. Children's Privacy" },
  { id: "third-party-links", title: "10. Third-Party Links" },
  { id: "international-transfers", title: "11. International Data Transfers" },
  { id: "policy-changes", title: "12. Changes to This Policy" },
  { id: "contact-us", title: "13. Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <main className="w-full bg-white">
      <Header />

      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#18243A]">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1687FF]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#1687FF]/10 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#1687FF]">
            Legal
          </p>
          <h1 className="mt-3 text-[32px] font-extrabold uppercase leading-tight text-white md:text-[42px] lg:text-[52px]">
            Privacy <span className="text-[#1687FF]">Policy</span>
          </h1>
          <p className="mt-4 max-w-[640px] text-[14px] font-medium leading-[1.7] text-white/80 md:text-[16px] lg:text-[15px]">
            Your trust matters to us. This policy explains what information
            MTAX Group of Companies collects, why we collect it, and how we
            keep it safe.
          </p>
   
        </div>
      </section>

      {/* Content */}
      <section className="w-full bg-white px-5 py-12 sm:px-8 md:py-16 lg:px-12">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 lg:flex-row lg:gap-14">
       

          {/* Body */}
          <article className="min-w-0 flex-1 text-[14px] leading-[1.8] text-gray-700 md:text-[16px] lg:text-[15px]">
            <p className="mb-8 text-[15px] leading-[1.8] text-gray-600 md:text-[16px]">
              MTAX Group of Companies ("MTAX," "we," "us," or "our") operates
              a family of businesses including Blaze Group, CSM, De Novo
              Energy, Fabrica, MSBI, Shamooz, Universal Exports, and Yuemei
              (collectively, the "Group Companies"). This Privacy Policy
              describes how we collect, use, disclose, and safeguard your
              information when you visit our website, contact us, or interact
              with any of our Group Companies. By using our website, you
              agree to the practices described in this policy.
            </p>

            <PolicySection id="introduction" title="1. Introduction">
              <p>
                We are committed to protecting the privacy and security of
                everyone who visits our website or does business with us.
                This policy applies to all personal information collected
                through mtaxgroupofcompaniespakistan.com and any related
                domains, forms, or communication channels operated by MTAX
                and its Group Companies. It does not apply to third-party
                websites that may be linked from our site.
              </p>
            </PolicySection>

            <PolicySection
              id="information-we-collect"
              title="2. Information We Collect"
            >
              <p>We may collect the following categories of information:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <span className="font-semibold text-[#1D293D]">
                    Contact Details:
                  </span>{" "}
                  name, email address, phone number, and company name when
                  you submit an inquiry or contact form.
                </li>
                <li>
                  <span className="font-semibold text-[#1D293D]">
                    Business Information:
                  </span>{" "}
                  details you share regarding partnerships, procurement,
                  export/import requirements, or service requests related to
                  our Group Companies.
                </li>
                <li>
                  <span className="font-semibold text-[#1D293D]">
                    Technical Data:
                  </span>{" "}
                  IP address, browser type, device information, and pages
                  visited, collected automatically through cookies and
                  similar technologies.
                </li>
                <li>
                  <span className="font-semibold text-[#1D293D]">
                    Communications:
                  </span>{" "}
                  records of correspondence when you email us, call our
                  office, or message us through the website.
                </li>
              </ul>
            </PolicySection>

            <PolicySection
              id="how-we-use-information"
              title="3. How We Use Your Information"
            >
              <p>We use the information we collect to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Respond to inquiries and provide requested information about our services.</li>
                <li>Operate, maintain, and improve our website and user experience.</li>
                <li>Communicate updates, offers, or business opportunities relevant to our Group Companies.</li>
                <li>Comply with legal, regulatory, and contractual obligations.</li>
                <li>Detect, prevent, and address fraud, security issues, or technical problems.</li>
              </ul>
            </PolicySection>

            <PolicySection id="cookies" title="4. Cookies & Tracking Technologies">
              <p>
                Our website may use cookies and similar tracking technologies
                to enhance your browsing experience, analyze site traffic,
                and understand where our visitors come from. Cookies are
                small text files stored on your device. You can control or
                disable cookies through your browser settings; however,
                disabling cookies may affect the functionality of certain
                parts of our website.
              </p>
            </PolicySection>

            <PolicySection
              id="sharing-information"
              title="5. How We Share Your Information"
            >
              <p>
                We do not sell, rent, or trade your personal information. We
                may share your information only in the following
                circumstances:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  With our affiliated Group Companies for the purpose of
                  fulfilling your request or business inquiry.
                </li>
                <li>
                  With trusted service providers (such as hosting or IT
                  providers) who assist us in operating our website, bound by
                  confidentiality obligations.
                </li>
                <li>
                  When required by law, regulation, legal process, or
                  governmental request.
                </li>
                <li>
                  To protect the rights, property, or safety of MTAX, our
                  users, or the public.
                </li>
              </ul>
            </PolicySection>

            <PolicySection id="data-security" title="6. Data Security">
              <p>
                We implement reasonable administrative, technical, and
                physical safeguards designed to protect your information
                against unauthorized access, alteration, disclosure, or
                destruction. While we work hard to protect your data, no
                method of transmission over the internet or electronic
                storage is completely secure, and we cannot guarantee
                absolute security.
              </p>
            </PolicySection>

            <PolicySection id="data-retention" title="7. Data Retention">
              <p>
                We retain personal information only for as long as necessary
                to fulfil the purposes outlined in this policy, unless a
                longer retention period is required or permitted by law, such
                as for tax, accounting, or regulatory purposes.
              </p>
            </PolicySection>

            <PolicySection id="your-rights" title="8. Your Rights & Choices">
              <p>Depending on applicable law, you may have the right to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Request access to the personal information we hold about you.</li>
                <li>Request correction of inaccurate or incomplete information.</li>
                <li>Request deletion of your personal information, subject to legal obligations.</li>
                <li>Opt out of receiving marketing communications from us at any time.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us using the
                details provided below.
              </p>
            </PolicySection>

            <PolicySection id="childrens-privacy" title="9. Children's Privacy">
              <p>
                Our website and services are intended for business audiences
                and are not directed at individuals under the age of 18. We
                do not knowingly collect personal information from children.
                If we become aware that we have inadvertently collected such
                information, we will take steps to delete it promptly.
              </p>
            </PolicySection>

            <PolicySection id="third-party-links" title="10. Third-Party Links">
              <p>
                Our website may contain links to third-party websites,
                including those of our Group Companies or business partners.
                We are not responsible for the privacy practices or content
                of those websites. We encourage you to review the privacy
                policies of any third-party sites you visit.
              </p>
            </PolicySection>

            <PolicySection
              id="international-transfers"
              title="11. International Data Transfers"
            >
              <p>
                As MTAX Group of Companies operates across multiple
                industries and, in some cases, international markets, your
                information may be transferred to and processed in countries
                other than your own. Where this occurs, we take reasonable
                steps to ensure your information is treated securely and in
                accordance with this Privacy Policy.
              </p>
            </PolicySection>

            <PolicySection id="policy-changes" title="12. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time to
                reflect changes in our practices, technology, legal
                requirements, or other factors. Any changes will be posted on
                this page with a revised "Last Updated" date. We encourage
                you to review this policy periodically.
              </p>
            </PolicySection>

            <PolicySection id="contact-us" title="13. Contact Us">
              <p>
                If you have any questions, concerns, or requests regarding
                this Privacy Policy or how we handle your information, please
                contact us:
              </p>
              <div className="mt-4 rounded-[11px] border border-gray-200 bg-[#F7F9FC] p-5">
                <p className="font-semibold text-[#1D293D]">
                  MTAX Group of Companies
                </p>
                <p className="mt-2">Plot 34-C, Street 3, Jami Commercial, Phase 7 DHA, Karachi</p>
                <p className="mt-1">
                  Phone:{" "}
                  <a href="tel:02135311837" className="text-[#1687FF] hover:underline">
                    021-35311837
                  </a>
                </p>
                <p className="mt-1">
                  Email:{" "}
                  <a
                    href="mailto:info@mtaxgroupofcompaniespakistan.com"
                    className="text-[#1687FF] hover:underline"
                  >
                    info@mtaxgroupofcompaniespakistan.com
                  </a>
                </p>
              </div>
            </PolicySection>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PolicySection({ id, title, children }) {
  return (
    <div id={id} className="mb-9 scroll-mt-8">
      <h2 className="mb-3 text-[20px] font-extrabold text-[#1D293D] md:text-[25px] lg:text-[21px]">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
