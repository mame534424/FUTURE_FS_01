import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section
    id="about"
    className='mx-auto py-32 px-4 relative'
    >
        <div className='container mx-auto max-w-6xl'
        >
            <h2 className='text-5xl md:text-6xl font-bold mb-16 text-center'>
                About {" "}
                <span className='text-primary'>
                    Me
                </span>
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                <div className='space-y-8 order-2 lg:order-1'>
                    <h3 className='text-3xl md:text-4xl font-bold'
                    >Passionate <span className='text-primary'>Web Developer</span></h3>
                    <p className='text-muted-foreground text-lg leading-relaxed'
                    >I'm a dedicated developer who enjoys turning ideas into real projects. I work with modern web technologies like React, Tailwind CSS, and backend tools such as MERN stack. I focus on writing clean, simple, and efficient code.
                    </p>

                    <p className='text-muted-foreground text-lg leading-relaxed'
                    >
I love building fast, user-friendly web applications. I'm constantly learning new technologies to grow as a full-stack developer. My goal is to create useful and meaningful digital products that make a real impact.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 pt-6'
                    >
                        <a href="#contact" className='cosmic-button text-center text-lg py-3'>
                            Get In Touch
                        </a>

                        <a href="/Mohammed_Abrar_CV_1.pdf"
          download="Mohammed_Abrar_CV_1.pdf" className='px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-colors duration-300 text-center font-semibold'
          aria-label="Download Mohammed Abrar CV"
          >
                                Download CV
                            </a>
                    </div>
                </div>
                <div
                className='grid grid-cols-1 gap-6 order-1 lg:order-2'
                >
                   <div
                   className='gradient-border p-7 card-hover bg-card/50 backdrop-blur border-2 border-primary/20 hover:border-primary/50 transition-all'>
                        <div
                        className='flex items-start gap-4'
                        >
                            <div
                            className='p-4 rounded-lg bg-primary/15'
                            >
                                <Code className='w-7 h-7 text-primary'/>
                            </div>
                            <div
                            className='text-left'
                            >
                                <h4 className='font-bold text-xl'>
                                    Frontend Development
                                </h4>
                                <p
                                className='text-muted-foreground text-sm mt-2'
                                >
                                    Building responsive, interactive, and user-friendly web interfaces using React and Tailwind CSS.
                                </p>
                            </div>
                        </div>

                    </div> 
                    <div
                   className='gradient-border p-7 card-hover bg-card/50 backdrop-blur border-2 border-primary/20 hover:border-primary/50 transition-all'>
                     <div
                         className='flex items-start gap-4'
                         >
                             <div
                             className='p-4 rounded-lg bg-primary/15'
                             >
                                 <User className='w-7 h-7 text-primary'/>
                             </div>
                             <div
                             className='text-left'
                             >
                                 <h4 className='font-bold text-xl'>
                                     Backend & APIs   
                                 </h4>
                                 <p
                                 className='text-muted-foreground text-sm mt-2'
                                 >
                                     Designing secure, efficient, and scalable backend systems with Node.js, Express, MongoDB, and RESTful APIs.
                                 </p>
                             </div>
                         </div>
                     </div> 
                     <div
                    className='gradient-border p-7 card-hover bg-card/50 backdrop-blur border-2 border-primary/20 hover:border-primary/50 transition-all'>
                     <div
                         className='flex items-start gap-4'
                         >
                             <div
                             className='p-4 rounded-lg bg-primary/15'
                             >
                                 <Briefcase className='w-7 h-7 text-primary'/>
                             </div>
                             <div
                             className='text-left'
                             >
                                 <h4 className='font-bold text-xl'>
                                     System Architecture & Security
                                 </h4>
                                 <p
                                 className='text-muted-foreground text-sm mt-2'
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
