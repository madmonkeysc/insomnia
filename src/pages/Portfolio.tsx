import { motion } from "motion/react";
import { 
  ExternalLink, 
  Search, 
  ArrowRight,
  Monitor,
  Activity,
  Cpu,
  Zap
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useGlobalContext } from "../context/GlobalContext";


const ProjectCard = ({ title, category, image, description, tags, result }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-primary/20 transition-all duration-500"
  >
    <div className="aspect-[16/10] overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      
      {/* Result Badge */}
      <div className="absolute top-6 left-6 z-20">
        <div className="bg-primary text-black font-headline font-black text-[10px] uppercase px-3 py-1 skew-x-[-12deg] shadow-2xl group-hover:scale-110 transition-transform">
          {result}
        </div>
      </div>

      {/* Detail Overlay */}
      <div className="absolute inset-x-8 bottom-8 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
         <div className="space-y-1">
            <div className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">{category}</div>
            <h3 className="text-2xl font-headline font-black uppercase italic text-white tracking-tighter">{title}</h3>
         </div>
         <div className="w-12 h-12 flex items-center justify-center bg-primary text-black hover:scale-110 transition-all">
            <ExternalLink className="w-5 h-5" />
         </div>
      </div>
    </div>
    <div className="p-8 space-y-6">
       <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 italic">"{description}"</p>
       <div className="flex flex-wrap gap-2">
          {tags.map((tag: string, i: number) => (
             <span key={i} className="text-[8px] font-mono uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/5 text-zinc-400">
                #{tag}
             </span>
          ))}
       </div>
    </div>
  </motion.div>
);

