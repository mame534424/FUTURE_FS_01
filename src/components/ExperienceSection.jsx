import React from 'react'

const experiences = [
  {
    id: 1,
    role: 'Full-Stack Engineer',
    company: 'Lumen Labs — Addis Ababa',
    period: 'Oct 2025 – Present',
    bullets: [
      'Developed and deployed 2 professional client websites with responsive UI, SEO optimization, and high performance.',
      'Implemented secure backend features including RBAC, JWT authentication workflows, and protected API routes.',
      'Optimized database queries and backend workflows, improving response times and load performance.',
      'Designed backend API architecture and authored technical endpoint documentation for frontend and mobile teams.',
      'Collaborated on security hardening, validation logic, and scalable system design using React, Express, Spring Boot, PostgreSQL, and MongoDB.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Experience
          <span className="text-primary ml-2">& Roles</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <div className="text-sm text-muted-foreground">{exp.period}</div>
              </div>

              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
