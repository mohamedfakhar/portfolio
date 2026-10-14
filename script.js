/**
 * MOHAMED ELSHAHAT IBRAHIM — FULL STACK DEVELOPER PORTFOLIO
 * Core Logic, Dynamic Project Data (7 Verified Projects) & Editorial Showcase
 */

// ==========================================================================
// 1. Projects Data Structure (7 Verified Projects Synchronized with CV & Repos)
// ==========================================================================
const projectsData = [
  {
    id: "hrm-system",
    name: "HR & Payroll Management System",
    fullName: "HR & Payroll Management System & HR Smart Assistant",
    badge: "Enterprise Business Platform · 105/105 Automated Tests Passed",
    timeline: "Jan 2026 – Present",
    role: "Full Stack Developer (Solo Project)",
    category: "ENTERPRISE BUSINESS PLATFORM · FULL STACK & AI",
    filterCategories: ["featured", "fullstack", "enterprise"],
    status: "Active Development",
    isFeatured: true,
    isSpotlight: true,
    shortDesc: "An enterprise-grade Human Resource and Payroll management platform built with Node.js, Express.js 5, MongoDB, React 19, and Socket.IO. Features attendance tracking, leave lifecycles, dynamic payroll calculation engines, operational anomaly detection, smart recommendations, and an HR Smart Assistant with 16 validated tools.",
    problem: "Manual spreadsheets and disconnected HR tools create administrative bottlenecks, attendance logging discrepancies, payroll calculation errors, and missed operational irregularities across growing organizations.",
    highlights: [
      "Built an enterprise-style HRM platform using Node.js, Express.js, MongoDB, React.js, and Socket.IO, with JWT authentication and role-based access control",
      "Implemented attendance, leave management, payroll, performance evaluation, anomaly detection, smart recommendations, and real-time notifications",
      "Developed an HR Smart Assistant with 16 validated tools for employee, attendance, leave, payroll, performance, anomaly, and recommendation insights",
      "Applied secure service-layer architecture, input validation, audit logging, targeted database indexing, and automated testing with 105/105 passing assertions",
      "Zero arbitrary database queries: deterministic NLP pipeline with prompt injection defense and complete interaction audit logging"
    ],
    features: {
      "Authentication & Role Guards": [
        "Stateless access tokens (15-min) paired with httpOnly refresh token rotation and revocation",
        "Authoritative server-side role guards strictly separating Employee, HR Manager, and Administrator access",
        "Deterministic authorization decorators ensuring complete resource-level access control"
      ],
      "Attendance, Leave & Dynamic Payroll": [
        "Automated check-in/out logging with dynamic duration, overtime tracking, and late-entry calculations",
        "Multi-tier leave request lifecycles (Submit → Manager Review → Approval/Rejection with audit rationale)",
        "Deterministic payroll calculation engine synthesizing base salary, overtime allowances, tax deductions, and unpaid leave penalties"
      ],
      "Anomaly Detection & Smart Insights": [
        "Statistical anomaly detection flagging unusual overtime spikes, excessive absenteeism, and payroll variance",
        "Recommendation engine delivering proactive operational alerts directly to HR administrators",
        "Real-time event broadcasting using Socket.IO for immediate notification of critical updates"
      ],
      "Bilingual HR Smart Assistant (16 Validated Tools)": [
        "Zero arbitrary database queries: deterministic NLP pipeline mapping natural language queries to strictly validated service functions",
        "Multi-turn conversational context in Arabic and English for employee records, leave balances, and payroll breakdowns",
        "Prompt injection defense and complete audit logging of every query and assistant interaction"
      ]
    },
    techStack: {
      "Frontend": ["React 19", "Vite", "Tailwind CSS", "Axios", "Lucide React"],
      "Backend": ["Node.js", "Express.js 5", "Socket.IO", "Node-Cron", "Bcrypt.js"],
      "Database": ["MongoDB", "Mongoose (12 Schemas, Compound Indexes)"],
      "Security & Auth": ["JWT (Access & Refresh)", "RBAC", "Helmet", "Rate-Limiting", "Data Sanitization"],
      "Testing & Architecture": ["Automated Assertions (105/105 Passing)", "Service-Layer Pattern", "Audit Logging"]
    },
    challenges: [
      {
        title: "Deterministic HR Assistant Security",
        desc: "Prevented arbitrary database execution and prompt injection vulnerabilities by engineering a 16-tool deterministic dispatch layer. Natural language queries are parsed through an intent classifier and dispatched only to authorized, read-only service functions."
      },
      {
        title: "Dynamic Payroll Calculation Engine",
        desc: "Engineered a fault-tolerant payroll computation pipeline that synthesizes attendance records, approved leaves, tax tiers, and overtime bonuses into immutable, auditable monthly payroll runs."
      },
      {
        title: "Comprehensive Automated Test Suite",
        desc: "Architected a full regression test harness with 105/105 passing assertions covering authentication flows, role-based guards, payroll formulas, and assistant tool execution."
      }
    ],
    workflow: [
      "User Authentication & JWT Issuance",
      "Role-Guarded Endpoint Request",
      "Service Layer Execution",
      "Mongoose Schema Validation",
      "Audit Log & Anomaly Check",
      "Real-Time Socket.IO Notification"
    ],
    images: {
      preview: "assets/images/hrm-portal-1.png",
      previewAlt: "HR & Payroll Management System — Analytics & Employee Directory",
      gallery: [
        { src: "assets/images/hrm-portal-2.png", caption: "HR Assistant & Anomaly Detection Dashboard" }
      ]
    },
    github: "https://github.com/mohamedfakhar/hrm-system",
    liveDemo: ""
  },
  {
    id: "kemet-gate",
    name: "Kemet Gate",
    fullName: "Kemet Gate — Interactive Digital Tourism Platform",
    badge: "Graduation Project (Team) | Digilians / Digital Pioneers Initiative",
    timeline: "Dec 2025 – Aug 2026",
    role: "Full Stack Developer (Team Project)",
    category: "FLAGSHIP GRADUATION PROJECT · FULL STACK",
    filterCategories: ["featured", "fullstack"],
    status: "Completed",
    isFeatured: true,
    isSpotlight: false,
    shortDesc: "A full-stack tourism and travel booking platform for exploring Egyptian archaeological destinations, trips, and services. Built with React.js, Vite, Tailwind CSS, Node.js, Express.js, and MongoDB, integrating tour discovery with secure booking, Stripe payments, and tamper-proof digital ticketing.",
    problem: "Before Kemet Gate, discovering authentic Egyptian heritage sites, connecting with verified travel companies, and booking tours was fragmented without integrated digital ticketing, multi-tier approvals, or cryptographic ticket verification.",
    highlights: [
      "Built a full stack platform for exploring Egyptian tourist destinations, trips, and services using React.js, Vite, Tailwind CSS, Axios, Node.js, Express.js, MongoDB, and Mongoose",
      "Implemented JWT authentication with refresh tokens and role-based authorization for User, Company, Admin, and Regional Admin roles",
      "Developed a complete booking system (tour selection, dates, guest counts, seat availability) and a company/admin approval workflow for publishing tours",
      "Integrated Stripe payments (Payment Intents, Elements, webhooks) with server-side verification, and built secure digital ticketing with HMAC-SHA256 signed, tamper-detecting QR codes",
      "Implemented real-time notifications with Socket.IO and persistent MongoDB storage across all system roles",
      "Integrated 360° virtual tours with Photo Sphere Viewer and multilingual audio guide content"
    ],
    features: {
      "Tourist & Destination Discovery": [
        "Interactive landmark exploration across iconic Egyptian regions (Cairo, Giza, Aswan, Luxor, Siwa, Matrouh)",
        "Immersive 360° panoramic virtual tours powered by Photo Sphere Viewer",
        "Multilingual audio guides and cultural context integrated for destinations",
        "Tour package discovery with full itineraries, group pricing, and verified traveler reviews"
      ],
      "Booking & Payment Architecture": [
        "Multi-step tour booking workflow validating date selection, guest counts, and remaining seat availability",
        "Stripe Payment Intents and PCI-compliant Stripe Elements client-side checkout",
        "Idempotent server-side webhook processing with cryptographic HMAC event signature verification",
        "Atomic seat inventory decrementing preventing overbooking and race conditions"
      ],
      "Tamper-Proof Cryptographic Ticketing": [
        "Server-side digital ticket generation issuing tamper-evident HMAC-SHA256 tokens",
        "QR codes embedded with signed cryptographic hashes for offline and online gate validation",
        "Site manager scanning mode detecting altered dates, invalid seat counts, or reused tickets"
      ],
      "Company & Admin Governance Workflows": [
        "Tourism agency portal with tour package submission lifecycle (Draft → Pending Admin Review → Published)",
        "Centralized administrator dashboard for verifying travel companies, tracking bookings, and monitoring revenue",
        "Regional Admin role for location-specific approvals and landmark content moderation",
        "Persistent Socket.IO notifications alerting agencies and travelers on booking confirmations"
      ]
    },
    techStack: {
      "Frontend": ["React 19", "Vite", "Tailwind CSS", "Axios", "Photo Sphere Viewer", "Lucide React"],
      "Backend": ["Node.js", "Express.js", "Socket.IO", "Node-Cron", "Nodemailer"],
      "Database": ["MongoDB", "Mongoose"],
      "Security & Auth": ["JWT (Access & Refresh)", "RBAC (4 Roles)", "HMAC-SHA256", "Joi", "Helmet", "HPP"],
      "Payments & Real-Time": ["Stripe API", "Stripe Elements", "Stripe Webhooks", "Socket.IO"]
    },
    challenges: [
      {
        title: "Tamper-Proof QR Ticketing",
        desc: "Engineered secure QR code tickets containing signed HMAC-SHA256 payloads generated with a server-side secret key, allowing scanners to instantly detect forged or modified tickets."
      },
      {
        title: "Multi-Role RBAC Authorization",
        desc: "Designed and implemented robust route security with custom Express role guards and object-ownership validation to secure 4 distinct user roles (User, Company, Admin, Regional Admin)."
      },
      {
        title: "Idempotent Payment Webhooks",
        desc: "Prevented duplicate booking generation from duplicate Stripe webhooks by storing transaction IDs and enforcing idempotent booking state transitions in MongoDB."
      }
    ],
    workflow: [
      "Discover Destination",
      "Select Tour & Date",
      "Stripe Checkout",
      "Webhook Verification",
      "HMAC QR Ticket Generated",
      "Gate Scanner Validation"
    ],
    images: {
      preview: "assets/images/kemet-gate-1.png",
      previewAlt: "Kemet Gate Landing Page — The Gateway to Ancient Egypt",
      gallery: [
        { src: "assets/images/kemet-gate-2.png", caption: "Destinations Explorer — Iconic Places in Egypt" },
        { src: "assets/images/kemet-gate-3.png", caption: "Tour Booking & Payment — Giza Pyramids VIP Tour" },
        { src: "assets/images/kemet-gate-4.png", caption: "Administrative Dashboard — Revenue & Booking Analytics" }
      ]
    },
    github: "https://github.com/shahdyasser126/Kemet-Gate",
    liveDemo: ""
  },
  {
    id: "frio-restaurant",
    name: "Frío Restaurant & Cafe",
    fullName: "Frío Restaurant & Cafe — Full-Stack Restaurant & Online Ordering Platform",
    badge: "Freelance Production Platform · Next.js 16 App Router",
    timeline: "2026",
    role: "Full Stack Developer (Freelance)",
    category: "FOOD & HOSPITALITY · FULL STACK NEXT.JS",
    filterCategories: ["featured", "fullstack", "ecommerce"],
    status: "Production-Ready",
    isFeatured: true,
    isSpotlight: false,
    shortDesc: "A modern, production-grade restaurant and online ordering platform built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Prisma ORM, and Zod. Features categorized menu exploration, persistent cart state, checkout validation, order tracking, and automated WhatsApp order dispatch.",
    problem: "Traditional restaurant websites struggle with clunky PDF menus, lack order tracking, suffer from hydration bugs when persisting shopping carts, and lack frictionless direct communication with kitchen and delivery staff.",
    highlights: [
      "Built a production-ready full-stack restaurant and online ordering platform using Next.js 16, React 19, TypeScript, Tailwind CSS, Prisma, and Zod",
      "Implemented menu browsing, persistent cart, checkout, delivery/takeaway flows, order tracking, WhatsApp order dispatch, offers, and content management",
      "Applied server-side validation, Prisma data access, SSR-safe client state persistence, and structured SEO metadata",
      "Integrated real-time localized currency formatting (EGP), delivery zone fee calculations, and instant WhatsApp notification pipelines"
    ],
    features: {
      "Dynamic Menu & Ordering Engine": [
        "Rich culinary catalog categorized into appetizers, main platters, hot & cold beverages, and chef specials",
        "SSR-safe persistent cart using client storage with automatic reconciliation on hydration to avoid SSR mismatch",
        "Multi-step checkout with delivery address geolocation, pickup/takeaway toggle, and discount coupons"
      ],
      "Kitchen & Delivery Dispatch": [
        "Automated WhatsApp message generator encoding ordered item details, totals, and delivery coordinates for zero-latency kitchen dispatch",
        "Unique order reference generation with live status tracking (Received → In Kitchen → Out for Delivery → Completed)"
      ],
      "Admin & Content Governance": [
        "Prisma ORM schema modeling menu categories, items, pricing rules, and operational opening hours",
        "Type-safe API routes guarded with Zod schema validation ensuring strict payload hygiene",
        "Search-engine-optimized landing page with structured schema.org JSON-LD restaurant metadata"
      ]
    },
    techStack: {
      "Framework": ["Next.js 16 (App Router)", "React 19", "TypeScript 5"],
      "Styling": ["Tailwind CSS v4", "Lucide React", "Framer Motion"],
      "Database & ORM": ["Prisma ORM", "SQLite / PostgreSQL"],
      "Validation & Logic": ["Zod Validation", "WhatsApp Click-to-Chat API", "SSR Safe Storage"]
    },
    challenges: [
      {
        title: "SSR-Safe Cart Persistence",
        desc: "Overcame Next.js server-side hydration mismatches by engineering a custom hydration hook and mounted-state gate, ensuring persistent cart state syncs flawlessly between client and server."
      },
      {
        title: "Automated Kitchen Dispatch",
        desc: "Designed an automated WhatsApp dispatch formatting pipeline that serializes order receipts into localized, formatted messages enabling staff to confirm orders instantly without costly POS integrations."
      }
    ],
    workflow: [
      "Menu Exploration",
      "Cart Customization",
      "Zod-Validated Checkout",
      "Prisma Order Record Creation",
      "WhatsApp Dispatch to Kitchen",
      "Order Status Tracking"
    ],
    images: {
      preview: "assets/images/frio-restaurant-1.jpg",
      previewAlt: "Frío Restaurant & Cafe — Modern Culinary Presentation & Platter",
      gallery: [
        { src: "assets/images/frio-restaurant-2.jpg", caption: "Frío Restaurant — Dining Atmosphere & Craft Experience" }
      ]
    },
    github: "https://github.com/mohamedfakhar/frio-restaurant",
    liveDemo: ""
  },
  {
    id: "shopery",
    name: "Shopery",
    fullName: "Shopery — Full-Stack E-Commerce Web Application",
    badge: "Full-Stack E-Commerce · 36 Automated Tests Passed",
    timeline: "Jan 2026 – Mar 2026",
    role: "Full Stack Developer (Solo Project)",
    category: "COMMERCIAL E-COMMERCE · FULL STACK",
    filterCategories: ["fullstack", "ecommerce"],
    status: "Completed",
    isFeatured: false,
    isSpotlight: false,
    shortDesc: "A complete full-stack e-commerce platform built with React.js, Node.js, Express.js, and MongoDB. Implements JWT authentication, RBAC, RESTful APIs, product/category CRUD, cart, wishlist, checkout, coupons, order management, an admin dashboard, and enforced server-side price validation.",
    problem: "Many small-to-medium retail businesses struggle with fragmented product management, unreliable stock management, insecure client-side pricing manipulations, and a lack of unified admin governance.",
    highlights: [
      "Developed a full-stack e-commerce platform using React.js, Node.js, Express.js, and MongoDB, implementing JWT authentication, RBAC, REST APIs, product/category CRUD, cart, wishlist, checkout, coupons, and order management",
      "Built an admin dashboard and enforced server-side price validation to protect checkout and order integrity",
      "Architected complete test coverage with 36/36 automated integration tests passing across all critical e-commerce endpoints"
    ],
    features: {
      "Customer Shopping Experience": [
        "Product catalog with keyword search, multi-faceted category filtering, price sliders, and sorting",
        "Persistent shopping cart and user wishlist with stock availability checks",
        "Coupon redemption engine applying percentage and fixed-amount discounts with expiration rules"
      ],
      "Security & Price Validation": [
        "Strict server-side price recalculation fetching authoritative database values during checkout, preventing client-side price tampering",
        "JWT access and refresh token authentication with bcrypt password hashing",
        "Role-Based Access Control protecting customer data and restricting administrative operations"
      ],
      "Admin Store Management": [
        "Comprehensive administrator dashboard for product inventory CRUD, category management, and coupon creation",
        "Order lifecycle management (Pending → Processing → Shipped → Delivered → Cancelled)"
      ]
    },
    techStack: {
      "Frontend": ["React.js", "Vite", "Tailwind CSS", "Axios", "Lucide React"],
      "Backend": ["Node.js", "Express.js", "RESTful APIs", "JWT", "Bcrypt.js"],
      "Database": ["MongoDB", "Mongoose"],
      "Testing": ["36 Automated Integration Tests Passed", "Mocha / Supertest"]
    },
    challenges: [
      {
        title: "Checkout Price Integrity",
        desc: "Prevented tampering with cart item prices submitted from the browser by calculating all totals server-side directly from the MongoDB product catalog before generating orders."
      },
      {
        title: "Atomic Stock Management",
        desc: "Implemented atomic MongoDB query operators (`$inc`, `$gte`) to prevent negative inventory balances during simultaneous high-volume checkout attempts."
      }
    ],
    workflow: [
      "Browse Catalog",
      "Add to Cart / Apply Coupon",
      "Server Price Recalculation",
      "Atomic Stock Decrement",
      "Order Stored in MongoDB",
      "Admin Order Fulfillment"
    ],
    images: {
      preview: "assets/images/shopery-1.png",
      previewAlt: "Shopery E-Commerce — Storefront Catalog & Featured Deals",
      gallery: [
        { src: "assets/images/shopery-2.png", caption: "Shopery Product Details & Customer Cart View" }
      ]
    },
    github: "https://github.com/mohamedfakhar/shopery",
    liveDemo: ""
  },
  {
    id: "topico",
    name: "Topico (Ecommerce Storefront)",
    fullName: "Topico — E-Commerce & Community Storefront",
    badge: "Interactive Storefront · Deployed on Vercel",
    timeline: "Jul 2024 – Dec 2024",
    role: "Frontend Developer",
    category: "STOREFRONT & COMMERCE · VANILLA JS",
    filterCategories: ["ecommerce"],
    status: "Live on Vercel",
    isFeatured: false,
    isSpotlight: false,
    shortDesc: "A responsive e-commerce storefront built with vanilla JavaScript, modern CSS, and HTML5, consuming backend RESTful APIs for dynamic product browsing, interactive category sliders, cart persistence, and real-time user engagement.",
    problem: "E-commerce storefronts frequently suffer from bloat, slow first contentful paint (FCP), and heavy JavaScript frameworks for simple catalog browsing.",
    highlights: [
      "Built the complete responsive frontend in vanilla JavaScript, consuming backend REST APIs and delivering dynamic topic browsing, post interaction, and user engagement features",
      "Engineered lightweight, dependency-free interactive UI components with responsive layouts across mobile, tablet, and desktop",
      "Deployed and verified live on Vercel at topoco.vercel.app with high lighthouse scores"
    ],
    features: {
      "Catalog & Interaction": [
        "Dynamic JSON product catalog rendering with zero framework dependencies",
        "Category swiper sliders, multi-product grids, and responsive product detail dialogs",
        "Client-side cart calculation with local storage persistence and quick item removal"
      ]
    },
    techStack: {
      "Core Frontend": ["HTML5", "Vanilla JavaScript (ES6+)", "CSS3 / Modern Flex & Grid"],
      "Libraries": ["Swiper.js", "FontAwesome Icons"],
      "Deployment": ["Vercel Edge Network"]
    },
    challenges: [
      {
        title: "Zero-Framework Performance",
        desc: "Architected modern DOM manipulation and state management purely with vanilla JS, resulting in fast load times and zero framework overhead."
      }
    ],
    images: {
      preview: "assets/images/topico-1.png",
      previewAlt: "Topico Storefront — Hero Banners & Featured Collections",
      gallery: [
        { src: "assets/images/topico-2.png", caption: "Topico Product Catalog & Shopping Interface" }
      ]
    },
    github: "https://github.com/mohamedfakhar/Ecommerce-Website",
    liveDemo: "https://topoco.vercel.app/"
  },
  {
    id: "diabetes-app",
    name: "Diabetes Management App",
    fullName: "Diabetes Management App — Predictive Healthcare Platform",
    badge: "University Graduation Project · Zagazig University",
    timeline: "Jan 2024 – May 2024",
    role: "Backend Lead & ML Developer",
    category: "HEALTHCARE PLATFORM · ACADEMIC GRADUATION PROJECT",
    filterCategories: ["enterprise"],
    status: "Completed",
    isFeatured: false,
    isSpotlight: false,
    shortDesc: "A healthcare web and mobile application supporting diabetic patients through biometric logging, glucose monitoring, and machine-learning-driven trend analysis. Led backend development with Node.js, Express.js, and MySQL, building RESTful APIs and predictive health modules.",
    problem: "Diabetic patients lack unified platforms to record multi-variable biometric data (glucose, meals, exercise) and receive algorithmic trend alerts before severe glycemic events occur.",
    highlights: [
      "Led backend development with Node.js and Express.js, building RESTful APIs for patient data and monitoring",
      "Implemented a machine learning module supporting patient health predictions and trend analysis",
      "Designed normalized relational MySQL database schemas for patient profiles, medical logs, and physician notes"
    ],
    features: {
      "Health Monitoring & Analytics": [
        "RESTful endpoints for logging glucose readings, insulin doses, meal types, and activity metrics",
        "Machine learning prediction module calculating glucose risk indices and historical trend trajectories",
        "Physician dashboard for reviewing patient adherence and glycemic trends over time"
      ]
    },
    techStack: {
      "Backend": ["Node.js", "Express.js", "RESTful APIs"],
      "Database": ["MySQL", "Relational Schema Normalization"],
      "Machine Learning": ["Python ML Scripting", "Health Predictive Modeling"]
    },
    challenges: [
      {
        title: "Medical Data Normalization",
        desc: "Designed structured, HIPAA-conscious relational database schemas in MySQL to handle high-frequency biometric logs with zero data loss."
      }
    ],
    images: {
      preview: "assets/images/diabetes-app.png",
      previewAlt: "Diabetes Management App — Medical Dashboard & Patient Metrics",
      gallery: [
        { src: "assets/images/diabetes-app.png", caption: "Diabetes App Mobile & Web Interface" }
      ]
    },
    github: "https://github.com/mohamedfakhar/Diabetes-App",
    liveDemo: ""
  },
  {
    id: "al-quds-pharmacy",
    name: "Al-Quds Pharmacy",
    fullName: "Al-Quds Pharmacy — Community Pharmacy Storefront",
    badge: "Freelance Client Platform · Pharmacy & Prescriptions",
    timeline: "2024",
    role: "Full Stack Developer (Freelance)",
    category: "HEALTHCARE & COMMERCE · FREELANCE",
    filterCategories: ["enterprise", "ecommerce"],
    status: "Delivered",
    isFeatured: false,
    isSpotlight: false,
    shortDesc: "A community pharmacy website developed to modernize customer interactions, product inquiries, and prescription fulfillment. Features a structured medical product catalog, prescription upload flow, and direct WhatsApp customer support.",
    problem: "Local community pharmacies lose repeat orders due to lack of digital prescription submission channels and inability to display OTC medications and healthcare supplies online.",
    highlights: [
      "Developed a responsive pharmacy website focused on clean UI, product/service presentation, and user-friendly navigation",
      "Implemented online prescription upload flow allowing patients to submit photo prescriptions directly to pharmacists",
      "Engineered high-contrast, accessible UI tailored for healthcare accessibility and seamless mobile ordering"
    ],
    features: {
      "Pharmacy Services": [
        "Categorized medical supply catalog (Medicines, Vitamins, Baby Care, Medical Equipment)",
        "Secure prescription upload form with image validation and customer contact collection",
        "Direct pharmacy consultation link via integrated WhatsApp communication"
      ]
    },
    techStack: {
      "Frontend": ["HTML5", "CSS3", "JavaScript"],
      "Backend": ["Node.js", "Express.js"],
      "Database": ["MongoDB", "Mongoose"],
      "Integration": ["WhatsApp Business API Integration"]
    },
    challenges: [
      {
        title: "Accessible Healthcare UI",
        desc: "Engineered clean, accessible UI components with high-contrast text and intuitive navigation for patients across all age groups."
      }
    ],
    images: {
      preview: "assets/images/al-quds-pharmacy-logo.svg",
      previewAlt: "Al-Quds Pharmacy — Official Brand Lockup & Storefront Identity",
      imgClass: "svg-preview",
      gallery: [
        { src: "assets/images/al-quds-pharmacy-logo.svg", caption: "Al-Quds Pharmacy — Official Branding" }
      ]
    },
    github: "https://github.com/mohamedfakhar/al-quds-pharmacy",
    liveDemo: ""
  }
];

