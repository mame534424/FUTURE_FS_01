import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React from 'react';

const projects = [
  {
    id: 1,
    title: "Manage Landing Page",
    description:
      "A responsive landing page for a project management tool, built with React and Tailwind CSS.",
    image: "/projects/Manage_landing_page.png",
    projectUrl: "https://dashing-douhua-2cfba9.netlify.app/#",
    githubUrl: "https://github.com/mame534424/manage-landing-page",
    Tags: ["React", "Tailwind CSS", "Express.js"],
  },

  {
    id: 2,
    title: "Web Hub",
    description:
      "A modern multi-section website hub showcasing reusable UI components and clean layouts made with React and Tailwind CSS.",
    image: "/projects/web_hub_page.png",
    projectUrl: "https://mame534424.github.io/web_hub/",
    githubUrl: "https://github.com/mame534424/web_hub",
    Tags: ["HTML", "Tailwind CSS"],
  },

  {
    id: 3,
    title: "Assembly Number Guessing Game",
    description:
      "A simple word-guessing game built with React and JavaScript, improving logic and problem-solving skills.",
    image: "/projects/assembly_game.png",
    projectUrl: "https://assembly-endgame-five-neon.vercel.app/",
    githubUrl: "https://github.com/mame534424/assembly-endgame",
    Tags: ["JavaScript", "React"],
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
