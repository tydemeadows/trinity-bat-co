type Variant = 'modern' | 'rugged' | 'refined';

type Props = {
  variant: Variant;
};

const banners: Record<Variant, { label: string; className: string }> = {
  modern: {
    label: 'MODERN DTC EXPERIENCE',
    className:
      'bg-[linear-gradient(90deg,#22d3ee_0%,#2563eb_50%,#0f172a_100%)] text-white',
  },
  rugged: {
    label: 'HERITAGE WORKSHOP EDITION',
    className:
      'bg-[linear-gradient(90deg,#8b5e3c_0%,#5f4632_55%,#2b2119_100%)] text-[#f5e8d2]',
  },
  refined: {
    label: 'REFINED EDITORIAL PRESENTATION',
    className:
      'bg-[linear-gradient(90deg,#e5e7eb_0%,#cbd5e1_55%,#94a3b8_100%)] text-[#111827]',
  },
};

export function VariantTopBanner({ variant }: Props) {
  const banner = banners[variant];

  return (
    <div className={`border-b-2 border-ink px-4 py-2 text-center font-display text-[11px] tracking-[0.2em] md:text-[12px] ${banner.className}`}>
      {banner.label}
    </div>
  );
}