import { motion } from "motion/react";
import { ShieldCheck, Star, Zap, Globe } from "lucide-react";

const brands = [
  {
    title: "الماركة الفرنسية",
    desc: "تتميز بالدقة العالية والراحة الفائقة للعين، مصممة بأحدث التقنيات البصرية العالمية.",
    icon: Globe,
    country: "فرنسا"
  },
  {
    title: "الماركة الإنجليزية",
    desc: "جودة بريطانية عريقة توفر رؤية واضحة ونقاءً بصرياً لا مثيل له طوال اليوم.",
    icon: Star,
    country: "بريطانيا"
  },
  {
    title: "الماركة الكورية",
    desc: "تجمع بين الأناقة العصرية والتقنيات المتطورة، مثالية للاستخدام اليومي المريح.",
    icon: Zap,
    country: "كوريا"
  },
  {
    title: "الماركة الإسبانية",
    desc: "تصاميم متميزة وعدسات عالية الجودة تضمن حماية وراحة مثالية لعينيك.",
    icon: ShieldCheck,
    country: "إسبانيا"
  },
];

export default function ContactLensesSection() {
  return (
    <section id="contact-lenses-section" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold/60 uppercase tracking-[0.3em] text-sm font-serif mb-4 block"
          >
            عالم العدسات اللاصقة
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gold font-serif text-4xl md:text-6xl mb-6"
          >
            أرقى ماركات <span className="italic font-light text-stone-500">العدسات العالمية</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-stone-400 font-arabic text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8"
          >
            نقدم لكم تشكيلة مختارة من أجود أنواع العدسات اللاصقة الطبية والتجميلية، المستوردة من أفضل المصانع العالمية لضمان أعلى مستويات الجودة والراحة لعينيك.
          </motion.p>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-stone-900/30 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:bg-stone-900/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                <brand.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="text-right">
                <span className="text-gold/40 text-xs font-serif tracking-widest uppercase block mb-2">{brand.country}</span>
                <h3 className="text-gold font-serif text-2xl mb-4">
                  {brand.title}
                </h3>
                <p className="text-stone-400 font-arabic leading-relaxed text-base">
                  {brand.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Assurance Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 md:p-12 rounded-[40px] border border-gold/20 bg-gradient-to-br from-stone-900/50 to-black backdrop-blur-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-right">
            <div className="flex-1">
              <h3 className="text-gold font-serif text-3xl mb-4">معايير الجودة العالمية</h3>
              <p className="text-stone-300 font-arabic text-lg leading-relaxed">
                جميع عدساتنا تخضع لفحوصات دقيقة ومعتمدة طبياً، حيث نوفر عدسات تسمح بمرور الأكسجين للعين بنسبة عالية، مما يضمن لك الراحة التامة حتى مع الاستخدام الطويل، مع حماية أكيدة من الجفاف والتحسس.
              </p>
            </div>
            <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/20 group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck size={48} strokeWidth={1} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
