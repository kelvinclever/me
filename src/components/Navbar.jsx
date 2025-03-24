import { useEffect, useState, Suspense, lazy } from "react";
import { MobileMenu } from "./MobileMenu";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className={`
      fixed top-0 w-full z-40 
      transition-all duration-300 ease-in-out
      ${scrolled 
        ? "bg-black/80 backdrop-blur-lg shadow-lg py-2" 
        : "bg-transparent py-4"}
      border-b border-white/5
    `}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="font-mono text-xl font-bold text-white group"
          >
            kelvin
            <span className="text-blue-500 inline-block transition-transform group-hover:translate-x-1">
              @teach2give
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`
                  px-4 py-2 rounded-md relative text-sm font-medium
                  transition-all duration-300 ease-in-out
                  ${activeSection === item.href.slice(1) 
                    ? "text-white" 
                    : "text-gray-400 hover:text-white"}
                  after:content-[''] after:absolute after:bottom-0 after:left-0
                  after:w-full after:h-0.5 after:rounded-full after:bg-blue-500
                  after:origin-left after:transition-transform after:duration-300
                  ${activeSection === item.href.slice(1) 
                    ? "after:scale-x-100" 
                    : "after:scale-x-0 hover:after:scale-x-100"}
                `}
              >
                {item.label}
              </a>
            ))}
            
            <a 
              href="#contact" 
              className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition-all duration-300 shadow-lg hover:shadow-blue-600/30"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-md z-50 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className={`
              w-6 h-0.5 bg-white rounded-full transition-all duration-300
              before:content-[''] before:absolute before:w-6 before:h-0.5 before:bg-white before:rounded-full
              after:content-[''] after:absolute after:w-6 after:h-0.5 after:bg-white after:rounded-full
              before:transition-all before:duration-300 after:transition-all after:duration-300
              ${menuOpen 
                ? "bg-transparent" 
                : "before:-translate-y-2 after:translate-y-2"}
              ${menuOpen && "before:rotate-45 before:translate-y-0 after:-rotate-45 after:translate-y-0"}
            `}></div>
          </button>
        </div>
      </div>

      <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>}>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Suspense>
    </nav>
  );
};