/**
 * =========================================================================
 * PORTFOLIO APPLICATION SCRIPT
 * Handles rendering, interactivity, terminal logic, themes, and animations.
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme & Mouse Spotlight
  initThemeManager();
  initMouseSpotlight();

  // 2. Render Data from PORTFOLIO_DATA
  renderHeroContent();
  renderAboutSection();
  renderSkillsSection();
  renderProjectsSection();
  renderTimelineSection();
  renderTestimonialsSection();
  renderContactSection();

  // 3. Interactive Features & Listeners
  initTypewriter();
  initTerminal();
  initProjectsFilter();
  initProjectModal();
  initNavbarScroll();
  initMobileNav();
  initContactForm();
});

/* ==========================================================================
   THEME MANAGER (DYNAMIC ACCENT PICKER)
   ========================================================================== */
function initThemeManager() {
  const themeBtn = document.getElementById('themePickerBtn');
  const themeDropdown = document.getElementById('themeDropdown');
  const themeOptions = document.querySelectorAll('.theme-option');

  // Load saved theme or default
  const savedTheme = localStorage.getItem('kehave_portfolio_theme') || 'indigo';
  setTheme(savedTheme);

  if (themeBtn && themeDropdown) {
    themeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      themeDropdown.classList.toggle('open');
    });

    document.addEventListener('click', () => {
      themeDropdown.classList.remove('open');
    });
  }

  themeOptions.forEach(option => {
    option.addEventListener('click', () => {
      const selectedTheme = option.dataset.theme;
      setTheme(selectedTheme);
      themeDropdown.classList.remove('open');
      showToast(`Accent theme set to ${option.textContent.trim()}!`);
    });
  });
}

function setTheme(themeName) {
  if (themeName === 'indigo') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', themeName);
  }
  localStorage.setItem('kehave_portfolio_theme', themeName);
}

/* ==========================================================================
   MOUSE SPOTLIGHT
   ========================================================================== */
function initMouseSpotlight() {
  let throttleTimeout;
  window.addEventListener('mousemove', (e) => {
    if (!throttleTimeout) {
      throttleTimeout = setTimeout(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.documentElement.style.setProperty('--mouse-x', `${x}%`);
        document.documentElement.style.setProperty('--mouse-y', `${y}%`);
        throttleTimeout = null;
      }, 20);
    }
  });
}

/* ==========================================================================
   HERO CONTENT RENDERING & TYPEWRITER
   ========================================================================== */
function renderHeroContent() {
  const p = PORTFOLIO_DATA.personal;
  
  // Status badge
  const statusBadge = document.getElementById('heroStatusBadge');
  if (statusBadge) {
    statusBadge.innerHTML = `<span class="pulse-dot"></span> ${p.statusBadge}`;
  }

  // Name elements
  const heroName = document.getElementById('heroName');
  if (heroName) {
    heroName.innerHTML = `I'm <span class="gradient-text">${p.name} ${p.surname}</span>`;
  }

  const navBrandName = document.getElementById('navBrandName');
  if (navBrandName) {
    navBrandName.textContent = p.name;
  }

  const footerBrandName = document.getElementById('footerBrandName');
  if (footerBrandName) {
    footerBrandName.textContent = `${p.name} ${p.surname}`;
  }

  // Subtitle
  const heroSubtitle = document.getElementById('heroSubtitle');
  if (heroSubtitle) {
    heroSubtitle.textContent = p.bioHeadline;
  }
}

