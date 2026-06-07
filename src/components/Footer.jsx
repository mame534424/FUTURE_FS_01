import { ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer
    className='py-16 px-4 bg-card relative border-t-2 border-border mt-16 flex flex-wrap justify-between items-center gap-6'
    >
        <p
        className='text-sm text-muted-foreground font-medium'
        >
            &copy;{new Date().getFullYear()} Mohammed Abrar • All rights reserved
        </p>
        <a href="#hero"
        className='p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow'
        >
            <ArrowUp size={22}/>
        </a>
    </footer>
  )
}

export default Footer