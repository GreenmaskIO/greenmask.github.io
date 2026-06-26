import { useState, type FormEvent, type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import styles from './styles.module.css';

const menuLinks = [
  { label: 'Request a Feature', to: '/request-a-feature' },
  { label: 'Company', to: '/about' },
  { label: 'Vision', to: '/vision' },
  { label: 'Docs', href: 'https://docs.greenmask.io/latest/' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contacts', to: '/contacts' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/greenmask-io' },
  { label: 'Telegram', href: 'https://t.me/greenmask_community' },
  { label: 'Discord', href: 'https://discord.com/invite/rKBKvDECfd' },
  { label: 'Twitter', href: 'https://x.com/GreenmaskIO' },
];

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GreenmaskLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" viewBox="0 0 200 39" fill="none" aria-hidden="true" height="39" className={styles.footerLogoSvg}>
      <path d="M17.0661 18.8829C17.0661 17.5975 16.902 16.4078 16.5738 15.3138C16.273 14.1924 15.8217 13.2352 15.22 12.4421C14.6183 11.6216 13.8662 10.9789 12.9637 10.5139C12.0612 10.049 11.0356 9.81652 9.88687 9.81652C8.84759 9.81652 7.89035 10.008 7.01517 10.3909C6.13998 10.7464 5.37419 11.2797 4.7178 11.9908C4.06141 12.7019 3.54177 13.5771 3.15888 14.6164C2.80333 15.6283 2.62556 16.8043 2.62556 18.1445C2.57086 19.4846 2.68026 20.7427 2.95375 21.9187C3.22725 23.0674 3.66484 24.0793 4.26653 24.9545C4.86822 25.8297 5.63401 26.5271 6.5639 27.0467C7.49378 27.539 8.60144 27.7852 9.88687 27.7852C11.0082 27.7852 12.0065 27.5527 12.8816 27.0878C13.7842 26.5955 14.5363 25.9528 15.138 25.1596C15.767 24.3391 16.2456 23.3956 16.5738 22.3289C16.902 21.235 17.0661 20.0863 17.0661 18.8829ZM17.0661 8.17554H19.5276V27.3749C19.5276 28.7971 19.3772 30.1509 19.0763 31.4364C18.8028 32.7491 18.2969 33.8978 17.5584 34.8824C16.82 35.867 15.8081 36.6464 14.5226 37.2208C13.2372 37.8225 11.5825 38.1233 9.55868 38.1233C7.99975 38.1233 6.65962 37.9182 5.53829 37.508C4.41696 37.1251 3.50075 36.6328 2.78966 36.0311C2.07857 35.4294 1.53158 34.7593 1.14868 34.0209C0.793138 33.3098 0.601691 32.6397 0.574341 32.0107H3.1999C3.39135 32.8038 3.69219 33.4465 4.10244 33.9388C4.51268 34.4585 4.9913 34.855 5.53829 35.1285C6.11263 35.4294 6.74167 35.6345 7.42541 35.7439C8.10915 35.8533 8.82024 35.908 9.55868 35.908C11.227 35.908 12.5671 35.6208 13.5791 35.0465C14.591 34.4722 15.3568 33.72 15.8764 32.7902C16.3961 31.8603 16.7243 30.8073 16.861 29.6313C17.0251 28.4553 17.0935 27.2519 17.0661 26.0211C16.273 27.3339 15.179 28.3322 13.7842 29.0159C12.4167 29.6723 10.9809 30.0005 9.47663 30.0005C7.863 30.0005 6.4545 29.6997 5.25112 29.098C4.07509 28.4689 3.0905 27.6484 2.29736 26.6365C1.53158 25.5972 0.957235 24.3938 0.574341 23.0264C0.191447 21.6589 0 20.2367 0 18.7598C0 17.2009 0.177772 15.7377 0.533317 14.3702C0.888861 13.0027 1.44953 11.8267 2.21532 10.8421C3.00845 9.83019 4.00671 9.03706 5.21009 8.46271C6.41348 7.88837 7.87668 7.6012 9.5997 7.6012C10.2834 7.6012 10.9809 7.69693 11.6919 7.88837C12.403 8.07982 13.0868 8.35332 13.7432 8.70886C14.4269 9.06441 15.0423 9.51567 15.5893 10.0627C16.1636 10.6097 16.6285 11.225 16.9841 11.9088H17.0661V8.17554Z" fill="currentColor" />
      <path d="M28.3203 29.4262H25.8588V8.17554H28.3203V12.1549H28.4023C29.0861 10.4592 29.9612 9.2832 31.0279 8.62681C32.1219 7.94307 33.5577 7.6012 35.3354 7.6012V10.2678C33.9406 10.2404 32.7919 10.4592 31.8894 10.9242C30.9869 11.3891 30.2621 12.0182 29.7151 12.8113C29.1955 13.6044 28.8262 14.548 28.6074 15.642C28.416 16.7086 28.3203 17.8299 28.3203 19.006V29.4262Z" fill="currentColor" />
      <path d="M54.0602 17.324C54.0602 16.2847 53.9097 15.3138 53.6089 14.4112C53.3354 13.4814 52.9115 12.6882 52.3372 12.0318C51.7902 11.3481 51.0927 10.8148 50.2449 10.4319C49.3971 10.0216 48.4262 9.81652 47.3322 9.81652C46.2382 9.81652 45.2673 10.0216 44.4194 10.4319C43.599 10.8421 42.8879 11.3891 42.2862 12.0729C41.7118 12.7566 41.2469 13.5497 40.8913 14.4523C40.5358 15.3548 40.3033 16.312 40.1939 17.324H54.0602ZM40.1939 19.3752C40.1939 20.5239 40.3444 21.6179 40.6452 22.6571C40.9461 23.6691 41.3836 24.5579 41.958 25.3237C42.5597 26.0622 43.3118 26.6639 44.2143 27.1288C45.1169 27.5664 46.1561 27.7852 47.3322 27.7852C48.9458 27.7852 50.327 27.3613 51.4756 26.5134C52.6243 25.6656 53.3901 24.4622 53.773 22.9033H56.5216C56.2208 23.9152 55.8242 24.8588 55.3319 25.734C54.8396 26.5818 54.2243 27.3339 53.4858 27.9903C52.7474 28.6193 51.8722 29.1116 50.8603 29.4672C49.8483 29.8227 48.6723 30.0005 47.3322 30.0005C45.6365 30.0005 44.1733 29.7133 42.9426 29.139C41.7118 28.5646 40.6999 27.7852 39.9068 26.8006C39.1136 25.7887 38.5256 24.6126 38.1427 23.2725C37.7598 21.905 37.5684 20.4418 37.5684 18.8829C37.5684 17.324 37.7872 15.8608 38.2248 14.4933C38.6897 13.1258 39.3324 11.9361 40.1529 10.9242C41.0008 9.88489 42.0264 9.07808 43.2297 8.50374C44.4331 7.90205 45.8006 7.6012 47.3322 7.6012C50.2586 7.6012 52.5559 8.61314 54.2243 10.637C55.8926 12.6335 56.7131 15.5463 56.6857 19.3752H40.1939Z" fill="currentColor" />
      <path d="M76.8559 17.324C76.8559 16.2847 76.7055 15.3138 76.4047 14.4112C76.1312 13.4814 75.7073 12.6882 75.1329 12.0318C74.5859 11.3481 73.8885 10.8148 73.0407 10.4319C72.1928 10.0216 71.2219 9.81652 70.1279 9.81652C69.034 9.81652 68.063 10.0216 67.2152 10.4319C66.3947 10.8421 65.6836 11.3891 65.0819 12.0729C64.5076 12.7566 64.0427 13.5497 63.6871 14.4523C63.3316 15.3548 63.0991 16.312 62.9897 17.324H76.8559ZM62.9897 19.3752C62.9897 20.5239 63.1401 21.6179 63.441 22.6571C63.7418 23.6691 64.1794 24.5579 64.7537 25.3237C65.3554 26.0622 66.1076 26.6639 67.0101 27.1288C67.9126 27.5664 68.9519 27.7852 70.1279 27.7852C71.7416 27.7852 73.1227 27.3613 74.2714 26.5134C75.4201 25.6656 76.1859 24.4622 76.5688 22.9033H79.3174C79.0165 23.9152 78.62 24.8588 78.1277 25.734C77.6354 26.5818 77.02 27.3339 76.2816 27.9903C75.5432 28.6193 74.668 29.1116 73.656 29.4672C72.6441 29.8227 71.4681 30.0005 70.1279 30.0005C68.4323 30.0005 66.9691 29.7133 65.7383 29.139C64.5076 28.5646 63.4957 27.7852 62.7025 26.8006C61.9094 25.7887 61.3214 24.6126 60.9385 23.2725C60.5556 21.905 60.3641 20.4418 60.3641 18.8829C60.3641 17.324 60.5829 15.8608 61.0205 14.4933C61.4855 13.1258 62.1282 11.9361 62.9487 10.9242C63.7965 9.88489 64.8221 9.07808 66.0255 8.50374C67.2289 7.90205 68.5964 7.6012 70.1279 7.6012C73.0543 7.6012 75.3517 8.61314 77.02 10.637C78.6884 12.6335 79.5088 15.5463 79.4815 19.3752H62.9897Z" fill="currentColor" />
      <path d="M86.729 29.4262H84.2676V8.17554H86.729V11.1293C87.7136 10.09 88.7255 9.24218 89.7648 8.58579C90.8315 7.9294 92.1032 7.6012 93.5801 7.6012C94.8929 7.6012 96.1099 7.83368 97.2313 8.29862C98.3526 8.73621 99.2962 9.51567 100.062 10.637C100.582 11.4028 100.882 12.1959 100.964 13.0164C101.074 13.8096 101.129 14.6437 101.129 15.5189V29.4262H98.6671V15.5599C98.6671 13.6455 98.2432 12.2096 97.3954 11.2524C96.5475 10.2951 95.139 9.81652 93.1698 9.81652C92.4041 9.81652 91.7066 9.93959 91.0776 10.1857C90.4486 10.4045 89.8742 10.7054 89.3546 11.0883C88.8623 11.4712 88.4384 11.9088 88.0828 12.4011C87.7273 12.8933 87.4538 13.413 87.2623 13.96C87.0162 14.6437 86.8658 15.3001 86.8111 15.9291C86.7564 16.5582 86.729 17.2419 86.729 17.9804V29.4262Z" fill="currentColor" />
      <path d="M108.135 6.75704C111.657 7.55711 114.582 9.62346 116.738 12.8356L117.201 13.5249L117.506 13.0581C117.921 12.42 119.016 11.0942 119.621 10.4959C121.863 8.27886 124.545 6.92143 127.345 6.58713C128.223 6.48219 132.319 6.46074 132.314 6.56105C132.311 6.59781 131.9 6.92508 131.4 7.28831C130.899 7.65163 129.623 8.58432 128.563 9.3609L126.635 10.773L126.599 16.0433C126.564 20.9563 126.55 21.371 126.386 22.1593C126.121 23.4337 125.888 24.1514 125.391 25.23C124.543 27.0687 123.719 28.2082 121.761 30.2495L120.46 31.6063L120.438 24.1236C120.426 20.0082 120.394 16.6409 120.367 16.6409C120.34 16.6409 120.254 16.7174 120.176 16.8109C120.099 16.9044 119.386 17.7294 118.593 18.6444L117.499 19.8277C117.408 19.9257 117.281 19.9815 117.147 19.9815C117.009 19.9815 116.877 19.9222 116.785 19.8189C116.485 19.4832 115.851 18.7757 115.275 18.0815L114 16.5444L113.958 24.0914L113.915 31.6384L112.508 30.1698C110.184 27.7442 109.101 26.0696 108.391 23.8059C107.883 22.1835 107.898 22.3887 107.862 16.401L107.828 10.8652L104.9 8.71988C103.29 7.53984 101.973 6.55188 101.973 6.52429C101.973 6.4967 103.168 6.49438 104.629 6.51904C106.931 6.55802 107.399 6.58971 108.135 6.75704Z" fill="var(--color-brand)" />
      <path d="M135.118 9.95562C136.627 8.0326 139.218 7.07109 142.89 7.07109C145.281 7.07109 147.404 7.54517 149.26 8.49332C151.117 9.44148 152.045 11.231 152.045 13.8617V23.8775C152.045 24.5719 152.058 25.4132 152.085 26.4014C152.125 27.1493 152.238 27.6567 152.425 27.9238C152.612 28.1909 152.893 28.4112 153.267 28.5848V29.4262H147.057C146.883 28.9855 146.763 28.5715 146.696 28.1842C146.63 27.7969 146.576 27.3562 146.536 26.8621C145.748 27.7168 144.84 28.4446 143.812 29.0456C142.583 29.7533 141.194 30.1072 139.645 30.1072C137.669 30.1072 136.033 29.5463 134.738 28.4246C133.456 27.2895 132.815 25.687 132.815 23.617C132.815 20.9328 133.85 18.9898 135.919 17.7879C137.055 17.1335 138.724 16.6661 140.927 16.3857L142.87 16.1453C143.925 16.0118 144.68 15.8449 145.134 15.6445C145.949 15.2973 146.356 14.7565 146.356 14.022C146.356 13.1273 146.042 12.513 145.414 12.1791C144.8 11.8319 143.892 11.6583 142.69 11.6583C141.341 11.6583 140.386 11.9921 139.826 12.6599C139.425 13.154 139.158 13.8217 139.024 14.663H133.516C133.636 12.7533 134.17 11.1842 135.118 9.95562ZM139.365 25.2997C139.899 25.7404 140.553 25.9607 141.328 25.9607C142.557 25.9607 143.685 25.6002 144.713 24.879C145.755 24.1579 146.296 22.8425 146.336 20.9328V18.8095C145.975 19.0365 145.608 19.2235 145.234 19.3704C144.874 19.5039 144.373 19.6308 143.732 19.751L142.45 19.9914C141.248 20.205 140.386 20.4654 139.866 20.7726C138.984 21.2934 138.544 22.1013 138.544 23.1964C138.544 24.1712 138.817 24.8724 139.365 25.2997Z" fill="var(--color-brand)" />
      <path d="M172.176 8.59348C173.886 9.68853 174.867 11.5715 175.121 14.2423H169.412C169.332 13.5079 169.125 12.9269 168.791 12.4996C168.163 11.7251 167.095 11.3378 165.586 11.3378C164.344 11.3378 163.456 11.5314 162.922 11.9187C162.401 12.306 162.141 12.76 162.141 13.2808C162.141 13.9352 162.421 14.4093 162.982 14.7031C163.543 15.0102 165.526 15.5377 168.931 16.2855C171.201 16.8197 172.904 17.6277 174.039 18.7093C175.161 19.8044 175.722 21.1732 175.722 22.8158C175.722 24.9792 174.914 26.7486 173.298 28.1241C171.696 29.4863 169.212 30.1673 165.846 30.1673C162.414 30.1673 159.877 29.4462 158.234 28.0039C156.605 26.5483 155.791 24.6987 155.791 22.4552H161.58C161.7 23.4701 161.96 24.1913 162.361 24.6186C163.069 25.3798 164.377 25.7604 166.287 25.7604C167.409 25.7604 168.297 25.5935 168.951 25.2596C169.619 24.9258 169.953 24.425 169.953 23.7573C169.953 23.1163 169.686 22.6288 169.152 22.295C168.617 21.9611 166.634 21.3869 163.202 20.5723C160.732 19.958 158.989 19.1901 157.974 18.2687C156.959 17.3606 156.452 16.0518 156.452 14.3425C156.452 12.326 157.24 10.5966 158.815 9.15436C160.405 7.69874 162.635 6.97094 165.506 6.97094C168.23 6.97094 170.454 7.51178 172.176 8.59348Z" fill="var(--color-brand)" />
      <path d="M200 29.4262H193.109L187.881 20.0915L185.517 22.5554V29.4262H179.908V0H185.517V15.905L192.628 7.69207H199.7L192.068 16.0452L200 29.4262Z" fill="var(--color-brand)" />
    </svg>
  );
}

