import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, basename, extname } from 'node:path';
import { transformAsync } from '@babel/core';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_DIR = resolve(__dirname, '..');
const SRC_DIR = resolve(SITE_DIR, 'src');
const OUT_DIR = resolve(SRC_DIR, 'compiled');
const BODY_SEO_DIR = resolve(__dirname, 'body-seo');

// Wipe + recreate compiled/
try { await rm(OUT_DIR, { recursive: true, force: true }); } catch {}
await mkdir(OUT_DIR, { recursive: true });

const babelOptions = {
  presets: [['@babel/preset-react', { runtime: 'classic', development: false }]],
  babelrc: false,
  configFile: false,
  sourceType: 'script',
  compact: false
};

// Step 1: Transpile all JSX → JS
const entries = await readdir(SRC_DIR);
const jsxFiles = entries.filter(f => f.toLowerCase().endsWith('.jsx'));
for (const file of jsxFiles) {
  const inPath = resolve(SRC_DIR, file);
  const outPath = resolve(OUT_DIR, basename(file, extname(file)) + '.js');
  const input = await readFile(inPath, 'utf-8');
  const result = await transformAsync(input, { ...babelOptions, filename: file });
  await writeFile(outPath, result.code, 'utf-8');
  console.log('✓ Compiled', file);
}

// Step 2: Update each HTML file
const rootEntries = await readdir(SITE_DIR);
const htmlFiles = rootEntries.filter(f => f.toLowerCase().endsWith('.html'));

for (const htmlFile of htmlFiles) {
  const path = resolve(SITE_DIR, htmlFile);
  let html = await readFile(path, 'utf-8');

  // Remove @babel/standalone
  html = html.replace(/[ \t]*<script\b[^>]*src="https:\/\/unpkg\.com\/@babel\/standalone[^"]*"[^>]*><\/script>\s*\r?\n?/gi, '');

  // Switch React dev → production (using function replacer to avoid $ issues)
  html = html.replace(
    /<script\b([^>]*)src="https:\/\/unpkg\.com\/react@18\.3\.1\/umd\/react\.development\.js"([^>]*)><\/script>/gi,
    function(full, pre, post) {
      return '<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>';
    }
  );
  html = html.replace(
    /<script\b([^>]*)src="https:\/\/unpkg\.com\/react-dom@18\.3\.1\/umd\/react-dom\.development\.js"([^>]*)><\/script>/gi,
    function(full, pre, post) {
      return '<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>';
    }
  );

  // Rewrite <script type="text/babel" src="src/X.jsx"> → <script src="src/compiled/X.js">
  html = html.replace(
    /<script\b\s+type="text\/babel"\s+src="src\/([^"]+)\.jsx"\s*><\/script>/gi,
    function(full, name) {
      return '<script src="src/compiled/' + name + '.js"></script>';
    }
  );

  // Step 3: Inject per-page body SEO (using lastIndexOf to avoid Bug 7)
  const pageName = basename(htmlFile, '.html');
  try {
    const seoContent = (await readFile(resolve(BODY_SEO_DIR, pageName + '.html'), 'utf-8')).trim();
    if (!html.includes('ts-seo-content')) {
      const idx = html.toLowerCase().lastIndexOf('</body>');
      if (idx !== -1) {
        html = html.slice(0, idx) + '\n' + seoContent + '\n' + html.slice(idx);
      }
    }
  } catch { /* no body-seo file for this page — skip */ }

  await writeFile(path, html, 'utf-8');
  console.log('✓ Updated', htmlFile);
}

console.log('\nBuild complete.');