// ==========================================================================
// 2. DOM Rendering: Editorial Showcase with Visual Rhythm
// ==========================================================================
let currentFilter = "all";

// Helper to render tech pills
function renderTechPills(proj, limit = 5) {
  let tags = [];
  if (proj.techStack["Frontend"]) tags.push(...proj.techStack["Frontend"]);
  if (proj.techStack["Framework"]) tags.push(...proj.techStack["Framework"]);
  if (proj.techStack["Backend"]) tags.push(...proj.techStack["Backend"]);
  if (proj.techStack["Core Frontend"]) tags.push(...proj.techStack["Core Frontend"]);
  if (proj.techStack["Database"]) tags.push(...proj.techStack["Database"]);
  if (proj.techStack["Payments & Real-Time"]) tags.push(...proj.techStack["Payments & Real-Time"]);

  return tags.slice(0, limit)
    .map(t => `<span class="project-pill">${t}</span>`)
    .join("");
}

// 1. Flagship Spotlight Card (#1 HRM System)
function createSpotlightCardHTML(proj) {
  const pillsHTML = renderTechPills(proj, 6);
  const highlightsHTML = proj.highlights.slice(0, 3)
    .map(h => `<li><span class="bullet-dot">✦</span><span>${h}</span></li>`)
    .join("");

  return `
    <article class="spotlight-card" data-id="${proj.id}">
      <div class="spotlight-visual" onclick="openModal('${proj.id}')" role="button" tabindex="0" aria-label="Open ${proj.name} Case Study">
        <div class="spotlight-img-frame">
          <img class="spotlight-img" src="${proj.images.preview}" alt="${proj.images.previewAlt}" loading="lazy" />
          <div class="spotlight-overlay">
            <span class="spotlight-zoom-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              <span>View Case Study</span>
            </span>
          </div>
        </div>
        <div class="spotlight-badge-row">
          <span class="tag-flagship">★ Flagship Case Study</span>
          <span class="tag-status">${proj.status}</span>
        </div>
      </div>

      <div class="spotlight-details">
        <div class="spotlight-header">
          <div class="spotlight-category">${proj.category}</div>
          <h3 class="spotlight-title">${proj.name}</h3>
          <div class="spotlight-timeline">${proj.timeline} &middot; <em>${proj.role}</em></div>
        </div>

        <p class="spotlight-summary">${proj.shortDesc}</p>

        <ul class="spotlight-highlights">
          ${highlightsHTML}
        </ul>

        <div class="spotlight-metric-chips">
          <div class="m-chip"><span class="m-num">105/105</span> <span class="m-lbl">Automated Tests</span></div>
          <div class="m-chip"><span class="m-num">16</span> <span class="m-lbl">Assistant Tools</span></div>
          <div class="m-chip"><span class="m-num">RBAC</span> <span class="m-lbl">Role Guards</span></div>
          <div class="m-chip"><span class="m-num">Socket.IO</span> <span class="m-lbl">Real-Time</span></div>
        </div>

        <div class="spotlight-pills-wrap">
          ${pillsHTML}
        </div>

        <div class="spotlight-actions">
          <button class="btn-card-primary" onclick="openModal('${proj.id}')">
            <span>Deep-Dive Case Study</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          ${proj.github ? `
            <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-card-secondary" aria-label="View ${proj.name} GitHub Repository">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span>Repository</span>
            </a>
          ` : ""}
        </div>
      </div>
    </article>
  `;
}

