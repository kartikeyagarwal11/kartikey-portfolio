import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeButton } from "@/components/common/ResumeButton";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6">
        <div className="mx-auto max-w-4xl">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            About
          </span>
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
                  <div className="aspect-square w-full max-w-[200px] overflow-hidden rounded-xl bg-secondary/50">
                    <img
                      src="/images/kartikey.jfif"
                      alt="Kartikey Agarwal"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      Kartikey Agarwal
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                      Engineer exploring product, strategy, and startup building
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href="https://github.com/Kartikey-Agarwal911"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://linkedin.com/in/kartikey-agarwal-ba3a19201"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="mailto:sbikartikey0911@gmail.com"
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
                  I'm an engineer who enjoys working at the intersection of
                  technology, products, and business problems. I graduated from
                  <span className="text-foreground font-medium">
                    {" "}
                    IIT Delhi
                  </span>{" "}
                  with a background in electrical engineering, but most of my
                  time during and after college has been spent building software
                  products and understanding how technology decisions translate
                  into real user and business outcomes.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">
                  The Journey
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  My early interest in systems and software started with
                  academic projects around distributed systems, machine
                  learning, and blockchain. Over time, that curiosity evolved
                  into a deeper interest in how products are actually built —
                  how engineering, product strategy, user experience, and
                  business goals all intersect.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Working in startups accelerated that learning. At
                  <span className="text-foreground font-medium">
                    {" "}
                    Zinc Money
                  </span>
                  , I worked across frontend and backend systems for fintech and
                  wealth products, contributing to features that supported
                  payment flows, analytics instrumentation, and internal product
                  experimentation. This involved collaborating closely with
                  product teams, engineers, and external partners like NPCI
                  while shipping production systems.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  At{" "}
                  <span className="text-foreground font-medium">Ciroos.ai</span>
                  , I worked on systems at the intersection of infrastructure,
                  observability, and AI — building integrations that help
                  intelligent systems analyze code repositories, logs, and
                  production incidents. The experience gave me exposure to how
                  developer tooling, system reliability, and automation
                  intersect at scale.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">
                  Product Thinking
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  While working as an engineer, I became increasingly interested
                  in the product side of building technology — understanding
                  user behavior, defining problems clearly, and making
                  data-informed decisions. I've worked with product analytics
                  tools like Mixpanel and Google Analytics to track product
                  usage and understand how users interact with features. I enjoy
                  breaking down successful products to understand why certain
                  decisions were made — from pricing models to growth loops and
                  product architecture.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  To deepen this interest, I'm currently part of the
                  <span className="text-foreground font-medium">
                    {" "}
                    NextLeap Product Management Fellowship
                  </span>
                  , where I'm studying product strategy, experimentation,
                  metrics, and product execution. Alongside this, I spend time
                  analyzing successful products and businesses to understand the
                  reasoning behind their product decisions.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">
                  Where I'm Headed
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  My long-term goal is to build and operate products end-to-end.
                  I'm particularly interested in roles where technology,
                  strategy, and execution intersect — whether that's product
                  management, founder's office roles, or early-stage product
                  building.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Coming from an engineering background gives me a strong
                  foundation in how systems actually get built, while my growing
                  interest in product thinking helps me approach problems from a
                  user and business perspective.
                </p>

                <h2 className="mt-12 text-2xl font-semibold text-foreground">
                  Beyond Work
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Outside of work, I enjoy staying active through MMA training,
                  strength training at the gym, and trekking whenever I get the
                  chance. Music is also a big part of how I relax and recharge.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  I'm always happy to connect with people building interesting
                  products, startups, or technology.
                </p>

                <div className="mt-12 flex flex-wrap gap-4 justify-center">
                  <ResumeButton />
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/contact">
                      Get in Touch
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
          <h2 className="text-2xl font-semibold text-foreground">
            Technical Skills
          </h2>

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
              skills={[
                "Git",
                "Mixpanel",
                "CI/CD",
                "Prometheus",
                "Grafana",
                "Google Analytics",
                "Figma",
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-medium uppercase tracking-widest text-accent">
        {title}
      </h3>
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
  );
}
