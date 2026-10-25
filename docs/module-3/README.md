# Module 3 — Deployment lab record

## Project

- GitHub: https://github.com/Marjt23/Personal_CV
- Existing production: https://personalcv-neon.vercel.app/
- Lab branch: `codex/module-3-deployment-lab`
- Homepage: `/`
- About page: `/about.html`
- Framework: plain HTML/CSS/JavaScript; no framework migration
- Build: `npm run build`
- Output: `dist`
- Environment variable: `PUBLIC_GITHUB_USERNAME=Marjt23`

## What changed

The Projects card loads real public repository metadata from GitHub's REST API: repository name, main language, and last push date. It reads its username from the build-generated `site-config.json`. Network failures display a helpful message and a retry button while the permanent source-code link remains available. The public username is intentionally visible in the browser. No private credentials are used or copied into the output.

## Local development

1. Install Node.js 22 or later.
2. Copy `.env.example` to `.env`.
3. Run `npm run check`, `npm run build`, and `npm run dev`.
4. Open http://localhost:3000 and test both pages and repository data.

There are no third-party package dependencies. The build copies an explicit list of website assets to `dist`; it does not publish `.env`, `.git`, ignored original-source copies, or lab notes.

## Real local error and solution

A controlled local build used `PUBLIC_GITHUB_USERNAME=not a username`. Validation rejected it because a GitHub username cannot contain spaces. The first meaningful error is in `local-build-error.txt`. Setting the value to `Marjt23` produced the successful build in `local-build-success.txt`.

This is **local evidence**, not a Vercel deployment log. Do not label it as cloud failure evidence.

## Vercel configuration

In the existing personalcv project, set PUBLIC_GITHUB_USERNAME to Marjt23 for Production, Preview, and Development. Never add private keys with a public prefix. `vercel.json` selects the static build and output directory. Do not create a new Vercel project or change the existing domain.

## Preview, release, and recovery

1. Push this branch and open its Vercel Preview deployment.
2. Confirm the correct source commit, Ready status, About page, and GitHub data.
3. Capture the preview URL and screenshot before merging.
4. Merge the reviewed branch into main, observe the resulting production deployment, and capture Ready status.
5. For a **controlled cloud failure**, use a separate disposable preview branch and a temporary invalid build setting; inspect the first useful build-log error, fix it, and redeploy. Never introduce the test error on main.
6. To demonstrate Vercel rollback, identify the previous working production release in Deployments and use the dashboard's eligible rollback/promote action, then restore the desired release. A Git revert is a different operation and is not evidence of Vercel's instant rollback feature.

A rollback changes production traffic. Carry it out only during an explicitly approved demonstration window with the known good release identified.

## Required evidence — do not fabricate

- [x] GitHub repository URL
- [x] Existing production URL
- [x] Homepage and About page implemented
- [x] External API call and environment-variable support implemented
- [x] Source checks and local production build
- [ ] Preview deployment URL verified
- [ ] Screenshot: successful production deployment (dashboard)
- [ ] Screenshot: preview deployment
- [ ] Screenshot: deployment history
- [ ] Screenshot: deployment build logs
- [ ] Real cloud deployment error and solution explanation
- [ ] Vercel rollback demonstration
- [ ] Review, merge, and latest production verification

The desktop automation helper could not connect during this session. Dashboard screenshots, logs, and rollback are not claimed as completed. The module's dashboard screenshots are teaching placeholders, not actual project evidence.

## Knowledge-check answers

1. B: push/merge to the configured production branch.
2. False: browser-exposed environment values are public.
3. Preview isolates review/testing from production.
4. Check the variable's exact name, intended environment scope, frontend exposure rules, and whether a fresh deployment includes the change.
5. B: build log.
6. False: the production branch is configurable.
7. Cloud filesystems commonly distinguish Navbar.jsx from navbar.jsx.
8. Restore an eligible known-good production deployment using rollback.
9. C: CNAME is the common subdomain setup; follow the actual domain instructions.
10. Preview helps catch regressions before they affect public users.

## Current publishing blocker

The branch commit could not be pushed: GitHub returned HTTP 403, permission denied to account `2d1e3th` for `Marjt23/Personal_CV`. Correct Git authentication or repository collaborator access before retrying `git push -u origin codex/module-3-deployment-lab`. This is a Git authorization error, not a Vercel build failure. Production remains unchanged. The public GitHub repository API was separately verified with HTTP 200.
