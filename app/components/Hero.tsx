import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-12 md:px-6 md:py-20 lg:py-24">
      {/* Decorative red zigzag stripe top */}
      <div className="absolute left-0 right-0 top-0 h-3 stripe-red-cream" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Copy block */}
        <div className="order-1 text-center lg:order-1 lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 border-[3px] border-ink bg-gold px-3.5 py-1.5 font-display text-[24px] font-bold tracking-[0.18em] text-ink shadow-hard">
            <span className="text-red">★</span>
            DESIGNED WITH PURPOSE. BUILT FOR IMPACT.
            <span className="text-red">★</span>
          </div>

          <h1 className="font-display text-[56px] leading-[0.9] tracking-[0.005em] text-cream md:text-[80px] lg:text-[96px] [text-shadow:4px_4px_0_#0e0e0e]">
            BUILT FOR
            <br />
            THE{' '}
            <em
              className="font-serif italic text-gold"
              style={{ fontStyle: 'italic' }}
            >
              big
            </em>{' '}
            <span className="inline-block -rotate-1 border-[3px] border-ink bg-red px-3 text-cream shadow-[4px_4px_0_#0e0e0e] [text-shadow:none]">
              LEAGUES
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg font-serif text-[18px] italic leading-relaxed text-cream md:text-[20px] lg:mx-0">
            Every Trinity bat is hand-turned from billet to barrel — steel
            compressed, pro ink dot certified, and made in the USA. One bat at
            a time.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#lineup"
              className="border-[4px] border-ink bg-red px-7 py-3.5 font-display text-[16px] tracking-[0.1em] text-cream transition-transform hover:-translate-x-px hover:-translate-y-px md:text-[18px]"
              style={{ boxShadow: '5px 5px 0 #d6a82e, 5px 5px 0 4px #0e0e0e' }}
            >
              ★ SHOP THE LINEUP ★
            </a>
            <a
              href="#"
              className="border-[3px] border-ink bg-cream px-6 py-3.5 font-display text-[16px] tracking-[0.1em] text-ink shadow-hard transition-transform hover:-translate-x-px hover:-translate-y-px md:text-[18px]"
            >
              BUILD CUSTOM
            </a>
          </div>

          {/* Trust microcopy row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
            {['PRO INK DOT', 'STEEL COMPRESSED', 'USA MADE'].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 font-display text-[11px] tracking-[0.18em] text-cream/85"
              >
                <span className="text-gold">◆</span>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Hero trading card */}
        <div className="order-2 mx-auto w-full max-w-md lg:order-2">
          <div
            className="relative bg-cream p-3"
            style={{
              boxShadow: '10px 10px 0 #0e0e0e, 10px 10px 0 4px #d6a82e',
              border: '1px solid #0e0e0e',
            }}
          >
            <div className="relative border-[3px] border-ink bg-cream">
              {/* Inner gold pinstripe */}
              <div className="pointer-events-none absolute inset-1 z-[5] border-2 border-gold" />

              {/* Corner flag */}
              <div className="absolute -left-1 top-3.5 z-[6] rotate-[-2deg] border-2 border-ink bg-red px-2.5 py-1 pr-3.5 font-display text-[13px] tracking-[0.12em] text-cream shadow-[2px_2px_0_#0e0e0e]">
                TRINITY <span className="ml-1 text-gold">'26</span>
              </div>

              {/* Team circle */}
              <div className="absolute right-3 top-3 z-[6] flex h-16 w-16 flex-col items-center justify-center rounded-full border-[3px] border-ink bg-cream shadow-[2px_2px_0_#d6a82e,4px_4px_0_#0e0e0e]">
                <div className="pointer-events-none absolute inset-[3px] rounded-full border border-gold" />
                <span className="font-display text-[9px] leading-none tracking-[0.15em] text-red">
                  PSALM
                </span>
                <span className="my-0.5 font-serif text-[22px] leading-none italic text-ink">
                  27:1
                </span>
                <span className="font-body text-[7px] font-semibold leading-none tracking-[0.15em] text-ink">
                  SELECT
                </span>
              </div>

              {/* Photo area */}
              <div
                className="relative m-2 flex aspect-[4/5] items-center justify-center overflow-hidden border border-gold-deep"
                style={{
                  background:
                    'linear-gradient(160deg, #5fc1ea 0%, #2ba6dc 50%, #1d8bbf 100%)',
                }}
              >
                <div className="pointer-events-none absolute left-[28%] top-0 z-[1] h-full w-[80px] -skew-x-[15deg] bg-gradient-to-b from-white/30 to-transparent" />
                <div className="pointer-events-none absolute right-[22%] top-0 z-[1] h-full w-[60px] skew-x-[10deg] bg-gradient-to-b from-white/20 to-transparent" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-[38%] bg-gradient-to-t from-navy/45 to-transparent" />

                <div className="relative z-[2] h-full w-full">
                  <Image
                    src="/pro-select-27-1.png"
                    alt="Pro Select PS 27:1 bat"
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 32vw"
                    className="object-contain p-5"
                  />
                </div>

                {/* Photo bottom band */}
                <div className="absolute bottom-0 left-0 right-0 z-[4] flex items-center justify-between border-t-2 border-ink bg-red px-3 py-1">
                  <span className="font-display text-[10px] tracking-[0.2em] text-cream">
                    PRO SELECT SERIES
                  </span>
                  <span className="font-display text-[10px] tracking-[0.2em] text-gold">
                    ★ MADE IN USA ★
                  </span>
                </div>
              </div>

              {/* Swallowtail ribbon banner */}
              <div className="relative z-[7] mx-6 mt-3.5 text-center">
                <div className="ribbon-banner-clip relative border-2 border-ink bg-red px-7 py-3 pb-4 font-serif text-[26px] italic leading-none text-cream shadow-[0_3px_0_#0e0e0e] [text-shadow:1px_1px_0_#0e0e0e]">
                  Pro Select PS 27:1
                </div>
              </div>

              {/* Position label */}
              <div className="mb-3.5 mt-5 text-center">
                <div className="inline-block border border-gold bg-ink px-5 py-1.5 pl-6 font-display text-[12px] tracking-[0.4em] text-cream">
                  SIGNATURE BAT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative red zigzag stripe bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-3 stripe-red-cream" />
    </section>
  );
}
