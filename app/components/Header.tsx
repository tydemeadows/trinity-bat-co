'use client';

import { useState } from 'react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ['BATS', 'CUSTOM', 'TEAMS', 'MISSION', 'LEARN'];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b-4 border-ink bg-cream px-4 py-3 shadow-[0_4px_0_#d6a82e] md:px-6 md:py-3.5">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-ink bg-red font-display text-[22px] text-cream shadow-[2px_2px_0_#d6a82e,4px_4px_0_#0e0e0e] md:h-11 md:w-11 md:text-[26px]">
          T
        </div>
        <div className="font-display text-[20px] leading-none text-ink md:text-[24px]">
          TRINITY
          <span className="mt-1 block font-body text-[9px] font-semibold tracking-[0.2em] text-red md:text-[10px]">
            BAT CO. · EST. 2010
          </span>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden gap-1 font-display text-sm tracking-[0.08em] md:flex">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="border-2 border-transparent px-3.5 py-2 text-ink transition hover:border-ink hover:bg-sky hover:text-cream"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Cart + mobile toggle */}
      <div className="flex items-center gap-2">
        <button className="cursor-pointer border-[3px] border-ink bg-ink px-3 py-2 font-display text-[12px] tracking-[0.1em] text-cream shadow-[3px_3px_0_#d8232a] transition hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_#d8232a] md:px-4 md:text-[14px]">
          BAG · 0
        </button>

        <button
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center border-[3px] border-ink bg-cream md:hidden"
        >
          <span className="font-display text-2xl leading-none text-ink">
            {mobileOpen ? '×' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full border-b-4 border-ink bg-cream md:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="border-b-2 border-ink/10 px-4 py-3 font-display text-[14px] tracking-[0.08em] text-ink transition hover:bg-sky hover:text-cream"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
