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

HTML5, CSS3, and vanilla JavaScript. Google Fonts provides Playfair Display and DM Sans, with system font fallbacks. No framework, build process, backend, or contact submission service is needed.

## Running locally

Open `index.html` directly, use Live Server, or run `python -m http.server 8000` from the project directory.

## Deployment

Compatible with GitHub Pages and Vercel. Publish the repository root for GitHub Pages. On Vercel select Other, leave the build command empty, and use the root directory. Asset paths are relative for project-path hosting.

## Contact

- Email: [marjoriecasilao@gmail.com](mailto:marjoriecasilao@gmail.com)
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
- Live Vercel link: **pending verified deployment**. Do not submit an unverified URL.
- Location: awaiting the owner's city/province.
- LinkedIn, other social accounts, achievements, and certifications: omitted because verified details were not supplied. These are conditional requirements in the assignment.

## Understanding the code

- `index.html` holds the content. Each navigation link points to a unique section ID.
- `style.css` defines the theme variables and responsive layouts. Grid/flex layouts stack on smaller screens.
- `interactions.css` contains the pill navigation, hover effects, portrait badge animation, and moving skills strip. Its reduced-motion media query stops decorative animations.
- `script.js` toggles the mobile menu and `aria-expanded`, closes it with Escape or a selected link, updates the active navigation link and scroll-progress line, reveals sections with IntersectionObserver, and controls the ribbon pause button.
- `images/tools/` contains local SVG logos. `images/profile.jpg` is the original portrait.

The capability illustrations are decorative skill representations, not screenshots of claimed client projects. The Projects section accurately lists this portfolio as a course project with a repository link and an illustrated preview.

## Submission

See `SUBMISSION.md` for remaining checks. The repository already has multiple development commits; history should reflect real work rather than artificial commits added for grading.
