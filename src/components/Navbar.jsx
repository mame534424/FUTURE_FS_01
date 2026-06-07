import React from 'react'
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems=[{name:"Home",href:"#hero"},{name:"About",href:"#about"},{name:"Skills",href:"#Skills"},{name:"Projects",href:"#projects"},
{name:"Contact",href:"#contact"}]

const Navbar = () => {
    const [isScrolled,setIsScrolled]=React.useState(false);
    const [isMenuOpen,setIsMenuOpen]=React.useState(false);

    React.useEffect(()=>{
        const handleScroll=()=>{
            setIsScrolled(window.scrollY>10);};
        window.addEventListener('scroll',handleScroll);
        return()=>{
            window.removeEventListener('scroll',handleScroll);
        }},[]);

  return (
   <nav className={cn("fixed w-full z-40 transition-all duration-300",isScrolled? "py-3 bg-background/80 backdrop-blur-md shadow-md":"py-5 ")}>
    <div className='container flex items-center justify-between'>
        <a className='text-xl font-bold text-primary flex items-center' href='#hero'>
            <span className='relative z-10'> {" "} <span 
            className='text-glow text-foreground'>Mame_Ab </span>Portfolio
            </span>
        </a>
        
        
        
        {/* {desktop nav} */}
        
        
        
        <div className='hidden md:flex space-x-8'>
            {navItems.map((item,key)=>(
                <a key={key} className='text-foreground/80 hover:text-primary transition-colors duration-300'
                 href={item.href}>{item.name}</a>
            ))}
        
        
        
        </div>
        
        
        
        {/* {mobile nav} */}
        
        
        
        <button className='md:hidden z-50 text-foreground p-2'
        aria-label={isMenuOpen? "Close Menu":"Open Menu" }
        onClick={()=>{setIsMenuOpen((prev)=>!prev)}}>
            {isMenuOpen? <X size={24}/> : <Menu size={24}/> }

        </button>
        

        <div className={cn("fixed inset-0 bg-background/70 backdrop-blur-md flex flex-col items-center justify-center ","transition-all duration-300 md:hidden",
            isMenuOpen? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none",
        )}>
        <div className='flex flex-col space-y-8 text-xl '>
            {navItems.map((item,key)=>(
                <a key={key} className='text-foreground/80 hover:text-primary transition-colors duration-300'
                 href={item.href}
                 onClick={()=>{setIsMenuOpen(false)}}
                 >
                    
                    {item.name}</a>
            ))}
        </div>
        </div>
    </div>


   </nav>
  )
}

export default Navbar