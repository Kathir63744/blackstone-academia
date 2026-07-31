// ============================================================
// FILE: app/modules/[slug]/page.jsx
// NEW FILE
// ============================================================

import { notFound } from "next/navigation";
import { MODULES, getModule, WORKFLOW_IMAGES } from "@/lib/siteData";
import { getWorkflowSteps } from "@/lib/workflowSteps";
import ModuleDetailClient from "./ModuleDetailClient";

export function generateStaticParams() {
  return MODULES.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }) {
  const module_ = getModule(params.slug);
  if (!module_) return {};
  return {
    title: `${module_.title} — Blackstone Academia`,
    description: module_.summary,
  };
}

export default function ModuleDetailPage({ params }) {
  const module_ = getModule(params.slug);
  if (!module_) notFound();

  /* Index, next and related all stay INSIDE the modules set, so a portal never
     links sideways into a platform feature. */
  const index = MODULES.findIndex((f) => f.slug === module_.slug);
  const next = MODULES[(index + 1) % MODULES.length];
  const related = MODULES.filter((f) => f.slug !== module_.slug).slice(0, 3);
  const workflowImages =
    WORKFLOW_IMAGES[module_.slug] || WORKFLOW_IMAGES["student-portal"];

  return (
    <ModuleDetailClient
      module_={module_}
      index={index}
      total={MODULES.length}
      next={next}
      related={related}
      workflowImages={workflowImages}
      workflowSteps={getWorkflowSteps(module_.slug)}
    />
  );
}