import styles from './LogosStrip.module.css';

const logos = ['Spotify', 'BNY Mellon', 'Bolt', 'BambooHR', 'FINN', 'Fonds Finanz', 'Tally', 'Gojob'];

export default function LogosStrip() {
  // Duplicate for seamless infinite scroll
  const all = [...logos, ...logos];
  return (
    <div className={styles.wrapper}>
      <p className={styles.eyebrow}>Powering RevOps teams at fast-growing companies</p>
      <div className={styles.track}>
        <div className={styles.inner}>
          {all.map((l, i) => (
            <span key={i} className={styles.item}>{l}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
