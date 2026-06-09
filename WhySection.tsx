'use client';

import { useEffect, useRef } from 'react';

export default function TallyForm() {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!ref.current || !e.data) return;
      const d: Record<string, unknown> =
        typeof e.data === 'string'
          ? (() => { try { return JSON.parse(e.data); } catch { return {}; } })()
          : e.data;
      const h = d['height'];
      if (typeof h === 'number' && h > 200) {
        ref.current.style.height = `${h + 40}px`; // +40px safety buffer
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <iframe
      ref={ref}
      src="https://tally.so/embed/Nppz9W?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height={1400}
      style={{ display: 'block', width: '100%', border: 0 }}
      title="Talk to Sales form"
    />
  );
}
