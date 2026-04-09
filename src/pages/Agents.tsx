import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  ChevronRight, 
  Zap, 
  Target, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Star,
  Activity,
  Terminal,
  Database,
  Play,
  Lock
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useGlobalContext } from '../context/GlobalContext';

export const Agents = () => {
  const { t } = useLanguage();
  const { setIsBookingModalOpen } = useGlobalContext();
  const a = t.agents;
  const s = (t.services as any).service3;

  if (!s || !a) return null;

  return (
    <div className="relative min-h-screen bg-[#020617] text-white selection:bg-emerald-500/30 overflow-x-hidden text-left">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#064e3b_0%,#020617_75%)] opacity-60" />
        <div className="absolute inset-0 bg-[url('https://grain-y.com/wp-content/uploads/2021/04/grid-thin-white.png')] opacity-[0.03] mix-blend-overlay" />
        
        {/* Animated Particles/Nodes */}
        <div className="absolute inset-0 opacity-20">
           {[...Array(20)].map((_, i) => (
             <motion.div
               key={i}
               animate={{
                 y: [Math.random() * 1000, Math.random() * 1000],
                 x: [Math.random() * 2000, Math.random() * 2000],
                 opacity: [0, 1, 0]
               }}
               transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
               className="absolute w-1 h-1 bg-emerald-400 rounded-full blur-[1px]"
             />
           ))}
        </div>
      </div>

      {/* Hero Section - Full Width Bleed */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden w-full">
        {/* Section-Specific Video Background (Edge-to-Edge) */}
        <div className="absolute inset-0 z-0">
          <video 
            src="/assets/kraken-video.mp4" 
            className="w-full h-full object-cover opacity-50 grayscale brightness-[0.6] scale-105"
            autoPlay 
            loop 
            muted 
            playsInline
          />
          {/* Advanced blending and masking */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
          <div className="absolute inset-0 bg-[#020617]/20 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-3xl shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute inset-0" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative" />
              </div>
              <span className="text-[10px] font-mono tracking-[0.5em] text-emerald-300 uppercase font-black">
                {a.badge}
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-[8vw] lg:text-[10rem] font-black tracking-tighter leading-[0.8] italic uppercase break-words"
            >
              {a.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 via-emerald-400 to-teal-600 drop-shadow-[0_0_80px_rgba(16,185,129,0.3)]">
                {a.highlight}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-3xl text-xl md:text-2xl text-zinc-400 leading-relaxed font-light italic"
            >
              {a.subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-8 pt-8"
            >
              <button 
                onClick={() => window.open("https://www.usakraken.com", "_blank")}
                className="group relative px-16 py-8 bg-emerald-600 text-white rounded-full font-black overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(16,185,129,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-4 uppercase tracking-[0.3em] text-sm">
                  {a.ctaPrimary}
                  <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
              <button 
                onClick={() => window.open("https://www.usakraken.com", "_blank")}
                className="group px-16 py-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-bold flex items-center gap-4 uppercase tracking-[0.3em] text-sm backdrop-blur-3xl hover:border-emerald-500/30"
              >
                <Play size={18} className="text-emerald-400 fill-emerald-400/20 group-hover:scale-110 transition-transform" />
                {a.ctaSecondary}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <main className="relative z-10 pb-20 px-6 max-w-7xl mx-auto">

        {/* Dashboard Visual Concept */}
        <section className="mb-48 relative group">
           <div className="absolute -inset-20 bg-emerald-600/10 blur-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           <div className="relative rounded-[4rem] border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-3xl p-1 overflow-hidden shadow-2xl">
              <div className="bg-zinc-950 rounded-[3.8rem] p-12 lg:p-20 grid lg:grid-cols-2 gap-20">
                <div className="space-y-12">
                   <div className="space-y-4">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
                      </div>
                      <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase leading-[0.9]">
                        {a.iqTitle} <br />
                        <span className="text-emerald-500">{a.iqHighlight}</span>
                      </h2>
                   </div>
                   
                   <div className="space-y-8">
                      <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                        <Cpu className="text-emerald-400 shrink-0" size={32} />
                        <div>
                           <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{a.featureNeuralTitle}</p>
                           <p className="text-lg font-bold text-white uppercase italic tracking-tighter">{a.featureNeuralDesc}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                        <Target className="text-emerald-400 shrink-0" size={32} />
                        <div>
                           <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{a.featureGoalTitle}</p>
                           <p className="text-lg font-bold text-white uppercase italic tracking-tighter">{a.featureGoalDesc}</p>
                        </div>
                      </div>
                   </div>
                </div>

                <div className="relative">
                   <div className="aspect-[4/3] rounded-[2rem] bg-black border border-white/10 p-8 font-mono text-[11px] text-emerald-400/80 space-y-3 shadow-inner overflow-hidden">
                      <div className="flex justify-between border-b border-emerald-500/20 pb-4 mb-4">
                         <span>KRAKEN_OS [VERSION 1.0.4]</span>
                         <span className="animate-pulse">● LIVE_FEED</span>
                      </div>
                      <p className="opacity-40">{">>"} {a.log1}</p>
                      <p>{">>"} {a.log2}</p>
                      <p className="text-white">{">>"} {a.log3}</p>
                      <p className="text-emerald-500/100">{">>"} {a.log4}</p>
                      <p>{">>"} {a.log5}</p>
                      <p className="text-white bg-emerald-500/10 px-2 py-1 flex items-center gap-2">
                        <Activity size={12} /> {a.log6}
                      </p>
                      <p>{">>"} {a.log9}</p>
                      <p>{">>"} {a.log7}</p>
                      <p className="opacity-40">{">>"} {a.log8}</p>
                      <div className="absolute bottom-8 right-8 text-right space-y-1">
                         <div className="h-1 w-24 bg-emerald-500/20 rounded-full" />
                         <span className="text-[9px] uppercase tracking-widest opacity-30">{a.neuralLoad}</span>
                      </div>
                   </div>
                    <div className="absolute -bottom-6 -right-6 p-10 rounded-[3rem] bg-emerald-500 text-black shadow-[0_20px_50px_rgba(16,185,129,0.4)] z-20 hidden lg:block">
                       <p className="text-[10px] font-mono tracking-[0.4em] font-black uppercase mb-1">{a.limitedDeployment}</p>
                       <p className="text-2xl font-black italic uppercase tracking-tighter leading-none">{a.autoOps}</p>
                    </div>
                </div>
              </div>
           </div>
        </section>

        {/* Capabilities Grid */}
        <section className="mb-48">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Database, title: a.feature1Title, desc: a.feature1Desc },
              { icon: Bot, title: a.feature2Title, desc: a.feature2Desc },
              { icon: Terminal, title: a.feature3Title, desc: a.feature3Desc },
            ].map((feat, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="group p-12 rounded-[3.5rem] bg-zinc-900/40 border border-white/5 hover:border-emerald-500/40 hover:bg-emerald-950/20 transition-all duration-500 text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.03] blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-emerald-500/[0.08] transition-colors" />
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500 mb-8">
                  <feat.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="space-y-4 relative z-10">
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter">{feat.title}</h3>
                  <p className="text-zinc-500 leading-relaxed font-light group-hover:text-zinc-300 transition-colors">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Full Section Investment */}
        <section className="mb-48 relative">
           <div className="absolute inset-0 bg-emerald-400/[0.02] blur-[200px] pointer-events-none" />
           <div className="flex flex-col lg:flex-row gap-0 rounded-[5rem] border border-white/10 overflow-hidden bg-black/40 backdrop-blur-3xl shadow-2xl">
              <div className="lg:w-3/5 p-12 lg:p-24 space-y-20 lg:border-r border-white/10 text-left">
                 <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
                      <Lock className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] font-mono tracking-[0.4em] text-emerald-400 uppercase font-black">{a.investmentProtocol}</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter italic uppercase leading-[0.85] break-words">
                      {a.armyTitle} <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-100 to-white">{a.armyHighlight}</span>
                    </h2>
                 </div>

                 <div className="space-y-2">
                   {(s.stack as any[])?.map((item: any, i: number) => (
                     <div key={i} className="flex justify-between items-center py-8 border-b border-white/5 group hover:px-6 transition-all duration-300">
                        <span className="text-zinc-400 flex items-center gap-6 text-[1.2rem] group-hover:text-white">
                           <div className="w-3 h-3 rounded-full bg-emerald-500 group-hover:scale-150 transition-all shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
                           {item.item}
                        </span>
                        <span className="font-mono text-2xl text-emerald-300 italic tracking-tighter">{item.value}</span>
                     </div>
                   ))}
                 </div>

                 <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left">
                    <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                       <Star fill="black" size={32} />
                    </div>
                     <div>
                        <p className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter italic leading-none mb-2">{a.bonusTitle}</p>
                        <p className="text-zinc-500 leading-relaxed text-base sm:text-lg font-light mb-4">{s.serviceBonus}</p>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 uppercase tracking-widest">{a.bonusValue}</div>
                     </div>
                 </div>
              </div>

              <div className="lg:w-2/5 p-12 lg:p-24 bg-emerald-500/[0.02] flex flex-col justify-between text-left relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-full h-[50rem] bg-emerald-500/[0.03] blur-[150px] -z-10 rotate-45" />
                  <div className="space-y-12 relative z-10">
                    <div className="inline-block px-6 py-2.5 rounded-full bg-emerald-500 text-[11px] font-black uppercase tracking-[0.4em] text-black italic shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                       {a.limitedDeployment}
                    </div>
                    <div className="space-y-4">
                       <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.4em] font-bold">{a.ultimateWorkforce}</p>
                       <h3 className="text-6xl sm:text-7xl font-black italic uppercase tracking-tighter leading-none text-white drop-shadow-2xl">{a.krakenProtocol}</h3>
                    </div>
                     <div className="pt-16 border-t border-white/5">
                        <p className="text-zinc-600 text-[10px] font-mono mb-6 uppercase italic tracking-[0.4em]">{a.investmentSince}</p>
                        <div className="flex items-baseline gap-4 relative overflow-hidden max-w-full">
                           <span className="text-6xl sm:text-8xl lg:text-[7rem] font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-emerald-200 to-emerald-600 truncate break-all">{a.consultPrice}</span>
                           <span className="text-emerald-700 font-mono text-xl italic uppercase tracking-widest">*</span>
                        </div>
                     </div>
                 </div>

                 <div className="space-y-12 mt-24">
                     <div className="flex items-center gap-6 p-7 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl group">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                           <ShieldCheck className="text-emerald-400" size={36} />
                        </div>
                        <div>
                           <p className="text-[10px] font-black text-emerald-300 uppercase tracking-[0.4em]">{a.impactGuarantee}</p>
                           <p className="text-[10px] text-zinc-500 leading-tight uppercase font-mono mt-1 font-bold">{a.contractGuarantee}</p>
                        </div>
                     </div>
                    <button 
                      onClick={() => window.open("https://www.usakraken.com", "_blank")}
                      className="group w-full py-10 bg-emerald-600 text-white font-black uppercase tracking-[0.4em] rounded-[2.5rem] hover:bg-emerald-400 hover:text-black transition-all duration-500 shadow-[0_30px_60px_-15px_rgba(16,185,129,0.4)] active:scale-95 text-lg"
                    >
                       <span className="flex items-center justify-center gap-4">
                         {a.ctaPrimary}
                         <ChevronRight className="group-hover:translate-x-3 transition-transform duration-300" size={24} />
                       </span>
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* Sectors Grid */}
        <section className="mb-48 px-4">
            <div className="text-left mb-20 space-y-6">
               <span className="text-emerald-400 font-mono text-xs tracking-[0.6em] uppercase font-black">{a.sectorsBadge}</span>
               <h2 className="text-4xl sm:text-6xl lg:text-[7rem] font-black tracking-tighter italic uppercase leading-[0.8] relative break-words">
                 {a.exclusiveSectorsTitle} <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-100">{a.exclusiveSectorsHighlight}</span>
                 <div className="absolute -top-10 -right-20 w-[40rem] h-[40rem] bg-emerald-600/5 blur-[200px] pointer-events-none -z-10" />
               </h2>
            </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
              {a.sectors?.map((sector: any, i: number) => (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  key={i} 
                  className="bg-black p-10 group hover:bg-emerald-950/10 transition-all duration-500 min-h-[320px] flex flex-col justify-between text-left opacity-80 hover:opacity-100"
                >
                  <div className="space-y-8">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/5 transition-all duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-[3] transition-transform duration-500" />
                    </div>
                    <h4 className="text-xl font-black uppercase italic leading-tight text-white group-hover:text-emerald-300 transition-colors tracking-tight">
                      {sector.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-500 font-mono leading-relaxed group-hover:text-zinc-300 transition-colors uppercase tracking-tight font-light">
                    {sector.desc}
                  </p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Closing CTA */}
        <section className="text-center py-56 relative overflow-hidden rounded-[5rem]">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#064e3b11] to-black -z-10" />
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-24 flex flex-col items-center"
          >
            <div className="relative w-full max-w-[100vw] overflow-hidden">
              <h2 className="text-[6vw] font-black italic uppercase tracking-tighter leading-none text-emerald-500 opacity-5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center -z-20 pointer-events-none">
                {a.closingWatermark}
              </h2>
              <h2 className="text-4xl md:text-[6vw] lg:text-[7rem] font-black tracking-tighter italic uppercase leading-[0.8] relative break-words">
                {a.closingTitle} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 via-emerald-400 to-teal-600 drop-shadow-[0_0_80px_rgba(16,185,129,0.2)]">
                  {a.closingHighlight}
                </span>
              </h2>
            </div>
            
            <div className="space-y-16 relative flex flex-col items-center">
              <div className="flex items-center gap-3 text-emerald-500/60 mb-8 font-mono text-[10px] tracking-[0.3em]">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {a.badge.startsWith("/") ? a.badge.slice(1).trim() : a.badge}
              </div>
              <button 
                onClick={() => window.open("https://www.usakraken.com", "_blank")}
                className="group relative px-24 py-12 bg-white rounded-[3rem] font-black tracking-[0.4em] uppercase overflow-hidden shadow-[0_20px_100px_rgba(16,185,129,0.2)] hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-700 transform active:scale-95 text-2xl text-left text-black"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="relative z-10 flex items-center justify-center gap-8">
                  {a.ctaPrimary}
                  <ChevronRight size={44} className="group-hover:translate-x-5 transition-transform duration-500" />
                </span>
              </button>
              <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest italic opacity-60">Kraken Protocol | Secure Deployment Zone Alpha-01</p>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};
