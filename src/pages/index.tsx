import type { CSSProperties, ReactNode } from 'react';
import { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const sponsors = [
  { name: 'Solanica', logo: 'https://cdn.prod.website-files.com/6682e8b45d941e31f8e1efcc/69bd26f7d0abaab4f04855d5_colored-horizontal.svg', href: 'https://solanica.io/' },
  { name: 'OpenEverest', logo: 'https://cdn.prod.website-files.com/6682e8b45d941e31f8e1efcc/69bd2bd3ec098b1bf7cc4d1e_logo-horizontal-full-color-white.svg', href: 'https://openeverest.io/' },
  { name: 'TestMU AI', logo: '/img/partners/testmu-ai.svg', href: 'https://www.testmuai.com/' },
  { name: 'JetBrains', logo: '/img/partners/jetbrains.svg', href: 'https://www.jetbrains.com/' },
  { name: 'Lenus', logo: '/img/partners/lenus.svg', href: 'https://www.lenusehealth.com/' },
  { name: 'Xata', logo: '/img/partners/xata.svg', href: 'https://xata.io/' },
];

function HeroSection() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>

        {/* Left column: heading → description → sponsors */}
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            Open Source{' '}
            <span className={styles.heroTitleAccent}>Data Anonymization</span>{' '}
            Software Empowering a Test
            <span className={styles.heroTitleLastLine}>Data Management Approach</span>
          </h1>

          <div className={styles.heroDescription}>
            {/* Col 1: empty */}
            <div />
            {/* Col 2: icon + text */}
            <div className={styles.heroDescriptionRight}>
              <div className={styles.heroIcon} aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <path d="M27.5118 12.0483V21.2238L35.8835 18.0967L37.4196 22.6639L29.0478 25.5852L34.2322 33.3205L30.4303 36.2418L25.3996 28.2185L20.3305 36.2418L16.4135 33.3205L21.6746 25.5852L13.2261 22.6639L14.7622 18.0967L23.0571 21.3061V12.0483H27.5118Z" fill="currentColor"/>
                  <path d="M42.4595 40.6773H46.774V8.74193H42.4595V6H49.9998V43.4193H42.4595V40.6773Z" fill="currentColor"/>
                  <path d="M7.54031 8.74193H3.2258V40.6773H7.54031V43.4193H0V6H7.54031V8.74193Z" fill="currentColor"/>
                </svg>
              </div>
              <p className={styles.heroText}>
                Greenmask provides a secure toolset to transform your database
                while maintaining integrity, creating a staging environment that
                mirrors production data and ensures efficient testing without
                compromising information.
              </p>
            </div>
          </div>

          <section className={styles.sponsorMarquee} aria-label="Sponsors">
            <div className={styles.sponsorMarquee__viewport}>
              <div className={styles.sponsorMarquee__track}>
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className={styles.sponsorMarquee__group}
                    {...(i > 0 && { 'aria-hidden': true })}
                  >
                    {sponsors.map((s) => {
                      const slug = s.name.toLowerCase().replace(/\s+/g, '-');
                      return (
                        <a
                          key={`${i}-${s.name}`}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.heroSponsorLink}
                          data-sponsor={slug}
                          {...(i > 0 && { tabIndex: -1 })}
                        >
                          <img
                            src={s.logo}
                            alt={i === 0 ? s.name : ''}
                            className={styles.heroSponsorLogo}
                          />
                        </a>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Right column: image on purple background */}
        <div className={styles.heroRight}>
          <div className={styles.heroImageWrap}>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/img/hero/mobile.png"
              />
              <source
                media="(min-width: 768px) and (max-width: 1024px)"
                srcSet="/img/hero/tablet.png"
              />
              <img
                src="/img/image.png"
                alt="Greenmask Interface"
                className={styles.heroImage}
              />
            </picture>
          </div>
        </div>

      </div>
    </header>
  );
}

type Feature = {
  title: [string, string];
  image: string;
  description: string;
};

function FeatureCard({ feature }: { feature: Feature }) {
  const [titleLine1, titleLine2] = feature.title;
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureVisual}>
        <img
          src={feature.image}
          alt={`${titleLine1} ${titleLine2}`}
          className={styles.featureImage}
        />
      </div>
      <div className={styles.featureContent}>
        <h3 className={styles.featureTitle}>
          {titleLine1}
          <br />
          {titleLine2}
        </h3>
        <p className={styles.featureDescription}>{feature.description}</p>
      </div>
    </div>
  );
}

