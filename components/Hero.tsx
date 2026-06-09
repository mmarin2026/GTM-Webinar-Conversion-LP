import TallyForm from './TallyForm';
import styles from './Hero.module.css';

const CHECK = (
  <span className={styles.check} aria-hidden="true">
    <svg viewBox="0 0 10 10" fill="none" width="10" height="10">
      <path d="M2 5L4 7L8 3" stroke="#F024F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const valueProps = [
  'Make Enterprise: 3,000+ connectors, MAIA AI, and enterprise-grade governance',
  'GTM Success Hub: Blueprints for AI agents and automation for RevOps, building blocks and recipes for accelerated time-to-value',
  '24/7 premium support, dedicated account manager, and access to dedicated automation experts',
  'SOC 2 Type II, ISO 27001, and GDPR compliant. Enterprise-grade security for sensitive pipeline data.',
  'Full integration with existing AI tools for governed system access, cost control, and visibility across your organization',
];

const ratings = [
  { platform: 'Capterra', score: '4.8', count: '404', logo: 'https://images.ctfassets.net/un655fb9wln6/4mVJAYXotWJeKG66H1xcLo/52b0a64dd7ee9104df1c8abd545e3467/capterra-1_1.svg' },
  { platform: 'G2',       score: '4.7', count: '238', logo: 'https://images.ctfassets.net/un655fb9wln6/6m5yU9NimAwnAuEZRPZgVU/c513be077aad5437318b221fcd61a7fa/g2-reviews_1.svg' },
  { platform: 'GetApp',   score: '4.8', count: '404', logo: 'https://images.ctfassets.net/un655fb9wln6/lNwhYnHtxjylTAAJbV5b8/ebb141a29cd8ad5dc38ca6edcc8e2cdb/Frame_2147238296.svg' },
  { platform: 'Gartner',  score: '4.6', count: '20',  logo: 'https://images.ctfassets.net/un655fb9wln6/1E2wzFWbHDQTCj22j5ZOU4/b86d738c2aa480a2852d05fb5edcc152/IT_1.svg' },
];

const STAR = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#FBBF24" aria-hidden="true">
    <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.09L6 8.02 3.22 9.55l.53-3.09L1.5 4.27l3.11-.45L6 1z" />
  </svg>
);

export default function Hero() {
  return (
    <section>
      <div className={styles.hero}>
        {/* ── Left ── */}
        <div className={styles.left}>
          <h1 className={styles.title}>
            The AI automation platform<br />
            <em>built for revenue teams</em>
          </h1>

          <p className={styles.sub}>
            The GTM Package gives your team Make&apos;s visual automation platform, AI agents
            pre-built for your revenue stack, and dedicated support to deploy your automation
            stack fast, from MQL to closed-won, no engineering required.
          </p>

          <ul className={styles.valueProps}>
            {valueProps.map((v) => (
              <li key={v}>{CHECK}{v}</li>
            ))}
          </ul>

          {/* Ratings strip */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '28px' }}>
            {ratings.map((r) => (
              <div key={r.platform} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src={r.logo} alt={r.platform} style={{ height: '20px', width: 'auto', opacity: 0.8 }} />
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                  {STAR}
                  {r.score} <span style={{ opacity: 0.5 }}>({r.count})</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: form ── */}
        <div id="form" className={styles.formPanel}>
          <h2 className={styles.formTitle}>Talk to a RevOps specialist</h2>
          <p className={styles.formSub}>
            Tell us about your revenue stack and we&apos;ll show you exactly how to close the gaps.
          </p>
          <TallyForm />
        </div>
      </div>
    </section>
  );
}

