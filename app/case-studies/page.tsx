"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Improving Cost Transparency in Emergent",
    company: "Emergent",
    category: "Product Strategy",
    description:
      "A product strategy proposal focused on improving cost transparency and reducing credit anxiety in AI-powered application generation platforms.",
    pdfLink: "/case-studies/Kartikey Agarwal Product Case Study Emergent.pdf",
    tags: [
      "Product Strategy",
      "AI Platforms",
      "Pricing Systems",
      "User Retention",
    ],
  },
  {
    title: "Reducing Customer Support Queries at Swiggy",
    company: "Swiggy",
    category: "Product Operations",
    description:
      "A product analysis exploring how Swiggy can reduce customer support load by improving order tracking, refund transparency, and self-serve support systems.",
    pdfLink:
      "/case-studies/Case Study_ Improving Customer Support Efficiency at Swiggy.pdf",
    tags: [
      "Marketplace Operations",
      "Customer Experience",
      "Support Systems",
      "Product Strategy",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Case Studies
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Case Studies
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Product thinking, system design, and business analysis behind
            complex platforms.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} study={study} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CaseStudyCard({ study }:any) {
  return (
    <article
      className="group flex flex-col rounded-xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
      onClick={() =>
        window.open(study.pdfLink, "_blank", "noopener,noreferrer")
      }
    >
      {/* Company Banner */}
      <div className="flex items-center justify-center text-xl font-semibold">
        {study.company === "Emergent" ? (
          <div className="bg-gradient-to-r from-accent to-accent-foreground text-accent-foreground px-6 md:px-18 py-3 rounded-b-xl">
            Emergent
          </div>
        ) : (
          <div className="bg-orange-500 text-white px-6 md:px-18 py-3 rounded-b-xl">
            Swiggy
          </div>
        )}
      </div>

      <div className="flex flex-col p-6 flex-1">
        <div className="flex items-center gap-2 mb-4">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {study.category}
          </span>
        </div>

        <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
          {study.title}
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
          {study.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {study.tags.map((tag:any) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read Case Study Button */}
        <Link
          href={study.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
        >
          Read Case Study
          <ArrowRight className="h-4 w-4 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
