import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import Logo from "../components/Logo";
import Services from "./Services";
import Contact from "./Contact";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SEO 
        title="الرئيسية" 
        description="عيادة بصريات متكاملة - فحص وتقويم البصر، نظارات شمسية وطبية، وعدسات لاصقة طبية وتجميلية."
      />
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000&auto=format&fit=crop" 
            alt="Professional Eye Exam" 
            className="w-full h-full object-cover"
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
            <p>فحص وتقويم البصر • نظارات شمسية طبية</p>
            <p>نظارات طبية • عدسات لاصقة طبية وتجميلية</p>
            <p>فحص الحول • خدمات متكاملة تخص العيون</p>
          </div>

          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block px-8 md:px-10 py-3 md:py-4 gold-gradient text-black font-bold text-base md:text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            استكشف خدماتنا
          </button>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-gold/50 cursor-pointer"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-serif text-4xl md:text-6xl mb-6"
            >
              لماذا تختار بصريات المستقبل؟
            </motion.h2>
            <div className="w-24 h-1 gold-gradient mx-auto mb-8" />
            <p className="text-stone-400 max-w-2xl mx-auto text-lg font-arabic">
              نحن نلتزم بتقديم أعلى معايير الجودة والدقة في كل خدمة نقدمها، مع التركيز على راحتكم وسلامة عيونكم.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "خبرة طبية متخصصة",
                desc: "فريق من الخبراء المتخصصين في فحص وتقويم البصر بأحدث الأساليب العلمية.",
                icon: "🩺"
              },
              {
                title: "أحدث التقنيات",
                desc: "نستخدم أحدث الأجهزة الرقمية لضمان دقة الفحص وجودة العدسات.",
                icon: "🔬"
              },
              {
                title: "ماركات عالمية",
                desc: "نوفر تشكيلة واسعة من أرقى الماركات العالمية للنظارات الطبية والشمسية.",
                icon: "💎"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-10 rounded-[40px] bg-black/40 border border-gold/10 hover:border-gold/30 transition-all duration-500 text-center group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-gold font-serif text-2xl mb-4">{item.title}</h3>
                <p className="text-stone-400 font-arabic leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
