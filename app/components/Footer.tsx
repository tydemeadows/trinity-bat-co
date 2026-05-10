export function Footer() {
  return (
    <footer className="border-t-4 border-gold bg-ink px-4 py-12 text-center md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-3 font-display text-[32px] tracking-[0.08em] text-cream md:text-[40px]">
          TRINITY <span className="text-red">★</span> BAT CO.
        </div>
        <div className="font-serif text-[15px] italic text-gold md:text-[17px]">
          The craft continues <span className="text-cream">★</span> The standard
          rises
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-display text-[11px] tracking-[0.18em] text-cream/60 md:text-[12px]">
          <a href="#" className="transition hover:text-gold">SHOP</a>
          <span className="text-cream/30">·</span>
          <a href="#" className="transition hover:text-gold">CUSTOM</a>
          <span className="text-cream/30">·</span>
          <a href="#" className="transition hover:text-gold">TEAMS</a>
          <span className="text-cream/30">·</span>
          <a href="#" className="transition hover:text-gold">ABOUT</a>
          <span className="text-cream/30">·</span>
          <a href="#" className="transition hover:text-gold">CONTACT</a>
        </div>
        <div className="mt-6 font-body text-[11px] tracking-[0.15em] text-cream/40">
          © 2026 TRINITY BAT CO. · ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
