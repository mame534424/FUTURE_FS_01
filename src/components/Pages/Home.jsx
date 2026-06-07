import React from 'react'
import ThemeToggle from '../ThemeToggle'
import { StarBackGround } from '../StarBackGround'
import Navbar from '../Navbar'
import HeroSection from '../HeroSection'
import AboutSection from '../AboutSection'
import SkillsSection from '../SkillsSection'
import ExperienceSection from '../ExperienceSection'
import ProjectSection from '../ProjectSection'
import ContactSection from '../ContactSection'
import Footer from '../Footer'

const Home = () => {
  return (
    <div
     className='min-h-screen bg-background text-foreground overflow-hidden'
    >
        {/* {theme toggle} */}
        <ThemeToggle/>
        <StarBackGround/>
        <Navbar/>
        <main>
          <HeroSection/>
          <AboutSection/>
          <ExperienceSection/>
          <SkillsSection/>
          <ProjectSection/>
          <ContactSection/>
        </main>
        <Footer/>
    


        {/* {background effect} */}

        {/* {Navbar} */}

        {/* {main content} */}

        

    </div>
  )
}

export default Home
