import { motion } from "motion/react";
import { CinematicBackground } from "../components/CinematicBackground";
import { CheckCircle2, Calendar, FileText, ArrowRight, Home, LayoutGrid, Clock, Tag } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export const SuccessBooking = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const s = t.successBooking || {
    badge: "SESSION CONFIRMED",
    title: "SESSION",
    highlight: "CONFIRMED",
    subtitle: "Your strategic diagnosis has been scheduled.",
    checkEmail: "Check your inbox for details.",
    nextSteps: "NEXT STEPS",
    step1: "Add to calendar",
    step2: "Prepare questions",
    step3: "Explore portfolio",
    ctaHome: "BACK TO HOME",
    ctaPortfolio: "VIEW PORTFOLIO",
    labelMission: "Mission",
    labelDate: "Date",
    labelTime: "Time",
  };

  // Extract TidyCal variables from URL
  const name = searchParams.get("name") || "";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";
  const type = searchParams.get("type") || "";

  const generateCalendarLink = () => {
    if (!date || !time) return null;
    
    try {
      // TidyCal sends date as YYYY-MM-DD and time as HH:mm
      // Google Calendar format: YYYYMMDDTHHmmSSZ (UTC preferred, but we'll use Local as fallback)
      const startDateTime = `${date.replace(/-/g, "")}T${time.replace(/:/g, "")}00`;
      
      // Assume 1 hour duration
      const [hours, minutes] = time.split(":").map(Number);
      const endHours = (hours + 1).toString().padStart(2, "0");
      const endDateTime = `${date.replace(/-/g, "")}T${endHours}${minutes.toString().padStart(2, "0")}00`;

      const title = encodeURIComponent(`INSOMNIA AI: ${type || "AUDITORÍA ESTRATÉGICA"}`);
      const details = encodeURIComponent("Sesión de resultados y estrategia de IA con INSOMNIA.");
      
      return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDateTime}/${endDateTime}&details=${details}`;
    } catch (e) {
      console.error("Error generating calendar link:", e);
      return null;
    }
  };

  const calendarLink = generateCalendarLink();

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black pb-20 pt-32">
      <CinematicBackground />

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-4xl w-full px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-surface-container-low border border-primary/20 p-8 md:p-16 relative overflow-hidden"
        >
          {/* Glitch Grid Overlay */}
          <div className="absolute inset-0 grid grid-cols-12 opacity-[0.03] pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/50 h-full" />
            ))}
          </div>

          <div className="flex flex-col items-center text-center space-y-8 relative z-10">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center"
            >
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </motion.div>

            {/* Title & Badge */}
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-block px-4 py-1 bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.4em] text-primary uppercase"
              >
                {s.badge}
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-headline font-black uppercase italic text-white tracking-tighter">
                {name ? (
                  <>HOLA, <span className="text-primary">{name.toUpperCase()}</span></>
                ) : (
                  <>{s.title} <span className="text-primary">{s.highlight}</span></>
                )}
              </h1>
              <p className="max-w-xl mx-auto text-zinc-400 font-light text-base md:text-lg leading-relaxed italic">
                {s.subtitle}
              </p>
            </div>

            {/* Booking Details Card */}
            {(date || time || type) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full grid grid-cols-1 md:grid-cols-3 gap-1 border border-white/10 bg-white/5"
              >
                {type && (
                  <div className="p-6 flex flex-col items-center gap-2 border-b md:border-b-0 md:border-r border-white/10">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">{s.labelMission}</span>
                    <span className="text-sm font-bold text-white uppercase tracking-tight">{type}</span>
                  </div>
                )}
                {date && (
                  <div className="p-6 flex flex-col items-center gap-2 border-b md:border-b-0 md:border-r border-white/10">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">{s.labelDate}</span>
                    <span className="text-sm font-bold text-white uppercase tracking-tight">{date}</span>
                  </div>
                )}
                {time && (
                  <div className="p-6 flex flex-col items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">{s.labelTime}</span>
                    <span className="text-sm font-bold text-white uppercase tracking-tight">{time}</span>
                  </div>
                )}
              </motion.div>
            )}

            {/* Notification Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full max-w-lg bg-black/40 border-l-4 border-primary p-6 text-left"
            >
              <p className="text-sm font-light text-zinc-300">
                {s.checkEmail}
              </p>
            </motion.div>

            {/* Next Steps Container */}
            <div className="w-full pt-4 grid md:grid-cols-3 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Calendar className="w-5 h-5" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{s.nextSteps} 01</span>
                </div>
                <p className="text-xs text-zinc-500 font-mono leading-relaxed uppercase">{s.step1}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <FileText className="w-5 h-5" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{s.nextSteps} 02</span>
                </div>
                <p className="text-xs text-zinc-500 font-mono leading-relaxed uppercase">{s.step2}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <LayoutGrid className="w-5 h-5" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{s.nextSteps} 03</span>
                </div>
                <p className="text-xs text-zinc-500 font-mono leading-relaxed uppercase">{s.step3}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="w-full pt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                to="/"
                className="w-full sm:w-auto bg-black border border-white/20 text-white font-black uppercase text-xs px-10 py-5 tracking-widest flex items-center justify-center gap-3 hover:bg-white/5 transition-all"
              >
                <Home className="w-4 h-4" /> {s.ctaHome}
              </Link>
              {calendarLink && (
                <a
                  href={calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-primary text-black font-black uppercase text-xs px-10 py-5 tracking-widest flex items-center justify-center gap-3 hover:scale-105 transition-all"
                >
                  <Calendar className="w-4 h-4" /> {s.ctaCalendar}
                </a>
              )}
              <Link
                to="/portafolio"
                className="w-full sm:w-auto bg-white/5 border border-white/10 text-white font-black uppercase text-xs px-10 py-5 tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
              >
                {s.ctaPortfolio} <ArrowRight className="w-4 h-4 text-primary" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* System Footer Metadata */}
        <div className="mt-8 flex justify-between items-center text-[10px] font-mono text-zinc-800 uppercase tracking-[0.3em]">
          <span>Deployment: confirmed</span>
          <span>Status: systems_operational</span>
        </div>
      </div>
    </div>
  );
};
