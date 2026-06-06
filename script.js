/* ============================================================
   Pooja Kada · Portfolio — interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Data: default certifications ---------- */
  const DEFAULT_CERTS = [
    { id: 'c1', title: 'Google AI Professional Certificate', org: 'Coursera', date: 'Completed 7 Courses', cat: 'AI', link: 'https://www.coursera.org/account/accomplishments/verify/EBKB658XV7QO', img: 'images/google_ai.png' },
    { id: 'c2', title: 'Google AI Essentials', org: 'Coursera', date: 'Completed 5 Courses', cat: 'AI', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/19KIUOV2A13G', img: 'images/google_essential.png' },
    { id: 'c3', title: 'Full Stack Development Certificate', org: 'Future Interns', date: '2026', cat: 'Development', link: 'https://futureinterns.com/verification/?cin=FIT/MAY26/FS16115', img: 'images/future_Interns_certificate.png' },
    { id: 'c4', title: 'Data Analytics Internship Certificate', org: 'Thiranex', date: '2026', cat: 'Data', link: '', img: '' },
    { id: 'c5', title: 'Cloud Computing Certificate', org: 'upSkills Camp', date: '2026', cat: 'Cloud', link: 'https://uniconvergetech9893.spayee.com/verify-certificate?serialno=2EY0ZR8G', img: 'images/upskill_camp_certificate.png' },
    { id: 'c6', title: 'Python Development Certificate', org: 'Yuva Interns', date: '2026', cat: 'Development', link: '', img: '' },
    { id: 'c7', title: 'Data Analytics Job Simulation', org: 'Deloitte (Forage)', date: '2026', cat: 'Simulation', link: 'https://www.theforage.com/simulations/Deloitte%20Australia/data-analytics-s5zy', img: 'images/data_analytics_certificate.png' },
    { id: 'c8', title: 'AWS SimuLearn: Cloud Computing Essentials', org: 'Amazon Web Services', date: '2026', cat: 'Cloud', link: 'https://aws.amazon.com/training/?intClick=gsrc_navbar', img: 'images/AWS_certificate.png' },
    { id: 'c9', title: 'Technology Risk Virtual Job Simulation', org: 'EY (Forage)', date: '2026', cat: 'Simulation', link: 'https://www.theforage.com/simulations/ey/technology-risk-ydqh', img: 'images/EY_certificate.png' },
    { id: 'c10', title: 'Client Service Delivery Job Simulation', org: 'Third Bridge (Forage)', date: '2026', cat: 'Simulation', link: 'https://www.theforage.com/simulations/third-bridge/client-service-i3mi', img: 'images/third_bridge_certificate.png' }
  ];

  /* ---------- Data: projects ---------- */
  const PROJECTS = [
    {
      title: 'Multi-Functional AI ChatBot', date: 'Jun 2025 – Sep 2025', cat: 'AI',
      img: 'images/project-chatbot.png',
      desc: 'An offline conversational assistant built in Python with intelligent response handling and multiple utility features for efficient, accessible interactions.',
      tech: ['Python', 'NLP', 'CLI'],
      github: 'https://github.com/23MH1A05F1/Multi-Functional-AI-Tool', demo: 'https://23mh1a05f1.github.io/Multi-Functional-AI-Tool/ammu'
    },
    {
      title: 'Creative Library', date: 'Jan 2026 – Feb 2026', cat: 'Web',
      img: 'images/project-library.png',
      desc: 'A responsive web platform for accessing technology learning resources, with a clean, user-friendly interface and seamless navigation.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/srilehkakada-dot/Creative-Library', demo: 'https://srilehkakada-dot.github.io/Creative-Library/'
    },
    {
      title: 'ATS Resume Checker', date: 'May 2026 – Jun 2026', cat: 'AI',
      img: 'images/project-ats.png',
      desc: 'Analyzes resumes for ATS compatibility with scoring and keyword evaluation, helping optimize job applications for applicant tracking systems.',
      tech: ['Python', 'NLP', 'Analytics'],
      github: 'https://github.com/srilehkakada-dot/ATS-Resume-Checker', demo: 'https://sensational-caramel-dca04c.netlify.app'
    },
    {
      title: 'URL Shortener', date: 'May 2026 – Jun 2026', cat: 'Python',
      img: 'images/project-url.png',
      desc: 'A Flask + SQLite app generating custom short links with aliases and click-tracking analytics, deployed with efficient link redirection.',
      tech: ['Python', 'Flask', 'SQLite'],
      github: 'https://github.com/srilehkakada-dot/url-shortener', demo: 'https://url-shortener-production-2abb.up.railway.app'
    }
  ];

  const STORAGE_KEY = 'pk_user_certs_v1';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

  /* ============================================================
     THEME
     ============================================================ */
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('pk_theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);
  $('#themeToggle').addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('pk_theme', next);
  });

  /* ============================================================
     NAV / SCROLL
     ============================================================ */
  const navbar = $('#navbar');
  const progress = $('#scrollProgress');
  const backTop = $('#backTop');
  const navLinks = $('#navLinks');
  const hamburger = $('#hamburger');

  function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 30);
    backTop.classList.toggle('show', y > 600);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
  $$('#navLinks a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  }));

  // Active nav link via intersection
  const sections = $$('main section[id]');
  const navAnchors = $$('#navLinks a');
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => navObserver.observe(s));

  /* ============================================================
     REVEAL ON SCROLL
     ============================================================ */
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        if (e.target.classList.contains('skill-bars')) {
          $$('.bar', e.target).forEach(b => b.classList.add('animate'));
        }
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  function observeReveals() {
    $$('.reveal, .cert-card, .proj-card, .ach-card, .skill-cat').forEach(el => {
      if (!el.dataset.obs) { el.dataset.obs = '1'; revealObserver.observe(el); }
    });
  }

  /* ============================================================
     COUNTERS
     ============================================================ */
  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const decimals = (el.dataset.count.split('.')[1] || '').length;
      let cur = 0;
      const step = target / 60;
      const tick = () => {
        cur += step;
        if (cur >= target) { el.textContent = target.toFixed(decimals); }
        else { el.textContent = cur.toFixed(decimals); requestAnimationFrame(tick); }
      };
      tick();
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$('.stat-num').forEach(el => counterObserver.observe(el));

  /* ============================================================
     CERTIFICATIONS
     ============================================================ */
  const certGrid = $('#certGrid');
  const certEmpty = $('#certEmpty');
  let certFilter = 'all';
  let certQuery = '';

  function loadUserCerts() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { return []; }
  }
  function saveUserCerts(arr) { localStorage.setItem(STORAGE_KEY, JSON.stringify(arr)); }

  function allCerts() { return [...DEFAULT_CERTS, ...loadUserCerts()]; }

  function certCardHTML(c, isUser) {
    const thumb = c.img
      ? `<img src="${esc(c.img)}" alt="${esc(c.title)}" loading="lazy" />`
      : `<span class="placeholder">🏅</span>`;
    const linkBtn = c.link
      ? `<a class="btn cert-link-btn" href="${esc(c.link)}" target="_blank" rel="noopener">Credential ↗</a>`
      : `<button class="btn cert-link-btn" disabled style="opacity:.45;cursor:not-allowed">No Link</button>`;
    return `
      <article class="cert-card glass ${isUser ? 'user' : ''}" data-cat="${esc(c.cat)}">
        <div class="cert-thumb">
          ${thumb}
          <span class="cert-badge">${esc(c.cat)}</span>
          ${isUser ? `<button class="cert-del" data-del="${esc(c.id)}" title="Remove">🗑</button>` : ''}
        </div>
        <div class="cert-body">
          <h4>${esc(c.title)}</h4>
          <span class="cert-org">${esc(c.org)}</span>
          <span class="cert-date">${esc(c.date || '')}</span>
          <div class="cert-actions">
            ${linkBtn}
            <button class="btn btn-primary view-cert"
              data-img="${esc(c.img)}" data-title="${esc(c.title)}"
              data-org="${esc(c.org)}" data-date="${esc(c.date || '')}"
              data-link="${esc(c.link || '')}">View</button>
          </div>
        </div>
      </article>`;
  }

  function renderCerts() {
    const user = loadUserCerts();
    const q = certQuery.toLowerCase();
    let html = '';
    let count = 0;
    allCerts().forEach(c => {
      const isUser = user.some(u => u.id === c.id);
      const matchFilter = certFilter === 'all' || c.cat === certFilter;
      const matchQuery = !q || (c.title + ' ' + c.org + ' ' + c.cat).toLowerCase().includes(q);
      if (matchFilter && matchQuery) { html += certCardHTML(c, isUser); count++; }
    });
    certGrid.innerHTML = html;
    certEmpty.hidden = count > 0;
    observeReveals();
  }

  // Filters
  $$('#certFilters .pill').forEach(p => p.addEventListener('click', () => {
    $$('#certFilters .pill').forEach(x => x.classList.remove('active'));
    p.classList.add('active');
    certFilter = p.dataset.filter;
    renderCerts();
  }));
  $('#certSearch').addEventListener('input', e => { certQuery = e.target.value; renderCerts(); });

  // Delegated clicks (view + delete)
  certGrid.addEventListener('click', e => {
    const view = e.target.closest('.view-cert');
    const del = e.target.closest('[data-del]');
    if (view) openViewModal(view.dataset);
    if (del) {
      const id = del.dataset.del;
      const arr = loadUserCerts().filter(c => c.id !== id);
      saveUserCerts(arr);
      renderCerts();
    }
  });

  /* ---------- View modal ---------- */
  const viewModal = $('#viewModal');
  function openViewModal(d) {
    $('#modalImg').src = d.img || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="380"%3E%3Crect width="600" height="380" fill="%230c0c1a"/%3E%3Ctext x="50%25" y="50%25" fill="%23a78bfa" font-size="90" text-anchor="middle" dy=".35em"%3E🏅%3C/text%3E%3C/svg%3E';
    $('#modalImg').alt = d.title;
    $('#modalTitle').textContent = d.title;
    $('#modalOrg').textContent = d.org;
    $('#modalDate').textContent = d.date;
    const link = $('#modalLink');
    if (d.link) { link.href = d.link; link.hidden = false; } else { link.hidden = true; }
    openModal(viewModal);
  }

  /* ---------- Add modal ---------- */
  const addModal = $('#addModal');
  const addForm = $('#addCertForm');
  const uploadZone = $('#uploadZone');
  const fileInput = $('#certImageInput');
  const uzPreview = $('#uzPreview');
  const uzPrompt = $('#uzPrompt');
  let pendingImg = '';

  $('#addCertBtn').addEventListener('click', () => openModal(addModal));

  uploadZone.addEventListener('click', () => fileInput.click());
  uploadZone.addEventListener('dragover', e => { e.preventDefault(); uploadZone.classList.add('drag'); });
  uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('drag'));
  uploadZone.addEventListener('drop', e => {
    e.preventDefault(); uploadZone.classList.remove('drag');
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  });
  fileInput.addEventListener('change', e => { if (e.target.files[0]) handleFile(e.target.files[0]); });

  function handleFile(file) {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = ev => {
      pendingImg = ev.target.result;
      uzPreview.src = pendingImg; uzPreview.hidden = false; uzPrompt.hidden = true;
    };
    reader.readAsDataURL(file);
  }

  addForm.addEventListener('submit', e => {
    e.preventDefault();
    const arr = loadUserCerts();
    arr.push({
      id: 'u' + Date.now(),
      title: $('#cTitle').value.trim(),
      org: $('#cOrg').value.trim(),
      date: $('#cDate').value.trim(),
      cat: $('#cCat').value,
      link: $('#cLink').value.trim(),
      img: pendingImg
    });
    saveUserCerts(arr);
    addForm.reset();
    pendingImg = ''; uzPreview.hidden = true; uzPrompt.hidden = false;
    closeModal(addModal);
    certFilter = 'all'; certQuery = '';
    $('#certSearch').value = '';
    $$('#certFilters .pill').forEach(x => x.classList.toggle('active', x.dataset.filter === 'all'));
    renderCerts();
    // scroll to the new card
    setTimeout(() => $('#certifications').scrollIntoView({ behavior: 'smooth' }), 100);
  });

  /* ============================================================
     PROJECTS
     ============================================================ */
  const projGrid = $('#projGrid');
  const projEmpty = $('#projEmpty');
  let projFilter = 'all';
  let projQuery = '';

  function projCardHTML(p) {
    return `
      <article class="proj-card glass" data-cat="${esc(p.cat)}">
        <div class="proj-thumb"><img src="${esc(p.img)}" alt="${esc(p.title)}" loading="lazy" /></div>
        <div class="proj-body">
          <h4>${esc(p.title)}</h4>
          <span class="proj-date">${esc(p.date)}</span>
          <p>${esc(p.desc)}</p>
          <div class="proj-tech">${p.tech.map(t => `<span>${esc(t)}</span>`).join('')}</div>
          <div class="proj-actions">
            <a class="btn cert-link-btn" href="${esc(p.github)}" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.8 18.3 5.1 18.3 5.1c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>
              Code</a>
            <a class="btn btn-primary" href="${p.demo ? esc(p.demo) : esc(p.github)}" target="_blank" rel="noopener">Live Demo ↗</a>
          </div>
        </div>
      </article>`;
  }

  function renderProjects() {
    const q = projQuery.toLowerCase();
    let html = '', count = 0;
    PROJECTS.forEach(p => {
      const matchFilter = projFilter === 'all' || p.cat === projFilter;
      const matchQuery = !q || (p.title + ' ' + p.desc + ' ' + p.tech.join(' ')).toLowerCase().includes(q);
      if (matchFilter && matchQuery) { html += projCardHTML(p); count++; }
    });
    projGrid.innerHTML = html;
    projEmpty.hidden = count > 0;
    observeReveals();
  }

  $$('#projFilters .pill').forEach(p => p.addEventListener('click', () => {
    $$('#projFilters .pill').forEach(x => x.classList.remove('active'));
    p.classList.add('active');
    projFilter = p.dataset.filter;
    renderProjects();
  }));
  $('#projSearch').addEventListener('input', e => { projQuery = e.target.value; renderProjects(); });

  /* ============================================================
     MODALS (shared)
     ============================================================ */
  function openModal(m) { m.hidden = false; document.body.style.overflow = 'hidden'; }
  function closeModal(m) { m.hidden = true; document.body.style.overflow = ''; }
  $$('.modal').forEach(m => {
    m.addEventListener('click', e => { if (e.target.hasAttribute('data-close')) closeModal(m); });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') $$('.modal').forEach(m => { if (!m.hidden) closeModal(m); });
  });

  /* ============================================================
     CONTACT FORM
     ============================================================ */
  $('#contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const note = $('#formNote');
    note.textContent = '✓ Thanks, ' + (data.name || 'there') + '! Opening your email client…';
    const subject = encodeURIComponent('Portfolio enquiry from ' + data.name);
    const body = encodeURIComponent(data.message + '\n\n— ' + data.name + ' (' + data.email + ')');
    setTimeout(() => { window.location.href = `mailto:srilehka.kada@gmail.com?subject=${subject}&body=${body}`; }, 600);
    e.target.reset();
  });

  /* ============================================================
     INIT
     ============================================================ */
  $('#year').textContent = new Date().getFullYear();
  renderCerts();
  renderProjects();
  observeReveals();
})();
