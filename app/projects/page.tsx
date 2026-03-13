"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, ChevronDown, ChevronUp } from "lucide-react";

const industryProjects = [
  {
    title: "BBPS Cross-Border Payments System | Zinc Money",
    shortDescription:
      "Backend infrastructure for enabling cross-border bill payments through NPCI's Bharat Bill Payment System.",
    detailedDescription:
      "Designed and implemented backend services for enabling cross-border bill payment workflows using the NPCI BBPS network. The system handled payment orchestration, transaction validation, and integration with external APIs for payment processing and settlement. The architecture focused on reliability, auditability, and regulatory compliance required for fintech transaction systems. This work involved designing service flows for payment initiation, handling asynchronous transaction callbacks, and maintaining transaction state across distributed services.",
    techStack: [
      "Python (FastAPI)",
      "Fintech APIs",
      "Payment Systems",
      "Transaction Processing",
      "Backend Architecture",
    ],
    github: null,
  },
  {
    title: "AI SRE GitHub MCP Integration | Ciroos.ai",
    shortDescription:
      "Integration enabling AI agents to analyze incidents using Git repositories and system logs.",
    detailedDescription:
      "Built integrations between Git repositories, GitHub, and internal observability systems using Model Context Protocol (MCP) servers. This allowed an AI-driven SRE system to retrieve repository history, inspect commits, and correlate code changes with production incidents. The integration enabled automated incident investigation workflows where the AI agent could analyze logs, query code history, and identify potential root causes during system failures.",
    techStack: [
      "Kubernetes",
      "Git",
      "GitHub APIs",
      "MCP Servers",
      "Observability",
      "AI Systems",
    ],
    github: null,
  },
];

const technicalProjects = [
  {
    title: "DSCoin Blockchain System",
    shortDescription:
      "Cryptocurrency system built from scratch implementing blockchain concepts including Merkle Trees, digital signatures, and proof validation.",
    detailedDescription:
      "Built a simplified cryptocurrency system implementing core blockchain primitives including transaction validation, Merkle tree construction, and block linking using SHA-256. The project focused on implementing reliable distributed data structures and understanding how blockchain systems maintain integrity and verification without relying on centralized control.",
    techStack: [
      "Java",
      "Blockchain",
      "Merkle Trees",
      "SHA-256",
      "Data Structures",
    ],
    github: "https://github.com/Kartikey-Agarwal911/COL106-Project",
  },
  {
    title: "Real-Time Multiplayer Maze Game",
    shortDescription:
      "Networked multiplayer maze game built using TCP sockets with real-time synchronization.",
    detailedDescription:
      "Developed a real-time multiplayer maze game in C++ using SDL2 for rendering and TCP sockets for network communication. The system synchronizes player movement across clients, manages shared game state, and handles latency challenges inherent in networked gameplay.",
    techStack: ["C++", "SDL2", "TCP Sockets", "Game Networking"],
    github: null,
  },
  {
    title: "Fake News Detection System",
    shortDescription:
      "NLP-based system for detecting misinformation using transformer models.",
    detailedDescription:
      "Built a machine learning pipeline for detecting misinformation in news articles using NLP techniques. Implemented preprocessing pipelines with NLTK and trained transformer-based models to classify content as real or misleading. The project explored how ML pipelines can support information verification systems.",
    techStack: ["Python", "BERT", "NLTK", "NLP", "Machine Learning"],
    github: null,
  },
  {
    title: "PrimusOS",
    shortDescription:
      "AI-assisted productivity system designed to automate routine tasks and provide contextual assistance.",
    detailedDescription:
      "Experimental AI-assisted productivity platform designed to automate routine tasks and provide contextual assistance. The system integrates natural language processing, voice interaction, and automation workflows to streamline daily productivity tasks.",
    techStack: [
      "Python",
      "NLP",
      "Scikit-learn",
      "GUI Framework",
      "Speech-to-Text",
    ],
    github: null,
  },
];

export default function ProjectsPage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderProjectsSection = (
    projects: any,
    title: any,
    description: any,
  ) => (
    <section className="mt-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
          {title}
        </h2>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project: any, index: any) => (
            <div key={index}>
              <article
                onClick={() => toggleExpand(index)}
                className="group cursor-pointer rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                        aria-label="View source code"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    )}
                    {expandedIndex === index ? (
                      <ChevronUp className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </div>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech: any) => (
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

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index
                    ? "max-h-[500px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="rounded-xl border border-border/30 bg-card/50 p-6">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-accent mb-3">
                    About this project
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.detailedDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Portfolio
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Engineering projects across fintech infrastructure, AI systems,
            distributed systems, and machine learning.
          </p>
        </div>
      </section>

      {renderProjectsSection(
        industryProjects,
        "Industry Projects",
        "Systems built during professional work.",
      )}

      {renderProjectsSection(
        technicalProjects,
        "Technical Projects",
        "Academic and independent technical builds.",
      )}
    </div>
  );
}
