import { motion } from "motion/react";
import { Phone, Clock, MessageCircle, MapPin, Instagram } from "lucide-react";

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-gold font-serif text-4xl md:text-6xl mb-6 uppercase tracking-widest">اتصل بنا</h2>
          <div className="w-24 h-1 gold-gradient mx-auto mb-8" />
          <p className="text-stone-400 max-w-2xl mx-auto text-lg font-arabic">
            نحن هنا لخدمتكم. تواصلوا معنا عبر أي من القنوات التالية أو تفضلوا بزيارتنا في العيادة.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl luxury-border flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-gold font-serif text-xl mb-2 uppercase tracking-widest">أرقام الهاتف</h4>
                  <div className="text-stone-300 space-y-1 text-lg">
                    <p>07735220777</p>
                    <p>07505061667</p>
                    <p>07725330777</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl luxury-border flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-gold font-serif text-xl mb-2 uppercase tracking-widest">ساعات العمل</h4>
                  <div className="text-stone-300 space-y-1 text-lg font-arabic">
                    <p>من السبت إلى الخميس</p>
                    <p>من الساعة 4:00 مساءً إلى 8:00 مساءً</p>
                    <p className="text-red-400">الجمعة: مغلق</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl luxury-border flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-gold font-serif text-xl mb-2 uppercase tracking-widest">الموقع</h4>
                  <p className="text-stone-300 text-lg font-arabic">بغداد - حي الجامعة - شارع الربيع</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gold/5 border border-gold/20 space-y-6"
            >
              <h4 className="text-gold font-serif text-2xl mb-2 text-center">تابعنا على مواقع التواصل</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href="https://www.instagram.com/rusul.optic?igsh=MXRoa201MjNteWxrdQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-4 bg-gradient-to-tr from-purple-600 to-pink-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  <Instagram size={24} />
                  <span>انستغرام</span>
                </a>
                
                <a 
                  href="https://www.tiktok.com/@rusuloptics?_r=1&_t=ZS-94vcCRCVS54"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 py-4 bg-black text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg border border-white/20"
                >
                  <TikTokIcon size={24} />
                  <span>تيك توك</span>
                </a>
              </div>

              <div className="w-full h-px bg-gold/10 my-6" />

              <h4 className="text-gold font-serif text-xl mb-4 text-center">تواصل سريع عبر واتساب</h4>
              <a 
                href="https://wa.me/9647725330777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg"
              >
                <MessageCircle size={24} />
                <span>مراسلة عبر واتساب</span>
              </a>
            </motion.div>
          </div>

          {/* Interactive Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-3xl overflow-hidden luxury-border relative group"
          >
            <div className="absolute inset-0 z-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.123456789!2d44.3315!3d33.3315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f67a0a74193%3A0x9deda9d2a3b16f2c!2z2LnZitin2K_YqSDYsdiz2YQg2YTZhNio2LXYsdmK2KfYqiAtIFJ1c3VsIE9wdGljcw!5e0!3m2!1sar!2siq!4v1711150000000!5m2!1sar!2siq" 
                className="w-full h-full border-0 grayscale invert opacity-40 group-hover:opacity-80 transition-opacity duration-700"
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            {/* Map Overlay Info */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="bg-black/80 backdrop-blur-md border border-gold/20 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-right">
                  <h4 className="text-gold font-serif text-lg uppercase tracking-widest mb-1">موقعنا في حي الجامعة</h4>
                  <p className="text-stone-400 text-sm font-arabic">شارع الربيع - مقابل مجمع الكوخ</p>
                </div>
                <a 
                  href="https://maps.app.goo.gl/3F8vyMNF6NpEoCGEA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 gold-gradient text-black font-bold rounded-xl text-sm transition-all hover:scale-105 whitespace-nowrap"
                >
                  فتح في خرائط جوجل
                </a>
              </div>
            </div>

            {/* Floating Pin Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
              >
                <MapPin size={48} fill="currentColor" fillOpacity={0.2} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
