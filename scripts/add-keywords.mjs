#!/usr/bin/env node
/**
 * Adds `keywords` to frontmatter of docs pages that already have description but no keywords.
 * Generates keywords from the page title + category-specific terms.
 */
import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { join, basename, dirname } from 'path';

const BASE = new URL('..', import.meta.url).pathname;

// Category keyword rules keyed by path substring
const CATEGORY_EXTRA = [
  ['commands/',             ['greenmask CLI', 'command line', 'postgresql']],
  ['standard_transformers/', ['greenmask transformer', 'data anonymization', 'postgresql']],
  ['advanced_transformers/', ['greenmask transformer', 'advanced anonymization', 'postgresql']],
  ['custom_functions/',      ['custom functions', 'greenmask', 'data generation']],
];

// Specific overrides for conceptual pages
const PAGE_KEYWORDS = {
  'dynamic_parameters.md':                  ['dynamic parameters', 'greenmask', 'transformer configuration', 'postgresql'],
  'transformation_engines.md':              ['hash engine', 'random engine', 'greenmask', 'deterministic anonymization'],
  'transformation_condition.md':            ['transformation condition', 'conditional anonymization', 'greenmask'],
  'transformation_inheritance.md':          ['transformation inheritance', 'partitioned tables', 'greenmask', 'postgresql'],
  'parameters_templating.md':               ['parameter templates', 'go templates', 'greenmask', 'transformer configuration'],
  'parameters_env_vars_interpolation.md':   ['environment variables', 'parameter interpolation', 'greenmask'],
  'database_subset.md':                     ['database subset', 'postgresql subset', 'greenmask', 'referential integrity'],
  'playground.md':                          ['greenmask playground', 'docker', 'data anonymization demo', 'try greenmask'],
  'supporting_new_postgres.md':             ['postgresql version support', 'greenmask compatibility', 'postgres upgrade'],
  // index pages
  'built_in_transformers/index.md':                         ['greenmask transformers', 'data anonymization', 'postgresql transformers'],
  'built_in_transformers/standard_transformers/index.md':   ['standard transformers', 'greenmask', 'data anonymization', 'postgresql'],
  'built_in_transformers/advanced_transformers/index.md':   ['advanced transformers', 'greenmask', 'go templates', 'json transformer'],
  'built_in_transformers/advanced_transformers/custom_functions/index.md': ['custom functions', 'greenmask', 'faker library', 'data generation'],
  'commands/index.md':                      ['greenmask commands', 'CLI reference', 'command line', 'postgresql anonymization'],
};

function extractTitle(fm) {
  const m = fm.match(/^title:\s*"?(.+?)"?\s*$/m);
  return m ? m[1].replace(/^"|"$/g, '') : null;
}

function insertKeywordsIntoFrontmatter(content, keywords) {
  // Insert after the description line
  const kwLine = `keywords: [${keywords.map(k => JSON.stringify(k)).join(', ')}]`;
  return content.replace(
    /^(---\n[\s\S]*?)(description:.*?)(\n)/m,
    `$1$2$3${kwLine}\n`
  );
}

let raw;
try {
  raw = execSync(
    'find docs -name "*.md" | xargs grep -L "^keywords:" | grep -v release_notes',
    { cwd: BASE }
  ).toString().trim();
} catch (e) {
  raw = (e.stdout || Buffer.alloc(0)).toString().trim();
}

const files = raw.split('\n').filter(Boolean);
let count = 0;

for (const rel of files) {
  const file = join(BASE, rel);
  const content = readFileSync(file, 'utf8');
  if (!content.startsWith('---')) continue; // skip files without frontmatter

  const fmEnd = content.indexOf('\n---', 3);
  const fm = fmEnd > 0 ? content.slice(0, fmEnd) : '';
  const title = extractTitle(fm);
  const base = basename(file);

  // Check specific page override first (by base filename or relative path)
  let keywords = null;
  for (const [key, kws] of Object.entries(PAGE_KEYWORDS)) {
    if (rel.endsWith(key)) {
      keywords = kws;
      break;
    }
  }

  if (!keywords) {
    // Derive from category + title
    let categoryExtra = ['greenmask', 'data anonymization', 'postgresql'];
    for (const [pathPart, kws] of CATEGORY_EXTRA) {
      if (rel.includes(pathPart)) {
        categoryExtra = kws;
        break;
      }
    }
    keywords = title ? [title, ...categoryExtra] : categoryExtra;
  }

  const updated = insertKeywordsIntoFrontmatter(content, keywords);
  if (updated === content) {
    console.log(`⚠ Could not insert keywords in: ${rel}`);
    continue;
  }

  writeFileSync(file, updated);
  console.log(`✓ ${rel}`);
  count++;
}

console.log(`\nDone — added keywords to ${count} files.`);
