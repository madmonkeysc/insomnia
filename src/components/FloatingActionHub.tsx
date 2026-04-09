import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  MessageSquare, 
  Calculator, 
  Briefcase, 
  X, 
  Plus,
  ArrowUpRight,
  ShieldCheck,
  PlayCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useGlobalContext } from '../context/GlobalContext';

interface HubItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  color: string;
  delay: number;
}

const HubItem = ({ icon, label, onClick, color, delay }: HubItemProps) => (
  <motion.button
    initial={{ opacity: 0, scale: 0.8, x: 20 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    exit={{ opacity: 0, scale: 0.8, x: 20 }}
    transition={{ delay, type: "spring", stiffness: 300, damping: 20 }}
    onClick={onClick}
    className="group relative flex items-center gap-4 mb-4"
  >
    <div className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-black/80 border border-white/10 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
      <span className="text-[10px] font-mono tracking-[0.2em] text-white uppercase whitespace-nowrap">
        {label}
      </span>
    </div>
    <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-black shadow-lg shadow-black/20 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300`}>
      {icon}
    </div>
  </motion.button>
);

export const FloatingActionHub = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const { setIsBookingModalOpen } = useGlobalContext();
  const [showROICalculator, setShowROICalculator] = useState(false);

  const toggleHub = () => setIsOpen(!isOpen);

  const hubActions = [
    {
      icon: <Calculator size={20} />,
      label: "Calculadora ROI",
      onClick: () => {
        // We will trigger a global event or use context
        window.dispatchEvent(new CustomEvent('open-roi-calculator'));
        setIsOpen(false);
      },
      color: "bg-white",
      delay: 0.1
    },
    {
      icon: <MessageSquare size={20} />,
      label: "WhatsApp Directo",
      onClick: () => {
        window.open(`https://wa.me/${t.config.whatsapp}`, '_blank');
        setIsOpen(false);
      },
      color: "bg-white",
      delay: 0.2
    },
    {
      icon: <Briefcase size={20} />,
      label: "Ver Portafolio",
      onClick: () => {
        window.location.href = '/portafolio';
        setIsOpen(false);
      },
      color: "bg-white",
      delay: 0.3
    },
    {
      icon: <Zap size={20} />,
      label: "Auditoría IA",
      onClick: () => {
        setIsBookingModalOpen(true);
        setIsOpen(false);
      },
      color: "bg-white",
      delay: 0.4
    }
  ];

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <div className="flex flex-col items-end mb-6">
              {hubActions.map((action, index) => (
                <HubItem key={index} {...action} />
              ))}
            </div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleHub}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 relative group border-none outline-none focus:ring-0 ${
            isOpen ? 'bg-black text-primary scale-90' : 'bg-primary text-black'
          }`}
        >
          {/* Pulsing glow background */}
          {!isOpen && (
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping pointer-events-none scale-150 opacity-20" />
          )}
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                className="relative z-10"
              >
                <Zap size={28} strokeWidth={2.5} fill="currentColor" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* New indicator bubble */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-black rounded-full border-2 border-primary flex items-center justify-center z-20">
              <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
            </span>
          )}
        </motion.button>
      </div>

      {/* Background Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />
        )}
      </AnimatePresence>
    </>
  );
};
