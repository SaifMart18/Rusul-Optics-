import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import Logo from "../components/Logo";
import Services from "./Services";
import Contact from "./Contact";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactLensesSection from "../components/ContactLensesSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=2070" 
            alt="Luxury Optical Clinic" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-20 mb-6 md:mb-10"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full" />
            <Logo size={window.innerWidth < 768 ? 120 : 180} className="relative z-10" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-20 text-4xl sm:text-6xl md:text-8xl font-serif gold-text-gradient font-bold tracking-tighter mb-4 md:mb-6"
        >
          Rusul Optics
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-20 max-w-2xl w-full"
        >
          <p className="text-gold font-arabic text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8 leading-relaxed">
            عيادة بصريات متكاملة
          </p>
          <div className="flex flex-col gap-1 md:gap-2 text-stone-300 font-arabic text-base sm:text-lg md:text-xl mb-10 md:mb-12">
            <p>صنع النظارات الطبية بدرجات طبية • نظارات شمسية • فحص الحول</p>
            <p>عدسات لاصقة طبية وتجميلية • خدمات متكاملة تخص العيون</p>
          </div>

          <button 
            onClick={() => document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block px-8 md:px-10 py-3 md:py-4 gold-gradient text-black font-bold text-base md:text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            استكشف خدماتنا
          </button>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-gold/50 cursor-pointer"
          onClick={() => document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      {/* Contact Lenses Section */}
      <section id="contact-lenses">
        <ContactLensesSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
