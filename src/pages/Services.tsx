import { motion } from "motion/react";
import { Search, Glasses, Sun, Sparkles, Activity, Baby, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const services = [
  {
    title: "فحص النظر الشامل",
    desc: "نستخدم أحدث التقنيات الرقمية لتقييم حدة البصر وصحة العين العامة، مع تشخيص دقيق لمشاكل الرؤية الشائعة والمعقدة لضمان سلامة عينيك.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "فحص الحول وتقويم البصر",
    desc: "تشخيص متخصص لحالات الحول وضعف العضلات العينية للأطفال والكبار، مع وضع خطط علاجية وتمارين لتقوية البصر وتحقيق التوازن البصري المثالي.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "النظارات الطبية الفاخرة",
    desc: "نساعدك في اختيار العدسات والإطارات التي تناسب نمط حياتك وملامح وجهك من أرقى الماركات العالمية، مع ضمان الدقة المتناهية في تنفيذ الوصفة.",
    icon: Glasses,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "عيادة العدسات اللاصقة",
    desc: "تشكيلة واسعة من العدسات الطبية والتجميلية، مع تدريب متخصص على الاستخدام الصحيح لضمان راحة العين وسلامتها طوال اليوم.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "النظارات الشمسية الطبية",
    desc: "اجمع بين الحماية القصوى من الأشعة فوق البنفسجية والأناقة العصرية مع عدسات شمسية مصممة خصيصاً لتناسب قياس نظرك الخاص.",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "بصريات الأطفال",
    desc: "بيئة مريحة ومحببة للأطفال لإجراء فحوصات بصرية دقيقة تضمن نمواً بصرياً سليماً في مراحلهم العمرية الأولى بأسلوب هادئ وممتع.",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-black">
      <SEO 
        title="خدماتنا" 
        description="نقدم خدمات فحص النظر الشامل، فحص الحول، تقويم البصر، وتوفير النظارات الطبية والشمسية والعدسات اللاصقة."
      />
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-right"
          >
            <h1 className="text-gold font-serif text-5xl md:text-8xl mb-8 leading-tight">
              خدماتنا <span className="italic font-light text-stone-500">الطبية</span>
            </h1>
            <p className="text-stone-400 max-w-3xl md:ml-auto text-xl md:text-2xl font-arabic leading-relaxed">
              نجمع بين الخبرة الطبية العميقة وأحدث التقنيات العالمية لنقدم لك رعاية بصرية تليق بك.
            </p>
            <div className="w-full h-px bg-gradient-to-l from-gold/40 to-transparent mt-12" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-[300px] mb-8 overflow-hidden rounded-2xl luxury-border">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute top-6 right-6 w-12 h-12 bg-black/80 backdrop-blur-md border border-gold/30 rounded-full flex items-center justify-center text-gold">
                    <service.icon size={24} />
                  </div>
                </div>
                
                <div className="text-right">
                  <h3 className="text-gold font-serif text-2xl mb-4 group-hover:translate-x-[-10px] transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-stone-400 font-arabic leading-relaxed mb-6 text-lg">
                    {service.desc}
                  </p>
                  <div className="flex items-center justify-end gap-2 text-gold/60 group-hover:text-gold transition-colors duration-300 cursor-pointer">
                    <span className="text-sm uppercase tracking-widest font-serif">المزيد من التفاصيل</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Lenses Detailed Section */}
      <section className="py-32 px-6 bg-zinc-950/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gold/5 blur-[200px] rounded-full -translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="relative z-10">
              <h2 className="text-gold font-serif text-4xl md:text-7xl mb-6">عالم العدسات اللاصقة</h2>
              <div className="w-32 h-1 gold-gradient mx-auto mb-8" />
              <p className="text-stone-400 max-w-3xl mx-auto text-xl font-arabic leading-relaxed mb-10">
                نقدم مجموعة حصرية من العدسات اللاصقة الطبية والتجميلية التي تجمع بين وضوح الرؤية الفائق والراحة المتناهية للعين، متوفرة بأرقى الماركات العالمية.
              </p>
              <Link 
                to="/contact-lenses"
                className="inline-flex items-center gap-4 px-10 py-4 border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all duration-500 rounded-full font-serif uppercase tracking-widest text-sm"
              >
                <span>استكشف التشكيلة الكاملة</span>
                <ArrowRight size={18} />
              </Link>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Types of Lenses */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="luxury-border p-8 rounded-3xl bg-black/40 backdrop-blur-md">
                <h3 className="text-gold font-serif text-3xl mb-6 text-right">حلول بصرية متكاملة</h3>
                <div className="space-y-6">
                  {[
                    { title: "عدسات قصر البصر", desc: "تصحيح دقيق لرؤية الأشياء البعيدة بوضوح تام." },
                    { title: "عدسات طول البصر", desc: "حلول مثالية للقراءة ورؤية الأشياء القريبة براحة." },
                    { title: "عدسات الاستكماتزم", desc: "عدسات توريك (Toric) متطورة لتصحيح انحراف النظر." }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-row-reverse items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full luxury-border flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                        <Sparkles size={18} />
                      </div>
                      <div className="text-right">
                        <h4 className="text-white font-arabic text-xl mb-1">{item.title}</h4>
                        <p className="text-stone-500 font-arabic">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "ماركات فرنسية", color: "from-blue-500/20" },
                  { label: "ماركات إيطالية", color: "from-green-500/20" },
                  { label: "ماركات إنكليزية", color: "from-red-500/20" },
                  { label: "ماركات كورية", color: "from-purple-500/20" }
                ].map((brand, i) => (
                  <div key={i} className={`p-6 rounded-2xl border border-gold/10 bg-gradient-to-br ${brand.color} to-transparent text-center group hover:border-gold/40 transition-all duration-500`}>
                    <span className="text-gold font-arabic text-lg group-hover:scale-110 block transition-transform">{brand.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image Showcase */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-[40px] overflow-hidden luxury-border">
                <img 
                  src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=1000" 
                  alt="Contact Lenses" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-8 right-8 left-8 text-right">
                  <p className="text-gold font-serif text-sm uppercase tracking-[0.3em] mb-2">Premium Quality</p>
                  <h4 className="text-white font-serif text-3xl">أرقى الماركات العالمية بين يديك</h4>
                </div>
              </div>
              
              {/* Floating Decorative Image */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 w-48 h-48 rounded-3xl overflow-hidden luxury-border hidden md:block"
              >
                <img 
                  src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=400" 
                  alt="Lens Detail" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-20 rounded-[40px] overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-gold/5 backdrop-blur-sm border border-gold/20" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-gold/10 blur-[100px] rounded-full" />
            
            <div className="relative z-10">
              <h2 className="text-gold font-serif text-4xl md:text-6xl mb-8">هل أنت جاهز لرؤية أفضل؟</h2>
              <p className="text-stone-300 text-xl md:text-2xl font-arabic mb-12 max-w-2xl mx-auto leading-relaxed">
                احجز موعدك اليوم واستمتع بتجربة فحص بصرية فاخرة واحترافية.
              </p>
              <a 
                href="https://wa.me/9647725330777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-12 py-5 gold-gradient text-black font-bold text-xl rounded-full hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all duration-500 hover:scale-105"
              >
                <span>احجز موعدك الآن</span>
                <ArrowRight size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
