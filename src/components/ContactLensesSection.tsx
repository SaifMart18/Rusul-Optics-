import { motion } from "motion/react";
import { ShieldCheck, Star, Zap, Globe, CheckCircle2, Award, Sparkles, Droplets } from "lucide-react";

const brands = [
  {
    title: "جونسون آند جونسون (Acuvue)",
    desc: "تعتبر من الأكثر طلباً عالمياً، وتتميز بتكنولوجيا الراحة الفائقة التي تحاكي الدموع الطبيعية.",
    icon: Globe,
    country: "الولايات المتحدة",
    tag: "الأكثر طلباً",
    categories: [
      { name: "للاستخدام اليومي", products: ["Acuvue Oasys 1-Day", "Moist 1-Day", "Oasys Max 1-Day"] },
      { name: "أسبوعي / شهري", products: ["Acuvue Oasys"] },
      { name: "حالات خاصة", products: ["Oasys for Astigmatism", "Oasys Multifocal"] }
    ]
  },
  {
    title: "بوش آند لومب (Bausch & Lomb)",
    desc: "ماركة عريقة ومعروفة بجودة الرؤية الفائقة والابتكار المستمر في صحة العين.",
    icon: Award,
    country: "الولايات المتحدة",
    tag: "رؤية فائقة",
    categories: [
      { name: "سلسلة Ultra", products: ["Ultra Monthly", "Ultra for Astigmatism", "Ultra Multifocal", "Ultra One Day"] },
      { name: "سلسلة PureVision", products: ["PureVision 2HD", "PureVision 2HD for Multifocal"] },
      { name: "أخرى", products: ["SofLens 59"] }
    ]
  },
  {
    title: "ألكون (Alcon - Air Optix)",
    desc: "مشهورة بمتانة العدسة ومقاومتها العالية للترسبات، مما يوفر راحة مستمرة طوال فترة اللبس.",
    icon: Sparkles,
    country: "سويسرا",
    tag: "راحة مستمرة",
    categories: [
      { name: "Air Optix", products: ["HydraGlyde (Monthly)", "Night & Day", "HydraGlyde for Astigmatism"] },
      { name: "Dailies", products: ["Total 1", "Precision 1", "Aqua Comfort"] }
    ]
  },
  {
    title: "كوبر فيجن (Biofinity)",
    desc: "الخيار المفضل للأخصائيين بسبب جودة المواد العالية التي توفر ليونة استثنائية.",
    icon: Droplets,
    country: "الولايات المتحدة",
    tag: "خيار الأخصائيين",
    categories: [
      { name: "Biofinity", products: ["Biofinity Monthly", "Biofinity XR", "Biofinity Toric"] },
      { name: "أخرى", products: ["MyDay (1 Day)", "Biomedix 55", "Proclear Monthly"] }
    ]
  },
  {
    title: "العدسات الملونة (Color Lenses)",
    desc: "مجموعة مختارة من أرقى العدسات الملونة التي تجمع بين الجمال الطبيعي والراحة التامة.",
    icon: Star,
    country: "ماركات عالمية",
    tag: "جمال طبيعي",
    categories: [
      { name: "Air Optix Colors", products: ["ألوان طبيعية ومريحة جداً"] },
      { name: "Lacelle", products: ["مظهر جذاب (زينة أو نظر)"] },
      { name: "AQ Colors", products: ["متوفرة للزينة أو للنظر"] }
    ]
  }
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
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-serif">Premium Contact Lenses</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative p-8 md:p-12 rounded-[3rem] bg-stone-900/20 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:bg-stone-900/40"
            >
              <div className="flex flex-col gap-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gold/5 flex items-center justify-center text-gold border border-gold/10 group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500">
                      <brand.icon size={32} strokeWidth={1} />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gold/5 border border-gold/10 text-gold/60 text-[10px] uppercase tracking-widest font-serif">
                      {brand.tag}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-3 mb-2">
                      <span className="text-gold/40 text-[10px] font-serif tracking-[0.2em] uppercase">{brand.country}</span>
                      <div className="w-8 h-px bg-gold/20" />
                    </div>
                    <h3 className="text-white font-serif text-3xl mb-2 group-hover:text-gold transition-colors duration-300">
                      {brand.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-stone-400 font-arabic text-base leading-relaxed text-right">
                  {brand.desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  {brand.categories.map((cat, cIndex) => (
                    <div key={cIndex} className="space-y-3 text-right">
                      <h4 className="text-gold/80 font-serif text-sm border-b border-gold/10 pb-2 mb-3 italic">
                        {cat.name}
                      </h4>
                      <div className="flex flex-wrap justify-end gap-2">
                        {cat.products.map((prod, pIndex) => (
                          <span 
                            key={pIndex}
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-stone-300 font-arabic text-xs hover:border-gold/30 hover:text-white transition-all duration-300"
                          >
                            {prod}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
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
