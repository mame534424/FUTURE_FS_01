import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import { StarBackGround } from '../components/StarBackGround'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

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