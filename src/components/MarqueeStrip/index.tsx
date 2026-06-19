import styles from './styles.module.css';

function StarIcon() {
  return (
    <div className={styles.iconWrap}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        viewBox="0 0 110 110"
        fill="none"
        aria-hidden="true"
        height="34"
        className={styles.icon}
      >
        <path
          d="M64.9524 0V41.7177L103.016 27.5L110 48.2653L71.9365 61.5476L95.5079 96.7177L78.2222 110L55.3492 73.5204L32.3016 110L14.4921 96.7177L38.4127 61.5476L0 48.2653L6.98413 27.5L44.6984 42.0918V0H64.9524Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

interface MarqueeStripProps {
  text?: string;
  repeat?: number;
  duration?: number;
}

export default function MarqueeStrip({
  text = 'greenmask',
  repeat = 10,
  duration = 40,
}: MarqueeStripProps) {
  const items = Array.from({ length: repeat }, (_, i) => (
    <div key={i} className={styles.loopPair}>
      <StarIcon />
      <div className={styles.loopText}>{text}</div>
    </div>
  ));

  return (
    <div className={styles.marquee}>
      <div
        className={styles.track}
        style={{ animationDuration: `${duration}s` }}
      >
        {items}
      </div>
    </div>
  );
}
