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
    cardCategory: "Enterprise · Full Stack & AI",
    cardDesc: "Enterprise HR and payroll platform with attendance, leave, a payroll engine, anomaly detection and a 16-tool bilingual HR assistant.",
    cardTags: ["React 19", "Node.js", "MongoDB", "Socket.IO"],
    spotlightPoints: [
      "JWT authentication with refresh tokens and role-based access control",
      "Attendance, leave, payroll, performance, anomaly detection and real-time notifications",
      "HR assistant with 16 validated tools and zero arbitrary database queries",
      "105/105 automated test assertions passing"
    ],
    imagePosition: "top left",
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
      preview: "assets/images/hrm-portal-2.png",
      previewAlt: "HR & Payroll Management System — Employee dashboard with attendance overview",
      previewCaption: "Employee dashboard — attendance overview",
      gallery: [
        { src: "assets/images/hrm-portal-1.png", caption: "HRM Portal — landing page" }
      ]
    },
    github: "https://github.com/mohamedfakhar/hrm-system",
    liveDemo: ""
  },
  {
    id: "kemet-gate",
    cardCategory: "Tourism · Full Stack",
    cardDesc: "Tourism booking platform for Egyptian destinations with Stripe payments and tamper-proof, HMAC-signed QR tickets.",
    cardTags: ["React", "Node.js", "MongoDB", "Stripe"],
    imagePosition: "center center",
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
    cardCategory: "Hospitality · Next.js",
    cardDesc: "Restaurant and online ordering platform with a persistent cart, order tracking and automatic WhatsApp order dispatch.",
    cardTags: ["Next.js 16", "TypeScript", "Prisma", "Tailwind v4"],
    imagePosition: "center 35%",
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
    cardCategory: "E-Commerce · Full Stack",
    cardDesc: "Full-stack store with JWT and RBAC, cart, coupons, an admin dashboard and server-side price validation (36 passing tests).",
    cardTags: ["React", "Node.js", "MongoDB", "JWT"],
    imagePosition: "top center",
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
    cardCategory: "Storefront · Vanilla JS",
    cardDesc: "Responsive storefront in vanilla JavaScript that consumes REST APIs, with category sliders and a persistent cart.",
    cardTags: ["JavaScript", "HTML5 / CSS3", "Swiper.js", "Vercel"],
    imagePosition: "top center",
    name: "Topico Storefront",
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
    cardCategory: "Healthcare · Graduation project",
    cardDesc: "App for diabetic patients with glucose logging and machine-learning trend prediction, backed by Node.js and MySQL.",
    cardTags: ["Node.js", "Express.js", "MySQL", "ML"],
    imagePosition: "center center",
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
    cardCategory: "Healthcare · Freelance",
    cardDesc: "Community pharmacy website with a product catalog, a prescription upload flow and direct WhatsApp consultation.",
    cardTags: ["Node.js", "Express.js", "MongoDB", "WhatsApp API"],
    imagePosition: "center center",
    imageBackground: "#eef3fa",
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
// 2. Small helpers and icons
// ==========================================================================
const githubIcon = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';

const arrowIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';

const externalIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>';

// Filter buttons shown above the projects
const filterList = [
  { key: "all", label: "All" },
  { key: "featured", label: "Featured" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "ecommerce", label: "E-Commerce" },
  { key: "enterprise", label: "Enterprise & Healthcare" }
];

let currentFilter = "all";

// Returns the projects that match a filter
function getProjectsForFilter(filter) {
  if (filter === "all") {
    return projectsData;
  }
  return projectsData.filter(function (project) {
    return project.filterCategories.includes(filter);
  });
}

// ==========================================================================
// 3. Project cards
// ==========================================================================

// Big card for the main project (HRM system)
function createSpotlightCardHTML(proj) {
  const pointsHTML = proj.spotlightPoints
    .map(function (point) {
      return '<li><span class="bullet-dot" aria-hidden="true"></span><span>' + point + "</span></li>";
    })
    .join("");

  const tagsHTML = proj.cardTags
    .map(function (tag) {
      return '<span class="project-pill">' + tag + "</span>";
    })
    .join("");

  const githubButton = proj.github
    ? '<a href="' + proj.github + '" target="_blank" rel="noopener noreferrer" class="btn-card-secondary" aria-label="View ' + proj.name + ' on GitHub">' + githubIcon + "<span>Repository</span></a>"
    : "";

  const liveButton = proj.liveDemo
    ? '<a href="' + proj.liveDemo + '" target="_blank" rel="noopener noreferrer" class="btn-card-secondary" aria-label="Open ' + proj.name + ' live site">' + externalIcon + "<span>Live Site</span></a>"
    : "";

  return (
    '<article class="spotlight-card reveal">' +
    '<button type="button" class="spotlight-visual" onclick="openModal(\'' + proj.id + '\')" aria-label="Open ' + proj.name + ' case study">' +
    '<span class="spotlight-img-frame">' +
    '<img class="spotlight-img" src="' + proj.images.preview + '" alt="' + proj.images.previewAlt + '" style="object-position: ' + proj.imagePosition + ';" loading="lazy" />' +
    '<span class="spotlight-overlay"><span class="zoom-pill">View case study</span></span>' +
    "</span>" +
    "</button>" +
    '<div class="spotlight-details">' +
    '<div class="spotlight-badges">' +
    '<span class="chip chip-featured">★ Flagship project</span>' +
    '<span class="chip chip-status">' + proj.status + "</span>" +
    "</div>" +
    '<p class="project-card-category">' + proj.cardCategory + "</p>" +
    '<h3 class="spotlight-title">' + proj.name + "</h3>" +
    '<p class="spotlight-timeline">' + proj.timeline + " — " + proj.role + "</p>" +
    '<p class="spotlight-summary">' + proj.shortDesc + "</p>" +
    '<ul class="spotlight-points">' + pointsHTML + "</ul>" +
    '<div class="project-card-tags">' + tagsHTML + "</div>" +
    '<div class="project-card-actions">' +
    '<button type="button" class="btn-card-primary" onclick="openModal(\'' + proj.id + '\')"><span>Read case study</span>' + arrowIcon + "</button>" +
    liveButton +
    githubButton +
    "</div>" +
    "</div>" +
    "</article>"
  );
}

// Normal card used for all other projects (same size and layout for every project)
function createProjectCardHTML(proj, index) {
  const tagsHTML = proj.cardTags
    .map(function (tag) {
      return '<span class="project-pill">' + tag + "</span>";
    })
    .join("");

  const featuredChip = proj.isFeatured ? '<span class="chip chip-featured">★ Featured</span>' : "";
  const imageClass = proj.images.imgClass ? " is-logo" : "";
  const imageBackground = proj.imageBackground ? "background: " + proj.imageBackground + ";" : "";

  const liveButton = proj.liveDemo
    ? '<a href="' + proj.liveDemo + '" target="_blank" rel="noopener noreferrer" class="btn-icon-link" aria-label="Open ' + proj.name + ' live site">' + externalIcon + "<span>Live</span></a>"
    : "";

  const githubButton = proj.github
    ? '<a href="' + proj.github + '" target="_blank" rel="noopener noreferrer" class="btn-icon-link" aria-label="View ' + proj.name + ' on GitHub">' + githubIcon + "<span>Code</span></a>"
    : "";

  return (
    '<article class="project-card reveal" style="--i: ' + index + ';">' +
    '<button type="button" class="project-card-image' + imageClass + '" style="' + imageBackground + '" onclick="openModal(\'' + proj.id + '\')" aria-label="Open ' + proj.name + ' case study">' +
    '<img src="' + proj.images.preview + '" alt="' + proj.images.previewAlt + '" style="object-position: ' + proj.imagePosition + ';" loading="lazy" />' +
    '<span class="project-card-overlay"><span class="zoom-pill">View case study</span></span>' +
    '<span class="card-chips">' +
    '<span class="chip chip-status">' + proj.status + "</span>" +
    featuredChip +
    "</span>" +
    "</button>" +
    '<div class="project-card-body">' +
    '<div class="project-card-meta">' +
    '<span class="project-card-category">' + proj.cardCategory + "</span>" +
    '<span class="project-card-date">' + proj.timeline + "</span>" +
    "</div>" +
    '<h3 class="project-card-title">' + proj.name + "</h3>" +
    '<p class="project-card-desc">' + proj.cardDesc + "</p>" +
    '<div class="project-card-tags">' + tagsHTML + "</div>" +
    '<div class="project-card-actions">' +
    '<button type="button" class="btn-card-primary" onclick="openModal(\'' + proj.id + '\')"><span>Case study</span>' + arrowIcon + "</button>" +
    liveButton +
    githubButton +
    "</div>" +
    "</div>" +
    "</article>"
  );
}

// Builds the filter buttons (the numbers are counted automatically)
function renderFilters() {
  const filterBar = document.getElementById("projects-filter-bar");
  if (!filterBar) return;

  filterBar.innerHTML = filterList
    .map(function (item) {
      const count = getProjectsForFilter(item.key).length;
      const activeClass = item.key === currentFilter ? " active" : "";
      return (
        '<button type="button" class="filter-tab' + activeClass + '" data-filter="' + item.key + '" aria-pressed="' + (item.key === currentFilter) + '">' +
        item.label + ' <span class="filter-count">' + count + "</span>" +
        "</button>"
      );
    })
    .join("");

  const tabs = filterBar.querySelectorAll(".filter-tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      currentFilter = tab.getAttribute("data-filter");
      renderFilters();
      renderProjects(currentFilter);
    });
  });
}

