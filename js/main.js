/* ============================================
   MAIN JS v5 - Teguh Muhamad Said Portfolio
   Enhanced Wira Design Match
   ============================================ */

// ---------- MOBILE MENU ----------
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn  = document.getElementById('close-menu-btn');
const mobileMenu    = document.getElementById('mobile-menu');
const overlayEl     = document.getElementById('overlay');

function openMobileMenu() {
    mobileMenu.classList.add('active');
    overlayEl.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    overlayEl.classList.remove('active');
    document.body.style.overflow = '';
}

if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
if (closeMenuBtn)  closeMenuBtn.addEventListener('click', closeMobileMenu);
if (overlayEl)     overlayEl.addEventListener('click', closeMobileMenu);

const mobileNavLinks = document.getElementById('mobile-nav-links');
if (mobileNavLinks) {
    mobileNavLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') closeMobileMenu();
    });
}

// ---------- SCROLL ANIMATIONS ----------
// Exposed globally so render.js can use it when injecting project cards
fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

function initScrollAnimations() {
    document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
}

// ---------- ACTIVE NAVIGATION ----------
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 180) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) link.classList.add('active');
        });
    });
}

// ---------- NAVBAR SCROLL ----------
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        const logo    = navbar.querySelector('.nav-logo');
        const links   = navbar.querySelectorAll('.nav-links a');
        const cta     = navbar.querySelector('.nav-cta');
        const menuBtn = navbar.querySelector('.mobile-menu-btn');

        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            if (logo)    logo.style.color = '#000000';
            links.forEach(l => {
                l.style.color = l.classList.contains('active') ? '#000000' : '#6b7280';
            });
            if (cta)     { cta.style.background = '#000000'; cta.style.color = '#ffffff'; }
            if (menuBtn) menuBtn.style.color = '#000000';
        } else {
            navbar.classList.remove('scrolled');
            if (logo)    logo.style.color = '';
            links.forEach(l => l.style.color = '');
            if (cta)     { cta.style.background = ''; cta.style.color = ''; }
            if (menuBtn) menuBtn.style.color = '';
        }
    });
}

// ---------- SCROLL TO TOP ----------
const scrollTopBtn = document.getElementById('scroll-top');

function initScrollTop() {
    if (!scrollTopBtn) return;
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    });
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ---------- SMOOTH SCROLL ----------
function initSmoothScroll() {
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// ---------- CONTACT FORM ----------
function initContactForm() {
    document.addEventListener('submit', (e) => {
        if (e.target.id !== 'contact-form') return;
        e.preventDefault();

        const name    = document.getElementById('form-name')?.value?.trim();
        const email   = document.getElementById('form-email')?.value?.trim();
        const message = document.getElementById('form-message')?.value?.trim();

        if (!name || !email || !message) return;

        const btn = e.target.querySelector('button[type="submit"]');
        if (btn) { btn.textContent = 'Terkirim! ✓'; btn.disabled = true; }

        setTimeout(() => {
            if (btn) { btn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Pesan'; btn.disabled = false; }
            e.target.reset();
        }, 3000);
    });
}

// ---------- KEYBOARD ----------
function initKeyboard() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMobileMenu();
    });
}

// ---------- CONSOLE ----------
function showConsoleMessage() {
    console.log('%c Teguh Muhamad Said Portfolio ',
        'background:#000;color:#fff;font-size:18px;font-weight:bold;padding:8px 16px;border-radius:8px;');
    console.log('%c Minimalist Dark/Light | Wira-inspired ',
        'color:#666;font-size:13px;');
}

// ---------- INIT ----------
function init() {
    initScrollAnimations();
    initActiveNav();
    initNavbarScroll();
    initScrollTop();
    initSmoothScroll();
    initContactForm();
    initKeyboard();
    showConsoleMessage();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
