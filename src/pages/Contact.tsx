import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  MapPin,
  Mail,
  MessageCircle,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { useLanguage } from "../context/LanguageContext";

const ContactInfo = ({ icon: Icon, title, content }: { icon: any; title: string; content: string }) => (
  <div className="flex gap-6 items-start">
    <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/5 text-primary">
      <Icon className="w-6 h-6" />
    </div>
    <div className="space-y-1">
      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">{title}</div>
      <div className="text-xl font-headline font-black uppercase text-white italic">{content}</div>
    </div>
  </div>
);

export const Contact = () => {
  const { t } = useLanguage();
  const c = t.contact;


  return (
    <div className="relative">
      {/* ── Hero ─────────────────────────────── */}
      <section className="pt-40 pb-20 px-8 relative overflow-hidden">
        <CinematicBackground />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <span className="text-primary font-mono text-xs uppercase tracking-[0.5em] block">{c.badge}</span>
            <h1 className="text-8xl md:text-[140px] font-headline font-black uppercase italic tracking-tighter leading-[0.8]">
              {c.title1}<br />
              <span className="text-primary italic">{c.title2}</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-zinc-500 font-light leading-relaxed">
              {c.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Form + Info ──────────────────────── */}
      <section className="px-8 py-24 bg-black relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
          {/* Form Side */}
          <div className="relative min-h-[800px] bg-surface-container-lowest border border-white/5 overflow-hidden">
            {/* Loading state indicator */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            </div>
            
            <iframe 
              src={t.config.bookingURL} 
              width="100%" 
              height="800" 
              frameBorder="0" 
              className="relative z-10 filter invert hue-rotate-180 brightness-90 grayscale-[0.2]"
              style={{ backgroundColor: 'transparent' }}
              title="TidyCal Scheduling"
            ></iframe>

            {/* TidyCal standard colors are light, we apply a subtle filter to help integration if necessary, 
                but TidyCal usually supports custom colors in paid plans. 
                The filter above is a 'dark mode hack' */}
          </div>

          {/* Info Side */}
          <div className="space-y-20">
            <div className="space-y-12">
              <h2 className="text-4xl font-headline font-black uppercase italic tracking-tighter">{c.infoTitle}</h2>
              <div className="space-y-10">
                <ContactInfo icon={Mail}          title={c.infoMail}     content="hola@usainsomnia.com" />
                <ContactInfo icon={MessageCircle} title={c.infoPhone}    content="+52 55 8640 7719" />
                <ContactInfo icon={MapPin}        title={c.infoLocation} content="Ciudad de México / Global" />
                
                <div className="pt-6">
                  <a 
                    href={`https://wa.me/${t.config.whatsapp}?text=${encodeURIComponent(c.whatsappMsg || "Hola")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-4 border border-primary text-primary font-black uppercase text-[10px] px-8 py-4 transition-all hover:bg-primary hover:text-black overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                       {c.scheduleBtn || "Schedule Session"} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-20 border-t border-white/5 space-y-12">
              <h2 className="text-4xl font-headline font-black uppercase italic tracking-tighter">{c.commitmentsTitle}</h2>
              <div className="grid gap-10">
                {[
                  { icon: ShieldCheck, text: c.commitment1 },
                  { icon: Zap,         text: c.commitment2 },
                  { icon: Activity,    text: c.commitment3 },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex gap-6 items-center group">
                    <div className="w-10 h-10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-zinc-500 text-xs font-headline font-bold uppercase tracking-wider leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
