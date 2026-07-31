// ============================================================
// FILE: app/features/[slug]/page.jsx
// REPLACE your existing file
// ============================================================

import { notFound, redirect } from "next/navigation";
import {
  PLATFORM_FEATURES,
  MODULE_SLUGS,
  getPlatformFeature,
  WORKFLOW_IMAGES,
} from "@/lib/siteData";
import { getWorkflowSteps } from "@/lib/workflowSteps";
import FeatureDetailClient from "./FeatureDetailClient";

export function generateStaticParams() {
  return PLATFORM_FEATURES.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }) {
  const feature = getPlatformFeature(params.slug);
  if (!feature) return {};
  return {
    title: `${feature.title} — Blackstone Academia`,
    description: feature.summary,
  };
}

export default function FeatureDetailPage({ params }) {
  /* Old links like /features/student-portal are now modules. Redirect instead
     of 404-ing so existing URLs, bookmarks and search results keep working. */
  if (MODULE_SLUGS.includes(params.slug)) {
    redirect(`/modules/${params.slug}`);
  }

  const feature = getPlatformFeature(params.slug);
  if (!feature) notFound();

  const index = PLATFORM_FEATURES.findIndex((f) => f.slug === feature.slug);
  const next = PLATFORM_FEATURES[(index + 1) % PLATFORM_FEATURES.length];
  const relatedModules = PLATFORM_FEATURES.filter((f) => f.slug !== feature.slug).slice(0, 3);
  const workflowImages =
    WORKFLOW_IMAGES[feature.slug] || WORKFLOW_IMAGES["student-portal"];

  return (
    <FeatureDetailClient
      feature={feature}
      index={index}
      next={next}
      relatedModules={relatedModules}
      workflowImages={workflowImages}
      workflowSteps={getWorkflowSteps(feature.slug)}
      FEATURES={PLATFORM_FEATURES}
    />
  );
}