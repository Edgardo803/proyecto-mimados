/* =============================================
   MIMADOS · main.js
   Interactividad de la página
   ============================================= */

'use strict';

// ---- Año en el footer ----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- Fecha mínima en el formulario (hoy) ----
const dateInput = document.getElementById('preferred-date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
  dateInput.value = today;
}

// ---- Navbar scroll ----
const navbar = document.getElementById('navbar');
function onScroll() {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveLink();
}
window.addEventListener('scroll', onScroll, { passive: true });

// ---- Menú hamburguesa ----
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Cerrar menú al hacer clic en un enlace
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---- Link activo en navbar ----
const sections = document.querySelectorAll('section[id]');
function updateActiveLink() {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id     = section.getAttribute('id');
    const link   = navLinks.querySelector(`a[href="#${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < bottom);
    }
  });
}

// ---- Reveal on scroll (IntersectionObserver) ----
const revealEls = document.querySelectorAll(
  '.service-card, .diploma-card, .gallery-item, .stat, .ubicacion-card, .about-text, .about-images'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // escalonar ligeramente cada elemento visible
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach(el => observer.observe(el));

// ---- Formulario de reserva → WhatsApp ----
const reservaForm = document.getElementById('reservaForm');
if (reservaForm) {
  reservaForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const ownerName  = document.getElementById('owner-name').value.trim();
    const dogName    = document.getElementById('dog-name').value.trim();
    const dogBreed   = document.getElementById('dog-breed').value.trim();
    const service    = document.getElementById('service-type').value;
    const date       = document.getElementById('preferred-date').value;
    const extra      = document.getElementById('extra-info').value.trim();

    // Validación básica
    if (!ownerName || !dogName) {
      shakeField(!ownerName ? 'owner-name' : 'dog-name');
      return;
    }

    // Construir mensaje
    let msg = `🐾 *Reserva en Mimados*\n\n`;
    msg += `👤 *Nombre:* ${ownerName}\n`;
    msg += `🐶 *Mascota:* ${dogName}`;
    if (dogBreed) msg += ` (${dogBreed})`;
    msg += `\n`;
    if (service)  msg += `✂️ *Servicio:* ${service}\n`;
    if (date)     msg += `📅 *Fecha preferida:* ${formatDate(date)}\n`;
    if (extra)    msg += `💬 *Comentarios:* ${extra}\n`;
    msg += `\n¡Muchas gracias! 😊`;

    const url = `https://wa.me/34660294979?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

function formatDate(isoDate) {
  if (!isoDate) return '';
  const [y, m, d] = isoDate.split('-');
  return `${d}/${m}/${y}`;
}

function shakeField(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.focus();
  el.style.borderColor = 'hsl(0, 70%, 55%)';
  el.style.animation   = 'shake .4s ease';
  el.addEventListener('animationend', () => {
    el.style.animation = '';
  }, { once: true });
}

// Añadir keyframe shake dinámicamente
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    20%      { transform: translateX(-6px); }
    40%      { transform: translateX(6px); }
    60%      { transform: translateX(-4px); }
    80%      { transform: translateX(4px); }
  }
`;
document.head.appendChild(styleSheet);

// ---- Lightbox sencillo para diplomas y galería ----
const lightboxTargets = document.querySelectorAll('.diploma-frame img, .gallery-item img');

// Crear overlay
const overlay = document.createElement('div');
overlay.id = 'lightbox-overlay';
overlay.setAttribute('role', 'dialog');
overlay.setAttribute('aria-modal', 'true');
overlay.setAttribute('aria-label', 'Vista ampliada de imagen');
overlay.innerHTML = `
  <button id="lightbox-close" aria-label="Cerrar vista ampliada">&times;</button>
  <img id="lightbox-img" src="" alt="" />
`;
overlay.style.cssText = `
  display:none; position:fixed; inset:0; z-index:9999;
  background:rgba(0,0,0,.92); backdrop-filter:blur(6px);
  align-items:center; justify-content:center;
  cursor:zoom-out;
`;
document.body.appendChild(overlay);

const lbImg   = document.getElementById('lightbox-img');
const lbClose = document.getElementById('lightbox-close');
lbImg.style.cssText    = 'max-width:90vw; max-height:88vh; border-radius:12px; box-shadow:0 20px 60px rgba(0,0,0,.6); object-fit:contain;';
lbClose.style.cssText  = 'position:absolute; top:1rem; right:1.5rem; background:none; border:none; color:#fff; font-size:2.5rem; cursor:pointer; line-height:1;';

lightboxTargets.forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  });
});

function closeLightbox() {
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeLightbox(); });
lbClose.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
