import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, Radio, Sparkles } from "lucide-react";
import { useGlobalContext } from "../context/GlobalContext";

export const CinematicBackground = () => {
  const { isChatOpen, setIsChatOpen } = useGlobalContext();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      {/* 🎬 HOLLYWOOD MASTER VIDEO CONTROLLER 🎬 */}
      <div className="absolute inset-0 w-full h-full">
         <video
           ref={videoRef}
           autoPlay
           loop
           muted
           playsInline
           className="w-full h-full object-cover opacity-70 mix-blend-screen saturate-[0.9] contrast-125"
           poster="/assets/hero-galaxy.png"
         >
           <source src="/assets/hero-pursuit.mp4" type="video/mp4" />
         </video>
         <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* MASTER CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      </div>

      {/* RADIO TRANSMISSION TOGGLE (AI ASSISTANT LINK) */}
      <div className="fixed bottom-10 right-10 z-[120] pointer-events-auto">
        <button 
          onClick={(e) => { e.stopPropagation(); setIsChatOpen(!isChatOpen); }}
          className="relative group p-4 bg-black/40 border border-white/10 rounded-full backdrop-blur-xl hover:bg-primary/20 hover:border-primary/40 transition-all shadow-2xl"
        >
           <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping group-hover:block hidden" />
           <AnimatePresence mode="wait">
              {isChatOpen ? (
                <motion.div 
                  key="on"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                >
                  <div className="flex items-center gap-3 px-2">
                    <div className="flex gap-1 h-3 items-end">
                       <motion.div animate={{ height: [4, 12, 6] }} transition={{ duration: 0.5, repeat: Infinity }} className="w-1 bg-primary" />
                       <motion.div animate={{ height: [8, 4, 10] }} transition={{ duration: 0.7, repeat: Infinity }} className="w-1 bg-primary" />
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-primary font-black">AI Signal Active</span>
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="off"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex items-center gap-3 px-2"
                >
                  <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-primary transition-colors">Neural Signal Off</span>
                  <Radio className="w-4 h-4 text-zinc-500 group-hover:text-primary" />
                </motion.div>
              )}
           </AnimatePresence>
        </button>
      </div>
    </div>
  );
};
