import React, { useState } from "react";
import { cn } from "../lib/utils";

const skillGroups = {
  languages: [
    "Java",
    "TypeScript",
    "JavaScript",
    "Python",
    "SQL",
  ],

  frontend: [
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "HTML/CSS",
  ],

  backend: [
    "Spring Boot",
    "Node.js",
    "Express.js",
    "FastAPI",
    "REST APIs",
    "WebSockets",
  ],

  databases: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
  ],

  ai: [
    "Random Forest",
    "Scikit-learn",
    "LangChain",
    "RAG Architecture",
    "Gemini LLM",
  ],

  auth: [
    "JWT Authentication",
    "RBAC",
    "OAuth2",
  ],

  tools: [
    "Docker",
    "Git/GitHub",
    "Postman",
    "AWS S3",
    "Prometheus",
    "Grafana",
  ],

  testing: [
    "Playwright",
    "Selenium",
    "End-to-End Testing",
  ],
};

const categories = [
  "all",
  "languages",
  "frontend",
  "backend",
  "databases",
  "ai",
  "auth",
  "tools",
  "testing",
];

const categoryIcons = {
  languages: "💻",
  frontend: "🎨",
  backend: "⚙️",
  databases: "🗄️",
  ai: "🤖",
  auth: "🔐",
  tools: "🛠️",
  testing: "🧪",
};

const SkillCategoryCard = ({ title, skills }) => {
  return (
    <div
      className="
        bg-card
        border
        border-border
        rounded-2xl
        p-6
        hover:border-primary/50
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">
          {categoryIcons[title]}
        </span>

        <h3 className="text-xl font-bold capitalize">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-4
              py-2
              rounded-full
              bg-primary/10
              text-primary
              border
              border-primary/20
              text-sm
              font-medium
              transition-all
              duration-300
              hover:bg-primary
              hover:text-primary-foreground
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const displayedGroups =
    activeCategory === "all"
      ? Object.entries(skillGroups)
      : [[activeCategory, skillGroups[activeCategory]]];

  return (
    <section
      id="skills"
      className="py-32 px-4 bg-secondary/20"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My{" "}
            <span className="text-primary">
              Skills
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build
            scalable web, mobile, backend, and AI
            powered applications.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category)
              }
              className={cn(
                "px-5 py-2.5 rounded-full font-medium capitalize transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-glow scale-105"
                  : "bg-secondary text-foreground hover:bg-secondary/80 hover:scale-105"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayedGroups.map(([category, skills]) => (
            <SkillCategoryCard
              key={category}
              title={category}
              skills={skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;