import { motion } from "motion/react";
import { Sparkles, CheckCircle2, Info, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import SEO from "../components/SEO";

const brands = [
  { name: "ماركات فرنسية", desc: "أناقة باريسية ووضوح فائق", color: "from-blue-500/20" },
  { name: "ماركات إيطالية", desc: "تصميم عصري وراحة متناهية", color: "from-green-500/20" },
  { name: "ماركات إنكليزية", desc: "جودة بريطانية عريقة", color: "from-red-500/20" },
  { name: "ماركات كورية", desc: "أحدث التقنيات الآسيوية", color: "from-purple-500/20" }
];

const lensTypes = [
  {
    title: "عدسات قصر البصر (Myopia)",
    desc: "نقدم عدسات مصممة بدقة لتصحيح رؤية الأشياء البعيدة، متوفرة بخيارات يومية، أسبوعية، وشهرية لتناسب نمط حياتك.",
    features: ["وضوح عالي", "حماية من الأشعة فوق البنفسجية", "ترطيب مستمر"]
  },
  {
    title: "عدسات طول البصر (Hyperopia)",
    desc: "حلول بصرية مريحة للقراءة والعمل المكتبي، تمنحك رؤية قريبة واضحة دون إجهاد للعين.",
    features: ["راحة طوال اليوم", "سهولة الاستخدام", "نفاذية عالية للأكسجين"]
  },
  {
    title: "عدسات الاستكماتزم (Toric)",
    desc: "عدسات متخصصة لتصحيح انحراف النظر، تضمن ثبات العدسة في العين لرؤية مستقرة وواضحة في جميع الأوقات.",
    features: ["تصميم ثابت", "تصحيح دقيق", "تقنية الترطيب الذاتي"]
  },
  {
    title: "العدسات التجميلية الملونة",
    desc: "تشكيلة واسعة من الألوان الطبيعية والجذابة التي تمنحك مظهراً متجدداً مع الحفاظ على صحة وسلامة عينيك.",
    features: ["ألوان طبيعية", "متوفرة بقياس طبي", "مريحة للعين الحساسة"]
  }
];

export default function ContactLenses() {
  return (
    <div className="min-h-screen bg-black pt-32">
      <SEO 
        title="العدسات اللاصقة" 
        description="استكشف مجموعتنا الواسعة من العدسات اللاصقة الطبية والتجميلية من أرقى الماركات العالمية."
      />

      {/* Hero Section */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-gold font-serif text-5xl md:text-7xl mb-6">
              عالم <span className="italic font-light text-stone-500">العدسات</span> اللاصقة
            </h1>
            <p className="text-stone-400 text-xl md:text-2xl font-arabic max-w-3xl ml-auto leading-relaxed">
              نجمع لك أفضل ما أنتجته المختبرات العالمية من عدسات لاصقة طبية وتجميلية، لتنعم برؤية واضحة وراحة لا تضاهى.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="px-6 py-20 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-3xl border border-gold/10 bg-gradient-to-br ${brand.color} to-transparent text-center group hover:border-gold/40 transition-all duration-500`}
              >
                <h3 className="text-gold font-arabic text-2xl mb-2">{brand.name}</h3>
                <p className="text-stone-500 font-arabic text-sm">{brand.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Types */}
      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {lensTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="luxury-border p-10 rounded-[40px] bg-zinc-950/50 hover:bg-zinc-900/50 transition-colors duration-500"
              >
                <div className="flex flex-row-reverse items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                    <Sparkles size={28} />
                  </div>
                  <h2 className="text-gold font-arabic text-3xl text-right">{type.title}</h2>
                </div>
                <p className="text-stone-400 font-arabic text-lg leading-relaxed mb-8 text-right">
                  {type.desc}
                </p>
                <div className="space-y-4">
                  {type.features.map((feature, j) => (
                    <div key={j} className="flex flex-row-reverse items-center gap-3 text-stone-300">
                      <CheckCircle2 size={18} className="text-gold" />
                      <span className="font-arabic">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="px-6 py-32 bg-gold/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-gold font-serif text-4xl md:text-6xl mb-6">نصائح العناية بالعدسات</h2>
            <div className="w-24 h-1 gold-gradient mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "النظافة أولاً", desc: "اغسل يديك جيداً وجففهما قبل لمس العدسات." },
              { icon: Zap, title: "المحلول المناسب", desc: "استخدم دائماً المحلول المعقم المخصص ولا تستخدم الماء أبداً." },
              { icon: Info, title: "فترة الاستخدام", desc: "التزم بالمدة المحددة لاستبدال العدسات لضمان صحة عينيك." }
            ].map((tip, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-gold mx-auto mb-6">
                  <tip.icon size={32} />
                </div>
                <h3 className="text-white font-arabic text-xl mb-4">{tip.title}</h3>
                <p className="text-stone-500 font-arabic leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="luxury-border p-16 rounded-[50px] bg-black relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gold/5" />
            <h2 className="text-gold font-serif text-4xl md:text-5xl mb-8 relative z-10">هل تحتاج لاستشارة؟</h2>
            <p className="text-stone-400 text-xl font-arabic mb-12 relative z-10">
              فريقنا المتخصص جاهز لمساعدتك في اختيار العدسات الأنسب لعينيك ونمط حياتك.
            </p>
            <a 
              href="https://wa.me/9647725330777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-5 gold-gradient text-black font-bold text-xl rounded-full hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] transition-all duration-500 relative z-10"
            >
              <span>تواصل معنا عبر واتساب</span>
              <ArrowRight size={24} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
