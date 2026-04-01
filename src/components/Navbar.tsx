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
      const sections = ["home", "services", "contact-lenses", "contact"];
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
    { name: "الرئيسية", id: "home", path: "/" },
    { name: "خدماتنا", id: "services", path: "/services" },
    { name: "العدسات اللاصقة", id: "contact-lenses", path: "/contact-lenses" },
    { name: "اتصل بنا", id: "contact", path: "/contact" },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsOpen(false);
    
    // If we are on the home page and the link is an anchor section
    if (location.pathname === "/" && (link.id === "home" || link.id === "services" || link.id === "contact-lenses" || link.id === "contact")) {
      const element = document.getElementById(link.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-20px",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 10 },
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
        <Link to="/" onClick={() => handleNavClick(navLinks[0])} className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <Logo size={48} className="group-hover:scale-110 transition-transform duration-500 sm:w-12 sm:h-12 w-9 h-9" />
          <span className="font-serif text-base sm:text-xl tracking-widest gold-text-gradient font-bold uppercase truncate max-w-[150px] sm:max-w-none">
            Rusul Optics
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => handleNavClick(link)}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 relative group ${
                (location.pathname === link.path || (link.id === "home" && location.pathname === "/")) ? "text-gold" : "text-stone-400 hover:text-gold"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full ${(location.pathname === link.path || (link.id === "home" && location.pathname === "/")) ? 'w-full' : ''}`} />
            </Link>
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
          className="md:hidden text-gold z-50 p-2 relative w-10 h-10 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col gap-1.5 w-6 items-end">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className="h-0.5 bg-gold block rounded-full origin-center transition-all duration-300"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0, width: "70%" }}
              className="h-0.5 bg-gold block rounded-full transition-all duration-300"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className="h-0.5 bg-gold block rounded-full origin-center transition-all duration-300"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center px-6"
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <motion.div 
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col gap-10 items-center w-full max-w-xs relative z-10"
            >
              {navLinks.map((link) => (
                <motion.div key={link.id} variants={linkVariants}>
                  <Link
                    to={link.path}
                    onClick={() => handleNavClick(link)}
                    className={`text-3xl font-serif tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                      (location.pathname === link.path || (link.id === "home" && location.pathname === "/")) ? "text-gold" : "text-stone-500 hover:text-gold"
                    }`}
                  >
                    {link.name}
                    <motion.span 
                      initial={{ width: 0 }}
                      animate={{ width: (location.pathname === link.path || (link.id === "home" && location.pathname === "/")) ? "100%" : 0 }}
                      className="absolute -bottom-2 left-0 h-px bg-gold/50"
                    />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div variants={linkVariants} className="w-full pt-6">
                <a 
                  href="https://wa.me/9647725330777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-5 gold-gradient text-black font-bold rounded-2xl text-xl tracking-widest uppercase shadow-[0_10px_40px_rgba(212,175,55,0.2)] active:scale-95 transition-transform"
                >
                  احجز الآن
                </a>
              </motion.div>

              <motion.div variants={linkVariants} className="flex gap-8 mt-6">
                <a 
                  href="https://www.instagram.com/rusul.optic?igsh=MXRoa201MjNteWxrdQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-gold/10 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-all hover:bg-gold/5"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.tiktok.com/@rusuloptics?_r=1&_t=ZS-94vcCRCVS54"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-gold/10 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-all hover:bg-gold/5"
                >
                  <TikTokIcon size={24} />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

  );
}
