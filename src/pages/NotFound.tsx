import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, ShieldAlert, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const n = (t as any).notfound || {};

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,242,0,0.05)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-2xl w-full text-center relative z-10 space-y-12">
        {/* Animated Icon */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative inline-block"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 border border-primary/20 bg-primary/5 rounded-full flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-all duration-700" />
            <ShieldAlert className="w-16 h-16 md:w-24 md:h-24 text-primary relative z-10" strokeWidth={1} />
          </div>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-4 -right-4"
          >
            <Sparkles className="text-primary w-8 h-8" />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.5em] font-black">
              {n.badge || "Error 404 // Connection Terminated"}
            </span>
            <h1 className="text-7xl md:text-9xl font-headline font-black uppercase italic italic leading-[0.8] tracking-tighter mt-4">
              {n.title1}<br />
              <span className="text-primary">{n.highlight}</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-zinc-500 font-label text-lg md:text-xl italic max-w-md mx-auto leading-tight"
          >
            {n.body}
          </motion.p>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() => navigate('/')}
            className="group relative inline-flex items-center gap-6 px-12 py-6 bg-primary text-black font-headline font-black uppercase italic text-sm tracking-[0.3em] overflow-hidden hover:scale-105 active:scale-95 transition-all"
          >
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Home className="w-5 h-5" />
            {n.cta || "RETURN TO HOME"}
            <ArrowLeft className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </button>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-8 top-0 h-full w-px bg-white/5 md:block hidden" />
      <div className="absolute right-8 top-0 h-full w-px bg-white/5 md:block hidden" />
    </div>
  );
};
