/* ============================================
   RENDER FILE v5 - Teguh Muhamad Said Portfolio
   Enhanced: Experience, Filter Tabs, Big Footer
   ============================================ */

// ---------- NAVIGATION ----------
function renderNavigation() {
    const navLinks       = document.getElementById('nav-links');
    const mobileNavLinks = document.getElementById('mobile-nav-links');
    if (!navLinks || !mobileNavLinks) return;

    const html = navData.map(item =>
        `<li><a href="#${item.id}" class="${item.id === 'home' ? 'active' : ''}">${item.label}</a></li>`
    ).join('');

    navLinks.innerHTML       = html;
    mobileNavLinks.innerHTML = html;
}

// ---------- HERO ----------
function renderHero() {
    const tagline  = document.getElementById('hero-tagline');
    const subtitle = document.getElementById('hero-subtitle');
    const photo    = document.getElementById('hero-photo');
    const buttons  = document.getElementById('hero-buttons');

    if (tagline)  tagline.innerHTML  = `<span class="line1">${profileData.firstName}</span><span class="line2">${profileData.tagline}</span>`;
    if (subtitle) subtitle.innerHTML = profileData.subtitle;
    if (photo)    { photo.src = profileData.photo; photo.alt = `Foto ${profileData.name}`; }
    if (buttons) {
        buttons.innerHTML = profileData.heroButtons.map(btn => {
            const cls = btn.style === 'primary' ? 'btn-primary' : 'btn-outline';
            return `<a href="${btn.href}" class="btn ${cls}">${btn.text}${btn.icon ? ` <i class="${btn.icon}"></i>` : ''}</a>`;
        }).join('');
    }
}

// ---------- MARQUEE ----------
function renderMarquee() {
    const track = document.getElementById('marquee-track');
    if (!track) return;

    // Triple the items to ensure seamless infinite loop
    const items = [...profileData.marqueeSkills, ...profileData.marqueeSkills, ...profileData.marqueeSkills];
    track.innerHTML = items.map((item, i) => `
        <div class="marquee-item">
            ${i > 0 ? '<span class="marquee-dot"></span>' : ''}
            <span>${item}</span>
        </div>
    `).join('');
}

// ---------- ABOUT ----------
function renderAbout() {
    const content = document.getElementById('about-content');
    if (!content) return;

    content.innerHTML = `
        <div class="about-left fade-in">
            <span class="section-label">Who I Am</span>
            <h2>${profileData.name}</h2>
            <div class="about-line"></div>
            ${profileData.aboutParagraphs.map(p => `<p>${p}</p>`).join('')}
            <div class="about-stats">
                ${profileData.aboutStats.map(s => `
                    <div class="about-stat">
                        <div class="stat-num">${s.num}</div>
                        <div class="stat-label">${s.label}</div>
                    </div>
                `).join('')}
            </div>
            <a href="${profileData.github}" target="_blank" rel="noopener noreferrer" class="btn-dark">
                <i class="fab fa-github"></i> GitHub Profile
            </a>
        </div>
        <div class="about-right fade-in" style="transition-delay:0.2s">
            <div class="about-img-wrapper">
                <img src="${profileData.photo}" alt="${profileData.name}">
            </div>
        </div>
    `;
}

