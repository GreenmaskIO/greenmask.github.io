import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import SearchBar from '@theme/SearchBar';

import styles from './styles.module.css';

// Search + version selector shown at the top of the docs navigation, in both
// the desktop sidebar column and the mobile nav drawer. Moved here from the
// global navbar — it is documentation-scoped. The stable `docsSidebarToolbar`
// class is a CSS hook for overrides that must reach into the third-party
// search/version markup (e.g. un-hiding the version on mobile).
export default function SidebarSearchToolbar(): ReactNode {
  return (
    <div className={clsx('docsSidebarToolbar', styles.toolbar)}>
      <div className={styles.search}>
        <SearchBar />
      </div>
      <DocsVersionDropdownNavbarItem
        docsPluginId={undefined}
        dropdownItemsBefore={[]}
        dropdownItemsAfter={[]}
        // Computed from the available versions inside the component; the
        // explicit list here only satisfies the navbar-item prop type.
        items={[]}
      />
    </div>
  );
}
