import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "services", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "الرئيسية", id: "home" },
    { name: "خدماتنا", id: "services" },
    { name: "اتصل بنا", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-gold/20" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <Link to="/" onClick={() => scrollToSection("home")} className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <Logo size={window.innerWidth < 640 ? 36 : 48} className="group-hover:scale-110 transition-transform duration-500" />
          <span className="font-serif text-base sm:text-xl tracking-widest gold-text-gradient font-bold uppercase truncate max-w-[150px] sm:max-w-none">
            Rusul Optics
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 relative group ${
                activeSection === link.id ? "text-gold" : "text-stone-400 hover:text-gold"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full ${activeSection === link.id ? 'w-full' : ''}`} />
            </button>
          ))}
          <a 
            href="https://wa.me/9647725330777"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-gold text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-black transition-all duration-500 rounded-full"
          >
            احجز الآن
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center px-6"
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="flex flex-col gap-10 items-center w-full max-w-xs">
              {navLinks.map((link) => (
                <motion.div key={link.id} variants={linkVariants}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`text-3xl font-serif tracking-[0.2em] uppercase transition-all duration-300 ${
                      activeSection === link.id ? "text-gold" : "text-stone-500 hover:text-gold"
                    }`}
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}
              
              <motion.div variants={linkVariants} className="w-full pt-6">
                <a 
                  href="https://wa.me/9647725330777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-5 gold-gradient text-black font-bold rounded-full text-lg tracking-widest uppercase shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                >
                  احجز الآن
                </a>
              </motion.div>

              <motion.div variants={linkVariants} className="flex gap-6 mt-8">
                <a 
                  href="https://www.instagram.com/rusul.optic?igsh=MXRoa201MjNteWxrdQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.tiktok.com/@rusuloptics?_r=1&_t=ZS-94vcCRCVS54"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-all"
                >
                  <TikTokIcon size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
