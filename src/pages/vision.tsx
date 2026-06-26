import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './vision.module.css';

const principles = [
  'Stateless architecture',
  'In-flight anonymization',
  'No persistent storage of raw production datasets',
  'Production-like development workflows',
  'Subset-oriented data pipelines',
  'Extensible transformation system',
  'Infrastructure and automation friendly',
];

const features = [
  {
    title: 'Data Anonymization',
    description:
      'Transform sensitive production data during logical dump workflows using configurable masking and transformation pipelines.',
    illustration: '/img/vision/card-anonymization.svg',
  },
  {
    title: 'Test Data Management',
    description:
      'Create secure production-like datasets for development, testing, staging, CI pipelines, and ephemeral environments.',
    illustration: '/img/vision/card-tdm.svg',
  },
  {
    title: 'Subsetting',
    description:
      'Extract only the required portion of production data while preserving relational consistency.',
    illustration: '/img/vision/card-subsetting.svg',
  },
  {
    title: 'Synthetic Data Generation',
    description:
      'Generate realistic synthetic values and replacement datasets for non-production environments.',
    illustration: '/img/vision/card-synthetic.svg',
  },
  {
    title: 'Secure Development Workflows',
    description:
      'Reduce the operational and security risks associated with long-lived raw production copies in lower-trust environments.',
    illustration: '/img/vision/card-secure.svg',
  },
];

