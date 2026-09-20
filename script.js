/**
 * MOHAMED ELSHAHAT IBRAHIM — FULL STACK DEVELOPER PORTFOLIO
 * Core Logic, Dynamic Project Data & Accessible Interactions
 */

// ==========================================================================
// 1. Projects Data Structure (5 Verified Projects Aligned with New CV)
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
    status: "Completed",
    isFeatured: true,
    shortDesc: "A full-stack digital platform for exploring Egyptian tourist destinations, tourism trips, and services. Integrated tour discovery with secure booking, Stripe payments, and tamper-proof digital ticketing.",
    problem: "Before Kemet Gate, discovering authentic Egyptian heritage sites, connecting with verified travel companies, and booking tours was fragmented without integrated digital ticketing or real-time booking confirmation.",
    highlights: [
      "Worked across frontend (React.js, Vite, Tailwind CSS, Axios) and backend (Node.js, Express.js, MongoDB, Mongoose)",
      "Built JWT authentication with refresh tokens and role-based authorization for User, Company, Admin, and Regional Admin roles",
      "Developed complete booking system covering tour selection, booking dates, guest counts, and seat/availability management",
      "Integrated Stripe payments (Payment Intents, Elements, webhooks) with server-side signature verification",
      "Built a secure digital ticketing system with HMAC-SHA256 signed, tamper-detecting QR codes",
      "Implemented real-time notifications with Socket.IO and persistent MongoDB storage across system roles",
      "Engineered company/admin approval workflow for reviewing and publishing tourism trips",
      "Interactive destination audio guide content & panoramic virtual tour exploration"
    ],
    features: {
      "Tourist & Destination Discovery": [
        "Interactive landmark discovery by region and historical category (Cairo, Giza, Aswan, Luxor, Siwa, Matrouh)",
        "Detailed tour packages with comprehensive itineraries, meeting points, included services, and live group pricing",
        "High-definition destination views and historical audio guide content integration",
        "User profile, favorites management, and verified tourist reviews"
      ],
      "Booking & Payment Architecture": [
        "Multi-step tour booking with date picker, guest selection, and live pricing breakdown",
        "Stripe Payment Intents and PCI-compliant Stripe Elements client-side checkout",
        "Idempotent server-side webhook processing with cryptographic HMAC event signature verification",
        "Atomic database seat updates preventing overbooking and race conditions"
      ],
      "Tamper-Proof Digital Ticketing": [
        "Automated digital ticket generation with server-issued unique ticket codes",
        "QR codes embedded with HMAC-SHA256 cryptographic signatures to prevent counterfeiting",
        "Place manager scanner verification mode for offline/online tamper detection"
      ],
      "Admin & Company Approval Lifecycle": [
        "Company tour submission pipeline (Draft → Pending Admin Review → Published)",
        "Centralized administrative dashboard monitoring bookings, revenue analytics, and company verifications",
        "Regional Admin role for location-specific approvals and landmark content moderation",
        "Socket.IO real-time event notifications for new bookings and review approvals"
      ]
    },
    techStack: {
      "Frontend": ["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "Axios"],
      "Backend": ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      "Security & Auth": ["JWT", "Refresh Tokens", "RBAC", "HMAC-SHA256", "Joi Validation"],
      "Payments & Real-time": ["Stripe API", "Stripe Elements", "Socket.IO"],
      "DevOps & Utilities": ["Cron Jobs", "QR Code Generation", "Multer"]
    },
    challenges: [
      {
        title: "Tamper-Proof QR Ticketing",
        desc: "Engineered secure QR code tickets containing signed HMAC-SHA256 payloads generated with a server-side secret key, allowing scanners to instantly detect forged or modified tickets."
      },
      {
        title: "Multi-Role RBAC Middleware",
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
      "Scanner Check-In"
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
    fullName: "HR & Payroll Management System",
    badge: "Enterprise Web App",
    timeline: "Jan 2026 – Present",
    role: "Full Stack Developer",
    category: "ENTERPRISE BUSINESS PLATFORM · FULL STACK",
    status: "Active Development",
    isFeatured: false,
    shortDesc: "A full-stack Human Resource and Payroll management system for employee lifecycle tracking, attendance logging, leave workflows, payroll calculations, and role-based administration.",
    problem: "Manual spreadsheets and disconnected HR tools create administrative bottlenecks, attendance errors, and payroll calculation discrepancies for growing teams.",
    highlights: [
      "Developed RESTful APIs with Node.js and Express.js, with JWT authentication and role-based access control (RBAC)",
      "Implemented core business logic including payroll calculations and multi-level approval workflows",
      "Built a responsive React.js frontend with dashboards, data charts, and real-time notifications",
      "Attendance check-in and check-out tracking with compound database constraints preventing duplicate entries",
      "Leave request lifecycle with approval routing, automated balance deduction, and audit history"
    ],
    features: {
      "Authentication & Access Control": [
        "JWT-based session authentication with bcrypt password hashing and token validation",
        "Role-Based Access Control enforcing specific Employee, HR, and Admin privileges",
        "Client-side protected route guards matching server-side API authorization"
      ],
      "Employee & Attendance Management": [
        "Employee records with auto-generated unique employee codes and profile management",
        "Daily attendance Check-In and Check-Out timestamp logging",
        "Database constraints to validate and prevent duplicate attendance records for the same employee and date"
      ],
      "Payroll & Workflows": [
        "Leave request lifecycle workflow (Pending → Approved / Rejected) with notifications",
        "Employee portal for daily dashboard check, leave applications, and view statements",
        "HR/Admin dashboard for tracking overall attendance, adjusting salaries, and workflow reviews",
        "Centralized payroll calculation engine and multi-level salary approval workflows"
      ]
    },
    techStack: {
      "Frontend": ["React.js", "Bootstrap", "Axios", "JavaScript (ES6+)"],
      "Backend": ["Node.js", "Express.js", "Socket.IO"],
      "Database": ["MongoDB", "Mongoose"],
      "Security & Utilities": ["JWT", "RBAC", "bcrypt", "REST APIs", "Multer"]
    },
    challenges: [
      {
        title: "Attendance Data Integrity",
        desc: "Designed and implemented compound database constraints and server validation layers to prevent employees from registering duplicate attendance logs for a single calendar date."
      },
      {
        title: "Dynamic Payroll Calculations",
        desc: "Wrote the business logic for calculating net pay, salary deductions, and allowances dynamically, ensuring precision and auditing compatibility."
      }
    ],
    images: {
      preview: "assets/images/hrm-portal-1.png",
      previewAlt: "HRM Portal — Modern Landing Page and Overview",
      imgClass: "portrait-preview",
      gallery: [
        { src: "assets/images/hrm-portal-2.png", caption: "Employee Dashboard — Attendance, Leave Balances & Upcoming Schedule" }
      ]
    },
    github: "https://github.com/mohamedfakhar/hrm-system",
    liveDemo: ""
  },
  {
    id: "shopery",
    name: "Shopery",
    fullName: "Shopery — Full-Stack E-Commerce Platform",
    badge: "E-Commerce Platform",
    timeline: "Jan 2026 – Mar 2026",
    role: "Full Stack Developer",
    category: "E-COMMERCE · FULL STACK",
    status: "Completed",
    isFeatured: false,
    shortDesc: "A scalable full-stack e-commerce platform designed to simulate a real-world shopping experience with product catalog discovery, cart management, checkout, and admin oversight.",
    problem: "Online stores require reliable synchronization between product inventory, user cart state, multi-parameter filtering, and secure order fulfillment.",
    highlights: [
      "Built dynamic user interfaces with React.js, integrated with RESTful APIs via Node.js and Express.js",
      "Implemented authentication, product catalog, cart system, and order management",
      "Search & filtering, reviews/ratings, and wishlist features",
      "Designed an admin dashboard for managing products, users, and orders",
      "Persistent cart state maintained across page refreshes and browser sessions"
    ],
    features: {
      "Shopping & Discovery": [
        "Categorized product catalog (Produce, Meat, Fruit, Groceries) with discount badges",
        "Product search, sorting, and multi-parameter filtering (category, price, rating)",
        "Persistent shopping cart with dynamic calculations and checkout routing",
        "User wishlist for saving products and subsequent cart conversion"
      ],
      "Management & Administration": [
        "JWT-based user registration, login, and profile tracking",
        "Order management interface showing history, billing, and fulfillment tracking",
        "Reviews and rating submission system with duplicate review prevention constraints",
        "Admin control panel to manage product listings, user accounts, and incoming orders"
      ]
    },
    techStack: {
      "Frontend": ["React.js", "Bootstrap", "JavaScript (ES6+)", "Axios"],
      "Backend": ["Node.js", "Express.js"],
      "Database": ["MongoDB", "Mongoose"],
      "Security & Auth": ["JWT Authentication", "REST APIs", "bcrypt"]
    },
    challenges: [
      {
        title: "Catalog Filtering & Search Performance",
        desc: "Designed API query pipelines to perform fast text searches, price-range indexing, and category filtering concurrently over the product database."
      },
      {
        title: "State Management in Shopping Cart",
        desc: "Synchronized cart states smoothly between local memory and the backend database, ensuring cart contents persist across user logins."
      }
    ],
    images: {
      preview: "assets/images/shopery-1.png",
      previewAlt: "Shopery Homepage & Newsletter Modal",
      gallery: [
        { src: "assets/images/shopery-2.png", caption: "Product Listing, Hot Deals & Discount Offers" }
      ]
    },
    github: "https://github.com/mohamedfakhar/shopery-api",
    liveDemo: ""
  },
  {
    id: "topico",
    name: "Topico",
    fullName: "Topico — E-Commerce & Community Platform",
    badge: "Vanilla JavaScript Project",
    timeline: "Jul 2024 – Dec 2024",
    role: "Frontend Developer",
    category: "E-COMMERCE · FRONTEND",
    status: "Completed",
    isFeatured: false,
    shortDesc: "A modern, fully responsive e-commerce web application with clean UI and smooth user interactions, consuming backend REST APIs with pure Vanilla JavaScript.",
    problem: "Delivering a rich, multi-page e-commerce experience without heavy modern frameworks requires disciplined native DOM manipulation, clean CSS architecture, and asynchronous state handling.",
    highlights: [
      "Built the complete frontend using vanilla JavaScript, focused on responsive design and UI/UX quality, consuming backend REST APIs",
      "Developed dynamic topic browsing, post interaction, and user engagement features on the client side",
      "Dynamic shopping side-cart where users can add/remove items with real-time price updates",
      "Advanced filtering on the 'All Products' page by category, brand, and color",
      "Responsive hero sliders and touch-responsive product carousels using Swiper.js"
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
        "Touch-enabled hero slider, carousels, and modal overlays"
      ]
    },
    techStack: {
      "Core Frontend": ["HTML5", "CSS3", "Vanilla JavaScript (ES6+)"],
      "Libraries": ["Swiper.js", "FontAwesome"],
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
    role: "Full Stack & Backend Developer",
    category: "HEALTHCARE · FULL STACK & ML",
    status: "Completed",
    isFeatured: false,
    shortDesc: "A healthcare web and mobile application for diabetes patients to track health metrics and for doctors to monitor patient stability with machine learning trend predictions.",
    problem: "Patients with diabetes need continuous tracking of glucose, meals, and medication. Without centralized monitoring and predictive trend analysis, medical interventions are often delayed.",
    highlights: [
      "Led backend development using Node.js and Express.js; built RESTful APIs for patient data and monitoring",
      "Implemented a machine learning module for patient health predictions and trend analysis",
      "Patient dashboard for daily glucose level logging, medication tracking, and meal context",
      "Doctor monitoring portal with patient status indicators (Active, Stable, Critical)",
      "Relational database schema in MySQL for medical history and readings"
    ],
    features: {
      "Patient Experience": [
        "Quick-action interface to add glucose readings (mg/dL) with timestamp and meal context",
        "Weekly and monthly visual glucose trend charts with stability indicators",
        "Medication reminders and meal logging module"
      ],
      "Doctor Monitoring & Analytics": [
        "Patient overview panel displaying recent readings, patient IDs, and risk classifications",
        "Machine learning prediction module identifying patterns of hypoglycemia or hyperglycemia",
        "Secure relational storage of medical records in MySQL with optimized queries"
      ]
    },
    techStack: {
      "Backend": ["Node.js", "Express.js", "RESTful APIs"],
      "Database": ["MySQL"],
      "Analytics & ML": ["Machine Learning Models", "Trend Prediction Algorithms"],
      "Frontend & Mobile": ["Mobile UI Design", "Chart.js / Data Visualization"]
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
  }
];

// ==========================================================================
// 2. DOM Rendering: Project Cards
// ==========================================================================
function renderProjects() {
  const featuredContainer = document.getElementById("featured-project-container");
  const standardGrid = document.getElementById("projects-grid");

  if (!featuredContainer || !standardGrid) return;

  // 1. Render Featured Project (#1 Kemet Gate)
  const kemet = projectsData[0];
  const kemetTechTags = kemet.techStack["Frontend"].slice(0, 3)
    .concat(kemet.techStack["Backend"].slice(0, 2))
    .concat(["Stripe", "HMAC QR"])
    .map(t => `<span class="stack-tag">${t}</span>`)
    .join("");

  const kemetHighlights = kemet.highlights.slice(0, 5)
    .map(h => `<li>${h}</li>`)
    .join("");

  featuredContainer.innerHTML = `
    <div class="project-card featured">
      <div class="project-img-wrapper" onclick="openModal('${kemet.id}')" style="cursor: pointer;">
        <span class="project-card-status">${kemet.status}</span>
        <span class="project-badge-featured">★ Flagship Graduation Project</span>
        <img class="project-img" src="${kemet.images.preview}" alt="${kemet.images.previewAlt}" loading="lazy" />
      </div>
      <div class="project-card-content">
        <div class="project-card-meta">
          <span class="project-card-category">${kemet.category}</span>
          <span class="project-card-date">${kemet.timeline}</span>
        </div>
        <h3 class="project-card-title">${kemet.name}</h3>
        <p class="project-card-desc">${kemet.shortDesc}</p>
        <ul class="project-card-highlights">
          ${kemetHighlights}
        </ul>
        <div class="project-card-role">
          <strong>Role &amp; Context:</strong> ${kemet.role} &middot; <em>${kemet.badge}</em>
        </div>
        <div class="project-card-stack">
          ${kemetTechTags}
        </div>
        <div class="project-card-links">
          <button class="project-card-btn primary" onclick="openModal('${kemet.id}')">
            <span>View Full Case Study</span> &rarr;
          </button>
          ${kemet.github ? `
            <a href="${kemet.github}" target="_blank" rel="noopener noreferrer" class="project-card-btn secondary" aria-label="View Kemet Gate GitHub Repository">
              <span>🐙 GitHub</span>
            </a>
          ` : ""}
        </div>
      </div>
    </div>
  `;

  // 2. Render Remaining 4 Projects
  standardGrid.innerHTML = "";
  const standardProjects = projectsData.slice(1);

  standardProjects.forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";

    // Tech Tags
    let primaryStack = [];
    if (proj.techStack["Frontend"]) primaryStack.push(...proj.techStack["Frontend"].slice(0, 2));
    if (proj.techStack["Core Frontend"]) primaryStack.push(...proj.techStack["Core Frontend"].slice(0, 2));
    if (proj.techStack["Backend"]) primaryStack.push(...proj.techStack["Backend"].slice(0, 2));
    if (proj.techStack["Database"]) primaryStack.push(...proj.techStack["Database"].slice(0, 1));

    const techTagsHTML = primaryStack
      .map(t => `<span class="stack-tag">${t}</span>`)
      .join("");

    const highlightsHTML = proj.highlights.slice(0, 4)
      .map(h => `<li>${h}</li>`)
      .join("");

    card.innerHTML = `
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
              <span>🌐 Live Demo</span>
            </a>
          ` : ""}
          ${proj.github ? `
            <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="project-card-btn secondary" aria-label="View ${proj.name} GitHub Repository">
              <span>🐙 Code</span>
            </a>
          ` : ""}
        </div>
      </div>
    `;

    standardGrid.appendChild(card);
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

  // Build Tech Stack HTML
  let techStackHTML = "";
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

  // Build Challenges HTML
  const challengesHTML = proj.challenges.map(ch => `
    <div style="margin-bottom: 16px;">
      <div style="font-weight: 700; color: var(--white); font-size: 14px; margin-bottom: 4px; font-family: var(--font-heading);">✦ ${ch.title}</div>
      <div class="modal-text" style="margin-bottom: 0; padding-left: 14px;">${ch.desc}</div>
    </div>
  `).join("");

  // Build Workflow (for Kemet Gate)
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
          <img class="modal-gallery-img" src="${img.src}" alt="${proj.name} Screenshot" loading="lazy" />
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
        
        <div class="modal-section-title">Technical Challenges &amp; Solutions</div>
        ${challengesHTML}
      </div>
      
      <div>
        <div class="modal-meta-box">
          <div class="modal-meta-item">
            <div class="modal-meta-label">My Role &amp; Contributions</div>
            <div class="modal-meta-val">${proj.role}</div>
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
      <div class="modal-section-title">Verified Project Screenshots (${allImages.length} Visuals)</div>
      <p style="font-size: 12px; color: var(--muted); margin-bottom: 12px;">Click any screenshot to inspect in full resolution.</p>
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
// 5. Dynamic Footer Year & Header Scroll Effect
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Render project cards
  renderProjects();

  // Dynamic Year
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
