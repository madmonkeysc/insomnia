import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18.5c0 1.91-1.1 3.99-3.13 4.82-1.91.78-4.39.44-5.91-1.01-1.88-1.75-2.02-4.91-.4-6.91 1.02-1.3 2.67-2.02 4.31-1.92.02 1.33.01 2.66.02 4-.83-.14-1.76.14-2.36.74-.83.84-.73 2.18.15 2.91 1.06.88 2.8.53 3.32-.78.07-.17.09-.36.09-.54V.02h.09z"/>
  </svg>
);

export const Footer = () => {
  const { t } = useLanguage();
  const f = t.footer;
  const c = t.config;

  return (
    <footer className="section-spacing border-t border-white/5 bg-black py-32 text-center relative z-10">
      <div className="mb-20">
        <div className="mb-8 flex justify-center">
          <Link to="/">
            <img src="/assets/logo-insomnia.png" alt="Insomnia Logo" className="h-20 w-auto object-contain hover:scale-105 transition-transform" />
          </Link>
        </div>
        <p className="text-zinc-600 font-mono text-xs uppercase tracking-[0.3em]">{f.tagline}</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto mb-24 text-left px-8">
        <div className="space-y-6">
          <h4 className="font-headline font-black uppercase text-sm tracking-widest text-primary">{f.colStudio}</h4>
          <ul className="space-y-3 text-zinc-500 text-sm font-semibold uppercase tracking-tighter">
            <li><Link to="/nosotros" className="hover:text-white transition-colors">{f.linkNosotros}</Link></li>
            <li><Link to="/portafolio" className="hover:text-white transition-colors">{f.linkShowreel}</Link></li>
            <li><Link to="/agentes" className="hover:text-white transition-colors">{f.linkProcesosIA}</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-headline font-black uppercase text-sm tracking-widest text-primary">{f.colServices}</h4>
          <ul className="space-y-3 text-zinc-500 text-sm font-semibold uppercase tracking-tighter">
            <li><Link to="/servicios/branding" className="hover:text-white transition-colors">{f.linkBranding}</Link></li>
            <li><Link to="/servicios/audiovisual" className="hover:text-white transition-colors">{f.linkContent}</Link></li>
            <li>
              <a 
                href="https://www.usakraken.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                {f.linkAgents}
              </a>
            </li>
            <li><Link to="/servicios/redes" className="hover:text-white transition-colors">{f.linkSocial}</Link></li>
            <li><Link to="/servicios/automatizacion" className="hover:text-white transition-colors">{f.linkAutomation}</Link></li>
            <li><Link to="/servicios/editorial" className="hover:text-white transition-colors">{f.linkEditorial}</Link></li>
          </ul>
        </div>
        <div className="space-y-8">
          <div>
            <h4 className="font-headline font-black uppercase text-sm tracking-widest text-primary mb-6">{f.colContact}</h4>
            <div className="space-y-2 mb-6">
              <a href={`mailto:${c.email}`} className="block text-xl md:text-2xl font-headline font-black uppercase italic hover:text-primary transition-colors truncate">
                {c.email}
              </a>
              <a href={`tel:${c.phone.replace(/\s+/g, '')}`} className="block text-lg font-mono font-bold text-zinc-400 hover:text-white transition-colors">
                {c.phone}
              </a>
            </div>
            
            <div className="space-y-1 mb-8">
              {c.locations.map((loc, i) => (
                <div key={i} className="text-zinc-500 text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full" />
                  {loc}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href={c.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 group">
              <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a href={c.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 group">
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a href={c.socials.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 group">
              <TikTokIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a href={c.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 group">
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 group bg-primary/5">
              <MessageCircle className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 px-8">
        <div className="font-mono text-[10px] uppercase tracking-widest">© {new Date().getFullYear()} Insomnia AI Studio — {f.copyright}</div>
        <div className="flex gap-10 font-mono text-[10px] uppercase tracking-widest">
          <Link to="/aviso-privacidad" className="hover:text-primary transition-colors">{f.privacy}</Link>
          <Link to="/terminos-condiciones" className="hover:text-primary transition-colors">{f.terms}</Link>
        </div>
      </div>
    </footer>
  );
};
