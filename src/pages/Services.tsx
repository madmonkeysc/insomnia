import { motion } from "motion/react";
import {
  Video,
  PenTool,
  Cpu,
  Globe,
  Shield,
  Zap,
  Layers,
  Terminal,
  ChevronRight,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CinematicBackground } from "../components/CinematicBackground";
import { useLanguage } from "../context/LanguageContext";

const ServiceDetail = ({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  techSpecsBtn,
  link,
  accent = "primary",
  external = false,
}: {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  features: readonly string[];
  techSpecsBtn: string;
  link: string;
  accent?: string;
  external?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className="grid lg:grid-cols-2 gap-24 items-center py-32 border-b border-white/5 last:border-0"
  >
    <div className="space-y-8">
      <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
        <Icon className={`w-4 h-4 text-${accent}`} />
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">{subtitle}</span>
      </div>
      <h2 className="text-6xl font-headline font-black uppercase italic tracking-tighter">{title}</h2>
      <p className="text-zinc-400 text-lg leading-relaxed max-w-xl whitespace-pre-line">{description}</p>
      <div className="grid grid-cols-2 gap-6">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 text-xs font-headline font-bold uppercase tracking-widest text-zinc-500">
            <div className={`w-1.5 h-1.5 bg-${accent}`} /> {feature}
          </div>
        ))}
      </div>
      {external ? (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-4 bg-${accent} text-black font-black uppercase text-sm px-10 py-5 hover:gap-6 transition-all`}
        >
          {techSpecsBtn} <ChevronRight className="w-4 h-4" />
        </a>
      ) : (
        <Link 
          to={link}
          className={`inline-flex items-center gap-4 bg-${accent} text-black font-black uppercase text-sm px-10 py-5 hover:gap-6 transition-all`}
        >
          {techSpecsBtn} <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </div>

    <div className="relative group">
      <div className={`absolute -inset-20 bg-${accent}/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
      <div className="relative aspect-video bg-black/40 border border-white/10 overflow-hidden backdrop-blur-3xl p-4">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
            <Terminal className="w-5 h-5 text-zinc-700" />
            <div className="text-[8px] font-mono text-zinc-800 tracking-wider uppercase">Engine Status: Optimal</div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Icon className={`w-32 h-32 text-${accent}/20 group-hover:text-${accent}/40 group-hover:scale-110 transition-all duration-700`} />
          </div>
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <div className="w-24 h-1 bg-zinc-900 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className={`h-full bg-${accent}`}
                />
              </div>
              <div className="text-[6px] font-mono text-zinc-700 uppercase">Process.allocation_01</div>
            </div>
            <Layers className="w-5 h-5 text-zinc-700" />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const Services = () => {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <div className="relative">
      {/* Hero */}
      <section className="pt-40 pb-20 px-8 relative overflow-hidden">
        <CinematicBackground />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <span className="text-primary font-mono text-xs uppercase tracking-[0.5em]">{s.badge}</span>
            <h1 className="text-8xl md:text-[160px] font-headline font-black uppercase italic tracking-tighter leading-[0.8]">
              {s.title1}<br />
              <span className="text-primary">{s.title2}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="px-8 bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          <ServiceDetail
            icon={Video}
            subtitle={s.service1Subtitle}
            title={s.service1Title}
            description={s.service1Desc}
            features={s.service1Features}
            techSpecsBtn={s.techSpecsBtn}
            link="/servicios/audiovisual"
          />
          <ServiceDetail
            icon={PenTool}
            subtitle={s.service2Subtitle}
            title={s.service2Title}
            description={s.service2Desc}
            features={s.service2Features}
            techSpecsBtn={s.techSpecsBtn}
            link="/servicios/branding"
          />
          <ServiceDetail
            icon={Cpu}
            subtitle={s.service3Subtitle}
            title={s.service3Title}
            description={s.service3Desc}
            features={s.service3Features}
            techSpecsBtn="Construye tu Kraken"
            link="https://www.usakraken.com"
            external={true}
          />
          <ServiceDetail
            icon={Settings}
            subtitle={s.service6Subtitle}
            title={s.service6Title}
            description={s.service6Desc}
            features={s.service6Features}
            techSpecsBtn="Desplegar Agente"
            link="https://www.usakraken.com"
            external={true}
            accent="primary"
          />
          <ServiceDetail
            icon={Globe}
            subtitle={s.service4Subtitle}
            title={s.service4Title}
            description={s.service4Desc}
            features={s.service4Features}
            techSpecsBtn={s.techSpecsBtn}
            link="/servicios/web"
          />
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="section-spacing bg-surface-container-lowest border-y border-white/5 relative z-10 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <Shield className="w-10 h-10 text-primary" />
            <h3 className="text-2xl font-headline font-black uppercase italic">{s.pillar1Title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{s.pillar1Desc}</p>
          </div>
          <div className="space-y-6">
            <Zap className="w-10 h-10 text-primary" />
            <h3 className="text-2xl font-headline font-black uppercase italic">{s.pillar2Title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{s.pillar2Desc}</p>
          </div>
          <div className="space-y-6">
            <Layers className="w-10 h-10 text-primary" />
            <h3 className="text-2xl font-headline font-black uppercase italic">{s.pillar3Title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{s.pillar3Desc}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
