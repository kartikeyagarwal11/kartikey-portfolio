import Link from "next/link"
import { ArrowRight, Github, Linkedin, Briefcase, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col justify-center px-6 pt-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-sm font-medium uppercase tracking-widest text-accent">
                  IIT Delhi Graduate
                </span>
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                  Kartikey Agarwal
                </h1>
                <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
                  Engineer → Product Builder → Future Founder
                </p>
              </div>

              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                I build fintech systems, AI infrastructure, and scalable digital products. 
                Currently exploring the intersection of engineering and product thinking.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/work">
                    <Briefcase className="h-4 w-4" />
                    View Work
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="gap-2">
                  <Link href="/case-studies">
                    <FolderOpen className="h-4 w-4" />
                    Product Case Studies
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Link href="/projects" className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <span>Projects</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-border">|</span>
                <Link 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </Link>
                <span className="text-border">|</span>
                <Link 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>

            {/* Right Column - Side Navigation */}
            <div className="hidden lg:flex lg:flex-col lg:items-end lg:gap-6">
              <nav className="flex flex-col items-end gap-4">
                <SideNavItem href="/work" label="Work Experience" description="Startups & Impact" />
                <SideNavItem href="/projects" label="Projects" description="Technical Builds" />
                <SideNavItem href="/case-studies" label="Case Studies" description="Product Thinking" />
                <SideNavItem href="/writing" label="Writing" description="Insights & Analysis" />
                <SideNavItem href="/about" label="About" description="My Story" />
              </nav>
            </div>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/4 -translate-x-1/4 rounded-full bg-accent/3 blur-3xl" />
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="border-t border-border/50 bg-card/50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value="4+" label="Startups Built" />
            <StatCard value="IIT Delhi" label="Education" />
            <StatCard value="Fintech" label="Primary Domain" />
            <StatCard value="Full-Stack" label="Tech Expertise" />
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Recent Work</h2>
              <p className="mt-2 text-muted-foreground">Building impactful products at leading startups</p>
            </div>
            <Link href="/work" className="group hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:flex">
              View all work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <WorkPreviewCard 
              company="Zinc Money"
              role="Engineering Lead"
              description="Building compliant fintech infrastructure for modern banking"
              tags={["Fintech", "Full-Stack", "Compliance"]}
            />
            <WorkPreviewCard 
              company="Ciroos.ai"
              role="AI Infrastructure"
              description="Developing scalable AI systems for enterprise automation"
              tags={["AI/ML", "Infrastructure", "Backend"]}
            />
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/work" className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent/80">
              View all work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function SideNavItem({ href, label, description }: { href: string; label: string; description: string }) {
  return (
    <Link 
      href={href}
      className="group flex flex-col items-end gap-1 text-right transition-all"
    >
      <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
        {label}
      </span>
      <span className="text-xs text-muted-foreground">
        {description}
      </span>
      <span className="h-px w-0 bg-accent transition-all group-hover:w-full" />
    </Link>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border/50 bg-card p-6 transition-colors hover:border-accent/30">
      <span className="text-2xl font-bold text-foreground">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}

function WorkPreviewCard({ company, role, description, tags }: { company: string; role: string; description: string; tags: string[] }) {
  return (
    <Link 
      href="/work"
      className="group flex flex-col gap-4 rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-accent/30 hover:bg-card/80"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{company}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        <ArrowRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
      </div>
      <p className="text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
