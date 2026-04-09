import { motion } from "motion/react";
import { Shield, Lock, Eye, FileText, Mail, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Section = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="border border-white/5 bg-white/[0.02] p-8 md:p-10 space-y-4 hover:border-primary/20 transition-colors duration-300"
  >
    <div className="flex items-start gap-4 mb-6">
      <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary" />
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

export const PrivacyPolicy = () => {
  const { lang, t } = useLanguage();
  const isEs = lang === "es";
  const pr = t.privacy;
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
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary font-mono text-xs uppercase tracking-widest">{pr.badge}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-black uppercase italic tracking-tighter leading-[0.85]">
              {pr.title1}<br />
              <span className="text-primary">{pr.title2}</span>
            </h1>
            <p className="text-zinc-500 text-sm font-mono">
              {pr.lastUpdated} <span className="text-zinc-300">{lastUpdated}</span>
            </p>
            <p className="max-w-2xl mx-auto text-zinc-400 text-base leading-relaxed">
              {pr.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 px-8">
        <div className="max-w-4xl mx-auto space-y-4">

          {isEs ? (
            <>
              <Section icon={FileText} title="I. Identidad y Domicilio del Responsable">
                <p><strong className="text-white">Insomnia AI Studio S.A. de C.V.</strong> (en adelante "usainsomnia.com"), con domicilio en la República Mexicana, es el responsable del tratamiento de sus datos personales conforme a la LFPDPPP.</p>
                <p>Para cualquier asunto relacionado con el presente Aviso de Privacidad, puede contactarnos a través de:</p>
                <ul className="space-y-4 py-3">
                  <Li>Correo electrónico: <strong className="text-zinc-200">privacidad@usainsomnia.com</strong></Li>
                  <Li>Sitio web: <strong className="text-zinc-200">www.usainsomnia.com</strong></Li>
                  <Li>Teléfono: <strong className="text-zinc-200">+52 55 8640 7719</strong></Li>
                  <Li>Horario de atención: Lunes a Viernes, 9:00 a 18:00 hrs (Hora del Centro de México)</Li>
                </ul>
              </Section>

              <Section icon={Eye} title="II. Datos Personales que se Recaban">
                <p>usainsomnia.com puede recabar las siguientes categorías de datos personales:</p>
                <div className="space-y-6 pt-4">
                  <div>
                    <h3 className="text-zinc-300 font-semibold mb-2">Datos de identificación:</h3>
                    <ul className="space-y-1"><Li>Nombre completo</Li><Li>Correo electrónico</Li><Li>Número de teléfono</Li><Li>País y ciudad de residencia</Li></ul>
                  </div>
                  <div>
                    <h3 className="text-zinc-300 font-semibold mb-2">Datos empresariales (opcionales):</h3>
                    <ul className="space-y-1"><Li>Nombre de la empresa u organización</Li><Li>Cargo o puesto desempeñado</Li><Li>Sector empresarial</Li><Li>Tamaño aproximado de la empresa</Li></ul>
                  </div>
                  <div>
                    <h3 className="text-zinc-300 font-semibold mb-2">Datos de navegación y técnicos:</h3>
                    <ul className="space-y-1"><Li>Dirección IP</Li><Li>Tipo de navegador y sistema operativo</Li><Li>Páginas visitadas y tiempo de permanencia</Li><Li>Cookies y tecnologías de rastreo similares</Li></ul>
                  </div>
                </div>
                <div className="mt-6 p-4 border border-yellow-500/20 bg-yellow-500/5 text-yellow-200/80 text-xs">
                  <p>⚠️ usainsomnia.com <strong>NO recaba datos personales sensibles</strong> tales como origen racial o étnico, estado de salud, creencias religiosas, datos biométricos, orientación sexual ni información genética.</p>
                </div>
              </Section>

              <Section icon={Shield} title="III. Finalidades del Tratamiento">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-zinc-300 font-semibold mb-2">Finalidades primarias (necesarias para la relación jurídica):</h3>
                    <ul className="space-y-1"><Li>Atender solicitudes de información, cotización o consultoría</Li><Li>Gestionar la relación contractual con clientes y proveedores</Li><Li>Enviar propuestas comerciales y presupuestos solicitados</Li><Li>Emitir y gestionar facturas, comprobantes y registros contables</Li><Li>Brindar soporte técnico y seguimiento post-venta</Li><Li>Cumplir con obligaciones legales y fiscales aplicables</Li></ul>
                  </div>
                  <div>
                    <h3 className="text-zinc-300 font-semibold mb-2">Finalidades secundarias (puede oponerse):</h3>
                    <ul className="space-y-1"><Li>Envío de contenido educativo, recursos y newsletter de usainsomnia.com</Li><Li>Invitación a webinars, eventos o demostraciones de productos</Li><Li>Estudios de mercado y análisis de satisfacción del cliente</Li><Li>Promoción de nuevos servicios, actualizaciones o funcionalidades</Li></ul>
                  </div>
                </div>
                <p className="mt-6 text-xs italic">Para oponerse al tratamiento de sus datos para finalidades secundarias, envíe un correo a <strong className="text-zinc-200">privacidad@usainsomnia.com</strong> indicando "Oposición a finalidades secundarias".</p>
              </Section>

              <Section icon={Lock} title="IV. Transferencias de Datos">
                <p>usainsomnia.com podrá transferir sus datos personales a las siguientes categorías de terceros sin requerir su consentimiento, en los términos permitidos por la LFPDPPP:</p>
                <ul className="space-y-3 py-3">
                  <Li><strong className="text-zinc-200">Autoridades gubernamentales y fiscales:</strong> Cuando sea requerido por ley, orden judicial o autoridad competente (SAT, IMSS, INFONAVIT, etc.)</Li>
                  <Li><strong className="text-zinc-200">Proveedores de infraestructura tecnológica:</strong> Servicios de alojamiento web, plataformas de correo electrónico, CRM y herramientas de análisis bajo estrictos acuerdos de confidencialidad</Li>
                  <Li><strong className="text-zinc-200">Asesores legales y contables:</strong> Para el cumplimiento de obligaciones corporativas y fiscales</Li>
                </ul>
                <p className="mt-4">Cualquier transferencia adicional requerirá su consentimiento expreso y previo. usainsomnia.com <strong className="text-zinc-200">no venderá, arrendará ni comercializará</strong> sus datos personales a terceros con fines publicitarios.</p>
              </Section>

              <Section icon={Shield} title="V. Derechos ARCO">
                <p>En todo momento usted tiene derecho a:</p>
                <ul className="space-y-3 py-3">
                  <Li><strong className="text-zinc-200">Acceso:</strong> Conocer qué datos personales tenemos de usted, cómo los usamos y a quién los compartimos</Li>
                  <Li><strong className="text-zinc-200">Rectificación:</strong> Corregir sus datos personales cuando sean inexactos o incompletos</Li>
                  <Li><strong className="text-zinc-200">Cancelación:</strong> Solicitar la eliminación de sus datos personales de nuestras bases de datos</Li>
                  <Li><strong className="text-zinc-200">Oposición:</strong> Oponerse al tratamiento de sus datos personales para fines específicos</Li>
                </ul>
                <div className="mt-6 p-6 border border-white/10 bg-white/5 space-y-4">
                  <p><strong className="text-zinc-200">Para ejercer sus derechos ARCO</strong>, envíe una solicitud al correo <strong className="text-primary">privacidad@usainsomnia.com</strong> con los siguientes datos:</p>
                  <ul className="space-y-1 text-xs opacity-70">
                    <li>- Nombre completo del titular.</li>
                    <li>- Descripción clara de los datos y del derecho a ejercer.</li>
                    <li>- Dirección de correo para respuesta.</li>
                    <li>- Copia de identificación oficial vigente.</li>
                  </ul>
                  <p>Responderemos en un plazo máximo de <strong className="text-zinc-200">20 días hábiles</strong>.</p>
                </div>
              </Section>

              <Section icon={Eye} title="VI. Uso de Cookies y Tecnologías de Rastreo">
                <p>Nuestro sitio web utiliza cookies y tecnologías similares con las siguientes finalidades:</p>
                <ul className="space-y-3 py-3">
                  <Li><strong className="text-zinc-200">Cookies técnicas (esenciales):</strong> Necesarias para el funcionamiento básico del sitio. No pueden desactivarse.</Li>
                  <Li><strong className="text-zinc-200">Cookies de análisis:</strong> Nos permiten medir el tráfico y comportamiento de usuarios para mejorar la experiencia.</Li>
                  <Li><strong className="text-zinc-200">Cookies de preferencias:</strong> Recuerdan sus configuraciones y preferencias de navegación.</Li>
                </ul>
                <p className="mt-3 italic">Puede gestionar o deshabilitar las cookies desde la configuración de su navegador en cualquier momento.</p>
              </Section>

              <Section icon={Lock} title="VII. Medidas de Seguridad">
                <p>usainsomnia.com implementa medidas de seguridad técnicas, administrativas y físicas incluyendo:</p>
                <ul className="space-y-2 py-3">
                  <Li>Cifrado SSL/TLS en todas las comunicaciones del sitio web</Li>
                  <Li>Control de acceso basado en roles para empleados con acceso a datos</Li>
                  <Li>Acuerdos de confidencialidad con todo el personal y proveedores</Li>
                  <Li>Revisiones periódicas de seguridad y auditorías internas</Li>
                  <Li>Políticas internas de retención y eliminación segura de datos</Li>
                  <Li>Autenticación multifactor en sistemas que contienen datos personales</Li>
                </ul>
              </Section>

              <Section icon={FileText} title="VIII. Cambios al Aviso de Privacidad">
                <p>usainsomnia.com se reserva el derecho de modificar el presente Aviso de Privacidad en cualquier momento para adaptarlo a novedades legislativas o corporativas.</p>
                <p className="mt-3">Cualquier modificación será comunicada a través de nuestro sitio web con al menos <strong className="text-zinc-200">10 días hábiles</strong> de anticipación a su entrada en vigor.</p>
                <p className="mt-3">Si no está de acuerdo con las modificaciones realizadas, puede ejercer sus derechos ARCO en los términos descritos en el apartado V.</p>
              </Section>

              <Section icon={Mail} title="IX. Autoridad de Protección de Datos">
                <p>Si considera que su derecho a la protección de datos personales ha sido vulnerado, puede acudir ante el <strong className="text-white">Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)</strong>.</p>
                <ul className="space-y-2 mt-4">
                  <Li>Sitio web: <strong className="text-zinc-200">www.inai.org.mx</strong></Li>
                  <Li>Teléfono: <strong className="text-zinc-200">800-835-4324</strong></Li>
                </ul>
              </Section>
            </>
          ) : (
            <>
              <Section icon={FileText} title="I. Identity and Address of the Data Controller">
                <p><strong className="text-white">Insomnia AI Studio S.A. de C.V.</strong> (hereinafter "usainsomnia.com"), domiciled in the Mexican Republic, is the data controller responsible for processing your personal data in accordance with the LFPDPPP.</p>
                <p>For any matter related to this Privacy Policy, you may contact us at:</p>
                <ul className="space-y-2 py-3">
                  <Li>Email: <strong className="text-zinc-200">privacy@usainsomnia.com</strong></Li>
                  <Li>Website: <strong className="text-zinc-200">www.usainsomnia.com</strong></Li>
                  <Li>Phone: <strong className="text-zinc-200">+52 55 8640 7719</strong></Li>
                  <Li>Business hours: Monday to Friday, 9:00 AM to 6:00 PM (Central Mexico Time)</Li>
                </ul>
              </Section>

              <Section icon={Eye} title="II. Personal Data Collected">
                <p>usainsomnia.com may collect the following categories of personal data:</p>
                <div className="space-y-6 pt-4">
                  <div>
                    <h3 className="text-zinc-300 font-semibold mb-2">Identification data:</h3>
                    <ul className="space-y-1"><Li>Full name</Li><Li>Email address</Li><Li>Phone number</Li><Li>Country and city of residence</Li></ul>
                  </div>
                  <div>
                    <h3 className="text-zinc-300 font-semibold mb-2">Business data (optional):</h3>
                    <ul className="space-y-1"><Li>Company or organization name</Li><Li>Job title or position</Li><Li>Business sector</Li><Li>Approximate company size</Li></ul>
                  </div>
                  <div>
                    <h3 className="text-zinc-300 font-semibold mb-2">Browsing and technical data:</h3>
                    <ul className="space-y-1"><Li>IP address</Li><Li>Browser type and operating system</Li><Li>Pages visited and time spent</Li><Li>Cookies and similar tracking technologies</Li></ul>
                  </div>
                </div>
                <div className="mt-6 p-4 border border-yellow-500/20 bg-yellow-500/5 text-yellow-200/80 text-xs">
                  <p>⚠️ usainsomnia.com does <strong>NOT collect sensitive personal data</strong> such as racial or ethnic origin, health status, religious beliefs, biometric data, sexual orientation, or genetic information.</p>
                </div>
              </Section>

              <Section icon={Shield} title="III. Purposes of Data Processing">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-zinc-300 font-semibold mb-2">Primary purposes (required for the legal relationship):</h3>
                    <ul className="space-y-1"><Li>Respond to information requests, quotes, or consultations</Li><Li>Manage the contractual relationship with clients and suppliers</Li><Li>Send requested commercial proposals and budgets</Li><Li>Issue and manage invoices, receipts, and accounting records</Li><Li>Provide technical support and after-sales follow-up</Li><Li>Comply with applicable legal and tax obligations</Li></ul>
                  </div>
                  <div>
                    <h3 className="text-zinc-300 font-semibold mb-2">Secondary purposes (you may object):</h3>
                    <ul className="space-y-1"><Li>Sending usainsomnia.com educational content, resources, and newsletters</Li><Li>Invitations to webinars, events, or product demonstrations</Li><Li>Market research and customer satisfaction analysis</Li><Li>Promotion of new services, updates, or features</Li></ul>
                  </div>
                </div>
                <p className="mt-6 text-xs italic">To object to the processing of your data for secondary purposes, send an email to <strong className="text-zinc-200">privacy@usainsomnia.com</strong> stating "Objection to secondary purposes".</p>
              </Section>

              <Section icon={Lock} title="IV. Data Transfers">
                <p>usainsomnia.com may transfer your personal data to the following categories of third parties without requiring your consent, as permitted by the LFPDPPP:</p>
                <ul className="space-y-3 py-3">
                  <Li><strong className="text-zinc-200">Government and tax authorities:</strong> When required by law, court order, or competent authority (SAT, IMSS, INFONAVIT, etc.)</Li>
                  <Li><strong className="text-zinc-200">Technology infrastructure providers:</strong> Web hosting services, email platforms, CRM tools, and analytics under strict confidentiality agreements</Li>
                  <Li><strong className="text-zinc-200">Legal and accounting advisors:</strong> For compliance with corporate and tax obligations</Li>
                </ul>
                <p className="mt-4">Any additional transfer will require your express prior consent. usainsomnia.com will <strong className="text-zinc-200">not sell, lease, or commercialize</strong> your personal data to third parties for advertising purposes.</p>
              </Section>

              <Section icon={Shield} title="V. ARCO Rights">
                <p>At any time you have the right to:</p>
                <ul className="space-y-3 py-3">
                  <Li><strong className="text-zinc-200">Access:</strong> Know what personal data we hold about you, how we use it, and with whom we share it</Li>
                  <Li><strong className="text-zinc-200">Rectification:</strong> Correct your personal data when it is inaccurate or incomplete</Li>
                  <Li><strong className="text-zinc-200">Cancellation:</strong> Request the deletion of your personal data from our databases</Li>
                  <Li><strong className="text-zinc-200">Opposition:</strong> Object to the processing of your personal data for specific purposes</Li>
                </ul>
                <div className="mt-6 p-6 border border-white/10 bg-white/5 space-y-4">
                  <p><strong className="text-zinc-200">To exercise your ARCO rights</strong>, send a request to <strong className="text-primary">privacy@usainsomnia.com</strong> including your full name, description of the right to exercise, and a copy of your valid ID. We will respond within <strong className="text-zinc-200">20 business days</strong>.</p>
                </div>
              </Section>

              <Section icon={Eye} title="VI. Cookies and Tracking Technologies">
                <p>Our website uses cookies and similar technologies for the following purposes:</p>
                <ul className="space-y-3 py-3">
                  <Li><strong className="text-zinc-200">Technical cookies:</strong> Required for the basic operation of the site. They cannot be disabled.</Li>
                  <Li><strong className="text-zinc-200">Analytics cookies:</strong> Allow us to measure traffic and user behavior to improve the experience.</Li>
                  <Li><strong className="text-zinc-200">Preference cookies:</strong> Remember your settings and browsing preferences.</Li>
                </ul>
              </Section>

              <Section icon={Lock} title="VII. Security Measures">
                <p>usainsomnia.com implements technical, administrative, and physical security measures including:</p>
                <ul className="space-y-2 py-3">
                  <Li>SSL/TLS encryption on all website communications</Li>
                  <Li>Role-based access control for employees with data access</Li>
                  <Li>Confidentiality agreements with all staff and providers</Li>
                  <Li>Periodic security reviews and internal audits</Li>
                  <Li>Multi-factor authentication on systems containing personal data</Li>
                </ul>
              </Section>

              <Section icon={FileText} title="VIII. Changes to This Privacy Policy">
                <p>usainsomnia.com reserves the right to modify this Privacy Policy at any time. Any changes will be posted on our website.</p>
              </Section>

              <Section icon={Mail} title="IX. Data Protection Authority">
                <p>If you believe your right to personal data protection has been violated, you may contact the <strong className="text-white">National Institute for Transparency (INAI)</strong>.</p>
              </Section>
            </>
          )}

          {/* Footer note */}
          <div className="border border-primary/20 bg-primary/5 p-6 text-center space-y-2 mt-8">
            <p className="text-primary font-mono text-xs uppercase tracking-widest">
              {isEs ? "Consentimiento" : "Consent"}
            </p>
            <p className="text-zinc-300 text-sm">
              {isEs
                ? "Al utilizar nuestros servicios, proporcionar sus datos o navegar por nuestro sitio web, usted manifiesta haber leído, entendido y aceptado los términos del presente Aviso de Privacidad."
                : "By using our services, providing your data, or browsing our website, you acknowledge that you have read, understood, and accepted the terms of this Privacy Policy."}
            </p>
            <p className="text-zinc-500 text-xs">
              usainsomnia.com — {isEs ? "Todos los derechos reservados" : "All rights reserved"} {new Date().getFullYear()}
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
