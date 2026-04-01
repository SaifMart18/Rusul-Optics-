import { motion } from "motion/react";
import { ShieldCheck, Star, Zap, Globe, CheckCircle2, Award, Sparkles, Droplets } from "lucide-react";

const brands = [
  {
    title: "الماركة الفرنسية",
    desc: "تجسد الأناقة الفرنسية مع دقة بصرية متناهية، مصممة لتوفير رؤية كريستالية وراحة تدوم طوال اليوم.",
    icon: Globe,
    country: "فرنسا",
    tag: "الأكثر مبيعاً",
    features: ["تقنية الترطيب الذاتي", "حماية 100% من الأشعة", "تصميم رقيق جداً"]
  },
  {
    title: "الماركة الإنجليزية",
    desc: "جودة بريطانية عريقة تعتمد على أحدث الأبحاث العلمية لتوفير عدسات صحية وآمنة تماماً للعين الحساسة.",
    icon: Award,
    country: "بريطانيا",
    tag: "جودة ملكية",
    features: ["نفاذية أكسجين فائقة", "مقاومة للرواسب البروتينية", "ثبات عالي في العين"]
  },
  {
    title: "الماركة الكورية",
    desc: "ثورة في عالم العدسات اللاصقة تجمع بين التكنولوجيا الكورية المتطورة والألوان الطبيعية الساحرة.",
    icon: Sparkles,
    country: "كوريا",
    tag: "تكنولوجيا متطورة",
    features: ["ألوان طبيعية جذابة", "عدسات مرنة ومريحة", "مناسبة للاستخدام الطويل"]
  },
  {
    title: "الماركة الإسبانية",
    desc: "عدسات إسبانية فاخرة تضمن لك حماية قصوى وراحة مثالية، مثالية لمن يعانون من جفاف العين المستمر.",
    icon: Droplets,
    country: "إسبانيا",
    tag: "حماية قصوى",
    features: ["تقنية حبس الرطوبة", "سطح ناعم يقلل الاحتكاك", "رؤية ليلية واضحة"]
  },
];

export default function ContactLensesSection() {
  return (
    <section id="contact-lenses-section" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gold/5 blur-[180px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-gold/50" />
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-serif">World Class Brands</span>
            <span className="h-px w-8 bg-gold/50" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif gold-text-gradient mb-8 leading-tight"
          >
            أرقى ماركات <br />
            <span className="italic font-light text-stone-400">العدسات العالمية</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-stone-400 font-arabic text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            نقدم لكم تشكيلة مختارة من أجود أنواع العدسات اللاصقة الطبية والتجميلية، المستوردة من أفضل المصانع العالمية لضمان أعلى مستويات الجودة والراحة لعينيك.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative p-10 rounded-[2.5rem] bg-stone-900/20 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:bg-stone-900/40"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="flex-1 text-right order-2 md:order-1">
                  <div className="flex items-center justify-end gap-3 mb-3">
                    <span className="text-gold/40 text-[10px] font-serif tracking-[0.2em] uppercase">{brand.country}</span>
                    <div className="w-8 h-px bg-gold/20" />
                  </div>
                  
                  <h3 className="text-white font-serif text-3xl mb-4 group-hover:text-gold transition-colors duration-300">
                    {brand.title}
                  </h3>
                  
                  <p className="text-stone-400 font-arabic text-base leading-relaxed mb-8">
                    {brand.desc}
                  </p>

                  <div className="space-y-3">
                    {brand.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center justify-end gap-3">
                        <span className="text-stone-300 font-arabic text-sm">{feature}</span>
                        <CheckCircle2 className="text-gold/60 w-4 h-4" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="w-20 h-20 rounded-3xl bg-gold/5 flex items-center justify-center text-gold border border-gold/10 group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                    <brand.icon size={40} strokeWidth={1} />
                  </div>
                  <div className="mt-4 flex justify-center">
                    <span className="px-3 py-1 rounded-full bg-gold/5 border border-gold/10 text-gold/60 text-[9px] uppercase tracking-widest font-serif whitespace-nowrap">
                      {brand.tag}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Assurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 relative rounded-[3rem] overflow-hidden border border-gold/20 bg-stone-900/20 backdrop-blur-xl p-12 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <ShieldCheck className="w-16 h-16 text-gold mx-auto mb-8 opacity-50" />
            <h3 className="text-4xl md:text-5xl font-serif gold-text-gradient mb-8">معايير الجودة العالمية</h3>
            <p className="text-stone-300 font-arabic text-xl leading-relaxed mb-12">
              جميع عدساتنا تخضع لفحوصات دقيقة ومعتمدة طبياً، حيث نوفر عدسات تسمح بمرور الأكسجين للعين بنسبة عالية، مما يضمن لك الراحة التامة حتى مع الاستخدام الطويل، مع حماية أكيدة من الجفاف والتحسس.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <span className="px-6 py-2 rounded-full border border-gold/10 text-gold/60 text-xs font-serif tracking-widest uppercase">FDA Approved</span>
              <span className="px-6 py-2 rounded-full border border-gold/10 text-gold/60 text-xs font-serif tracking-widest uppercase">CE Certified</span>
              <span className="px-6 py-2 rounded-full border border-gold/10 text-gold/60 text-xs font-serif tracking-widest uppercase">ISO 9001</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
