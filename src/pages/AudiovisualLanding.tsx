import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  ChevronRight, 
  Zap, 
  Target, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Star,
  X
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useGlobalContext } from '../context/GlobalContext';

export const AudiovisualLanding = () => {
  const { t } = useLanguage();
  const { setIsBookingModalOpen } = useGlobalContext();
  const [showVideo, setShowVideo] = useState(false);
  const s = (t.services as any).service1;
  const videoUrl = "https://www.youtube.com/embed/5b4SLUtAKSk?autoplay=1&rel=0";

  if (!s) return null;

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* Background & HUD */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1492691523567-c1044304859a?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay grayscale"
          alt="Audiovisual Background"
        />
        <div className="absolute inset-0 opacity-[0.15] bg-dots" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-purple-300 uppercase">
                {s.subtitle}
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hero-title-premium"
            >
              {s.heroTitle1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                {s.heroTitleHighlight}
              </span> <br />
              {s.heroTitle2}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl text-lg text-zinc-400 leading-relaxed font-light"
            >
              {s.desc}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="group relative px-10 py-5 bg-purple-600 rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(147,51,234,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-sm">
                  {s.heroCta}
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button 
                onClick={() => setShowVideo(true)}
                className="px-10 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-medium flex items-center gap-2 uppercase tracking-widest text-sm"
              >
                <Play size={18} fill="white" />
                {s.heroShowreel}
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Problem Section (Pain) */}
        <section className="mb-32 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-purple-400 font-mono text-xs tracking-[0.4em] uppercase">{s.painScanLabel}</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase leading-none">
                {s.painTitle1} <br />
                <span className="text-zinc-600 line-through decoration-purple-500/50">{s.painTitleHighlight}</span> <br />
                {s.painTitle2}
              </h2>
            </div>
            
            <div className="space-y-4">
              {s.painItems?.map((item: string, i: number) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-purple-400 font-mono text-sm group-hover:bg-purple-500 group-hover:text-black transition-colors shrink-0">
                    0{i+1}
                  </div>
                  <p className="text-zinc-400 group-hover:text-white transition-colors text-lg font-light leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-3xl p-12 flex flex-col justify-between relative">
              <div className="space-y-6">
                <div className="h-1.5 w-24 bg-purple-500 rounded-full" />
                <p className="text-4xl md:text-5xl font-black leading-tight italic uppercase tracking-tighter">
                  {s.painQuote}
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[10px] text-zinc-500 font-mono tracking-widest">ENCRYPTED_DATA</p>
                    <p className="text-2xl font-mono tracking-tighter">VISION_PROTOCOL_v4.2</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-zinc-500 font-mono tracking-widest">LATENCY</p>
                    <p className="text-2xl font-mono text-green-400">0.03ms</p>
                  </div>
                </div>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-4 gap-6">
          {s.feats?.map((feat: any, i: number) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-purple-500/30 hover:bg-zinc-900/60 transition-all space-y-6 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                {i === 0 && <Target size={28} />}
                {i === 1 && <Cpu size={28} />}
                {i === 2 && <Zap size={28} />}
                {i === 3 && <Sparkles size={28} />}
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold uppercase italic tracking-tighter">{feat.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light text-sm">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Pricing/Stack Section */}
        <section className="mb-32 relative">
          <div className="absolute inset-0 bg-purple-500/5 blur-[120px] -z-10 rounded-full" />
          <div className="grid md:grid-cols-5 gap-0 rounded-[3rem] border border-white/10 overflow-hidden bg-black/60 backdrop-blur-2xl shadow-2xl">
            <div className="md:col-span-3 p-10 md:p-16 space-y-12 border-b md:border-b-0 md:border-r border-white/10 text-left">
              <div className="space-y-4">
                <span className="text-purple-400 font-mono text-[10px] tracking-[0.5em] uppercase">{s.stackLabel}</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase leading-none">
                  {s.stackTitle1} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                    {s.stackTitleHighlight}
                  </span>
                </h2>
              </div>

              <div className="space-y-1">
                {s.stack?.map((item: any, i: number) => (
                  <div key={i} className="flex justify-between items-center py-5 border-b border-white/5 group hover:px-2 transition-all">
                    <span className="text-zinc-300 flex items-center gap-4 text-lg">
                      <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                      {item.item}
                    </span>
                    <span className="font-mono text-xl text-purple-300">{item.value}</span>
                  </div>
                ))}
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 flex gap-6 items-center"
              >
                <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <Star fill="black" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xl font-black text-purple-200 uppercase tracking-tighter italic leading-none">{s.bonus.title1} {s.bonus.titleHighlight}</p>
                  <p className="text-zinc-400 leading-snug mt-1">{s.bonus.desc}</p>
                  <p className="text-xs font-mono text-purple-400 mt-2 uppercase tracking-widest">{s.bonus.value}</p>
                </div>
              </motion.div>
            </div>

            <div className="md:col-span-2 p-10 md:p-16 bg-white/[0.02] flex flex-col justify-between text-left">
              <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500 text-[10px] font-black uppercase tracking-[0.3em] text-black italic">
                  {s.offerLabel}
                </div>
                <div className="space-y-2">
                  <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">{s.offerTitle}</p>
                  <h3 className="text-5xl font-black italic uppercase tracking-tighter leading-none">{s.offerHighlight}</h3>
                </div>
                <div className="pt-10">
                  <p className="text-zinc-500 text-xs font-mono mb-3 uppercase italic tracking-widest">{s.priceFrom}</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-7xl md:text-8xl font-black italic tracking-tighter drop-shadow-2xl">{s.priceValue}</span>
                    <span className="text-zinc-500 font-mono text-lg italic">/USD</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8 mt-16">
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-green-500/5 border border-green-500/20 backdrop-blur-md">
                  <ShieldCheck className="text-green-500" size={28} />
                  <div>
                    <p className="text-[10px] font-black text-green-400 uppercase tracking-[0.3em]">{s.guarantee.badge}</p>
                    <p className="text-[10px] text-zinc-500 leading-tight uppercase font-mono mt-1">{s.guarantee.commitment}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="group w-full py-6 bg-white text-black font-black uppercase tracking-[0.3em] rounded-[2rem] hover:bg-purple-500 hover:text-black transition-all shadow-2xl transform active:scale-95 text-base"
                >
                  <span className="flex items-center justify-center gap-3">
                    {s.finalBtn}
                    <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Promo Bar */}
        <section className="mb-32">
          <div className="relative p-10 md:p-16 rounded-[4rem] bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-white/5 overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-purple-600/10 blur-[150px] -z-10 group-hover:bg-purple-600/20 transition-all duration-1000" />
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-white uppercase">{s.promo.badge}</span>
                </div>
                <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
                  {s.promo.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">{s.promo.highlight}</span>
                </h3>
                <p className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed">
                  {s.promo.body}
                </p>
              </div>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="flex-shrink-0 px-12 py-7 bg-white text-black font-black uppercase tracking-[0.3em] rounded-[2rem] hover:bg-purple-500 hover:text-black transition-all shadow-[0_0_60px_rgba(255,255,255,0.1)] group active:scale-95 text-lg"
              >
                {s.promo.btn}
              </button>
            </div>
          </div>
        </section>

        {/* CTA / Final Section */}
        <section className="text-center py-40 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[30rem] bg-purple-600/5 blur-[150px] -z-10" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-6">
              <h2 className="text-[10vw] md:text-[15vw] font-black italic uppercase tracking-tighter leading-none opacity-[0.03] select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap -z-20">
                {s.finalBg}
              </h2>
              <h3 className="text-5xl md:text-[8rem] font-black uppercase italic tracking-tighter relative leading-[0.85]">
                {s.finalTitle1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 drop-shadow-2xl">
                  {s.finalTitleHighlight}
                </span> <br />
                {s.finalTitle2}
              </h3>
            </div>
            
            <div className="space-y-10 relative">
              <p className="text-zinc-500 font-mono text-xs tracking-[0.6em] uppercase">{s.finalBadge}</p>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="group relative px-16 py-8 bg-purple-600 rounded-[2.5rem] font-black tracking-[0.3em] uppercase overflow-hidden shadow-[0_0_80px_rgba(147,51,234,0.4)] hover:shadow-purple-500/60 transition-all transform active:scale-95 text-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-4">
                  {s.finalBtn}
                  <ChevronRight size={32} className="group-hover:translate-x-3 transition-transform" />
                </span>
              </button>
            </div>
          </motion.div>
        </section>
      </main>

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
              className="relative w-full max-w-6xl aspect-video bg-black border border-white/10 shadow-[0_0_100px_rgba(168,85,247,0.15)] group"
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-16 right-0 text-white flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] hover:text-purple-400 transition-colors"
              >
                {t.home.videoClose} <X size={24} className="p-1 border border-white/20 rounded-full" />
              </button>
              <iframe
                src={videoUrl}
                title="Insomnia AI Video Showreel"
                className="w-full h-full grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <div className="absolute -bottom-10 left-0 text-[8px] font-mono text-purple-400/60 uppercase tracking-widest flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                VIDEO_STREAM_DECRYPTED: REEL_V4_PROD
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
