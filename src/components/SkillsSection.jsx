import React from 'react'
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

const SkillsSection = () => {
    const [activeCategory,setActiveCategory]=React.useState("all");

    const filteredSkills=skills.filter((skill)=>
    activeCategory==="all" || skill.category===activeCategory
    );
return(
    <section id='Skills'
    className='py-24 px-4 relative bg-secondary/30'
    >
        <div
        className='container mx-auto max-w-5xl'
        >
            <h2
            className='text-3xl md:text-4xl font-bold mb-12 text-center'
            >My {"  "}
                <span
                className='text-primary'
                >Skills</span>
            </h2>
            <div
            className='flex flex-wrap justify-center gap-4 mb-12'
            >
                {categories.map((category,key)=>(
                    <button
                    key={key}
                    onClick={() => setActiveCategory(category)}
                    className={cn('px-5 py-4 rounded-full transition-colors duration-300 capitalize',
                     activeCategory===category? 'bg-primary text-primary-foreground':'bg-secondary/70 text-foreground hover:bg-secondary ' )} >  
                    
                        <span>{category}</span>
                    </button>))}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {filteredSkills.map((skill,key)=>(
                    <div
                    key={key}
                    className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                        <div className='text-left mb-4 '>
                            <h3
                            className='font-semibold text-lg'
                            >{skill.name}</h3>
                        </div>
                        <div className='width-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                            <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out'
                            style={{width:skill.level+"%"}}/>
                        </div>
                        <div className='text-right mt-1'>
                            <span className='text-sm text-muted-foreground '>{skill.level}</span>
                        </div>
            </div>))}
        </div>
    </div>
    </section>
  
)};

export default SkillsSection