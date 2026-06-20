import path from 'path';
import fs from 'fs/promises';
import { createHash } from 'crypto';
import React from 'react';
import type { LoadContext, Plugin } from '@docusaurus/types';

const W = 1200;
const H = 630;

function hash8(s: string) {
  return createHash('md5').update(s).digest('hex').slice(0, 8);
}

function extractMeta(html: string): { title: string; description: string } {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const descMatch =
    html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) ??
    html.match(/<meta\s+content="([^"]*)"\s+name="description"/i);

  const rawTitle = titleMatch?.[1] ?? 'Greenmask';
  const title =
    rawTitle.replace(/\s*\|\s*Greenmask\s*$/i, '').trim() || 'Greenmask';
  const description = descMatch?.[1] ?? '';

  return { title, description };
}

function cardElement(title: string, description: string): React.ReactElement {
  const shortTitle = title.length > 70 ? title.slice(0, 67) + '…' : title;
  const shortDesc =
    description.length > 130
      ? description.slice(0, 127) + '…'
      : description;
  const fontSize = title.length > 50 ? 48 : 58;

  return React.createElement(
    'div',
    {
      style: {
        width: W,
        height: H,
        backgroundColor: '#1D1D35',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px 80px',
        boxSizing: 'border-box',
        fontFamily: 'Inter',
      },
    },
    // Top: brand name
    React.createElement(
      'div',
      { style: { display: 'flex', alignItems: 'center' } },
      React.createElement(
        'span',
        {
          style: {
            fontSize: 28,
            fontWeight: 700,
            color: '#14C19A',
            letterSpacing: -0.5,
          },
        },
        'Greenmask',
      ),
    ),
    // Middle: title + description
    React.createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: 20 } },
      React.createElement(
        'div',
        {
          style: {
            fontSize,
            fontWeight: 700,
            color: '#FBFBFB',
            lineHeight: 1.1,
            letterSpacing: -1,
            maxWidth: 1000,
          },
        },
        shortTitle,
      ),
      shortDesc &&
        React.createElement(
          'div',
          {
            style: {
              fontSize: 22,
              fontWeight: 400,
              color: 'rgba(251,251,251,0.65)',
              lineHeight: 1.5,
              maxWidth: 880,
            },
          },
          shortDesc,
        ),
    ),
    // Bottom: green accent bar
    React.createElement('div', {
      style: {
        width: 80,
        height: 4,
        backgroundColor: '#14C19A',
        borderRadius: 2,
      },
    }),
  );
}

async function findHtmlFiles(
  dir: string,
  skip = new Set(['img', 'assets']),
): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results: string[] = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory() && !skip.has(e.name)) {
      results.push(...(await findHtmlFiles(p, skip)));
    } else if (e.name.endsWith('.html')) {
      results.push(p);
    }
  }
  return results;
}

export default function ogImagesPlugin(context: LoadContext): Plugin {
  return {
    name: 'og-images',

    async postBuild({ outDir, siteConfig }) {
      // Dynamic imports — satori and @resvg/resvg-js are ESM-only
      const { default: satori } = await import('satori');
      const { Resvg } = await import('@resvg/resvg-js');

      // Load Inter fonts bundled via @fontsource/inter
      const fontBase = path.join(
        context.siteDir,
        'node_modules/@fontsource/inter/files',
      );
      const [regularData, boldData] = await Promise.all([
        fs.readFile(path.join(fontBase, 'inter-latin-400-normal.woff')),
        fs.readFile(path.join(fontBase, 'inter-latin-700-normal.woff')),
      ]);

      const satoriOptions = {
        width: W,
        height: H,
        fonts: [
          { name: 'Inter', data: regularData, weight: 400 as const, style: 'normal' as const },
          { name: 'Inter', data: boldData, weight: 700 as const, style: 'normal' as const },
        ],
      };

      const ogDir = path.join(outDir, 'img', 'og');
      await fs.mkdir(ogDir, { recursive: true });

      const htmlFiles = await findHtmlFiles(outDir);

      // Deduplicate concurrent renders for identical title+desc pairs
      const inFlight = new Map<string, Promise<void>>();
      let generated = 0;
      let cached = 0;

      await Promise.all(
        htmlFiles.map(async (htmlFile) => {
          const html = await fs.readFile(htmlFile, 'utf-8');
          const { title, description } = extractMeta(html);

          const key = hash8(`${title}|${description}`);
          const imgName = `${key}.png`;
          const imgPath = path.join(ogDir, imgName);
          const baseUrl = siteConfig.url.replace(/\/$/, '');
          const imgUrl = `${baseUrl}/img/og/${imgName}`;

          if (!inFlight.has(key)) {
            inFlight.set(
              key,
              fs.access(imgPath).then(
                () => {
                  cached++;
                },
                async () => {
                  const svg = await satori(
                    cardElement(title, description),
                    satoriOptions,
                  );
                  const resvg = new Resvg(svg);
                  await fs.writeFile(imgPath, Buffer.from(resvg.render().asPng()));
                  generated++;
                },
              ),
            );
          }
          await inFlight.get(key)!;

          // Patch og:image and og:image dimensions
          const ogTag = `<meta property="og:image" content="${imgUrl}">`;
          const ogWidthTag = `<meta property="og:image:width" content="${W}">`;
          const ogHeightTag = `<meta property="og:image:height" content="${H}">`;
          const twitterTag = `<meta name="twitter:image" content="${imgUrl}">`;
          const twitterCardTag = `<meta name="twitter:card" content="summary_large_image">`;

          let patched = html;

          const ogImageRe = /<meta\s[^>]*property=["']?og:image["']?[^>]*\/?>/i;
          if (ogImageRe.test(patched)) {
            patched = patched.replace(ogImageRe, ogTag);
          } else {
            patched = patched.replace('</head>', `${ogTag}\n</head>`);
          }

          if (!/<meta property="og:image:width"/.test(patched)) {
            patched = patched.replace(
              '</head>',
              `${ogWidthTag}\n${ogHeightTag}\n</head>`,
            );
          }

          const twitterImageRe = /<meta\s[^>]*name=["']?twitter:image["']?[^>]*\/?>/i;
          if (twitterImageRe.test(patched)) {
            patched = patched.replace(twitterImageRe, twitterTag);
          } else {
            patched = patched.replace('</head>', `${twitterTag}\n</head>`);
          }

          if (!/<meta name="twitter:card"/.test(patched)) {
            patched = patched.replace(
              '</head>',
              `${twitterCardTag}\n</head>`,
            );
          }

          if (patched !== html) {
            await fs.writeFile(htmlFile, patched, 'utf-8');
          }
        }),
      );

      console.log(
        `[og-images] ${generated} generated, ${cached} cached — ${htmlFiles.length} pages patched`,
      );
    },
  };
}