// ---------- EXPERIENCE ----------
function renderExperience() {
    const title   = document.getElementById('experience-title');
    const content = document.getElementById('experience-content');

    if (title) title.textContent = sectionTitles.experience.title;

    if (content) {
        content.innerHTML = experienceData.map((exp, i) => `
            <div class="exp-item fade-in" style="transition-delay:${i * 0.1}s">
                <div class="exp-year">${exp.year}</div>
                <div class="exp-body">
                    <h3>${exp.title}</h3>
                    <div class="exp-company">
                        <span>${exp.company}</span>
                        <span class="exp-sep">•</span>
                        <span>${exp.location}</span>
                    </div>
                    <ul class="exp-points">
                        ${exp.points.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }
}

// ---------- SKILLS ----------
function renderSkills() {
    const title   = document.getElementById('skills-title');
    const content = document.getElementById('skills-content');

    if (title) title.textContent = sectionTitles.skills.title;

    if (content) {
        content.innerHTML = skillsData.map((group, gi) => `
            <div class="skill-group fade-in" style="transition-delay:${gi * 0.1}s">
                <div class="skill-group-title">${group.category}</div>
                <div class="skill-row">
                    ${group.items.map(item => `
                        <div class="skill-item">
                            <i class="${item.icon}"></i>
                            <span>${item.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
}

// ---------- PROJECTS ----------
function renderProjects() {
    const title    = document.getElementById('projects-title');
    const subtitle = document.getElementById('projects-subtitle');
    const grid     = document.getElementById('projects-grid');
    const tabs     = document.getElementById('project-tabs');

    if (title)    title.textContent    = sectionTitles.projects.title;
    if (subtitle) subtitle.textContent = sectionTitles.projects.subtitle;

    // Build filter tabs
    const categories = ['All', ...new Set(projectsData.map(p => p.category))];
    if (tabs) {
        tabs.innerHTML = categories.map(cat =>
            `<button class="filter-tab ${cat === 'All' ? 'active' : ''}" data-filter="${cat}">${cat}</button>`
        ).join('');

        tabs.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-tab');
            if (!btn) return;
            tabs.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProjects(btn.dataset.filter);
        });
    }

    renderProjectCards('All');
}

function renderProjectCards(filter) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    const filtered = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

    grid.innerHTML = filtered.map((project, i) => {
        const imgHTML = project.image
            ? `<img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.parentElement.classList.add('no-img'); this.remove();">`
            : '';

        return `
            <div class="project-card fade-in" style="transition-delay:${i * 0.08}s">
                <div class="project-image ${!project.image ? 'no-img' : ''}">
                    ${imgHTML}
                    ${!project.image ? `<div class="project-image-placeholder"><i class="${project.icon}"></i><span>${project.title}</span></div>` : ''}
                    <div class="project-overlay">
                        <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="overlay-btn"><i class="fas fa-external-link-alt"></i></a>
                        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="overlay-btn"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                <div class="project-info">
                    <div class="project-meta">
                        <span class="project-tag">${project.category}</span>
                    </div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-links">
                        <a href="${project.demoUrl}" class="project-link" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                        <a href="${project.githubUrl}" class="project-link" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Re-observe new cards for fade-in
    document.querySelectorAll('.project-card.fade-in').forEach(el => {
        el.classList.remove('visible');
        fadeObserver.observe(el);
    });
}

function filterProjects(filter) {
    renderProjectCards(filter);
}

// ---------- CONTACT ----------
function renderContact() {
    const title   = document.getElementById('contact-title');
    const subtitle = document.getElementById('contact-subtitle');
    const content = document.getElementById('contact-content');

    if (title)    title.textContent    = sectionTitles.contact.title;
    if (subtitle) subtitle.textContent = sectionTitles.contact.subtitle;

    if (content) {
        content.innerHTML = `
            <div class="contact-info fade-in">
                <h3>Mari Berkolaborasi</h3>
                <p>Saya terbuka untuk peluang magang, proyek kolaborasi, atau sekadar berdiskusi tentang teknologi. Jangan ragu untuk menghubungi saya!</p>
                <div class="contact-links">
                    ${contactLinksData.map(link => {
                        if (link.isStatic) {
                            return `<div class="contact-link static">
                                <span class="contact-icon"><i class="${link.icon}"></i></span>
                                <div class="info"><h4>${link.title}</h4><span>${link.value}</span></div>
                            </div>`;
                        }
                        return `<a href="${link.href}" class="contact-link" target="${link.target}" rel="noopener noreferrer">
                            <span class="contact-icon"><i class="${link.icon}"></i></span>
                            <div class="info"><h4>${link.title}</h4><span>${link.value}</span></div>
                        </a>`;
                    }).join('')}
                </div>
            </div>
            <div class="contact-form fade-in" style="transition-delay:0.2s">
                <h3>Kirim Pesan</h3>
                <p style="color:#6b7280; font-size:0.9rem; margin-bottom:1.5rem;">Saya biasanya membalas dalam 24 jam.</p>
                <form id="contact-form" novalidate>
                    <div class="form-group">
                        <label for="form-name">Nama Lengkap</label>
                        <input type="text" id="form-name" placeholder="Masukkan nama Anda" required>
                    </div>
                    <div class="form-group">
                        <label for="form-email">Email</label>
                        <input type="email" id="form-email" placeholder="Masukkan email Anda" required>
                    </div>
                    <div class="form-group">
                        <label for="form-message">Pesan</label>
                        <textarea id="form-message" placeholder="Tulis pesan Anda di sini..." required></textarea>
                    </div>
                    <button type="submit" class="btn-dark" style="width:100%; justify-content:center;">
                        <i class="fas fa-paper-plane"></i> Kirim Pesan
                    </button>
                </form>
            </div>
        `;
    }
}

// ---------- FOOTER (Big Wira-style) ----------
function renderFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="footer-top">
            <div class="footer-brand">
                <div class="footer-logo">TEGUH.</div>
                <p class="footer-tagline">Available for new projects</p>
            </div>
            <div class="footer-big-text">Let's make something<br><em>amazing together.</em></div>
        </div>

        <div class="footer-email-bar">
            <span class="footer-email-label">teguhmuhamadsaid@gmail.com</span>
            <button class="footer-copy-btn" id="footer-copy-btn" title="Copy email">
                <i class="far fa-copy"></i> <span>Click to copy</span>
            </button>
        </div>

        <div class="footer-bottom">
            <div class="footer-nav">
                <span class="footer-nav-label">Menu</span>
                <ul>
                    ${footerData.navLinks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
                </ul>
            </div>
            <div class="footer-nav">
                <span class="footer-nav-label">Socials</span>
                <ul>
                    ${footerData.socials.map(s => `<li><a href="${s.href}" target="_blank" rel="noopener noreferrer">${s.label}</a></li>`).join('')}
                </ul>
            </div>
            <div class="footer-meta">
                <div class="footer-clock" id="footer-clock">--:-- WIB</div>
                <p>${footerData.text}</p>
            </div>
        </div>

        <div class="footer-back-top">
            <a href="#home">Back to Top</a>
            <span>•</span>
            <a href="#home">Back to Top</a>
            <span>•</span>
            <a href="#home">Back to Top</a>
        </div>
    `;

    // Copy email
    const copyBtn = document.getElementById('footer-copy-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(profileData.email).then(() => {
                copyBtn.querySelector('span').textContent = 'Copied!';
                setTimeout(() => { copyBtn.querySelector('span').textContent = 'Click to copy'; }, 2000);
            });
        });
    }

    // Live clock WIB (UTC+7)
    function updateClock() {
        const el = document.getElementById('footer-clock');
        if (!el) return;
        const now = new Date();
        const wib = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
        const h   = String(wib.getHours()).padStart(2, '0');
        const m   = String(wib.getMinutes()).padStart(2, '0');
        const s   = String(wib.getSeconds()).padStart(2, '0');
        const ampm = wib.getHours() >= 12 ? 'PM' : 'AM';
        el.textContent = `${h}:${m}:${s} ${ampm} WIB`;
    }
    updateClock();
    setInterval(updateClock, 1000);
}

// ---------- MASTER RENDER ----------
// fadeObserver is defined in main.js – we need a reference here for project cards
let fadeObserver;

function renderAll() {
    renderNavigation();
    renderHero();
    renderMarquee();
    renderAbout();
    renderExperience();
    renderSkills();
    renderProjects();
    renderContact();
    renderFooter();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAll);
} else {
    renderAll();
}
