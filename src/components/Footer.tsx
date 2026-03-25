import { motion } from "motion/react";
import { Eye, Phone, MapPin, Clock, Instagram } from "lucide-react";

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
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

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/20 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-6">
            <Logo size={48} />
            <span className="font-serif text-2xl tracking-widest gold-text-gradient font-bold uppercase">
              Rusul Optics
            </span>
          </div>
          <p className="text-stone-500 text-sm leading-relaxed text-center md:text-left max-w-xs">
            عيادة بصريات متخصصة تقدم أرقى الخدمات الطبية والجمالية للعيون بأحدث التقنيات العالمية.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="text-gold font-serif text-lg mb-6 uppercase tracking-widest">روابط سريعة</h4>
          <ul className="flex flex-col gap-4 items-center text-stone-400 text-sm">
            <li><a href="/" className="hover:text-gold transition-colors">الرئيسية</a></li>
            <li><a href="/services" className="hover:text-gold transition-colors">خدماتنا</a></li>
            <li><a href="/contact" className="hover:text-gold transition-colors">اتصل بنا</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-gold font-serif text-lg mb-6 uppercase tracking-widest">تواصل معنا</h4>
          <div className="flex flex-col gap-4 items-center md:items-end text-stone-400 text-sm">
            <div className="flex items-center gap-3">
              <span>07725330777</span>
              <Phone size={16} className="text-gold" />
            </div>
            <div className="flex items-center gap-3">
              <span>بغداد، العراق</span>
              <MapPin size={16} className="text-gold" />
            </div>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://www.instagram.com/rusul.optic?igsh=MXRoa201MjNteWxrdQ==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.tiktok.com/@rusuloptics?_r=1&_t=ZS-94vcCRCVS54" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-10 border-t border-gold/10 text-center">
        <p className="text-stone-600 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Rusul Optics. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
