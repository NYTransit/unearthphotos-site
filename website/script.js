const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.querySelector('.sr-only').textContent = isOpen ? 'Open navigation' : 'Close navigation';
  siteNav.classList.toggle('open', !isOpen);
});

siteNav?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    siteNav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    const label = menuButton?.querySelector('.sr-only');
    if (label) label.textContent = 'Open navigation';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
