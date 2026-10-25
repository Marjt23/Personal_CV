// GitHub's public repository API supplies real project metadata. No token is used.
const panel = document.querySelector('[data-github-project]');
const retry = panel?.querySelector('button');
async function loadRepository() {
  if (!panel) return;
  const status = panel.querySelector('[role="status"]');
  const details = panel.querySelector('dl');
  details.hidden = true;
  retry.hidden = true;
  status.textContent = 'Loading public repository details…';
  try {
    const configResponse = await fetch('site-config.json', { signal: AbortSignal.timeout(8000) });
    if (!configResponse.ok) throw new Error('Configuration unavailable');
    const config = await configResponse.json();
    if (!/^[A-Za-z0-9-]{1,39}$/.test(config.githubUsername) || config.repository !== 'Personal_CV') throw new Error('Invalid configuration');
    const response = await fetch(`https://api.github.com/repos/${encodeURIComponent(config.githubUsername)}/${config.repository}`, { headers: { Accept: 'application/vnd.github+json' }, signal: AbortSignal.timeout(10000) });
    if (!response.ok) throw new Error(`GitHub returned HTTP ${response.status}`);
    const repo = await response.json();
    panel.querySelector('[data-repository-name]').textContent = repo.full_name;
    panel.querySelector('[data-repository-language]').textContent = repo.language || 'Not specified';
    panel.querySelector('[data-repository-updated]').textContent = new Intl.DateTimeFormat('en-PH', { dateStyle: 'medium', timeZone: 'Asia/Manila' }).format(new Date(repo.pushed_at));
    details.hidden = false;
    status.textContent = 'Public repository details from GitHub.';
  } catch {
    status.textContent = 'Repository details are unavailable right now. The source-code link above still works.';
    retry.hidden = false;
  }
}
retry?.addEventListener('click', loadRepository);
loadRepository();
