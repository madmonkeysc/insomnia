import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CinematicBackground } from "../components/CinematicBackground";
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Terminal, 
  Users, 
  Rocket, 
  BarChart, 
  Cpu
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

type AuditData = {
  name: string;
  linkedin: string;
  teamSize: string;
  maturity: string;
  budget: string;
  challenge: string;
};

// Icons are static, but content comes from translations
const stepIcons = [Terminal, Users, Cpu, BarChart, Rocket];

export const Audit = () => {
  const { t } = useLanguage();
  const a = t.audit;
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<AuditData>({
    name: "",
    linkedin: "",
    teamSize: "",
    maturity: "",
    budget: "",
    challenge: ""
  });

  // Reconstruct steps with translated content
  const steps = a.steps.map((s: any, i: number) => ({
    ...s,
    icon: stepIcons[i],
    id: i === 0 ? "identity" : 
        i === 1 ? "scale" : 
        i === 2 ? "maturity" : 
        i === 3 ? "budget" : "challenge"
  }));

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    // Simulate system processing
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white p-8 relative">
        <CinematicBackground />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-surface-container-low border border-primary/20 p-12 text-center space-y-8 relative z-10 skew-x-[-1deg]"
        >
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl font-headline font-black uppercase italic text-white">{a.successTitle}</h2>
          <p className="text-zinc-500 font-mono text-xs leading-loose">
            {a.successMsg}
          </p>
          <Link to="/contacto" className="inline-block bg-primary text-black font-black uppercase text-xs px-10 py-5 tracking-widest hover:scale-105 transition-transform">
            {a.successCta}
          </Link>
        </motion.div>
      </div>
    );
  }

  const step = steps[currentStep] as any;

  return (
    <div className="min-h-screen pt-32 pb-20 px-8 relative bg-[#0a0a0a]">
      <CinematicBackground />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Progress Header */}
        <div className="mb-12 flex justify-between items-end">
          <div className="space-y-2">
            <div className="text-primary font-mono text-[10px] uppercase tracking-[0.4em]">{a.badge} {currentStep + 1}/{steps.length}</div>
            <h1 className="text-5xl font-headline font-black uppercase italic text-white">{step.title}</h1>
          </div>
          <div className="w-64 h-1 bg-white/5 relative hidden md:block">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-primary" 
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <motion.div 
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-surface-container-low border border-white/5 p-10 md:p-20 relative shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-zinc-700">{a.systemVersion}</div>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <step.icon className="w-6 h-6 text-primary" />
                <p className="text-xl text-zinc-400 font-light italic">{step.description}</p>
              </div>
            </div>

            <div className="space-y-6">
              {currentStep === 0 && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{step.label1}</label>
                    <input 
                      type="text" 
                      placeholder={step.placeholder1}
                      className="w-full bg-black border border-white/10 p-4 text-white focus:border-primary transition-colors outline-none font-mono"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{step.label2}</label>
                    <input 
                      type="text" 
                      placeholder={step.placeholder2}
                      className="w-full bg-black border border-white/10 p-4 text-white focus:border-primary transition-colors outline-none font-mono"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                    />
                  </div>
                </div>
              )}

              {currentStep > 0 && (
                <div className={`grid gap-4 ${step.options && step.options.length > 3 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                  {step.options?.map((opt: string) => {
                    const field = step.id as keyof AuditData;
                    const isSelected = formData[field] === opt;
                    return (
                      <button 
                        key={opt}
                        onClick={() => setFormData({...formData, [field]: opt})}
                        className={`p-6 border uppercase text-[10px] font-black tracking-widest text-left transition-all ${isSelected ? 'bg-primary text-black border-primary' : 'bg-white/5 text-zinc-500 border-white/10 hover:border-primary/50'}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex justify-between pt-10 border-t border-white/5">
              <button 
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-2 text-zinc-600 hover:text-white transition-colors disabled:opacity-0"
              >
                <ChevronLeft className="w-4 h-4" /> {a.prevBtn}
              </button>
              <button 
                onClick={nextStep}
                className="bg-primary text-black font-black uppercase text-xs px-12 py-5 tracking-widest hover:scale-105 transition-all flex items-center gap-4"
              >
                {currentStep === steps.length - 1 ? a.submitBtn : a.nextBtn} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
