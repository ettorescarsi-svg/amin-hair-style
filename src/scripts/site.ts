import { bookingHref, salon } from '../../lib/salon';

const menu = document.querySelector<HTMLDetailsElement>('.mobile-nav');
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.open) {
    menu.open = false;
    menu.querySelector('summary')?.focus();
  }
});
document.addEventListener('click', event => {
  if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
});

const service = document.querySelector<HTMLSelectElement>('#booking-service');
const booking = document.querySelector<HTMLAnchorElement>('#booking-link');
service?.addEventListener('change', () => { if (booking) booking.href = bookingHref(service.value); });

const gallery = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-gallery]'));
const lightbox = document.querySelector<HTMLDialogElement>('.lightbox');
const photo = lightbox?.querySelector<HTMLImageElement>('.lightbox-image');
let current = 0;
function showPhoto(index: number) {
  current = (index + gallery.length) % gallery.length;
  const link = gallery[current];
  if (!lightbox || !photo || !link) return;
  photo.src = link.href;
  photo.alt = link.querySelector('img')?.alt ?? '';
  const caption = lightbox.querySelector('.lightbox-caption');
  const position = lightbox.querySelector('.lightbox-position');
  if (caption) caption.textContent = link.dataset.caption ?? '';
  if (position) position.textContent = `${current + 1} / ${gallery.length}`;
}
gallery.forEach((link, index) => link.addEventListener('click', event => {
  if (!lightbox || typeof lightbox.showModal !== 'function' || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  showPhoto(index);
  lightbox.showModal();
}));
lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
lightbox?.querySelector('[data-gallery-prev]')?.addEventListener('click', () => showPhoto(current - 1));
lightbox?.querySelector('[data-gallery-next]')?.addEventListener('click', () => showPhoto(current + 1));
lightbox?.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(current + 1); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(current - 1); }
});
lightbox?.addEventListener('click', event => {
  if (event.target !== lightbox) return;
  const rect = lightbox.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) lightbox.close();
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const reviewTrack = document.querySelector<HTMLElement>('.review-track');
function advanceReview(direction: number) {
  if (!reviewTrack) return;
  const slides = Array.from(reviewTrack.querySelectorAll<HTMLElement>('.review'));
  const closest = slides.reduce((best, slide, index) => Math.abs(slide.offsetLeft - slides[0].offsetLeft - reviewTrack.scrollLeft) < Math.abs(slides[best].offsetLeft - slides[0].offsetLeft - reviewTrack.scrollLeft) ? index : best, 0);
  const next = Math.max(0, Math.min(slides.length - 1, closest + direction));
  reviewTrack.scrollTo({ left: slides[next].offsetLeft - slides[0].offsetLeft, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
}
document.querySelector('[data-review-prev]')?.addEventListener('click', () => advanceReview(-1));
document.querySelector('[data-review-next]')?.addEventListener('click', () => advanceReview(1));

const day = new Intl.DateTimeFormat('it-IT', { weekday: 'long', timeZone: salon.timezone }).format(new Date());
document.querySelectorAll<HTMLElement>('[data-day]').forEach(row => {
  if (row.dataset.day?.toLocaleLowerCase('it-IT') === day) row.setAttribute('aria-current', 'date');
});
const map = document.querySelector<HTMLDetailsElement>('.map-disclosure');
map?.addEventListener('toggle', () => {
  const iframe = map.querySelector('iframe');
  if (map.open && iframe && !iframe.src && iframe.dataset.src) iframe.src = iframe.dataset.src;
});

// Visible by default: failed scripts and reduced motion never hide content.
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }
    });
  }, { threshold: .1 });
  document.querySelectorAll('.section-heading, .about-copy > h2, .booking h2').forEach(element => observer.observe(element));
}
