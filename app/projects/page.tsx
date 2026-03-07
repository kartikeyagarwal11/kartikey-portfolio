import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    title: "DSCoin Blockchain System",
    description: "A distributed cryptocurrency system implementing consensus algorithms, merkle trees, and peer-to-peer networking from scratch.",
    techStack: ["Go", "gRPC", "LevelDB", "Docker", "Cryptography"],
    github: "https://github.com",
    demo: null,
    featured: true
  },
  {
    title: "Real-time Multiplayer Maze Game",
    description: "A WebSocket-based multiplayer game featuring procedural maze generation, real-time synchronization, and competitive leaderboards.",
    techStack: ["TypeScript", "Node.js", "Socket.io", "Canvas API", "Redis"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true
  },
  {
    title: "Fake News Detection System",
    description: "Machine learning pipeline for detecting misinformation using NLP techniques, achieving 94% accuracy on benchmark datasets.",
    techStack: ["Python", "TensorFlow", "BERT", "FastAPI", "PostgreSQL"],
    github: "https://github.com",
    demo: null,
    featured: true
  },
  {
    title: "AI Productivity OS",
    description: "An intelligent productivity platform that uses LLMs to automate task management, scheduling, and workflow optimization.",
    techStack: ["Next.js", "OpenAI API", "Prisma", "tRPC", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    featured: true
  },
  {
    title: "Distributed Cache System",
    description: "A high-performance distributed caching solution with consistent hashing, replication, and automatic failover.",
    techStack: ["Rust", "Tokio", "gRPC", "Docker", "Kubernetes"],
    github: "https://github.com",
    demo: null,
    featured: false
  },
  {
    title: "Code Review Bot",
    description: "GitHub bot that provides automated code reviews using static analysis and AI-powered suggestions.",
    techStack: ["TypeScript", "GitHub API", "OpenAI", "Vercel", "PostgreSQL"],
    github: "https://github.com",
    demo: null,
    featured: false
  }
]

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Portfolio</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Technical builds exploring blockchain, AI, distributed systems, and real-time applications.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Featured Projects</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="mt-20 px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Other Projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} project={project} compact />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

function ProjectCard({ 
  project, 
  compact = false 
}: { 
  project: typeof projects[0]
  compact?: boolean 
}) {
  return (
    <article className="group flex flex-col rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-accent/30">
      <div className="flex items-start justify-between gap-4">
        <h3 className={`font-semibold text-foreground ${compact ? 'text-lg' : 'text-xl'}`}>
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="View source code"
            >
              <Github className="h-4 w-4" />
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground transition-colors hover:text-accent"
              aria-label="View live demo"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
      
      <p className={`mt-3 text-muted-foreground leading-relaxed ${compact ? 'text-sm' : ''}`}>
        {project.description}
      </p>
      
      <div className="mt-auto pt-6">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
