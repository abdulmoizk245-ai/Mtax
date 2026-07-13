"use client";

import Image from "next/image";

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
        <circle cx="24" cy="24" r="22" stroke="#22d3ee" strokeWidth="2" />
        <rect x="16" y="10" width="6" height="18" rx="2" fill="#22d3ee" opacity="0.8" />
        <rect x="26" y="14" width="6" height="14" rx="2" fill="#22d3ee" opacity="0.6" />
        <path d="M10 30 Q24 20 38 30" stroke="#22d3ee" strokeWidth="2" fill="none" />
        <circle cx="24" cy="36" r="3" fill="#22d3ee" />
      </svg>
    ),
    label: "Chemical Raw\nMaterial Supply",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
        <circle cx="24" cy="24" r="22" stroke="#22d3ee" strokeWidth="2" />
        <rect x="14" y="28" width="20" height="8" rx="2" fill="#22d3ee" opacity="0.7" />
        <path d="M18 28 L16 18 L32 18 L30 28" fill="#22d3ee" opacity="0.5" />
        <circle cx="20" cy="16" r="3" fill="#22d3ee" />
        <circle cx="28" cy="16" r="3" fill="#22d3ee" />
        <path d="M20 16 Q24 12 28 16" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    label: "Detergent Industry\nSupport",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
        <circle cx="24" cy="24" r="22" stroke="#22d3ee" strokeWidth="2" />
        <path d="M24 10 L20 20 H28 Z" fill="#22d3ee" opacity="0.8" />
        <rect x="18" y="20" width="12" height="16" rx="2" fill="#22d3ee" opacity="0.6" />
        <circle cx="24" cy="34" r="2" fill="#22d3ee" />
        <path d="M16 36 Q24 40 32 36" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    label: "LABSA & SLES\nProducts",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
        <circle cx="24" cy="24" r="22" stroke="#22d3ee" strokeWidth="2" />
        <path
          d="M24 12 L28 20 L38 21 L31 28 L33 38 L24 33 L15 38 L17 28 L10 21 L20 20 Z"
          stroke="#22d3ee"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="24" cy="24" r="4" fill="#22d3ee" opacity="0.8" />
      </svg>
    ),
    label: "Quality Focused\nManufacturing",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
        <circle cx="24" cy="24" r="22" stroke="#22d3ee" strokeWidth="2" />
        <path
          d="M16 18 C16 14 32 14 32 18 L32 26 C32 32 24 36 24 36 C24 36 16 32 16 26 Z"
          stroke="#22d3ee"
          strokeWidth="1.5"
          fill="#22d3ee"
          opacity="0.2"
        />
        <path d="M19 24 L23 28 L30 20" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Reliable Customer\nService",
  },
];

export default function AboutCSM() {
  return (
    <section className="relative bg-[#050c1a] py-20 px-4 overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Main card */}
        <div
          className="rounded-2xl p-[2px] overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(34,211,238,0.6) 0%, rgba(59,130,246,0.3) 50%, rgba(34,211,238,0.1) 100%)",
            boxShadow: "0 0 60px rgba(34,211,238,0.15), 0 0 120px rgba(59,130,246,0.1)",
          }}
        >
          <div className="bg-[#070f1f] rounded-2xl p-8 lg:p-10">
            {/* Top grid: image left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
              {/* Left – factory image with 1997 badge */}
              <div className="relative rounded-xl overflow-hidden aspect-video lg:aspect-auto lg:h-72 border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
                {/* Replace src with your actual image */}
                <Image
                  src="/csm/factory.jpg"
                  alt="CSM Chemical Plant"
                  fill
                  className="object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050c1a]/80 via-transparent to-transparent" />

                {/* 1997 badge */}
                <div
                  className="absolute bottom-4 left-4 flex flex-col items-center gap-1 rounded-xl border border-cyan-400/40 bg-[#070f1f]/80 backdrop-blur-sm px-5 py-3"
                  style={{ boxShadow: "0 0 20px rgba(34,211,238,0.2)" }}
                >
                  {/* beaker icon */}
                  <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 mb-1">
                    <rect x="10" y="4" width="12" height="2" rx="1" fill="#22d3ee" />
                    <path d="M12 6 L8 24 Q8 27 16 27 Q24 27 24 24 L20 6 Z" stroke="#22d3ee" strokeWidth="1.5" fill="rgba(34,211,238,0.15)" />
                    <circle cx="13" cy="20" r="1.5" fill="#22d3ee" />
                    <circle cx="18" cy="17" r="1" fill="#22d3ee" />
                    <circle cx="15" cy="23" r="1" fill="#22d3ee" />
                  </svg>
                  <span className="text-3xl font-extrabold text-white leading-none tracking-tight">1997</span>
                  <span className="text-cyan-300 text-[11px] text-center leading-tight">
                    Serving the industry<br />with Quality &amp; Trust
                  </span>
                </div>
              </div>

              {/* Right – text content */}
              <div>
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  About CSM
                </p>
                <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight mb-5">
                  Trusted Chemical Manufacturing{" "}
                  <span className="text-white">Backed by Industry Experience</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  CSM is a professional raw material chemical solutions company within the MTAX Group
                  of companies, serving various industrial sectors with high-quality raw materials and
                  technical support. We supply a wide range of chemical raw materials essential for
                  detergent manufacturing, industrial cleaning, household cleaning, and personal care
                  industries.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  With a commitment to quality, consistency, and customer satisfaction, we focus on
                  building long-term partnerships that help businesses improve performance, efficiency,
                  and product reliability.
                </p>
              </div>
            </div>

            {/* Bottom – feature icons */}
            <div
              className="rounded-xl border border-cyan-500/20 bg-[#050c1a]/60 px-6 py-6"
              style={{ boxShadow: "0 0 30px rgba(34,211,238,0.05)" }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 text-center group">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center border border-cyan-500/30 bg-cyan-500/5 group-hover:bg-cyan-500/15 transition-colors duration-300"
                      style={{ boxShadow: "0 0 20px rgba(34,211,238,0.1)" }}
                    >
                      {f.icon}
                    </div>
                    <p className="text-cyan-100 text-xs font-medium leading-snug whitespace-pre-line">
                      {f.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
