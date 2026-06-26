import {type ReactNode} from 'react';
import type {Props} from '@theme/DocSidebar/Mobile';

// The docs navigation has its own dedicated mobile drawer (DocItem/TOC/Mobile,
// opened from the "Contents" row), so we deliberately do NOT also fill the
// navbar's secondary menu with the docs sidebar. Rendering nothing here means
// no secondary content is registered, so the header hamburger shows only the
// main site menu — no auto-shown docs panel and no "Back to main menu" step.
export default function DocSidebarMobile(_props: Props): ReactNode {
  return null;
}
