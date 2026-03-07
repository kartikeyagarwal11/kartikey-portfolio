import { ArrowUpRight } from "lucide-react"

const workExperience = [
  {
    company: "Zinc Money",
    role: "Full-Stack Engineer",
    period: "2023 - Present",
    problem: "Traditional banking infrastructure lacks the flexibility and compliance features modern fintechs need to launch quickly and scale efficiently.",
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "AWS", "React", "Kubernetes"],
    impact: [
      "Built core banking APIs serving 50K+ daily transactions",
      "Reduced compliance processing time by 70% through automation",
      "Architected real-time payment processing system with 99.99% uptime"
    ]
  },
  {
    company: "Ciroos.ai",
    role: "AI Infrastructure Engineer",
    period: "2022 - 2023",
    problem: "Enterprises struggle to integrate AI capabilities into existing workflows due to infrastructure complexity and scalability challenges.",
    technologies: ["Python", "TensorFlow", "FastAPI", "Redis", "Docker", "GCP"],
    impact: [
      "Designed ML pipeline handling 1M+ daily predictions",
      "Reduced model inference latency by 60% through optimization",
      "Built auto-scaling infrastructure reducing cloud costs by 40%"
    ]
  },
  {
    company: "SustainMall",
    role: "Backend Developer",
    period: "2021 - 2022",
    problem: "Sustainable e-commerce platforms lack the technical infrastructure to verify and showcase product sustainability credentials at scale.",
    technologies: ["Node.js", "MongoDB", "GraphQL", "Stripe", "Next.js", "Vercel"],
    impact: [
      "Built marketplace platform serving 10K+ verified sustainable products",
      "Implemented sustainability scoring system used by 500+ brands",
      "Reduced checkout abandonment by 35% through UX optimization"
    ]
  },
  {
    company: "The Legal Trust Network",
    role: "Software Engineer",
    period: "2020 - 2021",
    problem: "Legal tech platforms face challenges in document management, secure communication, and client trust verification.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Blockchain", "WebSockets"],
    impact: [
      "Developed secure document sharing system used by 200+ law firms",
      "Built real-time collaboration features reducing case resolution time",
      "Implemented blockchain-based trust verification for legal documents"
    ]
  }
]

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6">
        <div className="mx-auto max-w-4xl">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Experience</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Work Experience
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Building fintech systems, AI infrastructure, and scalable platforms at innovative startups.
          </p>
        </div>
      </section>

      {/* Work Timeline */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:block md:left-[7.5rem]" />
            
            <div className="flex flex-col gap-12">
              {workExperience.map((job, index) => (
                <article key={index} className="group relative">
                  <div className="flex flex-col gap-6 md:flex-row">
                    {/* Period */}
                    <div className="shrink-0 md:w-[7rem] md:text-right">
                      <span className="text-sm font-medium text-muted-foreground">{job.period}</span>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-[7.25rem] top-1.5 hidden h-2.5 w-2.5 rounded-full border-2 border-accent bg-background md:block" />
                    
                    {/* Content */}
                    <div className="flex-1 rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-accent/30 md:ml-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-xl font-semibold text-foreground">{job.company}</h2>
                          <p className="mt-1 text-muted-foreground">{job.role}</p>
                        </div>
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-accent">Problem</h3>
                        <p className="mt-2 text-muted-foreground leading-relaxed">{job.problem}</p>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-accent">Technologies</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <span 
                              key={tech} 
                              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-accent">Impact</h3>
                        <ul className="mt-3 flex flex-col gap-2">
                          {job.impact.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
