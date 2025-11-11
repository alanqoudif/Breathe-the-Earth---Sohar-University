export function HeroIllustration() {
  return (
    <figure
      className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-3xl border border-emerald-100 bg-white p-4 sm:h-64 lg:h-72"
      aria-label="ملصق بصري يجسّد الأرض والطبيعة"
    >
      <svg
        viewBox="0 0 600 320"
        role="img"
        aria-hidden="true"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0e573f" />
            <stop offset="100%" stopColor="#0b2d24" />
          </linearGradient>
          <linearGradient id="earth" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8BC6EC" />
            <stop offset="100%" stopColor="#4CAF50" />
          </linearGradient>
          <linearGradient id="hill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0c3d2b" />
            <stop offset="100%" stopColor="#08251b" />
          </linearGradient>
          <linearGradient id="hill-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#164a33" />
            <stop offset="100%" stopColor="#0a2c20" />
          </linearGradient>
          <clipPath id="globe">
            <circle cx="300" cy="130" r="90" />
          </clipPath>
        </defs>

        <rect width="600" height="320" fill="url(#sky)" rx="32" />

        <g opacity="0.55" fill="#0f7f5f">
          <circle cx="120" cy="60" r="6" />
          <circle cx="180" cy="40" r="4" />
          <circle cx="420" cy="50" r="5" />
          <circle cx="470" cy="80" r="3" />
        </g>

        <path
          d="M0 240 Q110 210 210 240 T420 240 T600 240 L600 320 L0 320 Z"
          fill="url(#hill)"
        />
        <path
          d="M0 260 Q140 230 260 260 T460 260 T600 260 L600 320 L0 320 Z"
          fill="url(#hill-2)"
        />

        <g clipPath="url(#globe)">
          <rect x="210" y="40" width="180" height="180" fill="url(#earth)" />
          <path
            d="M246 58 Q240 86 264 100 T288 134 Q286 154 270 164 Q254 172 244 188 T240 212 Q278 222 316 208 T352 164 Q340 142 324 132 T294 112 Q276 104 272 86 Q268 68 246 58 Z"
            fill="#0f6d4f"
          />
          <path
            d="M320 84 Q332 100 360 102 T384 116 Q390 128 384 138 Q378 148 362 154 T330 168 Q324 150 334 130 T320 84 Z"
            fill="#0f6d4f"
          />
          <path
            d="M300 168 Q316 188 320 210 Q322 224 308 236 Q294 248 276 240 Q258 232 254 214 Q250 196 260 182 T300 168 Z"
            fill="#0f6d4f"
          />
        </g>

        <circle
          cx="300"
          cy="130"
          r="92"
          fill="none"
          stroke="#bde5ff"
          strokeOpacity="0.4"
          strokeWidth="2"
        />

        <g fill="#d9f5ff" opacity="0.8">
          <path d="M110 110 Q120 100 140 108 Q120 118 110 110 Z" />
          <path d="M450 100 Q470 88 490 102 Q470 110 450 100 Z" />
          <path d="M420 140 Q435 126 460 136 Q438 148 420 140 Z" />
        </g>

        <text
          x="300"
          y="250"
          textAnchor="middle"
          fontSize="28"
          fill="#f0fff4"
          fontFamily="Cairo, sans-serif"
        >
          تنفّس الأرض
        </text>
        <text
          x="300"
          y="278"
          textAnchor="middle"
          fontSize="14"
          fill="#d2e8ff"
          fontFamily="Roboto, sans-serif"
          letterSpacing="4"
        >
          BREATHE THE EARTH
        </text>
      </svg>
    </figure>
  );
}
