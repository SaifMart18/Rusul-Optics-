import { motion } from "motion/react";
import { ArrowLeft, Sparkles, Shield, Clock, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const englishGallery = [
  { id: "1", image: "/images/english1.jpg", title: "Alcon - Precision Vision" },
  { id: "2", image: "/images/english2.jpg", title: "Alcon - Daily Comfort" },
  { id: "3", image: "/images/english3.jpg", title: "Alcon - Hydration Pro" },
  { id: "4", image: "/images/english4.jpg", title: "Alcon - Clear View" },
  { id: "5", image: "/images/english5.jpg", title: "Alcon - Night Vision" },
  { id: "6", image: "/images/english6.jpg", title: "Alcon - Fresh Look" },
  { id: "7", image: "/images/english7.jpg", title: "Alcon - Pure Moist" },
  { id: "8", image: "/images/english8.jpg", title: "Alcon - Air Optix" }
];

export default function EnglishLenses() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <SEO 
        title="القسم الإنكليزي" 
        description="عدسات Alcon الإنكليزية الرائدة عالمياً في مجال العناية بالعين وتوفير رؤية نقية وصحية."
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
            <h1 className="text-gold font-serif text-5xl md:text-7xl mb-4">القسم الإنكليزي</h1>
            <div className="w-24 h-1 gold-gradient ml-auto mb-6" />
            <p className="text-stone-400 text-xl font-arabic">عدسات Alcon الإنكليزية - ريادة عالمية في صحة العين.</p>
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
                <span>British Excellence</span>
              </div>
              <h2 className="text-white font-serif text-4xl mb-6">Alcon UK</h2>
              <p className="text-stone-400 font-arabic text-lg leading-relaxed mb-8">
                تعد شركة Alcon الإنكليزية من الشركات الرائدة عالمياً في مجال البصريات. توفر عدساتها رؤية نقية وصحية مع تقنيات ترطيب متطورة تحافظ على راحة العين طوال اليوم، مما يجعلها الخيار الأول للأطباء والمتخصصين.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-6 rounded-3xl bg-black/40 border border-gold/10">
                  <Shield size={24} className="text-gold mb-3" />
                  <span className="text-stone-300 text-sm font-arabic text-center">جودة طبية</span>
                </div>
                <div className="flex flex-col items-center p-6 rounded-3xl bg-black/40 border border-gold/10">
                  <Clock size={24} className="text-gold mb-3" />
                  <span className="text-stone-300 text-sm font-arabic text-center">ترطيب فائق</span>
                </div>
                <div className="flex flex-col items-center p-6 rounded-3xl bg-black/40 border border-gold/10">
                  <Zap size={24} className="text-gold mb-3" />
                  <span className="text-stone-300 text-sm font-arabic text-center">رؤية نقية</span>
                </div>
              </div>
            </div>
            <div className="luxury-border rounded-[30px] overflow-hidden aspect-video">
              <img 
                src="/images/english1.jpg" 
                alt="Alcon English Lenses"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <h3 className="text-gold font-serif text-4xl mb-6">معرض الأعمال - القسم الإنكليزي</h3>
            <p className="text-stone-400 font-arabic text-xl">استعراض لأحدث تقنيات عدسات Alcon الإنكليزية.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {englishGallery.map((item, idx) => (
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
