import { useState, useEffect, useRef } from "react";
import { 
  RotateCcw,
  User, 
  Loader2, 
  Sparkles, 
  Brain,
  X
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { GoogleGenAI } from "@google/genai";
import { useGlobalContext } from "../context/GlobalContext";

interface Message {
  role: "user" | "bot";
  content: string;
}

const QuickAction = ({ label, onClick }: { label: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black hover:border-primary transition-all rounded-full whitespace-nowrap"
  >
    {label}
  </button>
);

export const Chat = () => {
  const { t } = useLanguage();
  const { isChatOpen, setIsChatOpen } = useGlobalContext();
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: t.chat.welcome }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: "bot", content: t.chat.welcome }]);
  }, [t.chat.welcome]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage = textToSend.trim();
    if (!customText) setInput("");
    
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
      if (!apiKey) {
        throw new Error("Missing API Key");
      }
      
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: userMessage,
        config: {
          systemInstruction: t.chat.systemInstruction
        }
      });

      setMessages(prev => [...prev, { role: "bot", content: response.text || t.chat.errorGeneral }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: "bot", content: t.chat.error }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isChatOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsChatOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />
          
          {/* Side Drawer */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#0a0a0a] border-l border-white/5 z-[210] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 bg-black/40 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(252,242,0,0.3)]">
                  <Sparkles className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-sm font-black tracking-widest text-white uppercase italic">Insomnia Assistant</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Neural Link Active</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setMessages([{ role: "bot", content: t.chat.welcome }])}
                  className="text-zinc-500 hover:text-white transition-colors p-2"
                  title="Reset"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="text-zinc-500 hover:text-primary transition-colors p-2"
                  aria-label="Close Assistant"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={i} 
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex gap-4 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                      <div className={`w-10 h-10 shrink-0 border flex items-center justify-center ${msg.role === "user" ? "bg-white/5 border-white/10" : "bg-primary border-primary text-black"}`}>
                        {msg.role === "user" ? <User className="w-5 h-5" /> : <Brain className="w-5 h-5" />}
                      </div>
                      <div className={`p-5 text-sm leading-relaxed shadow-sm ${msg.role === "user" ? "bg-white/5 text-zinc-100" : "bg-zinc-900/50 text-zinc-300 border border-white/5"}`}>
                        {msg.content}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary border border-primary text-black flex items-center justify-center">
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </div>
                    <div className="p-5 bg-zinc-900/50 border border-white/5">
                      <span className="text-xs text-zinc-500 font-mono italic">{t.chat.processing}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="px-8 py-6 flex gap-3 overflow-x-auto scrollbar-hide bg-black/40 border-t border-white/5">
              <QuickAction label={t.chat.quickActions.idea} onClick={() => handleSend(t.chat.quickActionsPrompts.idea)} />
              <QuickAction label={t.chat.quickActions.automation} onClick={() => handleSend(t.chat.quickActionsPrompts.automation)} />
              <QuickAction label={t.chat.quickActions.branding} onClick={() => handleSend(t.chat.quickActionsPrompts.branding)} />
            </div>

            {/* Input */}
            <div className="p-8 bg-black border-t border-white/5 pb-12">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder={t.chat.placeholder}
                  className="flex-1 bg-zinc-900 border border-white/10 px-6 py-5 text-sm focus:outline-none focus:border-primary/40 transition-colors placeholder:text-zinc-700 font-label"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading}
                  className="bg-primary text-black px-8 font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 shadow-[0_10px_20px_rgba(252,242,0,0.2)]"
                >
                  {t.chat.submit}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

