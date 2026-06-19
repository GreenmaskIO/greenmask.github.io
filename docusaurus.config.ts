import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Greenmask',
  tagline: 'Open-source Test Data Management and Data Anonymization Platform',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.greenmask.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'greenmaskio', // Usually your GitHub org/user name.
  projectName: 'greenmaskio.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  headTags: [
    {
      tagName: 'script',
      attributes: {},
      innerHTML: [
        'window.dataLayer = window.dataLayer || [];',
        'function gtag(){dataLayer.push(arguments);}',
        "gtag('consent','default',{",
        "  analytics_storage:'denied',",
        "  ad_storage:'denied',",
        "  ad_user_data:'denied',",
        "  ad_personalization:'denied',",
        '  wait_for_update:2000',
        '});',
        "gtag('js',new Date());",
      ].join(''),
    },
  ],

  markdown: {
    hooks: {
      onBrokenMarkdownImages: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          breadcrumbs: false,
          lastVersion: '0.2.19',
          versions: {
            current: {
              label: 'Next',
              badge: true,
            },
            '0.2.19': {
              label: '0.2.19',
              badge: false,
            },
          },
        },
        blog: {
          blogTitle: 'Greenmask Blog',
          blogDescription:
            'Updates, deep dives, and tutorials on database anonymization, synthetic data generation, and Test Data Management with Greenmask.',
          showReadingTime: true,
          // Keep all posts available to the swizzled BlogPostPage so it can
          // render a Related Articles section, even though the recent-posts
          // sidebar UI itself is replaced by a sticky heading nav.
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // TODO: confirm the canonical source repo for blog posts and set
          // editUrl accordingly. Until then, leave it unset so no incorrect
          // "Edit this page" link is rendered.
          // editUrl: 'https://github.com/greenmaskio/<repo>/tree/main/blog/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Greenmask',
        src: 'img/logo.svg',
        href: '/',
      },
      items: [
        { to: '/request-a-feature', label: 'Request a Feature', position: 'left' },
        { to: '/about', label: 'About', position: 'left' },
        { to: '/vision', label: 'Vision', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/contacts', label: 'Contacts', position: 'left' },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/greenmaskio/greenmask',
          label: 'Star us',
          position: 'left',
          className: 'navbar__github',
        },
        {
          to: '/docs/architecture',
          label: 'Get started',
          position: 'right',
          className: 'navbar__cta',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright \u00A9 GreenMask ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
