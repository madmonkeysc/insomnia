import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, TrendingUp, ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useGlobalContext } from '../../context/GlobalContext';

export const ROICalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const { setIsBookingModalOpen } = useGlobalContext();
  
  // States for calculation
  const [monthlyOpEx, setMonthlyOpEx] = useState(5000);
  const [efficiencyGain, setEfficiencyGain] = useState(40);
  const [implementationCost, setImplementationCost] = useState(15000);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-roi-calculator', handleOpen);
    return () => window.removeEventListener('open-roi-calculator', handleOpen);
  }, []);

  const calculateROI = () => {
    const monthlySavings = monthlyOpEx * (efficiencyGain / 100);
    const yearlySavings = monthlySavings * 12;
    const breakEvenMonths = implementationCost / monthlySavings;
    const threeYearROI = ((yearlySavings * 3 - implementationCost) / implementationCost) * 100;

    return {
      monthlySavings,
      yearlySavings,
      breakEvenMonths: breakEvenMonths.toFixed(1),
      threeYearROI: threeYearROI.toFixed(0)
    };
  };

  const results = calculateROI();
  const roiT = (t as any).roi || {};

  const getSummary = () => {
    if (!roiT.summary) return "";
    return roiT.summary.template
      .replace("{months}", results.breakEvenMonths)
      .replace("{return}", results.threeYearROI + "%");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="relative w-full max-w-4xl max-h-[90vh] md:max-h-none bg-zinc-900 border border-white/10 shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left Side: Controls */}
            <div className="flex-1 p-8 md:p-12 space-y-10 bg-black/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-xl">
                    <Calculator className="text-primary" size={20} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-headline font-black uppercase italic text-white tracking-tighter">
                    {roiT.title || "ROI CALCULATOR"}
                  </h2>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-zinc-500 hover:text-white transition-colors p-2"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                       {roiT.monthlyOpEx || "Current Monthly OpEx (USD)"}
                    </label>
                    <span className="text-xl font-headline font-black text-white italic">${monthlyOpEx.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="50000" 
                    step="500"
                    value={monthlyOpEx}
                    onChange={(e) => setMonthlyOpEx(Number(e.target.value))}
                    className="w-full accent-primary bg-white/5 h-1.5 rounded-full appearance-none cursor-pointer"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      {roiT.efficiencyGain || "Efficiency Gain (%)"}
                    </label>
                    <span className="text-xl font-headline font-black text-primary italic">{efficiencyGain}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="90" 
                    step="5"
                    value={efficiencyGain}
                    onChange={(e) => setEfficiencyGain(Number(e.target.value))}
                    className="w-full accent-primary bg-white/5 h-1.5 rounded-full appearance-none cursor-pointer"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                      {roiT.investment || "Protocol Investment (USD)"}
                    </label>
                    <span className="text-xl font-headline font-black text-white italic">${implementationCost.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="3000" 
                    max="50000" 
                    step="500"
                    value={implementationCost}
                    onChange={(e) => setImplementationCost(Number(e.target.value))}
                    className="w-full accent-primary bg-white/5 h-1.5 rounded-full appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center gap-4 opacity-40">
                <Zap size={14} className="text-primary" />
                <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 leading-relaxed">
                  {roiT.disclaimer}
                </p>
              </div>
            </div>

            {/* Right Side: Results */}
            <div className="w-full md:w-[400px] p-8 md:p-12 bg-primary flex flex-col justify-between text-black relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingUp size={120} strokeWidth={1} />
              </div>
              
              <div className="space-y-12 relative z-10">
                <div className="space-y-1">
                  <p className="text-[10px] font-mono font-black uppercase tracking-[0.3em] opacity-40">
                    {roiT.yearlySavings || "Projected Yearly Savings"}
                  </p>
                  <p className="text-5xl lg:text-7xl font-headline font-black italic tracking-tighter leading-none">
                    ${results.yearlySavings.toLocaleString()}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <p className="text-[9px] font-mono font-black uppercase tracking-widest opacity-40">
                      {roiT.breakEven || "Break-even Point"}
                    </p>
                    <p className="text-2xl font-headline font-black italic">{results.breakEvenMonths} {roiT.months || "Months"}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-mono font-black uppercase tracking-widest opacity-40">
                      {roiT.threeYearROI || "3-Year ROI"}
                    </p>
                    <p className="text-2xl font-headline font-black italic">{results.threeYearROI}%</p>
                  </div>
                </div>

                {/* Human Summary */}
                <div className="bg-black/10 p-4 border-l-2 border-black/20 space-y-2">
                  <p className="text-[10px] font-mono font-black uppercase tracking-[0.2em] opacity-40">
                    {roiT.summary?.title || "EXECUTIVE SUMMARY"}
                  </p>
                  <p className="text-xs font-bold leading-relaxed uppercase tracking-tight">
                    {getSummary()}
                  </p>
                </div>

                <div className="hidden md:block space-y-4 pt-6 border-t border-black/10">
                  <div className="flex items-center gap-3">
                    <Zap size={10} className="opacity-40" />
                    <p className="text-[9px] font-headline font-bold uppercase tracking-widest opacity-60">
                      {roiT.benchmarks?.standard || "Standard Efficiency: 15-20%"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-black">
                    <Zap size={10} className="fill-black" />
                    <p className="text-[9px] font-headline font-bold uppercase tracking-widest">
                      {roiT.benchmarks?.kraken || "Kraken Core: 60-85%"}
                    </p>
                  </div>
                </div>
              </div>

                  <button 
                    onClick={() => {
                      const message = roiT.whatsappMessage
                        .replace('{yearlySavings}', new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(results.yearlySavings))
                        .replace('{breakEven}', results.breakEvenMonths.toString())
                        .replace('{roi}', results.threeYearROI.toString());
                      
                      const url = `https://wa.me/${t.config.whatsapp}?text=${encodeURIComponent(message)}`;
                      window.open(url, '_blank');
                      setIsOpen(false);
                    }}
                    className="w-full bg-black text-white py-6 font-headline font-black uppercase text-xs tracking-[0.3em] hover:scale-[1.02] transition-all flex items-center justify-center gap-4 group mt-12 md:mt-0 relative z-10"
                  >
                    {roiT.cta || "REQUEST AUDIT"} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform text-primary" />
                  </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