function Features() {
  const features: Feature[] = [
    {
      title: ['Wide Range of', 'Transformations'],
      image: '/img/features/wide-range.png',
      description:
        'Greenmask enables database subsetting to reduce dump size and uses deterministic transformers for consistent results. It also supports custom transformations and automatic handling of partitioned tables for added flexibility.',
    },
    {
      title: ['Performance &', 'Scalability'],
      image: '/img/features/performance.png',
      description:
        'Greenmask maximizes efficiency with parallel dumping and restoration, reducing processing time. Pgzip support further speeds up compression and restoration.',
    },
    {
      title: ['Security &', 'Reliability'],
      image: '/img/features/security.png',
      description:
        'Greenmask ensures data integrity and security by validating data and providing transformation diffs. It operates statelessly, preserving the existing database schema without affecting it.',
    },
    {
      title: ['Integration &', 'Compatibility'],
      image: '/img/features/integration.png',
      description:
        'Greenmask integrates seamlessly into CI/CD pipelines and supports cross-platform compatibility. It also offers a variety of storage options, like S3, and maintains full backward compatibility with PostgreSQL utilities.',
    },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.featuresInner}>
        <p className={styles.benefitsText}>
          GreenMask is a powerful data anonymization system that ensures the safe use of data in a
          test environment and protects it throughout the software lifecycle. It helps create data
          that is as close to production as possible, preventing leaks through the validation of
          both the data itself and the database schema, which may change during the lifecycle.
        </p>
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <FeatureCard key={feature.title.join(' ')} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Create a config',
      description:
        'Declare transformation rules using flexible dynamic parameters and a wide range of extensible transformations, along with anonymization settings and data subset selections.',
      image: '/img/how-it-works/step-01.png',
    },
    {
      num: '02',
      title: 'Validate config',
      description:
        'Validate the configuration to ensure correctness, maintain data anonymization, and test transformations in real-time, simplifying the configuration workflow.',
      image: '/img/how-it-works/step-02.png',
    },
    {
      num: '03',
      title: 'Dump and transform',
      description:
        'Apply data anonymization and transformations using the rules defined in the config file. The anonymized dump will be saved in the specified storage, ensuring secure handling of the data.',
      image: '/img/how-it-works/step-03.png',
    },
    {
      num: '04',
      title: 'Deploy dump in dev',
      description:
        'Deploy the prepared data dump into the development or test environment for safe, reliable testing without risking data leaks. Greenmask easily integrates with your CI/CD pipelines.',
      image: '/img/how-it-works/step-04.png',
    },
  ];

  return (
    <section className={styles.howItWorks}>
      <div className={styles.howItWorksInner}>
        <h2 className={styles.sectionTitle}>
          How it <strong>works</strong>
        </h2>
      </div>
      <div className={styles.stickyCards}>
        {steps.map((step, idx) => (
          <div
            key={step.num}
            className={styles.stickyCard}
            style={{ '--card-index': idx } as CSSProperties}
          >
            <div className={styles.stickyCardInner}>
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>{step.num}</div>
                <div className={styles.stepTextBlock}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
              <div className={styles.stepVisual}>
                <img
                  src={step.image}
                  alt={step.title}
                  className={styles.stepImage}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoNeedsThis() {
  const personas = [
    'Companies Needing High-Quality Test Data',
    'InfoSec & Legal',
    'Machine Learning Teams',
    'Outsourcing Clients',
    'Outsourcing Providers',
    'Data Engineers',
    'DevOps Teams',
    'Software Developers',
    'Healthcare & Finance',
    'Compliance Teams',
  ];

  return (
    <section className={styles.whoNeedsThis}>
      <div className={styles.whoNeedsInner}>
        <div className={styles.whoNeedsContent}>
          <h2 className={styles.whoNeedsTitle}>
            <strong>Who</strong> Needs This
          </h2>
          <div className={styles.whoNeedsCards}>
            {personas.map((persona) => (
              <div key={persona} className={styles.whoNeedsCard}>
                {persona}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OurServices() {
  const services = [
    {
      title: 'Support & Product Development',
      description:
        'Our support ensures Greenmask remains reliable and fully operational, handling everything from system evaluations to urgent issues with 24/7 expert assistance. We provide full technical guidance, resolve complex problems, and maintain continuous functionality. Additionally, our product development services help build custom features aligned with your needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 80 80" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M47.0846 78.4094C56.9444 80.1392 65.9871 78.0856 72.0364 72.037C78.0856 65.9885 80.1394 56.9467 78.4094 47.0879C78.2642 46.2605 78.0924 45.4279 77.8942 44.5917L77.7692 44.7293C74.7905 42.0238 70.8357 40.3756 66.4947 40.3756C65.0583 40.3756 63.6646 40.556 62.3349 40.8953C62.7265 43.1358 62.3952 44.9874 61.226 46.1565C59.9508 47.4316 57.8634 47.7099 55.3449 47.1408C56.0097 49.6979 56.3634 52.38 56.3634 55.144C56.3634 64.2652 52.5127 72.4877 46.3497 78.2738C46.595 78.3213 46.84 78.3665 47.0846 78.4094ZM67.8966 24.1686C72.5736 30.2761 75.8229 36.8372 77.549 43.2303C74.5148 40.8175 70.6727 39.3756 66.4947 39.3756C64.9873 39.3756 63.523 39.5634 62.1244 39.917C61.3853 37.0031 59.5556 33.5531 56.8557 30.1303C60.1804 27.6163 63.8967 25.5932 67.8966 24.1686ZM67.25 23.3388C63.2605 24.7951 59.5517 26.834 56.2265 29.3523C55.3767 28.3269 54.45 27.3078 53.4523 26.3102C52.6514 25.5094 51.8367 24.7544 51.016 24.0482C54.0707 21.1865 56.274 17.4254 57.2029 13.1862C58.9352 14.5895 60.6262 16.1097 62.2614 17.7447C64.0648 19.548 65.7287 21.4192 67.25 23.3388ZM56.3258 12.4884C50.0484 7.58399 43.2702 4.197 36.6744 2.43221C39.0373 5.91287 40.4181 10.1149 40.4181 14.6382C40.4181 15.6889 40.3436 16.7225 40.1995 17.7338C43.2133 18.5765 46.7605 20.5431 50.2446 23.4001C53.3177 20.5553 55.4994 16.7629 56.3258 12.4884ZM39.4181 14.6382C39.4181 15.6082 39.3516 16.5623 39.223 17.4964C36.8219 17.0044 34.8346 17.3066 33.6039 18.5373C32.3256 19.8154 32.0489 21.9095 32.6235 24.4359C30.0719 23.7744 27.396 23.4225 24.6385 23.4225C15.5941 23.4225 7.43313 27.2074 1.65464 33.2782C1.6326 33.1587 1.61111 33.0392 1.59017 32.9199C-0.139771 23.0612 1.91402 14.0194 7.96325 7.97082C14.0125 1.92224 23.0552 -0.131333 32.915 1.59843C33.722 1.74 34.5339 1.90689 35.3492 2.09887L35.2568 2.16845C37.8696 5.6403 39.4181 9.95771 39.4181 14.6382ZM15.6737 60.1034C8.39043 52.1292 3.71176 43.0403 1.87843 34.4061L1.9282 34.4515C7.54804 28.2886 15.6414 24.4225 24.6385 24.4225C27.51 24.4225 30.2888 24.8162 32.9241 25.5524C34.1185 29.4182 37.0882 34.0906 41.3627 38.3685C29.2317 40.1054 19.3168 48.703 15.6737 60.1034ZM16.4591 60.9482C16.8773 61.3903 17.3037 61.8287 17.7382 62.2631C26.0707 70.5947 35.8548 75.9473 45.146 78.0227L45.1452 78.0218C51.4181 72.3965 55.3634 64.2312 55.3634 55.144C55.3634 52.2664 54.9678 49.482 54.2285 46.8418C50.6232 45.7326 46.314 43.0772 42.2766 39.2579C29.988 40.7008 19.9156 49.3963 16.4591 60.9482ZM34.3112 26.4859C34.0988 25.9435 33.9216 25.4202 33.7792 24.9186L33.8234 24.7724L33.731 24.7447C33.6935 24.6063 33.6588 24.4698 33.6268 24.3349C37.6144 26.2634 41.9955 29.4046 46.0984 33.5071C50.2473 37.6555 53.4132 42.0885 55.336 46.1114C54.6875 45.9525 53.9989 45.7321 53.2766 45.4492C49.8409 44.1037 45.8248 41.416 42.0848 37.6764C38.3449 33.9369 35.6568 29.9212 34.3112 26.4859ZM17.0311 62.9702C35.1149 81.0521 60.0582 85.428 72.7435 72.7441C85.4288 60.0602 81.0524 35.1196 62.9685 17.0377C44.8847 -1.04424 19.9414 -5.42017 7.25611 7.26375C-5.42917 19.9477 -1.05277 44.8883 17.0311 62.9702ZM57.7742 46.4212C59.0177 46.4007 59.9195 46.0487 60.5189 45.4494C61.1183 44.85 61.4703 43.9483 61.4908 42.705C61.5114 41.455 61.1921 39.927 60.5187 38.2078C59.1731 34.7725 56.4851 30.7568 52.7451 27.0173C49.0052 23.2777 44.989 20.59 41.5534 19.2445C39.834 18.5712 38.3058 18.252 37.0557 18.2726C35.8123 18.293 34.9104 18.645 34.311 19.2443C33.7116 19.8437 33.3596 20.7454 33.3392 21.9887C33.3333 22.3458 33.3551 22.7255 33.405 23.126C37.6873 25.0784 42.4147 28.4096 46.8055 32.8C51.2368 37.2309 54.5893 42.0044 56.5342 46.3173L56.4923 46.3362C56.9462 46.3996 57.3744 46.4277 57.7742 46.4212Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Training & Consulting',
      description:
        "Our training and consulting services empower you to customize Greenmask to seamlessly meet your data privacy requirements. Whether you're seeking expert guidance on best practices, need in-depth training, or require a fully tailored solution, we are here to provide ongoing support and ensure your success in protecting sensitive data and optimizing performance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 80 80" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M61.0621 13.9471L13.5263 1.20996L26.2635 48.7458L73.7993 61.4829L61.0621 13.9471ZM12.3164 0L16.056 13.9566L7.18733 22.8253L7.1786 22.835C4.0516 26.3112 3.11244 31.7805 4.8944 38.4309C6.75137 45.3612 11.2296 52.3561 16.9473 58.0737C22.6649 63.7914 29.6598 68.2697 36.5901 70.1266C43.7881 72.0553 49.605 70.7945 53 67.0294L61.0712 58.9582L73.3476 62.2477L60.6269 74.9684L56.5263 75.7344L60.5595 79.7676L61.3255 75.667L74.4495 62.5429L75.0093 62.6929L61.7607 13.2486L12.3164 0ZM7.90447 23.5053L16.3513 15.0585L25.5649 49.4443L59.9693 58.663L52.2831 66.3492L52.2743 66.3589C49.2186 69.7559 43.8415 71.0468 36.8458 69.1724C30.1225 67.3708 23.2734 63.0027 17.6458 57.3752C12.0183 51.7477 7.65019 44.8986 5.84867 38.1752C4.12024 31.7246 5.08476 26.648 7.90447 23.5053Z" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.ourServices}>
      <div className={styles.ourServicesInner}>
        <h2 className={styles.ourServicesTitle}>
          Our <strong>Services</strong>
        </h2>
        <div className={styles.servicesList}>
          {services.map((service) => (
            <div key={service.title} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <div className={styles.serviceContent}>
                <div className={styles.serviceTitle}>{service.title}</div>
                <p className={styles.serviceText}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is Greenmask, and what is it used for?',
      answer:
        'Greenmask is a data anonymization system designed to ensure information security in testing and development environments. It helps create data that is as close to real as possible while preventing data leaks.',
    },
    {
      question: 'How does Greenmask protect my data?',
      answer:
        'Greenmask uses powerful data anonymization tools such as deterministic transformations, dynamic parameters, and validation to ensure data security and compliance with confidentiality requirements.',
    },
    {
      question: 'Why do I need production-like data in testing environments?',
      answer:
        'Using data that closely resembles production accelerates time to delivery, improves service quality through more accurate testing, and increases developer satisfaction by allowing them to work with realistic data, avoiding unexpected issues in production.',
    },
    {
      question: 'What technologies are supported?',
      answer:
        'Currently, Greenmask supports PostgreSQL and S3. Support for MySQL, MongoDB, and other databases is actively in development.',
    },
    {
      question: 'Can Greenmask integrate with my existing systems?',
      answer:
        'Yes, Greenmask easily integrates into existing CI/CD pipelines due to its simple architecture, and it also supports various data storage systems, including both local and remote (such as S3-compatible storage).',
    },
    {
      question: 'How can I customize Greenmask for my needs?',
      answer:
        'You can configure Greenmask using flexible configuration files that support dynamic parameters and a wide range of transformations, allowing you to adapt the system to your specific requirements.',
    },
    {
      question: 'How does Greenmask plan to develop its products?',
      answer:
        'We are actively developing a dynamic staging environment platform that includes test data management (TDM) features, which are already implemented at a basic level in the Greenmask utility.',
    },
  ];

  return (
    <section className={styles.faq}>
      <div className={styles.faqInner}>
        <h2 className={styles.sectionTitle}>FAQ</h2>
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className={styles.faqCard}>
              <div
                className={styles.faqCardToggle}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <div className={styles.faqCardTitle}>{faq.question}</div>
                <div className={`${styles.faqCardIcon} ${isOpen ? styles.faqCardIconOpen : ''}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M17 9L12 14L7 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className={`${styles.faqCardContent} ${isOpen ? styles.faqCardContentOpen : ''}`}>
                <div className={styles.faqCardClip}>
                  <div className={styles.faqCardText}>{faq.answer}</div>
                </div>
              </div>
            </div>
          );
        })}
        <div className={styles.accordionLine} />
      </div>
    </section>
  );
}

function GetStartedCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaInner}>
        <Link to="/docs/architecture" className={styles.ctaButton}>
          Get started
          <svg className={styles.ctaArrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Open-source Test Data Management and Data Anonymization Platform`}
      description="Open-source Test Data Management and Data Anonymization Platform for PostgreSQL"
    >
      <HeroSection />
      <main>
        <Features />
        <HowItWorks />
        <WhoNeedsThis />
        <OurServices />
        <FAQ />
        <GetStartedCTA />
      </main>
    </Layout>
  );
}
