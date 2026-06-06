/* ============================================
   DATA FILE v5 - Teguh Muhamad Said Portfolio
   Enhanced with Experience & Filter Tabs
   ============================================ */

// ---------- PROFILE ----------
const profileData = {
    name: "Teguh Muhamad Said",
    firstName: "Teguh.",
    tagline: "Crafting Code & Creativity.",
    subtitle: 'I build <strong>web & desktop applications</strong> that stand out.<br><span style="color: rgba(255,255,255,0.75); font-weight: 600;">Modern & Minimalist.</span>',
    title: "Mahasiswa Teknik Informatika | Web Developer",

    bio: "Saya adalah pribadi yang memiliki rasa ingin tahu tinggi, senang belajar hal baru, dan terus berusaha mengembangkan kemampuan diri di bidang teknologi.",

    aboutParagraphs: [
        "Saya adalah <strong>Mahasiswa Teknik Informatika</strong> di Universitas Kuningan yang memiliki pengalaman dalam pengembangan aplikasi web, desktop, dan sistem informasi dengan berbagai teknologi seperti HTML/CSS/JS, PHP, Java, dan C++.",
        "Setiap proyek yang saya kerjakan adalah kesempatan untuk belajar dan berkembang. Saat ini saya sedang mencari peluang magang untuk mengaplikasikan pengetahuan saya di dunia industri."
    ],

    photo: "assets/Profil.jpeg",

    email: "teguhmuhamadsaid@gmail.com",
    phone: "083823116451",
    phoneFormatted: "0838-2311-6451",
    whatsapp: "6283823116451",
    github: "https://github.com/teguhovic3-png",
    location: "Kuningan, Jawa Barat",

    heroButtons: [
        { text: "Lihat Proyek", icon: "fas fa-arrow-right", href: "#projects", style: "primary" },
        { text: "Hubungi Saya", icon: "", href: "#contact", style: "outline" }
    ],

    aboutStats: [
        { num: "4+", label: "Projects" },
        { num: "5+", label: "Languages" },
        { num: "3", label: "Platforms" }
    ],

    marqueeSkills: [
        "HTML", "CSS", "JavaScript", "PHP", "MySQL",
        "Java", "C++", "Git", "GitHub", "OOP",
        "Data Structures", "UI Design", "Qt6", "JavaFX"
    ]
};

