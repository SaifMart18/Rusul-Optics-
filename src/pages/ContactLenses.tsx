import { motion } from "motion/react";
import { ArrowLeft, Sparkles, Shield, Clock, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const categories = [
  {
    id: "spanish",
    title: "القسم الإسباني",
    subtitle: "Spanish Medical Lenses",
    desc: "عدسات Wolf Vision الإسبانية المتطورة لتصحيح بعد البصر والاستكماتزم وقصور البصر بدقة متناهية.",
    image: "/images/eye1.jpg",
    link: "/contact-lenses/spanish",
    tags: ["Wolf Vision", "تصحيح نظر", "امتياز إسباني"]
  },
  {
    id: "french",
    title: "القسم الفرنسي HD",
    subtitle: "French HD Lenses",
    desc: "مجموعة حصرية من العدسات الفرنسية ذات الجودة العالية HD، تجمع بين الأناقة والوضوح الفائق.",
    image: "/images/france1.jpg",
    link: "/contact-lenses/french",
    tags: ["صناعة فرنسية", "جودة HD", "ألوان ساحرة"]
  },
  {
    id: "korean",
    title: "القسم الكوري",
    subtitle: "Korean Premium Lenses",
    desc: "عدسات كورية بجودة رهيبة جداً وتصاميم عصرية توفر راحة استثنائية للعين طوال اليوم.",
    image: "/images/korean1.jpg",
    link: "/contact-lenses/korean",
    tags: ["صناعة كورية", "جودة فائقة", "راحة تامة"]
  },
  {
    id: "italian",
    title: "القسم الإيطالي",
    subtitle: "Italian Desio Lenses",
    desc: "عدسات Desio الإيطالية الفاخرة التي تجمع بين سحر الألوان الإيطالية والراحة الطبية الفائقة.",
    image: "/images/italy1.jpg",
    link: "/contact-lenses/italian",
    tags: ["Desio", "صناعة إيطالية", "ألوان ساحرة"]
  },
  {
    id: "english",
    title: "القسم الإنكليزي",
    subtitle: "English Alcon Lenses",
    desc: "عدسات Alcon الإنكليزية الرائدة عالمياً في مجال العناية بالعين وتوفير رؤية نقية وصحية.",
    image: "/images/english1.jpg",
    link: "/contact-lenses/english",
    tags: ["Alcon", "صناعة إنكليزية", "جودة طبية"]
  },
  {
    id: "accessories",
    title: "قسم الاكسسوارات",
    subtitle: "Eyewear Accessories",
    desc: "قطع الزينة والاكسسوارات الخاصة بالنظارات والعدسات لإضافة لمسة من الأناقة والتميز.",
    image: "/images/future1.jpg",
    link: "/contact-lenses/accessories",
    tags: ["اكسسوارات", "قطع زينة", "أناقة"]
  }
];

export default function ContactLenses() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <SEO 
        title="أقسام العدسات" 
        description="استكشف مجموعتنا الواسعة من العدسات اللاصقة الإسبانية، الفرنسية، الكورية، الإيطالية، والإنكليزية."
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <Link 
            to="/services" 
            className="flex items-center gap-2 text-gold/60 hover:text-gold transition-colors group order-2 md:order-1"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-serif uppercase tracking-widest text-sm">العودة للخدمات</span>
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-right order-1 md:order-2"
          >
            <h1 className="text-gold font-serif text-5xl md:text-7xl mb-4">أقسام العدسات</h1>
            <div className="w-24 h-1 gold-gradient ml-auto mb-6" />
            <p className="text-stone-400 text-xl font-arabic">اختر القسم الذي يناسب احتياجاتك البصرية والجمالية.</p>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden luxury-border mb-8">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute bottom-8 right-8 text-right">
                  <h2 className="text-gold font-serif text-4xl mb-2">{category.title}</h2>
                  <p className="text-white/60 font-serif text-sm uppercase tracking-widest">{category.subtitle}</p>
                </div>
              </div>

              <div className="px-4 text-right">
                <p className="text-stone-400 font-arabic text-lg mb-6 leading-relaxed">
                  {category.desc}
                </p>
                
                <div className="flex flex-wrap justify-end gap-3 mb-8">
                  {category.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full bg-gold/5 border border-gold/10 text-gold/60 text-xs font-arabic">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  to={category.link}
                  className="inline-flex items-center gap-3 text-gold group-hover:gap-5 transition-all duration-500 font-serif uppercase tracking-widest text-sm"
                >
                  <span>دخول القسم</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Brands Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 border-y border-gold/10"
        >
          <div className="text-center mb-16">
            <h3 className="text-gold font-serif text-3xl mb-4">ماركات عالمية مختارة</h3>
            <p className="text-stone-500 font-arabic">نوفر لكم نخبة من العدسات اللاصقة من كبرى الشركات العالمية.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "ماركات فرنسية", origin: "France" },
              { label: "ماركات إيطالية", origin: "Italy" },
              { label: "ماركات إنكليزية", origin: "UK" },
              { label: "ماركات كورية", origin: "Korea" }
            ].map((brand, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                  <Globe size={24} />
                </div>
                <h4 className="text-white font-arabic text-lg mb-1">{brand.label}</h4>
                <p className="text-gold/40 font-serif text-xs uppercase tracking-widest">{brand.origin}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[40px] bg-gold/5 border border-gold/20 text-center relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/10 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <h3 className="text-gold font-serif text-3xl mb-6">هل تحتاج إلى استشارة؟</h3>
            <p className="text-stone-400 font-arabic text-lg mb-10 max-w-2xl mx-auto">
              فريقنا المتخصص جاهز لمساعدتك في اختيار العدسات المثالية التي تناسب قياس نظرك ونمط حياتك.
            </p>
            <a 
              href="https://wa.me/9647725330777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 py-4 gold-gradient text-black font-bold rounded-full hover:scale-105 transition-all duration-500"
            >
              <span>تواصل معنا الآن</span>
              <ArrowLeft size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
