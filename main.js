const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn ? menuBtn.querySelector("i") : null;

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    if (menuBtnIcon) menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
  });
}

if (navLinks) {
  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    if (menuBtnIcon) menuBtnIcon.setAttribute("class", "ri-menu-3-line");
  });
}

// ScrollReveal configuration matching the reference
const sr = ScrollReveal({
  distance: '40px',
  origin: 'bottom',
  duration: 900,
  easing: 'cubic-bezier(.2,.9,.3,1)',
  reset: false,
});

sr.reveal('.header__content h1', { delay: 100 });
sr.reveal('.header__content .section__description', { delay: 300 });
sr.reveal('.header__content .header__btn', { delay: 600 });

sr.reveal('.about__image', { origin: 'left', delay: 200 });
sr.reveal('.about__content .section__header', { delay: 300 });
sr.reveal('.about__content .section__description', { delay: 500 });
sr.reveal('.about__btn', { delay: 700 });

sr.reveal('.education__card', { interval: 120, origin: 'bottom', viewFactor: 0.2 });
sr.reveal('.research__card', { interval: 120, origin: 'bottom', viewFactor: 0.2 });
sr.reveal('.portfolio__card', { interval: 120, origin: 'bottom' });
sr.reveal('.contact__socials a', { interval: 80, origin: 'bottom' });

// Reveal banners and content blocks
sr.reveal('.section__banner', { origin: 'top', distance: '30px', duration: 900, interval: 120 });
sr.reveal('.section__content', { origin: 'bottom', distance: '32px', duration: 900, delay: 150 });

// Lightbox functionality for portfolio cards
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
const lightboxTitle = lightbox ? lightbox.querySelector('.lightbox-title') : null;
const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

document.querySelectorAll('.portfolio__card').forEach(card => {
  card.addEventListener('click', () => {
    const src = card.dataset.img || card.querySelector('img').src;
    const title = card.dataset.title || card.querySelector('img').alt || '';
    if (lightbox && lightboxImg) {
      lightboxImg.src = src;
      lightboxImg.alt = title;
      if (lightboxTitle) lightboxTitle.textContent = title;
      lightbox.setAttribute('aria-hidden', 'false');
    }
  });
});

function closeLightbox() {
  if (!lightbox) return;
  lightbox.setAttribute('aria-hidden', 'true');
  if (lightboxImg) lightboxImg.src = '';
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });