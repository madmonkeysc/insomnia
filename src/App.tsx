import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { GlobalProvider } from "./context/GlobalContext";
import { LanguageProvider } from "./context/LanguageContext";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { Agents } from "./pages/Agents";
import { Contact } from "./pages/Contact";
import { Audit } from "./pages/Audit";
import { SuccessBooking } from "./pages/SuccessBooking";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";
import { ServiceLanding } from "./pages/ServiceLanding";
import { AudiovisualLanding } from "./pages/AudiovisualLanding";
import { BrandingLanding } from "./pages/BrandingLanding";
import { WebLanding } from "./pages/WebLanding";
import { SocialMediaLanding } from "./pages/SocialMediaLanding";
import { AutomationLanding } from "./pages/AutomationLanding";
import { EditorialLanding } from "./pages/EditorialLanding";
import { KrakenLanding } from "./pages/KrakenLanding";
import { NotFound } from "./pages/NotFound";
import { AboutUs } from "./pages/AboutUs";
import { useEffect } from "react";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/servicios" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Services />
            </motion.div>
          } 
        />
        <Route 
          path="/servicios/audiovisual" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AudiovisualLanding />
            </motion.div>
          } 
        />
        <Route 
          path="/servicios/branding" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <BrandingLanding />
            </motion.div>
          } 
        />
        <Route 
          path="/servicios/web" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <WebLanding />
            </motion.div>
          } 
        />
        <Route 
          path="/servicios/kraken" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <KrakenLanding />
            </motion.div>
          } 
        />
        <Route 
          path="/servicios/redes" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <SocialMediaLanding />
            </motion.div>
          } 
        />
        <Route 
          path="/servicios/automatizacion" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AutomationLanding />
            </motion.div>
          } 
        />
        <Route 
          path="/nosotros" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <AboutUs />
            </motion.div>
          } 
        />
        <Route 
          path="/servicios/editorial" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <EditorialLanding />
            </motion.div>
          } 
        />
        <Route 
          path="/servicios/:id" 
          element={
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ServiceLanding />
            </motion.div>
          } 
        />
        <Route 
          path="/portafolio" 
          element={
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <Portfolio />
            </motion.div>
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <Portfolio />
            </motion.div>
          } 
        />
        <Route 
          path="/agentes" 
          element={
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.4 }}
            >
              <Agents />
            </motion.div>
          } 
        />
        <Route 
          path="/contacto" 
          element={
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <Contact />
            </motion.div>
          } 
        />
        <Route 
          path="/agendada" 
          element={
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <SuccessBooking />
            </motion.div>
          } 
        />
        <Route 
          path="/auditoria" 
          element={
            <motion.div
              initial={{ opacity: 0, filter: "blur(5px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(5px)" }}
              transition={{ duration: 0.4 }}
            >
              <Audit />
            </motion.div>
          } 
        />
        <Route 
          path="/blog" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Blog />
            </motion.div>
          } 
        />
        <Route 
          path="/blog/:id" 
          element={
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <Blog />
            </motion.div>
          } 
        />
        <Route 
          path="/admin" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Admin />
            </motion.div>
          } 
        />
        <Route 
          path="/aviso-privacidad" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <PrivacyPolicy />
            </motion.div>
          } 
        />
        <Route 
          path="/terminos-condiciones" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <TermsConditions />
            </motion.div>
          } 
        />
        <Route 
          path="/404" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <NotFound />
            </motion.div>
          } 
        />
        <Route 
          path="*" 
          element={<NotFound />} 
        />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <GlobalProvider>
        <LanguageProvider>
          <Router>
            <Helmet>
              <title>INSOMNIA AI | Creative Intelligence Agency</title>
              <meta name="description" content="Agencia de inteligencia creativa y automatización IA de alto nivel. Escalamos tu visión con tecnología disruptiva." />
              <meta property="og:title" content="INSOMNIA AI | Next Generation Automation" />
              <meta property="og:description" content="Autonomous AI systems for businesses aiming for the Top 1%." />
              <meta property="og:image" content="/assets/cyborg-brain.png" />
              <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <ScrollToTop />
            <MainLayout>
              <AnimatedRoutes />
            </MainLayout>
          </Router>
        </LanguageProvider>
      </GlobalProvider>
    </HelmetProvider>
  );
}

