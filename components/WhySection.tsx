'use client';

import { useEffect, useRef } from 'react';
import styles from './WhySection.module.css';

const cards = [
  { icon: '⚡', title: 'Instant lead routing & handoffs', body: 'Route inbound MQLs to the right rep in seconds based on territory, company size, or score — and trigger Outreach or Salesloft sequences automatically. No manual triage, no leads left sitting.' },
  { icon: '🔁', title: 'Always-clean CRM data', body: 'Enrich contacts via Clearbit or Apollo, deduplicate records, and keep Salesforce or HubSpot in sync with your entire stack in real time. Forecasts you can trust start with data you can trust.' },
  { icon: '📊', title: 'Revenue reporting on autopilot', body: 'Pull pipeline data from your CRM, blend it with marketing attribution from your MAP, and push it to your BI tool — on a schedule. No more Friday afternoon spreadsheet marathons.' },
  { icon: '🔗', title: 'Own your tech stack logic', body: 'Build automation that mirrors your exact GTM motion — custom routing rules, multi-step approval flows, quote-to-cash triggers — without black-box vendor workflows or a six-week engineering backlog.' },
];

export default function WhySection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) (e.target as HTMLElement).style.opacity = '1',
          (e.target as HTMLElement).style.transform = 'translateY(0)';
      }),
      { threshold: 0.1 }
    );
    cardRefs.current.forEach((c) => c && obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Why RevOps teams choose Make</p>
        <h2 className={styles.title}>One platform to run your entire revenue cycle</h2>
      </div>
      <div className={styles.grid}>
        {cards.map((c, i) => (
          <div
            key={c.title}
            className={styles.card}
            ref={(el) => { cardRefs.current[i] = el; }}
            style={{ opacity: 0, transform: 'translateY(24px)', transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s` }}
          >
            <div className={styles.icon}>{c.icon}</div>
            <div className={styles.cardTitle}>{c.title}</div>
            <p className={styles.cardBody}>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
