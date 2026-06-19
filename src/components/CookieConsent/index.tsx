import React from 'react';
import styles from './styles.module.css';

interface Props {
  onAccept: () => void;
  onDecline: () => void;
}

export default function CookieConsent({ onAccept, onDecline }: Props) {
  return (
    <div className={styles.banner} role="dialog" aria-modal="false" aria-label="Cookie consent">
      <div className={styles.inner}>
        <p className={styles.text}>
          We use cookies to analyse site traffic and improve your experience.
          Your data is never sold. See our{' '}
          <a
            href="/privacy-policy"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          .
        </p>
        <div className={styles.actions}>
          <button className={styles.declineButton} onClick={onDecline} type="button">
            Decline
          </button>
          <button className={styles.acceptButton} onClick={onAccept} type="button">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