// 2. Secondary Featured Pair Card (#2 Kemet Gate, #3 Frío Restaurant)
function createFeaturedPairCardHTML(proj) {
  const pillsHTML = renderTechPills(proj, 4);

  return `
    <article class="featured-pair-card" data-id="${proj.id}">
      <div class="pair-visual" onclick="openModal('${proj.id}')" role="button" tabindex="0" aria-label="Open ${proj.name} Case Study">
        <img class="pair-img" src="${proj.images.preview}" alt="${proj.images.previewAlt}" loading="lazy" />
        <div class="pair-overlay">
          <span class="spotlight-zoom-pill">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            <span>Case Study</span>
          </span>
        </div>
        <div class="pair-badges">
          <span class="tag-featured">★ Featured</span>
          <span class="tag-status">${proj.status}</span>
        </div>
      </div>

      <div class="pair-content">
        <div class="pair-category">${proj.category}</div>
        <h3 class="pair-title">${proj.name}</h3>
        <p class="pair-desc">${proj.shortDesc}</p>

        <div class="pair-role">
          <strong>Context:</strong> ${proj.badge}
        </div>

        <div class="pair-pills">
          ${pillsHTML}
        </div>

        <div class="pair-actions">
          <button class="btn-card-primary" onclick="openModal('${proj.id}')">
            <span>Case Study</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          ${proj.github ? `
            <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-card-secondary" aria-label="View ${proj.name} GitHub">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span>GitHub</span>
            </a>
          ` : ""}
        </div>
      </div>
    </article>
  `;
}

