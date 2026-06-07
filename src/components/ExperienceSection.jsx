import React from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Full-Stack Engineer",
    company: "Lumen Labs • Addis Ababa",
    period: "Oct 2025 — Present",
    bullets: [
      "Built and deployed professional client websites with responsive design, SEO optimization, and excellent performance scores.",
      "Developed secure backend systems with JWT authentication, role-based access control (RBAC), and protected API endpoints.",
      "Optimized database queries and backend workflows, improving application responsiveness and scalability.",
      "Designed RESTful APIs and created technical documentation for frontend and mobile integration.",
      "Collaborated on validation logic, security hardening, and scalable architectures using React, Express.js, Spring Boot, PostgreSQL, and MongoDB.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            Career Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Experience
            <span className="text-primary"> & Roles</span>
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-primary/30 pl-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative mb-10 bg-card border border-border rounded-2xl p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[42px] top-8 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Briefcase size={14} className="text-background" />
              </div>

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {exp.company}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-4">
                {exp.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-primary mt-1 flex-shrink-0"
                    />
                    <p className="text-muted-foreground leading-7">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;