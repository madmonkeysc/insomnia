import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ChevronRight, 
  Target, 
  Search,
  Zap,
  Sparkles,
  Star,
  ShieldCheck,
  Play,
  Bot,
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useGlobalContext } from '../context/GlobalContext';

export const KrakenLanding = () => {
  const { t } = useLanguage();
  const { setIsBookingModalOpen } = useGlobalContext();
  const s = (t.services as any).service3;

  if (!s) return null;

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-red-500/30 overflow-x-hidden">
      {/* Background & HUD */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
          alt="Kraken Background"
        />
        <div className="absolute inset-0 opacity-[0.08] bg-dots" />
        
        {/* Animated HUD Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      </div>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-500/5 border border-red-500/20 backdrop-blur-xl">
              <Bot className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.4em] text-red-400 uppercase font-bold">
                {s.subtitle}
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hero-title-premium"
            >
              <span className="block mb-2">{s.heroTitle1}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-rose-600 drop-shadow-[0_0_50px_rgba(239,68,68,0.4)]">
                {s.heroTitleHighlight}
              </span> 
              <span className="block mt-2">{s.heroTitle2}</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl text-xl text-zinc-400 leading-relaxed font-light whitespace-pre-line"
            >
              {s.desc}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              <a 
                href="https://www.usakraken.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-12 py-6 bg-red-600 rounded-full font-black overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(220,38,38,0.4)] text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-3 uppercase tracking-[0.2em] text-sm">
                  {s.heroCta}
                  <ChevronRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </a>
              <button className="group px-12 py-6 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-bold flex items-center gap-3 uppercase tracking-[0.2em] text-sm backdrop-blur-md hover:border-red-500/30">
                <Play size={18} className="text-red-500 fill-red-500/20 group-hover:scale-110 transition-transform" />
                {s.heroShowreel}
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Problem Section (Pain) */}
        <section className="mb-40 grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 text-left">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-sm bg-red-500/10 border-l-2 border-red-500">
                <span className="text-red-400 font-mono text-[10px] tracking-[0.5em] uppercase">{s.painScanLabel}</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase leading-[0.9]">
                {s.painTitle1} <br />
                <span className="text-zinc-700 line-through decoration-red-500/50">{s.painTitleHighlight}</span> <br />
                {s.painTitle2}
              </h2>
            </div>
            
            <div className="space-y-4">
              {s.painItems?.map((item: string, i: number) => (
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  key={i} 
                  className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-red-500/40 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-red-500 font-mono text-base group-hover:bg-red-500 group-hover:text-black transition-all duration-300 shadow-inner">
                    {(i + 1).toString().padStart(2, '0')}
                  </div>
                  <p className="text-zinc-400 group-hover:text-white transition-colors text-xl font-light tracking-tight">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative group perspective-1000">
            <div className="absolute -inset-10 bg-red-500/15 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <motion.div 
              whileHover={{ rotateY: -5, rotateX: 5 }}
              className="aspect-square rounded-[4rem] overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-3xl p-16 flex flex-col justify-between relative shadow-2xl"
            >
              <div className="space-y-8">
                <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-1.5 w-12 bg-red-500/30 rounded-full" />
                  ))}
                </div>
                <p className="text-4xl md:text-6xl font-black leading-[0.85] italic uppercase tracking-tighter text-white/90 drop-shadow-lg">
                  {s.painQuote}
                </p>
              </div>
              
              <div className="space-y-10">
                <div className="flex justify-between items-end border-t border-white/10 pt-10">
                  <div className="space-y-2">
                    <p className="text-[10px] text-zinc-500 font-mono tracking-[0.3em] uppercase">COLD_OUTREACH</p>
                    <p className="text-2xl font-mono tracking-tighter text-red-500">SYSTEM_INFILTRATION</p>
                  </div>
                  <div className="text-right space-y-2">
                    <p className="text-[10px] text-zinc-500 font-mono tracking-[0.3em] uppercase">CONVERSION_LIFT</p>
                    <p className="text-2xl font-mono text-white">42.5%</p>
                  </div>
                </div>
                <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-1 border border-white/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '42.5%' }}
                    transition={{ duration: 2, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-rose-600 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.6)]" 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {s.feats?.map((feat: any, i: number) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="group p-12 rounded-[3rem] bg-zinc-900/30 border border-white/5 hover:border-red-500/40 hover:bg-zinc-900/50 transition-all duration-500 text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-red-500/10 transition-colors" />
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-500 mb-8">
                  {i === 0 && <Users size={32} strokeWidth={1.5} />}
                  {i === 1 && <Search size={32} strokeWidth={1.5} />}
                  {i === 2 && <Target size={32} strokeWidth={1.5} />}
                  {i === 3 && <Sparkles size={32} strokeWidth={1.5} />}
                </div>
                <div className="space-y-4 relative z-10">
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter">{feat.title}</h3>
                  <p className="text-zinc-500 leading-relaxed font-light group-hover:text-zinc-300 transition-colors">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing/Stack Section */}
        <section className="mb-40 relative">
          <div className="absolute inset-0 bg-red-500/5 blur-[160px] -z-10 rounded-full" />
          <div className="grid lg:grid-cols-5 gap-0 rounded-[4rem] border border-white/10 overflow-hidden bg-zinc-900/20 backdrop-blur-3xl shadow-2xl">
            <div className="lg:col-span-3 p-12 lg:p-20 space-y-16 lg:border-r border-white/10 text-left">
              <div className="space-y-6">
                <span className="text-red-400 font-mono text-[10px] tracking-[0.6em] uppercase">{s.stackLabel}</span>
                <h2 className="text-6xl lg:text-8xl font-black tracking-tighter italic uppercase leading-[0.85]">
                  {s.stackTitle1} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-rose-600">
                    {s.stackTitleHighlight}
                  </span>
                </h2>
              </div>

              <div className="space-y-1">
                {s.stack?.map((item: any, i: number) => (
                  <div key={i} className="flex justify-between items-center py-7 border-b border-white/5 group hover:px-4 transition-all duration-300">
                    <span className="text-zinc-400 flex items-center gap-6 text-[1.1rem] group-hover:text-white">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(239,68,68,0.8)] transition-all" />
                      {item.item}
                    </span>
                    <span className="font-mono text-2xl text-red-500 tracking-tighter">{item.value}</span>
                  </div>
                ))}
              </div>

              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-10 rounded-[2.5rem] bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent border border-red-500/20 flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left"
              >
                <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_40px_rgba(239,68,68,0.5)]">
                  <Star fill="black" size={32} />
                </div>
                <div>
                  <p className="text-2xl font-black text-red-100 uppercase tracking-tighter italic leading-none mb-2">{s.bonus.title1} {s.bonus.titleHighlight}</p>
                  <p className="text-zinc-500 leading-relaxed text-lg font-light mb-4">{s.bonus.desc}</p>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-red-400 uppercase tracking-widest">{s.bonus.value}</div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2 p-12 lg:p-20 bg-red-500/[0.02] flex flex-col justify-between text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-rose-600 opacity-30" />
              <div className="space-y-12 relative z-10">
                <div className="inline-block px-5 py-2 rounded-full bg-red-500 text-[11px] font-black uppercase tracking-[0.4em] text-black italic shadow-lg shadow-red-500/20">
                  {s.offerLabel}
                </div>
                <div className="space-y-4">
                  <p className="text-zinc-500 text-xs font-mono uppercase tracking-[0.4em] font-bold">{s.offerTitle}</p>
                  <h3 className="text-6xl font-black italic uppercase tracking-tighter leading-none text-white drop-shadow-lg">{s.offerHighlight}</h3>
                </div>
                <div className="pt-12 border-t border-white/5">
                  <p className="text-zinc-500 text-xs font-mono mb-4 uppercase italic tracking-[0.4em]">{s.priceFrom}</p>
                  <div className="flex items-baseline gap-4">
                    <span className="text-8xl lg:text-[7rem] font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">{s.priceValue}</span>
                    <span className="text-zinc-600 font-mono text-xl italic uppercase tracking-widest">USD</span>
                  </div>
                </div>
              </div>

              <div className="space-y-10 mt-20">
                <div className="flex items-center gap-6 p-6 rounded-3xl bg-green-500/5 border border-green-500/20 backdrop-blur-xl">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center">
                    <ShieldCheck className="text-green-400" size={32} />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-green-400 uppercase tracking-[0.4em]">{s.guarantee.badge}</p>
                    <p className="text-xs text-zinc-500 leading-tight uppercase font-mono mt-1 font-bold">{s.guarantee.commitment}</p>
                  </div>
                </div>
                <a 
                  href="https://www.usakraken.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full py-8 bg-white text-black font-black uppercase tracking-[0.4em] rounded-[2rem] hover:bg-red-500 hover:text-black transition-all duration-500 shadow-2xl shadow-red-500/20 transform active:scale-95 text-lg text-center block"
                >
                  <span className="flex items-center justify-center gap-4">
                    {s.finalBtn}
                    <ChevronRight className="group-hover:translate-x-2.5 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Bar */}
        <section className="mb-40 text-center sm:text-left">
          <div className="relative p-12 lg:p-24 rounded-[5rem] bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-white/5 overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-red-600/10 blur-[180px] -z-10 group-hover:bg-red-600/20 transition-all duration-1000" />
            <div className="flex flex-col xl:flex-row items-center justify-between gap-16 relative z-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                  <span className="text-[10px] font-mono font-black tracking-[0.5em] text-white uppercase">{s.promo.badge}</span>
                </div>
                <h3 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]">
                  {s.promo.title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-rose-600 drop-shadow-2xl">
                    {s.promo.highlight}
                  </span>
                </h3>
                <p className="text-zinc-500 max-w-3xl text-xl font-light leading-relaxed">
                  {s.promo.body}
                </p>
              </div>
              <a 
                href="https://www.usakraken.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-16 py-8 bg-white text-black font-black uppercase tracking-[0.4em] rounded-[2.5rem] hover:bg-red-500 hover:text-black transition-all duration-500 shadow-[0_20px_60px_rgba(239,68,68,0.2)] active:scale-95 text-xl text-center"
              >
                {s.promo.btn}
              </a>
            </div>
          </div>
        </section>

        {/* CTA / Final Section */}
        <section className="text-center py-48 relative overflow-hidden rounded-[5rem]">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/5 to-black -z-10" />
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-20 flex flex-col items-center"
          >
            <div className="relative">
              <h2 className="text-[12vw] md:text-[18vw] font-black italic uppercase tracking-tighter leading-none text-white opacity-[0.02] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap -z-20 pointer-events-none">
                {s.finalBg}
              </h2>
              <h3 className="text-6xl md:text-[10rem] font-black uppercase italic tracking-tighter leading-[0.8] relative">
                {s.finalTitle1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-rose-600 drop-shadow-[0_0_50px_rgba(239,68,68,0.3)]">
                  {s.finalTitleHighlight}
                </span> <br />
                {s.finalTitle2}
              </h3>
            </div>
            
            <div className="space-y-12 relative flex flex-col items-center">
              <p className="text-zinc-600 font-mono text-[11px] tracking-[1em] uppercase font-bold">{s.finalBadge}</p>
              <a 
                href="https://www.usakraken.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-20 py-10 bg-red-600 rounded-[3rem] font-black tracking-[0.4em] uppercase overflow-hidden shadow-[0_10px_80px_rgba(220,38,38,0.4)] hover:shadow-red-500/60 transition-all duration-700 transform active:scale-95 text-2xl text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="relative z-10 flex items-center justify-center gap-6">
                  {s.finalBtn}
                  <ChevronRight size={40} className="group-hover:translate-x-4 transition-transform duration-500" />
                </span>
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};
