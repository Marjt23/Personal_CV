import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import './check.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Only this explicitly public variable is copied to browser configuration.
let username = process.env.PUBLIC_GITHUB_USERNAME;
if (!username) {
  try {
    const env = await readFile(resolve(root, '.env'), 'utf8');
    username = env.match(/^PUBLIC_GITHUB_USERNAME\s*=\s*([A-Za-z0-9-]+)\s*$/m)?.[1];
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}
if (!username) throw new Error('PUBLIC_GITHUB_USERNAME is required. Set it in Vercel Settings > Environment Variables, or in local .env.');
if (!/^[A-Za-z0-9](?:[A-Za-z0-9-]{0,37}[A-Za-z0-9])?$/.test(username)) {
  throw new Error('PUBLIC_GITHUB_USERNAME must be a valid GitHub username, not a URL or email address.');
}
const output = resolve(root, 'dist');
await mkdir(output, { recursive: true });
const files = ['index.html', 'about.html', 'style.css', 'interactions.css', 'editorial.css', 'lab.css', 'script.js', 'github-project.js', 'favicon.svg', 'images', 'certificates'];
for (const file of files) await cp(resolve(root, file), resolve(output, file), { recursive: true });
await writeFile(resolve(output, 'site-config.json'), JSON.stringify({ githubUsername: username, repository: 'Personal_CV' }, null, 2) + '\n');
console.log(`Static build complete: dist/; public GitHub account: ${username}`);