export default function Footer(): ReactNode {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { pathname } = useLocation();
  const isActive = (to: string) =>
    pathname === to || pathname.startsWith(`${to}/`);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please provide a correct email.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section data-theme="dark" className={styles.footerWrap}>
      <div className={styles.footerContain}>
        <nav className={styles.footerLayout}>
          {/* Left: Subscribe form (6 cols) */}
          <div className={styles.footerFormWrap}>
            <div className={styles.footerFormLayout}>
              <div className={styles.footerFormTitle}>Subscribe to Our Insider Updates</div>
              <div className={styles.formWrap}>
                {submitted ? (
                  <div className={styles.successMessage}>
                    Thank you! Your submission has been received!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className={styles.formList}>
                    <div className={styles.formFieldWrap}>
                      <div className={styles.formFieldInner}>
                        <input
                          className={styles.formInput}
                          autoComplete="off"
                          maxLength={256}
                          name="Email"
                          placeholder="Email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          aria-label="Email"
                        />
                        <button type="submit" className={styles.btnFormWrap}>
                          <div className={styles.btnFormIconWrap}>
                            <div className={styles.btnFormIcon}>
                              <ArrowIcon />
                            </div>
                          </div>
                        </button>
                      </div>
                      {error && <div className={styles.formFieldError}>{error}</div>}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className={styles.footerDivider} />

          {/* Right: Logo + Nav (12 cols inner grid) */}
          <div className={styles.footerContent}>
            {/* Logo + description (3 cols) */}
            <div className={styles.footerLogoWrap}>
              <div className={styles.footerLogoLayout}>
                <GreenmaskLogo />
                <p className={styles.footerLogoText}>
                  Greenmask is an open-source project focused on innovative solutions for
                  information security and software development, offering integration services
                  and professional support.
                </p>
              </div>
            </div>

            {/* Nav groups (6 cols) */}
            <div className={styles.footerNavWrap}>
              <div className={styles.footerNavLayout}>
                {/* Menu group */}
                <div className={styles.footerGroup}>
                  <div className={styles.footerGroupLayout}>
                    <ul className={styles.footerGroupList}>
                      {menuLinks.map((link) => (
                        <li key={link.label} className={styles.footerGroupItem}>
                          {link.to ? (
                            <Link
                              to={link.to}
                              className={clsx(
                                styles.footerLinkWrap,
                                isActive(link.to) && styles.footerLinkWrapActive,
                              )}
                              aria-current={isActive(link.to) ? 'page' : undefined}>
                              <span className={styles.footerLinkText}>
                                <span className="link-slide">
                                  <span className="link-slide__track">
                                    <span className="link-slide__default">{link.label}</span>
                                    <span className="link-slide__hover" aria-hidden="true">{link.label}</span>
                                  </span>
                                </span>
                              </span>
                            </Link>
                          ) : (
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.footerLinkWrap}>
                              <span className={styles.footerLinkText}>
                                <span className="link-slide">
                                  <span className="link-slide__track">
                                    <span className="link-slide__default">{link.label}</span>
                                    <span className="link-slide__hover" aria-hidden="true">{link.label}</span>
                                  </span>
                                </span>
                              </span>
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Social Media group */}
                <div className={styles.footerGroup}>
                  <div className={styles.footerGroupLayout}>
                    <ul className={styles.footerGroupList}>
                      {socialLinks.map((link) => (
                        <li key={link.label} className={styles.footerGroupItem}>
                          <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.footerLinkWrap}>
                            <span className={styles.footerLinkText}>
                              <span className="link-slide">
                                <span className="link-slide__track">
                                  <span className="link-slide__default">{link.label}</span>
                                  <span className="link-slide__hover" aria-hidden="true">{link.label}</span>
                                </span>
                              </span>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Bottom bar */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLayout}>
            <div className={styles.footerBottomText}>
              Copyright &copy; GreenMask {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
