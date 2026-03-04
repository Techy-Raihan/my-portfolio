// ─── Personal Info ────────────────────────────────────────────────────────────
export const personalInfo = {
    name: 'Raihan Raza',
    title: 'Senior Software Engineer',
    tagline: 'Building Resilient Enterprise Systems at Scale',
    subtitle:
        'Architecting high-throughput microservices, messaging pipelines, and RESTful ecosystems for Fortune-class enterprises.',
    email: 'raihanrazaft@gmail.com',
    phone: '+91 6204043724',
    location: 'Bengaluru, India',
    github: 'https://github.com/Techy-Raihan',
    linkedin: 'https://www.linkedin.com/in/raihan-raza-a8aa97191/',
    resumeUrl: '/Raihan_Raza_Resume.pdf',
};

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skillCategories = [
    {
        category: 'Backend',
        icon: '⚙️',
        color: 'blue',
        skills: [
            { name: 'Java', level: 95 },
            { name: 'Spring Boot', level: 92 },
            { name: 'Microservices', level: 88 },
            { name: 'Spring MVC', level: 88 },
            { name: 'Spring Data JPA', level: 85 },
            { name: 'Spring Security', level: 80 },
            { name: 'Hibernate', level: 83 },
            { name: 'REST APIs', level: 92 },
        ],
    },
    {
        category: 'Messaging & Integration',
        icon: '🔗',
        color: 'cyan',
        skills: [
            { name: 'IBM MQ', level: 85 },
            { name: 'IBM i (AS/400)', level: 78 },
            { name: 'Jackson (JSON)', level: 85 },
            { name: 'Async Processing', level: 82 },
            { name: 'Event-Driven Design', level: 80 },
        ],
    },
    {
        category: 'Database',
        icon: '🗄️',
        color: 'emerald',
        skills: [
            { name: 'DB2', level: 82 },
            { name: 'MySQL', level: 88 },
            { name: 'PostgreSQL', level: 78 },
            { name: 'MongoDB', level: 70 },
            { name: 'Redis Cache', level: 72 },
        ],
    },
    {
        category: 'Tools & Practices',
        icon: '🛠️',
        color: 'blue',
        skills: [
            { name: 'Git / GitHub', level: 90 },
            { name: 'Postman', level: 90 },
            { name: 'VS Code', level: 90 },
            { name: 'Agile / Scrum', level: 85 },
            { name: 'Python', level: 65 },
            { name: 'HTML / CSS', level: 72 },
        ],
    },
];

// ─── Experience ────────────────────────────────────────────────────────────────
export const experiences = [
    {
        id: 'veolia',
        company: 'Persistent Systems Limited',
        role: 'Senior Software Engineer',
        duration: 'July 2024 – Present',
        location: 'Bengaluru, India',
        client: 'Veolia North America',
        clientDesc: 'Global leader in water, waste, and energy management',
        color: 'blue',
        problem:
            'Veolia North America required seamless integration between their legacy IBM i (AS/400) systems and a modern microservices ecosystem for real-time order and invoice processing across distributed facilities.',
        solution: [
            'Architected an IBM MQ messaging layer on top of Spring Boot to bridge the IBM i system with modern services, enabling reliable async communication at enterprise scale.',
            'Designed and built a custom invoice generation service that processes work order data from DB2, applies business logic, and exposes RESTful APIs for downstream service integration.',
            'Implemented Jackson-based JSON serialization for seamless data exchange between heterogeneous systems, eliminating manual data mapping processes.',
            'Established end-to-end data flow from IBM i → IBM MQ → Spring Boot → DB2 → REST API consumers.',
        ],
        impact: [
            'Zero message loss across high-volume IBM MQ pipelines',
            'Reduced manual data processing time significantly via automated invoice generation',
            'Seamless cross-system integration for 2+ enterprise platforms',
            '2× High Five Award recipient (2023–24, 2024–25)',
        ],
        techStack: ['Java', 'Spring Boot', 'IBM MQ', 'IBM i', 'DB2', 'REST APIs', 'Jackson'],
    },
    {
        id: 'baxter',
        company: 'Persistent Systems Limited',
        role: 'Software Engineer',
        duration: 'Jun 2022 – Jun 2024',
        location: 'Bengaluru, India',
        client: 'Baxter Healthcare Corporation',
        clientDesc: 'Global medical device and pharmaceutical company',
        color: 'cyan',
        problem:
            'Baxter Healthcare\'s Service Portal lacked versatile data export capabilities, multilingual support, and had accumulated technical debt leading to slow load times and recurring bugs impacting user productivity globally.',
        solution: [
            'Engineered a universal data export feature enabling PDF and CSV generation from live service data, utilized by teams across multiple countries and languages.',
            'Developed a dynamic, locale-aware Footer component with country/language-specific content rendering, improving global UX consistency.',
            'Implemented efficient server-side filtering and pagination to optimize data retrieval, drastically reducing Order History load times.',
            'Built real-time inventory management with robust validation and error-handling to ensure data accuracy and prevent inconsistencies.',
            'Systematically resolved 15%+ of the platform\'s open bugs through root-cause analysis and targeted fixes.',
        ],
        impact: [
            '15% reduction in platform-wide bug count',
            'Significant load-time improvement for Order History module',
            'Multilingual export feature deployed across global user base',
            '2× High Five Award recipient for exemplary contribution',
        ],
        techStack: ['Java', 'Spring Boot', 'MySQL', 'Spring MVC', 'REST APIs', 'JSP', 'HTML/CSS'],
    },
    {
        id: 'intern',
        company: 'Persistent Systems Limited',
        role: 'Software Engineering Intern',
        duration: 'Jan 2022 – Jun 2022',
        location: 'Pune, India',
        client: 'Internal / Training Projects',
        clientDesc: 'Enterprise software training & onboarding program',
        color: 'emerald',
        problem:
            'The Order History portal suffered from poor performance due to full-page reloads on every request, and the Product Catalogue page blocked rendering with synchronous content loading.',
        solution: [
            'Optimized Order History page load times by implementing browser caching with Cache-Control headers, achieving a significant improvement in portal performance.',
            'Ensured smooth user interactions by asynchronously loading non-critical content on the Product Catalogue page, removing render-blocking operations.',
        ],
        impact: [
            'Measurable improvement in Order History page load performance',
            'Eliminated render-blocking on Product Catalogue page',
            'Established performance optimization patterns adopted by team',
        ],
        techStack: ['Java', 'Spring Boot', 'MySQL', 'Cache-Control', 'Async Loading'],
    },
];

