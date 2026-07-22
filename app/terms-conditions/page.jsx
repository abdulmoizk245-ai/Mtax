import Header from "../Components/header";
import Footer from "../Components/footer";
import Reveal from "../Components/Reveal";

export const metadata = {
  title: "Terms & Conditions | MTAX Group of Companies",
  description:
    "Read the terms and conditions governing the use of the MTAX Group of Companies website and services.",
};

const sections = [
  { id: "introduction", title: "1. Introduction & Acceptance" },
  { id: "definitions", title: "2. Definitions" },
  { id: "use-of-website", title: "3. Use of Our Website" },
  { id: "intellectual-property", title: "4. Intellectual Property Rights" },
  { id: "group-of-companies", title: "5. Our Group of Companies" },
  { id: "communications", title: "6. Inquiries & Communications" },
  { id: "disclaimer", title: "7. Products & Services Disclaimer" },
  { id: "limitation-of-liability", title: "8. Limitation of Liability" },
  { id: "indemnification", title: "9. Indemnification" },
  { id: "third-party-links", title: "10. Third-Party Links" },
  { id: "governing-law", title: "11. Governing Law & Jurisdiction" },
  { id: "termination", title: "12. Termination" },
  { id: "changes-to-terms", title: "13. Changes to These Terms" },
  { id: "contact-us", title: "14. Contact Us" },
];

