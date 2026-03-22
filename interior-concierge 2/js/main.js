/* ─────────────────────────────────────────────
   Interior Concierge — Main Script
   ───────────────────────────────────────────── */

// ── Mobile nav ───────────────────────────────
function initMobileNav() {
  const btn = document.querySelector('.nav-mobile-btn');
  if (!btn) return;
  btn.style.display = window.innerWidth <= 768 ? 'inline-block' : 'none';
  window.addEventListener('resize', () => {
    btn.style.display = window.innerWidth <= 768 ? 'inline-block' : 'none';
  });
}

// ── FAQ Accordion ────────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ── Scroll-triggered animations ──────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// ── Smooth scroll for anchor links ───────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ── CTA buttons → scroll to form ─────────────
function initCTAScroll() {
  document.querySelectorAll('.btn-main, .btn-footer').forEach(btn => {
    btn.addEventListener('click', () => {
      const form = document.querySelector('#form');
      if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ── Init ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFAQ();
  initScrollAnimations();
  initSmoothScroll();
  initCTAScroll();
});
