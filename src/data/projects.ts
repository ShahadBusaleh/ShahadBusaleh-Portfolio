export type ProjectCategory = "enterprise" | "ai" | "data" | "mobile";

export type Project = {
  id: string;
  title: string;
  titleAr: string;
  role: string;
  roleAr: string;
  description: string;
  descriptionAr: string;
  highlights: string[];
  highlightsAr: string[];
  stack: string[];
  category: ProjectCategory;
  featured: boolean;
  github?: string;
  live?: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    id: "yusor",
    title: "Yusor — Bilingual Multi-Agent HR Assistant",
    titleAr: "يُسر — مساعد موارد بشرية متعدد الوكلاء ثنائي اللغة",
    role: "Agentic AI Bootcamp Capstone (SDA & WeCloudData) — Repo Owner & Evaluation Lead | Team of 4",
    roleAr: "مشروع تخرج معسكر Agentic AI (SDA و WeCloudData) — مالكة المستودع وقائدة التقييم | فريق من 4",
    description:
      "An Arabic/English HR assistant that answers from the HR database and Saudi Labor Law, cites its sources, verifies every answer before the user sees it, and keeps risky actions under human approval.",
    descriptionAr:
      "مساعد موارد بشرية بالعربية والإنجليزية يجيب من قاعدة بيانات الموارد البشرية ونظام العمل السعودي، ويستشهد بمصادره، ويتحقق من كل إجابة قبل أن تصل للمستخدم، ويُبقي الإجراءات الحساسة تحت الموافقة البشرية.",
    highlights: [
      "Orchestrator, HR, Consultant and Manager agents, plus specialists for regulation updates, decision briefs, CV parsing and growth plans",
      "Hybrid RAG (Qdrant + BM25 + Reciprocal Rank Fusion) over 176 policy and Labor Law documents, with cited sources",
      "Results: Ragas faithfulness 0.94, context recall 0.91, 54/54 golden cases and 158 unit tests passing",
      "My role: owned the repository and team work split, led the evaluation harness (Ragas + LLM-as-judge), built the Growth Agent and the initial API backend",
    ],
    highlightsAr: [
      "وكلاء المنسّق والموارد البشرية والمستشار والمدير، إضافة إلى وكلاء متخصصين لتحديثات الأنظمة وملخصات القرار وتحليل السير الذاتية وخطط النمو",
      "RAG هجين (Qdrant + BM25 + Reciprocal Rank Fusion) على 176 وثيقة سياسات ونظام عمل، مع ذكر المصادر",
      "النتائج: Ragas faithfulness بنسبة 0.94، وcontext recall بنسبة 0.91، ونجاح 54/54 حالة مرجعية و158 اختبار وحدة",
      "دوري: ملكية المستودع وتوزيع العمل على الفريق، وقيادة منظومة التقييم (Ragas + LLM-as-judge)، وبناء وكيل خطط النمو والواجهة البرمجية الأولية",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Streamlit",
      "Qdrant",
      "sentence-transformers",
      "Groq LLM",
      "Ragas",
      "SQLite",
      "Docker",
    ],
    category: "ai",
    featured: true,
    github: "https://github.com/ShahadBusaleh/YusrAgent",
    badge: "Capstone",
  },
  {
    id: "sada",
    title: "Sada — AI Audience Engagement Platform",
    titleAr: "صدى — منصة ذكاء اصطناعي لتفاعل الجمهور",
    role: "AgentX Hackathon — AI Agent & Backend Developer | Team Project",
    roleAr: "هاكاثون AgentX — مطورة وكلاء الذكاء الاصطناعي والخلفية | مشروع فريق",
    description:
      "A multi-agent platform that helps the Saudi Broadcasting Authority's content teams decide what to publish, on which channel, and when, based on real audience engagement data, shown on a live Arabic (RTL) dashboard.",
    descriptionAr:
      "منصة متعددة الوكلاء تساعد فرق المحتوى في هيئة الإذاعة والتلفزيون على تحديد ماذا تنشر، وعلى أي قناة، ومتى، بناءً على بيانات تفاعل جمهور حقيقية، وتعرضها في لوحة عربية مباشرة.",
    highlights: [
      "Developed the AI agents and FastAPI backend: behavior analysis, content optimization, trend prediction, anomaly diagnosis and audience analysis",
      "Integrated YouTube Data API v3, X API v2 and Instagram Graph API within fixed quota and cost budgets",
      "Real data from 9 official SBA YouTube channels: 7,777 videos and ~95M views over 180 days",
      "Measured, not assumed: sentiment checked against blind human labels, trend predictions backtested against a baseline, every recommendation linked to its evidence",
    ],
    highlightsAr: [
      "تطوير وكلاء الذكاء الاصطناعي وخلفية FastAPI: تحليل السلوك، وتحسين المحتوى، والتنبؤ بالترند، وتشخيص الحالات الشاذة، وتحليل الجمهور",
      "تكامل YouTube Data API v3 وX API v2 وInstagram Graph API ضمن حدود ثابتة للحصص والتكلفة",
      "بيانات حقيقية من 9 قنوات يوتيوب رسمية للهيئة: 7,777 فيديو ونحو 95 مليون مشاهدة خلال 180 يومًا",
      "نتائج مقاسة: تحليل المشاعر مُقارن بتصنيفات بشرية مستقلة، والتنبؤات مختبرة مقابل خط أساس، وكل توصية مرتبطة بدليلها",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Google Gemini",
      "PostgreSQL",
      "SQLAlchemy",
      "React",
      "TypeScript",
      "YouTube Data API",
      "X API",
      "Instagram Graph API",
    ],
    category: "ai",
    featured: true,
    github: "https://github.com/DaleenMilibari/Sada",
    badge: "AgentX Hackathon",
  },
  {
    id: "meeting-assistant",
    title: "AI Meeting Assistant",
    titleAr: "مساعد الاجتماعات الذكي",
    role: "Enterprise Integration & Full-Stack Delivery",
    roleAr: "تكامل مؤسسي وتطوير Full Stack",
    description:
      "Enterprise web app for recording meetings, live transcription, AI summaries, formal meeting minutes documents, PDF export, and Microsoft Graph email — integrated into a corporate IT portal with Entra ID SSO via YARP reverse proxy.",
    descriptionAr:
      "تطبيق مؤسسي لتسجيل الاجتماعات والنسخ المباشر والملخصات بالذكاء الاصطناعي ومحاضر الاجتماعات الرسمية وتصدير PDF والبريد عبر Microsoft Graph — مدمج في بوابة IT مع تسجيل دخول موحد عبر YARP.",
    highlights: [
      "Two-server Windows architecture: ASP.NET portal + Next.js/FastAPI stack",
      "SSO without second login — YARP injects X-User headers from Entra ID",
      "Local LM Studio summarization with browser-side transcription path",
      "Production troubleshooting: 502 gateway, transcript persistence, template routing",
    ],
    highlightsAr: [
      "بنية Windows ثنائية الخوادم: بوابة ASP.NET + Next.js/FastAPI",
      "تسجيل دخول موحد بدون تسجيل ثانٍ عبر YARP و Entra ID",
      "تلخيص محلي عبر LM Studio مع مسار نسخ في المتصفح",
      "حل مشاكل إنتاج: 502، حفظ النصوص، مسارات القوالب",
    ],
    stack: [
      "Next.js",
      "FastAPI",
      "ASP.NET",
      "YARP",
      "LM Studio",
      "SQLite",
      "MS Graph",
    ],
    category: "enterprise",
    featured: true,
    badge: "Production",
  },
  {
    id: "travel-in",
    title: "Travel-In — AI Travel Concierge",
    titleAr: "Travel-In — مساعد السفر الذكي",
    role: "Full Stack Developer — Architecture, API Design, AI Integration, Database, Figma-to-UI Implementation",
    roleAr: "مطورة Full Stack — البنية، تصميم الواجهات البرمجية، تكامل الذكاء الاصطناعي، قاعدة البيانات، وتحويل تصاميم Figma إلى واجهات",
    description:
      "1st Place AI travel concierge at Rkiza V-Camp 2026. Generates personalized, editable itineraries with Google Gemini AI, and integrates real-time flight and hotel APIs for dynamic pricing and booking.",
    descriptionAr:
      "المركز الأول في Rkiza V-Camp 2026. منصة سفر ذكية تولّد خططاً قابلة للتعديل عبر Google Gemini AI، مع تكامل واجهات طيران وفنادق حية للتسعير والحجز.",
    highlights: [
      "1st Place — Rkiza V-Camp 2026; Gemini-generated structured itineraries",
      "Live flight and hotel search with multi-key API failover; real-time pricing and checkout",
      "Clerk auth with server-side route protection; per-IP rate limiting, CSRF validation, and Zod sanitization",
      "Team: Elaf Albelali (UI/UX), Ziyad Tammar (security, performance, deployment), Saud Alotaibi (business analysis)",
    ],
    highlightsAr: [
      "المركز الأول — Rkiza V-Camp 2026؛ خطط رحلات منظمة يولّدها Gemini",
      "بحث حي عن الرحلات والفنادق مع تبديل تلقائي بين مفاتيح API متعددة؛ تسعير حي وإتمام الحجز",
      "مصادقة Clerk مع حماية المسارات من جهة الخادم؛ تحديد معدل الطلبات لكل IP، وتحقق CSRF، وتنقية المدخلات عبر Zod",
      "الفريق: إلاف البلعلي (UI/UX)، زياد تمار (الأمان والأداء والنشر)، سعود العتيبي (تحليل الأعمال)",
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "Clerk",
      "Prisma",
      "PostgreSQL",
      "Vercel AI SDK",
      "Google Gemini 2.5 Flash",
      "SerpApi",
      "Resend",
      "Zod",
    ],
    category: "ai",
    featured: true,
    live: "https://travelin.blog/",
    badge: "1st Place",
  },
  {
    id: "equipment",
    title: "IT Equipment Management System",
    titleAr: "نظام إدارة معدات IT",
    role: "Full Stack Developer",
    roleAr: "مطورة Full Stack",
    description:
      "Enterprise-grade web app that digitizes IT equipment issuance through a multi-step approval workflow (Preparer → Issuer → Receiver), with Microsoft Graph email notifications, bilingual PDF generation, and Microsoft-based authentication.",
    descriptionAr:
      "تطبيق مؤسسي لرقمنة صرف معدات IT عبر سير موافقات متعدد الخطوات (مُعِدّ → مُصدِر → مُستلِم)، مع إشعارات بريد Microsoft Graph وتوليد PDF ثنائي اللغة ومصادقة Microsoft.",
    highlights: [
      "Multi-role workflow: Preparer → Issuer → Receiver with role-based access control",
      "Microsoft Graph API for automated email notifications; cookie-based Microsoft authentication",
      "Bilingual English/Arabic PDF generation with QuestPDF; deployed on private IIS",
    ],
    highlightsAr: [
      "سير عمل متعدد الأدوار: مُعِدّ → مُصدِر → مُستلِم مع صلاحيات حسب الدور",
      "Microsoft Graph لإشعارات البريد؛ مصادقة Microsoft عبر ملفات تعريف الارتباط",
      "توليد PDF بالعربي والإنجليزي عبر QuestPDF؛ نشر على IIS خاص",
    ],
    stack: [
      "ASP.NET Core MVC",
      "EF Core",
      "SQL Server",
      "Microsoft Graph",
      "QuestPDF",
      "Bootstrap",
      "IIS",
    ],
    category: "enterprise",
    featured: false,
    badge: "Enterprise",
  },
  {
    id: "research-mission",
    title: "Research Mission Facilitation System",
    titleAr: "نظام تسهيل المهام البحثية",
    role: "Full Stack Developer | Trainee & Volunteer",
    roleAr: "مطورة Full Stack | متدربة وتطوع",
    description:
      "Institutional ASP.NET Core MVC platform for research facilitation requests — multi-stage scientific and ethical review, role-based dashboards, bilingual Arabic–English UI, and automated poster generation.",
    descriptionAr:
      "منصة مؤسسية بـ ASP.NET Core MVC لطلبات تسهيل البحث — مراجعة علمية وأخلاقية متعددة المراحل، لوحات حسب الدور، واجهة عربية–إنجليزية، وتوليد ملصقات آلي.",
    highlights: [
      "Full Arabic–English localization using .resx files and culture middleware",
      "Fixed backend logic and optimized EF Core / LINQ queries for search and workflow state",
      "Enhanced Razor views and multi-role workflow handling for academic users",
    ],
    highlightsAr: [
      "تعريب كامل عربي–إنجليزي عبر ملفات .resx و culture middleware",
      "إصلاح منطق الخلفية وتحسين استعلامات EF Core / LINQ للبحث وحالة سير العمل",
      "تحسين واجهات Razor ومعالجة سير العمل متعدد الأدوار للمستخدمين الأكاديميين",
    ],
    stack: [
      "ASP.NET Core MVC",
      "EF Core",
      "LINQ",
      "SQL Server",
      "Bootstrap",
      "Razor",
    ],
    category: "enterprise",
    featured: false,
  },
  {
    id: "endless-words",
    title: "Endless Words — AI-Powered Platform for Creative Writing & Book Design",
    titleAr: "Endless Words — منصة ذكاء اصطناعي للكتابة الإبداعية وتصميم الكتب",
    role: "Full Stack / Mobile Developer | Graduation Project",
    roleAr: "مطورة Full Stack وتطبيقات جوال | مشروع تخرج",
    description:
      "An AI-powered mobile platform that helps writers generate ideas, develop characters, get grammar and style feedback, and design book covers — while letting readers browse, rate, and discuss published work in a shared community. Built as a Bachelor's graduation project in Computer Information Systems at Imam Abdulrahman Bin Faisal University.",
    descriptionAr:
      "منصة جوال مدعومة بالذكاء الاصطناعي تساعد الكُتّاب على توليد الأفكار وتطوير الشخصيات والحصول على ملاحظات نحوية وأسلوبية وتصميم أغلفة الكتب، بينما يمكن للقراء تصفح الأعمال المنشورة وتقييمها ومناقشتها ضمن مجتمع مشترك. أُنجز كمشروع تخرج لبكالوريوس نظم المعلومات الحاسوبية في جامعة الإمام عبدالرحمن بن فيصل.",
    highlights: [
      "AI-assisted writing tools — idea generation, character development, and grammar/style enhancement — powered by OpenAI and Gemini APIs",
      "Reader community features: browsing, ratings, comments, and following authors, plus AI-assisted book cover design",
      "Built with Flutter for cross-platform mobile delivery and an ASP.NET Core backend with a relational database",
    ],
    highlightsAr: [
      "أدوات كتابة مدعومة بالذكاء الاصطناعي — توليد الأفكار، وتطوير الشخصيات، وتحسين القواعد والأسلوب — عبر واجهتي OpenAI وGemini",
      "ميزات مجتمعية للقراء: التصفح والتقييم والتعليقات ومتابعة الكُتّاب، إضافة إلى تصميم أغلفة الكتب بالذكاء الاصطناعي",
      "مبني بـ Flutter للتطوير الجوال متعدد المنصات وخلفية ASP.NET Core مع قاعدة بيانات علائقية",
    ],
    stack: ["Flutter", "Dart", "ASP.NET Core", "SQL Server", "Firebase", "OpenAI API"],
    category: "mobile",
    featured: false,
  },
  {
    id: "ticket-analytics",
    title: "IT Ticket Data Analysis",
    titleAr: "تحليل بيانات تذاكر IT",
    role: "IT Trainee — COOP",
    roleAr: "متدربة IT",
    description:
      "Analyzed 10 months of IT support ticket data to identify peak periods, seasonal trends, and category relationships — delivering strategic recommendations via interactive Tableau dashboards.",
    descriptionAr:
      "تحليل 10 أشهر من بيانات تذاكر الدعم الفني لتحديد فترات الذروة والاتجاهات الموسمية — مع توصيات استراتيجية عبر لوحات Tableau تفاعلية.",
    highlights: [
      "Data cleaning: mixed time formats and inconsistent categorization",
      "Interactive Tableau dashboards for resource planning",
      "Strategic recommendations presented to IT operations",
    ],
    highlightsAr: [
      "تنظيف بيانات: صيغ زمنية مختلطة وتصنيفات غير متسقة",
      "لوحات Tableau تفاعلية لتخطيط الموارد",
      "توصيات استراتيجية لعمليات IT",
    ],
    stack: ["Excel", "Tableau"],
    category: "data",
    featured: false,
  },
];

export const skills = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Flutter",
    "Dart",
  ],
  backend: [
    "Python",
    "C#",
    "Java",
    "PHP",
    "C++",
    "ASP.NET Core",
    "Node.js",
    "FastAPI",
    "REST APIs",
  ],
  ai: [
    "OpenAI API",
    "Google Gemini AI",
    "LM Studio",
    "Prompt Engineering",
    "Multi-Agent System Design",
    "Agent Guardrails & Observability",
    "LLM Evaluation (Ragas, LLM-as-judge)",
    "RAG (Hybrid: Qdrant + BM25)",
    "LangChain",
  ],
  cloud: [
    "Microsoft Azure",
    "Git",
    "GitHub",
    "Docker",
    "PowerShell",
    "IIS",
    "Clerk Auth",
    "MS Graph",
    "Firebase",
  ],
  data: ["SQL", "Tableau", "Power BI", "Pandas", "EF Core"],
};