export const Portfolio = () => {
  const { t, lang } = useLanguage();
  const { setIsBookingModalOpen } = useGlobalContext();
  const p = t.portfolio;

  const projects = [
    {
      title: "Kraken AI",
      category: "Enterprise Automation",
      result: "90% TIME SAVED",
      description: lang === "es"
        ? "Arquitectura de agentes autónomos y sistemas de automatización masiva. El motor de inteligencia que impulsa operaciones sin supervisión humana constante."
        : "Autonomous agent architecture and massive automation systems. The intelligence engine that drives operations without constant human supervision.",
      image: "/assets/kraken-ai-laptop.png",
      tags: ["KrakenEngine", "AI Agents", "Automation"]
    },
    {
      title: lang === "es" ? "Fundación Chingonas y Poderosas" : "Chingonas y Poderosas Foundation",
      category: lang === "es" ? "Impacto Social & Digital" : "Social & Digital Impact",
      result: "10X REACH",
      description: lang === "es"
        ? "Ecosistema digital con propósito: IA para maximizar el alcance, la comunidad y el impacto de una fundación dedicada al empoderamiento femenino."
        : "Purpose-driven digital ecosystem: AI to maximize reach, community and impact of a foundation dedicated to women's empowerment.",
      image: "/assets/chingonas-networking.png",
      tags: ["SocialImpact", "Community", "Empowerment"]
    },
    {
      title: "Mentes Maestras  ·  Editorial",
      category: lang === "es" ? "Editorial & Contenido" : "Editorial & Content",
      result: "0 MANUAL TASKS",
      description: lang === "es"
        ? "Automatización del flujo editorial completo: generación, edición y distribución de contenido con agentes IA especializados en narrativa de alto impacto."
        : "Full editorial flow automation: content generation, editing and distribution with AI agents specialized in high-impact narratives.",
      image: "/assets/mentes-maestras-library.png",
      tags: ["Editorial", "ContentAI", "Automation"]
    },
    {
      title: "Mad Monkey Agencia",
      category: lang === "es" ? "Agencia & Branding" : "Agency & Branding",
      result: "400% ROI",
      description: lang === "es"
        ? "Infraestructura creativa potenciada por IA: producción de contenido, estrategia de marca y automatización de campañas para una agencia de alto voltaje."
        : "AI-powered creative infrastructure: content production, brand strategy and campaign automation for a high-voltage agency.",
      image: "/assets/madmonkey-agency.png",
      tags: ["Branding", "CreativeAI", "Campaigns"]
    },
    {
      title: lang === "es" ? "Emprende Chingón" : "Emprende Chingon",
      category: lang === "es" ? "Educación & Emprendimiento" : "Education & Entrepreneurship",
      result: "50% COST CUT",
      description: lang === "es"
        ? "Plataforma de escalamiento educativo con agentes de soporte, onboarding automatizado y comunidad IA para emprendedores de alto rendimiento."
        : "Educational scaling platform with support agents, automated onboarding and AI community for high-performance entrepreneurs.",
      image: "/assets/emprende-chingon-pitch.png",
      tags: ["Education", "Community", "ScaleUp"]
    },
    {
      title: "Dementes",
      category: lang === "es" ? "Conferencistas & Mentores" : "Speakers & Mentors",
      result: "24/7 SALES",
      description: lang === "es"
        ? "Ecosistema IA para conferencistas y mentores: gestión de audiencias, automatización de ventas de eventos y soporte pre y post conferencia."
        : "AI ecosystem for speakers and mentors: audience management, event sales automation and pre/post conference support.",
      image: "/assets/dementes-stage.png",
      tags: ["Conferences", "Mentoring", "EventsAI"]
    }
  ];


  return (
    <div className="relative">
      <section className="pt-40 pb-20 px-8 relative overflow-hidden bg-black">
        {/* ✨ STATIC PREMIUM BACKGROUND ✨ */}
        <div className="absolute inset-0 opacity-20 bg-[url('/assets/hero-galaxy.png')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center space-y-6"
          >
            <span className="text-primary font-mono text-xs uppercase tracking-[0.5em] block">{p.badge}</span>
            <h1 className="text-8xl md:text-[140px] font-headline font-black uppercase italic tracking-tighter leading-[0.8]">
              {p.title}<br/>
              <span className="text-primary italic">{p.highlight}</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-zinc-500 font-light leading-relaxed">
               {p.subtitle}
            </p>
          </motion.div>
          
          <div className="flex justify-center gap-12 mt-20 border-y border-white/5 py-8">
             <div className="flex items-center gap-3">
                <Monitor className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-headline font-bold uppercase tracking-widest text-zinc-500">{p.stat1}</span>
             </div>
             <div className="flex items-center gap-3">
                <Activity className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-headline font-bold uppercase tracking-widest text-zinc-500">{p.stat2}</span>
             </div>
             <div className="flex items-center gap-3">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-headline font-bold uppercase tracking-widest text-zinc-500">{p.stat3}</span>
             </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-24 bg-black relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* 💎 Clients/Logos Bar 💎 */}
          <div className="mb-24 py-12 border-y border-white/5 bg-surface-container-lowest/30 backdrop-blur-sm overflow-hidden">
             <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-50 hover:opacity-100 transition-opacity">
                <img src="/assets/logo-kraken.png" className="h-8 md:h-12 w-auto grayscale brightness-200" alt="Kraken" />
                <img src="/assets/logo-fundacion.png" className="h-8 md:h-12 w-auto grayscale" alt="Fundacion" />
                <img src="/assets/logo-insomnia.png" className="h-6 md:h-10 w-auto grayscale" alt="Insomnia" />
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             {projects.map((project, i) => (
                <ProjectCard key={i} {...project} />
             ))}
          </div>
          
          <div className="mt-32 text-center">
             <div className="inline-block p-12 bg-surface-container-lowest border border-white/5 space-y-8 max-w-2xl">
                <h3 className="text-3xl font-headline font-black uppercase italic tracking-tighter">{p.ctaTitle}</h3>
                <p className="text-zinc-500 text-sm leading-loose">{p.ctaSubtitle}</p>
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-primary text-black font-black uppercase text-sm px-12 py-5 hover:scale-105 transition-all"
                >
                   {p.ctaBtn}
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
