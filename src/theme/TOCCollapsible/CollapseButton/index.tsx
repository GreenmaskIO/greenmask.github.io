import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  collapsed: boolean;
};

// Override Docusaurus' default "On this page" label to match the swizzled
// desktop TOC header ("Contents") so the mobile accordion reads
// consistently across both surfaces.
export default function TOCCollapsibleCollapseButton({
  collapsed,
  className,
  ...props
}: Props): ReactNode {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        'clean-btn',
        styles.tocCollapsibleButton,
        !collapsed && styles.tocCollapsibleButtonExpanded,
        className,
      )}>
      Contents
    </button>
  );
}
