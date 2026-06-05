export default function MakeLogo() {
  return (
    <svg
      width="124"
      height="34"
      viewBox="0 0 124 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Make"
    >
      <defs>
        <linearGradient id="mg" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#9747FF" />
          <stop offset="100%" stopColor="#F024F6" />
        </linearGradient>
      </defs>
      <rect x="1"  y="2" width="10" height="28" rx="2.5" fill="url(#mg)" transform="skewX(-11)" />
      <rect x="16" y="5" width="10" height="25" rx="2.5" fill="url(#mg)" transform="skewX(-11)" />
      <rect x="31" y="8" width="10" height="22" rx="2.5" fill="url(#mg)" transform="skewX(-11)" />
      <text
        x="50"
        y="27"
        fontFamily="'Satoshi','Inter',system-ui,sans-serif"
        fontSize="27"
        fontWeight="800"
        fill="#ffffff"
        letterSpacing="-0.8"
      >
        make
      </text>
    </svg>
  );
}