const futureDirections = [
  'Test Data Management (TDM)',
  'In-flight anonymization',
  'Ephemeral environments',
  'API-first infrastructure workflows',
  'AI-assisted development workflows',
  'DBaaS and infrastructure integrations',
];

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroHeader}>
          {/* Full-width justified heading with brand-green accent words */}
          <div className={styles.heroTitleWrap}>
            <h1 className={styles.heroTitle}>
              Secure, <strong>production-like</strong> development workflows —
              the open-source <strong>data platform</strong> vision
            </h1>
          </div>

          {/* Description: 2-col grid, text in the right column */}
          <div className={styles.heroDescriptionWrap}>
            <div className={styles.heroDescriptionEmpty} />
            <div className={styles.heroDescriptionText}>
              <p className={styles.heroSubtitle}>
                Open-source Test Data Management and Data Anonymization platform
                focused on enabling organizations to safely use realistic data in
                development, testing, staging, and AI-assisted engineering
                environments without exposing sensitive information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function PrinciplesSection() {
  return (
    <section className={styles.principles}>
      <div className={styles.container}>
        <p className={styles.sectionLabel}>
          Core <span className={styles.accent}>Principles</span>
        </p>
        <div className={styles.principlesLayout}>
          {/* Left: illustration */}
          <div className={styles.principlesVisual}>
            <img
              src="/img/vision/core-principles.svg"
              alt=""
              className={styles.principlesImage}
              loading="lazy"
            />
          </div>

          {/* Right: principles list with dividers */}
          <ul className={styles.principlesList}>
            {principles.map((p) => (
              <li key={p} className={styles.principleItem}>
                <span className={styles.principleMarker} aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.featuresLayout}>
          {/* Left: heading + description */}
          <div className={styles.featuresIntro}>
            <h2 className={styles.featuresHeading}>
              What Greenmask <strong>provides</strong>
            </h2>
            <p className={styles.featuresLead}>
              From anonymization to synthetic data — secure, production-like
              datasets for development, testing, staging, CI, and AI-assisted
              workflows, without exposing sensitive information.
            </p>
          </div>

          {/* Right: cards stacked vertically */}
          <div className={styles.featuresCards}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <div className={styles.featureIllustration}>
                  <img src={f.illustration} alt="" loading="lazy" />
                </div>
                <p className={styles.featureDesc}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const architectureSteps = [
  {
    title: 'Database',
    desc: 'Connect a source PostgreSQL database to the logical dump stream.',
  },
  {
    title: 'Logical Dump Stream',
    desc: 'Greenmask reads the database as a logical dump and processes it in-flight.',
  },
  {
    title: 'Transformation Pipeline',
    desc: 'Masking, synthetic data and subsetting run directly within the stream.',
  },
  {
    title: 'Storage / Restore',
    desc: 'Sanitized output is written to storage or restored — never stored unmasked.',
  },
];

function ArchitectureSection() {
  return (
    <section className={styles.architecture}>
      <div className={styles.container}>
        <h2 className={styles.archHeading}>
          <strong>Architecture</strong>
        </h2>

        {/* Central card with dashed connectors */}
        <div className={styles.archDiagram}>
          <div className={styles.archCard}>
            <p className={styles.archCardLabel}>In-flight transformation</p>
            <div className={styles.archCardFlow}>
              <span>Database</span>
              <span className={styles.archFlowArrow}>→</span>
              <span>Dump stream</span>
              <span className={styles.archFlowArrow}>→</span>
              <span>Transform</span>
              <span className={styles.archFlowArrow}>→</span>
              <span>Storage</span>
            </div>
            <div className={styles.archCardBadges}>
              <span className={styles.dbGroup}>
                <span className={styles.dbBadge + ' ' + styles.dbStable}>Stable</span>
                PostgreSQL
              </span>
              <span className={styles.dbGroup}>
                <span className={styles.dbBadge + ' ' + styles.dbExperimental}>Experimental</span>
                MySQL
              </span>
            </div>
          </div>
        </div>

        {/* Bottom row: labeled steps */}
        <div className={styles.archSteps}>
          {architectureSteps.map((s) => (
            <div key={s.title} className={styles.archStep}>
              <p className={styles.archStepTitle}>
                <span className={styles.archStepArrow}>▸</span> {s.title}
              </p>
              <p className={styles.archStepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section className={styles.future}>
      <div className={styles.container}>
        <div className={styles.futureLayout}>
          {/* Left: heading + description + partner logos */}
          <div className={styles.futureIntroCol}>
            <h2 className={styles.futureHeading}>
              Future Platform <strong>Vision</strong>
            </h2>
            <p className={styles.futureLead}>
              Greenmask — together with{' '}
              <a href="https://solanica.io/" target="_blank" rel="noopener noreferrer">Solanica</a>
              {' '}and{' '}
              <a href="https://openeverest.io/" target="_blank" rel="noopener noreferrer">OpenEverest</a>
              {' '}— is evolving toward a platform for secure, production-like,
              ephemeral development environments. Our long-term direction combines:
            </p>

            <div className={styles.futureLogos}>
              <a href="https://www.greenmask.io/" className={styles.partnerLogo}>
                <img src="/img/logo.svg" alt="Greenmask" className={styles.partnerLogoImg} />
              </a>
              <span className={styles.partnerSeparator}>+</span>
              <a href="https://solanica.io/" target="_blank" rel="noopener noreferrer" className={styles.partnerLogo}>
                <img src="/img/partners/Solanica.svg" alt="Solanica" className={styles.partnerLogoImg} />
              </a>
              <span className={styles.partnerSeparator}>+</span>
              <a href="https://openeverest.io/" target="_blank" rel="noopener noreferrer" className={styles.partnerLogo}>
                <img src="/img/partners/OpenEverest.svg" alt="OpenEverest" className={styles.partnerLogoImg} />
              </a>
            </div>
          </div>

          {/* Right: mini-cards + announcement */}
          <div className={styles.futureCardsCol}>
            <div className={styles.futureCards}>
              {futureDirections.map((d) => (
                <div key={d} className={styles.futureCardItem}>
                  <span className={styles.futureCardIcon} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {d}
                </div>
              ))}
            </div>

            <p className={styles.futureCollaboration}>
              <Link to="/blog/greenmask-openeverest-automating-safe-production-data">
                Read the announcement →
              </Link>
            </p>
          </div>
        </div>

        {/* Ephemeral-env architecture diagram — part of the Future Vision section */}
        <div className={styles.futureDiagram}>
          <img
            src="/img/vision/ephemeral-architecture.svg"
            alt="Ephemeral development environment: a developer laptop (User, AI Agent, local Service) connecting to a remote ephemeral env (DBaaS with branching, Agentic API, Test Data Management, User Services)."
            className={styles.ephemeralImage}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
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

export default function Vision(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Vision — ${siteConfig.title}`}
      description="Greenmask platform vision: open-source Test Data Management and Data Anonymization for secure, production-like development workflows."
    >
      <Head>
        <meta name="keywords" content="greenmask vision, open source, enterprise-grade, data anonymization, test data management, Enterprise support, Open-Source, PostgreSQL anonymization, compliance, security, agentic pipeline, development cycle" />
      </Head>
      <main>
        <HeroSection />
        <PrinciplesSection />
        <FeaturesSection />
        <ArchitectureSection />
        <FutureSection />
        <CTASection />
      </main>
    </Layout>
  );
}