// ─── Projects ──────────────────────────────────────────────────────────────────
export const projects = [
    {
        id: 'school-mgmt',
        title: 'School Management System',
        description:
            'A comprehensive backend system for managing student records, faculty, courses, and administrative workflows. Built with a clean layered architecture following SOLID principles.',
        techStack: ['Spring Boot', 'MySQL', 'Hibernate', 'Spring Data JPA', 'REST APIs'],
        features: [
            'RESTful API endpoints for all CRUD operations across entities',
            'Spring Data JPA integration with DB relationships (OneToMany, ManyToMany)',
            'Request validation, error handling and structured API responses',
            'Role-based resource access control patterns',
        ],
        github: 'https://github.com/Techy-Raihan',
        color: 'blue',
        icon: '🏫',
        category: 'Backend System',
    },
    {
        id: 'zwigato',
        title: 'Zwigato Food Delivery App',
        description:
            'A full-featured food delivery platform backend enabling seamless interactions between users, restaurants, and delivery agents. Features a real-time analytics dashboard layer.',
        techStack: ['Java', 'Spring Boot', 'MySQL', 'JSP', 'REST APIs', 'Spring Security'],
        features: [
            'REST API integration between users, restaurants, orders, and menus',
            'CRUD operations on restaurant listings, menu items, and order flows',
            'Real-time order status tracking and sales analytics dashboard',
            'Dynamic dashboard with graphical sales trends and user insights',
        ],
        github: 'https://github.com/Techy-Raihan',
        color: 'cyan',
        icon: '🍕',
        category: 'Full-Stack Application',
    },
];

// ─── Metrics ───────────────────────────────────────────────────────────────────
export const metrics = [
    { value: 3.5, suffix: '+', label: 'Years Experience', description: 'Enterprise backend development' },
    { value: 2, suffix: '', label: 'Enterprise Clients', description: 'Fortune-class organizations' },
    { value: 15, suffix: '%', label: 'Bug Reduction', description: 'Platform-wide at Baxter Healthcare' },
    { value: 2, suffix: '×', label: 'High Five Awards', description: 'Persistent Systems recognition' },
];

// ─── System Design blocks ──────────────────────────────────────────────────────
export const systemDesignBlocks = [
    {
        id: 'ibm-mq',
        title: 'IBM MQ Messaging Architecture',
        description: 'Enterprise messaging pipeline used at Veolia North America for reliable async communication between IBM i and modern microservices.',
        color: 'blue',
        nodes: [
            { label: 'IBM i (AS/400)', type: 'source', icon: '🖥️' },
            { label: 'IBM MQ Queue Manager', type: 'broker', icon: '📨' },
            { label: 'Spring Boot Consumer', type: 'service', icon: '⚙️' },
            { label: 'DB2 Database', type: 'storage', icon: '🗄️' },
            { label: 'REST API Layer', type: 'api', icon: '🌐' },
        ],
    },
    {
        id: 'microservices',
        title: 'Microservices Architecture Pattern',
        description: 'Scalable, decoupled service topology enabling independent deployment, fault isolation, and horizontal scaling.',
        color: 'cyan',
        nodes: [
            { label: 'API Gateway', type: 'gateway', icon: '🔀' },
            { label: 'Auth Service', type: 'service', icon: '🔐' },
            { label: 'Order Service', type: 'service', icon: '📋' },
            { label: 'Invoice Service', type: 'service', icon: '🧾' },
            { label: 'Message Broker', type: 'broker', icon: '📨' },
        ],
    },
    {
        id: 'rest-api',
        title: 'REST API Lifecycle',
        description: 'End-to-end API processing pipeline with validation, business logic, persistence, and structured response handling.',
        color: 'emerald',
        nodes: [
            { label: 'HTTP Request', type: 'source', icon: '📡' },
            { label: 'Controller Layer', type: 'service', icon: '🎮' },
            { label: 'Service Layer', type: 'service', icon: '⚙️' },
            { label: 'Repository Layer', type: 'service', icon: '📦' },
            { label: 'JSON Response', type: 'api', icon: '✅' },
        ],
    },
];

// ─── Education ─────────────────────────────────────────────────────────────────
export const education = {
    degree: 'Bachelor of Technology (B.Tech) — Information Technology',
    institution: 'Academy Of Technology',
    cgpa: '8.78',
    year: '2022',
};
