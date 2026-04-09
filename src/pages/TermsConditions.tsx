import { motion } from "motion/react";
import { FileText, AlertTriangle, Cpu, CreditCard, Scale, Globe, ChevronRight, Ban } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Section = ({ icon: Icon, title, number, children }: { icon: any; title: string; number: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="border border-white/5 bg-white/[0.02] p-8 md:p-10 space-y-4 hover:border-primary/20 transition-colors duration-300"
  >
    <div className="flex items-start gap-4 mb-6">
      <div className="flex-shrink-0 flex flex-col items-center gap-2">
        <span className="text-primary font-mono text-xs">{number}</span>
        <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <h2 className="text-xl font-headline font-black uppercase tracking-wider text-white pt-5">{title}</h2>
    </div>
    <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">{children}</div>
  </motion.div>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <ChevronRight className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

export const TermsConditions = () => {
  const { lang, t } = useLanguage();
  const isEs = lang === "es";
  const tc = t.terms;
  const lastUpdated = isEs ? "5 de abril de 2025" : "April 5, 2025";

  return (
    <div className="relative bg-black min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(252,242,0,0.04)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-4 py-2 mb-4">
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-primary font-mono text-xs uppercase tracking-widest">{tc.badge}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-black uppercase italic tracking-tighter leading-[0.85]">
              {tc.title1}<br />
              <span className="text-primary">{tc.title2}</span>
            </h1>
            <p className="text-zinc-500 text-sm font-mono">
              {tc.lastUpdated} <span className="text-zinc-300">{lastUpdated}</span>
            </p>
            <p className="max-w-2xl mx-auto text-zinc-400 text-base leading-relaxed">
              {tc.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 px-8">
        <div className="max-w-4xl mx-auto space-y-4">

          {isEs ? (
            <>
              <Section icon={FileText} title="Aceptación de los Términos" number="01">
                <p>Al acceder, navegar o utilizar el sitio web <strong className="text-zinc-200">www.usainsomnia.com</strong>, así como al contratar cualquier servicio ofrecido por <strong className="text-zinc-200">Insomnia AI Studio S.A. de C.V.</strong> (en adelante "usainsomnia.com"), usted (en adelante "el Cliente" o "el Usuario") acepta quedar vinculado por los presentes Términos y Condiciones, así como por nuestra Política de Privacidad.</p>
                <p className="mt-3">Si no está de acuerdo con alguno de los términos aquí establecidos, le pedimos abstenerse de utilizar nuestros servicios y abandonar el sitio web de manera inmediata.</p>
                <div className="mt-3 p-4 border border-primary/20 bg-primary/5 text-yellow-100/80 text-xs text-center">
                  <p>⚠️ Estos Términos constituyen un <strong>contrato legalmente vinculante</strong> entre usted e usainsomnia.com, regido por las leyes de los Estados Unidos Mexicanos.</p>
                </div>
              </Section>

              <Section icon={Cpu} title="Descripción de los Servicios" number="02">
                <p>usainsomnia.com ofrece servicios de consultoría, desarrollo e implementación en las siguientes áreas:</p>
                <ul className="space-y-2 py-3">
                  <Li>Diseño e implementación de sistemas de automatización con inteligencia artificial</Li>
                  <Li>Desarrollo de agentes autónomos y arquitecturas multi-agente</Li>
                  <Li>Consultoría estratégica en transformación digital y adopción de IA</Li>
                  <Li>Integración de herramientas de automatización (n8n, Make, Zapier y similares)</Li>
                  <Li>Diseño de flujos de trabajo y procesos operativos asistidos por IA</Li>
                  <Li>Capacitación y formación en tecnologías de automatización</Li>
                  <Li>Desarrollo web y de aplicaciones con componentes de IA</Li>
                </ul>
                <p className="mt-4">Las especificaciones, alcances, entregables, plazos y costos de cada proyecto se definirán en <strong className="text-zinc-200">propuestas o contratos específicos</strong>.</p>
              </Section>

              <Section icon={CreditCard} title="Condiciones Económicas y de Pago" number="03">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-zinc-300 font-semibold mb-2">Cotizaciones y presupuestos:</h3>
                    <ul className="space-y-1">
                      <Li>Todas las cotizaciones tienen una vigencia de <strong className="text-zinc-200">15 días naturales</strong> a partir de su emisión</Li>
                      <Li>Los precios están expresados en Pesos Mexicanos (MXN) o Dólares Americanos (USD) según se indique</Li>
                      <Li>usainsomnia.com se reserva el derecho de modificar precios con previo aviso</Li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-zinc-300 font-semibold mb-2">Condiciones de pago:</h3>
                    <ul className="space-y-1">
                      <Li>El inicio de cualquier proyecto requiere un <strong className="text-zinc-200">pago del 50% del total acordado</strong> como anticipo</Li>
                      <Li>El 50% restante se liquidará contra entrega del proyecto o según el calendario acordado</Li>
                      <Li>Servicios recurrentes se pagan mensualmente dentro de los primeros 5 días del mes</Li>
                      <Li>Pagos con retraso mayor a 10 días generarán un cargo moratorio del <strong className="text-zinc-200">2% mensual</strong></Li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-zinc-300 font-semibold mb-2">Política de reembolsos:</h3>
                    <ul className="space-y-1">
                      <Li>Los anticipos <strong className="text-zinc-200">no son reembolsables</strong> una vez iniciado el proyecto</Li>
                      <Li>En caso de cancelación antes del inicio, se analizará cada caso particular</Li>
                      <Li>No se realizan reembolsos por servicios ya entregados y aceptados</Li>
                    </ul>
                  </div>
                </div>
              </Section>

              <Section icon={Scale} title="Propiedad Intelectual" number="04">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-zinc-300 font-semibold mb-2">Propiedad de usainsomnia.com:</h3>
                    <ul className="space-y-2">
                      <Li>Todo el contenido del sitio web es propiedad exclusiva de usainsomnia.com</Li>
                      <Li>El nombre comercial "usainsomnia.com", el logo, el "Kraken Engine" y las metodologías propietarias son activos intelectuales protegidos</Li>
                      <Li>Queda prohibida su reproducción, distribución o uso no autorizado sin consentimiento escrito</Li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-zinc-300 font-semibold mb-2">Entregables del proyecto:</h3>
                    <ul className="space-y-2">
                      <Li>Tras el pago del 100%, el Cliente recibirá los derechos de uso sobre los entregables acordados</Li>
                      <Li>usainsomnia.com conserva el derecho de usar el proyecto como caso de estudio en su portafolio</Li>
                      <Li>Las metodologías y componentes genéricos desarrollados por usainsomnia.com permanecen como su propiedad</Li>
                    </ul>
                  </div>
                </div>
              </Section>

              <Section icon={AlertTriangle} title="Limitación de Responsabilidad" number="05">
                <p>usainsomnia.com proporciona sus servicios de buena fe. Sin embargo, en la medida permitida por la ley:</p>
                <ul className="space-y-3 py-3">
                  <Li>usainsomnia.com <strong className="text-zinc-200">no garantiza</strong> resultados específicos de negocio o métricas particulares</Li>
                  <Li>La responsabilidad total estará limitada al <strong className="text-zinc-200">monto total pagado</strong> por el servicio en los últimos 12 meses</Li>
                  <Li>No seremos responsables por daños indirectos, incidentales o consecuentes</Li>
                  <Li>El Cliente es responsable de los respaldos de su información</Li>
                  <Li>El Cliente asume la responsabilidad de revisar y validar los resultados generados por IA</Li>
                </ul>
              </Section>

              <Section icon={Ban} title="Conductas Prohibidas" number="06">
                <p>Se prohíbe utilizar los servicios para:</p>
                <ul className="space-y-2 py-3">
                  <Li>Actividades ilegales, fraudulentas o que violen derechos de terceros</Li>
                  <Li>Generación de contenido que promueva el odio, la discriminación o la violencia</Li>
                  <Li>Spam, phishing o cualquier forma de comunicación no solicitada</Li>
                  <Li>Reverse engineering de las herramientas propietarias de usainsomnia.com</Li>
                  <Li>Reventa de los servicios sin autorización escrita</Li>
                </ul>
                <div className="mt-4 p-4 border border-red-500/20 bg-red-500/5 text-red-200/80 text-xs text-center">
                  <p>🚫 El incumplimiento faculta a usainsomnia.com a <strong>suspender inmediatamente</strong> la relación contractual.</p>
                </div>
              </Section>

              <Section icon={Globe} title="Jurisdicción y Contacto" number="07">
                <p>Los presentes Términos se rigen por las leyes de los <strong className="text-zinc-200">Estados Unidos Mexicanos</strong>. Para cualquier duda, contáctenos:</p>
                <ul className="space-y-4 py-6">
                  <Li>
                    <span className="text-zinc-500 mr-2">Digital Mail:</span>
                    <a href="mailto:hola@usainsomnia.com" className="text-primary hover:underline font-mono">hola@usainsomnia.com</a>
                  </Li>
                  <Li>
                    <span className="text-zinc-500 mr-2">Phone:</span>
                    <span className="text-zinc-200 font-mono">+52 55 8640 7719</span>
                  </Li>
                </ul>
              </Section>
            </>
          ) : (
            <>
              <Section icon={FileText} title="Acceptance of Terms" number="01">
                <p>By using <strong className="text-zinc-200">www.usainsomnia.com</strong> and our services, you (the "Client") agree to these Terms and Conditions and our Privacy Policy.</p>
                <div className="mt-3 p-4 border border-primary/20 bg-primary/5 text-yellow-100/80 text-xs text-center">
                  <p>⚠️ These Terms constitute a <strong>legally binding contract</strong> between you and usainsomnia.com.</p>
                </div>
              </Section>

              <Section icon={Cpu} title="Services Description" number="02">
                <p>usainsomnia.com provides AI consulting, development, and automation services including:</p>
                <ul className="space-y-2 py-3">
                  <Li>AI-powered automation systems</Li>
                  <Li>Autonomous agents and multi-agent architectures</Li>
                  <Li>Strategic digital transformation consulting</Li>
                  <Li>Workflow and process design</Li>
                </ul>
              </Section>

              <Section icon={CreditCard} title="Economic Conditions" number="03">
                <ul className="space-y-2 py-3">
                  <Li>Quotes are valid for <strong className="text-zinc-200">15 calendar days</strong></Li>
                  <Li>Project starts require a <strong className="text-zinc-200">50% upfront payment</strong></Li>
                  <Li>Remaining balance due upon delivery</Li>
                  <Li>Upfront payments are <strong className="text-zinc-200">non-refundable</strong> once the project starts</Li>
                </ul>
              </Section>

              <Section icon={Scale} title="Intellectual Property" number="04">
                <p>All website content and "Kraken Engine" are exclusive property of usainsomnia.com. Upon full payment, Clients receive usage rights for specific deliverables.</p>
              </Section>

              <Section icon={AlertTriangle} title="Limitation of Liability" number="05">
                <p>usainsomnia.com's liability is limited to the <strong className="text-zinc-200">total amount paid</strong> for the service in the last 12 months. We are not liable for indirect or consequential damages.</p>
              </Section>

              <Section icon={Globe} title="Jurisdiction and Contact" number="06">
                <p>These terms are governed by the laws of the <strong className="text-zinc-200">United Mexican States</strong>. Contact us at:</p>
                <ul className="space-y-4 py-6">
                  <Li>
                    <span className="text-zinc-500 mr-2">Email:</span>
                    <a href="mailto:hola@usainsomnia.com" className="text-primary hover:underline font-mono">hola@usainsomnia.com</a>
                  </Li>
                </ul>
              </Section>
            </>
          )}

          {/* Footer note */}
          <div className="border border-primary/20 bg-primary/5 p-8 text-center space-y-3 mt-8">
            <p className="text-primary font-mono text-xs uppercase tracking-widest">
              {isEs ? "Aceptación" : "Acceptance"}
            </p>
            <p className="text-zinc-300 text-sm">
              {isEs
                ? "Al contratar cualquier servicio de usainsomnia.com o al usar este sitio web, usted declara haber leído, comprendido y aceptado en su totalidad los presentes Términos y Condiciones."
                : "By contracting any usainsomnia.com service or by using this website, you declare that you have read, understood, and fully accepted these Terms and Conditions."}
            </p>
            <p className="text-zinc-500 text-xs">
              Insomnia AI Studio S.A. de C.V. — {isEs ? "Todos los derechos reservados" : "All rights reserved"} {new Date().getFullYear()}
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
