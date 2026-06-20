import type { CSSProperties, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout';

import styles from './request-a-feature.module.css';

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13.2764 4.1052C13.371 4.02759 13.4891 3.98585 13.6114 3.98638C13.7337 3.98698 13.8532 4.02971 13.9509 4.10809C14.0487 4.18662 14.1191 4.29616 14.1503 4.41899L16.2607 13.6836L22.9074 11.2645C22.9972 11.2318 23.0948 11.224 23.1895 11.2428C23.2841 11.2617 23.3726 11.3067 23.4463 11.3718C23.52 11.4368 23.5764 11.5202 23.6093 11.6138C23.6422 11.7076 23.6511 11.8082 23.6342 11.9051L21.0456 29.5311C21.0211 29.6534 20.9575 29.7634 20.8648 29.8422C20.772 29.9209 20.6554 29.9648 20.5339 29.9668C20.4122 29.9688 20.2921 29.9286 20.1931 29.8529C20.0942 29.7772 20.022 29.6696 19.9877 29.5483L17.6413 20.355L11.0938 22.7381C11.0035 22.7709 10.9056 22.7783 10.8104 22.7591C10.7154 22.7399 10.6261 22.6955 10.5523 22.6296C10.4785 22.5637 10.4225 22.4787 10.3902 22.3841C10.358 22.2897 10.3509 22.1887 10.369 22.0915L13.0896 4.41429C13.1158 4.29175 13.1819 4.18289 13.2764 4.1052Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.7081 6.64979C3.72912 6.63374 5.04644 5.64509 9.22514 6.67761C11.8322 4.83953 14.8689 3.73419 18.0476 3.4665C20.5481 0.0299607 22.2038 -0.0914308 22.2349 -0.0934218C24.0505 1.95941 24.1036 3.95257 24.105 4.46783C25.7538 5.29521 27.0062 6.75875 27.6175 8.50197C30.0619 15.218 26.472 18.1869 22.6906 20.0547C23.494 20.3473 24.4596 21.2121 25.0538 22.8443C25.9111 25.1998 26.5679 27.0672 26.7711 27.6254C26.9366 28.08 27.2771 28.3776 28.2824 28.0117L17.1999 32.1628C18.1434 31.8193 18.2746 31.3496 18.1017 30.8743C17.9286 30.399 17.5521 29.3662 16.9977 27.9069C12.5021 30.73 10.2146 27.749 10.1902 27.717C8.6604 26.0037 7.28797 25.8707 7.28797 25.8707C5.30872 25.3816 7.00695 24.7797 7.0275 24.7725C8.83714 24.2542 10.3908 25.5842 10.3908 25.5842C12.9483 27.6952 15.2061 25.9842 16.046 25.1637C15.8047 24.2453 15.8865 23.2561 16.3174 22.3972C12.2405 23.3896 7.56693 23.3821 5.13001 16.6867C4.47778 14.9584 4.51755 13.0246 5.24874 11.3309C4.88515 10.971 3.64431 9.41014 3.7081 6.64979Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HeroSection() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContain}>
        <div className={styles.heroLayout}>
          {/* Full-width content column */}
          <div className={styles.heroContent}>
            {/* Header area: title + description */}
            <div className={styles.heroHeader}>
              {/* Full-width heading — continuous text, wraps naturally */}
              <div className={styles.heroTitleWrap}>
                <h1 className={styles.heroTitle}>
                  Have something in mind?{' '}
                  <strong>Let&apos;s make it real</strong>{' '}
                  — request a feature!
                </h1>
              </div>

              {/* Description: 2-col grid, text in right column */}
              <div className={styles.heroDescriptionWrap}>
                <div className={styles.heroDescriptionEmpty} />
                <div className={styles.heroDescriptionText}>
                  <p className={styles.heroSubtitle}>
                    We welcome your ideas to improve GreenMask. Let us know what
                    you&apos;d like to see next — we&apos;re building this together.
                  </p>
                </div>
              </div>
            </div>

            {/* Button row: 2-col grid */}
            <div className={styles.heroButtonWrap}>
              {/* Left column: primary CTA + note */}
              <div className={styles.heroButtonLeft}>
                <a
                  href="mailto:sales@greenmask.io?subject=Urgent%20feature%20request"
                  className={styles.ctaLink}
                >
                  <span className={styles.ctaPill}>
                    <span className={styles.ctaPillText}>
                      Request urgent feature
                    </span>
                  </span>
                  <span className={styles.ctaIconWrap}>
                    <ArrowIcon />
                  </span>
                </a>
                <p className={styles.heroCtaNote}>
                  *Paid option. Fast-track your request with custom development.
                </p>
              </div>

              {/* Right column: secondary CTA */}
              <div className={styles.heroButtonRight}>
                <a
                  href="https://github.com/GreenmaskIO/greenmask/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaLink}
                >
                  <span className={`${styles.ctaPill} ${styles.ctaPillSecondary}`}>
                    <span className={styles.ctaPillText}>Submit on GitHub</span>
                  </span>
                  <span
                    className={`${styles.ctaIconWrap} ${styles.ctaIconWrapSecondary}`}
                  >
                    <GitHubIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const steps = [
  {
    num: '01',
    title: 'Go to GitHub Issues',
    description: (
      <>
        To get started, head over to our{' '}
        <a
          href="https://github.com/greenmaskio/greenmask/issues"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.stepLink}
        >
          GitHub Issues page
        </a>
        . If you haven&apos;t already, log in or create a GitHub account — it only
        takes a minute.
      </>
    ),
    image: '/img/request-a-feature/step-01.png',
  },
  {
    num: '02',
    title: 'Create a New Feature Request',
    description:
      "Click on 'New Issue'. Describe your idea clearly: give it a short title, explain the purpose, and provide a real-world usage scenario so we understand the context.",
    image: '/img/request-a-feature/step-02.png',
  },
  {
    num: '03',
    title: 'We Review and Prioritize',
    description:
      'Once submitted, your idea enters our public backlog. We regularly review all incoming requests and prioritize them based on impact, alignment with our roadmap, and available development capacity.',
    image: '/img/request-a-feature/step-03.png',
  },
];

