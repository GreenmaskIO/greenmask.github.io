import {type ReactNode} from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import type {Props} from '@theme/BlogPostItem';

function useContainerClassName() {
  const {isBlogPostPage} = useBlogPost();
  return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}

export default function BlogPostItem({children, className}: Props): ReactNode {
  const containerClassName = useContainerClassName();
  const {isBlogPostPage} = useBlogPost();

  // On the post page, the breadcrumbs / hero / cover image are rendered by
  // `BlogPostPage` (so they can sit inside the full-bleed header band and on
  // the editorial grid). Here we only render the article body — the default
  // footer (tags / read-more / etc.) is intentionally omitted on the post
  // page; tags still drive the in-hero pill and remain reachable via
  // /blog/tags/<tag>.
  if (isBlogPostPage) {
    return (
      <BlogPostItemContainer className={clsx(containerClassName, className)}>
        <BlogPostItemContent>{children}</BlogPostItemContent>
      </BlogPostItemContainer>
    );
  }

  // List view (e.g. /blog/tags/<tag>) keeps the default layout.
  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
