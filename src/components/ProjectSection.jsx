import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: "E-Fuel — Fuel Availability & Queue Management",
    description:
      "Full-stack platform addressing fuel shortages with real-time availability, reservation, and admin dashboards. Mobile app for booking and live notifications.",
    image: "/projects/fuel.png",
    projectUrl: "https://fuel-admin-frontend.vercel.app/",
    githubUrl: "https://github.com/mame534424/fuel-management-system",
    Tags: ["Express.js", "Next.js", "React Native", "PostgreSQL"],
  },

  {
    id: 2,
    title: "Buna ChatApp — Real-Time Messaging Platform",
    description:
      "A modern real-time messaging platform with one-to-one and group chats, multimedia sharing, and an AI-powered assistant.",
    image: "/projects/chat-app.png",
    projectUrl: "#",
    githubUrl: "https://github.com/mame534424/buna-chatapp-frontend-",
    Tags: ["Spring Boot","React", "MySQL", "WebSockets", "Gemini LLM"],
  },

  {
    id: 3,
    title: "Smart Transformer Health Monitoring System",
    description:
      "An AI-powered system for transformer health prediction with RAG-powered engineering assistant and analytics dashboard.",
    image: "/projects/transformer.png",
    projectUrl: "https://transformer-dielectric-monitor.vercel.app/",
    githubUrl: "https://github.com/mame534424/transformer-dielectric-monitor",
    Tags: ["Next.js", "FastAPI", "Random Forest", "LangChain"],
  },
  {
    id: 4,
    title: "Kdame — Full-Stack E-Commerce Platform",
    description:
      "Full-stack PERN e-commerce platform featuring product management, cart & checkout flows, responsive React UI, and scalable REST API architecture.",
    image: "/projects/image.png",
    projectUrl: " https://www.loom.com/share/22d163bb666c4243b91f36be193b9073c",
    githubUrl: "https://github.com/mame534424/kdame-ecommerchttps://github.com/mame534424/FUTURE_FS_02",
    Tags: ["React", "Express.js", "PostgreSQL", "JWT Authentication"]
  },
  {
    id: 5,
    title: "SHEKET-mobile-app",
    description:
      "Mobile app for tracking shopping items and personal expenses. Clean interface, simple workflows.",
    image: "/projects/grocery-app.jpg",
    projectUrl: "#",
    githubUrl: "https://github.com/mame534424/sheket-2-",
    Tags: ["React-Native", "Sentry", "Clerk", "Supabase"]
  },{
    id: 6,
    title: "brand websites and landing page for lumen",
    description:
      "🚀 Lumen Labs is a modern company website built for a software agency focused on AI-assisted software development, business digitalization, and innovative technology solutions.",
    image: "/projects/lumen.png",
    projectUrl: "https://lumen-labs-tech.vercel.app/",
    githubUrl: "https://github.com/mame534424/lumen-next",
    Tags: ["Next.js", "Tailwind CSS", "Vercel"]
  }
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && cardRef.current) {
          cardRef.current.style.opacity = '1';
          cardRef.current.style.transform = 'translateX(0)';
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="
        group bg-card rounded-xl shadow-lg border border-border 
        transition-all duration-500 project-card-hover overflow-hidden
      "
      style={{
        opacity: 0,
        transform: index % 2 === 0 ? 'translateX(-60px)' : 'translateX(60px)',
      }}
    >
      {/* Image with parallax effect */}
      <div className="h-56 w-full overflow-hidden rounded-t-xl relative">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-full object-cover transition-transform duration-500 
            group-hover:scale-125 group-hover:rotate-1
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-7">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.Tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="
                px-3 py-1 text-xs font-semibold rounded-full 
                border border-primary/40
                bg-primary/10 text-primary
                backdrop-blur-sm transition-all duration-300
                group-hover:border-primary/80 group-hover:bg-primary/20
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors duration-300 hover:scale-125"
            >
              <ExternalLink size={22} />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors duration-300 hover:scale-125"
            >
              <Github size={22} />
            </a>
          </div>
          <div className="text-primary/60 group-hover:text-primary transition-colors">
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center tracking-tight">
            Featured 
            <span className="text-primary ml-3 block md:inline">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-2 max-w-2xl mx-auto text-lg">
            A showcase of my latest work — clean UI, strong visuals, and solid engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-20">
          <a
            className="
              cosmic-button inline-flex items-center gap-3
              text-lg font-semibold
            "
            href="https://github.com/mame534424"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore More on Github <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