// ---------- NAVIGATION ----------
const navData = [
    { id: "home",       label: "Home" },
    { id: "about",      label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills",     label: "Skills" },
    { id: "projects",   label: "Projects" },
    { id: "contact",    label: "Contact" }
];

// ---------- EXPERIENCE ----------
const experienceData = [
    {
        year: "2026 - Sekarang",
        title: "Mahasiswa Teknik Informatika",
        company: "Universitas Kuningan",
        location: "Kuningan, Jawa Barat",
        points: [
            "Menempuh pendidikan S1 Teknik Informatika dengan fokus pada pengembangan perangkat lunak.",
            "Aktif mengerjakan proyek akademik dan mandiri menggunakan berbagai teknologi seperti Java, PHP, C++, dan JavaScript.",
            "Mempelajari konsep OOP, struktur data, algoritma, dan rekayasa perangkat lunak."
        ]
    },
    {
        year: "2026",
        title: "Web Developer – Expense Tracker",
        company: "Proyek Mandiri",
        location: "Remote",
        points: [
            "Membangun aplikasi pencatatan pengeluaran harian berbasis web dari nol.",
            "Mengintegrasikan visualisasi grafik interaktif menggunakan Chart.js.",
            "Menerapkan desain UI/UX yang responsif dan intuitif."
        ]
    },
    {
        year: "2026",
        title: "Fullstack Developer – PixelFlow",
        company: "Proyek Akademik",
        location: "Kuningan, Jawa Barat",
        points: [
            "Merancang dan mengembangkan sistem manajemen pesanan desain berbasis web.",
            "Mengimplementasikan prinsip IMK (Interaksi Manusia Komputer) pada antarmuka pengguna.",
            "Mengelola database dengan MySQL dan backend menggunakan PHP."
        ]
    },
    {
        year: "2026",
        title: "Desktop Developer – GemmaTani & Warehouse System",
        company: "Proyek Akademik",
        location: "Kuningan, Jawa Barat",
        points: [
            "Membangun sistem informasi toko pertanian menggunakan Java & JavaFX dengan konsep OOP.",
            "Mengembangkan simulasi manajemen gudang e-commerce berbasis Qt6 dengan RBAC dan struktur data.",
            "Menerapkan pola desain perangkat lunak dalam pengembangan aplikasi desktop."
        ]
    }
];

// ---------- SKILLS ----------
const skillsData = [
    {
        category: "Frontend",
        items: [
            { icon: "fab fa-html5", name: "HTML" },
            { icon: "fab fa-css3-alt", name: "CSS" },
            { icon: "fab fa-js", name: "JavaScript" },
            { icon: "fas fa-chart-bar", name: "Chart.js" }
        ]
    },
    {
        category: "Backend",
        items: [
            { icon: "fab fa-php", name: "PHP" },
            { icon: "fas fa-database", name: "MySQL" },
            { icon: "fab fa-node-js", name: "Node.js" },
            { icon: "fas fa-server", name: "XAMPP" }
        ]
    },
    {
        category: "Desktop & Programming",
        items: [
            { icon: "fab fa-java", name: "Java" },
            { icon: "fas fa-code", name: "C++" },
            { icon: "fab fa-cuttlefish", name: "Qt6" },
            { icon: "fas fa-coffee", name: "JavaFX" }
        ]
    },
    {
        category: "Tools & Design",
        items: [
            { icon: "fab fa-git-alt", name: "Git" },
            { icon: "fab fa-github", name: "GitHub" },
            { icon: "fas fa-palette", name: "Canva" },
            { icon: "fas fa-code", name: "VS Code" }
        ]
    }
];

// ---------- PROJECTS ----------
const projectsData = [
    {
        id: 1,
        title: "Expense Tracker",
        category: "Web",
        description: "Aplikasi pencatatan pengeluaran harian dengan visualisasi grafik menggunakan Chart.js.",
        image: "assets/expense-tracker.png",
        icon: "fas fa-wallet",
        demoUrl: "https://github.com/teguhovic3-png",
        githubUrl: "https://github.com/teguhovic3-png"
    },
    {
        id: 2,
        title: "PixelFlow",
        category: "Web",
        description: "Sistem manajemen pesanan desain kreatif berbasis web dengan pendekatan IMK.",
        image: "assets/pixelflow.png",
        icon: "fas fa-paint-brush",
        demoUrl: "https://github.com/teguhovic3-png",
        githubUrl: "https://github.com/teguhovic3-png"
    },
    {
        id: 3,
        title: "GemmaTani",
        category: "Desktop",
        description: "Sistem informasi toko pertanian berbasis Java dengan JavaFX dan konsep OOP lengkap.",
        image: "assets/gemmatani.png",
        icon: "fas fa-seedling",
        demoUrl: "https://github.com/teguhovic3-png",
        githubUrl: "https://github.com/teguhovic3-png"
    },
    {
        id: 4,
        title: "Warehouse System",
        category: "Desktop",
        description: "Simulasi sistem manajemen gudang e-commerce berbasis Qt6 dengan RBAC dan struktur data.",
        image: "assets/warehouse.png",
        icon: "fas fa-warehouse",
        demoUrl: "https://github.com/teguhovic3-png",
        githubUrl: "https://github.com/teguhovic3-png"
    }
];

// ---------- CONTACT ----------
const contactLinksData = [
    {
        icon: "fas fa-envelope",
        title: "Email",
        value: "teguhmuhamadsaid@gmail.com",
        href: "mailto:teguhmuhamadsaid@gmail.com",
        target: "_self"
    },
    {
        icon: "fab fa-whatsapp",
        title: "WhatsApp",
        value: "0838-2311-6451",
        href: "https://wa.me/6283823116451",
        target: "_blank"
    },
    {
        icon: "fab fa-github",
        title: "GitHub",
        value: "github.com/teguhovic3-png",
        href: "https://github.com/teguhovic3-png",
        target: "_blank"
    },
    {
        icon: "fas fa-map-marker-alt",
        title: "Location",
        value: "Kuningan, Jawa Barat",
        href: null,
        target: null,
        isStatic: true
    }
];

// ---------- FOOTER ----------
const footerData = {
    socials: [
        { icon: "fab fa-github",    href: "https://github.com/teguhovic3-png",          label: "GitHub" },
        { icon: "fas fa-envelope",  href: "mailto:teguhmuhamadsaid@gmail.com",           label: "Email" },
        { icon: "fab fa-whatsapp",  href: "https://wa.me/6283823116451",                 label: "WhatsApp" }
    ],
    navLinks: [
        { label: "Home",       href: "#home" },
        { label: "About",      href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Projects",   href: "#projects" },
        { label: "Contact",    href: "#contact" }
    ],
    text: `© ${new Date().getFullYear()} Teguh Muhamad Said. Built with passion.`
};

// ---------- SECTION TITLES ----------
const sectionTitles = {
    skills:     { title: "My preferred weapons of choice.",                              subtitle: "" },
    experience: { title: "Career Path",                                                  subtitle: "My journey and experiences so far." },
    projects:   { title: "Featured Projects",                                            subtitle: "A collection of my recent work, side projects, and experiments." },
    contact:    { title: "Let's Connect",                                                subtitle: "Interested in collaborating? Let's get in touch!" }
};
