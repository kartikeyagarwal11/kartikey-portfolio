import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6">
        <div className="mx-auto max-w-4xl">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">About</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            The Story
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="mt-12 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="flex flex-col gap-6">
                  {/* Profile placeholder */}
                  <div className="aspect-square w-full max-w-[200px] rounded-xl bg-secondary/50 flex items-center justify-center">
                    <span className="text-4xl font-bold text-muted-foreground">KA</span>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">Kartikey Agarwal</h2>
                    <p className="mt-1 text-muted-foreground">Engineer & Product Builder</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="mailto:hello@kartikey.dev"
                      className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I&apos;m an engineer and product builder who works at the intersection of technology and business impact. 
                  After graduating from <span className="text-foreground font-medium">IIT Delhi</span>, I chose 
                  the startup path over traditional placements because I wanted to build things that matter.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">The Journey</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  My journey started with a simple realization: the best products come from people who understand 
                  both the technical possibilities and the user problems deeply. This drove me to seek roles where 
                  I could do both—write code and shape product direction.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  At <span className="text-foreground font-medium">Zinc Money</span>, I built payment infrastructure 
                  that processes thousands of transactions daily. At <span className="text-foreground font-medium">Ciroos.ai</span>, 
                  I designed ML systems that scale to millions of predictions. Each role has taught me something 
                  new about building products that people actually use.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">What I Do</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  I specialize in three areas:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3 text-lg text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span><span className="text-foreground font-medium">Fintech Systems</span> — Building compliant, scalable financial infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span><span className="text-foreground font-medium">AI Infrastructure</span> — Designing ML systems that work at scale</span>
                  </li>
                  <li className="flex items-start gap-3 text-lg text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span><span className="text-foreground font-medium">Full-Stack Development</span> — Building end-to-end digital products</span>
                  </li>
                </ul>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">The Future</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  I&apos;m working towards becoming a founder. Every project, every role, every late night debugging 
                  session is preparation for building something of my own. The transition from 
                  <span className="text-foreground font-medium"> Engineer → Product Builder → Founder</span> is 
                  intentional—I want to understand every aspect of building a successful company.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  If you&apos;re building something interesting, or just want to chat about technology, 
                  products, or startups, I&apos;d love to connect.
                </p>

                <div className="mt-12 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/contact">
                      Get in Touch
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/work">View My Work</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-24 border-t border-border/50 pt-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground">Technical Skills</h2>
          
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SkillCategory 
              title="Languages" 
              skills={["TypeScript", "Python", "Go", "Rust", "SQL"]} 
            />
            <SkillCategory 
              title="Frontend" 
              skills={["React", "Next.js", "Tailwind CSS", "Framer Motion"]} 
            />
            <SkillCategory 
              title="Backend" 
              skills={["Node.js", "FastAPI", "PostgreSQL", "Redis", "Kafka"]} 
            />
            <SkillCategory 
              title="AI/ML" 
              skills={["TensorFlow", "PyTorch", "LangChain", "Vector DBs"]} 
            />
            <SkillCategory 
              title="Infrastructure" 
              skills={["AWS", "GCP", "Kubernetes", "Docker", "Terraform"]} 
            />
            <SkillCategory 
              title="Tools" 
              skills={["Git", "CI/CD", "Prometheus", "Grafana", "Figma"]} 
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-medium uppercase tracking-widest text-accent">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