// 3. Compact Supporting Card (#4 Shopery, #5 Topico, #6 Diabetes App, #7 Al-Quds Pharmacy)
function createSupportingCardHTML(proj) {
  const pillsHTML = renderTechPills(proj, 3);

  return `
    <article class="supporting-card" data-id="${proj.id}">
      <div class="supporting-visual" onclick="openModal('${proj.id}')" role="button" tabindex="0" aria-label="Open ${proj.name} Details">
        <img class="supporting-img ${proj.images.imgClass || ''}" src="${proj.images.preview}" alt="${proj.images.previewAlt}" loading="lazy" />
        <span class="supporting-status">${proj.status}</span>
      </div>

      <div class="supporting-content">
        <div class="supporting-top">
          <span class="supporting-category">${proj.category}</span>
          <span class="supporting-date">${proj.timeline}</span>
        </div>

        <h4 class="supporting-title">${proj.name}</h4>
        <p class="supporting-desc">${proj.shortDesc}</p>

        <div class="supporting-pills">
          ${pillsHTML}
        </div>

        <div class="supporting-actions">
          <button class="btn-supporting-detail" onclick="openModal('${proj.id}')">
            <span>Details</span> &rarr;
          </button>
          ${proj.liveDemo ? `
            <a href="${proj.liveDemo}" target="_blank" rel="noopener noreferrer" class="supporting-link live" aria-label="Visit ${proj.name} Live Demo">
              <span>🌐 Live</span>
            </a>
          ` : ""}
          ${proj.github ? `
            <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="supporting-link" aria-label="View ${proj.name} GitHub Repository">
              <span>🐙 Code</span>
            </a>
          ` : ""}
        </div>
      </div>
    </article>
  `;
}

