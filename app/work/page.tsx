const workExperience = [
  {
    company: "Ciroos.ai",
    role: "Member of Technical Staff",
    period: "Jul 2025 – Sep 2025",
    location: "Gurugram, India",
    problem:
      "Engineering teams often struggle to identify and resolve incidents quickly across complex distributed systems.",
    whatIWorkedOn: [
      "Contributed to an AI-driven SRE teammate designed to automate incident analysis and operational responses",
      "Implemented integrations with Git and GitHub MCP servers for logs and trace analysis",
    ],
    technologies: [
      "Kubernetes",
      "Agentic AI Systems",
      "MCP Servers",
      "Observability",
      "Helm",
      "Infrastructure Automation",
    ],
    impact: [
      "Helped automate incident investigation workflows by integrating logs, repositories, and infrastructure signals through agent-driven systems.",
      "Deployed infrastructure components using Kubernetes and Helm to support scalable observability and SRE automation pipelines.",
    ],
  },
  {
    company: "Zinc Money",
    role: "Software Engineer",
    period: "Jun 2024 – Jun 2025",
    location: "Bengaluru, India",
    problem:
      "Families planning overseas education often struggle to manage savings, investments, and cross-border payments in a coordinated way.",
    whatIWorkedOn: [
      "Built frontend systems and interfaces for payment and wealth platforms using React, Next.js and TypeScript",
      "Designed backend services in Python (FastAPI) for a cross-border BBPS-BOU payment pipeline with NPCI",
      "Worked on data pipelines, API integrations, and analytics tracking to support product and operational decisions",
      "Enabled faster feature iterations through full-stack integration and CI/CD deployment workflows",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Python (FastAPI)",
      "NoSQL",
      "CI/CD",
      "Analytics Tracking",
    ],
    impact: [
      "Contributed to development of fintech payment and investment infrastructure used across multiple financial products, supporting cross-border transaction workflows.",
      "Enabled faster feature iterations by integrating analytics tracking and CI/CD pipelines across services (75+ backend test cases implemented for reliability).",
    ],
    reflection:
      "This role exposed me to how engineering, compliance, and product decisions interact in fintech systems.",
  },
  {
    company: "SustainMall",
    role: "Full-Stack Developer Intern",
    period: "Jul 2023 – Aug 2023",
    location: "Remote (Delhi, India)",
    problem:
      "Consumers interested in sustainable products often struggle to discover and trust eco-friendly products online.",
    whatIWorkedOn: [
      "Built category pages, product listings, authentication and checkout flows using React and Next.js",
      "Implemented personalized recommendation infrastructure and analytics-ready data capture",
      "Collaborated with team on architecture decisions and development workflows",
    ],
    technologies: ["React", "Next.js", "Node.js", "MySQL", "CI/CD"],
    impact: [
      "Contributed to development of core marketplace features including product discovery, authentication, and checkout flows.",
      "Received a Letter of Recommendation from the CEO for strong engineering contribution and collaboration within a 10+ developer team.",
    ],
  },
  {
    company: "The Legal Trust Network",
    role: "Backend Developer Intern",
    period: "May 2023 –Jul 2023",
    location: "Remote (Delhi, India)",
    problem:
      "Legal professionals and clients need secure digital platforms for communication, document sharing, and workflow coordination.",
    whatIWorkedOn: [
      "Built backend features including pagination, callbacks and reminder systems",
      "Designed backend workflows supporting notifications and event-driven processes",
    ],
    technologies: ["Go", "Echo", "MySQL", "REST APIs", "Postman"],
    impact: [
      "Improved backend workflow reliability by implementing pagination, callbacks, and reminder systems for user engagement features.",
      "Enabled event-driven notifications and reminder flows that supported increased user activity across the platform.",
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6">
        <div className="mx-auto max-w-4xl">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Experience
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Work Experience
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Experienced in building scalable systems within the fintech, AI
            infrastructure, and E-commerce sectors
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
                      <span className="inline-block text-sm font-medium text-muted-foreground whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-[7.25rem] top-1.5 hidden h-2.5 w-2.5 rounded-full border-2 border-accent bg-background md:block" />

                    {/* Content */}
                    <div className="flex-1 rounded-xl border border-border/50 bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-0.5 md:ml-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-xl font-semibold text-foreground">
                            {job.company}
                          </h2>
                          <p className="mt-1 text-muted-foreground">
                            {job.role}
                            {job.location && ` | ${job.location}`}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-accent">
                          Context
                        </h3>
                        <p className="mt-2 text-muted-foreground leading-relaxed">
                          {job.problem}
                        </p>
                      </div>

                      {job.whatIWorkedOn && (
                        <div className="mt-6">
                          <h3 className="text-sm font-medium uppercase tracking-wider text-accent">
                            What I Worked On
                          </h3>
                          <ul className="mt-3 flex flex-col gap-2">
                            {job.whatIWorkedOn.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-muted-foreground"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="mt-6">
                        <h3 className="text-sm font-medium uppercase tracking-wider text-accent">
                          Technologies
                        </h3>
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
                        <h3 className="text-sm font-medium uppercase tracking-wider text-accent">
                          Impact
                        </h3>
                        <ul className="mt-3 flex flex-col gap-2">
                          {job.impact.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {job.reflection && (
                        <div className="mt-6 rounded-lg bg-accent/5 border border-accent/20 p-4">
                          <p className="text-sm text-muted-foreground italic">
                            {job.reflection}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
