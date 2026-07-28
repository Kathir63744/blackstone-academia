export const SITE = {
  name: "Blackstone Academia",
  short: "Blackstone",
  tagline: "Run your entire academy on one platform",
};

// Curated Unsplash imagery, styled to match the soft, airy reference layout
export const IMAGES = {
  skyClouds:
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2000&q=80",
  heroClass:
    "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1800&q=80",
  aboutFounder:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  classroom:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
  team:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
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
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
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
      "Certificates generated automatically on completion",
    ],
    highlights: [
      { value: "1-tap", label: "Class joining" },
      { value: "24/7", label: "Curriculum access" },
      { value: "Auto", label: "Certificates" },
    ],
  },
  {
    slug: "teacher-coach-portals",
    icon: "🧑‍🏫",
    title: "Teacher & Coach Portals",
    tagline: "Give educators a workspace they'll actually enjoy",
    summary:
      "Auto-generated teacher IDs, schedules, earnings tracking, leave with auto-replacement and trial oversight for coaches.",
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1600&q=80",
    overview:
      "Teachers and academic coaches get dedicated portals built around their day. Teachers manage trials, classes, assignments and earnings in one view; coaches oversee trial sessions, evaluate students, assign classes and handle rescheduling — with the platform automatically covering gaps when someone takes leave.",
    capabilities: [
      "Teacher registration with auto-generated IDs",
      "Interview scheduling and recording for recruitment",
      "Personal class schedules and calendars",
      "Earnings tracking with transparent breakdowns",
      "Leave applications with automatic teacher replacement",
      "Coach tools: trial oversight, evaluations, class assignment",
      "Student categorization by package and course",
      "Performance rankings from surveys and timeliness",
    ],
    highlights: [
      { value: "Auto", label: "Leave replacement" },
      { value: "Live", label: "Earnings tracking" },
      { value: "360°", label: "Performance view" },
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
    overview:
      "Blackstone Academia connects natively to the video tools you already use. Classes are scheduled inside the platform, students join with one tap, and every recording uploads automatically to SharePoint, OneDrive or Google Drive — organized by class, ready for revision.",
    capabilities: [
      "Native Zoom, MS Teams, Google Meet and Jitsi integration",
      "One-tap joining from student and teacher portals",
      "Automatic recording upload to SharePoint / OneDrive / Drive",
      "Group classes with minimum-size management",
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
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    overview:
      "Money should be the easiest part of running an academy. Invoices generate themselves, students pay by card or PayPal in their own currency, notifications go out over email and WhatsApp, and your finance dashboard shows exactly where revenue and expenses stand.",
    capabilities: [
      "Stripe and PayPal payment processing",
      "Automatic invoice generation per student",
      "Multi-currency support — USD, GBP, AED and more",
      "Invoice notifications via email and WhatsApp",
      "Wise.com bank integration for expense tracking",
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
    overview:
      "Monthly assessments, assignments and evaluations run inside the platform. Students get immediate results, teachers skip repetitive grading, and both students and teachers are ranked transparently on surveys, behavior, timeliness and performance.",
    capabilities: [
      "Online assessments with immediate results",
      "Assignment submission with auto-grading",
      "Monthly teacher-led assessments and level updates",
      "Student rankings across courses and groups",
      "Teacher rankings from surveys and timeliness",
      "Feedback and rating loops after every stage",
    ],
    highlights: [
      { value: "Instant", label: "Results" },
      { value: "Auto", label: "Grading" },
      { value: "Fair", label: "Transparent ranks" },
    ],
  },
  {
    slug: "communication",
    icon: "💬",
    title: "Communication Suite",
    tagline: "Every conversation, inside the platform",
    summary:
      "Real-time chat with attachments and audio, in-app email templates, plus WhatsApp and SMS notifications.",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1600&q=80",
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
      { value: "3", label: "Channels (chat/email/WhatsApp)" },
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
    overview:
      "Admin dashboards surface what matters: how trials convert, which students are at risk of dropping off, who hasn't paid, and how teachers perform. Automated reports land in your inbox daily, weekly and monthly — no spreadsheet exports required.",
    capabilities: [
      "Trial session analytics and conversion funnels",
      "Student and teacher performance dashboards",
      "Attendance and drop-off reports",
      "Invoice and payment status tracking",
      "Automated daily, weekly and monthly reports",
      "Role-specific dashboards for every admin level",
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
    overview:
      "Your student data and payment flows deserve serious protection. Blackstone Academia ships with single sign-on, multi-factor authentication for staff, one-session-per-user enforcement, geo-based access restrictions and automatic deactivation of dormant accounts.",
    capabilities: [
      "SSO with Google and Apple accounts",
      "Two-factor authentication, MFA required for staff",
      "Concurrent session limit — one active login per user",
      "Country-based access restrictions",
      "IP-based location tracking on sessions",
      "Auto-deactivation of accounts inactive for 15 days",
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