function initTypewriter() {
  const typewriterElement = document.getElementById('typewriterText');
  if (!typewriterElement) return;

  const roles = [
    PORTFOLIO_DATA.personal.role,
    "Creative Technologist & UI/UX Craftsman",
    "Distributed Cloud Systems Architect",
    "High-Performance Web Specialist"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause at full text
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500; // Pause before typing next
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ==========================================================================
   INTERACTIVE HERO TERMINAL
   ========================================================================== */
function initTerminal() {
  const terminalInput = document.getElementById('terminalInput');
  const terminalBody = document.getElementById('terminalBody');
  const cmdPills = document.querySelectorAll('.cmd-pill');

  if (!terminalInput || !terminalBody) return;

  function executeCommand(cmd) {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    // Create user command log
    const userRow = document.createElement('div');
    userRow.className = 'terminal-output';
    userRow.innerHTML = `<span class="prompt-prefix">user@kehave:~$</span> ${escapeHTML(cmd)}`;
    terminalBody.appendChild(userRow);

    // Command responses
    const responseRow = document.createElement('div');
    responseRow.className = 'terminal-output';

    if (cleanCmd === 'clear') {
      terminalBody.innerHTML = '';
      return;
    }

    const commandMap = PORTFOLIO_DATA.terminalCommands;
    if (commandMap[cleanCmd]) {
      responseRow.innerHTML = `<span class="highlight">↳</span> ${commandMap[cleanCmd]}`;
    } else {
      responseRow.innerHTML = `<span style="color:#ef4444;">↳ Command not recognized: '${escapeHTML(cleanCmd)}'. Type <span class="highlight">help</span> to view available commands.</span>`;
    }

    terminalBody.appendChild(responseRow);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      terminalInput.value = '';
      executeCommand(val);
    }
  });

  cmdPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const command = pill.dataset.cmd;
      executeCommand(command);
    });
  });
}

/* ==========================================================================
   ABOUT SECTION & STATS
   ========================================================================== */
