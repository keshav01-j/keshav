/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * Edit this file to easily customize your personal info, projects, skills,
 * experience, and contact details without modifying HTML.
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  // Personal & Header Information
  personal: {
    name: "Keshav",
    surname: "Sharma",
    role: "Full-Stack Software Engineer & Creative Technologist",
    statusBadge: "Available for new opportunities & freelance contracts",
    email: "keshav.dev.engineer@gmail.com",
    location: "Bengaluru, India / Remote Worldwide",
    resumeUrl: "#", // Add link to your PDF resume here
    bioHeadline: "Architecting scalable web systems & crafting fluid, high-conversion digital experiences.",
    bioLong: [
      "I am a passionate Full-Stack Engineer with over 4+ years of experience building resilient web applications, distributed APIs, and immersive user interfaces. My work bridges the gap between engineering rigor and design artistry.",
      "Constantly exploring the bleeding edge of web performance, cloud architectures, and modern browser APIs. Driven by solving complex engineering problems and turning visionary ideas into robust digital products."
    ],
    stats: [
      { number: "4+", label: "Years Experience", icon: "code" },
      { number: "25+", label: "Projects Delivered", icon: "rocket" },
      { number: "99.9%", label: "Code Reliability", icon: "shield" },
      { number: "100%", label: "Client Satisfaction", icon: "heart" }
    ],
    socials: [
      { name: "GitHub", url: "https://github.com", icon: "github" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { name: "Twitter / X", url: "https://x.com", icon: "twitter" },
      { name: "Discord", url: "https://discord.com", icon: "discord" }
    ]
  },

  // About Tab Content
  aboutTabs: {
    philosophy: "Clean code isn't just about syntax; it's about building maintainable, human-centered systems. I adhere strictly to DRY principles, comprehensive automated testing, and progressive enhancement so that applications stay blazing fast and rock solid at any scale.",
    journey: "Started my coding journey tinkering with Linux kernels and custom script automation, which soon led to building web applications and cloud architectures. Over the years, I've had the privilege of collaborating with high-growth startups and visionary tech teams worldwide.",
    strengths: [
      { title: "System Architecture", desc: "Designing scalable, decoupled microservices and event-driven data pipelines." },
      { title: "Frontend Craftsmanship", desc: "Pixel-perfect, accessible UI development with 60fps micro-animations and responsive layouts." },
      { title: "Performance & SEO", desc: "Sub-second load times, 100/100 Core Web Vitals, and search-optimized semantic structuring." },
      { title: "Agile Collaboration", desc: "Cross-functional communication, rapid prototyping, and thorough technical documentation." }
    ]
  },

  // Technical Arsenal / Skills
  skills: [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js / Next.js", level: 95, tag: "Expert" },
        { name: "TypeScript / JavaScript (ES6+)", level: 92, tag: "Expert" },
        { name: "HTML5 / Semantic SEO", level: 98, tag: "Master" },
        { name: "CSS3 / Modern Sass / Animations", level: 95, tag: "Expert" },
        { name: "Vue.js / Nuxt", level: 85, tag: "Advanced" },
        { name: "Tailwind CSS & Design Systems", level: 90, tag: "Expert" }
      ]
    },
    {
      category: "Backend & Systems",
      items: [
        { name: "Node.js / Express / Fastify", level: 92, tag: "Expert" },
        { name: "Python / FastAPI / Django", level: 88, tag: "Advanced" },
        { name: "PostgreSQL / MySQL", level: 90, tag: "Expert" },
        { name: "MongoDB & Redis Caching", level: 86, tag: "Advanced" },
        { name: "RESTful & GraphQL APIs", level: 94, tag: "Expert" },
        { name: "Authentication (OAuth2, JWT)", level: 90, tag: "Expert" }
      ]
    },
    {
      category: "DevOps & Cloud Infrastructure",
      items: [
        { name: "Docker & Containerization", level: 88, tag: "Advanced" },
        { name: "AWS (S3, EC2, Lambda, CloudFront)", level: 84, tag: "Proficient" },
        { name: "CI/CD Pipelines (GitHub Actions)", level: 89, tag: "Advanced" },
        { name: "Linux Administration & Bash", level: 90, tag: "Expert" },
        { name: "Vercel, Netlify & Cloudflare CDN", level: 92, tag: "Expert" },
        { name: "Git & Version Control Workflow", level: 96, tag: "Master" }
      ]
    },
    {
      category: "UI/UX & Design Tools",
      items: [
        { name: "Figma (Wireframing & Prototypes)", level: 88, tag: "Advanced" },
        { name: "Responsive & Mobile-First UX", level: 96, tag: "Master" },
        { name: "Web Accessibility (WCAG 2.1)", level: 90, tag: "Expert" },
        { name: "Micro-interactions & Motion UX", level: 92, tag: "Expert" }
      ]
    }
  ],

  // Featured Projects
  projects: [
    {
      id: "project-1",
      title: "NovaCloud - Serverless Analytics Platform",
      category: "fullstack",
      categoryLabel: "Full Stack",
      featured: true,
      tagline: "Real-time telemetry and cloud infrastructure health monitor with instant latency alerting.",
      description: "A distributed observability dashboard that ingests high-throughput telemetry data, visualizes query metrics with interactive WebGL charting, and flags anomalies before incidents escalate.",
      tags: ["React", "TypeScript", "Node.js", "Redis", "TimescaleDB", "Tailwind"],
      liveUrl: "https://example.com/demo/novacloud",
      githubUrl: "https://github.com/example/novacloud",
      accentGlow: "rgba(99, 102, 241, 0.25)",
      badge: "Flagship",
      details: {
        problem: "Engineering teams lacked unified visibility across fragmented microservices, leading to prolonged MTTR (Mean Time to Resolution) during critical database spikes.",
        solution: "Engineered a low-overhead telemetry ingestion pipeline processing 50,000+ events per second with sub-50ms query responses on real-time graphs.",
        highlights: [
          "Real-time WebSocket streaming with automatic reconnect and message debouncing",
          "Custom interactive time-series chart component with zooming and tooltip analytics",
          "Automated Slack and PagerDuty webhook dispatch for anomalous CPU and memory spikes",
          "Optimized bundle size under 120KB gzipped for lightning-fast dashboard initialization"
        ]
      }
    },
    {
      id: "project-2",
      title: "Synthetix AI - Creative Workspace",
      category: "webapps",
      categoryLabel: "Web App & AI",
      featured: true,
      tagline: "Multimodal AI canvas for generating vector assets, technical copy, and automated code snippets.",
      description: "An intuitive collaborative workspace blending generative AI models with a node-based visual workflow editor, allowing cross-disciplinary teams to prototype digital products 5x faster.",
      tags: ["Next.js", "Python FastAPI", "OpenAI API", "Canvas API", "Tailwind"],
      liveUrl: "https://example.com/demo/synthetix",
      githubUrl: "https://github.com/example/synthetix",
      accentGlow: "rgba(6, 182, 212, 0.25)",
      badge: "Popular",
      details: {
        problem: "Designers and engineers waste dozens of hours manually converting wireframes into responsive CSS and boilerplates.",
        solution: "Constructed an interactive infinite canvas with automated schema generation, prompt-chaining presets, and exportable clean React components.",
        highlights: [
          "Infinite vector canvas with GPU-accelerated pan, zoom, and multi-selection",
          "Streaming LLM response parser with interactive syntax-highlighted code blocks",
          "Export configurations supporting clean Tailwind CSS, vanilla CSS, and SVG components",
          "Integrated local-storage auto-save with version history revert"
        ]
      }
    },
    {
      id: "project-3",
      title: "Aura Commerce - Headless Storefront",
      category: "fullstack",
      categoryLabel: "Full Stack",
      featured: true,
      tagline: "Ultra-fast headless e-commerce experience with dynamic currency conversion and instant checkout.",
      description: "An ultra-performant storefront delivering 99/100 Core Web Vitals, dynamic product customization, intelligent search with fuzzy matching, and seamless Stripe payment integration.",
      tags: ["React", "GraphQL", "Stripe API", "Node.js", "Redis", "Framer Motion"],
      liveUrl: "https://example.com/demo/aura-commerce",
      githubUrl: "https://github.com/example/aura-commerce",
      accentGlow: "rgba(16, 185, 129, 0.25)",
      badge: "High Performance",
      details: {
        problem: "Traditional monolithic e-commerce platforms suffered from sluggish page speeds (3.8s LCP), causing significant mobile cart abandonment.",
        solution: "Built a decoupled headless architecture utilizing edge caching, optimistic UI updates, and intelligent image prefetching.",
        highlights: [
          "Sub-800ms First Contentful Paint globally across edge nodes",
          "Optimistic cart state updates with zero screen re-renders or lag",
          "Comprehensive multi-currency support with real-time exchange rates",
          "PCI-compliant Stripe Checkout & Apple Pay / Google Pay flow"
        ]
      }
    },
    {
      id: "project-4",
      title: "PulseVault - Encrypted Credential Vault",
      category: "tools",
      categoryLabel: "Tools & Security",
      featured: false,
      tagline: "Zero-knowledge developer secret manager with end-to-end AES-256-GCM encryption in the browser.",
      description: "A secure web utility for developers to store, share, and rotate ephemeral API keys, environment variables, and cryptographic certificates with self-destructing links.",
      tags: ["TypeScript", "Web Crypto API", "Node.js", "PostgreSQL", "Docker"],
      liveUrl: "https://example.com/demo/pulsevault",
      githubUrl: "https://github.com/example/pulsevault",
      accentGlow: "rgba(245, 158, 11, 0.25)",
      badge: "Security",
      details: {
        problem: "Engineers frequently leak API tokens and staging keys over insecure communication channels like Slack or plain email.",
        solution: "Implemented client-side cryptography where the encryption key never touches the server, guaranteeing complete zero-knowledge privacy.",
        highlights: [
          "Client-side encryption using PBKDF2 key derivation and AES-256-GCM",
          "Configurable self-destruction triggers: read once, 10 minutes, or 24 hours",
          "Audit trail logger showing encrypted IP timestamps and access attempts",
          "One-click `.env` export and import for seamless developer onboarding"
        ]
      }
    },
    {
      id: "project-5",
      title: "Verve Audio - WebGL Audio Visualizer",
      category: "uiux",
      categoryLabel: "Creative UI / WebGL",
      featured: false,
      tagline: "Interactive 3D particle audio synthesizer reacting in real-time to frequency bands and microphone input.",
      description: "An experimental browser experience translating audio frequencies into hypnotic 3D particle meshes and geometric shaders using WebGL and the Web Audio API.",
      tags: ["JavaScript", "WebGL", "Three.js", "Web Audio API", "GLSL Shaders"],
      liveUrl: "https://example.com/demo/verve-audio",
      githubUrl: "https://github.com/example/verve-audio",
      accentGlow: "rgba(168, 85, 247, 0.25)",
      badge: "Creative Tech",
      details: {
        problem: "Demonstrating high-performance real-time graphics and spatial audio capabilities inside standard mobile and desktop browsers.",
        solution: "Constructed custom GLSL vertex and fragment shaders computing FFT audio data directly on the GPU at steady 60 FPS.",
        highlights: [
          "Custom Web Audio API frequency analyzer capturing 1024 bins of harmonic data",
          "Over 20,000 interactive particles reacting to bass drops and pitch variations",
          "Preset synthesizer rhythms and live microphone capture mode",
          "Touch and cursor gravity simulation attracting particles dynamically"
        ]
      }
    },
    {
      id: "project-6",
      title: "DevSprint - Distributed Kanban System",
      category: "webapps",
      categoryLabel: "Web App",
      featured: false,
      tagline: "Collaborative project management dashboard with real-time conflict-free synchronized boards.",
      description: "A lightweight, snappy project tracking application built for engineering squads. Features drag-and-drop workflow columns, markdown task specifications, and GitHub commit tracking.",
      tags: ["React", "HTML5 Drag-Drop", "Firebase", "Tailwind", "Vite"],
      liveUrl: "https://example.com/demo/devsprint",
      githubUrl: "https://github.com/example/devsprint",
      accentGlow: "rgba(59, 130, 246, 0.25)",
      badge: "Productivity",
      details: {
        problem: "Bloated enterprise project management tools suffer from 5-second load times and complex, distracting configuration menus.",
        solution: "Crafted an agile, keyboard-first board that loads in under 200ms with smooth 60fps drag-and-drop operations.",
        highlights: [
          "Custom drag-and-drop system with fluid reordering physics",
          "Full markdown editor with image pasting and checklist support",
          "Live presence avatars showing who is viewing or editing which ticket",
          "Offline capability with Service Workers and automatic background sync"
        ]
      }
    }
  ],

  // Career Milestones / Timeline
  timeline: [
    {
      period: "2024 — Present",
      role: "Senior Full-Stack Engineer",
      company: "Apex Digital Solutions",
      description: "Lead architecture for client-facing cloud applications, directing frontend standards, microservice decoupling, and CI/CD automation pipelines.",
      highlights: [
        "Reduced core application load time by 42% through code-splitting and asset caching strategies",
        "Mentored a team of 6 junior and mid-level developers in TypeScript best practices and clean code standards"
      ]
    },
    {
      period: "2022 — 2024",
      role: "Full-Stack Software Developer",
      company: "HyperScale Tech Lab",
      description: "Developed and maintained mission-critical RESTful and GraphQL APIs, customer dashboards, and high-conversion e-commerce funnels.",
      highlights: [
        "Architected scalable authentication and role-based access control systems serving 100k+ active users",
        "Pioneered the transition to Next.js and Tailwind CSS, increasing engineering velocity by 30%"
      ]
    },
    {
      period: "2020 — 2022",
      role: "Frontend Engineer & UI Developer",
      company: "Cognitive Studio",
      description: "Crafted interactive web experiences, bespoke design systems, and responsive web platforms for international clients.",
      highlights: [
        "Delivered over 15+ production websites with 100% Core Web Vitals compliance",
        "Collaborated directly with UI/UX designers to translate Figma design systems into reusable component libraries"
      ]
    },
    {
      period: "2016 — 2020",
      role: "B.Tech in Computer Science & Engineering",
      company: "Institute of Technology",
      description: "Graduated with Honors. Focused on Distributed Systems, Algorithms, Database Management, and Human-Computer Interaction.",
      highlights: [
        "President of the Developer Student Club; organized 4 major hackathons",
        "Published technical paper on asynchronous microservice event coordination"
      ]
    }
  ],

  // Client Testimonials / Recommendations
  testimonials: [
    {
      quote: "Keshav is one of the rare engineers who balances architectural depth with incredible eye for design and user experience. He delivered our platform two weeks ahead of schedule and with zero critical bugs.",
      author: "Elena Rostova",
      role: "VP of Product, CloudSphere",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    {
      quote: "Working alongside Keshav was a game-changer for our startup. His deep mastery of modern web architecture took our slow legacy dashboard and transformed it into a lightning-fast showcase product.",
      author: "Marcus Vance",
      role: "Founder & CTO, Synthetix Labs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      quote: "Exceptional communicator, deeply technical, and obsessively focused on polish. The animations and responsive layouts he built for our brand generated unprecedented client engagement.",
      author: "Sophia Lin",
      role: "Design Director, Prism Studio",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    }
  ],

  // Interactive Terminal Commands Configuration
  terminalCommands: {
    help: "Available commands: [about], [skills], [projects], [experience], [contact], [theme], [clear]",
    about: "Keshav Sharma - Full-Stack Software Engineer & Creative Technologist specializing in modern cloud web applications, reactive UI systems, and high-performance microservices.",
    skills: "Core stack: TypeScript, React, Next.js, Node.js, Python, PostgreSQL, Redis, Docker, AWS, Tailwind CSS.",
    projects: "6 flagship projects loaded: NovaCloud, Synthetix AI, Aura Commerce, PulseVault, Verve Audio, DevSprint. Scroll to the Featured Projects section to inspect details.",
    experience: "4+ years of professional engineering experience across senior frontend and fullstack roles.",
    contact: "Email: keshav.dev.engineer@gmail.com | Location: Bengaluru, India / Remote Worldwide | Available for hire!",
    theme: "Tip: Use the glowing color palette selector in the top navigation bar to switch between Indigo, Cyan, Emerald, and Amber accents!"
  }
};
