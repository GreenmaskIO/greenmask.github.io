import {type ReactNode} from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  BlogPostProvider,
  useBlogPost,
} from '@docusaurus/plugin-content-blog/client';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SearchMetadata from '@theme/SearchMetadata';
import BlogListPaginator from '@theme/BlogListPaginator';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import type {Props} from '@theme/BlogListPage';
import type {BlogPostMetadata} from '@docusaurus/plugin-content-blog';

import styles from './styles.module.css';

type BlogContentComponent = Props['items'][number]['content'];

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

function CardMeta(): ReactNode {
  const {assets, metadata} = useBlogPost();
  const {date, readingTime, authors} = metadata;
  const author = authors[0];
  const authorAvatar =
    (assets.authorsImageUrls?.[0] as string | undefined) ?? author?.imageURL;
  return (
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
  );
}

function FeaturedCard(): ReactNode {
  const {assets, metadata} = useBlogPost();
  const {title, description, permalink, tags} = metadata;
  const image = (assets.image as string | undefined) ?? metadata.frontMatter.image;
  const primaryTag = tags[0];

  return (
    <article className={styles.featured}>
      <div className={styles.featuredBody}>
        {primaryTag && (
          <span className={styles.tagPill}>{primaryTag.label}</span>
        )}
        <h2 className={styles.featuredTitle}>
          <Link to={permalink} className={styles.featuredTitleLink}>
            {title}
          </Link>
        </h2>
        {description && <p className={styles.featuredExcerpt}>{description}</p>}
        <CardMeta />
      </div>
      <Link to={permalink} className={styles.featuredImageLink}>
        {image ? (
          <img
            src={image as string}
            alt={title}
            className={styles.featuredImage}
            loading="eager"
          />
        ) : (
          <div className={clsx(styles.featuredImage, styles.imagePlaceholder)} />
        )}
      </Link>
    </article>
  );
}

function GridCard(): ReactNode {
  const {assets, metadata} = useBlogPost();
  const {title, description, permalink, tags} = metadata;
  const image = (assets.image as string | undefined) ?? metadata.frontMatter.image;
  const primaryTag = tags[0];

  return (
    <article className={styles.card}>
      <Link to={permalink} className={styles.cardImageLink}>
        {image ? (
          <img
            src={image as string}
            alt={title}
            className={styles.cardImage}
            loading="lazy"
          />
        ) : (
          <div className={clsx(styles.cardImage, styles.imagePlaceholder)} />
        )}
      </Link>
      <div className={styles.cardBody}>
        {primaryTag && (
          <span className={styles.tagPill}>{primaryTag.label}</span>
        )}
        <h3 className={styles.cardTitle}>
          <Link to={permalink} className={styles.cardTitleLink}>
            {title}
          </Link>
        </h3>
        {description && <p className={styles.cardExcerpt}>{description}</p>}
        <CardMeta />
      </div>
    </article>
  );
}

function BlogListPageContent(props: Props): ReactNode {
  const {metadata, items} = props;

  // Pull metadata from each post component so we can sort by date and split
  // featured vs grid. Same pattern the default theme uses to render posts.
  const enrichedItems = items.map((item) => {
    const Content = item.content as BlogContentComponent;
    const m = (Content as unknown as {metadata: BlogPostMetadata}).metadata;
    return {Content, metadata: m};
  });

  // Featured = newest post; rest = grid.
  const sorted = [...enrichedItems].sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() -
      new Date(a.metadata.date).getTime(),
  );
  const [featured, ...rest] = sorted;

  const showPaginator = metadata.totalPages > 1;

  return (
    <Layout>
      {featured && (
        <section className={styles.featuredFullBleed}>
          <div className="container">
            <BlogPostProvider content={featured.Content}>
              <FeaturedCard />
            </BlogPostProvider>
          </div>
        </section>
      )}

      <div className={clsx('container', styles.page)}>
        {rest.length > 0 && (
          <div className={styles.grid}>
            {rest.map(({Content}, idx) => (
              <BlogPostProvider key={idx} content={Content}>
                <GridCard />
              </BlogPostProvider>
            ))}
          </div>
        )}

        {showPaginator && (
          <div className={styles.paginator}>
            <BlogListPaginator metadata={metadata} />
          </div>
        )}
      </div>
    </Layout>
  );
}

function BlogListPageMetadata(props: Props): ReactNode {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
