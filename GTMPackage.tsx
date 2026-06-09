import Link from 'next/link';
import styles from './Footer.module.css';

const links = [
  { label: 'Privacy & GDPR', href: 'https://www.make.com/en/privacy-and-gdpr' },
  { label: 'Terms',          href: 'https://www.make.com/en/terms-and-conditions' },
  { label: 'Security',       href: 'https://www.make.com/en/security' },
  { label: 'Status',         href: 'https://status.make.com' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© 2026 Celonis, Inc. All rights reserved.</span>
      <div className={styles.links}>
        {links.map((l) => (
          <Link key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
