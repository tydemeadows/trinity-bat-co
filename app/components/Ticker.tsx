export function Ticker() {
  const messages = [
    'FREE SHIPPING OVER $300',
    'HAND CRAFTED IN THE USA',
    'PRO INK DOT CERTIFIED',
    'NEW DROPS EVERY MONTH',
  ];

  // Duplicate the list so the marquee loop is seamless
  const loop = [...messages, ...messages];

  return (
    <div className="relative overflow-hidden border-y-[3px] border-ink bg-red py-[9px]">
      <div className="flex animate-ticker gap-9 whitespace-nowrap font-display text-[13px] tracking-[0.18em] text-cream">
        {loop.map((msg, i) => (
          <span key={i} className="inline-flex items-center gap-[18px]">
            {msg}
            <span className="text-gold">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
