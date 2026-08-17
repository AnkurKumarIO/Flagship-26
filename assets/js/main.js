/* ============================================
   FLAGSHIP '22 — E-Cell VNIT | main.js
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
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

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

  /* ---- Countdown Timer ---- */
  const eventDate = new Date('2022-09-24T09:00:00');
  const timerEl = document.getElementById('countdown');

  function updateCountdown() {
    if (!timerEl) return;
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
      timerEl.innerHTML = '<span class="text-primary font-bold">Event is Live!</span>';
      return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = n => String(n).padStart(2, '0');

    timerEl.innerHTML = `
      <div class="flex gap-3 flex-wrap">
        ${[['Days', days], ['Hrs', hours], ['Min', minutes], ['Sec', seconds]].map(([label, val]) => `
          <div class="flex flex-col items-center min-w-[52px] bg-surface-container border border-glass-stroke rounded-lg px-3 py-2">
            <span class="font-mono text-2xl font-bold text-primary tabular-nums">${pad(val)}</span>
            <span class="text-[10px] text-on-surface-variant font-mono uppercase tracking-widest mt-0.5">${label}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ---- Registration Form ---- */
  const form = document.getElementById('reg-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const name  = form.querySelector('#reg-name').value.trim();
      const email = form.querySelector('#reg-email').value.trim();
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
        btn.textContent = 'Complete Registration';
      }, 1500);
    });
  }

  /* ---- Toast Notification ---- */
  function showToast(message, type = 'success') {
    const existing = document.getElementById('toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = `fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] px-6 py-3 rounded-lg font-button text-sm uppercase tracking-wider transition-all duration-300 ${
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
