import React, {type ReactNode, useEffect} from 'react';
import {
  useLockBodyScroll,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarMobileSidebarLayout from '@theme/Navbar/MobileSidebar/Layout';
import NavbarMobileSidebarHeader from '@theme/Navbar/MobileSidebar/Header';
import NavbarMobileSidebarPrimaryMenu from '@theme/Navbar/MobileSidebar/PrimaryMenu';
import NavbarMobileSidebarSecondaryMenu from '@theme/Navbar/MobileSidebar/SecondaryMenu';

// Override Docusaurus' default — its `shouldRender` returns false above 996px,
// which kills the drawer on tablet widths. We want the burger to open the
// sidebar at the same breakpoint as our visual switch (≤1200px). The provider
// still flips `shown` on toggle clicks at any viewport, so dropping the
// `shouldRender` gate is enough.
export default function NavbarMobileSidebar(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  useLockBodyScroll(mobileSidebar.shown);

  // Auto-close the drawer when the viewport grows past the tablet breakpoint.
  // Docusaurus' provider only resets `shown` when crossing its hardcoded 996px
  // boundary, so without this the drawer would stay "stuck" open if a user
  // resizes from tablet to desktop while it's visible.
  useEffect(() => {
    if (!mobileSidebar.shown) return;
    const handler = () => {
      if (window.innerWidth > 1200) {
        mobileSidebar.toggle();
      }
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [mobileSidebar]);

  if (mobileSidebar.disabled) {
    return null;
  }
  return (
    <NavbarMobileSidebarLayout
      header={<NavbarMobileSidebarHeader />}
      primaryMenu={<NavbarMobileSidebarPrimaryMenu />}
      secondaryMenu={<NavbarMobileSidebarSecondaryMenu />}
    />
  );
}
