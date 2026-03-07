import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const articles = [
  {
    title: "Why Most Fintech Startups Fail at Compliance",
    category: "Product Insights",
    date: "February 2024",
    description: "A deep dive into the common compliance pitfalls that sink promising fintech companies, and how to avoid them.",
    readTime: "8 min read",
    href: "#"
  },
  {
    title: "The Hidden Costs of Microservices",
    category: "Technical",
    date: "January 2024",
    description: "When does the microservices architecture make sense, and when does it create more problems than it solves?",
    readTime: "12 min read",
    href: "#"
  },
  {
    title: "Building for Scale vs. Building for Speed",
    category: "Startup Analysis",
    date: "December 2023",
    description: "The eternal startup dilemma: when to prioritize technical debt repayment vs. shipping new features.",
    readTime: "6 min read",
    href: "#"
  },
  {
    title: "Product Engineering: Beyond the Code",
    category: "Product Insights",
    date: "November 2023",
    description: "How thinking like a product manager makes you a better engineer, and why the distinction is artificial.",
    readTime: "10 min read",
    href: "#"
  },
  {
    title: "ML in Production: Lessons from Ciroos.ai",
    category: "Technical",
    date: "October 2023",
    description: "What we learned scaling ML inference to handle millions of predictions per day.",
    readTime: "15 min read",
    href: "#"
  },
  {
    title: "The Sustainability Tech Stack",
    category: "Startup Analysis",
    date: "September 2023",
    description: "How technology can help verify and promote sustainable business practices at scale.",
    readTime: "7 min read",
    href: "#"
  },
  {
    title: "IIT to Startups: A Non-Traditional Path",
    category: "Personal",
    date: "August 2023",
    description: "Reflections on choosing the startup path over traditional campus placements.",
    readTime: "5 min read",
    href: "#"
  },
  {
    title: "Real-time Systems: A Practical Guide",
    category: "Technical",
    date: "July 2023",
    description: "Everything you need to know about building real-time features with WebSockets, SSE, and beyond.",
    readTime: "18 min read",
    href: "#"
  }
]

const categories = ["All", "Product Insights", "Technical", "Startup Analysis", "Personal"]

export default function WritingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6">
        <div className="mx-auto max-w-4xl">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">Writing</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Thoughts & Insights
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Product insights, startup analysis, technical deep-dives, and lessons learned from building at the intersection of engineering and product.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="mt-12 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="mt-12 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col">
            {articles.map((article, index) => (
              <ArticleRow key={index} article={article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ArticleRow({ article }: { article: typeof articles[0] }) {
  return (
    <Link 
      href={article.href}
      className="group flex flex-col gap-4 border-b border-border/50 py-8 first:pt-0 last:border-0 md:flex-row md:items-start md:justify-between"
    >
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            {article.category}
          </span>
          <span className="text-sm text-muted-foreground">{article.date}</span>
        </div>
        
        <h2 className="mt-3 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
          {article.title}
        </h2>
        
        <p className="mt-2 text-muted-foreground leading-relaxed">
          {article.description}
        </p>
      </div>
      
      <div className="flex items-center gap-4 md:flex-col md:items-end">
        <span className="text-sm text-muted-foreground">{article.readTime}</span>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
      </div>
    </Link>
  )
}