// Shows the projects for the chosen filter
function renderProjects(filter) {
  const spotlightArea = document.getElementById("spotlight-project-area");
  const projectsGrid = document.getElementById("projects-grid");
  const resultText = document.getElementById("projects-result-text");

  if (!spotlightArea || !projectsGrid) return;

  const matchingProjects = getProjectsForFilter(filter);

  // The big card is only shown for "All" and "Featured"
  let spotlightProject = null;
  if (filter === "all" || filter === "featured") {
    spotlightProject = matchingProjects.find(function (project) {
      return project.isSpotlight;
    });
  }

  const otherProjects = matchingProjects.filter(function (project) {
    return project !== spotlightProject;
  });

  spotlightArea.innerHTML = spotlightProject ? createSpotlightCardHTML(spotlightProject) : "";

  projectsGrid.innerHTML = otherProjects
    .map(function (project, index) {
      return createProjectCardHTML(project, index);
    })
    .join("");

  // The CSS uses this number to choose 2 or 3 columns
  projectsGrid.setAttribute("data-count", otherProjects.length);

  if (resultText) {
    resultText.textContent = "Showing " + matchingProjects.length + " of " + projectsData.length + " projects";
  }

  // New cards need the reveal animation
  watchRevealItems();
}

// ==========================================================================
// 4. Project modal (case study)
// ==========================================================================
const modalDialog = document.getElementById("project-modal");
const modalContainer = document.getElementById("modal-container");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalTitle = document.getElementById("modal-title-heading");
const modalSubtitle = document.getElementById("modal-subtitle-text");
const modalStatus = document.getElementById("modal-status-badge");
const modalBody = document.getElementById("modal-body-content");
const modalContent = document.querySelector(".modal-content");

