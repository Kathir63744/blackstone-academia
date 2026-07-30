import { notFound } from "next/navigation";
import { FEATURES, getFeature, WORKFLOW_IMAGES } from "@/lib/siteData";
import FeatureDetailClient from "./FeatureDetailClient";
import { BookOpen, Calendar, Award, Target, Users, TrendingUp, BarChart, Shield, Settings, FileText, Globe, Play, Clock, MessageCircle } from "lucide-react";

export function generateStaticParams() {
  return FEATURES.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }) {
  const feature = getFeature(params.slug);
  if (!feature) return {};
  return {
    title: `${feature.title} — Blackstone Academia`,
    description: feature.summary,
  };
}

export default function FeatureDetailPage({ params }) {
  const feature = getFeature(params.slug);
  if (!feature) notFound();

  const index = FEATURES.findIndex((f) => f.slug === feature.slug);
  const next = FEATURES[(index + 1) % FEATURES.length];
  const relatedModules = FEATURES.filter((f) => f.slug !== feature.slug).slice(0, 3);
  const workflowImages = WORKFLOW_IMAGES[feature.slug] || WORKFLOW_IMAGES["student-portal"];

  const getWorkflowSteps = (slug) => {
    const workflows = {
      "student-portal": [
        { 
          icon: <BookOpen className="h-6 w-6" />, 
          title: "Discover & Enroll", 
          desc: "Students explore courses, register for trials, and enroll in programs that match their goals. The entire journey from discovery to enrollment happens in minutes.",
          detail: "Browse courses • Schedule trials • Instant enrollment"
        },
        { 
          icon: <Calendar className="h-6 w-6" />, 
          title: "Learn & Engage", 
          desc: "Access curriculum, join live classes, submit assignments, and track progress. Everything needed for academic success is available 24/7 from any device.",
          detail: "Live classes • Curriculum access • Assignment submission"
        },
        { 
          icon: <Award className="h-6 w-6" />, 
          title: "Achieve & Grow", 
          desc: "Track rankings, receive certificates, and access performance analytics. Students see their progress and achievements in real-time.",
          detail: "Real-time rankings • Auto-certificates • Progress tracking"
        },
      ],
      "teacher-portal": [
        { 
          icon: <Calendar className="h-6 w-6" />, 
          title: "Plan & Schedule", 
          desc: "Set up class schedules, manage trials, and coordinate with students. The intelligent scheduling system automatically handles conflicts and leave requests.",
          detail: "Smart scheduling • Leave management • Auto-replacement"
        },
        { 
          icon: <TrendingUp className="h-6 w-6" />, 
          title: "Teach & Track", 
          desc: "Deliver engaging lessons, monitor student participation, and track performance metrics. Every student's progress is visible in real-time.",
          detail: "Live teaching • Performance tracking • Student analytics"
        },
        { 
          icon: <Award className="h-6 w-6" />, 
          title: "Grow & Earn", 
          desc: "Transparent earnings tracking, performance rankings, and professional development tools help teachers grow their careers.",
          detail: "Earnings dashboard • Performance rankings • Career growth"
        },
      ],
      "academic-coach-portal": [
        { 
          icon: <Target className="h-6 w-6" />, 
          title: "Assess & Plan", 
          desc: "Evaluate student performance, identify intervention needs, and create personalized development plans. Data-driven insights guide every decision.",
          detail: "Performance evaluation • Intervention planning • Goal setting"
        },
        { 
          icon: <Users className="h-6 w-6" />, 
          title: "Guide & Support", 
          desc: "Provide targeted support through one-on-one coaching, resource recommendations, and progress monitoring. Every student gets the attention they need.",
          detail: "One-on-one coaching • Resource recommendations • Progress monitoring"
        },
        { 
          icon: <TrendingUp className="h-6 w-6" />, 
          title: "Track & Optimize", 
          desc: "Monitor student outcomes, adjust intervention strategies, and celebrate successes. Continuous improvement drives student achievement.",
          detail: "Outcome tracking • Strategy optimization • Success celebration"
        },
      ],
      "supervisor-portal": [
        { 
          icon: <BarChart className="h-6 w-6" />, 
          title: "Monitor & Evaluate", 
          desc: "Comprehensive dashboards provide real-time visibility into teacher performance, student outcomes, and institutional health.",
          detail: "Real-time dashboards • Performance metrics • Quality assurance"
        },
        { 
          icon: <Shield className="h-6 w-6" />, 
          title: "Ensure Quality", 
          desc: "Maintain high standards through automated quality checks, compliance monitoring, and continuous improvement programs.",
          detail: "Quality monitoring • Compliance tracking • Standards enforcement"
        },
        { 
          icon: <TrendingUp className="h-6 w-6" />, 
          title: "Lead & Innovate", 
          desc: "Drive institutional excellence with strategic insights, resource optimization, and data-backed decision making.",
          detail: "Strategic insights • Resource optimization • Innovation leadership"
        },
      ],
      "admin-portal": [
        { 
          icon: <Settings className="h-6 w-6" />, 
          title: "Manage Operations", 
          desc: "Centralized control over enrollment, staffing, facilities, and resources. Every aspect of institutional operations is streamlined.",
          detail: "Enrollment management • Staff scheduling • Resource planning"
        },
        { 
          icon: <FileText className="h-6 w-6" />, 
          title: "Handle Finances", 
          desc: "Comprehensive financial management including billing, payments, expense tracking, and financial reporting.",
          detail: "Billing automation • Payment processing • Financial reporting"
        },
        { 
          icon: <Globe className="h-6 w-6" />, 
          title: "Scale & Expand", 
          desc: "Multi-campus coordination, regulatory compliance, and strategic planning tools support institutional growth.",
          detail: "Multi-campus tools • Compliance management • Growth planning"
        },
      ],
      "live-classes": [
        { 
          icon: <Play className="h-6 w-6" />, 
          title: "Connect & Start", 
          desc: "Seamlessly integrate with Zoom, MS Teams, Google Meet, or Jitsi. Classes start with a single click from the platform.",
          detail: "4 video platforms • One-click start • Auto-integration"
        },
        { 
          icon: <Users className="h-6 w-6" />, 
          title: "Teach & Interact", 
          desc: "Engage students with interactive tools, screen sharing, and real-time participation. Learning is active and collaborative.",
          detail: "Interactive tools • Screen sharing • Active participation"
        },
        { 
          icon: <Clock className="h-6 w-6" />, 
          title: "Record & Review", 
          desc: "Automatic recording with cloud storage, organized by class. Students can review lessons anytime, anywhere.",
          detail: "Auto-recording • Cloud storage • 24/7 access"
        },
      ],
      "billing-finance": [
        { 
          icon: <FileText className="h-6 w-6" />, 
          title: "Invoice & Collect", 
          desc: "Automated invoicing with multi-currency support. Students receive professional invoices via email and WhatsApp.",
          detail: "Auto-invoicing • Multi-currency • Instant delivery"
        },
        { 
          icon: <Shield className="h-6 w-6" />, 
          title: "Process & Secure", 
          desc: "Secure payment processing through Stripe and PayPal. Global payments made simple and safe.",
          detail: "Stripe + PayPal • Global payments • Secure processing"
        },
        { 
          icon: <BarChart className="h-6 w-6" />, 
          title: "Track & Report", 
          desc: "Real-time financial dashboard with expense tracking, revenue analytics, and comprehensive reporting.",
          detail: "Financial dashboard • Expense tracking • Revenue analytics"
        },
      ],
      "assessments-rankings": [
        { 
          icon: <Target className="h-6 w-6" />, 
          title: "Assess & Evaluate", 
          desc: "Create and administer assessments with instant grading. Students receive immediate feedback on their performance.",
          detail: "Online assessments • Auto-grading • Instant feedback"
        },
        { 
          icon: <TrendingUp className="h-6 w-6" />, 
          title: "Rank & Compare", 
          desc: "Transparent ranking systems based on performance, behavior, and timeliness. Fair competition drives excellence.",
          detail: "Performance rankings • Behavior tracking • Fair competition"
        },
        { 
          icon: <Award className="h-6 w-6" />, 
          title: "Recognize & Reward", 
          desc: "Automated certificates, recognition programs, and achievement tracking motivate students to excel.",
          detail: "Auto-certificates • Recognition programs • Achievement tracking"
        },
      ],
      "messaging": [
        { 
          icon: <MessageCircle className="h-6 w-6" />, 
          title: "Connect & Chat", 
          desc: "Real-time messaging with file sharing, emojis, and audio messages. Connect instantly with students, teachers, and staff.",
          detail: "Real-time chat • File sharing • Audio messages"
        },
        { 
          icon: <Globe className="h-6 w-6" />, 
          title: "Broadcast & Notify", 
          desc: "Reach everyone through email, WhatsApp, and SMS. Automated notifications keep everyone informed.",
          detail: "Email + WhatsApp + SMS • Automated notifications • Broadcast tools"
        },
        { 
          icon: <Shield className="h-6 w-6" />, 
          title: "Log & Track", 
          desc: "Complete conversation history stored for accountability. Every communication is tracked and searchable.",
          detail: "Conversation logs • Searchable history • Accountability"
        },
      ],
      "analytics-reports": [
        { 
          icon: <BarChart className="h-6 w-6" />, 
          title: "Visualize & Understand", 
          desc: "Comprehensive dashboards transform complex data into actionable insights. See what matters at a glance.",
          detail: "Interactive dashboards • Data visualization • Actionable insights"
        },
        { 
          icon: <TrendingUp className="h-6 w-6" />, 
          title: "Monitor & Alert", 
          desc: "Early warning systems detect issues before they become problems. Proactive intervention drives success.",
          detail: "Early warnings • Proactive alerts • Risk detection"
        },
        { 
          icon: <Award className="h-6 w-6" />, 
          title: "Report & Improve", 
          desc: "Automated reports delivered daily, weekly, and monthly. Data-driven improvement is built into the workflow.",
          detail: "Automated reports • Performance improvement • Data-driven decisions"
        },
      ],
      "security-compliance": [
        { 
          icon: <Shield className="h-6 w-6" />, 
          title: "Protect & Secure", 
          desc: "Enterprise-grade security with SSO, MFA, and advanced encryption. Student data and payments are always protected.",
          detail: "SSO + MFA • Advanced encryption • Data protection"
        },
        { 
          icon: <Settings className="h-6 w-6" />, 
          title: "Control & Manage", 
          desc: "Granular access controls, session management, and geo-based restrictions ensure appropriate access.",
          detail: "Access control • Session management • Geo-restrictions"
        },
        { 
          icon: <Clock className="h-6 w-6" />, 
          title: "Comply & Monitor", 
          desc: "Automatic deactivation of dormant accounts, compliance monitoring, and audit trails for complete accountability.",
          detail: "Auto-deactivation • Compliance monitoring • Audit trails"
        },
      ],
    };
    return workflows[slug] || workflows["student-portal"];
  };

  const workflowSteps = getWorkflowSteps(feature.slug);

  return (
    <FeatureDetailClient
      feature={feature}
      index={index}
      next={next}
      relatedModules={relatedModules}
      workflowImages={workflowImages}
      workflowSteps={workflowSteps}
      FEATURES={FEATURES}
    />
  );
}