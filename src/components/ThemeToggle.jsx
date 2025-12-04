import  { useEffect,useState } from 'react';

import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const ThemeToggle = () => {
  const [isDarkmode, setIsDarkmode] = useState(false);
  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkmode(true);
      document.documentElement.classList.add('dark');
    }
    else {
      setIsDarkmode(false);
      document.documentElement.classList.remove('light');
    }}, []);
  

  const toggleTheme = () => {
   if (isDarkmode) {
     document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
     setIsDarkmode(false);
   } else {
     document.documentElement.classList.add('dark');
     localStorage.setItem('theme', 'dark');
     setIsDarkmode(true);
   }
  }
  return (
    <button
      onClick={toggleTheme}
      className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300","focus:outline-hidden")}
      >
      {"  "}
      {isDarkmode ? (<Sun className="w-6 h-6 text-yellow-400" />) : (<Moon className="w-6 h-6 text-gray-800" />)}
      </button>
  )
}

export default ThemeToggle