let previousActiveElement = null;

function openModal(projectId) {
  const proj = projectsData.find(function (p) {
    return p.id === projectId;
  });
  if (!proj || !modalDialog) return;

  previousActiveElement = document.activeElement;

  modalTitle.textContent = proj.fullName || proj.name;
  modalSubtitle.textContent = proj.badge || proj.category;
  modalStatus.textContent = proj.status + " · " + proj.timeline;

  // Features
  let featuresHTML = "";
  if (proj.features) {
    for (const sectionName in proj.features) {
      const items = proj.features[sectionName]
        .map(function (item) {
          return "<li>" + item + "</li>";
        })
        .join("");
      featuresHTML += '<div class="modal-feature-group"><h4 class="modal-feature-title">' + sectionName + '</h4><ul class="modal-list">' + items + "</ul></div>";
    }
  }

  // Tech stack
  let techStackHTML = "";
  if (proj.techStack) {
    for (const layerName in proj.techStack) {
      const tags = proj.techStack[layerName]
        .map(function (tag) {
          return '<span class="stack-tag">' + tag + "</span>";
        })
        .join("");
      techStackHTML += '<div class="modal-stack-group"><div class="modal-meta-label">' + layerName + '</div><div class="modal-stack-tags">' + tags + "</div></div>";
    }
  }

  // Challenges
  let challengesHTML = "";
  if (proj.challenges && proj.challenges.length > 0) {
    challengesHTML = proj.challenges
      .map(function (challenge) {
        return '<div class="modal-challenge"><h4 class="modal-challenge-title">' + challenge.title + '</h4><p class="modal-text">' + challenge.desc + "</p></div>";
      })
      .join("");
  }

  // Workflow (numbered steps)
  let workflowHTML = "";
  if (proj.workflow && proj.workflow.length > 0) {
    const steps = proj.workflow
      .map(function (step, index) {
        return '<li class="workflow-step"><span class="workflow-number">' + (index + 1) + '</span><span class="workflow-text">' + step + "</span></li>";
      })
      .join("");
    workflowHTML = '<div class="modal-section"><h3 class="modal-section-title">How it works</h3><ol class="workflow-list">' + steps + "</ol></div>";
  }

  // Screenshots (the same image is not shown twice)
  const allImages = [{ src: proj.images.preview, caption: proj.images.previewCaption || "Main screen" }];
  (proj.images.gallery || []).forEach(function (image) {
    const alreadyAdded = allImages.some(function (added) {
      return added.src === image.src;
    });
    if (!alreadyAdded) {
      allImages.push(image);
    }
  });

  const imageClass = proj.images.imgClass ? " is-logo" : "";
  const imageBackground = proj.imageBackground ? "background: " + proj.imageBackground + ";" : "";

  const galleryHTML = allImages
    .map(function (image) {
      return (
        '<a class="modal-gallery-item" href="' + image.src + '" target="_blank" rel="noopener noreferrer">' +
        '<span class="modal-gallery-img-box' + imageClass + '" style="' + imageBackground + '"><img src="' + image.src + '" alt="' + proj.name + " — " + image.caption + '" loading="lazy" /></span>' +
        '<span class="modal-gallery-caption">' + image.caption + "</span>" +
        "</a>"
      );
    })
    .join("");

  // Buttons
  const githubButton = proj.github
    ? '<a href="' + proj.github + '" target="_blank" rel="noopener noreferrer" class="btn-primary modal-btn">' + githubIcon + "<span>View GitHub repository</span></a>"
    : "";
  const liveButton = proj.liveDemo
    ? '<a href="' + proj.liveDemo + '" target="_blank" rel="noopener noreferrer" class="btn-secondary modal-btn">' + externalIcon + "<span>Open live site</span></a>"
    : "";

  modalBody.innerHTML =
    '<div class="modal-grid-2">' +
    "<div>" +
    '<div class="modal-section"><h3 class="modal-section-title">Overview</h3><p class="modal-text">' + proj.shortDesc + "</p></div>" +
    '<div class="modal-section"><h3 class="modal-section-title">The problem</h3><p class="modal-text">' + proj.problem + "</p></div>" +
    '<div class="modal-section"><h3 class="modal-section-title">Key features</h3>' + featuresHTML + "</div>" +
    (challengesHTML ? '<div class="modal-section"><h3 class="modal-section-title">Challenges and solutions</h3>' + challengesHTML + "</div>" : "") +
    "</div>" +
    "<aside>" +
    '<div class="modal-meta-box">' +
    '<div><div class="modal-meta-label">My role</div><div class="modal-meta-val">' + proj.role + "</div></div>" +
    '<div class="modal-meta-divider"><div class="modal-meta-label">Technology</div>' + techStackHTML + "</div>" +
    '<div class="modal-meta-divider modal-buttons">' + githubButton + liveButton + "</div>" +
    "</div>" +
    "</aside>" +
    "</div>" +
    '<div class="modal-section"><h3 class="modal-section-title">Screenshots</h3><div class="modal-gallery">' + galleryHTML + "</div></div>" +
    workflowHTML;

  modalDialog.classList.add("open");
  modalDialog.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  if (modalContent) modalContent.scrollTop = 0;

  setTimeout(function () {
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

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeModal);
}

// Click outside the box closes the modal
if (modalDialog) {
  modalDialog.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal-backdrop") || e.target === modalDialog) {
      closeModal();
    }
  });
}

