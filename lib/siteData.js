export const SITE = {
  name: "Blackstone Academia",
  short: "Blackstone",
  tagline: "Run your entire academy on one platform",
};

export const IMAGES = {
  skyClouds: "https://images.unsplash.com/photo-1534088568595-a066f410bcda", // Hero background
  heroClass: "https://images.unsplash.com/photo-1588072432836-e10032774350", // Alternative
  aboutFounder: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", // Alternative
  classroom: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655", // Learning environment
  team: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4", // Team collaboration
}

// Workflow images for each module
export const WORKFLOW_IMAGES = {
  "student-portal": {
    step1: "/Student Dashboard - Light Mode 3.svg",
    step2: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    step3: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  },
  "teacher-portal": {
    step1: "/Teacher dashboard - Light Mode 1.svg",
    step2: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    step3: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  },
  "academic-coach-portal": {
    step1: "/Academic  - Light Mode 1.svg",
    step2: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    step3: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
  "supervisor-portal": {
    step1: "/Supervisor Module - Light mode 1.svg",
    step2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    step3: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  "admin-portal": {
    step1: "/Admin dashboard - Light Mode 5.png",
    step2: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    step3: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80",
  },
  "live-classes": {
    step1: "/live class.svg",
    step2: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    step3: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80",
  },
  "billing-finance": {
    step1: "/finance.svg",
    step2: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    step3: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  "assessments-rankings": {
    step1:"/assememt.svg",
    step2: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    step3: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?auto=format&fit=crop&w=800&q=80",
  },
  "messaging": {
    step1: "/Messaging - Light Mode.svg",
    step2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    step3: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=800&q=80",
  },
  "analytics-reports": {
    step1: "/analytics.svg",
    step2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    step3: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  "security-compliance": {
    step1: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    step2: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    step3: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
};

export const FEATURES = [
  {
    slug: "student-portal",
    icon: "🎓",
    title: "Student Portal",
    tagline: "One login for a student's entire journey",
    summary:
      "Trial registration, session tracking, curriculum access, assignments, rankings and one-tap class joining.",
    image:
      "/student.jpg",
    video: "/Student Module.mp4", // Add your YouTube video ID
    overview:
      "The Student Portal is the front door of your academy. From the first trial session to course completion, students see their schedule, join live classes in one tap, submit assignments, track rankings and download curriculum — without a single WhatsApp message to your staff.",
    capabilities: [
      "Trial session registration with automated follow-up",
      "Session tracking with teacher and course details",
      "Class joining via MS Teams, Zoom, Google Meet or Jitsi",
      "Curriculum access — PDF, PPT and video libraries",
      "Assignments, assessments and live rankings",
      "Invoice history and profile management",
      "Sibling accounts with combined or separate invoicing",

    ],
    highlights: [
      { value: "1-tap", label: "Class joining" },
      { value: "24/7", label: "Curriculum access" },
  
    ],
  },
  {
    slug: "teacher-portal",
    icon: "🧑‍🏫",
    title: "Teacher Portal",
    tagline: "Empower educators with a dedicated workspace",
    summary:
      "Auto-generated teacher IDs, schedules, earnings tracking, leave management, and trial oversight tools.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
    video: "/Teacher Module.mp4", // Add your YouTube video ID
    overview:
      "The Teacher Portal is built around what educators need most—time to teach. Teachers manage trials, classes, assignments and earnings in one view. The platform automatically handles leave replacements and provides transparent performance metrics.",
    capabilities: [
      "Teacher registration with auto-generated IDs",
      "Interview scheduling and recording for recruitment",
      "Personal class schedules and calendars",
      "Earnings tracking with transparent breakdowns",
      "Leave applications ",
      "Student categorization by package and course",

    ],
    highlights: [
      { value: "Auto", label: "Leave replacement" },
      { value: "Live", label: "Earnings tracking" },
      { value: "360°", label: "Performance view" },
    ],
  },
  {
    slug: "academic-coach-portal",
    icon: "🎯",
    title: "Academic Coach Portal",
    tagline: "Guide students to success with data-driven insights",
    summary:
      "Coach tools for trial oversight, student evaluations, class assignment, and progress tracking.",
    image:
      "/academic-coach.jpg",
    video: "/Academic coach Module.mp4", // Add your YouTube video ID
    overview:
      "Academic coaches get a dedicated portal designed around student success. Oversee trial sessions, evaluate student performance, assign classes, manage rescheduling, and track progress—all with real-time data at your fingertips.",
    capabilities: [
      "Trial session oversight and management",
      "Student evaluation and assessment tool",
      " Schedule management",
      "Reschedule request handling",
      "Student progress monitoring dashboards",
      "Performance analytics and reporting",


    ],
    highlights: [
      { value: "Real-time", label: "Progress tracking" },
      { value: "100%", label: "Student coverage" },
      { value: "Smart", label: "Intervention tools" },
    ],
  },
  {
    slug: "supervisor-portal",
    icon: "📊",
    title: "Supervisor Portal",
    tagline: "Orchestrate excellence across your institution",
    summary:
      "Comprehensive oversight tools for monitoring performance, ensuring quality, and driving improvement.",
    image:
      "/supervisor-portal.jpg",
    video: "/Supervisor Module.mp4", // Add your YouTube video ID
    overview:
      "The Supervisor Portal provides a bird's-eye view of institutional performance. From teacher evaluations to student outcomes, supervisors have the data they need to make informed decisions, maintain high standards, and drive continuous improvement.",
    capabilities: [
      "Comprehensive teacher evaluation dashboards",
      "Real-time institutional performance metrics",
      "Quality assurance monitoring tools",
      "Performance benchmarking across departments",
      "Resource allocation and optimization",
      "Compliance and standards tracking",
      "Professional development oversight",
    

    ],
    highlights: [
  { value: "Recruitment", label: "Hiring" },
  { value: "Feedback", label: "Quality" },
  { value: "Training", label: "Development" },
],
  },
  {
    slug: "admin-portal",
    icon: "🏛️",
    title: "Admin Portal",
    tagline: "Effortless institutional management",
    summary:
      "Complete administrative toolkit for managing students, staff, finances, and operations with ease.",
    image:
      "/admin-portal.jpg",
    video: "/Admin Module.mp4", // Add your YouTube video ID
    overview:
      "The Admin Portal centralizes all institutional operations. From enrollment to financial management, every administrative task is streamlined into a single, intuitive platform that reduces complexity and increases operational efficiency.",
    capabilities: [
      "Student enrollment and onboarding management",
      "Staff management and scheduling tools",
      "Financial management and billing systems",
      "Resource and facility planning modules",
      "Regulatory compliance tracking and reporting",
      "Advanced data analytics and custom reporting",
      "Multi-campus coordination and oversight",
      "Role-based access control and permissions",
    ],
    highlights: [
  { value: "Management", label: "Operations" },
  { value: "Analytics", label: "Insights" },
  { value: "Finance", label: "Control" },
],
  },
  {
    slug: "live-classes",
    icon: "🎥",
    title: "Live Classes & Recording",
    tagline: "Teach anywhere, record everything",
    summary:
      "Zoom, MS Teams, Google Meet and Jitsi built in — recordings upload automatically to your cloud storage.",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1600&q=80",
    video: "", // Add your YouTube video ID
    overview:
      "Blackstone Academia connects natively to the video tools you already use. Classes are scheduled inside the platform, students join with one tap, and every recording uploads automatically to SharePoint, OneDrive or Google Drive — organized by class, ready for revision.",
    capabilities: [
      "Zoom, MS Teams, Google Meet and Jitsi integration",
      "One-tap joining from student and teacher portals",
      "Automatic recording upload to SharePoint / OneDrive / Drive",
      "Group classes",
      "Reschedule requests routed to the academic coach",
      "Attendance captured automatically per session",
    ],
    highlights: [
      { value: "4", label: "Video platforms" },
      { value: "Auto", label: "Cloud recording" },
      { value: "100%", label: "Attendance capture" },
    ],
  },
  {
    slug: "billing-finance",
    icon: "💳",
    title: "Billing & Finance",
    tagline: "Get paid globally, reconcile effortlessly",
    summary:
      "Stripe & PayPal payments, auto-invoicing, multi-currency support, Wise expense tracking and a finance dashboard.",
    image:
      "/finance.jpg",
    video: "", // Add your YouTube video ID
    overview:
      "Money should be the easiest part of running an academy. Invoices generate themselves, students pay by card or PayPal in their own currency, notifications go out over email and WhatsApp, and your finance dashboard shows exactly where revenue and expenses stand.",
    capabilities: [
      "Stripe and PayPal payment processing",
      "Automatic invoice generation per student",
      "Invoice notifications via email and WhatsApp",
      "Combined or separate sibling invoicing",
      "Finance dashboard with payment status at a glance",
    ],
    highlights: [
      { value: "3+", label: "Currencies" },
      { value: "0", label: "Manual invoices" },
      { value: "2", label: "Payment gateways" },
    ],
  },
  {
    slug: "assessments-rankings",
    icon: "📝",
    title: "Assessments & Rankings",
    tagline: "Measure progress without marking marathons",
    summary:
      "Online assessments with instant results, assignment auto-grading and rankings from surveys and performance.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80",
    video: "", // Add your YouTube video ID
    overview:
      "Monthly assessments, assignments and evaluations run inside the platform. Students get immediate results, teachers skip repetitive grading, and both students and teachers are ranked transparently on surveys, behavior, timeliness and performance.",
    capabilities: [
      "Assignment submission",
      "Monthly teacher-led assessments and level updates",
      "Student level across courses and groups",
      "Teacher level from surveys and timeliness",
      "Feedback and rating loops after every class",
    ],
    highlights: [
      { value: "Instant", label: "Results" },
      { value: "Auto", label: "Grading" },
      { value: "Fair", label: "Transparent ranks" },
    ],
  },
{
    slug: "messaging",
    icon: "💬",
    title: "Messaging Suite",
    tagline: "Every conversation, inside the platform",
    summary:
      "Real-time chat with attachments and audio, in-app email templates, plus WhatsApp and SMS notifications.",
    image:
      "/messaging.jpeg",
    video: "", // Add your YouTube video ID
    overview:
      "Stop juggling personal phone numbers and scattered inboxes. Students, teachers, coaches and admins chat in real time — with files, emojis and audio messages — while announcements, reminders and invoices reach families over email, WhatsApp and SMS. Every conversation is logged.",
    capabilities: [
      "Real-time chat between students, teachers and staff",
      "File attachments, emojis and audio messages",
      "In-app email system with reusable templates",
      "WhatsApp Business and SMS notifications",
      "Announcements, reminders and alert broadcasts",
      "Complete chat logs stored for accountability",
    ],
    highlights: [
      { value: "3", label: "Channels" },
      { value: "100%", label: "Logged conversations" },
      { value: "0", label: "Personal numbers shared" },
    ],
  },
  {
    slug: "analytics-reports",
    icon: "📊",
    title: "Analytics & Reports",
    tagline: "Decisions backed by data, not guesswork",
    summary:
      "Trial funnels, attendance and drop-off reports, payment status and automated daily, weekly and monthly summaries.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    video: "", // Add your YouTube video ID
    overview:
      "Admin dashboards surface what matters: how trials convert, which students are at risk of dropping off, who hasn't paid, and how teachers perform. Automated reports land in your inbox daily, weekly and monthly — no spreadsheet exports required.",
    capabilities: [
      "Trial session analytics and conversion funnels",
      "Student and teacher performance dashboards",
      "Attendance",
      "Invoice and payment status tracking",
    ],
    highlights: [
      { value: "Daily", label: "Automated reports" },
      { value: "Live", label: "Dashboards" },
      { value: "Early", label: "Drop-off warnings" },
    ],
  },
  {
    slug: "security-compliance",
    icon: "🔐",
    title: "Security & Compliance",
    tagline: "Enterprise-grade protection, academy-simple",
    summary:
      "SSO, 2FA/MFA, single-session enforcement, country-based access rules and automatic account deactivation.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
    video: "", // Add your YouTube video ID
    overview:
      "Your student data and payment flows deserve serious protection. Blackstone Academia ships with single sign-on, multi-factor authentication for staff, one-session-per-user enforcement, geo-based access restrictions and automatic deactivation of dormant accounts.",
    capabilities: [
      "SSO with Google ",
      "Concurrent session limit — one active login per user",
    ],
    highlights: [
      { value: "MFA", label: "For all staff" },
      { value: "1", label: "Session per user" },
      { value: "Geo", label: "Access rules" },
    ],
  },
];

export function getFeature(slug) {
  return FEATURES.find((f) => f.slug === slug);
}
/* ============================================================================
   APPEND THIS TO THE BOTTOM OF lib/siteData.js
   ----------------------------------------------------------------------------
   The FEATURES array stays exactly as it is — nothing above needs touching.
   These are derived views over it, so there's one source of truth and a module
   can never drift out of sync with its detail page.
   ========================================================================== */

/* The five portals. Everything NOT in this list is a platform feature. */
export const MODULE_SLUGS = [
  "student-portal",
  "teacher-portal",
  "academic-coach-portal",
  "supervisor-portal",
  "admin-portal",
];

export const MODULES = FEATURES.filter((f) => MODULE_SLUGS.includes(f.slug));

export const PLATFORM_FEATURES = FEATURES.filter(
  (f) => !MODULE_SLUGS.includes(f.slug)
);

export function getModule(slug) {
  return MODULES.find((f) => f.slug === slug);
}

export function getPlatformFeature(slug) {
  return PLATFORM_FEATURES.find((f) => f.slug === slug);
}

/* Given any slug, where does it live? Handy for redirects and breadcrumbs. */
export function getSectionFor(slug) {
  return MODULE_SLUGS.includes(slug) ? "modules" : "features";
}