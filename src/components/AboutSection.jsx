import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section
    id="about"
    className=' mx-auto py-24 px-4 relative'
    >
        {" "}
        <div className='container mx-auto max-w-5xl '
        >
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About {" "}
                <span className='text-primary'>
                    Me
                </span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3 className='text-3xl font-semibold'
                    >Passionate web developer</h3>
                    <p className='text-muted-foreground'
                    >I’m a dedicated developer who enjoys turning ideas into real projects.
I work with modern web technologies like React, Tailwind CSS, and backend tools such as MERN stack.
I focus on writing clean, simple, and efficient code.
Every day, I aim to learn something new and improve my skills.

                    </p>

                    <p className='text-muted-foreground'
                    >
I love building fast, user-friendly web applications.
I’m constantly learning new technologies to grow as a full-stack developer.
My goal is to create useful and meaningful digital products.

                    </p>
                    <div className='flex flex-col md:flex-row gap-4 pt-4 justify-center'
                    >
                        <a href="#contact" className='cosmic-button'>
                            Get In Touch
                        </a>

                        <a href="/Mohammed_Abrar_CV_1.pdf"
      download="Mohammed_Abrar_CV_1.pdf" className='px-4 py-2 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors duration-300 text-center'
      aria-label="Download Mohammed Abrar CV"
      >
                                Download CV
                            </a>
                    </div>
                </div>
                <div
                className='grid grid-cols-1 gap-6'
                >
                   <div
                   className='gradient-border p-6 card-hover '>
                        <div
                        className='flex items-start gap-4'
                        >
                            <div
                            className='p-3 rounded-full bg-primary/10'
                            >
                                <Code className='w-6 h-6 text-primary'/>
                            </div>
                            <div
                            className='text-left'
                            >
                                <h4 className='font-semibold text-lg'>
                                    Frontend Development
                                </h4>
                                <p
                                className='text-muted-foreground'
                                >
                                    Building responsive, interactive, and user-friendly web interfaces using React and Tailwind CSS.

                                </p>
                            </div>
                        </div>

                    </div> 
                    <div
                   className='gradient-border p-6 card-hover '>
                    <div
                        className='flex items-start gap-4'
                        >
                            <div
                            className='p-3 rounded-full bg-primary/10'
                            >
                                <User className='w-6 h-6 text-primary'/>
                            </div>
                            <div
                            className='text-left'
                            >
                                <h4 className='font-semibold text-lg'>
                                    Backend & APIs   
                                </h4>
                                <p
                                className='text-muted-foreground'
                                >
                                    Designing secure, efficient, and scalable backend systems with Node.js, Express, MongoDB, and RESTful APIs.

                                </p>
                            </div>
                        </div>
                    </div> 
                    <div
                   className='gradient-border p-6 card-hover '>
                    <div
                        className='flex items-start gap-4'
                        >
                            <div
                            className='p-3 rounded-full bg-primary/10'
                            >
                                <Briefcase className='w-6 h-6 text-primary'/>
                            </div>
                            <div
                            className='text-left'
                            >
                                <h4 className='font-semibold text-lg'>
                                    System Architecture & Security
                                </h4>
                                <p
                                className='text-muted-foreground'
                                >
                                    Implementing secure authentication, role-based access, performance optimization, and scalable system designs.
       
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>

            </div>
        </div>

    </section>
  )
}

export default AboutSection