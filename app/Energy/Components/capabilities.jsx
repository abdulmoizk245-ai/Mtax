const capacities = ["5kW", "25kW", "100kW", "250kW", "500kW", "1000kW"];

export default function EnergyCapabilities() {
  return (
    <section className="bg-[#0b1220] px-6 py-14 md:py-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#39FF14]">
          Capacity
        </p>
        <h2 className="mb-10 text-xl font-extrabold text-white md:text-2xl">
          Generator Capacity 5kW to 1000kW
        </h2>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {capacities.map((cap, i) => (
            <div
              key={i}
              className="rounded-lg border border-[#39FF14]/30 bg-[#101a2e] py-5 text-center transition-colors hover:border-[#39FF14]"
            >
              <span className="text-sm font-bold text-[#39FF14] md:text-base">
                {cap}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
