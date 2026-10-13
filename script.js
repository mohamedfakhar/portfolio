/**
 * MOHAMED ELSHAHAT IBRAHIM — FULL STACK DEVELOPER PORTFOLIO
 * Core Logic, Dynamic Project Data (7 Verified Projects) & Accessible Interactions
 */

// ==========================================================================
// 1. Projects Data Structure (7 Verified Projects Synchronized with CV & Repos)
// ==========================================================================
const projectsData = [
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
    shortDesc: "A full-stack platform for exploring Egyptian tourist destinations, trips, and services. Built with React.js, Vite, Tailwind CSS, Axios, Node.js, Express.js, and MongoDB, integrating tour discovery with secure booking, Stripe payments, and tamper-proof digital ticketing.",
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
    shortDesc: "An enterprise-style Human Resource and Payroll management platform built with Node.js, Express.js 5, MongoDB, React 19, and Socket.IO. Features attendance tracking, leave lifecycles, payroll calculation engines, operational anomaly detection, smart recommendations, and an HR Smart Assistant with 16 validated tools.",
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
        "Client-side protected route guards matching server-side API authorization tiers",
        "Privilege escalation defenses preventing unauthorized registration role assignment"
      ],
      "Attendance & Leave Management": [
        "Daily attendance check-in and check-out timestamp logging with unique employee codes",
        "Compound database constraints and server validation layers preventing duplicate attendance records for the same employee and date",
        "Leave request lifecycle workflow (Pending → Approved / Rejected) with automated balance deductions"
      ],
      "Payroll & Performance Engines": [
        "Centralized payroll calculation engine computing basic pay, dynamic allowances, and statutory deductions",
        "Automated alerts when payroll deductions exceed 25% threshold",
        "Employee performance evaluation tracking with grade distributions and KPI scoring"
      ],
      "Operational Anomaly Engine": [
        "Real-time detection of repeated lateness spikes, unexcused consecutive absences, and deduction spikes",
        "In-place telemetry deduplication updating open alert status instead of duplicating records",
        "Mandatory HR manager resolution workflows with audit note persistence"
      ],
      "Smart Workforce Recommendations": [
        "Rule-driven optimization proposals backed by verifiable database evidence",
        "Evaluates candidates for performance bonuses, promotion reviews, and support check-ins",
        "Structured HR review actions (Accept / Reject with notes)"
      ],
      "Bilingual HR Smart Assistant": [
        "Deterministic, tool-governed conversational interface supporting English, Modern Standard Arabic, and Egyptian dialect",
        "16 pre-defined analytical tools querying headcounts, lateness, leaves, payroll, anomalies, and recommendations",
        "Prompt injection interception with zero raw LLM-to-MongoDB execution",
        "Full audit logging recording timestamp, user ID, role, intent, tool args, latency, and source attribution"
      ]
    },
    techStack: {
      "Frontend": ["React 19", "Vite", "Tailwind CSS", "Recharts", "React Icons", "Axios"],
      "Backend": ["Node.js", "Express.js 5", "Socket.IO", "Morgan"],
      "Database & ODM": ["MongoDB", "Mongoose (Compound Indexing)"],
      "Security & Auth": ["JWT Token Rotation", "RBAC", "Joi Validation", "bcryptjs", "Helmet", "Express Rate Limit"],
      "Automated Testing": ["105/105 Passing Assertions", "5 Regression Suites (Assistant QA, E2E, Perf, Anomaly, Rec)"]
    },
    challenges: [
      {
        title: "Deterministic Bilingual Assistant Architecture",
        desc: "Engineered an NLP intent resolution layer supporting mixed English and Arabic/Egyptian dialect queries that maps exclusively to 16 strictly validated backend tools, intercepting prompt injections and avoiding arbitrary database execution."
      },
      {
        title: "High-Concurrency Attendance Data Integrity",
        desc: "Designed compound database indexes and server validation constraints to eliminate race conditions and prevent employees from submitting duplicate attendance entries for the same calendar date."
      },
      {
        title: "State-Safe Anomaly Deduplication",
        desc: "Built a background rule engine that scans attendance and payroll telemetry, updating open anomaly alerts in-place to prevent duplicate notification spam."
      }
    ],
    workflow: [
      "Employee Ops Logging",
      "Rule & Anomaly Engine",
      "Audit & Deduction Validation",
      "Real-Time Socket.IO Alert",
      "HR Manager Action / Assistant Query"
    ],
    images: {
      preview: "assets/images/hrm-portal-1.png",
      previewAlt: "HRM Portal — Enterprise Workforce Management Overview",
      imgClass: "portrait-preview",
      gallery: [
        { src: "assets/images/hrm-portal-2.png", caption: "Employee & HR Dashboard — Attendance, Leave Balances & Upcoming Schedule" }
      ]
    },
    github: "https://github.com/mohamedfakhar/hrm-system",
    liveDemo: ""
  },
  {
    id: "frio-restaurant",
    name: "Frío Restaurant & Cafe",
    fullName: "Frío Restaurant & Cafe — Full-Stack Restaurant & Online Ordering Platform",
    badge: "Production Platform · Freelance Client Work",
    timeline: "2026",
    role: "Full Stack Developer (Freelance)",
    category: "RESTAURANT & ONLINE ORDERING · FULL STACK",
    filterCategories: ["featured", "fullstack", "ecommerce"],
    status: "Production-Ready",
    isFeatured: true,
    shortDesc: "A production-ready full-stack restaurant and online ordering platform built for Frío Restaurant & Cafe using Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS v4, Prisma, and Zod. Features dynamic menu browsing, persistent cart, delivery/takeaway checkout, live order tracking, and automated WhatsApp order dispatch.",
    problem: "Independent dining venues often struggle with high commission fees and disjointed ordering workflows on third-party marketplace apps. Frío required a customized, direct-to-consumer digital ordering presence with instant WhatsApp order transmission and zero recurring platform take-rates.",
    highlights: [
      "Built a production-ready full-stack restaurant and online ordering platform using Next.js, React, TypeScript, Tailwind CSS, Prisma, and Zod",
      "Implemented menu browsing, persistent cart, checkout, delivery/takeaway flows, order tracking, WhatsApp order dispatch, offers, and content management",
      "Applied server-side validation with Zod, Prisma data access, SSR-safe client state persistence, and structured SEO metadata (JSON-LD MenuItem schema)",
      "Engineered dynamic menu explorer across 8 categories with live client search, dietary badges (Chef's Choice, Popular, Vegetarian, Spicy), and SSG pre-rendered dish pages",
      "Built live order tracking with unique FRIO-XXXXXX reference codes and pre-formatted, URL-encoded WhatsApp order dispatch"
    ],
    features: {
      "Dynamic Menu & SSG Dish Pages": [
        "8 categorized sections (Appetizers, Main Courses, Pizza, Burgers, Pasta, Sandwiches, Desserts, Drinks)",
        "Pre-rendered static pages (SSG) for all 23 dishes with calories, prep times, ingredients, and portion counters",
        "Structured JSON-LD MenuItem metadata enhancing Google Rich Snippets search discovery",
        "Real-time client search and category filtering with instant visual feedback"
      ],
      "Persistent Shopping Bag": [
        "State persistence across page reloads via LocalStorage with strict SSR hydration safety",
        "Floating toast notifications on dish additions and modifications",
        "Dynamic subtotal, delivery fee calculation, and order grand total breakdown"
      ],
      "Delivery & Takeaway Checkout": [
        "Dual fulfillment selection (Delivery vs. Takeaway)",
        "Egyptian mobile phone format validation (01[0125]xxxxxxxx) via Zod schemas",
        "Support for Cash on Delivery, POS Card, and InstaPay payment methods",
        "Server-side validation guarding against duplicate order submissions"
      ],
      "Live Tracking & WhatsApp Dispatch": [
        "Unique order tracking reference codes (FRIO-XXXXXX)",
        "Automated URL-encoded WhatsApp message generation with full itemized breakdown, customer address, and payment method",
        "Immediate kitchen team notification upon customer checkout"
      ],
      "Dining Offers, Gallery & Culinary Journal": [
        "Curated dining combos with discount percentage badges and direct cart integration",
        "Accessible masonry photo gallery with keyboard-navigable modal lightbox",
        "Culinary journal and blog rendered with semantic markdown and BlogPosting JSON-LD schemas",
        "Contact page with working hours, Google Maps embed, hotline, and local FAQ accordion"
      ]
    },
    techStack: {
      "Framework": ["Next.js 16 (App Router)", "React 19", "TypeScript 5"],
      "Styling": ["Tailwind CSS v4", "CSS Design Tokens", "Lucide Icons"],
      "Database & ORM": ["Prisma ORM", "PostgreSQL / SQLite Compatible", "Data Seeders"],
      "Validation & State": ["Zod Validation", "React Context", "SSR Hydration Safety"],
      "SEO & Integrations": ["JSON-LD Schema", "WhatsApp API Dispatch", "Dynamic Sitemap & Robots"]
    },
    challenges: [
      {
        title: "SSR-Safe Client State Persistence",
        desc: "Engineered hydration-safe LocalStorage cart synchronization within Next.js App Router to prevent hydration mismatches while ensuring customer shopping bags persist across browser sessions."
      },
      {
        title: "Strict Egyptian Mobile & Order Validation",
        desc: "Designed unified client and server Zod validation schemas enforcing strict Egyptian mobile numbering rules (01[0125]xxxxxxxx) and delivery constraints before order entry."
      },
      {
        title: "URL-Encoded WhatsApp Dispatch Protocol",
        desc: "Formatted robust URL-encoded order manifests that transmit order items, toppings, customer address, and grand total directly into the restaurant's WhatsApp business dispatch channel."
      }
    ],
    workflow: [
      "Browse Categorized Menu",
      "Add to Persistent Bag",
      "Select Delivery / Takeaway",
      "Server-Side Zod Validation",
      "Generate FRIO-XXXXXX Tracking",
      "One-Tap WhatsApp Dispatch"
    ],
    images: {
      preview: "assets/images/frio-restaurant-1.jpg",
      previewAlt: "Frío Restaurant & Cafe — Modern Menu Showcase and Dining Presentation",
      gallery: [
        { src: "assets/images/frio-restaurant-2.jpg", caption: "Chef's Signature Mixed Grill Platter & Entrees" }
      ]
    },
    github: "https://github.com/mohamedfakhar/frio-restaurant",
    liveDemo: ""
  },
  {
    id: "shopery",
    name: "Shopery",
    fullName: "Shopery — Full-Stack E-Commerce Web Application",
    badge: "Full-Stack E-Commerce · 36 Integration Tests Passed",
    timeline: "Jan 2026 – Mar 2026",
    role: "Full Stack Developer (Solo Project)",
    category: "E-COMMERCE · FULL STACK",
    filterCategories: ["fullstack", "ecommerce"],
    status: "Completed",
    isFeatured: false,
    shortDesc: "A full-stack e-commerce platform developed using React.js, Node.js, Express.js, and MongoDB. Implemented JWT authentication, RBAC, REST APIs, product/category CRUD, cart, wishlist, checkout, coupons, order management, and server-side price validation.",
    problem: "Modern online commerce requires reliable protection against client-side cart price manipulation, smooth synchronization between database inventory and customer carts, and administrative order oversight.",
    highlights: [
      "Developed a full-stack e-commerce platform using React.js, Node.js, Express.js, and MongoDB, implementing JWT authentication, RBAC, REST APIs, product/category CRUD, cart, wishlist, checkout, coupons, and order management",
      "Built an admin dashboard and enforced server-side price validation to protect checkout and order integrity",
      "36 automated integration tests passed validating auth, product search/filters, order creation, admin route guards, and customer data isolation",
      "Dynamic catalog filtering with text search ($text), category filtering, price range indexing, and sorting",
      "Persistent shopping cart and user wishlist maintained across browser sessions"
    ],
    features: {
      "Storefront & Product Catalog": [
        "Categorized product catalog (Produce, Meat, Fruit, Groceries) with discount badges and hot-deal highlights",
        "Server-side catalog search, price range filtering, category selection, and sorting pipelines",
        "Persistent shopping cart with dynamic calculations and checkout routing",
        "Customer wishlist allowing saved products to be converted directly into active cart items"
      ],
      "Server-Side Price Protection": [
        "Client cart prices are never trusted during checkout",
        "Server-side order processing recalculates every item price directly from MongoDB database records",
        "Prevents tampering with discount percentages, item unit prices, or total amounts"
      ],
      "User Accounts & Admin Dashboard": [
        "JWT-based user registration, login, profile updates, and secure password changes",
        "Order history management showing item breakdowns, timestamps, and fulfillment status",
        "Admin control panel managing product listings, categories, user accounts, and incoming orders",
        "Administrative analytics reporting order statistics and revenue metrics"
      ]
    },
    techStack: {
      "Frontend": ["React.js", "Vite", "Bootstrap / Tailwind CSS", "Axios", "JavaScript (ES6+)"],
      "Backend": ["Node.js", "Express.js", "RESTful APIs", "Multer"],
      "Database": ["MongoDB", "Mongoose"],
      "Security & Testing": ["JWT Auth", "RBAC", "Server-Side Price Recalculation", "36 Automated Integration Tests"]
    },
    challenges: [
      {
        title: "Server-Side Price Recalculation",
        desc: "Designed order creation endpoints that extract only product IDs and quantities from client requests, recalculating unit prices and subtotals directly from the database to eliminate price spoofing."
      },
      {
        title: "Catalog Filtering & Search Performance",
        desc: "Designed API query pipelines to perform fast text searches, price-range indexing, and category filtering concurrently over the product database."
      }
    ],
    images: {
      preview: "assets/images/shopery-1.png",
      previewAlt: "Shopery Homepage & Newsletter Modal",
      gallery: [
        { src: "assets/images/shopery-2.png", caption: "Product Listing, Hot Deals & Discount Offers" }
      ]
    },
    github: "https://github.com/mohamedfakhar/shopery",
    liveDemo: ""
  },
  {
    id: "topico",
    name: "Topico",
    fullName: "Topico — E-Commerce & Community Platform",
    badge: "Frontend E-Commerce · Live on Vercel",
    timeline: "Jul 2024 – Dec 2024",
    role: "Frontend Developer (Solo Project)",
    category: "E-COMMERCE · FRONTEND",
    filterCategories: ["ecommerce"],
    status: "Completed",
    isFeatured: false,
    shortDesc: "A modern, fully responsive e-commerce web application with a focus on clean UI and smooth interactions. Built with pure Vanilla JavaScript, HTML5, and CSS3, consuming backend REST APIs and delivering dynamic topic browsing, product filtering, and slide-cart flows.",
    problem: "Delivering a rich, multi-page e-commerce experience without heavy front-end frameworks requires disciplined native DOM manipulation, clean CSS architecture, and asynchronous state handling.",
    highlights: [
      "Built the complete responsive frontend in vanilla JavaScript, consuming backend REST APIs and delivering dynamic topic browsing, post interaction, and user engagement features",
      "Dynamic shopping side-cart where users can add/remove items with real-time price and quantity updates",
      "Advanced filtering on 'All Products' page allowing users to filter by category, brand, and color",
      "Responsive hero sliders and touch product carousels engineered using Swiper.js",
      "Deployed and verified live on Vercel at topoco.vercel.app with high performance and accessibility"
    ],
    features: {
      "Frontend Architecture": [
        "Semantic HTML5 markup ensuring high SEO performance and accessibility",
        "Responsive styling using CSS Flexbox and Grid, optimized from small mobiles to wide desktop viewports",
        "Organized modular folder structure separating CSS layouts and JavaScript DOM manipulation"
      ],
      "Interactive Components": [
        "Slide-out shopping drawer with live quantity adjustments and item deletion",
        "Client-side product filtering and search bar handling",
        "Touch-enabled hero slider, carousels, and modal overlays using Swiper.js",
        "Multi-page experience: Home, All Products, Item Details, Login, Signup, and Checkout simulation"
      ]
    },
    techStack: {
      "Core Frontend": ["HTML5", "CSS3", "Vanilla JavaScript (ES6+)"],
      "Libraries": ["Swiper.js", "FontAwesome Icons"],
      "Integration": ["REST APIs", "Fetch API", "LocalStorage"]
    },
    challenges: [
      {
        title: "Pure DOM State Synchronization",
        desc: "Engineered custom event-driven cart architecture in pure JavaScript to update cart badges, item rows, and financial totals across separate pages without a framework."
      },
      {
        title: "Mobile Touch Optimization",
        desc: "Integrated Swiper.js touch sliders and responsive side drawers with smooth 60fps transitions and zero layout shifting across mobile devices."
      }
    ],
    images: {
      preview: "assets/images/topico-1.png",
      previewAlt: "Topico Storefront Homepage and Category Slider",
      gallery: [
        { src: "assets/images/topico-2.png", caption: "Product Grid & Interactive Sliding Cart Drawer" }
      ]
    },
    github: "https://github.com/mohamedfakhar/Ecommerce-Website",
    liveDemo: "https://topoco.vercel.app/"
  },
  {
    id: "diabetes-app",
    name: "Diabetes Management App",
    fullName: "Diabetes Management App (Graduation Project)",
    badge: "B.Sc. Graduation Project (Zagazig University)",
    timeline: "Jan 2024 – May 2024",
    role: "Backend Lead & Full Stack Developer",
    category: "HEALTHCARE · FULL STACK & ML",
    filterCategories: ["enterprise"],
    status: "Completed",
    isFeatured: false,
    shortDesc: "A healthcare web and mobile application for diabetes patients to track health metrics and for doctors to monitor patient stability with machine learning trend predictions. Led backend development with Node.js and Express.js, building RESTful APIs for patient data and monitoring.",
    problem: "Patients with diabetes need continuous tracking of glucose, meals, and medication. Without centralized monitoring and predictive trend analysis, clinical interventions are often delayed until dangerous glycemic fluctuations occur.",
    highlights: [
      "Led backend development with Node.js and Express.js, building RESTful APIs for patient data and monitoring",
      "Implemented a machine learning module supporting patient health predictions and trend analysis",
      "Patient dashboard for daily glucose level logging (mg/dL), medication tracking, and meal context",
      "Doctor monitoring portal with patient risk classifications (Active, Stable, Critical)",
      "Relational database schema in MySQL optimized for time-series patient readings"
    ],
    features: {
      "Patient Experience": [
        "Quick-action interface to add glucose readings (mg/dL) with timestamp and meal context",
        "Weekly and monthly visual glucose trend charts with stability indicators",
        "Medication reminders and meal logging module"
      ],
      "Doctor Monitoring & Analytics": [
        "Patient overview panel displaying recent readings, patient IDs, and clinical risk classifications",
        "Machine learning prediction module identifying patterns of hypoglycemia or hyperglycemia",
        "Secure relational storage of medical records in MySQL with optimized queries"
      ]
    },
    techStack: {
      "Backend": ["Node.js", "Express.js", "RESTful APIs"],
      "Database": ["MySQL (Relational Schema & Indexing)"],
      "Analytics & ML": ["Machine Learning Models", "Trend Prediction Algorithms"],
      "Frontend & Mobile": ["Mobile Client UI", "Chart.js / Data Visualization"]
    },
    challenges: [
      {
        title: "Time-Series Health Data Modeling",
        desc: "Designed efficient MySQL relational schemas to index and retrieve patient glucose readings over 7, 30, and 90-day time series with sub-millisecond query performance."
      },
      {
        title: "Predictive Analytics Integration",
        desc: "Integrated ML forecasting models with the Node.js API to evaluate glucose stability and alert doctors when readings fall outside safe clinical boundaries."
      }
    ],
    images: {
      preview: "assets/images/diabetes-app.png",
      previewAlt: "Diabetes Management App — Patient Dashboard, Add Reading, and Doctor Monitoring",
      gallery: [
        { src: "assets/images/diabetes-app.png", caption: "Triple Screen Mockup: Patient Home, Quick Reading Form, and Doctor Monitoring" }
      ]
    },
    github: "https://github.com/mohamedfakhar/Diabetes-App",
    liveDemo: ""
  },
  {
    id: "al-quds-pharmacy",
    name: "Al-Quds Pharmacy",
    fullName: "Al-Quds Pharmacy — Full-Stack Pharmacy Website",
    badge: "Pharmacy Web Platform · Freelance Client Work",
    timeline: "2025 – 2026",
    role: "Full Stack Developer (Freelance)",
    category: "HEALTHCARE & COMMERCE · FULL STACK",
    filterCategories: ["fullstack", "ecommerce", "enterprise"],
    status: "Completed",
    isFeatured: false,
    shortDesc: "A responsive pharmacy website and healthcare storefront focused on clean UI, product and service presentation, digital prescription uploads, and user-friendly navigation. Built with Node.js, Express, MongoDB, and modern JavaScript.",
    problem: "Community pharmacies require a clear digital presence allowing patients to browse medications and wellness products, check availability, and upload prescriptions digitally without needing to visit the store in person.",
    highlights: [
      "Developed a responsive pharmacy website focused on clean UI, product/service presentation, and user-friendly navigation",
      "Designed digital prescription upload workflow enabling customers to securely submit prescriptions for review",
      "Built structured catalog with server-side text search ($text), category, brand, and prescription requirement filters",
      "Designed 12 Mongoose data models covering Users, Products, Categories, Orders, Prescriptions, Branches, and Reviews",
      "Responsive multi-page storefront (Home, Shop, Product Details, Prescription Upload, Cart, Checkout, FAQ)"
    ],
    features: {
      "Pharmacy Catalog & Search": [
        "Searchable medicine and health product catalog with category, brand, price, and prescription-only filters",
        "Individual product pages displaying dosage guidelines, active ingredients, and stock status",
        "Interactive shopping cart and wishlist management"
      ],
      "Digital Prescription Upload": [
        "Patient prescription upload portal allowing image/document submission with contact info and delivery notes",
        "Pharmacist review workflow to confirm prescription validity before dispensing"
      ],
      "Store Presentation & Community Support": [
        "Branch location details, operating hours, emergency contact hotline, and customer FAQ accordion",
        "Responsive design ensuring accessibility for mobile users seeking quick healthcare information"
      ]
    },
    techStack: {
      "Backend": ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      "Frontend": ["HTML5", "CSS3", "JavaScript (ES6+)", "SVG Vector Design"],
      "Security": ["JWT Auth", "Role Guards", "Rate Limiting", "Helmet", "Mongo Sanitize"]
    },
    challenges: [
      {
        title: "Accessible Healthcare UI",
        desc: "Engineered clean, accessible UI components with high-contrast text and intuitive navigation for patients across all age groups."
      },
      {
        title: "Structured Medical Data Modeling",
        desc: "Designed 12 Mongoose schemas separating prescription requirements, product inventories, and customer orders."
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
// 2. DOM Rendering: Project Cards & Dynamic Filtering
// ==========================================================================
let currentFilter = "all";

function createFeaturedCardHTML(proj) {
  let primaryTags = [];
  if (proj.techStack["Frontend"]) primaryTags.push(...proj.techStack["Frontend"].slice(0, 3));
  if (proj.techStack["Framework"]) primaryTags.push(...proj.techStack["Framework"].slice(0, 2));
  if (proj.techStack["Backend"]) primaryTags.push(...proj.techStack["Backend"].slice(0, 2));
  if (proj.techStack["Payments & Real-Time"]) primaryTags.push(...proj.techStack["Payments & Real-Time"].slice(0, 2));

  const techTagsHTML = primaryTags
    .map(t => `<span class="stack-tag">${t}</span>`)
    .join("");

  const highlightsHTML = proj.highlights.slice(0, 4)
    .map(h => `<li>${h}</li>`)
    .join("");

  return `
    <div class="project-card featured" data-id="${proj.id}">
      <div class="project-img-wrapper" onclick="openModal('${proj.id}')" style="cursor: pointer;">
        <span class="project-card-status">${proj.status}</span>
        <span class="project-badge-featured">★ Featured</span>
        <img class="project-img ${proj.images.imgClass || ''}" src="${proj.images.preview}" alt="${proj.images.previewAlt}" loading="lazy" />
      </div>
      <div class="project-card-content">
        <div class="project-card-meta">
          <span class="project-card-category">${proj.category}</span>
          <span class="project-card-date">${proj.timeline}</span>
        </div>
        <h3 class="project-card-title">${proj.name}</h3>
        <p class="project-card-desc">${proj.shortDesc}</p>
        <ul class="project-card-highlights">
          ${highlightsHTML}
        </ul>
        <div class="project-card-role">
          <strong>Role &amp; Context:</strong> ${proj.role} &middot; <em>${proj.badge}</em>
        </div>
        <div class="project-card-stack">
          ${techTagsHTML}
        </div>
        <div class="project-card-links">
          <button class="project-card-btn primary" onclick="openModal('${proj.id}')">
            <span>View Full Case Study</span> &rarr;
          </button>
          ${proj.liveDemo ? `
            <a href="${proj.liveDemo}" target="_blank" rel="noopener noreferrer" class="project-card-btn secondary" aria-label="Visit ${proj.name} Live Demo">
              <span>🌐 Live Demo</span>
            </a>
          ` : ""}
          ${proj.github ? `
            <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-card-btn secondary" aria-label="View ${proj.name} GitHub Repository">
              <span>🐙 GitHub</span>
            </a>
          ` : ""}
        </div>
      </div>
    </div>
  `;
}

function createStandardCardHTML(proj) {
  let primaryStack = [];
  if (proj.techStack["Frontend"]) primaryStack.push(...proj.techStack["Frontend"].slice(0, 2));
  if (proj.techStack["Core Frontend"]) primaryStack.push(...proj.techStack["Core Frontend"].slice(0, 2));
  if (proj.techStack["Framework"]) primaryStack.push(...proj.techStack["Framework"].slice(0, 2));
  if (proj.techStack["Backend"]) primaryStack.push(...proj.techStack["Backend"].slice(0, 2));
  if (proj.techStack["Database"]) primaryStack.push(...proj.techStack["Database"].slice(0, 1));

  const techTagsHTML = primaryStack
    .map(t => `<span class="stack-tag">${t}</span>`)
    .join("");

  const highlightsHTML = proj.highlights.slice(0, 3)
    .map(h => `<li>${h}</li>`)
    .join("");

  return `
    <div class="project-card" data-id="${proj.id}">
      <div class="project-img-wrapper" onclick="openModal('${proj.id}')" style="cursor: pointer;">
        <span class="project-card-status">${proj.status}</span>
        <img class="project-img ${proj.images.imgClass || ''}" src="${proj.images.preview}" alt="${proj.images.previewAlt}" loading="lazy" />
      </div>
      <div class="project-card-content">
        <div class="project-card-meta">
          <span class="project-card-category">${proj.category}</span>
          <span class="project-card-date">${proj.timeline}</span>
        </div>
        <h3 class="project-card-title">${proj.name}</h3>
        <p class="project-card-desc">${proj.shortDesc}</p>
        <ul class="project-card-highlights">
          ${highlightsHTML}
        </ul>
        <div class="project-card-role">
          <strong>Role:</strong> ${proj.role}
        </div>
        <div class="project-card-stack">
          ${techTagsHTML}
        </div>
        <div class="project-card-links">
          <button class="project-card-btn primary" onclick="openModal('${proj.id}')">
            <span>Case Study</span> &rarr;
          </button>
          ${proj.liveDemo ? `
            <a href="${proj.liveDemo}" target="_blank" rel="noopener noreferrer" class="project-card-btn secondary" aria-label="Visit ${proj.name} Live Demo">
              <span>🌐 Live</span>
            </a>
          ` : ""}
          ${proj.github ? `
            <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-card-btn secondary" aria-label="View ${proj.name} GitHub Repository">
              <span>🐙 Code</span>
            </a>
          ` : ""}
        </div>
      </div>
    </div>
  `;
}

function renderProjects(filter = "all") {
  const featuredContainer = document.getElementById("featured-project-container");
  const standardGrid = document.getElementById("projects-grid");
  const standardHeader = document.getElementById("standard-projects-header");
  const featuredHeader = document.querySelector(".featured-section-header");

  if (!featuredContainer || !standardGrid) return;

  if (filter === "all") {
    // Show standard header
    if (standardHeader) standardHeader.style.display = "block";
    if (featuredHeader) featuredHeader.style.display = "block";

    // 1. Featured Top 3 Projects (Kemet Gate, HRM System, Frío Restaurant)
    const featuredProjects = projectsData.filter(p => p.isFeatured);
    featuredContainer.innerHTML = featuredProjects.map(createFeaturedCardHTML).join("");

    // 2. Standard Projects (Shopery, Topico, Diabetes App, Al-Quds Pharmacy)
    const standardProjects = projectsData.filter(p => !p.isFeatured);
    standardGrid.innerHTML = standardProjects.map(createStandardCardHTML).join("");
  } else if (filter === "featured") {
    if (standardHeader) standardHeader.style.display = "none";
    if (featuredHeader) featuredHeader.style.display = "block";
    standardGrid.innerHTML = "";

    const featuredProjects = projectsData.filter(p => p.isFeatured);
    featuredContainer.innerHTML = featuredProjects.map(createFeaturedCardHTML).join("");
  } else {
    // Category Filter: fullstack, ecommerce, enterprise
    const matching = projectsData.filter(p => p.filterCategories && p.filterCategories.includes(filter));
    
    if (featuredHeader) featuredHeader.style.display = "none";
    featuredContainer.innerHTML = "";
    if (standardHeader) {
      standardHeader.style.display = "block";
      standardHeader.querySelector(".section-subheading").textContent = `Filtered Projects (${matching.length})`;
      standardHeader.querySelector(".section-subtext").textContent = `Showing verified projects matching the selected category.`;
    }

    standardGrid.innerHTML = matching.map(p => {
      return p.isFeatured ? createFeaturedCardHTML(p) : createStandardCardHTML(p);
    }).join("");
  }
}

// Setup Project Filter Tabs
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter") || "all";
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

  // Set titles
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
            <div class="modal-meta-label">My Role &amp; Contributions</div>
            <div class="modal-meta-val">${proj.role} &middot; <em>${proj.badge}</em></div>
          </div>
          
          <div class="modal-meta-item" style="border-top: 1px solid var(--border); padding-top: 16px;">
            <div class="modal-meta-label">Technology Architecture</div>
            ${techStackHTML}
          </div>

          <div class="modal-meta-item" style="border-top: 1px solid var(--border); padding-top: 16px; display: flex; flex-direction: column; gap: 8px;">
            ${proj.github ? `
              <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-card-btn primary" style="width: 100%;">
                <span>🐙 View GitHub Repository</span>
              </a>
            ` : ""}
            ${proj.liveDemo ? `
              <a href="${proj.liveDemo}" target="_blank" rel="noopener noreferrer" class="project-card-btn secondary" style="width: 100%;">
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

  // Show modal
  modalDialog.classList.add("open");
  modalDialog.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  // Focus container for keyboard accessibility
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
// 4. Mobile Navigation Drawer Handling (Accessible & Trap-Free)
// ==========================================================================
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileOverlay = document.getElementById("mobile-overlay");
const mobileLinks = document.querySelectorAll(".mobile-link");

function toggleMobileMenu() {
  if (!hamburgerBtn || !mobileMenu) return;
  const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
  hamburgerBtn.setAttribute("aria-expanded", !isExpanded);
  hamburgerBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  mobileMenu.setAttribute("aria-hidden", isExpanded);

  if (mobileOverlay) {
    mobileOverlay.classList.toggle("active");
  }

  // Prevent background scroll when mobile drawer is open
  if (!isExpanded) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", toggleMobileMenu);
}

if (mobileOverlay) {
  mobileOverlay.addEventListener("click", () => {
    if (mobileMenu && mobileMenu.classList.contains("active")) {
      toggleMobileMenu();
    }
  });
}

// Close drawer on link click
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (mobileMenu && mobileMenu.classList.contains("active")) {
      toggleMobileMenu();
    }
  });
});

// Close drawer on Escape
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu && mobileMenu.classList.contains("active")) {
    toggleMobileMenu();
    if (hamburgerBtn) hamburgerBtn.focus();
  }
});

// ==========================================================================
// 5. Initialization on DOMContentLoaded
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Render projects & initialize filters
  renderProjects("all");
  initProjectFilters();

  // Dynamic Year in Footer
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Navbar subtle scroll shadow
  const nav = document.querySelector("nav");
  if (nav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }, { passive: true });
  }
});
