import React, { useEffect, useState } from 'react';
import CookieConsent from '@site/src/components/CookieConsent';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GA_ID = 'G-1LGGK7P1GD';
const CONSENT_KEY = 'cookie_consent';

function loadGA(): void {
  if (document.getElementById('ga-script')) return;
  const s = document.createElement('script');
  s.id = 'ga-script';
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.gtag('config', GA_ID);
}

function grantConsent(): void {
  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  loadGA();
}

export default function Root({ children }: { children: React.ReactNode }) {
  const [showBanner, setShowBanner] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(CONSENT_KEY) === null;
  });

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted') {
      grantConsent();
    }
  }, []);

  function handleAccept(): void {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    grantConsent();
    setShowBanner(false);
  }

  function handleDecline(): void {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setShowBanner(false);
  }

  return (
    <>
      {children}
      {showBanner && (
        <CookieConsent onAccept={handleAccept} onDecline={handleDecline} />
      )}
    </>
  );
}
