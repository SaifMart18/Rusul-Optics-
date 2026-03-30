import { motion } from "motion/react";
import { ArrowLeft, Sparkles, Shield, Clock, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const italianGallery = [
  { id: "1", image: "/images/italy1.jpg", title: "Desio - Italian Luxury" },
  { id: "2", image: "/images/italy2.jpg", title: "Desio - Gray Elegance" },
  { id: "3", image: "/images/italy3.jpg", title: "Desio - Emerald Green" },
  { id: "4", image: "/images/italy4.jpg", title: "Desio - Amber Gold" },
  { id: "5", image: "/images/italy5.jpg", title: "Desio - Mystic Blue" }
];

export default function ItalianLenses() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <SEO 
        title="القسم الإيطالي" 
        description="عدسات Desio الإيطالية الفاخرة التي تجمع بين سحر الألوان الإيطالية والراحة الطبية الفائقة."
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <Link 
            to="/contact-lenses" 
            className="flex items-center gap-2 text-gold/60 hover:text-gold transition-colors group order-2 md:order-1"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-serif uppercase tracking-widest text-sm">العودة للأقسام</span>
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-right order-1 md:order-2"
          >
            <h1 className="text-gold font-serif text-5xl md:text-7xl mb-4">القسم الإيطالي</h1>
            <div className="w-24 h-1 gold-gradient ml-auto mb-6" />
            <p className="text-stone-400 text-xl font-arabic">عدسات Desio الإيطالية الفاخرة - سحر الألوان الإيطالية.</p>
          </motion.div>
        </div>

        {/* Brand Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 p-12 rounded-[40px] bg-zinc-900/30 border border-gold/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-serif uppercase tracking-widest mb-6">
                <Globe size={14} />
                <span>Italian Craftsmanship</span>
              </div>
              <h2 className="text-white font-serif text-4xl mb-6">Desio Italy</h2>
              <p className="text-stone-400 font-arabic text-lg leading-relaxed mb-8">
                تعتبر عدسات Desio الإيطالية رمزاً للأناقة والجمال في عالم العدسات اللاصقة. تتميز بألوانها الفريدة التي تعطي مظهراً طبيعياً وجذاباً، مع الحفاظ على أعلى معايير الراحة والجودة الطبية.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-6 rounded-3xl bg-black/40 border border-gold/10">
                  <Shield size={24} className="text-gold mb-3" />
                  <span className="text-stone-300 text-sm font-arabic text-center">جودة إيطالية</span>
                </div>
                <div className="flex flex-col items-center p-6 rounded-3xl bg-black/40 border border-gold/10">
                  <Clock size={24} className="text-gold mb-3" />
                  <span className="text-stone-300 text-sm font-arabic text-center">راحة فائقة</span>
                </div>
                <div className="flex flex-col items-center p-6 rounded-3xl bg-black/40 border border-gold/10">
                  <Sparkles size={24} className="text-gold mb-3" />
                  <span className="text-stone-300 text-sm font-arabic text-center">ألوان خلابة</span>
                </div>
              </div>
            </div>
            <div className="luxury-border rounded-[30px] overflow-hidden aspect-video">
              <img 
                src="/images/italy1.jpg" 
                alt="Desio Italian Lenses"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <h3 className="text-gold font-serif text-4xl mb-6">معرض الأعمال - القسم الإيطالي</h3>
            <p className="text-stone-400 font-arabic text-xl">استعراض لأجمل ألوان عدسات Desio الإيطالية.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {italianGallery.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-square rounded-[40px] overflow-hidden luxury-border"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-10 right-10 text-right translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white font-serif text-2xl">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
