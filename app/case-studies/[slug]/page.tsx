import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

const caseStudies = {
  "zinc-payment-system": {
    title: "Building a Compliant Payment System",
    company: "Zinc Money",
    category: "Fintech Infrastructure",
    role: "Full-Stack Engineer",
    timeline: "6 months",
    problem: {
      title: "The Challenge",
      description: "Traditional banking infrastructure wasn't designed for the speed and flexibility that modern fintech companies need. Zinc Money needed a payment processing system that could handle high transaction volumes while maintaining strict regulatory compliance across multiple jurisdictions.",
      points: [
        "Legacy systems couldn't scale with user growth",
        "Compliance processes were manual and error-prone",
        "Real-time payment tracking was unreliable",
        "Integration with multiple payment providers was fragmented"
      ]
    },
    insight: {
      title: "Key Insight",
      description: "After analyzing the existing architecture and talking to compliance teams, I realized that the core issue wasn't just technical debt—it was a fundamental mismatch between how compliance data flowed and how transactions were processed. By unifying these data streams, we could automate most compliance checks without slowing down transactions."
    },
    solution: {
      title: "The Solution",
      description: "I designed and built a new payment processing architecture with compliance built into the transaction flow rather than bolted on afterward.",
      features: [
        "Event-driven architecture using Kafka for real-time transaction streaming",
        "Microservices-based compliance engine with rule-based automation",
        "Unified API layer abstracting multiple payment providers",
        "Real-time monitoring dashboard with automated alerting"
      ]
    },
    wireframes: [
      { title: "Transaction Flow", description: "Event-driven payment processing pipeline" },
      { title: "Compliance Dashboard", description: "Real-time monitoring and automated flags" },
      { title: "API Gateway", description: "Unified interface for payment providers" }
    ],
    metrics: [
      { value: "99.99%", label: "System Uptime" },
      { value: "50K+", label: "Daily Transactions" },
      { value: "70%", label: "Faster Compliance" },
      { value: "< 100ms", label: "Avg Latency" }
    ],
    technologies: ["TypeScript", "Node.js", "Kafka", "PostgreSQL", "Redis", "Kubernetes", "AWS"]
  },
  "ciroos-ml-pipeline": {
    title: "Scaling ML Inference at Enterprise Level",
    company: "Ciroos.ai",
    category: "AI Infrastructure",
    role: "AI Infrastructure Engineer",
    timeline: "8 months",
    problem: {
      title: "The Challenge",
      description: "Enterprise clients needed real-time AI predictions for automation workflows, but existing infrastructure couldn't handle the scale or latency requirements. Model serving was inconsistent, and cloud costs were spiraling out of control.",
      points: [
        "Inference latency exceeded SLA requirements",
        "Manual model deployment led to version conflicts",
        "No auto-scaling resulted in either over-provisioning or failures",
        "Lack of observability made debugging production issues difficult"
      ]
    },
    insight: {
      title: "Key Insight",
      description: "Most of the latency wasn't from model inference itself—it was from data preprocessing and model loading. By implementing a smart caching layer and pre-warming models based on traffic patterns, we could dramatically reduce p99 latencies without increasing infrastructure costs."
    },
    solution: {
      title: "The Solution",
      description: "Built a complete ML serving platform with intelligent scaling, caching, and observability built in from day one.",
      features: [
        "Custom model serving layer with intelligent request batching",
        "Predictive auto-scaling based on historical traffic patterns",
        "Multi-tier caching for preprocessed data and model weights",
        "Comprehensive observability with distributed tracing"
      ]
    },
    wireframes: [
      { title: "ML Pipeline", description: "End-to-end model training and deployment" },
      { title: "Scaling Dashboard", description: "Real-time resource utilization and predictions" },
      { title: "Model Registry", description: "Version control and deployment management" }
    ],
    metrics: [
      { value: "1M+", label: "Daily Predictions" },
      { value: "60%", label: "Latency Reduction" },
      { value: "40%", label: "Cost Savings" },
      { value: "< 50ms", label: "P99 Latency" }
    ],
    technologies: ["Python", "TensorFlow", "FastAPI", "Redis", "Kubernetes", "Prometheus", "GCP"]
  },
  "sustainmall-marketplace": {
    title: "Sustainability Scoring System",
    company: "SustainMall",
    category: "E-commerce Platform",
    role: "Backend Developer",
    timeline: "5 months",
    problem: {
      title: "The Challenge",
      description: "Consumers want to make sustainable purchases, but there's no standardized way to verify or compare sustainability credentials across products. Brands struggled to showcase their efforts, and consumers couldn't trust green claims.",
      points: [
        "No standardized sustainability metrics existed",
        "Brand claims were often unverifiable",
        "Consumers couldn't compare products easily",
        "Checkout abandonment was high due to trust issues"
      ]
    },
    insight: {
      title: "Key Insight",
      description: "Rather than trying to create a perfect scoring system, we realized that transparency was more valuable than perfection. By showing consumers exactly how scores were calculated and letting them weight factors according to their values, we could build trust even without perfect data."
    },
    solution: {
      title: "The Solution",
      description: "Built a comprehensive sustainability scoring and verification system that prioritizes transparency and consumer choice.",
      features: [
        "Multi-dimensional scoring across environmental, social, and governance factors",
        "Transparent calculation methodology visible to consumers",
        "Customizable weightings based on consumer priorities",
        "Brand verification process with third-party audits"
      ]
    },
    wireframes: [
      { title: "Product Score Card", description: "Detailed breakdown of sustainability metrics" },
      { title: "Brand Dashboard", description: "Verification status and improvement recommendations" },
      { title: "Consumer Preferences", description: "Personalized scoring based on values" }
    ],
    metrics: [
      { value: "10K+", label: "Products Scored" },
      { value: "500+", label: "Verified Brands" },
      { value: "35%", label: "Less Cart Abandonment" },
      { value: "4.8/5", label: "User Trust Score" }
    ],
    technologies: ["Node.js", "MongoDB", "GraphQL", "Next.js", "Stripe", "Vercel"]
  },
  "legal-trust-verification": {
    title: "Blockchain Document Verification",
    company: "The Legal Trust Network",
    category: "Legal Tech",
    role: "Software Engineer",
    timeline: "7 months",
    problem: {
      title: "The Challenge",
      description: "Legal documents require absolute trust and verification. Traditional systems rely on centralized authorities, creating single points of failure and trust issues. Law firms needed a way to verify document authenticity and track changes without relying on intermediaries.",
      points: [
        "Document authenticity verification was time-consuming",
        "No immutable audit trail for document changes",
        "Client trust required manual verification processes",
        "Cross-firm collaboration was hindered by trust issues"
      ]
    },
    insight: {
      title: "Key Insight",
      description: "Law firms didn't need a full blockchain—they needed the benefits of immutability and distributed trust. By using a permissioned blockchain with trusted nodes at major firms, we could provide the security benefits without the complexity and cost of public chains."
    },
    solution: {
      title: "The Solution",
      description: "Implemented a permissioned blockchain network for document verification with real-time collaboration features.",
      features: [
        "Permissioned blockchain with law firm nodes",
        "Document hashing and timestamping for authenticity",
        "Real-time collaboration with immutable change tracking",
        "Secure client portal for document access and verification"
      ]
    },
    wireframes: [
      { title: "Verification Portal", description: "Document authenticity checking interface" },
      { title: "Audit Trail", description: "Immutable history of all document changes" },
      { title: "Collaboration Hub", description: "Secure multi-party document editing" }
    ],
    metrics: [
      { value: "200+", label: "Law Firms" },
      { value: "100%", label: "Tamper Detection" },
      { value: "5min", label: "Avg Verification Time" },
      { value: "50K+", label: "Documents Verified" }
    ],
    technologies: ["React", "Node.js", "Hyperledger Fabric", "PostgreSQL", "WebSockets", "AWS"]
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = caseStudies[slug as keyof typeof caseStudies]

  if (!study) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Back link */}
      <div className="px-6">
        <div className="mx-auto max-w-4xl">
          <Link 
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="mt-8 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {study.category}
            </span>
            <span className="text-sm text-muted-foreground">{study.company}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-sm text-muted-foreground">{study.role}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-sm text-muted-foreground">{study.timeline}</span>
          </div>
          
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            {study.title}
          </h1>
        </div>
      </section>

      {/* Metrics */}
      <section className="mt-12 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {study.metrics.map((metric, index) => (
              <div key={index} className="rounded-xl border border-border/50 bg-card p-4 text-center">
                <div className="text-2xl font-bold text-accent">{metric.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">{study.problem.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {study.problem.description}
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {study.problem.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insight */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
            <h2 className="text-sm font-medium uppercase tracking-widest text-accent">{study.insight.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              {study.insight.description}
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">{study.solution.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {study.solution.description}
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {study.solution.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Wireframes */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">Key Components</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {study.wireframes.map((wireframe, index) => (
              <div key={index} className="rounded-xl border border-border/50 bg-card overflow-hidden">
                <div className="aspect-[4/3] bg-secondary/50 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Wireframe</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-foreground">{wireframe.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{wireframe.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">Technologies Used</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <span 
                key={tech} 
                className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }))
}
