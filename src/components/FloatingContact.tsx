import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const c = t.config;

  const whatsappUrl = `https://wa.me/${c.whatsapp}?text=Hola%20Insomnia%20Studio!%20Quisiera%20agendar%20una%20auditoría%20gratuita.`;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-72 bg-black border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 overflow-hidden relative group"
          >
            {/* Animated background line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-primary group-hover:animate-scan-x opacity-30" />
            
            <h4 className="text-primary font-headline font-black uppercase italic tracking-tighter mb-2">Protocolo Directo</h4>
            <p className="text-zinc-500 text-[10px] font-mono leading-relaxed uppercase mb-6">Canal de comunicación encriptado (WhatsApp)</p>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-primary text-black font-headline font-black uppercase text-[10px] px-4 py-3 hover:scale-[1.02] transition-all tracking-widest"
            >
              <span>Hablar con Agente</span>
              <Send className="w-3 h-3" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-none flex items-center justify-center transition-all duration-500 shadow-2xl ${
          isOpen ? "bg-zinc-900 text-white rotate-90" : "bg-primary text-black"
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-black flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
          </span>
        )}
      </button>
    </div>
  );
};
