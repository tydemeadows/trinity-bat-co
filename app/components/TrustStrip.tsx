export function TrustStrip() {
  const items = [
    {
      title: 'STEEL COMPRESSED',
      desc: 'Every barrel hardened for game-day durability',
    },
    {
      title: 'PRO INK DOT',
      desc: 'Certified maple & birch — same as the big league',
    },
    {
      title: 'HAND CRAFTED',
      desc: 'One bat at a time, billet to barrel, in the USA',
    },
  ];

  return (
    <section className="border-y-4 border-ink bg-cream py-10 md:py-14">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-3 md:gap-6 md:px-6">
        {items.map((item, idx) => (
          <div
            key={item.title}
            className="relative border-[3px] border-ink bg-cream p-5 shadow-gold md:p-6"
          >
            <div className="pointer-events-none absolute inset-1 border border-gold" />
            <div className="relative">
              <div className="mb-2 inline-block border-2 border-ink bg-red px-2.5 py-0.5 font-display text-[10px] tracking-[0.2em] text-cream">
                0{idx + 1}
              </div>
              <h3 className="mb-1.5 font-display text-[20px] leading-none tracking-[0.02em] text-ink md:text-[24px]">
                {item.title}
              </h3>
              <p className="font-body text-[14px] font-medium leading-relaxed text-ink/75">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
