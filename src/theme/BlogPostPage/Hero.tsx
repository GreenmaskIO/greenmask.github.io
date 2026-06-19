import {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

import styles from './styles.module.css';

function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function readingTimeLabel(minutes?: number): string | null {
  if (!minutes) return null;
  const rounded = Math.max(1, Math.round(minutes));
  return `${rounded} min read`;
}

export function Breadcrumbs(): ReactNode {
  const {metadata} = useBlogPost();
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
      <ol className={styles.breadcrumbsList}>
        <li className={styles.breadcrumbsItem}>
          <Link to="/blog" className={styles.breadcrumbsLink}>
            Blog
          </Link>
        </li>
        <li className={styles.breadcrumbsSeparator} aria-hidden>
          /
        </li>
        <li
          className={clsx(styles.breadcrumbsItem, styles.breadcrumbsCurrent)}
          aria-current="page">
          {metadata.title}
        </li>
      </ol>
    </nav>
  );
}

function IntroBlock(): ReactNode {
  const {assets, metadata} = useBlogPost();
  const {title, date, readingTime, authors, tags} = metadata;
  const primaryTag = tags[0];
  const author = authors[0];
  const authorAvatar =
    (assets.authorsImageUrls?.[0] as string | undefined) ?? author?.imageURL;

  return (
    <header className={styles.intro}>
      {primaryTag && (
        <Link to={primaryTag.permalink} className={styles.tagPill}>
          {primaryTag.label}
        </Link>
      )}
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.meta}>
        {author?.name && (
          <span className={styles.author}>
            {authorAvatar && (
              <img
                src={authorAvatar as string}
                alt={author.name}
                className={styles.authorAvatar}
              />
            )}
            <span className={styles.authorName}>{author.name}</span>
          </span>
        )}
        <span className={styles.metaDot} aria-hidden>
          ·
        </span>
        <span className={styles.metaItem}>{formatDate(date)}</span>
        {readingTimeLabel(readingTime) && (
          <>
            <span className={styles.metaDot} aria-hidden>
              ·
            </span>
            <span className={styles.metaItem}>
              {readingTimeLabel(readingTime)}
            </span>
          </>
        )}
      </div>
    </header>
  );
}

export default function Hero(): ReactNode {
  return (
    <section className={styles.heroBand}>
      <div className="container">
        <div className={styles.heroContent}>
          <IntroBlock />
        </div>
      </div>
    </section>
  );
}

export function CoverImage(): ReactNode {
  const {assets, metadata} = useBlogPost();
  const src = assets.image ?? metadata.frontMatter.image;
  if (!src) {
    return null;
  }
  return (
    <figure className={styles.coverImageFigure}>
      <img
        src={src as string}
        alt={metadata.title}
        className={styles.coverImage}
        loading="eager"
      />
    </figure>
  );
}
