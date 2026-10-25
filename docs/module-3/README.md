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
- [x] Preview deployment URL verified
- [ ] Screenshot: successful production deployment (dashboard)
- [x] Screenshot: preview website with live API output
- [ ] Screenshot: deployment history
- [x] Screenshot: failed deployment build logs
- [x] Real cloud deployment error and solution explanation
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

## Current deployment status

The Preview deployment succeeded after PUBLIC_GITHUB_USERNAME=Marjt23 was added in Vercel and the Preview was redeployed. The GitHub Vercel check reports success at https://vercel.com/marjt23s-projects/personal_cv/EL96NN8dXH6Z6CA2BsfSXeQVkvX7 .

The owner-supplied screenshot `evidence/preview-github-api-working.png` confirms the real API results: Marjt23/Personal_CV, CSS, and the last push date. This verifies the external request and generated public configuration in the deployed Preview. Preview URL: https://personalcv-git-codex-module-3-deployment-lab-marjt23s-projects.vercel.app/ . Vercel sign-in may be required for that preview.

### Actual cloud build error and solution

The first Preview build completed source checks but failed at scripts/build.mjs:17 because PUBLIC_GITHUB_USERNAME was missing. See `evidence/failed-preview-build-log.png`. The local .env was correctly ignored by Git and therefore did not configure Vercel. The fix was to add PUBLIC_GITHUB_USERNAME=Marjt23 in the Vercel project's environment variables for the intended environments, then redeploy Preview using current settings. The new Preview succeeded and loaded public repository metadata. No production error was deliberately introduced.

`evidence/previous-production-ready.png` shows the earlier main deployment marked Ready; it is not evidence of the new lab release. Capture the new production deployment after the merge, deployment history, and the successful build log for the final submission. The Vercel rollback demonstration remains pending and has not been claimed as complete.

Local HTTP verification returned 200 for /, /about.html, /site-config.json, /github-project.js, and the certificate PDF. Three automated tests pass: repository success without credentials, offline failure/retry recovery, and rejection of invalid configuration before an external request.

## Public portfolio cleanup

At the owner’s request, the repository metadata panel and its script include were removed from the public homepage. The source implementation, automated tests, Preview evidence, and environment configuration remain available for the lab record. The homepage no longer makes the external GitHub API call; therefore the current public homepage does not demonstrate that lab requirement.
