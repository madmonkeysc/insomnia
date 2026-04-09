import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowRight, Brain, Zap, Globe, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useGlobalContext } from '../context/GlobalContext';

export const AboutUs = () => {
  const { t } = useLanguage();
  const { setIsBookingModalOpen } = useGlobalContext();

  const teamMembers = [
    {
      name: "Lic. Humberto Carosilva",
      role: t.about.team.director.role,
      image: "/assets/humberto.png",
      linkedin: "https://www.linkedin.com/in/hcarosilva",
      description: t.about.team.director.desc
    },
    {
      name: "Angélica Carosilva",
      role: t.about.team.pr.role,
      image: "/assets/angelica.png",
      linkedin: "#",
      description: t.about.team.pr.desc
    },
    {
      name: "Alejandro Flores",
      role: t.about.team.programming.role,
      image: "/assets/programmer_team.png",
      linkedin: "#",
      description: t.about.team.programming.desc
    },
    {
      name: "Camila Rodríguez",
      role: t.about.team.web.role,
      image: "/assets/web_dev_team.png",
      linkedin: "#",
      description: t.about.team.web.desc
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-primary/30 overflow-x-hidden text-left pt-32 pb-24">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-primary/5 blur-[150px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-cyan-500/5 blur-[120px] -z-10 rounded-full" />
        <div className="absolute inset-0 bg-dots opacity-10 mix-blend-overlay" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Intro Section */}
        <section className="mb-40 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
              <Brain className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.4em] text-primary uppercase font-bold">
                {t.about.missionBadge}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]">
              {t.about.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-primary drop-shadow-[0_0_30px_rgba(252,242,0,0.3)]">
                {t.about.title2}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed pt-6">
              {t.about.desc1}
            </p>
            <p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed">
              {t.about.desc2}
            </p>
          </motion.div>
        </section>

        {/* Team Section */}
        <section className="mb-32">
          <div className="mb-20 text-center sm:text-left space-y-4">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
              {t.about.teamSectionTitle1} <span className="text-primary">{t.about.teamSectionTitle2}</span>
            </h2>
            <p className="text-zinc-500 font-mono uppercase tracking-[0.2em] text-sm md:text-base">
              {t.about.teamSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 md:p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center md:items-start"
              >
                {/* Image */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-[2rem] overflow-hidden flex-shrink-0 shadow-2xl">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20 md:hidden" />
                </div>

                {/* Info */}
                <div className="flex-col justify-between h-full flex z-30 text-center md:text-left space-y-6">
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono text-primary tracking-[0.3em] uppercase font-bold">
                      {member.role}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight text-white">
                      {member.name}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed text-sm pt-2">
                      {member.description}
                    </p>
                  </div>
                  
                  {member.linkedin !== "#" && (
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 p-3 px-6 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-black font-mono text-xs uppercase tracking-widest transition-all duration-300 w-fit mx-auto md:mx-0 shadow-lg"
                    >
                      <Linkedin className="w-4 h-4" />
                      {t.about.connectBtn}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Footer */}
        <section className="text-center py-20 border-t border-white/5">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-8">
            {t.about.ctaTitle1} <span className="text-primary">{t.about.ctaTitle2}</span>
          </h2>
          <button 
            onClick={() => setIsBookingModalOpen(true)}
            className="group relative px-12 py-6 bg-primary text-black rounded-full font-black uppercase tracking-[0.3em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(252,242,0,0.3)] mx-auto flex items-center justify-center gap-4"
          >
            {t.about.ctaBtn}
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </section>
      </main>
    </div>
  );
};
