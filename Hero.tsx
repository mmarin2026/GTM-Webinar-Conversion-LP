import styles from './GTMPackage.module.css';

const pillars = [
  {
    icon: '⚡',
    iconBg: 'rgba(130,0,250,0.15)',
    name: 'Make Enterprise Platform',
    desc: 'Full access to Make’s flagship product with advanced AI, connectivity, governance, and security without worrying about credits.',
    tags: ['3,000+ app connectors', 'AI agents', 'MAIA (Beta)', 'SSO & ISO 27001', 'Custom functions', 'And more...'],
  },
  {
    icon: '📚',
    iconBg: 'rgba(240,36,246,0.12)',
    name: 'GTM Success Hub',
    desc: 'Exclusive pre-built content that accelerates time-to-value: use cases that tackle real-world RevOps problems, ready to deploy.',
    tags: ['RevOps use cases', 'MAIA prompts', 'Building blocks', 'Step-by-step guides'],
  },
  {
    icon: '🛡️',
    iconBg: 'rgba(0,212,168,0.1)',
    name: 'Premium Support',
    desc: 'From 24/7 support for business-critical processes to dedicated automation experts, here to make sure you get to value fast.',
    tags: ['24/7 premium support', 'Dedicated account manager', 'Dedicated workshops', "Make’s expert-led implementation sessions"],
  },
];

export default function GTMPackage() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>The GTM Package</p>
        <h2 className={styles.title}>Everything your GTM team needs to automate with AI at scale</h2>
        <p className={styles.sub}>
          Platform access, building blocks of AI agents and automation for RevOps, and dedicated
          support, bundled into one package designed for GTM organizations.
        </p>
      </div>

      <div className={styles.grid}>
        {pillars.map((p) => (
          <div key={p.name} className={styles.pillar}>
            <div className={styles.pillarIcon} style={{ background: p.iconBg }}>
              {p.icon}
            </div>
            <div className={styles.pillarName}>{p.name}</div>
            <p className={styles.pillarDesc}>{p.desc}</p>
            <div className={styles.tags}>
              {p.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