// Escape key closes the modal
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modalDialog && modalDialog.classList.contains("open")) {
    closeModal();
  }
});

// Keep the Tab key inside the modal
if (modalContainer) {
  modalContainer.addEventListener("keydown", function (e) {
    if (e.key !== "Tab") return;

    const focusable = modalContainer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
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
// 5. Mobile menu
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
  hamburgerBtn.addEventListener("click", function () {
    const isOpen = hamburgerBtn.getAttribute("aria-expanded") === "true";
    if (isOpen) {
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

mobileLinks.forEach(function (link) {
  link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && mobileMenu && mobileMenu.classList.contains("active")) {
    closeMobileMenu();
    if (hamburgerBtn) hamburgerBtn.focus();
  }
});

// ==========================================================================
// 6. Animations: reveal on scroll, progress bar, active menu link
// ==========================================================================
let revealObserver = null;

// Shows elements with the class "reveal" when they enter the screen
function watchRevealItems() {
  const items = document.querySelectorAll(".reveal:not(.is-visible)");

  // Old browsers: just show everything
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (item) {
      item.classList.add("is-visible");
    });
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
  }

  items.forEach(function (item) {
    revealObserver.observe(item);
  });
}

const sectionIds = ["projects", "capabilities", "experience", "credentials", "skills", "principles", "contact"];

// Runs on scroll: navbar shadow, progress bar, back-to-top button, active link
function handleScroll() {
  const scrollTop = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

  const nav = document.querySelector(".nav-bar");
  if (nav) {
    nav.classList.toggle("scrolled", scrollTop > 30);
  }

  const progressBar = document.getElementById("scroll-progress");
  if (progressBar && pageHeight > 0) {
    progressBar.style.width = (scrollTop / pageHeight) * 100 + "%";
  }

  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    backToTop.classList.toggle("show", scrollTop > 700);
  }

  // Find the section the user is reading now
  let currentId = "";
  sectionIds.forEach(function (id) {
    const section = document.getElementById(id);
    if (section && section.getBoundingClientRect().top <= 140) {
      currentId = id;
    }
  });

  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
  });
}

// ==========================================================================
// 7. Start everything when the page is ready
// ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
  renderFilters();
  renderProjects(currentFilter);
  watchRevealItems();

  // Footer year
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});
