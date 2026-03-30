import { motion } from "motion/react";
import { ArrowLeft, Sparkles, Shield, Clock, CheckCircle2, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const hdLenses = [
  { id: "F1", color: "Crystal Clear", image: "/images/france1.jpg" },
  { id: "F2", color: "Ocean Blue", image: "/images/france2.jpg" },
  { id: "F3", color: "Forest Green", image: "/images/france3.jpg" },
  { id: "F4", color: "Deep Gray", image: "/images/france4.jpg" },
  { id: "F5", color: "Amber Glow", image: "/images/france1.jpg" },
];

export default function FrenchLenses() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <SEO 
        title="القسم الفرنسي HD" 
        description="مجموعة حصرية من العدسات الفرنسية ذات الجودة العالية HD، تجمع بين الأناقة والوضوح الفائق."
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
            <h1 className="text-gold font-serif text-5xl md:text-7xl mb-4">العدسات الفرنسية HD</h1>
            <div className="w-24 h-1 gold-gradient ml-auto mb-6" />
            <p className="text-stone-400 text-xl font-arabic">تقنية HD الفرنسية لوضوح فائق وألوان طبيعية ساحرة.</p>
          </motion.div>
        </div>

        {/* Brand Intro */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-32 p-12 rounded-[40px] bg-zinc-900/30 border border-gold/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-serif uppercase tracking-widest mb-6">
                <Zap size={14} />
                <span>High Definition Technology</span>
              </div>
              <h2 className="text-white font-serif text-4xl mb-6">صناعة فرنسية فاخرة</h2>
              <p className="text-stone-400 font-arabic text-lg leading-relaxed mb-8">
                تتميز عدسات HD الفرنسية بتقنية متطورة تمنحك رؤية عالية الدقة مع ألوان مستوحاة من الطبيعة. مصممة لتوفير أقصى درجات الراحة والترطيب للعين طوال اليوم.
              </p>
              <ul className="space-y-4">
                {[
                  "مدة الاستخدام: سنة كاملة (Annual)",
                  "ساعات الارتداء: تصل إلى 14 ساعة يومياً",
                  "درجات القياس: من -0.50 إلى -10.00",
                  "المنشأ: صنع في فرنسا (MADE IN FRANCE)",
                  "تخزن في درجة حرارة بين 0 و 40 مئوية"
                ].map((text, i) => (
                  <li key={i} className="flex items-center justify-end gap-3 text-stone-300 font-arabic">
                    <span>{text}</span>
                    <CheckCircle2 size={18} className="text-gold" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="luxury-border rounded-[30px] overflow-hidden aspect-video">
              <img 
                src="/images/france1.jpg" 
                alt="French HD Lenses"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        {/* Lenses Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {hdLenses.map((lens, idx) => (
            <motion.div
              key={lens.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <div className="relative aspect-square rounded-[30px] overflow-hidden luxury-border mb-4">
                <img 
                  src={lens.image} 
                  alt={lens.color}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-0 right-0 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold font-serif text-xl font-bold">{lens.id}</span>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-white font-serif text-lg mb-1">{lens.color}</h4>
                <p className="text-gold/40 text-xs uppercase tracking-widest">HD Collection</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Care Instructions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[40px] bg-zinc-950 border border-gold/10"
        >
          <div className="text-center mb-12">
            <Shield className="text-gold mx-auto mb-4" size={32} />
            <h3 className="text-gold font-serif text-2xl">تعليمات العناية بالعدسات</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-right">
            {[
              { title: "التخزين", desc: "ينصح بحفظ المنتج في درجة حرارة بين 0 و 40 مئوية لضمان الجودة." },
              { title: "السلامة", desc: "لا تستخدم المنتج إذا كان الغلاف الخارجي تالفاً أو مفتوحاً مسبقاً." },
              { title: "الاستبدال", desc: "هذه العدسات سنوية، يجب استبدالها بعد مرور عام كامل من فتحها." },
              { title: "الراحة", desc: "يمكن ارتداء العدسات لمدة تصل إلى 14 ساعة يومياً بأمان تام." },
              { title: "القياسات", desc: "تتوفر القياسات الطبية من -0.50 إلى -10.00 لتناسب الجميع." },
              { title: "المنشأ", desc: "صناعة فرنسية أصلية (Made in France) تضمن أعلى معايير الجودة." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-black/40 border border-gold/5">
                <h4 className="text-gold font-arabic text-lg mb-2">{item.title}</h4>
                <p className="text-stone-500 text-sm font-arabic leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
