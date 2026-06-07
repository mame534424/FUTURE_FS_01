import React, { useEffect, useRef } from 'react'
import { cn } from '../lib/utils';

const skills = [
    // Languages
    { name: "Java", level: 85, category: "languages" },
    { name: "TypeScript", level: 85, category: "languages" },
    { name: "JavaScript", level: 90, category: "languages" },
    { name: "Python", level: 80, category: "languages" },
    { name: "SQL", level: 80, category: "languages" },

    // Frontend
    { name: "React", level: 90, category: "frontend" },
    { name: "Next.js", level: 85, category: "frontend" },
    { name: "React Native", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },
    { name: "HTML/CSS", level: 95, category: "frontend" },

    // Backend
    { name: "Spring Boot", level: 80, category: "backend" },
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Express.js", level: 85, category: "backend" },
    { name: "FastAPI", level: 75, category: "backend" },
    { name: "REST APIs", level: 85, category: "backend" },
    { name: "WebSockets", level: 80, category: "backend" },

    // Databases
    { name: "PostgreSQL", level: 80, category: "databases" },
    { name: "MySQL", level: 75, category: "databases" },
    { name: "MongoDB", level: 70, category: "databases" },

    // AI & ML
    { name: "Random Forest", level: 70, category: "ai" },
    { name: "Scikit-learn", level: 70, category: "ai" },
    { name: "LangChain", level: 65, category: "ai" },
    { name: "RAG Architecture", level: 65, category: "ai" },
    { name: "Gemini LLM", level: 60, category: "ai" },

    // Auth & Security
    { name: "JWT Authentication", level: 80, category: "auth" },
    { name: "RBAC", level: 75, category: "auth" },
    { name: "OAuth2", level: 70, category: "auth" },

    // DevOps & Tools
    { name: "Docker", level: 75, category: "tools" },
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Postman", level: 85, category: "tools" },
    { name: "AWS S3", level: 75, category: "tools" },
    { name: "Prometheus", level: 60, category: "tools" },
    { name: "Grafana", level: 60, category: "tools" },

    // Testing
    { name: "Playwright", level: 60, category: "testing" },
    { name: "Selenium", level: 60, category: "testing" },
    { name: "End-to-End Testing", level: 65, category: "testing" },
];

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

const SkillCard = ({ skill, index }) => {
    const cardRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && progressRef.current) {
                    progressRef.current.style.width = skill.level + "%";
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [skill.level]);

    return (
        <div
            ref={cardRef}
            className='bg-card p-6 rounded-lg shadow-sm border border-border card-hover hover:border-primary/50 transition-all'
            style={{
                animation: `fade-in-up 0.6s ease-out forwards`,
                animationDelay: `${index * 0.05}s`,
                opacity: 0
            }}
        >
            <div className='text-left mb-3 flex justify-between items-center'>
                <h3 className='font-bold text-lg'>{skill.name}</h3>
                <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full'>{skill.level}%</span>
            </div>
            <div className='w-full bg-secondary/50 h-3 rounded-full overflow-hidden'>
                <div
                    ref={progressRef}
                    className='bg-gradient-to-r from-primary to-primary/70 h-3 rounded-full origin-left transition-all duration-1000 ease-out'
                    style={{ width: '0%' }}
                />
            </div>
        </div>
    );
};

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = React.useState("all");

    const filteredSkills = skills.filter((skill) =>
        activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id='skills'
            className='py-32 px-4 relative bg-secondary/20'
        >
            <div
                className='container mx-auto max-w-6xl'
            >
                <h2
                    className='text-5xl md:text-6xl font-bold mb-16 text-center'
                >My {" "}
                    <span
                        className='text-primary'
                    >Skills</span>
                </h2>
                <div
                    className='flex flex-wrap justify-center gap-3 mb-16'
                >
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn('px-6 py-3 rounded-full transition-all duration-300 capitalize font-medium text-sm sm:text-base',
                                activeCategory === category ? 'bg-primary text-primary-foreground shadow-glow scale-105' : 'bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105')} >

                            <span>{category}</span>
                        </button>))}
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    {filteredSkills.map((skill, key) => (
                        <SkillCard key={key} skill={skill} index={key} />
                    ))}
                </div>
            </div>
        </section>

    )
};

export default SkillsSection
