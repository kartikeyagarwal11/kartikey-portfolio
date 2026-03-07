import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@kartikey.dev",
    href: "mailto:hello@kartikey.dev",
    description: "Best for detailed inquiries"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kartikey",
    href: "https://linkedin.com",
    description: "Let's connect professionally"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/kartikey",
    href: "https://github.com",
    description: "Check out my code"
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6">
        <div className="mx-auto max-w-4xl">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Contact</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Let&apos;s Connect
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you want to discuss a project, explore collaboration opportunities, 
            or just have a conversation about technology and startups—I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Links */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {contactLinks.map((link) => (
              <ContactCard key={link.label} {...link} />
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-border/50 bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Location</h2>
                <p className="text-sm text-muted-foreground">Based in India, working globally</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              I&apos;m always interested in new challenges and opportunities to build impactful products.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="mailto:hello@kartikey.dev"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                <Mail className="h-5 w-5" />
                Send an Email
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                Or view my work first
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Quick Links</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <QuickLink href="/work" label="Work Experience" />
            <QuickLink href="/projects" label="Projects" />
            <QuickLink href="/case-studies" label="Case Studies" />
            <QuickLink href="/writing" label="Writing" />
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactCard({ 
  icon: Icon, 
  label, 
  value, 
  href, 
  description 
}: { 
  icon: typeof Mail
  label: string
  value: string
  href: string
  description: string
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex flex-col gap-4 rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-accent/30"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary group-hover:bg-accent/20 transition-colors">
          <Icon className="h-5 w-5 text-accent" />
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{label}</h3>
        <p className="mt-1 text-sm text-accent">{value}</p>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-lg border border-border/50 bg-card p-4 transition-all hover:border-accent/30"
    >
      <span className="text-sm font-medium text-foreground">{label}</span>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
    </Link>
  )
}
