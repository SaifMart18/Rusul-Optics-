import { motion } from "motion/react";
import { ArrowLeft, Sparkles, Shield, Clock, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const koreanGallery = [
  { id: "1", image: "/images/korean1.jpg", title: "Korean Premium - Natural" },
  { id: "2", image: "/images/korean2.jpg", title: "Korean Premium - Gray" },
  { id: "3", image: "/images/korean3.jpg", title: "Korean Premium - Green" },
  { id: "4", image: "/images/korean4.jpg", title: "Korean Premium - Brown" },
  { id: "5", image: "/images/korean5.jpg", title: "Korean Premium - Blue" },
  { id: "6", image: "/images/korean6.jpg", title: "Korean Premium - Violet" },
  { id: "7", image: "/images/korean7.jpg", title: "Korean Premium - Olive" }
];

export default function KoreanLenses() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <SEO 
        title="القسم الكوري" 
        description="عدسات كورية بجودة رهيبة جداً وتصاميم عصرية توفر راحة استثنائية للعين طوال اليوم."
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
            <h1 className="text-gold font-serif text-5xl md:text-7xl mb-4">القسم الكوري</h1>
            <div className="w-24 h-1 gold-gradient ml-auto mb-6" />
            <p className="text-stone-400 text-xl font-arabic">عدسات لاصقة كورية بجودة رهيبة جداً وتصاميم عصرية.</p>
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
                <Zap size={14} />
                <span>Korean Innovation</span>
              </div>
              <h2 className="text-white font-serif text-4xl mb-6">Premium Korean Lenses</h2>
              <p className="text-stone-400 font-arabic text-lg leading-relaxed mb-8">
                تتميز العدسات الكورية بتقنيات تصنيع متقدمة توفر راحة لا مثيل لها وألواناً طبيعية تندمج بسلاسة مع لون العين الأصلي. صممت لتناسب الاستخدام اليومي الطويل مع الحفاظ على رطوبة العين وصحتها.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-6 rounded-3xl bg-black/40 border border-gold/10">
                  <Shield size={24} className="text-gold mb-3" />
                  <span className="text-stone-300 text-sm font-arabic text-center">جودة كورية</span>
                </div>
                <div className="flex flex-col items-center p-6 rounded-3xl bg-black/40 border border-gold/10">
                  <Clock size={24} className="text-gold mb-3" />
                  <span className="text-stone-300 text-sm font-arabic text-center">ترطيب مستمر</span>
                </div>
                <div className="flex flex-col items-center p-6 rounded-3xl bg-black/40 border border-gold/10">
                  <Sparkles size={24} className="text-gold mb-3" />
                  <span className="text-stone-300 text-sm font-arabic text-center">ألوان طبيعية</span>
                </div>
              </div>
            </div>
            <div className="luxury-border rounded-[30px] overflow-hidden aspect-video">
              <img 
                src="/images/korean1.jpg" 
                alt="Korean Premium Lenses"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <h3 className="text-gold font-serif text-4xl mb-6">معرض الأعمال - القسم الكوري</h3>
            <p className="text-stone-400 font-arabic text-xl">استعراض لأجمل الألوان والتصاميم الكورية الفاخرة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {koreanGallery.map((item, idx) => (
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
