import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.glow} aria-hidden="true" />
        <h2 className={styles.title}>Ready to close the gaps in your revenue cycle?</h2>
        <p className={styles.sub}>
          Talk to a Make RevOps specialist. We&apos;ll map your current GTM stack and show
          you exactly where automation speeds up pipeline, learning, closing, and NRR.
          In short: we accelerate your revenue generation. In under 30 minutes.
        </p>
        <div className={styles.actions}>
          <Link href="#form" className={styles.primary}>
            Request demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 5l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
