import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './about.module.css';

// Greenmask asterisk star SVG used as brand icon element
function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      aria-hidden="true"
      className={styles.valueCardSvg}
    >
      <path
        d="M20.0762 0V12.8946L31.8413 8.5L34 14.9184L22.2349 19.0238L29.5206 29.8946L24.1778 34L17.1079 22.7245L9.98413 34L4.47936 29.8946L11.873 19.0238L0 14.9184L2.15873 8.5L13.8159 13.0102V0H20.0762Z"
        fill="var(--color-dark)"
      />
    </svg>
  );
}

function HeroSection() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContain}>
        {/* 12-col grid layout */}
        <div className={styles.heroGrid}>

          {/* Row 1: inner wrap — 3-col GIF + 6-col text + 3-col empty */}
          <div className={styles.heroInnerWrap}>

            {/* 3-col: GIF with overlay */}
            <div className={styles.heroVisualWrap}>
              <div className={styles.heroVisualRatio}>
                <div className={styles.heroVisualInner}>
                  <div className={styles.heroVisualBg} />
                  <img
                    src="https://cdn.prod.website-files.com/6682e8b45d941e31f8e1efcc/66d6c11958f75ce77e80fd1b_tenor%20(2)%20(2).gif"
                    loading="eager"
                    alt="information-security"
                    className={styles.heroGif}
                  />
                </div>
              </div>
            </div>

            {/* 6-col: paragraph text */}
            <div className={styles.heroText}>
              <p>
                Greenmask was founded in 2023 with the launch of our Greenmask
                utility, which is widely adopted for database anonymization and
                staging environment creation. We are passionate about
                open-source and firmly believe that the future lies in
                open-source projects.
              </p>
            </div>

          </div>

          {/* Row 2: full-width heading */}
          <div className={styles.heroTitleWrap}>
            <h2 className={styles.heroTitle}>
              Pioneering Future-Ready —{' '}
              <strong>Security</strong>
              {'   '}and{' '}
              <strong>Database Solutions</strong>
            </h2>
          </div>

        </div>
      </div>
    </header>
  );
}

function MissionSection() {
  return (
    <section className={styles.mission}>
      <div className={styles.missionContain}>
        <div className={styles.missionLayout}>
          <div className={styles.missionVisual}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M64.9524 0V41.7177L103.016 27.5L110 48.2653L71.9365 61.5476L95.5079 96.7177L78.2222 110L55.3492 73.5204L32.3016 110L14.4921 96.7177L38.4127 61.5476L0 48.2653L6.98413 27.5L44.6984 42.0918V0H64.9524Z"
                fill="var(--color-light)"
              />
            </svg>
          </div>
          <div className={styles.missionContent}>
            <div className={styles.missionSubh}>
              <p>our mission</p>
            </div>
            <div className={styles.missionTextWrap}>
              <h2 className={styles.missionText}>
                Greenmask is focused on building a dynamic staging environment
                that integrates test data management with tools for efficient
                test environment delivery and management.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const values = [
  {
    title: 'User feedback',
    description:
      'We build Greenmask and future solutions based on clear and continuous feedback from our users.',
  },
  {
    title: 'Data quality',
    description:
      'Data is not just a collection of bytes. It carries relationships, dependencies, and more. Our goal is to deliver services that ensure consistency and provide the highest quality data.',
  },
  {
    title: 'Experienced team',
    description:
      'Our team consists of experts across various fields, including DBAs, software engineers, developers, UX/UI designers, and analysts.',
  },
  {
    title: 'Open source',
    description:
      'We release our products under open-source licenses and actively contribute to other open-source projects.',
  },
  {
    title: 'Community responsibility',
    description:
      'We take deep responsibility for supporting our open-source projects and our users. Our software is well-maintained, and the community actively shapes the path of its development.',
  },
];

function ValuesSection() {
  return (
    <section className={styles.values}>
      <div className={styles.valuesInner}>
        <p className={styles.sectionLabel}>Our <span className={styles.sectionLabelAccent}>values</span></p>
        <div className={styles.valuesGrid}>
          {values.map((value) => (
            <div key={value.title} className={styles.valueCard}>
              <div className={styles.valueCardIcon}>
                <StarIcon />
              </div>
              <div className={styles.valueCardContent}>
                <h3 className={styles.valueCardTitle}>{value.title}</h3>
                <p className={styles.valueCardDescription}>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaInner}>
        <Link to="/docs/playground" className={styles.ctaButton}>
          Get started
          <svg
            className={styles.ctaArrow}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default function About(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`About — ${siteConfig.title}`}
      description="Learn about Greenmask — our mission, values, and the team behind the open source data anonymization platform."
    >
      <Head>
        <meta name="keywords" content="greenmask, open source, data anonymization, Enterprise support, Open-Source, PostgreSQL anonymization, test data management, compliance, security, agentic pipeline, development cycle" />
      </Head>
      <main className={styles.pageMain}>
        <HeroSection />
        <MissionSection />
        <ValuesSection />
        <CTASection />
      </main>
    </Layout>
  );
}
