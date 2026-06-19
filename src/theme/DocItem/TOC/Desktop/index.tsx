import {useEffect, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TOC from '@theme/TOC';

import styles from './styles.module.css';

/**
 * Tracks how far the user has scrolled through the doc article body.
 * Returns a number in [0, 1].
 */
function useReadingProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const article =
      document.querySelector<HTMLElement>(
        '.theme-doc-markdown',
      ) ?? document.querySelector<HTMLElement>('article');
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

export default function DocItemTOCDesktop(): ReactNode {
  const {toc, frontMatter} = useDoc();
  const progress = useReadingProgress();

  return (
    <div className={styles.docToc}>
      <div className={styles.tocProgressTrack} aria-hidden>
        <div
          className={styles.tocProgressFill}
          style={{width: `${(progress * 100).toFixed(2)}%`}}
        />
      </div>
      <p className={styles.tocLabel}>Contents</p>
      <TOC
        toc={toc}
        minHeadingLevel={frontMatter.toc_min_heading_level}
        maxHeadingLevel={frontMatter.toc_max_heading_level}
        className={clsx(ThemeClassNames.docs.docTocDesktop, styles.docTocInner)}
      />
    </div>
  );
}
