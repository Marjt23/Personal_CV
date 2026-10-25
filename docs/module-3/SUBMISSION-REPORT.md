# IT415 Module 3 — Submission Report

**Student:** Marjorie Casilao  
**Program:** BS Information Technology, Davao del Norte State College  
**Module:** Vercel Deployment and Application Management

## Submission links

- GitHub repository: https://github.com/Marjt23/Personal_CV
- Production website: https://personalcv-neon.vercel.app/
- About page: https://personalcv-neon.vercel.app/about.html
- External API/environment demonstration: https://personalcv-neon.vercel.app/deployment-lab.html
- Reviewed Preview: https://personalcv-git-codex-module-3-deployment-lab-marjt23s-projects.vercel.app/
- Vercel project: https://vercel.com/marjt23s-projects/personal_cv

## Application and configuration

The application is a personal CV website using HTML5, CSS3, and vanilla JavaScript. Node.js creates a static deployment directory; no frontend framework or package dependencies are required. Vercel runs `npm run build` and serves `dist`, as specified in `vercel.json`.

The separate deployment-lab page requests public metadata from `https://api.github.com/repos/Marjt23/Personal_CV`. It shows the repository name, primary language, and last push date. It has loading, failure, and retry states. Keeping this demonstration separate preserves the owner’s chosen public CV design.

`PUBLIC_GITHUB_USERNAME=Marjt23` is configured locally and in Vercel. The build writes only that intentionally public value and the repository name to `site-config.json`. `.env` is ignored by Git and is not copied into the deployed site. No GitHub API token or private credential is used.

## Release workflow completed

1. The existing main branch supplied the working production portfolio.
2. Lab changes were developed on `codex/module-3-deployment-lab`.
3. The branch push triggered a Vercel Preview deployment.
4. A missing environment variable initially caused the cloud build to fail.
5. After configuration was fixed, the Preview deployment succeeded. The owner’s screenshot confirms real GitHub API results.
6. The reviewed branch was merged into main in commit `b65cb81`, and Vercel reported a successful Production deployment.
7. The API display was subsequently moved off the homepage at the owner’s request. The standalone lab page now provides the same course demonstration.

## Deployment error and solution

**Error:** The initial Preview build failed at `scripts/build.mjs:17` with `PUBLIC_GITHUB_USERNAME is required`. Source checks had already passed; the failure was configuration-related, not an HTML/CSS error.

**Cause:** The variable existed in the developer’s local `.env`, which is intentionally not committed. Vercel did not automatically receive that local value.

**Solution:** Add `PUBLIC_GITHUB_USERNAME` with value `Marjt23` in the Vercel project’s environment settings for the intended environments. Redeploy the lab branch as Preview with current settings. The subsequent deployment succeeded and the page displayed the public repository data.

**Evidence:** `evidence/failed-preview-build-log.png` and `evidence/preview-github-api-working.png` show the actual failure and working result. These are owner-supplied screenshots; they are not generated dashboard mockups.

## Verification completed

- Source checks: single documents, unique IDs, navigation targets, image paths, alt attributes, and CSS structure.
- Local production build with the configured public username.
- API tests: successful public data loading without a token, offline failure/retry recovery, and rejection of invalid configuration.
- Homepage, About page, configuration, script, and certificate tested over local HTTP.
- Production success and HTTP availability checked after the lab merge.

## Evidence index and remaining items

| Requirement | Evidence/status |
| --- | --- |
| GitHub repository URL | Included above |
| Vercel production URL | Included above |
| Production screenshot | `evidence/previous-production-ready.png` shows an earlier Ready production deployment; capture the current release for final submission |
| Preview screenshot | `evidence/preview-github-api-working.png` confirms the reviewed Preview and working external data |
| Deployment logs | `evidence/failed-preview-build-log.png` shows the actual missing-variable failure |
| Error and solution explanation | Included above |
| Deployment history screenshot | Still needed from the Vercel Deployments dashboard |
| Vercel rollback demonstration | Still needed; no Vercel rollback has been performed or claimed |
| Desktop/mobile/tablet visual checks | Earlier desktop checks exist; a full final device review is still required |

## Dashboard steps still required

1. In Vercel, open the **latest Ready Production deployment** and capture a screenshot showing status, environment, source branch/commit, and assigned production domain.
2. Open **Deployments** and capture the list with both Preview and Production entries visible.
3. On the successful deployment, capture the build log showing successful completion. Keep the earlier error screenshot as the error/fix evidence.
4. To demonstrate rollback, first record the current Production deployment and identify an eligible earlier known-good deployment. Use Vercel’s rollback action, verify the public site, capture the restored deployment, then restore the intended latest working release. Do not use the earlier failed Preview. Do not describe a Git revert as Vercel rollback.

The rollback changes the live site, so perform it only during an agreed demonstration window and confirm the target before applying it. Eligibility depends on the project’s available Vercel controls; if unavailable, report that limitation rather than inventing evidence.

## Submission integrity

No deployment-history screenshot or rollback result has been fabricated. The desktop automation helper was unavailable, so the dashboard-only steps above remain clearly marked. No LMS submission has been made. Once those screenshots and rollback evidence are supplied, place them in the evidence folder and submit this report with the repository and public website URLs.
