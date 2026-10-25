import { readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
for (const name of ['index.html', 'about.html']) {
  const html = await readFile(resolve(root, name), 'utf8');
  for (const tag of ['html', 'head', 'body']) {
    if ((html.match(new RegExp(`<${tag}(?:\\s|>)`, 'g')) || []).length !== 1) {
      throw new Error(`${name}: expected one ${tag} element`);
    }
  }
  if (/^(<<<<<<<|=======|>>>>>>>)/m.test(html)) throw new Error(`${name}: conflict marker`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  if (new Set(ids).size !== ids.length) throw new Error(`${name}: duplicate ID`);
  for (const [, target] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(?:https?:|mailto:|tel:)/.test(target)) continue;
    const [path, hash] = target.split('#');
    if (path) await access(resolve(root, path));
    if (!path && hash && !ids.includes(hash)) throw new Error(`${name}: missing #${hash}`);
  }
  for (const [, tag] of html.matchAll(/(<img\b[^>]*>)/g)) {
    if (!/\balt="/.test(tag)) throw new Error(`${name}: image missing alt`);
  }
}
for (const file of ['style.css', 'interactions.css', 'editorial.css', 'lab.css']) {
  const css = await readFile(resolve(root, file), 'utf8');
  if ((css.match(/{/g) || []).length !== (css.match(/}/g) || []).length) {
    throw new Error(`${file}: unbalanced CSS braces`);
  }
}
console.log('Source checks passed: pages, unique IDs, local links/assets, alt text, CSS braces.');
