import { motion } from "motion/react";
import { Award, ShieldCheck, Zap, Heart, Clock } from "lucide-react";

const reasons = [
  {
    title: "خبرة طبية متميزة",
    desc: "نخبة من أخصائيي البصريات ذوي الخبرة العالية في تشخيص وتقويم البصر.",
    icon: Award,
  },
  {
    title: "أحدث التقنيات",
    desc: "نستخدم أجهزة فحص رقمية متطورة لضمان أدق النتائج في قياس النظر.",
    icon: Zap,
  },
  {
    title: "جودة مضمونة",
    desc: "نلتزم بأعلى معايير الجودة في اختيار العدسات والإطارات العالمية.",
    icon: ShieldCheck,
  },
  {
    title: "رعاية شخصية",
    desc: "نهتم بأدق التفاصيل التي تناسب نمط حياتك واحتياجاتك البصرية الفريدة.",
    icon: Heart,
  },
  {
    title: "دقة وسرعة",
    desc: "نضمن لك الدقة المتناهية في تنفيذ الوصفات الطبية مع سرعة في الإنجاز.",
    icon: Clock,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold/60 uppercase tracking-[0.3em] text-sm font-serif mb-4 block"
          >
            التميز في الرعاية البصرية
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gold font-serif text-4xl md:text-6xl mb-6"
          >
            لماذا تختار <span className="italic font-light text-stone-500">رسل للبصريات؟</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-stone-900/30 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:bg-stone-900/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                <reason.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-gold font-serif text-2xl mb-4 text-right">
                {reason.title}
              </h3>
              <p className="text-stone-400 font-arabic leading-relaxed text-lg text-right">
                {reason.desc}
              </p>
            </motion.div>
          ))}
          
          {/* Special CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 rounded-3xl gold-gradient flex flex-col items-center justify-center text-center group cursor-pointer"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <h3 className="text-black font-serif text-3xl mb-4">انضم إلينا</h3>
            <p className="text-black/80 font-arabic text-lg mb-6">
              كن جزءاً من عائلتنا واحصل على أفضل رعاية لعينيك.
            </p>
            <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <Zap size={24} className="text-black" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
