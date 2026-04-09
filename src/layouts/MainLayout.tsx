import { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useGlobalContext } from "../context/GlobalContext";
import { Chat } from "../components/Chat";
import { FloatingActionHub } from "../components/FloatingActionHub";
import { ROICalculator } from "../components/modals/ROICalculator";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const { t } = useLanguage();
  const { isBookingModalOpen, setIsBookingModalOpen } = useGlobalContext();
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-body selection:bg-primary selection:text-black relative overflow-x-hidden">
    {/* Visual background elements */}
    <div className="fixed inset-0 grain-overlay z-[100] pointer-events-none" />
    
    <Header />

    <main className="relative z-10 pt-20">
      {children}
      <Footer />
    </main>

    {/* Global Components */}
    <Chat />
    <FloatingActionHub />
    <ROICalculator />

    {/* ─── Global Booking Modal ─── */}
    <AnimatePresence>
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsBookingModalOpen(false)}
            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 shadow-[0_0_80px_rgba(252,242,0,0.1)] overflow-hidden"
          >
            {/* Header / Close */}
            <div className="absolute top-4 right-4 z-20">
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="p-2 bg-black/50 hover:bg-white/10 rounded-full transition-colors group backdrop-blur-md"
              >
                <X size={20} className="text-zinc-500 group-hover:text-white transition-colors" />
              </button>
            </div>

            <div className="relative z-10 h-[80vh] flex flex-col">
              <div className="flex-1 overflow-hidden">
                <iframe 
                  src={t.config.bookingURL} 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  className="filter invert hue-rotate-180 brightness-90 grayscale-[0.2]"
                  title="TidyCal Scheduling"
                ></iframe>
              </div>
              
              <div className="bg-black/80 backdrop-blur-md p-4 border-t border-white/5 flex flex-col items-center gap-2">
                <button
                  onClick={() => setIsBookingModalOpen(false)}
                  className="w-full bg-primary text-black font-black uppercase text-[10px] py-4 tracking-[0.3em] hover:brightness-110 transition-all shadow-[0_0_30px_rgba(252,242,0,0.1)]"
                >
                  {t.home.guaranteeProtocol.ctaClose}
                </button>
                <p className="text-[6px] font-mono text-zinc-700 uppercase tracking-widest">
                  Secure Scheduling Tunnel // Insomnia V4.0 // Encryption Active
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  </div>
  );
};
