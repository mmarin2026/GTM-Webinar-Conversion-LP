import Link from 'next/link';
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
  'Native connectors for Salesforce, HubSpot, Outreach, Salesloft, Marketo, Gong, and 3,000+ more',
  'Automate lead routing, MQL handoffs, and stage transitions — no more Slack pings between teams',
  'Keep CRM data clean automatically — enrich, deduplicate, and sync records in real time',
  'Build and own your automation logic — no black-box vendor workflows, no dev dependency',
  'SOC2 Type II & GDPR compliant — enterprise-grade security for sensitive pipeline data',
];

const stats = [
  { num: '40', unit: '%', label: 'Faster lead response time' },
  { num: '5',  unit: '×', label: 'Less time on manual reporting' },
  { num: '90', unit: '%', label: 'Reduction in CRM data errors' },
];

const logos = ['Spotify', 'BNY', 'Bolt', 'BambooHR', 'FINN'];

export default function Hero() {
  return (
    <section>
      <div className={styles.hero}>
        {/* ── Left ── */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Revenue Operations
          </div>

          <h1 className={styles.title}>
            Stop losing revenue to<br />
            <em>gaps between your GTM tools</em>
          </h1>

          <p className={styles.sub}>
            Make connects your CRM, MAP, SEP, and billing systems so leads route
            instantly, handoffs are automatic, and your pipeline data is always
            clean — without waiting on engineering.
          </p>

          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNum}>
                  {s.num}<span>{s.unit}</span>
                </div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          <ul className={styles.valueProps}>
            {valueProps.map((v) => (
              <li key={v}>{CHECK}{v}</li>
            ))}
          </ul>

          <div className={styles.trustLogos}>
            <span className={styles.trustLabel}>Trusted by RevOps teams at</span>
            <div className={styles.pills}>
              {logos.map((l) => <span key={l} className={styles.pill}>{l}</span>)}
            </div>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div id="form" className={styles.formPanel}>
          <h2 className={styles.formTitle}>Talk to a RevOps specialist</h2>
          <p className={styles.formSub}>
            Tell us about your revenue stack and we&apos;ll show you exactly how
            to close the gaps — within one business day.
          </p>
          <TallyForm />
        </div>
      </div>
    </section>
  );
}
