import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import {
  Cpu,
  Globe,
  ChevronRight,
  Video,
  PenTool,
  BarChart3,
  Rocket,
  TrendingUp,
  X,
  ArrowRight,
  Plus,
  Home as HomeIcon,
  ShieldCheck,
  Stethoscope,
  Scale,
  Zap as ZapIcon,
  Users,
  Brain,
  Building,
  Activity,
  Truck,
  Dumbbell,
  Factory,
  GraduationCap,
  ShoppingBag,
  Banknote,
  Share2,
  BookOpen,
  PlayCircle,
  ArrowUpRight
} from "lucide-react";
import { CinematicBackground } from "../components/CinematicBackground";
import { Chat } from "../components/Chat";
import { useGlobalContext } from "../context/GlobalContext";
import { useLanguage } from "../context/LanguageContext";
import { supabase } from "../lib/supabase";
import { sendWelcomeEmail } from "../services/emailService";
import { FloatingActionHub } from "../components/FloatingActionHub";
import { ROICalculator } from "../components/modals/ROICalculator";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  delay,
  link,
  external = false,
}: {
  icon: any;
  title: string;
  description: string;
  delay: number;
  link?: string;
  external?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className="p-10 bg-surface-container-low border border-white/5 hover:border-primary/20 transition-all group flex flex-col items-start relative overflow-hidden"
  >
    <div className="w-12 h-12 flex items-center justify-center bg-black border border-white/10 group-hover:border-primary/40 transition-colors mb-8">
      <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
    </div>
    <h3 className="text-2xl font-bold font-headline uppercase leading-tight mb-4 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-8">{description}</p>
    
    {link && (
      external ? (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all"
        >
          {link.includes('usakraken') ? "Construye tu Kraken" : "Protocol Info"} <ArrowRight className="w-4 h-4" />
        </a>
      ) : (
        <Link 
          to={link}
          className="mt-auto flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all"
        >
          {link.includes('kraken') ? "Kraken Protocol" : "Protocol Info"} <ArrowRight className="w-4 h-4" />
        </Link>
      )
    )}
  </motion.div>
);

// Icon mapping for emprendedores sectors
const empIcons = [HomeIcon, ShieldCheck, Stethoscope, ZapIcon, Scale, Users, Brain, Activity, Building, Video];
// Icon mapping for empresas sectors
const corpIcons = [Stethoscope, Globe, Scale, Building, Truck, Dumbbell, TrendingUp, BarChart3, Factory, Banknote, GraduationCap, ShoppingBag];

