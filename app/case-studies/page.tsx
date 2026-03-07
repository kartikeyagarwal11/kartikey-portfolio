import Link from "next/link"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    slug: "zinc-payment-system",
    title: "Building a Compliant Payment System",
    company: "Zinc Money",
    category: "Fintech Infrastructure",
    summary: "How we designed and built a payment processing system that handles 50K+ daily transactions while maintaining full regulatory compliance.",
    metrics: ["99.99% uptime", "50K+ daily txns", "70% faster compliance"],
    image: "/case-studies/zinc.jpg"
  },
  {
    slug: "ciroos-ml-pipeline",
    title: "Scaling ML Inference at Enterprise Level",
    company: "Ciroos.ai",
    category: "AI Infrastructure",
    summary: "Designing an auto-scaling ML pipeline that reduced inference latency by 60% while cutting cloud costs by 40%.",
    metrics: ["1M+ predictions/day", "60% latency reduction", "40% cost savings"],
    image: "/case-studies/ciroos.jpg"
  },
  {
    slug: "sustainmall-marketplace",
    title: "Sustainability Scoring System",
    company: "SustainMall",
    category: "E-commerce Platform",
    summary: "Building a verification system that scores and showcases product sustainability credentials for 10K+ products.",
    metrics: ["10K+ products", "500+ brands", "35% less cart abandonment"],
    image: "/case-studies/sustainmall.jpg"
  },
  {
    slug: "legal-trust-verification",
    title: "Blockchain Document Verification",
    company: "The Legal Trust Network",
    category: "Legal Tech",
    summary: "Implementing a blockchain-based system for verifying and tracking legal documents across 200+ law firms.",
    metrics: ["200+ law firms", "Immutable records", "Real-time tracking"],
    image: "/case-studies/legal.jpg"
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Case Studies</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Product Case Studies
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Deep dives into product challenges, solutions, and the engineering decisions behind impactful features.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function CaseStudyCard({ study }: { study: typeof caseStudies[0] }) {
  return (
    <Link 
      href={`/case-studies/${study.slug}`}
      className="group flex flex-col rounded-xl border border-border/50 bg-card overflow-hidden transition-all hover:border-accent/30"
    >
      {/* Image placeholder */}
      <div className="aspect-video w-full bg-secondary/50 flex items-center justify-center">
        <div className="text-muted-foreground text-sm">{study.company}</div>
      </div>
      
      <div className="flex flex-col p-6">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {study.category}
          </span>
          <span className="text-xs text-muted-foreground">{study.company}</span>
        </div>
        
        <h2 className="mt-4 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
          {study.title}
        </h2>
        
        <p className="mt-3 text-muted-foreground leading-relaxed">
          {study.summary}
        </p>
        
        {/* Metrics */}
        <div className="mt-6 flex flex-wrap gap-4">
          {study.metrics.map((metric) => (
            <span key={metric} className="text-sm font-medium text-foreground">
              {metric}
            </span>
          ))}
        </div>
        
        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent">
          Read Case Study
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