export default function TermsConditions() {
  return (
    <main className="w-full bg-white">
      <Header />

      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#18243A]">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1687FF]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#1687FF]/10 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20 animate-fade-in">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#1687FF]">
            Legal
          </p>
          <h1 className="mt-3 text-[32px] font-extrabold uppercase leading-tight text-white md:text-[42px] lg:text-[52px]">
            Terms &amp; <span className="text-[#1687FF]">Conditions</span>
          </h1>
          <p className="mt-4 max-w-[640px] text-[14px] font-medium leading-[1.7] text-white/80 md:text-[16px] lg:text-[15px]">
            Please read these terms carefully before using our website or
            engaging with any company under the MTAX Group of Companies.
          </p>
       
        </div>
      </section>

      {/* Content */}
      <section className="w-full bg-white px-5 py-12 sm:px-8 md:py-16 lg:px-12">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 lg:flex-row lg:gap-14">


          {/* Body */}
          <Reveal as="article" className="min-w-0 flex-1 text-[14px] leading-[1.8] text-gray-700 md:text-[16px] lg:text-[15px]">
            <p className="mb-8 text-[15px] leading-[1.8] text-gray-600 md:text-[16px]">
              These Terms &amp; Conditions ("Terms") govern your access to
              and use of the website and services provided by MTAX Group of
              Companies ("MTAX," "we," "us," or "our"), including our
              affiliated businesses: Blaze Group, CSM, De Novo Energy,
              Fabrica, MSBI, Shamooz, Universal Exports, and Yuemei
              (collectively, the "Group Companies"). By accessing or using
              our website, you agree to be bound by these Terms. If you do
              not agree, please discontinue use of the website.
            </p>

            <TermsSection id="introduction" title="1. Introduction & Acceptance">
              <p>
                This website is owned and operated by MTAX Group of
                Companies. By browsing our pages, submitting an inquiry, or
                otherwise interacting with our website, you confirm that you
                accept these Terms and agree to comply with them. If you are
                using this website on behalf of a business or organization,
                you confirm that you have the authority to bind that entity
                to these Terms.
              </p>
            </TermsSection>

            <TermsSection id="definitions" title="2. Definitions">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-semibold text-[#1D293D]">
                    "Website"
                  </span>{" "}
                  refers to mtaxgroupofcompaniespakistan.com and any related
                  subdomains or pages.
                </li>
                <li>
                  <span className="font-semibold text-[#1D293D]">
                    "Group Companies"
                  </span>{" "}
                  refers to the businesses operating under the MTAX Group of
                  Companies umbrella.
                </li>
                <li>
                  <span className="font-semibold text-[#1D293D]">"You"</span>{" "}
                  refers to any visitor, user, or business inquiring through
                  our website.
                </li>
              </ul>
            </TermsSection>

            <TermsSection id="use-of-website" title="3. Use of Our Website">
              <p>You agree to use our website only for lawful purposes. You must not:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Use the website in any way that violates applicable local, national, or international law.</li>
                <li>Attempt to gain unauthorized access to any part of the website, servers, or connected systems.</li>
                <li>Introduce viruses, malware, or other harmful material to the website.</li>
                <li>Copy, scrape, or reproduce content from the website for commercial use without our written consent.</li>
                <li>Impersonate MTAX, any Group Company, or misrepresent your affiliation with us.</li>
              </ul>
            </TermsSection>

            <TermsSection
              id="intellectual-property"
              title="4. Intellectual Property Rights"
            >
              <p>
                All content on this website — including text, graphics,
                logos, images, company names, and page layouts — is the
                property of MTAX Group of Companies or its respective Group
                Companies and is protected by applicable copyright and
                trademark laws. You may view and print pages for personal,
                non-commercial reference only. No content may be reproduced,
                distributed, or used for commercial purposes without our
                prior written permission.
              </p>
            </TermsSection>

            <TermsSection id="group-of-companies" title="5. Our Group of Companies">
              <p>
                MTAX Group of Companies operates as a diversified group
                spanning multiple industries through its affiliated
                businesses, including Blaze Group, CSM, De Novo Energy,
                Fabrica, MSBI, Shamooz, Universal Exports, and Yuemei. Each
                Group Company may operate under its own brand and may have
                additional terms specific to its products or services. These
                Terms apply generally to your use of the MTAX website; where
                a Group Company presents distinct terms for its own offering,
                those terms will govern in relation to that specific
                offering.
              </p>
            </TermsSection>

            <TermsSection id="communications" title="6. Inquiries & Communications">
              <p>
                When you submit an inquiry, contact form, or request through
                our website, you agree to provide accurate and complete
                information. We aim to respond to inquiries promptly, but we
                do not guarantee a specific response time. Any business
                arrangement, quotation, or agreement discussed following an
                inquiry is not binding until confirmed in a separate signed
                agreement between you and the relevant Group Company.
              </p>
            </TermsSection>

            <TermsSection id="disclaimer" title="7. Products & Services Disclaimer">
              <p>
                Information about products, services, and industries
                presented on this website is provided for general
                informational purposes and is believed to be accurate at the
                time of publishing. However, MTAX makes no warranties,
                express or implied, regarding the completeness, reliability,
                or availability of any product, service, or information on
                this website. Specifications, offerings, and availability may
                change without prior notice.
              </p>
            </TermsSection>

            <TermsSection
              id="limitation-of-liability"
              title="8. Limitation of Liability"
            >
              <p>
                To the fullest extent permitted by applicable law, MTAX Group
                of Companies and its Group Companies shall not be liable for
                any direct, indirect, incidental, consequential, or special
                damages arising out of or in connection with your use of, or
                inability to use, this website, even if we have been advised
                of the possibility of such damages. This website and its
                content are provided on an "as is" and "as available" basis
                without warranties of any kind.
              </p>
            </TermsSection>

            <TermsSection id="indemnification" title="9. Indemnification">
              <p>
                You agree to indemnify and hold harmless MTAX Group of
                Companies, its Group Companies, officers, employees, and
                affiliates from any claims, damages, losses, or expenses
                (including reasonable legal fees) arising from your misuse of
                the website or violation of these Terms.
              </p>
            </TermsSection>

            <TermsSection id="third-party-links" title="10. Third-Party Links">
              <p>
                Our website may include links to third-party websites for
                your convenience. We do not control and are not responsible
                for the content, accuracy, or practices of any linked
                third-party site. Accessing such links is at your own risk
                and subject to the terms of those third-party sites.
              </p>
            </TermsSection>

            <TermsSection id="governing-law" title="11. Governing Law & Jurisdiction">
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the Islamic Republic of Pakistan, without
                regard to its conflict of law provisions. Any disputes
                arising from these Terms or your use of the website shall be
                subject to the exclusive jurisdiction of the courts of
                Karachi, Pakistan.
              </p>
            </TermsSection>

            <TermsSection id="termination" title="12. Termination">
              <p>
                We reserve the right to suspend or restrict your access to
                the website, without notice, if we believe you have violated
                these Terms or engaged in unlawful or harmful conduct.
                Provisions that by their nature should survive termination
                (including intellectual property rights, disclaimers, and
                limitation of liability) shall remain in effect.
              </p>
            </TermsSection>

            <TermsSection id="changes-to-terms" title="13. Changes to These Terms">
              <p>
                We may revise these Terms from time to time to reflect
                changes in our business, legal requirements, or the way our
                website operates. Updates will be posted on this page with a
                revised "Last Updated" date. Your continued use of the
                website after changes are posted constitutes acceptance of
                the updated Terms.
              </p>
            </TermsSection>

            <TermsSection id="contact-us" title="14. Contact Us">
              <p>
                If you have any questions about these Terms & Conditions,
                please reach out to us:
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
            </TermsSection>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function TermsSection({ id, title, children }) {
  return (
    <div id={id} className="mb-9 scroll-mt-8">
      <h2 className="mb-3 text-[20px] font-extrabold text-[#1D293D] md:text-[25px] lg:text-[21px]">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
