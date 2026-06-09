import React from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
      <div
        className={cn(
          "max-w-6xl mx-auto",
          "transition-all duration-300"
        )}
      >
        <nav
          className={cn(
            "rounded-2xl border",
            "transition-all duration-300",
            "px-6 py-4",
            isScrolled
              ? "bg-background/80 backdrop-blur-xl border-border shadow-lg"
              : "bg-background/40 backdrop-blur-md border-border/50"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}

            <a
              href="#hero"
              className="font-bold text-xl tracking-tight"
            >
              <span className="text-foreground">
                Mame_Ab
              </span>

              <span className="text-primary">
                Portfolio
              </span>
            </a>

            {/* Desktop */}

            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    px-4 py-2
                    rounded-full
                    text-sm
                    font-medium
                    text-foreground/80
                    hover:text-primary
                    hover:bg-primary/10
                    transition-all
                    duration-300
                  "
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Toggle */}

            <button
              onClick={() =>
                setIsMenuOpen(!isMenuOpen)
              }
              className="
                md:hidden
                p-2
                rounded-lg
                hover:bg-primary/10
                transition-all
              "
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}

          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300",
              isMenuOpen
                ? "max-h-96 opacity-100 mt-5"
                : "max-h-0 opacity-0"
            )}
          >
            <div className="pt-4 border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() =>
                    setIsMenuOpen(false)
                  }
                  className="
                    block
                    px-4
                    py-3
                    rounded-xl
                    text-foreground/80
                    hover:text-primary
                    hover:bg-primary/10
                    transition-all
                  "
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;