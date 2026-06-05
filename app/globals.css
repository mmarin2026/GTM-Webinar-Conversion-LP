*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #220041;
  --bg2: #2a0050;
  --bg3: #300060;
  --border: rgba(255, 255, 255, 0.07);
  --border-bright: rgba(240, 36, 246, 0.35);
  --purple: #8200fa;
  --purple-light: #a040fb;
  --pink: #f024f6;
  --text: #ffffff;
  --text-dim: rgba(255, 255, 255, 0.6);
  --text-dimmer: rgba(255, 255, 255, 0.35);
  --card: rgba(255, 255, 255, 0.04);
  --radius: 16px;
  --radius-sm: 10px;
  --btn-gradient: linear-gradient(rgba(25, 29, 32, 0) 0%, rgba(25, 29, 32, 0.2) 100%),
    linear-gradient(90deg, #8200fa, #f024f6);
  --btn-shadow: 0 0 28px -6px rgba(176, 45, 233, 0.75);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Satoshi', 'Inter', system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.85); }
}

@keyframes scrollX {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
