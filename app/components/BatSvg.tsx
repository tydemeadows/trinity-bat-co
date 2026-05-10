type Props = {
  size?: 'card' | 'hero';
  barrelLabel?: string;
};

export function BatSvg({ size = 'card', barrelLabel = 'PS 27:1' }: Props) {
  const isHero = size === 'hero';

  return (
    <svg
      viewBox="0 0 400 600"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      style={{ filter: 'drop-shadow(4px 4px 0 rgba(0,0,0,0.4))' }}
    >
      <defs>
        <linearGradient id={`batBarrel-${size}-${barrelLabel}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0e0e0e" />
          <stop offset="50%" stopColor="#1f1f1f" />
          <stop offset="100%" stopColor="#0e0e0e" />
        </linearGradient>
        <linearGradient id={`batHandle-${size}-${barrelLabel}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b6f4a" />
          <stop offset="50%" stopColor="#a88654" />
          <stop offset="100%" stopColor="#8b6f4a" />
        </linearGradient>
      </defs>

      {/* Barrel */}
      <path
        d="M 165 50 Q 145 60 145 90 L 145 280 Q 145 310 155 330 L 165 350 Q 175 360 195 360 L 205 360 Q 225 360 235 350 L 245 330 Q 255 310 255 280 L 255 90 Q 255 60 235 50 Z"
        fill={`url(#batBarrel-${size}-${barrelLabel})`}
        stroke="#0e0e0e"
        strokeWidth="2"
      />

      {/* Cup */}
      <ellipse cx="200" cy="55" rx="32" ry="6" fill="#000" opacity="0.7" />

      {/* Logo on barrel */}
      <text
        x="200"
        y="180"
        textAnchor="middle"
        fill="#faf3e0"
        fontFamily="Anton, sans-serif"
        fontSize={isHero ? '20' : '18'}
        letterSpacing="2"
      >
        TRINITY
      </text>
      <text
        x="200"
        y={isHero ? '208' : '204'}
        textAnchor="middle"
        fill="#d6a82e"
        fontFamily="Yeseva One, serif"
        fontSize={isHero ? '16' : '14'}
        fontStyle="italic"
      >
        {barrelLabel}
      </text>

      {/* Handle */}
      <path
        d="M 155 350 L 175 530 Q 175 545 185 548 L 215 548 Q 225 545 225 530 L 245 350 Z"
        fill={`url(#batHandle-${size}-${barrelLabel})`}
        stroke="#0e0e0e"
        strokeWidth="2"
      />

      {/* Knob */}
      <ellipse cx="200" cy="552" rx="34" ry="10" fill="#5c3a1e" stroke="#0e0e0e" strokeWidth="2" />
      <ellipse cx="200" cy="548" rx="34" ry="10" fill="#8b6f4a" />
    </svg>
  );
}