// Main Render Function
function renderProjects(filter = "all") {
  const spotlightArea = document.getElementById("spotlight-project-area");
  const featuredPairArea = document.getElementById("featured-pair-area");
  const supportingHeader = document.getElementById("supporting-header");
  const supportingGrid = document.getElementById("supporting-projects-grid");

  if (!spotlightArea || !featuredPairArea || !supportingGrid) return;

  if (filter === "all") {
    // 1. Spotlight Project: HRM System
    const spotlightProject = projectsData.find(p => p.id === "hrm-system");
    spotlightArea.innerHTML = spotlightProject ? createSpotlightCardHTML(spotlightProject) : "";
    spotlightArea.style.display = "block";

    // 2. Featured Secondary Pair: Kemet Gate & Frío Restaurant
    const pairProjects = projectsData.filter(p => p.id === "kemet-gate" || p.id === "frio-restaurant");
    featuredPairArea.innerHTML = pairProjects.map(createFeaturedPairCardHTML).join("");
    featuredPairArea.style.display = "grid";

    // 3. Supporting Projects: Shopery, Topico, Diabetes App, Al-Quds Pharmacy
    if (supportingHeader) supportingHeader.style.display = "flex";
    const supportingProjects = projectsData.filter(p => !p.isFeatured);
    supportingGrid.innerHTML = supportingProjects.map(createSupportingCardHTML).join("");
    supportingGrid.style.display = "grid";
  } else if (filter === "featured") {
    // Show only 3 featured projects
    const spotlightProject = projectsData.find(p => p.id === "hrm-system");
    spotlightArea.innerHTML = spotlightProject ? createSpotlightCardHTML(spotlightProject) : "";
    spotlightArea.style.display = "block";

    const pairProjects = projectsData.filter(p => p.id === "kemet-gate" || p.id === "frio-restaurant");
    featuredPairArea.innerHTML = pairProjects.map(createFeaturedPairCardHTML).join("");
    featuredPairArea.style.display = "grid";

    if (supportingHeader) supportingHeader.style.display = "none";
    supportingGrid.innerHTML = "";
    supportingGrid.style.display = "none";
  } else {
    // Filtered by category (fullstack, ecommerce, enterprise)
    const matching = projectsData.filter(p => p.filterCategories && p.filterCategories.includes(filter));

    spotlightArea.innerHTML = "";
    spotlightArea.style.display = "none";
    featuredPairArea.innerHTML = "";
    featuredPairArea.style.display = "none";

    if (supportingHeader) {
      supportingHeader.style.display = "flex";
      const titleEl = supportingHeader.querySelector("h3");
      const descEl = supportingHeader.querySelector(".supporting-header-desc");
      if (titleEl) titleEl.textContent = `Filtered Projects (${matching.length})`;
      if (descEl) descEl.textContent = `Verified platforms matching the "${filter}" filter.`;
    }

    supportingGrid.innerHTML = matching.map(p => {
      return p.isFeatured ? createFeaturedPairCardHTML(p) : createSupportingCardHTML(p);
    }).join("");
    supportingGrid.style.display = "grid";
  }
}

