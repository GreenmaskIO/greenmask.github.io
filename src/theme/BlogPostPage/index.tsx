import {type ReactNode} from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {
  BlogPostProvider,
  useBlogPost,
} from '@docusaurus/plugin-content-blog/client';
import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import BlogPostPageStructuredData from '@theme/BlogPostPage/StructuredData';
import ContentVisibility from '@theme/ContentVisibility';
import TOCCollapsible from '@theme/TOCCollapsible';
import type {Props} from '@theme/BlogPostPage';

import ArticleTOC from './ArticleTOC';
import Hero, {Breadcrumbs} from './Hero';
import styles from './styles.module.css';

function BlogPostPageContent({children}: {children: ReactNode}): ReactNode {
  const {metadata, toc} = useBlogPost();
  const {nextItem, prevItem, frontMatter} = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;

  const showTOC = !hideTableOfContents && toc.length > 0;

  return (
    <Layout>
      <div className={clsx('container', styles.breadcrumbsRow)}>
        <Breadcrumbs />
      </div>

      <Hero />

      <div className={clsx('container', styles.blogPostContainer)}>
        <div className={styles.bodySection}>
          <aside
            className={clsx(styles.tocCol, {
              [styles.tocColHidden]: !showTOC,
            })}
            aria-label="Article navigation">
            {showTOC && (
              <div className={styles.tocSticky}>
                <ArticleTOC
                  toc={toc}
                  minHeadingLevel={tocMinHeadingLevel}
                  maxHeadingLevel={tocMaxHeadingLevel}
                />
              </div>
            )}
          </aside>
          <main className={styles.bodyCol}>
            <ContentVisibility metadata={metadata} />

            {showTOC && (
              <div className={styles.mobileToc}>
                <TOCCollapsible
                  toc={toc}
                  minHeadingLevel={tocMinHeadingLevel}
                  maxHeadingLevel={tocMaxHeadingLevel}
                  className={ThemeClassNames.docs.docTocMobile}
                />
              </div>
            )}

            <BlogPostItem>{children}</BlogPostItem>

            {(nextItem || prevItem) && (
              <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default function BlogPostPage(props: Props): ReactNode {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}>
        <BlogPostPageMetadata />
        <BlogPostPageStructuredData />
        <BlogPostPageContent>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
