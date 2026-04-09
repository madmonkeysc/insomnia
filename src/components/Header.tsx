import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { useGlobalContext } from "../context/GlobalContext";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";

const NavItem = ({ label, to, active = false }: { label: string, to: string, active?: boolean }) => (
  <Link 
    to={to}
    className={`font-headline tracking-tighter uppercase text-xs font-black transition-all px-4 py-2 relative group ${active ? 'text-primary' : 'text-zinc-500 hover:text-zinc-200'}`}
  >
    {label}
    {active && (
      <motion.div 
        layoutId="nav-underline"
        className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary shadow-[0_0_10px_#fcf200]" 
      />
    )}
  </Link>
);

export const Header = () => {
  const { segment, setSegment, setIsBookingModalOpen } = useGlobalContext();
  const { lang, setLang, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-2xl flex justify-between items-center px-6 md:px-10 h-20 z-[200]">
      <div className="flex items-center">
        <Link to="/">
          <img 
            src="/assets/logo-insomnia.png" 
            alt="Insomnia Studio Logo" 
            className="h-10 md:h-12 w-auto object-contain hover:scale-105 transition-transform drop-shadow-[0_0_10px_rgba(252,242,0,0.5)]"
          />
        </Link>
        
        <div className="hidden lg:flex p-1 bg-white/5 rounded-full border border-white/5 ml-8">
           <button 
             onClick={() => setSegment("empresas")}
             className={`px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${segment === "empresas" ? "bg-primary text-black shadow-lg" : "text-zinc-500 hover:text-zinc-300"}`}
           >
             {t.nav.empresas}
           </button>
           <button 
             onClick={() => setSegment("emprendedores")}
             className={`px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${segment === "emprendedores" ? "bg-primary text-black shadow-lg" : "text-zinc-500 hover:text-zinc-300"}`}
           >
             {t.nav.emprendedores}
           </button>
        </div>
      </div>

      <nav className="hidden md:flex gap-4 items-center">
        <div className="relative group">
          <NavItem label={t.nav.services} to="/servicios" active={location.pathname.startsWith("/servicios")} />
          <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
            <div className="bg-black/90 backdrop-blur-xl border border-white/10 p-2 min-w-[200px] shadow-2xl">
              <Link to="/servicios/branding" className="block px-4 py-3 text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500 hover:text-primary hover:bg-white/5 transition-all border-b border-white/5 last:border-0">
                {t.footer.linkBranding}
              </Link>
              <Link to="/servicios/audiovisual" className="block px-4 py-3 text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500 hover:text-primary hover:bg-white/5 transition-all border-b border-white/5 last:border-0">
                {t.footer.linkContent}
              </Link>
              <Link to="/servicios/kraken" className="block px-4 py-3 text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500 hover:text-primary hover:bg-white/5 transition-all border-b border-white/5 last:border-0">
                {t.footer.linkAgents}
              </Link>
              <Link to="/servicios/redes" className="block px-4 py-3 text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500 hover:text-primary hover:bg-white/5 transition-all border-b border-white/5 last:border-0">
                {t.footer.linkSocial}
              </Link>
              <Link to="/servicios/automatizacion" className="block px-4 py-3 text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500 hover:text-primary hover:bg-white/5 transition-all border-b border-white/5 last:border-0">
                {t.footer.linkAutomation}
              </Link>
              <Link to="/servicios/editorial" className="block px-4 py-3 text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500 hover:text-primary hover:bg-white/5 transition-all border-b border-white/5 last:border-0">
                {t.footer.linkEditorial}
              </Link>
            </div>
          </div>
        </div>
        <NavItem label="Nosotros" to="/nosotros" active={location.pathname === "/nosotros"} />
        <NavItem label={t.nav.portfolio} to="/portafolio" active={location.pathname === "/portafolio"} />
        <NavItem label={t.nav.agents} to="/agentes" active={location.pathname === "/agentes"} />
        <NavItem label={t.nav.contact} to="/contacto" active={location.pathname === "/contacto"} />
      </nav>

      <div className="flex items-center gap-4 md:gap-5">
        {/* Language Toggle */}
        <div className="hidden sm:flex items-center gap-1 border border-white/10 bg-white/[0.03] px-1 py-1 rounded-sm">
          <button
            onClick={() => setLang("es")}
            className={`px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded-sm transition-all duration-200 ${lang === "es" ? "bg-primary text-black" : "text-zinc-500 hover:text-zinc-300"}`}
          >
            ES
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded-sm transition-all duration-200 ${lang === "en" ? "bg-primary text-black" : "text-zinc-500 hover:text-zinc-300"}`}
          >
            EN
          </button>
        </div>

        <div className="hidden sm:flex items-center">
          <button 
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-primary hover:brightness-110 text-black font-black text-[10px] uppercase tracking-widest px-6 py-2.5 transition-all shadow-[0_0_20px_rgba(252,242,0,0.2)]"
          >
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-zinc-400 hover:text-primary transition-colors z-[210] relative"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 h-[100dvh] w-full bg-[#0a0a0a]/98 backdrop-blur-3xl z-[200] md:hidden flex flex-col pt-24 overflow-y-auto overflow-x-hidden"
          >
            <div className="flex flex-col flex-1 p-8 space-y-12">
               {/* Primary Links */}
               <div className="space-y-1">
                  <div className="text-[10px] font-mono text-primary/50 uppercase tracking-[0.5em] mb-6 flex items-center gap-2">
                     <div className="w-1 h-1 bg-primary pulse" /> {t.nav.mobileNav}
                  </div>
                  
                  <nav className="flex flex-col gap-1">
                     <Link to="/" className="text-4xl font-headline font-black uppercase italic text-white hover:text-primary transition-colors py-2">{t.nav.home}</Link>
                     
                     <div className="py-2">
                       <details className="group">
                          <summary className="list-none flex justify-between items-center text-4xl font-headline font-black uppercase italic text-white hover:text-primary cursor-pointer group-open:text-primary transition-colors">
                             {t.nav.services}
                             <ChevronRight className="w-8 h-8 group-open:rotate-90 transition-transform" />
                          </summary>
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="bg-white/5 border-l-2 border-primary/20 mt-4 ml-4 space-y-1"
                          >
                             <Link to="/servicios/branding" className="block text-xs font-mono font-black uppercase tracking-widest text-zinc-500 hover:text-primary py-4 px-6 border-b border-white/5">{t.footer.linkBranding}</Link>
                             <Link to="/servicios/audiovisual" className="block text-xs font-mono font-black uppercase tracking-widest text-zinc-500 hover:text-primary py-4 px-6 border-b border-white/5">{t.footer.linkContent}</Link>
                             <Link to="/servicios/kraken" className="block text-xs font-mono font-black uppercase tracking-widest text-zinc-500 hover:text-primary py-4 px-6 border-b border-white/5">{t.footer.linkAgents}</Link>
                             <Link to="/servicios/redes" className="block text-xs font-mono font-black uppercase tracking-widest text-zinc-500 hover:text-primary py-4 px-6 border-b border-white/5">{t.footer.linkSocial}</Link>
                             <Link to="/servicios/automatizacion" className="block text-xs font-mono font-black uppercase tracking-widest text-zinc-500 hover:text-primary py-4 px-6 border-b border-white/5">{t.footer.linkAutomation}</Link>
                             <Link to="/servicios/editorial" className="block text-xs font-mono font-black uppercase tracking-widest text-zinc-500 hover:text-primary py-4 px-6 last:border-0">{t.footer.linkEditorial}</Link>
                          </motion.div>
                       </details>
                     </div>

                     <Link to="/nosotros" className="text-4xl font-headline font-black uppercase italic text-white hover:text-primary transition-colors py-2">Nosotros</Link>
                     <Link to="/portafolio" className="text-4xl font-headline font-black uppercase italic text-white hover:text-primary transition-colors py-2">{t.nav.portfolio}</Link>
                     <Link to="/agentes" className="text-4xl font-headline font-black uppercase italic text-white hover:text-primary transition-colors py-2">{t.nav.agents}</Link>
                     <Link to="/contacto" className="text-4xl font-headline font-black uppercase italic text-white hover:text-primary transition-colors py-2">{t.nav.contact}</Link>
                  </nav>
               </div>

               {/* Configuration Tools */}
               <div className="space-y-10 pt-8 border-t border-white/5">
                  <div className="space-y-4">
                    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">/ {t.nav.mobileLanguage}</div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setLang("es")}
                        className={`py-4 text-[10px] font-mono font-bold uppercase tracking-widest transition-all border ${lang === "es" ? "bg-primary text-black border-primary shadow-[0_0_15px_rgba(252,242,0,0.3)]" : "text-zinc-500 border-white/10"}`}
                      >
                        ESPAÑOL
                      </button>
                      <button
                        onClick={() => setLang("en")}
                        className={`py-4 text-[10px] font-mono font-bold uppercase tracking-widest transition-all border ${lang === "en" ? "bg-primary text-black border-primary shadow-[0_0_15px_rgba(252,242,0,0.3)]" : "text-zinc-500 border-white/10"}`}
                      >
                        ENGLISH
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                     <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">/ {t.nav.mobileSegment}</div>
                     <div className="flex bg-white/5 border border-white/10 p-1 rounded-full relative w-full h-14 overflow-hidden">
                        <motion.div 
                          className="absolute inset-x-1 inset-y-1 w-[calc(50%-4px)] bg-primary rounded-full z-0"
                          animate={{ x: segment === "empresas" ? 0 : "100%" }}
                        />
                        <button 
                          onClick={() => setSegment("empresas")}
                          className={`flex-1 relative z-10 text-[10px] font-black uppercase tracking-widest transition-colors ${segment === "empresas" ? "text-black" : "text-zinc-500"}`}
                        >
                          {t.nav.empresas}
                        </button>
                        <button 
                          onClick={() => setSegment("emprendedores")}
                          className={`flex-1 relative z-10 text-[10px] font-black uppercase tracking-widest transition-colors ${segment === "emprendedores" ? "text-black" : "text-zinc-500"}`}
                        >
                          {t.nav.emprendedores}
                        </button>
                     </div>
                  </div>

                  <Link to="/contacto" className="w-full bg-primary text-black font-black uppercase text-sm py-6 flex items-center justify-center tracking-[0.2em] shadow-[0_0_30px_rgba(252,242,0,0.2)] hover:scale-[1.02] transition-transform">
                     {t.nav.cta}
                  </Link>
               </div>

               <div className="pt-8 text-center pb-12">
                  <p className="text-[8px] font-mono text-zinc-700 tracking-[0.5em] uppercase">Insomnia Studio Terminal v4.2.0</p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