// Setup Project Filter Tabs
function initProjectFilters() {
  const filterTabs = document.querySelectorAll(".filter-tab");
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.getAttribute("data-filter") || "all";
      renderProjects(currentFilter);
    });
  });
}

// ==========================================================================
// 3. Modal Dialog (Case Study Lightbox with Focus Trap & Escape Dismiss)
// ==========================================================================
const modalDialog = document.getElementById("project-modal");
const modalContainer = document.getElementById("modal-container");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalTitle = document.getElementById("modal-title-heading");
const modalSubtitle = document.getElementById("modal-subtitle-text");
const modalStatus = document.getElementById("modal-status-badge");
const modalBody = document.getElementById("modal-body-content");

let previousActiveElement = null;

function openModal(projectId) {
  const proj = projectsData.find(p => p.id === projectId);
  if (!proj || !modalDialog) return;

  previousActiveElement = document.activeElement;

  modalTitle.textContent = proj.fullName || proj.name;
  modalSubtitle.textContent = proj.badge || proj.category;
  modalStatus.textContent = `${proj.status} · ${proj.timeline}`;

  // Build Features HTML
  let featuresHTML = "";
  if (proj.features) {
    for (const [sectionName, listItems] of Object.entries(proj.features)) {
      featuresHTML += `
        <div style="margin-bottom: 20px;">
          <h4 style="font-size: 13.5px; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; font-family: var(--font-heading); font-weight: 700;">${sectionName}</h4>
          <ul class="modal-list">
            ${listItems.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `;
    }
  }

  // Build Tech Stack HTML
  let techStackHTML = "";
  if (proj.techStack) {
    for (const [layerName, tags] of Object.entries(proj.techStack)) {
      techStackHTML += `
        <div style="margin-bottom: 14px;">
          <div class="modal-meta-label">${layerName}</div>
          <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px;">
            ${tags.map(t => `<span class="stack-tag">${t}</span>`).join("")}
          </div>
        </div>
      `;
    }
  }

  // Build Challenges HTML
  let challengesHTML = "";
  if (proj.challenges && proj.challenges.length > 0) {
    challengesHTML = proj.challenges.map(ch => `
      <div style="margin-bottom: 16px;">
        <div style="font-weight: 700; color: var(--white); font-size: 14px; margin-bottom: 4px; font-family: var(--font-heading);">✦ ${ch.title}</div>
        <div class="modal-text" style="margin-bottom: 0; padding-left: 14px;">${ch.desc}</div>
      </div>
    `).join("");
  }

  // Build Workflow Diagram
  let workflowHTML = "";
  if (proj.workflow && proj.workflow.length > 0) {
    const nodes = proj.workflow.map(node => `<div class="workflow-node">${node}</div>`).join('<div class="workflow-arrow">&rarr;</div>');
    workflowHTML = `
      <div style="margin-top: 28px;">
        <div class="modal-section-title">End-to-End System Workflow</div>
        <div class="workflow-container">
          ${nodes}
        </div>
      </div>
    `;
  }

  // Build Image Gallery
  const allImages = [{ src: proj.images.preview, caption: "Primary Architecture View" }, ...(proj.images.gallery || [])];
  const galleryHTML = `
    <div class="modal-gallery">
      ${allImages.map(img => `
        <div class="modal-gallery-img-wrap" onclick="window.open('${img.src}', '_blank')">
          <img class="modal-gallery-img ${proj.images.imgClass || ''}" src="${img.src}" alt="${proj.name} Screenshot" loading="lazy" />
          <div class="modal-gallery-caption">${img.caption}</div>
        </div>
      `).join("")}
    </div>
  `;

  // Inject into modal body
  modalBody.innerHTML = `
    <div class="modal-grid-2">
      <div>
        <div class="modal-section-title">Project Overview</div>
        <p class="modal-text">${proj.shortDesc}</p>
        
        <div class="modal-section-title">Problem &amp; Context</div>
        <p class="modal-text">${proj.problem}</p>
        
        <div class="modal-section-title">Key System Features</div>
        ${featuresHTML}
        
        ${challengesHTML ? `
          <div class="modal-section-title">Technical Challenges &amp; Solutions</div>
          ${challengesHTML}
        ` : ""}
      </div>
      
      <div>
        <div class="modal-meta-box">
          <div class="modal-meta-item">
            <div class="modal-meta-label">My Role &amp; Context</div>
            <div class="modal-meta-val">${proj.role} &middot; <em>${proj.badge}</em></div>
          </div>
          
          <div class="modal-meta-item" style="border-top: 1px solid var(--border); padding-top: 16px;">
            <div class="modal-meta-label">Technology Architecture</div>
            ${techStackHTML}
          </div>

          <div class="modal-meta-item" style="border-top: 1px solid var(--border); padding-top: 16px; display: flex; flex-direction: column; gap: 8px;">
            ${proj.github ? `
              <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="width: 100%; justify-content: center;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>View GitHub Repository</span>
              </a>
            ` : ""}
            ${proj.liveDemo ? `
              <a href="${proj.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="width: 100%; justify-content: center;">
                <span>🌐 Open Live Application</span>
              </a>
            ` : ""}
          </div>
        </div>
      </div>
    </div>
    
    <div>
      <div class="modal-section-title">Verified Visual Assets (${allImages.length} Visuals)</div>
      <p style="font-size: 12px; color: var(--muted); margin-bottom: 12px;">Click any visual asset to inspect in full resolution.</p>
      ${galleryHTML}
    </div>

    ${workflowHTML}
  `;

  modalDialog.classList.add("open");
  modalDialog.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  setTimeout(() => {
    modalContainer.focus();
  }, 50);
}

