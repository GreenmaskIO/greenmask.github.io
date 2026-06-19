import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
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
  },
  {
    title: 'Test Data Management',
    description:
      'Create secure production-like datasets for development, testing, staging, CI pipelines, and ephemeral environments.',
  },
  {
    title: 'Subsetting',
    description:
      'Extract only the required portion of production data while preserving relational consistency.',
  },
  {
    title: 'Synthetic Data Generation',
    description:
      'Generate realistic synthetic values and replacement datasets for non-production environments.',
  },
  {
    title: 'Secure Development Workflows',
    description:
      'Reduce the operational and security risks associated with long-lived raw production copies in lower-trust environments.',
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
        <h1 className={styles.heroTitle}>Platform Vision</h1>
        <h2 className={styles.heroSubtitle2}>
          Secure, production-like{' '}
          <strong>development workflows</strong>
        </h2>
        <p className={styles.heroSubtitle}>
          Open-source Test Data Management and Data Anonymization platform focused on
          enabling organizations to safely use realistic data in development, testing,
          staging, and AI-assisted engineering environments without exposing sensitive
          information.
        </p>
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
        <ul className={styles.principlesList}>
          {principles.map((p) => (
            <li key={p} className={styles.principleItem}>
              <span className={styles.principleCheck} aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <p className={styles.sectionLabel}>
          What Greenmask <span className={styles.accent}>Provides</span>
        </p>
        <div className={styles.featuresGrid}>
          {features.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section className={styles.architecture}>
      <div className={styles.container}>
        <p className={styles.sectionLabel}>
          <span className={styles.accent}>Architecture</span>
        </p>
        <div className={styles.archLayout}>
          <div className={styles.archPipeline}>
            <span className={styles.pipelineStep}>Database</span>
            <span className={styles.pipelineArrow}>→</span>
            <span className={styles.pipelineStep}>Logical Dump Stream</span>
            <span className={styles.pipelineArrow}>→</span>
            <span className={styles.pipelineStep}>Transformation Pipeline</span>
            <span className={styles.pipelineArrow}>→</span>
            <span className={styles.pipelineStep}>Storage / Restore</span>
          </div>
          <ul className={styles.archPoints}>
            <li>Data is processed in-flight</li>
            <li>Transformations are executed directly within the dump stream</li>
            <li>Sensitive raw datasets do not need to be persistently stored unmasked</li>
          </ul>
        </div>
        <div className={styles.dbSupport}>
          <div className={styles.dbGroup}>
            <span className={styles.dbBadge + ' ' + styles.dbStable}>Stable</span>
            <span>PostgreSQL</span>
          </div>
          <div className={styles.dbGroup}>
            <span className={styles.dbBadge + ' ' + styles.dbExperimental}>Experimental</span>
            <span>MySQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section className={styles.future}>
      <div className={styles.container}>
        <p className={styles.sectionLabel}>
          Future Platform <span className={styles.accent}>Vision</span>
        </p>
        <p className={styles.futureIntro}>
          Greenmask — together with{' '}
          <a href="https://solanica.io/" target="_blank" rel="noopener noreferrer">Solanica</a>
          {' '}and{' '}
          <a href="https://openeverest.io/" target="_blank" rel="noopener noreferrer">OpenEverest</a>
          {' '}— is evolving toward a platform designed for secure, production-like,
          ephemeral development environments, with open-source, enterprise-grade
          infrastructure for modern software delivery workflows. Our long-term direction combines:
        </p>
        <div className={styles.partnerLogos}>
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
        <ul className={styles.futureList}>
          {futureDirections.map((d) => (
            <li key={d} className={styles.futureItem}>
              <span className={styles.principleCheck} aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
        <div className={styles.visionImageWrap}>
          <img
            src="/img/vision.png"
            alt="Future Platform Vision conceptual architecture"
            className={styles.visionImage}
          />
        </div>
        <p className={styles.futureCollaboration}>
          <Link to="/blog/greenmask-openeverest-automating-safe-production-data">
            Read the announcement →
          </Link>
        </p>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <Link to="/docs/architecture" className={styles.ctaButton}>
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
