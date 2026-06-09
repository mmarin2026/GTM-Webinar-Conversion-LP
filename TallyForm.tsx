.section { padding: 100px 40px; max-width: 1280px; margin: 0 auto; }

.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }

.eyebrow {
  font-size: 11px; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--pink); margin-bottom: 14px;
}

.title {
  font-size: clamp(28px, 3vw, 42px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 20px;
}

.body { font-size: 15px; color: var(--text-dim); line-height: 1.7; margin-bottom: 32px; }

.features { list-style: none; display: flex; flex-direction: column; gap: 12px; }
.features li {
  display: flex; gap: 12px; align-items: flex-start;
  font-size: 14px; color: var(--text-dim);
}

.check {
  width: 20px; height: 20px; flex-shrink: 0;
  background: rgba(240, 36, 246, 0.12);
  border: 1px solid rgba(240, 36, 246, 0.25);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin-top: 1px;
}

/* Scenario visual */
.visual {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 32px;
  position: relative;
  overflow: hidden;
}
.visual::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(108,71,255,0.06) 0%, rgba(240,36,246,0.04) 100%);
}

.scenario { display: flex; flex-direction: column; position: relative; z-index: 1; }

.node {
  display: flex; align-items: center; gap: 14px;
  padding: 14px 18px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: transform 0.2s;
}
.node:hover { transform: translateX(4px); }

.nodeIcon {
  width: 34px; height: 34px;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; flex-shrink: 0;
}
.nodeName { font-size: 13px; font-weight: 600; color: var(--text); }
.nodeApp  { font-size: 11px; color: var(--text-dimmer); }

.connector {
  width: 2px; height: 20px;
  background: linear-gradient(to bottom, var(--purple), var(--pink));
  margin: 4px 0 4px 24px;
  border-radius: 2px;
}

.badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(240,36,246,0.1);
  border: 1px solid rgba(240,36,246,0.2);
  border-radius: 100px; padding: 5px 12px;
  font-size: 11px; font-weight: 600;
  color: var(--pink);
  margin-top: 12px;
}
.badgeDot {
  width: 5px; height: 5px;
  border-radius: 50%; background: var(--pink);
  animation: pulse 2s infinite;
}

@media (max-width: 900px) {
  .section { padding: 64px 24px; }
  .grid { grid-template-columns: 1fr; }
}
