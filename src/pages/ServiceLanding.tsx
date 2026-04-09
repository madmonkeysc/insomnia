import { useParams, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useGlobalContext } from "../context/GlobalContext";
import { CinematicBackground } from "../components/CinematicBackground";
import { 
  Video, 
  Palette, 
  Code2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  Shield
} from "lucide-react";

const SERVICE_MAP: Record<string, string> = {
  audiovisual: "service1",
  branding: "service2",
  desarrollo: "service4"
};

const SERVICE_ICONS: Record<string, any> = {
  audiovisual: Video,
  branding: Palette,
  desarrollo: Code2
};

export const ServiceLanding = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const { setIsBookingModalOpen } = useGlobalContext();

  if (!id || !SERVICE_MAP[id]) {
    return <Navigate to="/servicios" replace />;
  }

  const serviceKey = SERVICE_MAP[id];
  const s = (t.services as any)[serviceKey];
  const Icon = SERVICE_ICONS[id];

  return (
    <div className="relative min-h-screen bg-black">
      {/* ── Hero Section ────────────────────── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-8">
        <CinematicBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-[1]" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-4"
          >
            <span className="px-4 py-1 border border-primary/30 bg-primary/5 text-primary font-mono text-[10px] uppercase tracking-[0.4em]">
              {s.serviceSubtitle}
            </span>
            <h1 className="text-6xl md:text-9xl font-headline font-black uppercase italic tracking-tighter leading-[0.8] py-4">
              {s.serviceTitle.split(' & ')[0]}<br />
              <span className="text-primary">& {s.serviceTitle.split(' & ')[1]}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-3xl mx-auto text-xl text-zinc-400 font-light leading-relaxed"
          >
            {s.serviceDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pt-8"
          >
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-primary text-black font-black uppercase text-sm px-16 py-6 hover:scale-105 transition-all shadow-[0_0_50px_rgba(252,242,0,0.2)] tracking-widest"
            >
              Iniciar Proyecto
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </section>

      {/* ── Detailed Insight ────────────────── */}
      <section className="py-32 px-8 border-y border-white/5 relative bg-zinc-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl font-headline font-black uppercase italic leading-none">
              El Estándar <br /> <span className="text-primary italic">Insonmne.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed italic">
              "{s.serviceDetailed}"
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              {s.serviceFeatures.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-1 relative group overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-12 text-center space-y-6">
                <Icon className="w-24 h-24 text-primary opacity-20" />
                <div className="h-px w-24 bg-primary/30" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                  Technical Architecture Node
                </p>
              </div>
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Workflow ────────────────── */}
      <section className="py-32 px-8 bg-black">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-4">
            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.5em]">Workflow</span>
            <h2 className="text-5xl md:text-7xl font-headline font-black uppercase italic tracking-tighter">
              Nuestro <span className="text-primary">Protocolo</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {s.serviceProcess.map((step: any, i: number) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 bg-zinc-900/50 border border-white/5 hover:border-primary/30 transition-all space-y-6 relative group"
              >
                <div className="text-6xl font-headline font-black italic text-white/5 absolute top-8 right-8 group-hover:text-primary/10 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-headline font-black uppercase italic text-white group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
                <div className="pt-4 flex items-center gap-2 text-primary text-[10px] font-mono font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  System Phase <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pillars ─────────────────────────── */}
      <section className="py-32 px-8 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <Shield className="w-8 h-8 text-primary" />
            <h4 className="text-xl font-headline font-black uppercase italic">{t.services.pillar1Title}</h4>
            <p className="text-zinc-500 text-sm">{t.services.pillar1Desc}</p>
          </div>
          <div className="space-y-4">
            <Zap className="w-8 h-8 text-primary" />
            <h4 className="text-xl font-headline font-black uppercase italic">{t.services.pillar2Title}</h4>
            <p className="text-zinc-500 text-sm">{t.services.pillar2Desc}</p>
          </div>
          <div className="space-y-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h4 className="text-xl font-headline font-black uppercase italic">{t.services.pillar3Title}</h4>
            <p className="text-zinc-500 text-sm">{t.services.pillar3Desc}</p>
          </div>
        </div>
      </section>

      {/* ── CTA Final ───────────────────────── */}
      <section className="py-40 bg-black text-center px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-8xl font-headline font-black uppercase italic tracking-tighter leading-none opacity-80">
            ¿Listo para <br /> <span className="text-primary italic">Trascender?</span>
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-block bg-white text-black font-black uppercase text-sm px-16 py-8 shadow-[0_0_60px_rgba(255,255,255,0.1)] hover:bg-primary transition-colors"
            >
              Contactar con un Experto
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
