import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React from 'react';

const projects = [
  {
    id: 1,
    title: "E-Fuel — Fuel Availability & Queue Management",
    description:
      "Full-stack platform addressing fuel shortages with real-time availability, reservation, and admin dashboards. Mobile app for booking and live notifications.",
    image: "/projects/efuel.png",
    projectUrl: "#",
    githubUrl: "https://github.com/mame534424",
    Tags: ["Express.js", "Next.js", "React Native", "PostgreSQL"],
  },

  {
    id: 2,
    title: "Buna ChatApp — Real-Time Messaging Platform",
    description:
      "A modern real-time messaging platform with one-to-one and group chats, multimedia sharing, and an AI-powered assistant.",
    image: "/projects/buna_chat.png",
    projectUrl: "#",
    githubUrl: "https://github.com/mame534424",
    Tags: ["Spring Boot", "MySQL", "WebSockets", "Gemini LLM"],
  },

  {
    id: 3,
    title: "Smart Transformer Health Monitoring System",
    description:
      "An AI-powered system for transformer health prediction with RAG-powered engineering assistant and analytics dashboard.",
    image: "/projects/transformer_monitor.png",
    projectUrl: "#",
    githubUrl: "https://github.com/mame534424",
    Tags: ["Next.js", "FastAPI", "Random Forest", "LangChain"],
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-center tracking-tight">
          Featured 
          <span className="text-primary ml-2">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          A showcase of my latest work — clean UI, strong visuals, and solid engineering.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                group bg-card rounded-xl shadow-sm border border-border 
                transition-all duration-300 hover:shadow-xl hover:-translate-y-2
              "
            >
              
              {/* Image */}
              <div className="h-48 w-full overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover transition-transform duration-500 
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.Tags.map((tag, index) => (
                    <span
                      key={index}
                      className="
                        px-3 py-1 text-xs font-medium rounded-full 
                        border border-primary/20
                        bg-secondary/20 text-secondary-foreground
                        backdrop-blur-sm
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      className="text-foreground/70 hover:text-primary transition"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/70 hover:text-primary transition"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <a
            className="
              cosmic-button w-fit flex items-center mx-auto gap-2
              text-secondary hover:underline text-lg font-medium
            "
            href="https://github.com/mame534424"
            target="_blank"
          >
            Check My Github <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;