export const Home = () => {
  const { segment } = useGlobalContext();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const h = t.home;

  const [showVideo, setShowVideo] = useState(false);
  const [showProtocol, setShowProtocol] = useState(false);
  const { setIsBookingModalOpen } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMessage(h.newsletterErrorEmail);
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const { error: sbError } = await supabase
        .from("subscribers")
        .insert([{ email, welcome_sent: false }]);

      if (sbError) {
        if (sbError.code === "23505") {
          setErrorMessage(h.newsletterErrorDup);
        } else {
          setErrorMessage(h.newsletterErrorConn);
        }
        setStatus("error");
        return;
      }

      const { success: emailSuccess } = await sendWelcomeEmail(email);
      if (emailSuccess) {
        await supabase
          .from("subscribers")
          .update({ welcome_sent: true })
          .eq("email", email);
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setErrorMessage(h.newsletterErrorCrit);
      setStatus("error");
    }
  };

  // Auto-scroll Blog Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      const slider = document.getElementById("blog-carousel");
      if (slider) {
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        if (slider.scrollLeft >= maxScroll - 10) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: 400, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const videoUrl = "https://www.youtube.com/embed/5b4SLUtAKSk?autoplay=1&rel=0";

  const heroTitle = segment === "empresas" ? h.heroEmpresas : h.heroEmprendedores;
  const subtitle =
    segment === "empresas" ? h.subtitleEmpresas : h.subtitleEmprendedores;

  return (
    <>
      <FloatingActionHub />
      <ROICalculator />

      {/* ─── Hero ─── */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-8 relative section-spacing overflow-hidden">
        <CinematicBackground />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl space-y-12 relative z-20"
        >
          <div className="font-mono text-primary uppercase tracking-[0.6em] text-[10px] bg-primary/5 border border-primary/20 px-4 py-2 inline-block rounded-full mb-4">
            {h.badge}
          </div>
          <h1 className="text-7xl md:text-[140px] font-headline font-black tracking-tighter leading-[0.8] uppercase italic cinematic-reveal text-center">
            {heroTitle.title1}
            <br />
            <span className="text-primary italic text-[110px] md:text-[160px]">
              {heroTitle.highlight}
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-zinc-400 font-label leading-relaxed drop-shadow-lg text-center">
            {subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-10">
            <button
               onClick={() => setIsBookingModalOpen(true)}
               className="bg-primary text-black font-headline uppercase text-sm px-12 py-6 font-black tracking-widest hover:scale-105 shadow-[0_0_50px_rgba(252,242,0,0.2)] transition-all"
            >
              {h.ctaPrimary}
            </button>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-roi-calculator'))}
              className="border border-primary text-primary font-headline uppercase text-sm px-12 py-6 font-black tracking-widest hover:bg-primary hover:text-black transition-all"
            >
              {h.ctaRoi}
            </button>
            <button
              onClick={() => setShowVideo(true)}
              className="border border-white/10 text-white font-headline uppercase text-sm px-12 py-6 font-black tracking-widest hover:bg-white/5 transition-all"
            >
              {h.ctaSecondary}
            </button>
          </div>
        </motion.div>
      </section>

      {/* ─── Tech Marquee ─── */}
      <section className="py-14 bg-black border-y border-white/5 overflow-hidden">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.5em]">
              Integrated Neural Networks & Partners
            </span>
          </div>
          <div className="relative flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -2500] }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="flex gap-24 items-center whitespace-nowrap px-12"
            >
              {[
                "Amazon AWS","Make","n8n","Gemini","Antigravity",
                "Claude","ChatGPT","NotebookLM","Qwen","Suno",
                "Nano Banana","DeepSeek","Open Claw","Ollama",
                "Amazon AWS","Make","n8n","Gemini","Antigravity",
                "Claude","ChatGPT","NotebookLM","Qwen","Suno",
                "Nano Banana","DeepSeek","Open Claw","Ollama",
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 group/item cursor-crosshair transition-all hover:scale-110"
                >
                  {tech === "Suno" ? (
                    <img
                      src="/assets/suno-logo.png"
                      className="h-7 md:h-8 w-auto transition-all duration-500 hover:scale-110"
                      alt="Suno"
                      style={{ filter: "grayscale(100%) contrast(0.5) brightness(1.5)", opacity: 0.4 }}
                      onMouseOver={(e) => { e.currentTarget.style.filter = "none"; e.currentTarget.style.opacity = "1"; }}
                      onMouseOut={(e) => { e.currentTarget.style.filter = "grayscale(100%) contrast(0.5) brightness(1.5)"; e.currentTarget.style.opacity = "0.4"; }}
                    />
                  ) : (
                    <span className="text-2xl md:text-3xl font-headline font-black uppercase italic text-zinc-800 hover:text-primary transition-all tracking-tighter">
                      {tech}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="bg-surface-container-lowest section-spacing border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 space-y-4 px-8">
            <span className="text-primary font-mono text-xs uppercase tracking-widest">
              {h.servicesLabel}
            </span>
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase italic">
              {h.servicesTitle1} <br />
              {h.servicesTitle2}{" "}
              <span className="text-primary">{h.servicesHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 shadow-2xl">
            <ServiceCard icon={Video}      title={h.service1Title} description={h.service1Desc} delay={0.1} link="/servicios/audiovisual" />
            <ServiceCard icon={PenTool}    title={h.service2Title} description={h.service2Desc} delay={0.2} link="/servicios/branding" />
            <ServiceCard icon={Cpu}        title={h.service3Title} description={h.service3Desc} delay={0.3} link="https://www.usakraken.com" external={true} />
            <ServiceCard icon={Globe}      title={h.service4Title} description={h.service4Desc} delay={0.4} link="/servicios/web" />
            <ServiceCard icon={Share2}     title={h.service5Title} description={h.service5Desc} delay={0.5} link="/servicios/redes" />
            <ServiceCard icon={Rocket}     title={h.service6Title} description={h.service6Desc} delay={0.6} link="https://www.usakraken.com" external={true} />
            <ServiceCard icon={BookOpen}   title={h.service7Title} description={h.service7Desc} delay={0.7} link="/servicios/editorial" />
            <div className="p-10 bg-surface-container-low border border-white/5 flex flex-col items-center justify-center text-center space-y-4 opacity-40 grayscale pointer-events-none hidden xl:flex">
              <Plus className="w-8 h-8 text-zinc-800" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em]">{h.servicesComing}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pragmatic Section (Aterrizaje) ─── */}
      <section className="py-32 bg-black relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/2 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5 rounded-full">
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">{h.pragmaticBadge}</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-headline font-black uppercase italic leading-[0.85] tracking-tighter">
              {h.pragmaticTitle} <br />
              <span className="text-primary">{h.pragmaticHighlight}</span>
            </h2>
            <p className="text-xl text-zinc-400 font-label leading-tight italic">
              {h.pragmaticSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-1 bg-white/5 border border-white/5">
            {h.pragmaticItems.map((item, i) => {
               const icons = [TrendingUp, Banknote, Rocket];
               const Icon = icons[i];
               return (
                  <div key={i} className="bg-black p-12 group hover:bg-zinc-900/50 transition-all duration-500">
                    <div className="mb-10 w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-primary/40 transition-colors">
                      <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-2xl font-headline font-black uppercase italic text-white group-hover:text-primary transition-colors mb-4">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 font-label leading-relaxed leading-tight italic opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.desc}
                    </p>
                  </div>
               );
            })}
          </div>
        </div>
      </section>

      {/* ─── Garantía Blindada ─── */}
      <section className="py-24 bg-surface-container-low border-b border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-black">{h.guarantee.badge}</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-headline font-black uppercase italic leading-[0.8] tracking-tighter">
                {h.guarantee.title1} <br />
                <span className="text-primary drop-shadow-[0_0_30px_rgba(252,242,0,0.2)]">{h.guarantee.highlight}</span>
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 font-label leading-tight italic max-w-xl">
                {h.guarantee.body}
              </p>
              <button 
                onClick={() => setShowProtocol(true)}
                className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] text-white hover:text-primary transition-colors group/btn"
              >
                {h.guarantee.cta} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="aspect-square w-full max-w-md mx-auto relative group-hover:scale-105 transition-transform duration-[2s]">
                <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
                <div className="relative h-full w-full bg-black/40 border border-white/5 backdrop-blur-3xl rounded-[4rem] flex flex-col items-center justify-center p-12 text-center overflow-hidden">
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className="grid grid-cols-6 gap-2 p-4">
                      {Array.from({length: 36}).map((_, i) => (
                        <div key={i} className="aspect-square bg-primary/20 rounded-sm" />
                      ))}
                    </div>
                  </div>
                  <ShieldCheck size={80} className="text-white mb-8 group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
                  <div className="space-y-2">
                    <div className="text-4xl font-headline font-black italic text-white uppercase tracking-tighter">100% BLINDADO</div>
                    <div className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">Protocolo de Ejecución Cero Riesgo</div>
                  </div>
                  <div className="mt-12 pt-12 border-t border-white/5 w-full flex justify-between items-center px-4">
                    <div className="text-left">
                      <div className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Sello de</div>
                      <div className="text-xs font-headline font-black italic text-zinc-400">INSOMNIA ALPHA</div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                      <Plus className="text-zinc-600" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Sectores ─── */}
      <section className="py-32 bg-black relative z-10 px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-mono text-[10px] uppercase tracking-[0.5em]">
                {segment === "empresas" ? h.sectorsCorpLabel : h.sectorsEmpLabel}
              </span>
              <h2 className="text-5xl md:text-7xl font-headline font-black uppercase italic tracking-tighter">
                {segment === "empresas" ? h.sectorsCorpTitle : h.sectorsEmpTitle} <br />
                <span className="text-primary italic">{segment === "empresas" ? h.sectorsCorpHighlight : h.sectorsEmpHighlight}</span>
              </h2>
            </div>
            <p className="max-w-md text-zinc-500 font-mono text-[10px] uppercase leading-relaxed border-l border-white/10 pl-8 hidden md:block">
              {segment === "empresas" ? h.sectorsCorpSubtitle : h.sectorsEmpSubtitle}
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 ${segment === "empresas" ? 'lg:grid-cols-4' : 'lg:grid-cols-5'} gap-px bg-white/5 border border-white/5 shadow-2xl`}>
            {(segment === "empresas" ? h.sectorsCorpItems : h.sectorsEmpItems).map((sector, i) => {
              const Icon = segment === "empresas" ? (corpIcons[i] ?? Globe) : (empIcons[i] ?? HomeIcon);
              return (
                <div
                  key={i}
                  className="bg-black p-8 group hover:bg-zinc-900 transition-all duration-500 min-h-[220px] flex flex-col justify-between border border-transparent hover:border-primary/10"
                >
                  <div className="space-y-6">
                    <Icon className="w-8 h-8 text-primary/30 group-hover:text-primary transition-all duration-500 group-hover:scale-110" />
                    <h4 className="text-xs font-headline font-black uppercase italic leading-tight text-white group-hover:text-primary transition-colors tracking-widest">
                      {sector.title}
                    </h4>
                  </div>
                  <p className="text-[10px] text-zinc-600 font-mono leading-relaxed group-hover:text-zinc-400 mt-4 transition-colors">
                    {sector.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Case Studies (Success Lab) ─── */}
      <section className="py-32 bg-surface-container-lowest border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 space-y-4">
            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.5em]">{h.caseStudiesLabel}</span>
            <h2 className="text-5xl md:text-7xl font-headline font-black uppercase italic tracking-tighter">
              {h.caseStudiesTitle} <span className="text-primary">{h.caseStudiesHighlight}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden">
            {h.caseStudiesItems.map((study, i) => (
              <div key={i} className="bg-black p-12 group hover:bg-zinc-900 transition-all duration-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-20 transition-opacity">
                  <ArrowUpRight size={80} strokeWidth={1} />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono text-primary uppercase tracking-[0.4em]">{study.client}</p>
                    <h3 className="text-3xl font-headline font-black uppercase italic leading-none">{study.title}</h3>
                  </div>
                  <div className="py-6 border-y border-white/5">
                    <p className="text-4xl font-headline font-black text-white italic">{study.impact}</p>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mt-2">{h.caseStudiesLabel}</p>
                  </div>
                  <p className="text-zinc-500 font-label leading-relaxed leading-tight italic">{study.desc}</p>
                  <button className="flex items-center gap-4 text-[9px] font-mono uppercase tracking-[0.3em] text-white/40 group-hover:text-primary transition-colors">
                    {h.caseStudiesViewProtocol} <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Free Audit CTA ─── */}
      <section className="py-32 bg-primary relative overflow-hidden group">
        <div className="absolute inset-0 bg-[#000] opacity-[0.03] pattern-grid-lg" />
        <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden lg:block opacity-40 group-hover:opacity-60 transition-opacity duration-1000">
          <img
            src="/assets/ai-agent.png"
            className="w-full h-full object-cover object-right mix-blend-multiply -scale-x-100"
            alt="AI Agent"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-block px-4 py-2 border border-black/10 bg-black/5 font-mono text-[10px] uppercase tracking-[0.4em] text-black/60">
              {h.ctaSectionBadge}
            </div>
            <h2 className="text-5xl md:text-8xl font-headline font-black uppercase italic leading-[0.85] text-black">
              {h.ctaSectionTitle1} <br />
              <span className="opacity-40 text-[0.8em]">{h.ctaSectionTitle2}</span> <br />
              {h.ctaSectionTitle3}
            </h2>
            <div className="space-y-6 max-w-xl">
              <p className="text-black/80 text-xl font-bold leading-tight">
                {segment === "empresas" ? h.ctaSectionBodyEmpresas : h.ctaSectionBodyEmprendedores}
              </p>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-black/10">
                <div className="flex items-center gap-2 text-[10px] font-headline font-bold text-black uppercase">
                  <Plus className="w-3 h-3" /> {h.ctaFeature1}
                </div>
                <div className="flex items-center gap-2 text-[10px] font-headline font-bold text-black uppercase">
                  <Plus className="w-3 h-3" /> {h.ctaFeature2}
                </div>
                <div className="flex items-center gap-2 text-[10px] font-headline font-bold text-black uppercase">
                  <Plus className="w-3 h-3" /> {h.ctaFeature3}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black p-8 md:p-14 space-y-10 shadow-2xl skew-x-[-1deg] relative">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary animate-scan-y opacity-20" />
            <div className="space-y-4">
              <h3 className="text-4xl font-headline font-black uppercase italic text-primary leading-none tracking-tighter">
                {h.ctaFormTitle}
              </h3>
              <p className="text-zinc-500 text-sm font-label leading-relaxed">
                {h.ctaFormSubtitle}
              </p>
            </div>
            <Link
              to="/auditoria"
              className="w-full bg-primary text-black font-black uppercase text-sm py-7 hover:scale-[1.02] transition-all tracking-[0.2em] block text-center shadow-[0_20px_40px_-10px_rgba(252,242,0,0.3)]"
            >
              {h.ctaFormBtn} <ChevronRight className="inline-block w-4 h-4 ml-2" />
            </Link>
            <div className="flex items-center justify-between border-t border-white/5 pt-6">
              <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {h.ctaFormStatus}
              </div>
              <div className="text-[10px] font-mono text-zinc-700">UA-892-ALPHA</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AI Spotlight ─── */}
      <section className="section-spacing relative overflow-hidden bg-black py-48">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/2 rounded-full blur-[200px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center space-y-24">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="inline-block px-5 py-2 border border-primary/20 bg-primary/5 font-mono text-[11px] uppercase tracking-[0.5em] text-primary">
              {h.aiLabel}
            </div>
            <h2 className="text-6xl md:text-[130px] font-headline font-black uppercase italic leading-[0.75] tracking-tighter">
              {h.aiTitle1} <br />
              <span className="text-primary drop-shadow-[0_0_30px_rgba(252,242,0,0.2)]">
                {h.aiHighlight}
              </span>
            </h2>
            <p className="text-zinc-500 text-xl md:text-3xl font-label leading-tight max-w-2xl mx-auto italic opacity-80">
              {h.aiQuote}
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto group cursor-crosshair">
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
              <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary blur-[100px] rounded-full mix-blend-screen opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/60 blur-[130px] rounded-full mix-blend-screen opacity-0 group-hover:opacity-60 transition-opacity duration-700 delay-100" />
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(252,242,0,0.2)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <div className="absolute -inset-10 bg-primary/5 blur-[150px] rounded-full opacity-50 animate-pulse" />
            <div className="relative border border-white/5 bg-surface-container-lowest p-1 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
              <img
                src="/assets/cyborg-brain.png"
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[3s] ease-out"
                alt="AI Cyborg Architecture"
              />
              <div className="absolute inset-0 bg-[url('https://grain-y.com/wp-content/uploads/2021/04/grid-thin-white.png')] opacity-5 pointer-events-none mix-blend-overlay" />
              <div className="absolute top-0 bottom-0 w-64 bg-gradient-to-r from-transparent via-primary/40 to-transparent skew-x-[-20deg] pointer-events-none -left-full group-hover:left-[150%] transition-all duration-[1.5s] ease-in-out" />
            </div>
            <div className="absolute -top-12 -right-12 bg-primary text-black p-8 hidden lg:block skew-x-[-6deg] shadow-2xl">
              <div className="text-5xl font-headline font-black italic">X10</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold">{h.productivityLabel}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-12">
            {[
              { title: h.aiFeature1Title, desc: h.aiFeature1Desc },
              { title: h.aiFeature2Title, desc: h.aiFeature2Desc },
              { title: h.aiFeature3Title, desc: h.aiFeature3Desc },
            ].map((f, i) => (
              <div
                key={i}
                className="p-8 border border-white/5 bg-white/[0.01] space-y-4 text-left group hover:bg-white/[0.02] transition-colors"
              >
                <div className="w-12 h-px bg-primary group-hover:w-full transition-all duration-700" />
                <h4 className="font-headline font-black text-primary uppercase text-lg">{f.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-label">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-20 text-center">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="relative px-16 py-8 bg-primary text-black font-headline font-black uppercase text-sm tracking-[0.4em] hover:scale-105 transition-all shadow-[0_0_60px_rgba(252,242,0,0.15)] group"
            >
              {h.aiDeployBtn}
              <ChevronRight className="inline-block ml-4 w-5 h-5 group-hover:translate-x-3 transition-transform" />
              <div className="absolute inset-0 border border-black/10 scale-[1.05]" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── Video Testimonials ─── */}
      <section className="section-spacing bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/5" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-white/5" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="mb-20 space-y-4">
            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.5em]">
              {h.videoTestimonialsLabel}
            </span>
            <h2 className="text-5xl md:text-7xl font-headline font-black uppercase italic tracking-tighter">
              {h.videoTestimonialsTitle}{" "}
              <span className="text-primary">{h.videoTestimonialsHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {h.testimonials.map((test, i) => (
              <div
                key={i}
                className="group relative aspect-[4/5] overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl transition-all duration-700 hover:border-primary/40"
              >
                <img 
                  src={`/assets/${test.img}`} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-110 transition-all duration-[3s]" 
                  alt={test.name} 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer"
                    onClick={() => navigate('/404')}
                  >
                    <PlayCircle size={48} strokeWidth={1} />
                  </motion.div>
                </div>

                <div className="absolute bottom-0 p-8 space-y-4 w-full">
                  <div className="text-3xl font-headline font-black italic text-primary drop-shadow-2xl">
                    {test.result}
                  </div>
                  <div className="space-y-1">
                    <div className="font-headline font-black text-white uppercase text-lg leading-tight">{test.name}</div>
                    <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-[0.4em]">{test.role}</div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 p-6">
                  <div className="p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                    <Video size={16} className="text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Client Logos ─── */}
      <section className="py-20 bg-black border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.4em] text-center mb-16">
            {h.logosLabel}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {[
              { name: "EC Logo",          img: "logo-ec.png",            size: "h-8 md:h-10" },
              { name: "Fundación",        img: "logo-fundacion.png",     size: "h-10 md:h-12" },
              { name: "Kraken",           img: "logo-kraken.png",        size: "h-10 md:h-12" },
              { name: "Madmonkey",        img: "logo-madmonkey.png",     size: "h-6 md:h-8" },
              { name: "Mentes Maestras",  img: "logo-mentesmaestras.png",size: "h-8 md:h-10" },
              { name: "Dementes",         img: "logo-dementes.png",      size: "h-8 md:h-10" },
            ].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <img
                  src={`/assets/${logo.img}`}
                  alt={logo.name}
                  className={`${logo.size} w-auto object-contain`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector(".fallback-text")) {
                      const text = document.createElement("span");
                      text.className = "fallback-text text-[10px] font-mono text-white/50 uppercase tracking-widest whitespace-nowrap";
                      text.innerText = logo.name;
                      parent.appendChild(text);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Blog ─── */}
      <section className="section-spacing bg-black overflow-hidden relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-mono text-[10px] uppercase tracking-[0.5em]">{h.blogLabel}</span>
              <h2 className="text-5xl md:text-7xl font-headline font-black uppercase italic tracking-tighter">
                {h.blogTitle} <br />
                <span className="text-primary">{h.blogHighlight}</span>
              </h2>
            </div>
            <Link
              to="/blog"
              className="group flex items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
            >
              {h.blogViewAll} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="relative group/carousel">
            <div
              id="blog-carousel"
              className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            >
              {[
                { id: "arquitecturas-agentes-2026", title: "El Despertar de los Agentes Autónomos",    cat: "Estrategia",    date: "MAR 24, 2026", img: "/assets/agent-architectures-2026-new.png" },
                { id: "disrupcion-n8n-make",        title: "La Sentencia de Muerte de las Consultoras IT", cat: "Automatización",date: "MAR 18, 2026", img: "/assets/n8n-make-disruption-new.png" },
                { id: "roi-agentes-ia",             title: "Matemática de Guerrilla: ROI Brutal",       cat: "Estrategia",    date: "ABR 01, 2026", img: "/assets/roi-ai-agents.png" },
                { id: "clonacion-vendedor-ia",      title: "Clonación Genética de Vendedores",          cat: "Ventas",        date: "ABR 02, 2026", img: "/assets/cloned-sales-vendedor.png" },
                { id: "crm-invisible-integracion",  title: "CRM Invisible: Poder Sin Fricción",         cat: "Automatización",date: "ABR 03, 2026", img: "/assets/crm-invisible-automation.png" },
                { id: "prospeccion-piloto-automatico", title: "El Calendario de Hierro 24/7",           cat: "Growth",        date: "ABR 07, 2026", img: "/assets/prospecting-autopilot.png" },
              ].map((post, i) => (
                <Link
                  key={i}
                  to={`/blog/${post.id}`}
                  className="min-w-[320px] md:min-w-[450px] snap-center group relative block aspect-[16/10] overflow-hidden border border-white/5 bg-zinc-900"
                >
                  <img
                    src={post.img}
                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[3s] opacity-60 group-hover:opacity-100"
                    alt={post.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-primary transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute bottom-0 p-8 space-y-3 w-full z-10">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 bg-primary text-black font-mono text-[8px] font-black uppercase tracking-widest">{post.cat}</span>
                      <span className="text-white/40 font-mono text-[8px] uppercase tracking-[0.2em]">{post.date}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-headline font-black uppercase italic group-hover:text-primary transition-colors leading-[0.9] tracking-tighter line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/0 group-hover:border-primary/50 transition-all duration-500 m-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Newsletter ─── */}
      <section className="section-spacing bg-primary relative overflow-hidden text-black border-y border-black/10">
        <div className="absolute inset-0 bg-[#000] opacity-[0.02] pattern-grid-lg" />
        <div className="max-w-7xl mx-auto relative z-10 px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-block px-4 py-2 border border-black/10 bg-black/5 font-mono text-[10px] uppercase tracking-[0.4em] text-black/60">
                {h.newsletterBadge}
              </div>
              <h2 className="text-6xl md:text-[110px] font-headline font-black uppercase italic leading-[0.8] tracking-tighter">
                {h.newsletterTitle} <br />
                <span className="opacity-30 text-[0.8em]">{h.newsletterSubtitle}</span>
              </h2>
              <p className="text-black/80 font-label text-xl md:text-2xl max-w-xl mx-auto lg:mx-0 leading-tight italic">
                {h.newsletterBody}
              </p>
            </div>

            <div className="bg-black p-8 md:p-14 space-y-10 shadow-2xl relative border border-white/5">
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3 text-primary font-mono text-[8px] uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  {h.newsletterBadge}
                </div>
                <h3 className="text-4xl md:text-5xl font-headline font-black uppercase italic text-white leading-none tracking-tighter">
                  {h.ctaFormTitle}
                </h3>
                <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em] leading-relaxed max-w-sm">
                  {h.newsletterFormSub}
                </p>
              </div>

              <div className="space-y-6">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full py-8 bg-primary text-black font-headline font-black uppercase text-sm tracking-[0.3em] transition-all flex items-center justify-center gap-4 hover:brightness-110 hover:scale-[1.02] shadow-[0_0_40px_rgba(252,242,0,0.15)]"
                >
                  {h.newsletterBtn} <ArrowRight size={20} />
                </button>

                <div className="flex items-center justify-center gap-4 py-2 opacity-50 text-[9px] font-mono uppercase tracking-widest text-zinc-500">
                  <ShieldCheck size={12} className="text-primary" />
                  {h.newsletterEncryption}
                </div>
              </div>

              <div className="absolute -bottom-px left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <Chat />

      {/* ─── Protocol Modal ─── */}
      <AnimatePresence>
        {showProtocol && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowProtocol(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 shadow-[0_0_80px_rgba(252,242,0,0.1)] p-6 md:p-10 overflow-hidden"
            >
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      <span className="text-[8px] font-mono text-primary uppercase tracking-widest">{t.home.guaranteeProtocol.subtitle}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-headline font-black uppercase italic leading-tight text-white tracking-tighter">
                      {t.home.guaranteeProtocol.title}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setShowProtocol(false)}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors group"
                  >
                    <X size={24} className="text-zinc-500 group-hover:text-white transition-colors" />
                  </button>
                </div>

                <div className="grid gap-4">
                  {t.home.guaranteeProtocol.items.map((item: any, i: number) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group/item flex gap-6 p-4 border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-all"
                    >
                      <div className="flex-shrink-0 w-12 h-12 border border-white/10 flex items-center justify-center font-mono text-primary group-hover/item:border-primary/50 transition-colors">
                        0{i + 1}
                      </div>
                      <div className="space-y-1">
                        <div className="font-headline font-black text-white uppercase italic tracking-wider text-sm">
                          {item.title}
                        </div>
                        <p className="text-zinc-500 font-mono text-[11px] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-8 flex flex-col items-center gap-6">
                  <button
                    onClick={() => setShowProtocol(false)}
                    className="w-full bg-primary text-black font-black uppercase text-xs py-5 tracking-[0.3em] hover:brightness-110 transition-all shadow-[0_0_30px_rgba(252,242,0,0.15)]"
                  >
                    {t.home.guaranteeProtocol.ctaClose}
                  </button>
                  <p className="text-[7px] font-mono text-zinc-700 uppercase tracking-widest">
                    Authentication Token: 0x4A6B9C2_V4.0 // Insomnia Alpha Security Division
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ─── Video Modal ─── */}
      <AnimatePresence>
        {showVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVideo(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-6xl aspect-video bg-black border border-white/10 shadow-[0_0_100px_rgba(252,242,0,0.1)] group"
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-16 right-0 text-white flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] hover:text-primary transition-colors"
              >
                {h.videoClose} <X size={24} className="p-1 border border-white/20 rounded-full" />
              </button>
              <iframe
                src={videoUrl}
                title="Insomnia AI Showreel"
                className="w-full h-full grayscale-[50%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <div className="absolute -bottom-10 left-0 text-[8px] font-mono text-zinc-600 uppercase tracking-widest flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Live Stream Decrypted: Protocol 5b4-Alpha
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
