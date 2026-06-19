import React, {type ReactNode, useCallback, useEffect, useState} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {
  useDoc,
  useDocsSidebar,
} from '@docusaurus/plugin-content-docs/client';
import TOCCollapsible from '@theme/TOCCollapsible';
import DocSidebarItems from '@theme/DocSidebarItems';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

// Swizzle of DocItem/TOC/Mobile. Renders the Contents accordion + a
// hamburger button. Clicking the button slides a fixed-position
// navigation drawer in from the left with a darkened backdrop overlay.
// Visible only at ≤768px via CSS.
export default function DocItemTOCMobile(): ReactNode {
  const {toc, frontMatter} = useDoc();
  const sidebar = useDocsSidebar();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close the drawer when navigating to a new doc page.
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Close on Escape.
  useEffect(() => {
    if (!sidebarOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [sidebarOpen]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (!sidebarOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [sidebarOpen]);

  const handleToggle = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  return (
    <div className={styles.tocMobileRow}>
      {sidebar?.items && (
        <button
          type="button"
          className={styles.sidebarToggleButton}
          aria-label="Open navigation"
          aria-expanded={sidebarOpen}
          onClick={handleToggle}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden
            focusable={false}
            height={20}
            width={20}
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
      )}

      <div className={styles.tocMobileToc}>
        <TOCCollapsible
          toc={toc}
          minHeadingLevel={frontMatter.toc_min_heading_level}
          maxHeadingLevel={frontMatter.toc_max_heading_level}
          className={clsx(ThemeClassNames.docs.docTocMobile, styles.tocMobile)}
        />
      </div>

      {sidebar?.items && (
        <>
          <div
            className={clsx(
              styles.sidebarBackdrop,
              sidebarOpen && styles.sidebarBackdropOpen,
            )}
            onClick={handleClose}
            aria-hidden
          />
          <aside
            className={clsx(
              styles.sidebarDrawer,
              sidebarOpen && styles.sidebarDrawerOpen,
            )}
            aria-hidden={!sidebarOpen}>
            <div className={styles.sidebarDrawerHeader}>
              <button
                type="button"
                className={styles.sidebarDrawerClose}
                aria-label="Close navigation"
                onClick={handleClose}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden
                  focusable={false}
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M18 6L6 18"
                  />
                </svg>
              </button>
            </div>
            <nav
              className="menu thin-scrollbar"
              aria-label="Docs navigation">
              <ul className="menu__list">
                <DocSidebarItems
                  items={sidebar.items}
                  activePath={location.pathname}
                  level={1}
                />
              </ul>
            </nav>
          </aside>
        </>
      )}
    </div>
  );
}
