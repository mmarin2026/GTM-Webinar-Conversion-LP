.wrapper { padding: 64px 40px; max-width: 1280px; margin: 0 auto; }

.eyebrow {
  text-align: center;
  font-size: 12px;
  color: var(--text-dimmer);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 32px;
}

.track { overflow: hidden; }

.inner {
  display: flex;
  gap: 48px;
  align-items: center;
  animation: scrollX 30s linear infinite;
}
.inner:hover { animation-play-state: paused; }

.item {
  padding: 10px 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-dimmer);
  white-space: nowrap;
  transition: color 0.2s, border-color 0.2s;
  flex-shrink: 0;
}
.item:hover { color: var(--text-dim); border-color: rgba(255, 255, 255, 0.12); }

@media (max-width: 900px) { .wrapper { padding: 48px 24px; } }
