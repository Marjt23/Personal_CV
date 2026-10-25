import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const code = await readFile(new URL('../github-project.js', import.meta.url), 'utf8');
function fixture(fetch) {
  const nodes = Object.fromEntries(['button', '[role="status"]', 'dl', '[data-repository-name]', '[data-repository-language]', '[data-repository-updated]'].map(key => [key, {
    hidden: false, textContent: '', addEventListener(event, listener) { this[event] = listener; }
  }]));
  const panel = { querySelector: selector => nodes[selector] };
  const context = vm.createContext({ document: { querySelector: () => panel }, fetch, AbortSignal, Intl, Date, encodeURIComponent });
  vm.runInContext(code, context);
  return { nodes, context };
}
const config = { githubUsername: 'Marjt23', repository: 'Personal_CV' };
test('public repository metadata loads without an API token', async () => {
  const calls = [];
  const { nodes, context } = fixture(async (url, options) => {
    calls.push({ url, options });
    return { ok: true, json: async () => url === 'site-config.json' ? config : {
      full_name: 'Marjt23/Personal_CV', language: 'CSS', pushed_at: '2026-10-23T14:48:06Z'
    } };
  });
  await vm.runInContext('loadRepository()', context);
  assert.equal(nodes['[data-repository-name]'].textContent, 'Marjt23/Personal_CV');
  assert.equal(nodes['[data-repository-language]'].textContent, 'CSS');
  assert.equal(nodes.dl.hidden, false);
  assert.equal(nodes.button.hidden, true);
  assert(calls.some(call => call.url === 'https://api.github.com/repos/Marjt23/Personal_CV'));
  assert(calls.every(call => !call.options?.headers?.Authorization));
});
test('network failure offers retry and retry recovers', async () => {
  let online = false;
  const { nodes } = fixture(async url => {
    if (!online) throw new Error('Offline');
    return { ok: true, json: async () => url === 'site-config.json' ? config : {
      full_name: 'Marjt23/Personal_CV', language: 'HTML', pushed_at: '2026-10-23T14:48:06Z'
    } };
  });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(nodes.button.hidden, false);
  assert.equal(nodes.dl.hidden, true);
  assert.match(nodes['[role="status"]'].textContent, /unavailable/);
  online = true;
  await nodes.button.click();
  assert.equal(nodes.button.hidden, true);
  assert.equal(nodes.dl.hidden, false);
});
test('invalid public configuration never sends an external request', async () => {
  let externalCalls = 0;
  const { nodes, context } = fixture(async url => {
    if (url !== 'site-config.json') externalCalls++;
    return { ok: true, json: async () => ({ githubUsername: 'bad/user', repository: 'Personal_CV' }) };
  });
  await vm.runInContext('loadRepository()', context);
  assert.equal(externalCalls, 0);
  assert.equal(nodes.button.hidden, false);
});
