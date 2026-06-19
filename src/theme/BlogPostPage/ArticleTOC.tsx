import {useEffect, useState, type ReactNode} from 'react';
import TOC from '@theme/TOC';
import type {TOCItem} from '@docusaurus/mdx-loader';

import styles from './styles.module.css';

type Props = {
  toc: readonly TOCItem[];
  minHeadingLevel?: number;
  maxHeadingLevel?: number;
};

/**
 * Tracks how far the user has scrolled through the article body
 * (`<article>` element). Returns a number in [0, 1].
 */
function useReadingProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;

    const update = () => {
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setProgress(rect.top <= 0 ? 1 : 0);
        return;
      }
      const scrolled = -rect.top;
      setProgress(Math.min(1, Math.max(0, scrolled / total)));
    };

    update();
    window.addEventListener('scroll', update, {passive: true});
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return progress;
}

export default function ArticleTOC({
  toc,
  minHeadingLevel,
  maxHeadingLevel,
}: Props): ReactNode {
  const progress = useReadingProgress();

  return (
    <div className={styles.articleToc}>
      <div className={styles.tocProgressTrack} aria-hidden>
        <div
          className={styles.tocProgressFill}
          style={{width: `${(progress * 100).toFixed(2)}%`}}
        />
      </div>
      <p className={styles.tocLabel}>Contents</p>
      <TOC
        toc={toc}
        minHeadingLevel={minHeadingLevel}
        maxHeadingLevel={maxHeadingLevel}
        className={styles.articleTocInner}
      />
    </div>
  );
}
