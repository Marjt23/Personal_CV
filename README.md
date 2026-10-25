# Marjorie Casilao — Personal Portfolio

An elegant editorial CV with deep burgundy accents, warm cream surfaces, muted antique gold details, a circular portrait with floating skill badges, and the original profile photograph.

## Features

- Reference-inspired split hero, two-column capability showcases, side-by-side experience and education, portrait-led About, tools grid, and contact sections
- Existing CV facts and cream/burgundy palette preserved; capability illustrations represent skill categories rather than invented projects
- Rounded sticky navigation with active section pills and a subtle scroll progress line
- Floating portrait badge, entrance transitions, and a moving skills strip with pause/resume controls
- Expandable mobile menu with Escape dismissal and keyboard access
- Visible focus indicators, skip link, and reduced-motion support
- Verified email, phone, and GitHub links

## Technology

HTML5, CSS3, and vanilla JavaScript. Google Fonts provides Playfair Display and DM Sans, with system font fallbacks. No framework, backend, or contact submission service is needed. The Module 3 branch adds a dependency-free Node.js static build.

## Running locally

Open `index.html` directly, use Live Server, or run `python -m http.server 8000` from the project directory.

## Deployment

Compatible with GitHub Pages and Vercel. Publish the repository root for GitHub Pages. On Vercel select Other, leave the build command empty, and use the root directory. Asset paths are relative for project-path hosting.

## Contact

- Email: [marnaihcasilao@gmail.com](mailto:marnaihcasilao@gmail.com)
- Phone: [09657550712](tel:09657550712)
- GitHub: [github.com/Marjt23](https://github.com/Marjt23)

The email was explicitly corrected by the owner. The existing photograph, education, skills, and professional experience are preserved. No additional qualifications, achievements, or social accounts are invented.

## Files

`index.html`, `style.css`, `interactions.css`, `script.js`, `favicon.svg`, and `images/profile.jpg` form the static website. `preview.png` is an older development screenshot and is not used as social preview metadata.

## Academic project context

Marjorie Casilao · 4th Year · Set/Section C  
IT 415 APPLICATION DEVELOPMENT AND EMERGING TECHNOLOGIES

## Course requirements

Student name: **Marjorie Casilao**. Program: **Bachelor of Science in Information Technology**, Davao del Norte State College, **4th Year**.

The site contains a profile photo and introduction, career objective, career interests, education, technical and professional skills, the Personal CV Website project, professional experience, GitHub profile, and contact links. The existing cream/burgundy design is retained.

- Source repository: [Marjt23/Personal_CV](https://github.com/Marjt23/Personal_CV)
- Live Vercel link: [personalcv-neon.vercel.app](https://personalcv-neon.vercel.app/) — confirmed publicly accessible.
- Location: Tagum City, Davao del Norte.
- LinkedIn: https://www.linkedin.com/in/marnaih-casilao-b83548446/
- Achievement: CCNA: Switching, Routing, and Wireless Essentials, completed 19 November 2025 through Cisco Networking Academy, offered by Davao del Norte State College. This is a course-completion certificate, not a claim of passing the CCNA certification exam. The original PDF and a rendered preview are included.

## Understanding the code

- `index.html` holds the content. Each navigation link points to a unique section ID.
- `style.css` defines the theme variables and responsive layouts. Grid/flex layouts stack on smaller screens.
- `interactions.css` contains the pill navigation, hover effects, portrait badge animation, and moving skills strip. Its reduced-motion media query stops decorative animations.
- `script.js` toggles the mobile menu and `aria-expanded`, closes it with Escape or a selected link, updates the active navigation link and scroll-progress line, reveals sections with IntersectionObserver, and controls the ribbon pause button.
- `images/tools/` contains local SVG logos. `images/profile.jpg` is the original portrait.

The capability illustrations are decorative skill representations, not screenshots of claimed client projects. The Projects section accurately lists this portfolio as a course project with a repository link and an illustrated preview.

## Submission

See `SUBMISSION.md` for remaining checks. The repository already has multiple development commits; history should reflect real work rather than artificial commits added for grading.

## First-year film achievement

Blood Ties is a group film from a first-year subject, recognized for Best Production Design (Short Film) at Multimedia Arts Festival 2023. The accompanying Best Actor recognition is attributed to Mark Gerald Ramos. Three owner-supplied photos are displayed; awards for other entries visible in those photos are not claimed for Blood Ties or Marjorie.

## Editorial cover layout

The current design uses a large Portfolio cover heading, a centered portrait, and a continuous ruled grid inspired by the owner-supplied reference. Existing cream, burgundy, and gold colors and all verified CV facts are retained. `editorial.css` supplies the focused layout layer; mobile navigation and reduced-motion support remain available.

## Module 3 lab branch

The Module 3 work adds an About page, live public GitHub repository metadata, and a dependency-free Node.js static build. Copy `.env.example` to `.env`, then run `npm run check`, `npm run build`, and `npm run dev`. Vercel uses `vercel.json` to build `dist/`; set `PUBLIC_GITHUB_USERNAME=Marjt23` in its environment settings. The value is intentionally public; never use a token here.

See [the lab record](docs/module-3/README.md) for evidence requirements, local failure/fix logs, preview/release workflow, rollback guidance, and the current GitHub authorization blocker. These additions are on `codex/module-3-deployment-lab`; the GitHub push and Preview deployment succeeded. The owner verified live GitHub metadata in Preview; see the lab record for the real missing-variable error, its fix, and evidence.

## Submission demonstration

The public CV homepage omits technical repository metadata at the owner’s request. The Module 3 external API and public environment-variable demonstration is available separately at [deployment-lab.html](https://personalcv-neon.vercel.app/deployment-lab.html). Submission notes and the evidence index are in [the report](docs/module-3/SUBMISSION-REPORT.md).