function renderAboutSection() {
  const p = PORTFOLIO_DATA.personal;
  const tabs = PORTFOLIO_DATA.aboutTabs;

  // Render Bio paragraphs
  const bioContainer = document.getElementById('tabBioContent');
  if (bioContainer) {
    bioContainer.innerHTML = p.bioLong.map(para => `<p class="about-text">${para}</p>`).join('');
  }

  // Philosophy
  const philContainer = document.getElementById('tabPhilosophyContent');
  if (philContainer) {
    philContainer.innerHTML = `<p class="about-text">${tabs.philosophy}</p>`;
  }

  // Journey & Strengths
  const journeyContainer = document.getElementById('tabJourneyContent');
  if (journeyContainer) {
    const strengthsHtml = tabs.strengths.map(s => `
      <div class="strength-item">
        <div class="strength-icon">✦</div>
        <div class="strength-info">
          <h4>${s.title}</h4>
          <p>${s.desc}</p>
        </div>
      </div>
    `).join('');

    journeyContainer.innerHTML = `
      <p class="about-text">${tabs.journey}</p>
      <div class="strengths-list">${strengthsHtml}</div>
    `;
  }

  // Tabs switching
  const tabBtns = document.querySelectorAll('.about-tab-btn');
  const tabPanels = document.querySelectorAll('.about-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.dataset.tab;
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // Render Stat Cards
  const statsContainer = document.getElementById('statsContainer');
  if (statsContainer) {
    statsContainer.innerHTML = p.stats.map(stat => `
      <div class="stat-card">
        <div class="stat-number gradient-text">${stat.number}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   SKILLS SECTION
   ========================================================================== */
function renderSkillsSection() {
  const container = document.getElementById('skillsContainer');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skills.map((cat, idx) => `
    <div class="skill-category-card">
      <div class="skill-category-header">
        <div class="skill-cat-icon">${idx === 0 ? '⚡' : idx === 1 ? '⚙️' : idx === 2 ? '☁️' : '🎨'}</div>
        <h3>${cat.category}</h3>
      </div>
      <div class="skill-items-list">
        ${cat.items.map(item => `
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">${item.name}</span>
              <span class="skill-tag">${item.tag}</span>
            </div>
            <div class="skill-bar-bg">
              <div class="skill-bar-fill" style="width: ${item.level}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   FEATURED PROJECTS & MOCKUP VISUALS
   ========================================================================== */
function getProjectVisualSvg(project, index) {
  // Generates high-tech dynamic vector graphics for project thumbnails
  const colors = [
    { primary: '#6366f1', secondary: '#a855f7' },
    { primary: '#06b6d4', secondary: '#3b82f6' },
    { primary: '#10b981', secondary: '#059669' },
    { primary: '#f59e0b', secondary: '#ef4444' },
    { primary: '#a855f7', secondary: '#ec4899' },
    { primary: '#3b82f6', secondary: '#6366f1' }
  ];
  const color = colors[index % colors.length];

  return `
    <svg class="project-svg-visual" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#0c121f"/>
      <defs>
        <linearGradient id="grad-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${color.primary}" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="${color.secondary}" stop-opacity="0.3"/>
        </linearGradient>
        <pattern id="grid-${index}" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="400" height="240" fill="url(#grid-${index})"/>
      
      <!-- Code Window Mockup Preview -->
      <g transform="translate(40, 30)">
        <rect width="320" height="180" rx="10" fill="rgba(18, 25, 42, 0.9)" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
        <circle cx="20" cy="18" r="4" fill="#ef4444"/>
        <circle cx="34" cy="18" r="4" fill="#f59e0b"/>
        <circle cx="48" cy="18" r="4" fill="#10b981"/>
        <line x1="15" y1="36" x2="305" y2="36" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        
        <!-- Abstract Tech Visuals inside Window -->
        <rect x="25" y="55" width="110" height="12" rx="3" fill="${color.primary}" fill-opacity="0.6"/>
        <rect x="25" y="78" width="180" height="8" rx="2" fill="rgba(255,255,255,0.2)"/>
        <rect x="25" y="96" width="140" height="8" rx="2" fill="rgba(255,255,255,0.15)"/>
        <rect x="25" y="114" width="220" height="8" rx="2" fill="rgba(255,255,255,0.15)"/>
        
        <!-- Interactive Chart / Wave / Nodes Graphic -->
        <path d="M 25 150 Q 80 120, 140 145 T 220 130 T 290 140" fill="none" stroke="url(#grad-${index})" stroke-width="3" stroke-linecap="round"/>
        <circle cx="140" cy="145" r="4" fill="${color.primary}"/>
        <circle cx="220" cy="130" r="4" fill="${color.secondary}"/>
        <circle cx="290" cy="140" r="4" fill="#ffffff"/>
      </g>
    </svg>
  `;
}

function renderProjectsSection() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map((proj, idx) => `
    <article class="project-card" data-category="${proj.category}">
      <div class="project-thumbnail-wrapper">
        <span class="project-badge">${proj.badge}</span>
        ${getProjectVisualSvg(proj, idx)}
      </div>
      <div class="project-content">
        <span class="project-cat-pill">${proj.categoryLabel}</span>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-tagline">${proj.tagline}</p>
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <div class="project-footer-actions">
          <button class="project-link-btn view-details-btn" data-project-id="${proj.id}">
            View Details <span>→</span>
          </button>
          <div style="display:flex; gap:12px;">
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="Live Preview">
              Demo ↗
            </a>
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="Source Code">
              Code ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   PROJECT DETAILS MODAL
   ========================================================================== */
function initProjectModal() {
  const modalOverlay = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalTagline = document.getElementById('modalTagline');
  const modalCategory = document.getElementById('modalCategory');
  const modalTechStack = document.getElementById('modalTechStack');
  const modalProblem = document.getElementById('modalProblem');
  const modalSolution = document.getElementById('modalSolution');
  const modalHighlights = document.getElementById('modalHighlights');
  const modalLiveBtn = document.getElementById('modalLiveBtn');
  const modalGitBtn = document.getElementById('modalGitBtn');
  const modalBanner = document.getElementById('modalBanner');

  function openModal(projectId) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    modalTitle.textContent = project.title;
    modalTagline.textContent = project.tagline;
    modalCategory.textContent = project.categoryLabel;
    modalTechStack.textContent = project.tags.join(', ');
    modalProblem.textContent = project.details.problem;
    modalSolution.textContent = project.details.solution;

    modalHighlights.innerHTML = project.details.highlights
      .map(h => `<li>${h}</li>`)
      .join('');

    modalLiveBtn.href = project.liveUrl;
    modalGitBtn.href = project.githubUrl;

    const projIndex = PORTFOLIO_DATA.projects.indexOf(project);
    modalBanner.innerHTML = getProjectVisualSvg(project, projIndex);

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const detailBtn = e.target.closest('.view-details-btn');
    if (detailBtn) {
      const projId = detailBtn.dataset.projectId;
      openModal(projId);
    }
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   TIMELINE (EXPERIENCE & EDUCATION)
   ========================================================================== */
function renderTimelineSection() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <span class="timeline-period">${item.period}</span>
        <h3 class="timeline-role">${item.role}</h3>
        <h4 class="timeline-company">${item.company}</h4>
        <p class="timeline-desc">${item.description}</p>
        <ul class="timeline-highlights">
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   TESTIMONIALS CAROUSEL
   ========================================================================== */
function renderTestimonialsSection() {
  const quotes = PORTFOLIO_DATA.testimonials;
  const quoteEl = document.getElementById('testimonialQuote');
  const authorEl = document.getElementById('testimonialAuthor');
  const roleEl = document.getElementById('testimonialRole');
  const avatarEl = document.getElementById('testimonialAvatar');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');

  if (!quoteEl) return;

  let currentIndex = 0;

  function updateTestimonial(index) {
    const t = quotes[index];
    quoteEl.style.opacity = '0';
    quoteEl.style.transform = 'translateY(8px)';

    setTimeout(() => {
      quoteEl.textContent = `"${t.quote}"`;
      authorEl.textContent = t.author;
      roleEl.textContent = t.role;
      avatarEl.src = t.avatar;
      avatarEl.alt = t.author;

      quoteEl.style.opacity = '1';
      quoteEl.style.transform = 'translateY(0)';
    }, 180);
  }

  updateTestimonial(0);

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
      updateTestimonial(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % quotes.length;
      updateTestimonial(currentIndex);
    });
  }
}

/* ==========================================================================
   CONTACT SECTION & SOCIALS
   ========================================================================== */
function renderContactSection() {
  const p = PORTFOLIO_DATA.personal;

  const emailEl = document.getElementById('contactEmailText');
  if (emailEl) emailEl.textContent = p.email;

  const locEl = document.getElementById('contactLocationText');
  if (locEl) locEl.textContent = p.location;

  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(p.email).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast(`Email: ${p.email}`);
      });
    });
  }

  // Render Social Links in Contact & Hero
  const socialContainers = document.querySelectorAll('.social-links-render');
  socialContainers.forEach(container => {
    container.innerHTML = p.socials.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="${s.name}">
        ${getSocialIcon(s.icon)}
      </a>
    `).join('');
  });
}

function getSocialIcon(iconType) {
  switch (iconType) {
    case 'github':
      return `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`;
    case 'linkedin':
      return `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`;
    case 'twitter':
      return `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
    case 'discord':
      return `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`;
    default:
      return `✦`;
  }
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `Sending message...`;
    submitBtn.disabled = true;

    // Simulate reliable dispatch
    setTimeout(() => {
      form.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      showToast(`Thank you, ${name}! Your message has been sent successfully.`);
    }, 800);
  });
}

/* ==========================================================================
   NAVBAR SCROLL & ACTIVE SCROLLSPY
   ========================================================================== */
function initNavbarScroll() {
  const nav = document.getElementById('mainNav');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Scrollspy
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   TOAST NOTIFICATION HELPER
   ========================================================================== */
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `
    <span class="toast-icon">✓</span>
    <span class="toast-text">${escapeHTML(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
