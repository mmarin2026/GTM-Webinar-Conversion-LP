.section { padding: 100px 40px; max-width: 1280px; margin: 0 auto; }

.header { text-align: center; margin-bottom: 64px; }

.eyebrow {
  font-size: 11px; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--pink); margin-bottom: 14px;
}

.title {
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
  max-width: 600px;
  margin: 0 auto;
}

.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s, transform 0.3s;
  cursor: default;
}
.card:hover { border-color: var(--border-bright); transform: translateY(-3px); }
.card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(240, 36, 246, 0.4), transparent);
  opacity: 0; transition: opacity 0.3s;
}
.card:hover::before { opacity: 1; }

.icon {
  width: 48px; height: 48px;
  border-radius: 12px;
  background: rgba(108, 71, 255, 0.12);
  border: 1px solid rgba(108, 71, 255, 0.2);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 20px;
  font-size: 22px;
}

.cardTitle {
  font-size: 18px; font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
}

.cardBody { font-size: 14px; color: var(--text-dim); line-height: 1.65; }

@media (max-width: 900px) {
  .section { padding: 64px 24px; }
  .grid { grid-template-columns: 1fr; }
}