function closeModal() {
  if (!modalDialog) return;
  modalDialog.classList.remove("open");
  modalDialog.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (previousActiveElement) {
    previousActiveElement.focus();
  }
}

// Close button click
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeModal);
}

// Close on backdrop click (Light Dismiss)
if (modalDialog) {
  modalDialog.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-backdrop") || e.target === modalDialog) {
      closeModal();
    }
  });
}

// Close on Escape key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalDialog && modalDialog.classList.contains("open")) {
    closeModal();
  }
});

// Focus trap inside modal
if (modalContainer) {
  modalContainer.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;

    const focusable = modalContainer.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      last.focus();
      e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === last) {
      first.focus();
      e.preventDefault();
    }
  });
}

// ==========================================================================
// 4. Mobile Navigation Drawer Handling
// ==========================================================================
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileCloseBtn = document.getElementById("mobile-close-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileOverlay = document.getElementById("mobile-overlay");
const mobileLinks = document.querySelectorAll(".mobile-link");

function openMobileMenu() {
  if (!hamburgerBtn || !mobileMenu) return;
  hamburgerBtn.setAttribute("aria-expanded", "true");
  hamburgerBtn.classList.add("active");
  mobileMenu.classList.add("active");
  mobileMenu.setAttribute("aria-hidden", "false");
  if (mobileOverlay) mobileOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  if (!hamburgerBtn || !mobileMenu) return;
  hamburgerBtn.setAttribute("aria-expanded", "false");
  hamburgerBtn.classList.remove("active");
  mobileMenu.classList.remove("active");
  mobileMenu.setAttribute("aria-hidden", "true");
  if (mobileOverlay) mobileOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", () => {
    const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
}

if (mobileCloseBtn) {
  mobileCloseBtn.addEventListener("click", closeMobileMenu);
}

if (mobileOverlay) {
  mobileOverlay.addEventListener("click", closeMobileMenu);
}

mobileLinks.forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu && mobileMenu.classList.contains("active")) {
    closeMobileMenu();
    if (hamburgerBtn) hamburgerBtn.focus();
  }
});

// ==========================================================================
// 5. Initialization on DOMContentLoaded
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Render projects with visual rhythm & initialize filters
  renderProjects("all");
  initProjectFilters();

  // Dynamic Year in Footer
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Navbar subtle scroll elevation
  const nav = document.querySelector(".nav-bar");
  if (nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }, { passive: true });
  }
});