function HowItWorksSection() {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.howItWorksInner}>
        <h2 className={styles.sectionTitle}>
          How It <strong>Works</strong>
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
                <div className={styles.stepTop}>
                  <span className={styles.stepBadge}>Step {idx + 1}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              <div className={styles.stepVisual}>
                <img
                  src={step.image}
                  alt={step.title}
                  className={styles.stepImage}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function NeedItFastSection() {
  return (
    <section className={styles.needItFast}>
      <div className={styles.needItFastInner}>
        <div className={styles.needItFastLayout}>
          <div className={styles.needItFastContent}>
            <div className={styles.needItFastBgRatio}>
              <div className={styles.needItFastVisual}>
                <img
                  src="/img/request-a-feature/mask-group.png"
                  alt=""
                  className={styles.needItFastBgImg}
                />
              </div>
            </div>
            <div className={styles.needItFastTextWrap}>
              <div className={styles.needItFastSubheading}>Need It Fast?</div>
              <h2 className={styles.needItFastHeading}>
                For urgent needs, business-critical features, or
                enterprise-specific functionality, we offer dedicated paid
                development services. This option gives your request priority
                access to our core engineering team, allowing for faster
                delivery, tailored solutions, and close collaboration.
              </h2>
            </div>
          </div>
          <div className={styles.needItFastButtonWrap}>
            <a
              href="mailto:sales@greenmask.io?subject=Urgent%20feature%20request"
              className={styles.ctaLink}
            >
              <span className={styles.ctaPill}>
                <span className={styles.ctaPillText}>
                  Request urgent feature
                </span>
              </span>
              <span className={styles.ctaIconWrap}>
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: 'How does Greenmask plan to develop its products?',
    answer:
      'We are actively developing a dynamic staging environment platform that includes test data management (TDM) features, which are already implemented at a basic level in the Greenmask utility.',
  },
  {
    question: 'What technologies are supported?',
    answer:
      'Currently, Greenmask supports PostgreSQL and S3. Support for MySQL, MongoDB, and other databases is actively in development.',
  },
  {
    question: 'Why do I need production-like data in testing environments?',
    answer:
      'Using data that closely resembles production accelerates time to delivery, improves service quality through more accurate testing, and increases developer satisfaction by allowing them to work with realistic data, avoiding unexpected issues in production.',
  },
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
    question: 'Can Greenmask integrate with my existing systems?',
    answer:
      'Yes, Greenmask easily integrates into existing CI/CD pipelines due to its simple architecture, and it also supports various data storage systems, including both local and remote (such as S3-compatible storage).',
  },
  {
    question: 'How can I customize Greenmask for my needs?',
    answer:
      'You can configure Greenmask using flexible configuration files that support dynamic parameters and a wide range of transformations, allowing you to adapt the system to your specific requirements.',
  },
];

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className={styles.faq}>
      <div className={styles.faqInner}>
        <h2 className={styles.faqTitle}>FAQ</h2>
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className={styles.faqCard}>
              <button
                type="button"
                className={styles.faqCardToggle}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <div className={styles.faqCardTitle}>{faq.question}</div>
                <div
                  className={`${styles.faqCardIcon} ${isOpen ? styles.faqCardIconOpen : ''}`}
                >
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
              </button>
              <div
                className={`${styles.faqCardContent} ${isOpen ? styles.faqCardContentOpen : ''}`}
              >
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

function SmallArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.22551 2.39261C9.29598 2.3347 9.38362 2.30356 9.47487 2.30393C9.56614 2.30433 9.65531 2.33609 9.7282 2.39464C9.80109 2.45318 9.8537 2.53471 9.87695 2.62629L11.4489 9.52935L16.4016 7.72673C16.4685 7.70239 16.5413 7.69648 16.6119 7.71048C16.6822 7.72454 16.7486 7.75753 16.8035 7.80596C16.8583 7.85438 16.8998 7.91684 16.9243 7.98647C16.9488 8.05615 16.9554 8.13111 16.9429 8.20314L15.0147 21.3363C14.9964 21.4274 14.949 21.5095 14.8799 21.5683C14.8107 21.627 14.7237 21.6597 14.6331 21.6612C14.5424 21.6627 14.4533 21.6322 14.3796 21.5758C14.3059 21.5194 14.2514 21.4404 14.2258 21.3501L12.4776 14.4998L7.59923 16.2753C7.53207 16.2998 7.45946 16.3049 7.38865 16.2907C7.3178 16.2764 7.25075 16.2437 7.19573 16.1946C7.14078 16.1456 7.09928 16.0822 7.07519 16.0119C7.05114 15.9415 7.04551 15.8657 7.05903 15.7933L9.086 2.62318C9.10546 2.53179 9.15503 2.45054 9.22551 2.39261Z" />
    </svg>
  );
}

function SmallGitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M2.71547 4.77015C2.72494 4.76287 3.64155 4.06616 6.56867 4.78937C8.38982 3.50534 10.5113 2.73319 12.7317 2.5462C14.4951 0.122769 15.6573 0.0596868 15.6573 0.0596868C16.9257 1.49389 16.9616 2.88643 16.9625 3.24587C18.1142 3.82383 18.9901 4.84589 19.417 6.06361C21.1243 10.7546 18.6164 12.8281 15.9751 14.1327C16.5364 14.3371 17.2112 14.9418 17.6262 16.0821C18.2249 17.727 18.6829 19.0311 18.8249 19.4213C18.9405 19.7388 19.1786 19.9472 19.8805 19.6918L12.1394 22.5904C12.7984 22.3505 12.89 22.0228 12.7692 21.6909C12.6483 21.3587 12.3852 20.637 11.998 19.6177C8.8408 21.6003 7.24298 19.485 7.24298 19.485C6.18196 18.2968 5.22937 18.1976 5.21608 18.1963C3.825 17.8525 5.03414 17.428 5.03414 17.428C6.29414 17.0673 7.37594 17.9901 7.38271 17.9959C9.16925 19.4707 10.7473 18.2751 11.3339 17.7019C11.1654 17.0604 11.2223 16.3696 11.5233 15.7697C8.67567 16.4628 5.41154 16.4574 3.70931 11.7808C3.25368 10.5735 3.28053 9.22285 3.79122 8.03983C3.53725 7.7884 2.67096 6.69819 2.71547 4.77015Z" />
    </svg>
  );
}

function FinalCTASection() {
  return (
    <section className={styles.finalCta}>
      <div className={styles.finalCtaInner}>
        <div className={styles.finalCtaLayout}>
          <div className={styles.finalCtaContent}>
            <div className={styles.finalCtaBgRatio}>
              <div className={styles.finalCtaVisual}>
                <img
                  src="/img/request-a-feature/cta-purple-bg.png"
                  alt=""
                  className={styles.finalCtaBgImg}
                />
              </div>
            </div>
            <div className={styles.finalCtaTextWrap}>
              <h2 className={styles.finalCtaHeading}>
                Ready to shape the future of GreenMask?
              </h2>
              <div className={styles.finalCtaButtons}>
                <a
                  href="mailto:sales@greenmask.io?subject=Urgent%20feature%20request"
                  className={styles.bannerCtaLink}
                >
                  <span className={styles.bannerCtaPill}>
                    <span className={styles.bannerCtaText}>
                      Request urgent feature
                    </span>
                  </span>
                  <span className={styles.bannerCtaIcon}>
                    <SmallArrowIcon />
                  </span>
                </a>
                <a
                  href="https://github.com/GreenmaskIO/greenmask/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bannerCtaLink}
                >
                  <span
                    className={`${styles.bannerCtaPill} ${styles.bannerCtaPillStroke}`}
                  >
                    <span className={styles.bannerCtaText}>
                      Submit on GitHub
                    </span>
                  </span>
                  <span
                    className={`${styles.bannerCtaIcon} ${styles.bannerCtaIconStroke}`}
                  >
                    <SmallGitHubIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RequestAFeature(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    // Add dark class directly to the navbar element and html
    document.documentElement.classList.add('page-dark-nav');
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.add('navbar--dark-hero');
    }
    // Swap logo to light version
    const logoImg = document.querySelector('.navbar__logo img') as HTMLImageElement;
    const originalSrc = logoImg?.getAttribute('src');
    if (logoImg) {
      logoImg.setAttribute('src', '/img/logo-light.svg');
    }
    return () => {
      document.documentElement.classList.remove('page-dark-nav');
      const nav = document.querySelector('.navbar');
      if (nav) {
        nav.classList.remove('navbar--dark-hero');
      }
      if (logoImg && originalSrc) {
        logoImg.setAttribute('src', originalSrc);
      }
    };
  }, []);

  return (
    <Layout
      title={`Request a Feature — ${siteConfig.title}`}
      description="Have something in mind? Request a feature for GreenMask — submit on GitHub or fast-track with paid development."
    >
      <Head>
        <meta name="keywords" content="greenmask feature request, Enterprise support, Open-Source, software development, paid development, PostgreSQL anonymization, test data management, compliance, security, agentic pipeline, development cycle" />
      </Head>
      <main className={styles.pageMain}>
        <HeroSection />
        <HowItWorksSection />
        <NeedItFastSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </Layout>
  );
}
