import Image from 'next/image';

export function PlayerProfile() {
  return (
    <section className="relative px-4 py-14 md:px-6 md:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 border-[3px] border-ink bg-gold px-3.5 py-1.5 font-display text-[12px] tracking-[0.18em] text-ink shadow-hard">
            <span className="text-red">★</span>
            PLAYER SPOTLIGHT
            <span className="text-red">★</span>
          </div>
        </div>

        <article
          className="relative mx-auto max-w-5xl bg-cream p-3 md:p-4"
          style={{
            boxShadow: '10px 10px 0 #0e0e0e, 10px 10px 0 4px #d6a82e',
            border: '1px solid #0e0e0e',
          }}
        >
          <div className="relative border-[3px] border-ink bg-cream p-2 md:p-3">
            <div className="pointer-events-none absolute inset-1 z-[1] border border-gold" />

            <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden border-2 border-ink bg-sky/25">
                <div className="pointer-events-none absolute inset-0 z-[1] bg-[repeating-linear-gradient(45deg,rgba(214,168,46,0.18)_0,rgba(214,168,46,0.18)_10px,transparent_10px,transparent_20px)]" />
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/player-adrain.jpg"
                    alt="Featured Trinity player"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                <div className="absolute left-2 top-2 z-[2] rotate-[-2deg] border-2 border-ink bg-red px-2.5 py-1 font-display text-[10px] tracking-[0.15em] text-cream shadow-[2px_2px_0_#0e0e0e]">
                  TRINITY '26
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-[2] border-t-2 border-ink bg-ink px-3 py-1.5">
                  <p className="font-display text-[10px] tracking-[0.18em] text-gold">
                    PRO INK DOT CERTIFIED
                  </p>
                </div>
              </div>

              <div className="relative z-[2] flex flex-col justify-center border-2 border-ink bg-paper p-4 md:p-6">
                <div className="mb-3 inline-flex w-fit items-center border-2 border-ink bg-red px-2 py-1 font-display text-[10px] tracking-[0.15em] text-cream">
                  1990s EDITION CARD
                </div>

                <h3 className="font-display text-[36px] leading-[0.92] text-ink md:text-[48px] [text-shadow:2px_2px_0_#d6a82e]">
                  ADRAIN
                  <span className="block font-serif text-[28px] italic text-red md:text-[36px]">
                    GONZALEZ
                  </span>
                </h3>

                <p className="mt-3 max-w-xl font-body text-[16px] leading-relaxed text-ink/85">
                  Signature feel. Big-league balance. The PS 27:1 profile was
                  built for hitters who want whip through the zone without
                  losing barrel authority.
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="border-2 border-ink bg-cream px-3 py-2 text-center">
                    <div className="font-display text-[10px] tracking-[0.14em] text-ink/65">
                      MODEL
                    </div>
                    <div className="font-display text-[16px] text-red">PS 27:1</div>
                  </div>
                  <div className="border-2 border-ink bg-cream px-3 py-2 text-center">
                    <div className="font-display text-[10px] tracking-[0.14em] text-ink/65">
                      FEEL
                    </div>
                    <div className="font-display text-[16px] text-red">BALANCED</div>
                  </div>
                  <div className="border-2 border-ink bg-cream px-3 py-2 text-center">
                    <div className="font-display text-[10px] tracking-[0.14em] text-ink/65">
                      WOOD
                    </div>
                    <div className="font-display text-[16px] text-red">BIRCH</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}