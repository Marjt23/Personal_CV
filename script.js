// Navigation remains usable without JavaScript; enhancement enables the mobile toggle.
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const links = [...navigation.querySelectorAll('a')];
const mobile = window.matchMedia('(max-width: 767px)');

toggle.hidden = false;
header.classList.add('enhanced');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  header.classList.remove('menu-open');
}
toggle.addEventListener('click', () => {
  const opening = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(opening));
  header.classList.toggle('menu-open', opening);
});
links.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!header.contains(event.target)) closeMenu();
});
header.addEventListener('focusout', event => {
  if (!header.contains(event.relatedTarget)) closeMenu();
});
mobile.addEventListener('change', closeMenu);

// A single scroll callback keeps the current navigation link aligned with the reading position.
const sections = links.map(link => document.querySelector(link.getAttribute('href')));
let scheduled = false;
function updateNavigation() {
  header.classList.toggle('scrolled', window.scrollY > 24);
  let current = sections[0];
  const offset = 150;
  sections.forEach(section => { if (section.getBoundingClientRect().top <= offset) current = section; });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) current = sections.at(-1);
  links.forEach(link => {
    if (link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  const progress = distance > 0 ? Math.min(100, Math.max(0, window.scrollY / distance * 100)) : 100;
  header.style.setProperty('--progress', `${progress}%`);
  document.querySelector('.reading-progress').textContent = `${Math.round(progress)}%`;
  document.querySelector('.menu-current').textContent = links.find(link => link.hash === `#${current.id}`).textContent.slice(2);
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
}, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();

// Content is visible by default. Only animate when motion is welcome and observers are supported.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('reveal-pending'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => {
    element.classList.add('reveal-pending');
    observer.observe(element);
  });
}
