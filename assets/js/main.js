/* ============================================
   FLAGSHIP '26 — E-Cell VNIT | main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile Menu ---- */
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const icon = menuBtn.querySelector('.material-symbols-outlined');
      icon.textContent = mobileMenu.classList.contains('open') ? 'close' : 'menu';
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuBtn.querySelector('.material-symbols-outlined').textContent = 'menu';
      });
    });
  }

  /* ---- Sticky Nav background on scroll ---- */
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  /* ---- Intersection Observer for fade-up animations ---- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => {
    // Hero elements animate in immediately with a stagger
    if (el.closest('#hero')) {
      const siblings = [...el.closest('#hero').querySelectorAll('.fade-up')];
      const idx = siblings.indexOf(el);
      setTimeout(() => el.classList.add('visible'), 100 + idx * 120);
    } else {
      observer.observe(el);
    }
  });

  /* ---- Active nav link on scroll ---- */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(section => sectionObserver.observe(section));

  /* ---- Registration Form ---- */
  const form = document.getElementById('reg-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const name    = form.querySelector('#reg-name').value.trim();
      const email   = form.querySelector('#reg-email').value.trim();
      const college = form.querySelector('#reg-college').value.trim();

      if (!name || !email || !college) {
        showToast('Please fill all fields.', 'error');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email.', 'error');
        return;
      }

      btn.disabled = true;
      btn.textContent = 'Registering...';

      setTimeout(() => {
        showToast('Registration successful! Check your email.', 'success');
        form.reset();
        btn.disabled = false;
        btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px">check_circle</span> Complete Registration';
      }, 1500);
    });
  }

  /* ---- Toast Notification ---- */
  function showToast(message, type = 'success') {
    const existing = document.getElementById('toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = `fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
      type === 'success'
        ? 'bg-primary-container text-on-primary-container'
        : 'bg-error-container text-on-error-container'
    }`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  /* ---- Agenda Tab Toggle ---- */
  const tabBtns = document.querySelectorAll('.agenda-tab');
  const tabPanels = document.querySelectorAll('.agenda-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active', 'bg-primary-container', 'text-on-primary-container'));
      tabBtns.forEach(b => b.classList.add('text-on-surface-variant', 'border-glass-stroke'));
      btn.classList.add('active', 'bg-primary-container', 'text-on-primary-container');
      btn.classList.remove('text-on-surface-variant', 'border-glass-stroke');

      tabPanels.forEach(panel => {
        panel.classList.toggle('hidden', panel.dataset.panel !== target);
      });
    });
  });

});
