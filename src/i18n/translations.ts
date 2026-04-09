// ============================================================
// INSOMNIA AI — Translation System
// Source of truth for all ES/EN text content
// ============================================================

export type Language = "es" | "en";

export const translations = {
  es: {
    // ----------------------------------------------------------
    // Header & Nav
    // ----------------------------------------------------------
    nav: {
      empresas: "Empresas",
      emprendedores: "Emprendedores",
      services: "Servicios",
      portfolio: "Portafolio",
      agents: "Agentes IA",
      contact: "Contacto",
      cta: "Auditoría Gratis",
      mobileNav: "Navegación",
      mobileLanguage: "Idioma / Language",
      mobileSegment: "Segmento",
      home: "Inicio"
    },

    // ----------------------------------------------------------
    // Footer
    // ----------------------------------------------------------
    footer: {
      tagline: "Where Dreams Become Digital Reality",
      colStudio: "Estudio",
      colServices: "Servicios",
      colContact: "Contacto",
      linkNosotros: "Nosotros",
      linkShowreel: "Showreel",
      linkProcesosIA: "Procesos IA",
      linkBranding: "Branding",
      linkContent: "Contenido & Video",
      linkAgents: "Agentes & Automatización",
      linkWeb: "Web & Apps",
      linkSocial: "Redes Sociales",
      linkAutomation: "Excelencia Operacional",
      linkEditorial: "Ingeniería Editorial",
      copyright: "Todos los derechos reservados",
      privacy: "Aviso de Privacidad",
      terms: "Términos y Condiciones",
    },

    // ----------------------------------------------------------
    // Global Config
    // ----------------------------------------------------------
    config: {
      domain: "usainsomnia.com",
      email: "hola@usainsomnia.com",
      phone: "+52 55 8640 7719",
      whatsapp: "525586407719",
      locations: ["Ciudad de México", "Querétaro"],
      socials: {
        facebook: "https://www.facebook.com/usainsomnia",
        instagram: "https://www.instagram.com/usainsomnia",
        tiktok: "#",
        linkedin: "https://www.linkedin.com/company/usainsomnia"
      },
      bookingURL: "https://tidycal.com/humbertocarosilva/sesion-estrategica-ia-insomnia-studio"
    },

    // ----------------------------------------------------------
    // About Us
    // ----------------------------------------------------------
    about: {
      missionBadge: "Nuestra Misión",
      title1: "ESCALAR MEDIANTE",
      title2: "INTELIGENCIA",
      desc1: "En INSOMNIA AI, creemos que el verdadero valor de la Inteligencia Artificial no es reemplazar el ingenio humano, sino multiplicarlo. Ayudamos a empresas y personas a trascender sus límites operativos, creando ecosistemas autónomos que trabajan 24/7.",
      desc2: "No somos una agencia tradicional; somos un laboratorio de crecimiento. Integramos desarrollo web, aplicaciones a medida y agentes de IA para construir arquitecturas que dominan el mercado y aceleran la rentabilidad.",
      teamSectionTitle1: "EL ESCUADRÓN",
      teamSectionTitle2: "KRAKEN",
      teamSubtitle: "Las mentes maestras detrás de la automatización empresarial.",
      team: {
        director: {
          role: "Director General",
          desc: "Visionario estratégico especializado en la escalabilidad empresarial mediante inteligencia artificial y automatización avanzada."
        },
        pr: {
          role: "Directora de RP",
          desc: "Experta en Relaciones Públicas y alianzas corporativas. Construye puentes entre la innovación tecnológica y el sector empresarial."
        },
        programming: {
          role: "Director de Programación",
          desc: "Arquitecto de software líder. Diseña y despliega ecosistemas inteligentes y agentes autónomos de alta complejidad."
        },
        web: {
          role: "Lead Web & App Development",
          desc: "Especialista en desarrollo frontend y móvil. Transforma infraestructuras complejas en interfaces dinámicas y conversacionales."
        }
      },
      ctaTitle1: "¿LISTO PARA ESCALAR",
      ctaTitle2: "TU OPERACIÓN?",
      ctaBtn: "Iniciar Protocolo",
      connectBtn: "Conectar"
    },

    // ----------------------------------------------------------
    // Home
    // ----------------------------------------------------------
    home: {
      badge: "Creative Intelligence Agency",
      heroEmpresas: { title1: "Escala Sin", highlight: "Límites" },
      heroEmprendedores: { title1: "Escale e", highlight: "Impacte" },
      subtitleEmpresas: "Tu capacidad humana ha llegado a su tope, la nuestra no. Construimos el motor de contenido y automatización que llevará tu facturación al siguiente nivel.",
      subtitleEmprendedores: "Estar saturado no es señal de éxito, es señal de un sistema que te detiene. Deja de ser el cuello de botella de tu propia ambición y permite que la IA orqueste tu crecimiento mientras recuperas el mando de tu vida.",
      ctaPrimary: "Reservar Diagnóstico Gratis",
      ctaSecondary: "Ver Showreel 2026",
      ctaRoi: "Calculadora ROI",

      // Services
      servicesLabel: "/ Capabilities",
      servicesTitle1: "Servicios de",
      servicesTitle2: "Próxima",
      servicesHighlight: "Generación",
      service1Title: "Producción de Video",
      service1Desc: "Contenido audiovisual de alto impacto, edición cinematográfica e ingeniería de retención viral.",
      service2Title: "Branding",
      service2Desc: "Construimos el alma visual de tu negocio. Identidades que respiran autoridad y dominan su categoría.",
      service3Title: "Kraken AI",
      service3Desc: "Nuestra joya de la corona. Agentes autónomos que actúan como tu fuerza laboral digital 24/7.",
      service4Title: "Web & Apps",
      service4Desc: "Ecosistemas digitales de alto rendimiento. Interfaces que no solo cargan, sino que convierten.",
      service5Title: "Contenido RRSS",
      service5Desc: "Dominio de algoritmos. Estrategias de contenido, ganchos (hooks) y gestión de comunidades.",
      service6Title: "Automatización",
      service6Desc: "Optimización de procesos operativos y flujos de trabajo inteligentes para liberar tu capital humano.",
      service7Title: "Editorial",
      service7Desc: "Storytelling profundo y redacción estratégica (copywriting) que conecta y persuade sin esfuerzo.",

      // Sectors
      sectorsEmpLabel: "Target Segments",
      sectorsEmpTitle: "SECTORES EN",
      sectorsEmpHighlight: "MUTACIÓN",
      sectorsEmpSubtitle: "Tu nicho es el campo de batalla; nuestra IA es el arsenal que necesitas para dominarlo.",
      sectorsEmpItems: [
        { title: "Inmobiliarios", desc: "Vende mientras duermes con captación 24/7." },
        { title: "Seguros", desc: "Cotizaciones en segundos, renovaciones en automático." },
        { title: "Médicos", desc: "Menos administración, más atención real." },
        { title: "Terapeutas", desc: "Agenda llena sin el caos de mensajes manuales." },
        { title: "Abogados", desc: "Escaneo de expedientes a velocidad luz." },
        { title: "Coaches", desc: "Escala tus programas sin clonarte." },
        { title: "Mentores", desc: "Crecimiento infinito para tus comunidades." },
        { title: "Psicólogos", desc: "Seguimiento ético y eficiente 365 días." },
        { title: "Administradores", desc: "Condominios en orden, incidencias resueltas." },
        { title: "Creadores", desc: "Tu contenido trabajando más duro que tú." },
      ],
      sectorsCorpLabel: "Enterprise Divisions",
      sectorsCorpTitle: "GIROS EN",
      sectorsCorpHighlight: "MUTACIÓN",
      sectorsCorpSubtitle: "La infraestructura del mañana se construye hoy. Elevamos la eficiencia operativa a niveles exponenciales.",
      sectorsCorpItems: [
        { title: "Hospitales", desc: "Triaje autónomo y optimización de recursos críticos." },
        { title: "Gobiernos", desc: "Atención ciudadana masiva y burocracia cero." },
        { title: "Despachos", desc: "Auditoría legal y fiscal robótica de alta precisión." },
        { title: "Inmobiliarias", desc: "Valoración predictiva y gestión global de activos." },
        { title: "Logística", desc: "Cadenas de suministro autónomas y rutas dinámicas." },
        { title: "Fitness", desc: "Personalización masiva y retención predictiva." },
        { title: "Ventas", desc: "Motores de prospección y cierre 24/7 sin límites." },
        { title: "Contabilidad", desc: "Conciliación automática y cumplimiento fiscal." },
        { title: "Industria", desc: "Mantenimiento predictivo y control de calidad visual." },
        { title: "Finanzas", desc: "Detección de fraude y gestión patrimonial algorítmica." },
        { title: "Educación", desc: "Plataformas adaptativas y gestión académica fluida." },
        { title: "Retail", desc: "Omnicanalidad inteligente y post-venta hiper-personalizada." },
      ],
      servicesComing: "Nuevos Protocolos en Camino",

      // CTA Section
      ctaSectionBadge: "Efficiency Protocol v2.0",
      ctaSectionTitle1: "TU EMPRESA",
      ctaSectionTitle2: "NECESITA UN",
      ctaSectionTitle3: "CEREBRO IA.",
      ctaSectionBodyEmpresas: "Deje de competir por atención y empiece a dominar por eficiencia. Transformamos su caos operativo en un flujo de trabajo autónomo e inteligente.",
      ctaSectionBodyEmprendedores: "Multiplica tu impacto sin multiplicar tus horas. Diseñamos el sistema de IA que hace el trabajo pesado por ti mientras tú creas.",
      ctaFeature1: "Auditoría Completa",
      ctaFeature2: "Roadmap de 12 Meses",
      ctaFeature3: "Análisis de ROI",
      ctaFormTitle: "SOLICITAR DIAGNÓSTICO",
      ctaFormSubtitle: "Nuestra capacidad de despliegue es limitada. Solo aceptamos **3 missions** por semana para garantizar resultados exponenciales.",
      ctaFormBtn: "RESERVAR MI ESPACIO",
      ctaFormStatus: "CONEXIÓN ESTABLECIDA",
      caseStudiesViewProtocol: "EXPLORAR PROTOCOLO",
      newsletterEncryption: "Encriptación de Grado Militar Activa",
      productivityLabel: "Productivity",

      // AI Showcase
      aiLabel: "Cognitive Deployment Protocol",
      aiTitle1: "ADN DIGITAL",
      aiHighlight: "AUTÓNOMO",
      aiQuote: '\"No clonamos procesos, digitalizamos su ventaja competitiva.\"',
      aiFeature1Title: "Inmortalidad Operativa",
      aiFeature1Desc: "Sistemas que ejecutan y optimizan sin descanso, sin bajas y sin errores, los 365 días del año.",
      aiFeature2Title: "Cerebro Evolutivo",
      aiFeature2Desc: "Nuestros agentes aprenden de cada interacción, perfeccionando su ventaja de mercado con cada dato procesado.",
      aiFeature3Title: "Escalabilidad Líquida",
      aiFeature3Desc: "Expande tu capacidad de respuesta al instante sin aumentar los costos operativos fijos.",
      aiDeployBtn: "DESPLEGAR INFRAESTRUCTURA",

      // Testimonials
      service1Promo: {
        title: "Limited Transmission",
        highlight: "ULTRA-VIRAL",
        body: "We will produce a pilot video for your brand using our 'Dynamic Intensity' methodology at zero cost if we don't beat your current best performing ad.",
        btn: "Claim Pilot Video"
      },
      service2Promo: {
        title: "Visual Identity",
        highlight: "REBRAND",
        body: "Get a free brand audit and a prototype of your home page designed for maximum conversion.",
        btn: "Start Audit"
      },
      service3Promo: {
        title: "Efficiency Protocol",
        highlight: "AGENT",
        body: "We will build a lead-capture agent for your business and integrate it into your website for free during the first month.",
        btn: "Deploy Agent"
      },
      service4Promo: {
        title: "Terminal Access",
        highlight: "SYSTEM",
        body: "Migrate your current site to our high-performance infrastructure and get a 30% discount on dev costs.",
        btn: "Upgrade Now"
      },
      testimonialsLabel: "Network Validation",
      testimonialsTitle: "LÍDERES QUE",
      testimonialsHighlight: "DESPERTARON",
      testimonials: [
        { name: "Marco Valdivia",  role: "Founder, Apex Studio (MX)",     result: "+400% ROI",       quote: "Insomnia no instaló software, rediseñó mi libertad. Escalar dejó de ser una tortura operativa.",                          img: "entrepreneur-1.png" },
        { name: "Elena Ramos",     role: "Creative Director (CO)",        result: "-75% OpEx",       quote: "Eliminé el 70% de mi carga operativa en 3 semanas. Los agentes de Insomnia son quirúrgicos.",                        img: "entrepreneur-2.png" },
        { name: "Camila Santos",   role: "Digital Nomad & Investor (CL)", result: "24/7 Autonomy",   quote: "Mi empresa crece mientras viajo. Es la primera vez que la infraestructura se siente sólida como roca.",               img: "entrepreneur-3.png" },
        { name: "Valentina Ruiz", role: "Founder, Zenith Labs (CL)",      result: "+500% Efficiency",quote: "Automatizamos todo el backend con IA autónoma. No hay vuelta atrás al trabajo manual.",                               img: "entrepreneur-4.png" },
        { name: "Mateo Herrera",  role: "Digital Strategist (ES)",        result: "-90% Latency",    quote: "La toma de decisiones de los agentes es de otro planeta. Redujimos tiempos muertos a cero.",                         img: "entrepreneur-5.png" },
        { name: "Lucía Mendoza",  role: "Creative Director (MX)",         result: "100X Scale",      quote: "Pasamos de 100 leads a 10,000 en un mes sin contratar a nadie. Escalado líquido puro.",                              img: "entrepreneur-6.png" },
      ],

      // Logos bar
      logosLabel: "Protocolo Validado Por Entidades de Alto Impacto",

      // Blog
      blogLabel: "Knowledge base",
      blogTitle: "INTELIGENCIA",
      blogHighlight: "APLICADA",
      blogViewAll: "Ver Todo el Archivo",

      // Newsletter
      newsletterBadge: "Intelligence Stream v4.2",
      newsletterTitle: "ÚNETE AL",
      newsletterSubtitle: "PROTOCOLO",
      newsletterBody: '\"No enviamos correos, entregamos briefings tácticos para el despliegue de infraestructuras autónomas.\"',
      newsletterFormTitle: "ACCESO AL TERMINAL",
      newsletterFormSub: "Ingrese su credencial digital para recibir el flujo de datos.",
      newsletterPlaceholder: "ID@PROTOCOL.COM",
      newsletterBtn: "ENVIAR CREDENCIALES",
      newsletterLoading: "PROCESANDO...",
      newsletterSuccess: "ACCESO CONCEDIDO",
      newsletterSuccessMsg: "VERIFIQUE SU BANDEJA DE ENTRADA (INBOX)",
      newsletterEncrypt: "* TRANSMISIÓN CIFRADA E2EE (usainsomnia.com)",
      newsletterErrorEmail: "INGRESE UN EMAIL VÁLIDO",
      newsletterErrorDup: "EMAIL YA REGISTRADO EN EL PROTOCOLO",
      newsletterErrorConn: "FALLO EN LA CONEXIÓN CON EL TERMINAL",
      newsletterErrorCrit: "ERROR CRÍTICO DE TRANSMISIÓN",

      // Chat section
      chatTitle: "Insomnia Studio",
      chatHighlight: "AI Concierge",
      chatSubtitle: "Prueba nuestra inteligencia integrada para una consulta rápida.",

      // Pragmatic Section
      pragmaticBadge: "Pragmatic Intelligence",
      pragmaticTitle: "IA PARA NEGOCIOS",
      pragmaticHighlight: "REALES",
      pragmaticSubtitle: "Menos ciencia ficción, más resultados. Tres pilares diseñados para impacto inmediato en tu cuenta bancaria.",
      pragmaticItems: [
        { title: "Ahorro de Tiempo", desc: "Automatizamos las 4 horas de tareas repetitivas que tú o tu equipo odian hacer." },
        { title: "Reducción de Costos", desc: "Sustituye procesos manuales caros por agentes digitales que no duermen ni cometen errores." },
        { title: "Escalabilidad", desc: "Aumenta tu capacidad operativa 10x sin necesidad de contratar más personal." }
      ],
      newsletterStatusSuccess: "¡BIENVENIDO!",
      videoClose: "Cerrar Transmisión",
      
      // New Sections
      guarantee: {
        badge: "CONTRATO DE CONFIANZA",
        title1: "GARANTÍA",
        highlight: "BLINDADA",
        body: "Si no logramos implementar los sistemas acordados o no ves una optimización tangible en tus procesos, te devolvemos tu dinero. Punto.",
        cta: "Ver Protocolos de Seguridad"
      },
      guaranteeProtocol: {
        title: "Protocolo de Ejecución Cero Riesgo",
        subtitle: "Normativa interna de Insomnia Alpha v4.0",
        items: [
          { title: "P01: Definición de Entregables", desc: "Antes de cualquier pago o inicio técnico, se firma un acta de alcance con entregables 100% medibles." },
          { title: "P02: Validación Semanal", desc: "Cada viernes recibes un reporte de avance. Si algo no cumple con la visión, se corrige en 24 horas." },
          { title: "P03: Transparencia Técnica", desc: "Acceso total a los flujos de automatización y prompts utilizados. Tu sistema es propiedad tuya." },
          { title: "P04: Reembolso Directo", desc: "Si al finalizar el plazo pactado el sistema no operara según lo acordado, activamos el reembolso íntegro." }
        ],
        ctaClose: "Cerrar y Regresar"
      },
      videoTestimonialsLabel: "Social Proof de Alto Nivel",
      videoTestimonialsTitle: "Nuestros Clientes",
      videoTestimonialsHighlight: "En Video",
      caseStudiesLabel: "Laboratorio de Éxito",
      caseStudiesTitle: "Casos de",
      caseStudiesHighlight: "Estudio",
      caseStudiesItems: [
        { title: "Kraken Real Estate", client: "Moreno Group", impact: "+250% Leads", desc: "Automatización total del embudo de ventas." },
        { title: "Neural Branding", client: "MadMonkey", impact: "Authority Boost", desc: "Rediseño completo de ecosistema digital con IA." },
        { title: "Flow Automation", client: "Clinica Validez", impact: "-40% OpEx", desc: "Integración de agentes para gestión de pacientes." }
      ]
    },

    // ----------------------------------------------------------
    // Blog page
    // ----------------------------------------------------------
    blog: {
      label: "The Terminal",
      title: "INSOMNIA",
      highlight: "INSIGHTS",
      subtitle: "Protocolos de despliegue, automatización disruptiva y el futuro de la autonomía empresarial.",
      loading: "Sincronizando Base de Datos...",
      backToArchive: "Regresar al Archivo",
      author: "Autor",
      share: "Compartir",
      shareBtn: "Enviar Protocolo",
      cta: {
        badge: "Phase: Execution",
        title: "¿LISTO PARA",
        highlight: "EL DESPLIEGUE?",
        body: "No leemos noticias, las creamos. Deja de operar manualmente y conviértete en una infraestructura autónoma.",
        btnPrimary: "SOLICITAR AUDITORÍA",
        btnSecondary: "Hablar con un Agente",
      },
      inArticleBtn: "Agendar Auditoría",
    },

    // ----------------------------------------------------------
    // Agents
    // ----------------------------------------------------------
    agents: {
      badge: "/ Neural Network",
      title: "Kraken",
      highlight: "Engine V3",
      subtitle: "No son chatbots. Son arquitecturas de razonamiento autónomo diseñadas para ejecutar misiones operativas sin supervisión humana constante.",
      ctaPrimary: "Construye tu Kraken",
      ctaSecondary: "Ver cómo funciona",
      archTitle: "Infraestructura",
      archHighlight: "Cognitiva",
      feature1Title: "Unified Knowledge Base",
      feature1Desc: "Ingestamos todos los manuales, histórico de chats y procesos de tu empresa para crear un cerebro centralizado infalible.",
      feature2Title: "Multi-Agent Swarm",
      feature2Desc: "Un equipo de agentes especializados que se comunican entre sí para resolver tareas complejas de principio a fin.",
      feature3Title: "Native Tool Access",
      feature3Desc: "Nuestros agentes pueden interactuar con tus APPs: CRM, Gmail, WhatsApp y bases de datos en tiempo real.",
      // Sectors
      sectorsBadge: "Targets",
      sectorsTitle: "SECTORES EN",
      sectorsHighlight: "MUTACIÓN",
      sectorsSubtitle: "No importa tu nicho, si hay un proceso repetitivo, hay un Kraken listo para tomar el mando.",
      sectors: [
        { title: "Agentes Inmobiliarios", desc: "Captación y seguimiento 24/7 sin perder leads." },
        { title: "Agentes de Seguros",    desc: "Cotizaciones y cierres automáticos en un click." },
        { title: "Médicos",               desc: "Triaje y agendamiento inteligente de pacientes." },
        { title: "Terapeutas",            desc: "Gestión de sesiones y soporte pre-consulta." },
        { title: "Abogados",              desc: "Análisis y clasificación de expedientes robótica." },
        { title: "Coaches",               desc: "Soporte a alumnos y ventas en piloto automático." },
        { title: "Mentores",              desc: "Escalamiento de grupos con atención personalizada IA." },
        { title: "Psicólogos",            desc: "Control de agendas y recordatorios de alto impacto." },
        { title: "Administrador Condominios", desc: "Resolución de quejas y cobranza automatizada." },
        { title: "Creador de Contenido",  desc: "Automatización de workflows y fan-support." },
      ],
      // Use Cases
      useCasesTitle: "Despliegues",
      useCasesHighlight: "Estandarizados",
      type1Label: "Type-01",
      type1Title: "Assistant Concierge",
      type1Desc: "Conversaciones profundas con conocimiento específico de marca para atención al cliente y soporte técnico de alto nivel.",
      type1feat1: "Memoria Persistente",
      type1feat2: "Razonamiento Multi-paso",
      type2Label: "Type-02",
      type2Title: "Autonomous Executive",
      type2Desc: "Sistemas que no solo chatean, sino que envían correos, agendan citas y procesan pedidos sin intervención humana.",
      type2feat1: "Integración API Nativa",
      type2feat2: "Autogestión de Errores",
      // Bottom CTA
      closingTitle: "EL FUTURO NO",
      closingHighlight: "DUERME",
      // Pain Section (New)
      painTitle: "EL COSTO DE LA REPETICIÓN.",
      painSubtitle: "DE LA",
      painHighlight: "REPETICIÓN.",
      painItems: [
        "Costos operativos inflados en tareas manuales.",
        "Fugas de leads por tiempos de respuesta lentos.",
        "Talento humano desperdiciado en copiar y pegar.",
        "Incapacidad de escalar sin contratar más personal."
      ],
      // Investment Section (New)
      investmentProtocol: "Investment Protocol",
      armyTitle: "TU NUEVO",
      armyHighlight: "EJÉRCITO",
      investmentTitle: "INVERSIÓN EN",
      investmentHighlight: "AUTONOMÍA",
      offerTitle: "OFERTA KRAKEN CORE",
      consultPrice: "Consultar",
      bonusTitle: "BONUS: ARQUITECTURA PERSONALIZADA",
      bonusValue: "VALOR: $2,500 USD (GRATIS)",
      limitedDeployment: "LIMITED DEPLOYMENT",
      ultimateWorkforce: "The Ultimate Workforce",
      krakenProtocol: "KRAKEN PROTOCOL",
      investmentSince: "Inversión Desde",
      impactGuarantee: "IMPACT GUARANTEE",
      contractGuarantee: "Resultados garantizados por contrato",
      exclusiveSectorsTitle: "EXCLUSIVO PARA",
      exclusiveSectorsHighlight: "LÍDERES DE SECTOR",
      exclusiveBadge: "Exclusivo",
      securityAuditTitle: "AUDITORÍA SEGURIDAD",
      guaranteeBadge: "Garantía Insomnia",
      optimizationTitle: "OPTIMIZACIÓN CONCRETA",
      roiGuaranteed: "ROI Garantizado",
      militaryEncryption: "Cifrado Militar",
      log7: "Escuchando siguiente directiva...",
      log8: "Sistema Preparado.",
      neuralLoad: "Carga_Neuronal: 12%",
      autoOps: "24/7 AUTO OPS",
      closingWatermark: "DOMINIO_TOTAL",
      iqTitle: "ELEVANDO EL",
      iqHighlight: "CI DE TU EMPRESA",
      featureNeuralTitle: "Neural Integration",
      featureNeuralDesc: "Conexión total con tu stack actual (CRM, ERP, Slack)",
      featureGoalTitle: "Goal-Oriented Execution",
      featureGoalDesc: "Agentes que no se detienen hasta cumplir el objetivo",
      log1: "Inicializando sincronización neuronal...",
      log2: "Base de datos [X-90] conectada.",
      log3: "ANALIZANDO FLUJO DE NEGOCIO...",
      log4: "PATRÓN ENCONTRADO: Pérdida de eficiencia en Pipeline.",
      log5: "Desplegando Agente #7 (Calificación de Leads)...",
      log6: "ACCIÓN: Calificando 1,204 leads en 0.4 segundos.",
      log9: "Actualización KPI: Conversión +312%."
    },

    // ----------------------------------------------------------
    // Services
    // ----------------------------------------------------------
    services: {
      badge: "/ System Access",
      title1: "Soluciones de",
      title2: "Alto Impacto",
      subtitle: "Arquitecturas digitales diseñadas para el dominio del mercado mediante inteligencia artificial y diseño de vanguardia.",
      techSpecsBtn: "Especificaciones Técnicas",
      startProject: "Iniciar Proyecto",
      insomniaStandard: "El Estándar Insomne",
      protocolTitle: "Protocolo",
      readyToTranscend: "¿Listo para Trascender?",
      contactExpert: "Contactar con un Experto",
      service1Title: "Audiovisual & Motion",
      service1Subtitle: "Visual Intelligence",
      service1Desc: "No solo grabamos video; diseñamos experiencias virales. Utilizamos motores de IA para upscaling, corrección cromática neuronal y generación de assets sintéticos que reducen los costos de producción a una fracción.",
      service1Features: ["4K Neural Upscaling", "AI-Powered Grading", "Synthetix Motion Assets", "Viral Narrative Design"],
      service1Detailed: "No vendemos videos. Construimos máquinas de atención masiva que obligan al algoritmo a favorecer tu marca.",
      service1Process: [
        { title: "Inmersión", desc: "Escaneamos tu marca y competencia para encontrar el ángulo de ataque." },
        { title: "Producción Neura", desc: "Generación de activos y rodaje optimizado por motores IA." },
        { title: "Despliegue", desc: "Distribución estratégica para dominar el feed." }
      ],
      service1Stack: [
        { item: "Producción Cinematográfica IA", value: "$5,000+" },
        { item: "Guiones con Ingeniería de Prompting", value: "$1,500" },
        { item: "Post-Producción Neuronal (4K)", value: "$2,000" },
        { item: "Distribución y Narrativa Viral", value: "$3,000" }
      ],
      service1Bonus: "BONO EXCLUSIVO: 5 Hooks de video validados por IA para garantizar clics.",
      service1Guarantee: "Si tu primera pieza no supera el alcance de tus últimos 3 videos, trabajamos gratis hasta lograrlo.",
      
      service2Title: "Branding",
      service2Subtitle: "Identity Engineering",
      service2Desc: "Construimos mitologías de marca. Desde el logo hasta el tono de voz capturado en modelos de lenguaje personalizados que aseguran consistencia absoluta en todos tus puntos de contacto.",
      service2Features: ["Custom LLM Tone", "Algorithmic Identity", "Strategic Mythology", "Digital Guidelines"],
      service2Pain: "Un logo bonito no vende. Necesitas una marca que piense, hable y evolucione. La mayoría de las marcas son mudas; la tuya tendrá una voz eterna.",
      service2Stack: [
        { item: "Identidad Visual Dinámica", value: "$4,000" },
        { item: "Entrenamiento de Brand-Brain (LLM)", value: "$6,500" },
        { item: "Arquitectura de Mitología de Marca", value: "$2,500" },
        { item: "Manual de Voz Digital", value: "$1,200" }
      ],
      service2Bonus: "BONO EXCLUSIVO: Auditoría Semestral de Alineación Narrativa IA.",
      service2Guarantee: "Garantizamos coherencia absoluta en todos tus canales. Tu marca nunca sonará como un bot genérico.",

      service3Title: "Kraken AI Agents",
      service3Subtitle: "Autonomous Labor",
      service3Desc: "Tu fuerza laboral digital. Agentes autónomos capaces de razonar, ejecutar tareas complejas y aprender de tus procesos internos para automatizar el 80% de la carga operativa.",
      service3Features: ["Multi-Agent Swarms", "Custom Knowledge Base", "Task Automation", "24/7 Deployment"],
      service3Promo: {
        title: "IMPULSO INICIAL",
        highlight: "2,000 CRÉDITOS",
        body: "Regalo exclusivo para tu primer mes. Comienza a construir tu Agente IA o Empleado Digital hoy con una infraestructura de regalo robusta.",
        btn: "RECLAMAR CRÉDITOS"
      },
      service3Pain: "¿Sigues contratando humanos para tareas que una máquina hace mejor, más rápido y 24/7? El talento humano es para crear, no para repetir. Libera a tu equipo del trabajo esclavo.",
      service3Stack: [
        { item: "Arquitectura de Enjambre (Multi-Agent)", value: "$12,000" },
        { item: "Base de Conocimiento Centralizada", value: "$3,500" },
        { item: "Integración con Herramientas Nativas", value: "$4,000" },
        { item: "Mantenimiento y Optimización de LLM", value: "$2,500" }
      ],
      service3Bonus: "BONO EXCLUSIVO: Auditoría de Seguridad de Datos y Privacidad Gratuita.",
      service3Guarantee: "Garantizamos una reducción del 60% en el tiempo de respuesta operativo en los primeros 30 días o refinamos el sistema sin costo adicional.",

      service4Title: "Web & App Ecosystem",
      service4Subtitle: "Dynamic Interface",
      service4Desc: "Desarrollamos terminales digitales de alto rendimiento. Interfaces que no solo informan, sino que interactúan inteligentemente con el usuario final mediante personalización predictiva.",
      service4Features: ["Predictive UI", "Edge Computing", "Real-time Personalization", "Scalable Ops"],
      service4Pain: "Las webs estáticas son cementerios digitales. Necesitas una terminal inteligente que aprenda de tus clientes en tiempo real y convierta cada visita en dato o venta.",
      service4Stack: [
        { item: "Arquitectura Predictiva Next.js", value: "$8,000" },
        { item: "Integración de Agentes Convertores", value: "$4,500" },
        { item: "Infraestructura Cloud Edge-Ready", value: "$3,000" },
        { item: "Optimización SEO Algorítmica", value: "$2,000" }
      ],
      service4Bonus: "BONO EXCLUSIVO: 1 Año de Mantenimiento y Evolución de Modelos IA.",
      service4Guarantee: "Desarrollamos en tiempo récord. Si no cumplimos el hito de entrega del MVP, recibes un 20% de descuento automático.",
      
      service6Title: "Automation & Workflow",
      service6Subtitle: "Intelligent Systems",
      service6Desc: "Optimizamos tu capital humano eliminando tareas repetitivas mediante flujos de trabajo inteligentes y automatizaciones nativas.",
      service6Features: ["Integración Make/n8n", "Webhooks Pro", "Legacy Sync", "Error Handling"],

      pillar1Title: "Seguridad Total",
      pillar1Desc: "Implementamos capas de encriptación y privacidad de datos de grado militar en todos nuestros despliegues de IA.",
      pillar2Title: "Velocidad Extrema",
      pillar2Desc: "Nuestras pipelines de automatización reducen los tiempos de entrega de proyectos complejos de meses a semanas.",
      pillar3Title: "Escalabilidad",
      pillar3Desc: "Arquitecturas preparadas para crecer con tu negocio, desde startups en fase semilla hasta corporativos globales.",

      // Landing Page Specific Content
      service1: {
        subtitle: "Protocolo de Dominio Visual",
        desc: "No vendemos videos. Construimos máquinas de atención masiva que obligan al algoritmo a favorecer tu marca.",
        // Hero
        heroTitle1: "CONTENIDO QUE",
        heroTitleHighlight: "DOMINA",
        heroTitle2: "EL ALGORITMO",
        heroCta: "Iniciar Transmisión",
        heroShowreel: "Ver Showreel 2026",
        // Pain
        painTitle1: "¿TU CONTENIDO SE",
        painTitleHighlight: "SINTETIZA O SE",
        painTitle2: "IGNORA?",
        painItems: [
          "Agencias tradicionales lentas y costosas.",
          "Contenido genérico que nadie recuerda.",
          "Falta de consistencia visual en redes.",
          "Producciones que no generan ROI real."
        ],
        painScanLabel: "ESCANEO DE DATOS EN VIVO",
        // Stack
        stackLabel: "Protocolo de Inversión",
        stackTitle1: "EL SISTEMA DE",
        stackTitleHighlight: "ELEVACIÓN",
        stackTitle2: "",
        offerLabel: "Valor Total Asegurado",
        offerTitle: "OFERTA",
        offerHighlight: "INTENSIDAD DINÁMICA",
        priceFrom: "Desde",
        priceConsult: "Consultar",
        // Specific content
        stack: [
          { item: "Estrategia de Retención Viral", value: "$1,500" },
          { item: "Edición de Alto Impacto (Premium)", value: "$2,500" },
          { item: "Optimización por IA de Miniaturas", value: "$800" },
          { item: "Guionización Psicológica de Ventas", value: "$1,200" }
        ],
        promo: { 
          badge: "PROMO",
          title: "PILOTO",
          highlight: "VIRAL", 
          body: "Produciremos un video piloto para tu marca usando nuestra metodología de 'Intensidad Dinámica' a costo cero si no superamos tu anuncio con mejor rendimiento actual.", 
          btn: "Reclamar Video Piloto" 
        },
        bonus: {
          badge: "Exclusivo",
          title1: "BONO DE",
          titleHighlight: "AUTORIDAD",
          title2: "",
          desc: "Recibe una Auditoría de Contenido de 30 minutos donde desglosamos tu competencia y te entregamos un Roadmap de 90 días.",
          value: "Valorado en $850 USD"
        },
        guarantee: {
          badge: "Garantía Insomnia",
          title1: "RIESGO",
          titleHighlight: "CERO ABSOLUTO",
          title2: "",
          desc: "Si después de 30 días no ves un incremento real en tus métricas de engagement, te devolvemos el 100% de tu inversión.",
          commitment: "Compromiso de Éxito"
        },
        // Features
        feats: [
          { title: "Neural Ops", desc: "Upscaling por IA a 4K y corrección cromática neuronal." },
          { title: "Multi-Format", desc: "Adaptación inteligente a Reels, YouTube y TikTok." },
          { title: "Ultra Fast", desc: "Ciclos de entrega reducidos un 400% vs agencias." },
          { title: "Synthetics", desc: "Generación de assets digitales mediante motores IA." }
        ],
        // Final CTA
        finalTitle1: "TU MARCA",
        finalTitleHighlight: "SE VOLVERÁ",
        finalTitle2: "INMORTAL",
        finalBadge: "Protocolo de Capacidad Limitada: 3 Misiones por Semana",
        finalBtn: "Reservar Mi Lugar",
        finalBg: "INSOMNIA",
        painQuote: "DISEÑAMOS EL ARMAMENTO VISUAL PARA LA GUERRA POR LA ATENCIÓN.",
        priceValue: "$2,499"
      },
      service2: {
        subtitle: "Inteligencia de Identidad",
        desc: "Una marca sin alma es solo un logo. Construimos identidades que respiran, hablan y dominan su categoría.",
        // Hero
        heroTitle1: "TU MARCA",
        heroTitleHighlight: "NECESITA",
        heroTitle2: "UN CEREBRO",
        heroCta: "Protocolo de Identidad",
        heroShowreel: "Ver Identidad",
        // Pain
        painTitle1: "LAS MARCAS",
        painTitleHighlight: "SIN VOZ SON",
        painTitle2: "INVISIBLES.",
        painItems: [
          "Inconsistencia en el tono de voz.",
          "Identidad visual genérica y fría.",
          "Falta de una mitología estratégica.",
          "Desconexión con el cliente digital."
        ],
        painScanLabel: "ESCANEO DE DATOS EN VIVO",
        // Stack
        stackLabel: "Protocolo de Inversión",
        stackTitle1: "EL SISTEMA DE",
        stackTitleHighlight: "ELEVACIÓN",
        stackTitle2: "",
        offerLabel: "Valor Total Asegurado",
        offerTitle: "OFERTA",
        offerHighlight: "GÉNESIS DE MARCA",
        priceFrom: "Desde",
        priceConsult: "Consultar",
        // Specific content
        stack: [
          { item: "Manual de Identidad Visual (IA Enhanced)", value: "$2,800" },
          { item: "Arquitectura de Mensaje y Tono de Marca", value: "$1,800" },
          { item: "Diseño de Activos Digitales de Alto Nivel", value: "$1,500" },
          { item: "Consultoría de Posicionamiento Premium", value: "$1,200" }
        ],
        promo: { 
          badge: "PROMO",
          title: "REBRANDING",
          highlight: "IDENTIDAD", 
          body: "Obtén una auditoría de marca gratuita y un prototipo de tu nueva identidad visual diseñada para el dominio de mercado.", 
          btn: "Reclamar" 
        },
        bonus: {
          badge: "Exclusivo",
          title1: "BONO DE",
          titleHighlight: "AUTORIDAD",
          title2: "",
          desc: "Guía de Despliegue de Marca: Cómo mantener la consistencia sin contratar a un ejército.",
          value: "Valorado en $850 USD"
        },
        guarantee: {
          badge: "Garantía Insomnia",
          title1: "RIESGO",
          titleHighlight: "CERO ABSOLUTO",
          title2: "",
          desc: "Garantía de Diferenciación: Si tu nueva identidad no se siente drásticamente superior a tu competencia, seguimos trabajando hasta que lo sea.",
          commitment: "Compromiso de Éxito"
        },
        // Features
        feats: [
          { title: "Neuro-Tone", desc: "Definición del tono de voz mediante modelos de lenguaje masivos." },
          { title: "Visual DNA", desc: "Sistemas visuales generativos que evolucionan con la marca." },
          { title: "Psych-Copy", desc: "Copywriting de alta conversión basado en psicología profunda." },
          { title: "Meta-Docs", desc: "Guías de marca vivas que se integran con tus agentes IA." }
        ],
        // Final CTA
        finalTitle1: "TU MARCA",
        finalTitleHighlight: "YA NO SERÁ",
        finalTitle2: "MUDA",
        finalBadge: "Protocolo de Capacidad Limitada",
        finalBtn: "Comenzar Auditoría",
        finalBg: "BRANDING",
        painQuote: "LA IDENTIDAD ES EL DIFERENCIADOR DEFINITIVO EN LA OSCURIDAD.",
        priceValue: "$1,899"
      },
      service3: {
        subtitle: "Automatización Cognitiva",
        desc: "Tus mejores empleados ahora son digitales. Agentes autónomos que capturan, califican y cierran leads mientras tú escalas.",
        // Hero
        heroTitle1: "DALE UN",
        heroTitleHighlight: "CEREBRO",
        heroTitle2: "A TU NEGOCIO",
        heroCta: "Construye tu Kraken",
        heroShowreel: "Ver Protocolo",
        // Pain
        painTitle1: "EL COSTO",
        painTitleHighlight: "DE LA",
        painTitle2: "REPETICIÓN.",
        painItems: [
          "Costos operativos inflados en tareas manuales.",
          "Fugas de leads por tiempos de respuesta lentos.",
          "Talento humano desperdiciado en tareas mecánicas.",
          "Incapacidad de escalar sin contratar personal."
        ],
        painScanLabel: "ESCANEANDO INEFICIENCIAS",
        // Stack
        stackLabel: "Protocolo de Inversión",
        stackTitle1: "LA INVERSIÓN EN",
        stackTitleHighlight: "AUTONOMÍA",
        stackTitle2: "",
        offerLabel: "Valor Total Bloqueado",
        offerTitle: "OFERTA",
        offerHighlight: "KRAKEN CORE",
        priceFrom: "Desde",
        priceConsult: "Consultar",
        // Specific content
        stack: [
          { item: "Despliegue de Agente de Captación 24/7", value: "$2,200" },
          { item: "Integración de Cerebro IA con CRM", value: "$1,500" },
          { item: "Entrenamiento de Modelo con Data Local", value: "$1,800" },
          { item: "Dashboard de Rendimiento en Tiempo Real", value: "$900" }
        ],
        promo: { 
          badge: "PROMO",
          title: "AGENT",
          highlight: "EFFICIENCY", 
          body: "Construiremos un agente de captación de leads para tu negocio y lo integraremos en tu web gratis durante el primer mes.", 
          btn: "Desplegar Agente" 
        },
        bonus: {
          badge: "Exclusivo",
          title1: "AUDITORÍA",
          titleHighlight: "DE SEGURIDAD",
          title2: "",
          desc: "Soporte Técnico 'Terminal Prime' durante 3 meses: Monitorización humana de tus agentes para asegurar su perfección.",
          value: "Valorado en $1,200 USD"
        },
        guarantee: {
          badge: "Garantía Insomnia",
          title1: "OPTIMIZACIÓN",
          titleHighlight: "CONCRETA",
          title2: "",
          desc: "Garantía de Eficiencia: Si el agente no reduce tu tiempo de respuesta en un 90%, el despliegue es por nuestra cuenta.",
          commitment: "ROI Garantizado"
        },
        // Features
        feats: [
          { title: "Ops 24/7", desc: "Ejecución de misiones sin descanso ni supervisión constante." },
          { title: "Herramientas Nativas", desc: "Acceso a CRM, Gmail, WhatsApp y bases de datos internas." },
          { title: "Lógica Profunda", desc: "Arquitecturas de razonamiento autónomo para tareas complejas." },
          { title: "Auto-Evolución", desc: "Agentes que aprenden de cada interacción y feedback humano." }
        ],
        // Final CTA
        finalTitle1: "EL FUTURO",
        finalTitleHighlight: "NO",
        finalTitle2: "DUERME",
        finalBadge: "Despliegue de Mano de Obra Autónoma",
        finalBtn: "Comenzar Protocolo",
        finalBg: "KRAKEN",
        painQuote: "EL CAOS ES EL IMPUESTO MÁS CARO QUE PAGA TU NEGOCIO.",
        priceValue: "$3,499"
      },
      service4: {
        subtitle: "Infraestructura de Terminal",
        desc: "Webs que no solo cargan, sino que convierten. Infraestructura de alto rendimiento diseñada para la era de la IA.",
        // Hero
        heroTitle1: "TERMINALES",
        heroTitleHighlight: "DIGITALES",
        heroTitle2: "DE ALTO IMPACTO",
        heroCta: "Iniciar Despliegue",
        heroShowreel: "Ver Estructura",
        // Pain
        painTitle1: "¿TU WEB",
        painTitleHighlight: "PROCESA O SOLO",
        painTitle2: "EXISTE?",
        painItems: [
          "Tiempos de carga lentos que matan conversiones.",
          "Diseño estático sin interactividad inteligente.",
          "Falta de optimización para motores de búsqueda.",
          "Arquitecturas cerradas difíciles de escalar."
        ],
        painScanLabel: "AUDITORÍA DE NODO",
        // Stack
        stackLabel: "Protocolo de Infraestructura",
        stackTitle1: "ARQUITECTURA DE",
        stackTitleHighlight: "DATOS",
        stackTitle2: "",
        offerLabel: "Valor Total Bloqueado",
        offerTitle: "OFERTA",
        offerHighlight: "UPGRADE DE SISTEMA",
        priceFrom: "Desde",
        priceConsult: "Consultar",
        // Specific content
        stack: [
          { item: "Arquitectura Next.js High-Performance", value: "$4,500" },
          { item: "Optimización de Velocidad Edge Computing", value: "$1,200" },
          { item: "Integración de Sistemas de Pago Seguros", value: "$1,000" },
          { item: "SEO Técnico & Estructura de Conversión", value: "$1,500" }
        ],
        promo: { 
          badge: "PROMO",
          title: "SYSTEM",
          highlight: "UPGRADE", 
          body: "Migra tu sitio actual a nuestra infraestructura de alto rendimiento y obtén un 30% de descuento en los costos de desarrollo.", 
          btn: "Actualizar Ahora" 
        },
        bonus: {
          badge: "Exclusivo",
          title1: "HOSTING",
          titleHighlight: "ELITE",
          title2: "",
          desc: "Hosting Premium 'Insomnia Cloud' gratis por 1 año y certificado SSL de Grado Militar.",
          value: "Valorado en $600 USD"
        },
        guarantee: {
          badge: "Garantía Insomnia",
          title1: "VELOCIDAD",
          titleHighlight: "EXTREMA",
          title2: "",
          desc: "Garantía de Velocidad: Si tu nuevo sitio no supera los 95 puntos en PageSpeed Insights, no pagas el balance final.",
          commitment: "Carga Instantánea"
        },
        // Features
        feats: [
          { title: "Desempeño Edge", desc: "Despliegue global en el borde para latencia mínima." },
          { title: "UI Predictiva", desc: "Interfaces que anticipan la navegación del usuario." },
          { title: "Ops Seguras", desc: "Capas de seguridad y cifrado contra ataques externos." },
          { title: "Escalable", desc: "Código modular preparado para millones de usuarios." }
        ],
        // Final CTA
        finalTitle1: "ACTUALIZA",
        finalTitleHighlight: "TU",
        finalTitle2: "INFRAESTRUCTURA",
        finalBadge: "Acceso a Terminal: Protocolo Abierto",
        finalBtn: "Reservar Despliegue",
        finalBg: "TERMINAL",
        painQuote: "TU SITIO WEB DEBE SER TU MEJOR VENDEDOR, NO TU MAYOR GASTO.",
        priceValue: "$4,500"
      },
      service5: {
        subtitle: "Dominio del Algoritmo",
        desc: "No publicamos, dominamos. Estrategias de contenido viral, ingeniería de hooks y gestión de comunidades que convierten seguidores en activos.",
        // Hero
        heroTitle1: "DOMINA EL",
        heroTitleHighlight: "ALGORITMO",
        heroTitle2: "SOCIAL",
        heroCta: "Activar Dominio",
        heroShowreel: "Ver Viralidad",
        // Pain
        painTitle1: "EL ALCANCE",
        painTitleHighlight: "ORGÁNICO NO",
        painTitle2: "ES SUERTE.",
        painItems: [
          "Bajo engagement y falta de crecimiento real.",
          "Dependencia excesiva de pauta publicitaria.",
          "Contenido ignorado por falta de hooks efectivos.",
          "Comunidades inactivas y falta de conversión social."
        ],
        painScanLabel: "SCANNER SOCIAL",
        // Stack
        stackLabel: "Protocolo Viral",
        stackTitle1: "ESTRATEGIA",
        stackTitleHighlight: "ALGORÍTMICA",
        stackTitle2: "",
        offerLabel: "Valor Total Bloqueado",
        offerTitle: "OFERTA",
        offerHighlight: "VIRAL GROWTH",
        priceFrom: "Desde",
        priceConsult: "Consultar",
        // Specific content
        stack: [
          { item: "Estrategia de Viralidad Algorítmica", value: "$1,800" },
          { item: "Diseño de Ganchos (Hooks) Psicólogicos", value: "$1,200" },
          { item: "Gestión Proactiva de Comunidades", value: "$1,500" },
          { item: "Análisis de Tendencias con IA", value: "$900" }
        ],
        promo: { 
          badge: "PROMO",
          title: "SOCIAL",
          highlight: "VIRAL", 
          body: "Diseñaremos tu próxima campaña de 30 días con ganchos validados por IA para triplicar tu alcance orgánico.", 
          btn: "Dominar Algoritmo" 
        },
        bonus: {
          badge: "Exclusivo",
          title1: "VAULT DE",
          titleHighlight: "HOOKS",
          title2: "",
          desc: "Recibe un 'Vault' de 100 plantillas de hooks que han generado millones de vistas.",
          value: "Valorado en $450 USD"
        },
        guarantee: {
          badge: "Garantía Insomnia",
          title1: "ALCANCE",
          titleHighlight: "MULTIPLICADO",
          title2: "",
          desc: "Si no logramos aumentar tus impresiones en un 50% en el primer ciclo, refinamos la estrategia gratis.",
          commitment: "Crecimiento Social"
        },
        // Features
        feats: [
          { title: "Diseño de Hooks", desc: "Ingeniería de primeros 3 segundos para retención máxima." },
          { title: "Escaneo de Tendencias", desc: "Monitorización de tendencias mediante crawlers IA." },
          { title: "Comunidad", desc: "Gestión proactiva que fomenta la lealtad y el fan-support." },
          { title: "Bucles Virales", desc: "Mecanismos de compartición integrados en cada pieza." }
        ],
        // Final CTA
        finalTitle1: "COMIENZA",
        finalTitleHighlight: "TU",
        finalTitle2: "DOMINIO",
        finalBadge: "Asedio Social: Transmisión Activa",
        finalBtn: "Protocolo de Expansión",
        finalBg: "VIRAL",
        painQuote: "¿ESTÁS PUBLICANDO O ESTÁS CRECIENDO?",
        priceValue: "$1,200"
      },
      service6: {
        subtitle: "Excelencia Operativa",
        desc: "Sistemas que trabajan mientras tú creas. Automatizamos tus flujos de trabajo más pesados para que el error humano sea cosa del pasado.",
        // Hero
        heroTitle1: "MÁQUINAS DE",
        heroTitleHighlight: "EFICIENCIA",
        heroTitle2: "OPERATIVA",
        heroCta: "Construye tu Kraken",
        heroShowreel: "Ver Flujos",
        // Pain
        painTitle1: "LA INEFICIENCIA",
        painTitleHighlight: "ES EL IMPUESTO",
        painTitle2: "MÁS CARO.",
        painItems: [
          "Talento humano desperdiciado en tareas repetitivas.",
          "Errores en procesos que causan pérdida de dinero.",
          "Silos de información y falta de comunicación.",
          "Incapacidad de escalar sin aumentar el caos."
        ],
        painScanLabel: "SISTEMA DE AUDITORÍA",
        // Stack
        stackLabel: "Protocolo de Eficiencia",
        stackTitle1: "OPTIMIZACIÓN",
        stackTitleHighlight: "CONCRETA",
        stackTitle2: "",
        offerLabel: "Valor Total Bloqueado",
        offerTitle: "OFERTA",
        offerHighlight: "AUTO-SISTEMA",
        priceFrom: "Desde",
        priceConsult: "Consultar",
        // Specific content
        stack: [
          { item: "Mapeo y Optimización de Procesos", value: "$2,500" },
          { item: "Integración de Ecosistema No-Code/Code", value: "$3,500" },
          { item: "Automatización de Backend Operativo", value: "$4,000" },
          { item: "Sistemas de Alerta y Monitoreo", value: "$1,200" }
        ],
        promo: { 
          badge: "PROMO",
          title: "AUTO",
          highlight: "EFFICIENCY", 
          body: "Realizaremos un mapa de calor de tus ineficiencias operativas y te entregaremos el primer flujo automatizado sin costo.", 
          btn: "Desplegar Agente" 
        },
        bonus: {
          badge: "Exclusivo",
          title1: "MES DE",
          titleHighlight: "MONITOREO",
          title2: "",
          desc: "1 Mes de mantenimiento preventivo y optimización de flujos gratuito.",
          value: "Valorado en $950 USD"
        },
        guarantee: {
          badge: "Garantía Insomnia",
          title1: "AHORRO",
          titleHighlight: "GARANTIZADO",
          title2: "",
          desc: "Garantizamos un ahorro mínimo de 10 horas semanales en tu carga operativa tras la implementación.",
          commitment: "ROI Operativo"
        },
        // Features
        feats: [
          { title: "Motor de Flujos", desc: "Diseño de pipelines que conectan todas tus herramientas." },
          { title: "Error Cero", desc: "Minimización drástica del error humano en captura de datos." },
          { title: "Dashboard", desc: "Visualización en tiempo real de la salud de tus procesos." },
          { title: "Escala Ágil", desc: "Capacidad de aumentar volumen sin aumentar el headcount." }
        ],
        // Final CTA
        finalTitle1: "MAXIMIZA",
        finalTitleHighlight: "TU",
        finalTitle2: "RENDIMIENTO",
        finalBadge: "Protocolo Operativo: Sistema Listo",
        finalBtn: "Construye tu Kraken",
        finalBg: "EFICIENCIA",
        painQuote: "EL CAOS ES EL IMPUESTO MÁS CARO.",
        priceValue: "$2,499"
      },
      service7: {
        subtitle: "Ingeniería Narrativa",
        desc: "Palabras que venden, historias que perduran. Elevamos tu comunicación a través de storytelling profundo y redacción estratégica de alto nivel.",
        // Hero
        heroTitle1: "INGENIERÍA",
        heroTitleHighlight: "NARRATIVA",
        heroTitle2: "PREMIUM",
        heroCta: "Contar Mi Historia",
        heroShowreel: "Ver Narrativas",
        // Pain
        painTitle1: "SI TU MENSAJE",
        painTitleHighlight: "NO RESUENA,",
        painTitle2: "ERES RUIDO.",
        painItems: [
          "Textos corporativos aburridos y sin alma.",
          "Falta de conexión emocional con la audiencia.",
          "Propuestas de valor confusas y débiles.",
          "Incapacidad de contar una historia que venda."
        ],
        painScanLabel: "ANÁLISIS DE DISCURSO",
        // Stack
        stackLabel: "Protocolo Narrativo",
        stackTitle1: "ARQUITECTURA",
        stackTitleHighlight: "DE MARCA",
        stackTitle2: "",
        offerLabel: "Valor Total Bloqueado",
        offerTitle: "OFERTA",
        offerHighlight: "STORY ARCHITECT",
        priceFrom: "Desde",
        priceConsult: "Consultar",
        // Specific content
        stack: [
          { item: "Arquitectura de Storytelling de Marca", value: "$2,200" },
          { item: "Copywriting de Alta Conversión", value: "$1,800" },
          { item: "Creación de Whitepapers e Informes", value: "$1,500" },
          { item: "Estrategia de Comunicación Editorial", value: "$1,200" }
        ],
        promo: { 
          badge: "PROMO",
          title: "STORY",
          highlight: "NARRATIVE", 
          body: "Redactaremos tu 'Brand Story' o un set de 5 correos de venta con nuestra metodología de persuasión narrativa gratis.", 
          btn: "Empezar Ahora" 
        },
        bonus: {
          badge: "Exclusivo",
          title1: "GUÍA DE",
          titleHighlight: "TONO DE VOZ",
          title2: "",
          desc: "Guía de Tono de Voz para que todo tu equipo escriba con la misma autoridad.",
          value: "Valorado en $550 USD"
        },
        guarantee: {
          badge: "Garantía Insomnia",
          title1: "CONEXIÓN",
          titleHighlight: "PROFUNDA",
          title2: "",
          desc: "Si nuestros textos no logran una conexión más profunda con tu audiencia (medible), los reescribimos.",
          commitment: "Persuasión Ética"
        },
        // Features
        feats: [
          { title: "Diseño de Mitos", desc: "Creación de la mística y valores que rodean a tu marca." },
          { title: "Optimización PNL", desc: "Textos diseñados para resonar con hooks psicológicos." },
          { title: "Ghostwriting", desc: "Elevación de la autoridad personal de CEOs y fundadores." },
          { title: "Copy Visual", desc: "Integración perfecta entre diseño visual y palabra escrita." }
        ],
        // Final CTA
        finalTitle1: "HAZ QUE",
        finalTitleHighlight: "TU MENSAJE",
        finalTitle2: "SEA ETERNO",
        finalBadge: "Asedio Narrativo: Misión Abierta",
        finalBtn: "Transmitir Historia",
        finalBg: "NARRATIVA",
        painQuote: "SI TU MENSAJE NO RESUENA, ERES SIMPLEMENTE RUIDO.",
        priceValue: "$1,200"
      }
    },

    // ----------------------------------------------------------
    // Chat
    // ----------------------------------------------------------
    chat: {
      welcome: "¡Hola! Soy el asistente de Insomnia Studio. ¿En qué puedo ayudarte hoy?",
      placeholder: "¿Qué tienes en mente?",
      submit: "Enviar",
      processing: "Procesando idea...",
      error: "Parece que mi conexión está un poco inestable. ¿Podemos intentarlo de nuevo?",
      errorGeneral: "Lo siento, hubo un error en la conexión.",
      quickActions: {
        idea: "Dame una idea viral",
        automation: "¿Cómo automatizo mi negocio?",
        branding: "Ayuda con mi Branding"
      },
      quickActionsPrompts: {
        idea: "Dame una idea viral para mi contenido",
        automation: "¿Cómo puedo automatizar mi negocio con IA?",
        branding: "¿Cómo pueden ayudarme con el branding de mi marca?"
      },
      systemInstruction: "Eres el asistente de Insomnia Studio, una agencia líder en IA, Creatividad y Automatización. Tu tono es profesional, inspirador, directo y amable. Usa un lenguaje sencillo pero elegante (estilo Apple). Tu color de marca es el Amarillo #fcf200."
    },



    // ----------------------------------------------------------
    // Audit
    // ----------------------------------------------------------
    audit: {
      badge: "PROTOCOLO DE AUDITORÍA IA",
      systemVersion: "v4.2.0-CORE",
      prevBtn: "VOLVER",
      nextBtn: "SIGUIENTE",
      submitBtn: "TRANSMITIR DATOS",
      successTitle: "MISIÓN RECIBIDA",
      successMsg: "Tus datos están siendo procesados por nuestros sistemas. La oportunidad de dominar tu mercado ha comenzado.",
      successCta: "AGENDAR SESIÓN DE RESULTADOS",
      steps: [
        { 
          title: "Identidad", 
          description: "Estableciendo conexión segura. Identifíquese.",
          label1: "Nombre / Alias",
          placeholder1: "Ej: John Matrix",
          label2: "Perfil LinkedIn / URL Empresa",
          placeholder2: "linkedin.com/in/nombre"
        },
        { 
          title: "Escala", 
          description: "¿Cuál es el volumen actual de su operación?",
          options: ["Solo / < 5 Personas", "Equipo 5 - 20", "Empresa 20+"]
        },
        { 
          title: "Madurez", 
          description: "¿Qué tan integrada está la IA hoy en su flujo?",
          options: ["Nivel Inicial (Sin automatización)", "Nivel Medio (Uso de GPTs/Claude)", "Nivel Avanzado (APIs/Agentes)", "Experto (Busco optimizar lo avanzado)"]
        },
        { 
          title: "Inversión", 
          description: "Rango de inversión mensual proyectada para IA.",
          options: ["<$500 USD", "$500 - $2,000 USD", "$2,000+ USD"]
        },
        { 
          title: "Reto", 
          description: "¿Cuál es su principal cuello de botella?",
          options: ["Producción de Contenido (Escala)", "Automatización de Operaciones", "Servicio al Cliente (IA Agents)", "Cierre de Ventas / Prospección"]
        }
      ]
    },

    // ----------------------------------------------------------
    // Portfolio
    // ----------------------------------------------------------
    portfolio: {
      badge: "/ Work Archive",
      title: "Registros",
      highlight: "Exitosos",
      subtitle: "Explora misiones completadas donde la simbiosis humano-máquina alcanzó resultados sin precedentes.",
      stat1: "42 Proyectos Activos",
      stat2: "98% Eficiencia IA",
      stat3: "8.2M Ahorro Operativo",
      ctaTitle: "¿Listo para ser el próximo caso de éxito?",
      ctaSubtitle: "Nuestra capacidad de despliegue es limitada para asegurar la excelencia en cada misión. Solo aceptamos 2 nuevos proyectos por trimestre.",
      ctaBtn: "Reservar Consultoría",
    },

    // ----------------------------------------------------------
    // Privacy Policy
    // ----------------------------------------------------------
    privacy: {
      badge: "Documento Legal",
      title1: "Aviso de",
      title2: "Privacidad",
      lastUpdated: "Última actualización:",
      intro: "En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento, Insomnia AI Studio pone a su disposición el presente Aviso de Privacidad.",
    },

    // ----------------------------------------------------------
    // Terms & Conditions
    // ----------------------------------------------------------
    terms: {
      badge: "Documento Legal",
      title1: "Términos y",
      title2: "Condiciones",
      lastUpdated: "Última actualización:",
      intro: "El uso de los servicios, plataformas y sitio web de Insomnia AI Studio implica la aceptación plena e incondicional de los presentes Términos y Condiciones. Léalos detenidamente antes de contratar o utilizar nuestros servicios.",
    },
    // ----------------------------------------------------------
    // Common Elements
    // ----------------------------------------------------------
    common: {
      whatsappMsg: "Hola Insomnia, solicito información estratégica sobre sus protocolos de IA.",
      whatsappCta: "Conexión Directa"
    },
    successBooking: {
      badge: "SESIÓN CONFIRMADA",
      title: "SESIÓN",
      highlight: "CONFIRMADA",
      subtitle: "Tu diagnóstico estratégico ha sido programado con éxito.",
      checkEmail: "Revisa tu bandeja de entrada para los detalles de conexión.",
      nextSteps: "PRÓXIMOS PASOS",
      step1: "Añadir a calendario",
      step2: "Preparar preguntas",
      step3: "Explorar portafolio",
      ctaHome: "VOLVER AL INICIO",
      ctaPortfolio: "VER PORTAFOLIO",
      ctaCalendar: "AÑADIR A GOOGLE CALENDAR",
      labelMission: "Misión",
      labelDate: "Fecha",
      labelTime: "Hora",
    },
    roi: {
      title: "Calculadora de ROI Kraken",
      monthlyOpEx: "Gasto Operativo Mensual (USD)",
      efficiencyGain: "Ganancia de Eficiencia (%)",
      investment: "Inversión en Kraken (USD)",
      yearlySavings: "Ahorro Anual Estimado",
      breakEven: "Punto de Equilibrio",
      threeYearROI: "ROI a 3 Años",
      months: "meses",
      cta: "Agendar Estrategia",
      benchmarks: {
        title: "KPIs del Sector",
        standard: "Eficiencia Estándar: 15-20%",
        kraken: "Kraken Core: 60-85%"
      },
      summary: {
        title: "Resumen Ejecutivo",
        template: "En solo {months} meses, tu inversión se paga sola. Estás proyectando un retorno de {return} en los próximos 3 años al liberar tu capital humano del trabajo repetitivo."
      },
      whatsappMessage: "¡Hola! He calculado mi ROI con Kraken y estos son los resultados:\n- Ahorro Anual: {yearlySavings}\n- Retorno: {breakEven} meses\n- ROI a 3 años: {roi}\n¡Quiero solicitar mi auditoría!",
      disclaimer: "Basado en benchmarks promedio de la industria. Resultados reales pueden variar según la implementación final."
    },
    contact: {
      badge: "Centro de Mando / Contacto",
      title1: "INICIA EL",
      title2: "PROTOCOLO",
      subtitle: "Estás a una conexión de transformar tu realidad operativa. Despliega tu mensaje.",
      infoTitle: "Canales Directos",
      infoMail: "Correo Electrónico",
      infoPhone: "WhatsApp Directo",
      infoLocation: "Ubicación",
      commitmentsTitle: "Nuestros Compromisos",
      commitment1: "Respuesta técnica en menos de 12 horas.",
      commitment2: "Diagnóstico inicial de arquitectura sin costo.",
      commitment3: "Confidencialidad absoluta y seguridad de datos.",
      scheduleBtn: "Agendar Cita",
      whatsappMsg: "Hola, quiero agendar una sesión estratégica para mi negocio."
    },
    notfound: {
      badge: "Error 404 // Protocolo de Navegación Interrumpido",
      title1: "PÁGINA",
      highlight: "NO HALLADA",
      title2: "",
      body: "La ruta solicitada no se encuentra en nuestra base de datos neural o ha sido encriptada. Regresa al centro de mando.",
      cta: "VOLVER AL INICIO"
    }
  },

  // ============================================================
  // ENGLISH
  // ============================================================
  en: {
    // ----------------------------------------------------------
    // Header & Nav
    // ----------------------------------------------------------
    nav: {
      empresas: "Enterprises",
      emprendedores: "Entrepreneurs",
      services: "Services",
      portfolio: "Portfolio",
      agents: "AI Agents",
      contact: "Contact",
      cta: "Free Audit",
      mobileNav: "Navigation",
      mobileLanguage: "Language",
      mobileSegment: "Segment",
      home: "Home"
    },

    // ----------------------------------------------------------
    // Footer
    // ----------------------------------------------------------
    footer: {
      tagline: "Where Dreams Become Digital Reality",
      colStudio: "Studio",
      colServices: "Services",
      colContact: "Contact",
      linkNosotros: "About Us",
      linkShowreel: "Showreel",
      linkProcesosIA: "AI Processes",
      linkBranding: "Branding",
      linkContent: "Content & Video",
      linkAgents: "Agents & Automation",
      linkWeb: "Web & Apps",
      linkSocial: "Social Media Dominance",
      linkAutomation: "Operational Excellence",
      linkEditorial: "Narrative Engineering",
      copyright: "All Rights Reserved",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },

    // ----------------------------------------------------------
    // Global Config
    // ----------------------------------------------------------
    config: {
      domain: "usainsomnia.com",
      email: "hola@usainsomnia.com",
      phone: "+52 55 8640 7719",
      whatsapp: "525586407719",
      locations: ["Mexico City", "Queretaro"],
      socials: {
        facebook: "https://www.facebook.com/usainsomnia",
        instagram: "https://www.instagram.com/usainsomnia",
        tiktok: "#",
        linkedin: "https://www.linkedin.com/company/usainsomnia"
      },
      bookingURL: "https://tidycal.com/humbertocarosilva/sesion-estrategica-ia-insomnia-studio"
    },

    // ----------------------------------------------------------
    // About Us
    // ----------------------------------------------------------
    about: {
      missionBadge: "Our Mission",
      title1: "SCALE THROUGH",
      title2: "INTELLIGENCE",
      desc1: "At INSOMNIA AI, we believe the true value of Artificial Intelligence isn't replacing human ingenuity, but multiplying it. We help companies and individuals transcend their operational limits, creating autonomous ecosystems that work 24/7.",
      desc2: "We are not a traditional agency; we are a growth laboratory. We integrate web development, custom applications, and AI agents to build architectures that dominate the market and accelerate profitability.",
      teamSectionTitle1: "THE KRAKEN",
      teamSectionTitle2: "SQUAD",
      teamSubtitle: "The masterminds behind enterprise automation.",
      team: {
        director: {
          role: "CEO & Director",
          desc: "Strategic visionary specialized in business scalability through artificial intelligence and advanced automation."
        },
        pr: {
          role: "PR Director",
          desc: "Expert in Public Relations and corporate alliances. Building bridges between technological innovation and the business sector."
        },
        programming: {
          role: "Director of Programming",
          desc: "Lead software architect. Designs and deploys intelligent ecosystems and highly complex autonomous agents."
        },
        web: {
          role: "Lead Web & App Development",
          desc: "Specialist in frontend and mobile development. Transforms complex infrastructures into dynamic and conversational interfaces."
        }
      },
      ctaTitle1: "READY TO SCALE",
      ctaTitle2: "YOUR OPERATION?",
      ctaBtn: "Initiate Protocol",
      connectBtn: "Connect"
    },

    // ----------------------------------------------------------
    // Home
    // ----------------------------------------------------------
    home: {
      badge: "Creative Intelligence Agency",
      heroEmpresas: { title1: "Scale Without", highlight: "Limits" },
      heroEmprendedores: { title1: "Scale &", highlight: "Impact" },
      subtitleEmpresas: "Your human capacity has reached its ceiling — ours hasn't. We build the content and automation engine that will take your revenue to the next level.",
      subtitleEmprendedores: "Being overwhelmed isn't a sign of success — it's a sign of a system that's holding you back. Stop being the bottleneck of your own ambition and let AI orchestrate your growth while you reclaim control of your life.",
      ctaPrimary: "Book Free Diagnosis",
      ctaSecondary: "Watch Showreel 2026",
      ctaRoi: "ROI Calculator",

      // Services
      servicesLabel: "/ Capabilities",
      servicesTitle1: "Next",
      servicesTitle2: "Generation",
      servicesHighlight: "Services",
      service1Title: "Video Production",
      service1Desc: "High-impact audiovisual content, cinematic editing, and viral retention engineering.",
      service2Title: "Branding",
      service2Desc: "We build the visual soul of your business. Identities that breathe authority and dominate their category.",
      service3Title: "Kraken AI",
      service3Desc: "Our crown jewel. Autonomous agents acting as your 24/7 digital workforce.",
      service4Title: "Web & Apps",
      service4Desc: "High-performance digital ecosystems. Interfaces that don't just load, they convert.",
      service5Title: "Social Content",
      service5Desc: "Algorithm mastery. Content strategies, hooks, and community management.",
      service6Title: "Automation",
      service6Desc: "Operational process optimization and intelligent workflows to free up your human capital.",
      service7Title: "Editorial",
      service7Desc: "Deep storytelling and strategic copywriting that connects and persuades effortlessly.",

      // Sectors
      sectorsEmpLabel: "Target Segments",
      sectorsEmpTitle: "SECTORS IN",
      sectorsEmpHighlight: "MUTATION",
      sectorsEmpSubtitle: "Your niche is the battlefield; our AI is the arsenal you need to dominate it.",
      sectorsEmpItems: [
        { title: "Real Estate", desc: "Sell while you sleep with 24/7 lead capture." },
        { title: "Insurance", desc: "Quotes in seconds, renewals on autopilot." },
        { title: "Medical", desc: "Less admin, more real patient care." },
        { title: "Therapists", desc: "Full schedule without the manual messaging chaos." },
        { title: "Lawyers", desc: "Case file scanning at the speed of light." },
        { title: "Coaches", desc: "Scale your programs without cloning yourself." },
        { title: "Mentors", desc: "Infinite growth for your communities." },
        { title: "Psychologists", desc: "Ethical and efficient follow-up, 365 days." },
        { title: "Managers", desc: "Condos in order, incidents resolved." },
        { title: "Creators", desc: "Your content working harder than you." },
      ],
      sectorsCorpLabel: "Enterprise Divisions",
      sectorsCorpTitle: "INDUSTRIES IN",
      sectorsCorpHighlight: "MUTATION",
      sectorsCorpSubtitle: "Tomorrow's infrastructure is built today. We elevate operational efficiency to exponential levels.",
      sectorsCorpItems: [
        { title: "Hospitals", desc: "Autonomous triage and critical resource optimization." },
        { title: "Governments", desc: "Mass citizen services and zero bureaucracy." },
        { title: "Law Firms", desc: "High-precision robotic legal and tax auditing." },
        { title: "Real Estate Cos.", desc: "Predictive valuation and global asset management." },
        { title: "Logistics", desc: "Autonomous supply chains and dynamic routing." },
        { title: "Fitness", desc: "Mass personalization and predictive retention." },
        { title: "Sales", desc: "24/7 prospecting and closing engines, no limits." },
        { title: "Accounting", desc: "Automatic reconciliation and tax compliance." },
        { title: "Industry", desc: "Predictive maintenance and visual quality control." },
        { title: "Finance", desc: "Fraud detection and algorithmic wealth management." },
        { title: "Education", desc: "Adaptive platforms and seamless academic management." },
        { title: "Retail", desc: "Smart omnichannel and hyper-personalized after-sales." },
      ],
      servicesComing: "New Protocols Coming",

      // CTA Section
      ctaSectionBadge: "Efficiency Protocol v2.0",
      ctaSectionTitle1: "YOUR BUSINESS",
      ctaSectionTitle2: "NEEDS AN",
      ctaSectionTitle3: "AI BRAIN.",
      ctaSectionBodyEmpresas: "Stop competing for attention and start dominating through efficiency. We transform your operational chaos into an autonomous, intelligent workflow.",
      ctaSectionBodyEmprendedores: "Multiply your impact without multiplying your hours. We design the AI system that does the heavy lifting for you while you create.",
      ctaFeature1: "Full Audit",
      ctaFeature2: "12-Month Roadmap",
      ctaFeature3: "ROI Analysis",
      ctaFormTitle: "REQUEST DIAGNOSIS",
      ctaFormSubtitle: "Our deployment capacity is limited. We only accept **3 missions** per week to guarantee exponential results.",
      ctaFormBtn: "RESERVE MY SPOT",
      ctaFormStatus: "CONNECTION ESTABLISHED",
      caseStudiesViewProtocol: "EXPLORE PROTOCOL",
      newsletterEncryption: "Military-Grade Encryption Active",
      productivityLabel: "Productivity",

      // AI Showcase
      aiLabel: "Cognitive Deployment Protocol",
      aiTitle1: "AUTONOMOUS",
      aiHighlight: "DIGITAL DNA",
      aiQuote: '\"We don\'t clone processes — we digitize your competitive edge.\"',
      aiFeature1Title: "Operational Immortality",
      aiFeature1Desc: "Systems that execute and optimize non-stop, without downtime or errors, 365 days a year.",
      aiFeature2Title: "Evolutionary Brain",
      aiFeature2Desc: "Our agents learn from every interaction, sharpening your market advantage with each data point processed.",
      aiFeature3Title: "Liquid Scalability",
      aiFeature3Desc: "Expand your response capacity instantly without increasing fixed operational costs.",
      aiDeployBtn: "DEPLOY INFRASTRUCTURE",

      // Testimonials
      testimonialsLabel: "Network Validation",
      testimonialsTitle: "LEADERS WHO",
      testimonialsHighlight: "WOKE UP",
      testimonials: [
        { name: "Marco Valdivia",  role: "Founder, Apex Studio (MX)",     result: "+400% ROI",       quote: "Insomnia didn't install software — it redesigned my freedom. Scaling stopped being an operational nightmare.",           img: "entrepreneur-1.png" },
        { name: "Elena Ramos",     role: "Creative Director (CO)",        result: "-75% OpEx",       quote: "I eliminated 70% of my operational load in 3 weeks. Insomnia's agents are surgical.",                                 img: "entrepreneur-2.png" },
        { name: "Camila Santos",   role: "Digital Nomad & Investor (CL)", result: "24/7 Autonomy",   quote: "My company grows while I travel. It's the first time infrastructure has felt solid as a rock.",                      img: "entrepreneur-3.png" },
        { name: "Valentina Ruiz", role: "Founder, Zenith Labs (CL)",      result: "+500% Efficiency",quote: "We automated the entire backend with autonomous AI. There's no going back to manual work.",                          img: "entrepreneur-4.png" },
        { name: "Mateo Herrera",  role: "Digital Strategist (ES)",        result: "-90% Latency",    quote: "The agents' decision-making is out of this world. We reduced downtime to zero.",                                    img: "entrepreneur-5.png" },
        { name: "Lucía Mendoza",  role: "Creative Director (MX)",         result: "100X Scale",      quote: "We went from 100 leads to 10,000 in a month without hiring anyone. Pure liquid scaling.",                            img: "entrepreneur-6.png" },
      ],

      // Logos bar
      logosLabel: "Protocol Validated by High-Impact Entities",

      // Blog
      blogLabel: "Knowledge base",
      blogTitle: "APPLIED",
      blogHighlight: "INTELLIGENCE",
      blogViewAll: "View Full Archive",

      // Newsletter
      newsletterBadge: "Intelligence Stream v4.2",
      newsletterTitle: "JOIN THE",
      newsletterSubtitle: "PROTOCOL",
      newsletterBody: '\"We don\'t send emails — we deliver tactical briefings for autonomous infrastructure deployment.\"',
      newsletterFormTitle: "TERMINAL ACCESS",
      newsletterFormSub: "Enter your digital credential to receive the data stream.",
      newsletterPlaceholder: "ID@PROTOCOL.COM",
      newsletterBtn: "SUBMIT CREDENTIALS",
      newsletterLoading: "PROCESSING...",
      newsletterSuccess: "ACCESS GRANTED",
      newsletterSuccessMsg: "CHECK YOUR INBOX",
      newsletterEncrypt: "* END-TO-END ENCRYPTED TRANSMISSION (E2EE)",
      newsletterErrorEmail: "PLEASE ENTER A VALID EMAIL",
      newsletterErrorDup: "EMAIL ALREADY REGISTERED IN THE PROTOCOL",
      newsletterErrorConn: "TERMINAL CONNECTION FAILED",
      newsletterErrorCrit: "CRITICAL TRANSMISSION ERROR",

      // Chat section
      chatTitle: "Insomnia Studio",
      chatHighlight: "AI Concierge",
      chatSubtitle: "Test our integrated intelligence for a quick consultation.",

      // Pragmatic Section
      pragmaticBadge: "Pragmatic Intelligence",
      pragmaticTitle: "REAL-WORLD",
      pragmaticHighlight: "AI BUSINESS",
      pragmaticSubtitle: "Less science fiction, more results. Three pillars designed for immediate impact on your bank account.",
      pragmaticItems: [
        { title: "Time Savings", desc: "We automate the 4 hours of repetitive tasks that you or your team hate doing." },
        { title: "Cost Reduction", desc: "Replace expensive manual processes with digital agents that never sleep or make mistakes." },
        { title: "Scalability", desc: "Increase your operational capacity 10x without the need to hire more staff." }
      ],
      newsletterStatusSuccess: "WELCOME!",
      videoClose: "Close Transmission",
      
      // New Sections
      guarantee: {
        badge: "TRUST CONTRACT",
        title1: "IRONCLAD",
        highlight: "GUARANTEE",
        body: "If we don't implement the agreed systems or you don't see tangible optimization, we refund your money. Period.",
        cta: "View Security Protocols"
      },
      guaranteeProtocol: {
        title: "Zero-Risk Execution Protocol",
        subtitle: "Insomnia Alpha v4.0 Internal Regulations",
        items: [
          { title: "P01: Deliverables Definition", desc: "Before any payment or technical start, a scope document with 100% measurable deliverables is signed." },
          { title: "P02: Weekly Validation", desc: "Every Friday you receive a progress report. If something doesn't match the vision, it's fixed in 24 hours." },
          { title: "P03: Technical Transparency", desc: "Full access to automation flows and prompts used. Your system belongs to you." },
          { title: "P04: Direct Refund", desc: "If by the end of the agreed term the system does not operate as agreed, we trigger a full refund." }
        ],
        ctaClose: "Close and Return"
      },
      videoTestimonialsLabel: "High-Level Social Proof",
      videoTestimonialsTitle: "Our Clients",
      videoTestimonialsHighlight: "On Video",
      caseStudiesLabel: "Success Lab",
      caseStudiesTitle: "Case",
      caseStudiesHighlight: "Studies",
      caseStudiesItems: [
        { title: "Kraken Real Estate", client: "Moreno Group", impact: "+250% Leads", desc: "Total sales funnel automation." },
        { title: "Neural Branding", client: "MadMonkey", impact: "Authority Boost", desc: "Complete AI digital ecosystem redesign." },
        { title: "Flow Automation", client: "Validez Clinic", impact: "-40% OpEx", desc: "Agent integration for patient management." }
      ]
    },

    // ----------------------------------------------------------
    // Blog page
    // ----------------------------------------------------------
    blog: {
      label: "The Terminal",
      title: "INSOMNIA",
      highlight: "INSIGHTS",
      subtitle: "Deployment protocols, disruptive automation and the future of enterprise autonomy.",
      loading: "Syncing Database...",
      backToArchive: "Back to Archive",
      author: "Author",
      share: "Share",
      shareBtn: "Send Protocol",
      cta: {
        badge: "Phase: Execution",
        title: "READY FOR",
        highlight: "DEPLOYMENT?",
        body: "We don't read the news — we make it. Stop operating manually and become an autonomous infrastructure.",
        btnPrimary: "REQUEST AUDIT",
        btnSecondary: "Talk to an Agent",
      },
      inArticleBtn: "Schedule Audit",
    },

    // ----------------------------------------------------------
    // Agents
    // ----------------------------------------------------------
    agents: {
      badge: "/ Neural Network",
      title: "Kraken",
      highlight: "Engine V3",
      subtitle: "These aren't chatbots. They are autonomous reasoning architectures designed to execute operational missions without constant human supervision.",
      ctaPrimary: "Build your Kraken",
      ctaSecondary: "See how it works",
      archTitle: "Cognitive",
      archHighlight: "Infrastructure",
      feature1Title: "Unified Knowledge Base",
      feature1Desc: "We ingest all your manuals, chat history and company processes to create an infallible centralized brain.",
      feature2Title: "Multi-Agent Swarm",
      feature2Desc: "A team of specialized agents that communicate with each other to resolve complex tasks from start to finish.",
      feature3Title: "Native Tool Access",
      feature3Desc: "Our agents can interact with your apps: CRM, Gmail, WhatsApp and databases in real time.",
      // Sectors
      sectorsBadge: "Targets",
      sectorsTitle: "MUTATING",
      sectorsHighlight: "SECTORS",
      sectorsSubtitle: "No matter your niche, if there is a repetitive process, there's a Kraken ready to take command.",
      sectors: [
        { title: "Real Estate Agents",   desc: "24/7 lead capture and follow-up without losing a prospect." },
        { title: "Insurance Agents",     desc: "Automated quotes and closings in one click." },
        { title: "Doctors",              desc: "Intelligent patient triage and scheduling." },
        { title: "Therapists",           desc: "Session management and pre-consultation support." },
        { title: "Lawyers",              desc: "Robotic analysis and classification of case files." },
        { title: "Coaches",              desc: "Student support and sales on autopilot." },
        { title: "Mentors",              desc: "Group scaling with personalized AI attention." },
        { title: "Psychologists",        desc: "Schedule control and high-impact reminders." },
        { title: "HOA Managers",         desc: "Automated complaint resolution and billing." },
        { title: "Content Creators",     desc: "Workflow automation and fan-support." },
      ],
      // Use Cases
      useCasesTitle: "Standardized",
      useCasesHighlight: "Deployments",
      type1Label: "Type-01",
      type1Title: "Assistant Concierge",
      type1Desc: "Deep conversations with brand-specific knowledge for customer care and high-level technical support.",
      type1feat1: "Persistent Memory",
      type1feat2: "Multi-step Reasoning",
      type2Label: "Type-02",
      type2Title: "Autonomous Executive",
      type2Desc: "Systems that don't just chat — they send emails, schedule appointments and process orders without human intervention.",
      type2feat1: "Native API Integration",
      type2feat2: "Self-Error Management",
      // Bottom CTA
      closingTitle: "THE FUTURE",
      closingHighlight: "NEVER SLEEPS",
      // Investment Section (New)
      investmentProtocol: "Investment Protocol",
      armyTitle: "YOUR NEW",
      armyHighlight: "ARMY",
      investmentTitle: "INVESTMENT IN",
      investmentHighlight: "AUTONOMY",
      offerTitle: "KRAKEN CORE OFFER",
      consultPrice: "Consult",
      bonusTitle: "BONUS: CUSTOM ARCHITECTURE",
      bonusValue: "VALUE: $2,500 USD (FREE)",
      limitedDeployment: "LIMITED DEPLOYMENT",
      ultimateWorkforce: "The Ultimate Workforce",
      krakenProtocol: "KRAKEN PROTOCOL",
      investmentSince: "Investment From",
      impactGuarantee: "IMPACT GUARANTEE",
      contractGuarantee: "Contract-guaranteed results",
      exclusiveSectorsTitle: "EXCLUSIVE FOR",
      exclusiveSectorsHighlight: "INDUSTRY LEADERS",
      exclusiveBadge: "Exclusive",
      securityAuditTitle: "SECURITY AUDIT",
      guaranteeBadge: "Insomnia Guarantee",
      optimizationTitle: "CONCRETE OPTIMIZATION",
      roiGuaranteed: "ROI Guaranteed",
      militaryEncryption: "Military Encryption",
      log7: "Listening for next directive...",
      log8: "System Ready.",
      neuralLoad: "Neural_Load: 12%",
      autoOps: "24/7 AUTO OPS",
      closingWatermark: "TOTAL_DOMINANCE",
      iqTitle: "RAISING YOUR",
      iqHighlight: "COMPANY IQ",
      featureNeuralTitle: "Neural Integration",
      featureNeuralDesc: "Total connection with your current stack (CRM, ERP, Slack)",
      featureGoalTitle: "Goal-Oriented Execution",
      featureGoalDesc: "Agents that don't stop until the goal is achieved",
      log1: "Initializing neural synchronization...",
      log2: "Database cluster [X-90] connected.",
      log3: "ANALYZING BUSINESS WORKFLOW...",
      log4: "PATTERN FOUND: Efficiency loss in Pipeline.",
      log5: "Deploying Agent #7 (Lead Qualification)...",
      log6: "ACTION: Qualifying 1,204 leads in 0.4 seconds.",
      log9: "KPI Update: Conversion +312%."
    },

    // ----------------------------------------------------------
    // Services
    // ----------------------------------------------------------
    services: {
      badge: "/ Core Pillars",
      title1: "Unlimited",
      title2: "Capabilities",
      techSpecsBtn: "Technical Specs",
      service1Title: "Audiovisual & Motion",
      service1Subtitle: "Visual Intelligence",
      service1Desc: "We don't just record video — we design viral experiences. We use AI engines for neural upscaling, chromatic correction and synthetic asset generation that reduce production costs to a fraction.",
      service1Features: ["4K Neural Upscaling", "AI-Powered Grading", "Synthetix Motion Assets", "Viral Narrative Design"],
      service1Pain: "Traditional agencies charge you months for content that dies in 24 hours. We deliver production systems that dominate the algorithm.",
      service1Stack: [
        { item: "AI Cinematic Production", value: "$5,000+" },
        { item: "Scripting via Prompt Engineering", value: "$1,500" },
        { item: "Neural Post-Production (4K)", value: "$2,000" },
        { item: "Viral Distribution & Narrative", value: "$3,000" }
      ],
      service1Bonus: "EXCLUSIVE BONUS: 5 AI-Validated Video Hooks to guarantee clicks.",
      service1Guarantee: "If your first piece doesn't beat the reach of your last 3 videos, we work for free until it does.",

      service2Title: "Branding & Narrative",
      service2Subtitle: "Identity Engineering",
      service2Desc: "We build brand mythologies. From the logo to the voice tone captured in custom language models that ensure absolute consistency across all your touchpoints.",
      service2Features: ["Custom LLM Tone", "Algorithmic Identity", "Strategic Mythology", "Digital Guidelines"],
      service2Pain: "A pretty logo doesn't sell. You need a brand that thinks, speaks and evolves. Most brands are mute; yours will have an eternal voice.",
      service2Stack: [
        { item: "Dynamic Visual Identity", value: "$4,000" },
        { item: "Brand-Brain Training (LLM)", value: "$6,500" },
        { item: "Brand Mythology Architecture", value: "$2,500" },
        { item: "Digital Voice Manual", value: "$1,200" }
      ],
      service2Bonus: "EXCLUSIVE BONUS: Semi-Annual AI Narrative Alignment Audit.",
      service2Guarantee: "We guarantee absolute consistency across all your channels. Your brand will never sound like a generic bot.",

      service3Title: "Kraken AI Agents",
      service3Subtitle: "Autonomous Labor",
      service3Desc: "Your digital workforce. Autonomous agents capable of reasoning, executing complex tasks and learning from your internal processes to automate 80% of the operational load.",
      service3Features: ["Multi-Agent Swarms", "Custom Knowledge Base", "Task Automation", "24/7 Deployment"],
      service3Promo: {
        title: "INITIAL BOOST",
        highlight: "2,000 FREE CREDITS",
        body: "Exclusive gift for your first month. Start building your AI Agent or Digital Employee today with a robust gift infrastructure.",
        btn: "CLAIM CREDITS"
      },
      service3Pain: "Are you still hiring humans for tasks that a machine does better, faster and 24/7? Human talent is for creating, not for repeating. Free your team from slave labor.",
      service3Stack: [
        { item: "Swarm Architecture (Multi-Agent)", value: "$12,000" },
        { item: "Centralized Knowledge Base", value: "$3,500" },
        { item: "Native Tool Integration", value: "$4,000" },
        { item: "LLM Maintenance & Optimization", value: "$2,500" }
      ],
      service3Bonus: "EXCLUSIVE BONUS: Free Data Security and Privacy Audit.",
      service3Guarantee: "We guarantee a 60% reduction in operational response time in the first 30 days or we refine the system at no extra cost.",

      service4Title: "Web & App Ecosystem",
      service4Subtitle: "Dynamic Interface",
      service4Desc: "We develop high-performance digital terminals. Interfaces that don't just inform, but intelligently interact with the end user through predictive personalization.",
      service4Features: ["Predictive UI", "Edge Computing", "Real-time Personalization", "Scalable Ops"],
      service4Pain: "Static websites are digital cemeteries. You need an intelligent terminal that learns from your customers in real time and converts every visit into data or a sale.",
      service4Stack: [
        { item: "Next.js Predictive Architecture", value: "$8,000" },
        { item: "Conversion Agent Integration", value: "$4,500" },
        { item: "Edge-Ready Cloud Infrastructure", value: "$3,000" },
        { item: "Algorithmic SEO Optimization", value: "$2,000" }
      ],
      service4Bonus: "EXCLUSIVE BONUS: 1 Year of Maintenance and AI Model Evolution.",
      service4Guarantee: "We develop at record speed. If we don't meet the MVP delivery milestone, you automatically receive a 20% discount.",
      
      service6Title: "Automation & Workflow",
      service6Subtitle: "Intelligent Systems",
      service6Desc: "We optimize your human capital by eliminating repetitive tasks through intelligent workflows and native automations.",
      service6Features: ["Make/n8n Integration", "Pro Webhooks", "Legacy Sync", "Error Handling"],

      pillar1Title: "Total Security",
      pillar1Desc: "We implement military-grade encryption and data privacy layers across all our AI deployments.",
      pillar2Title: "Extreme Speed",
      pillar2Desc: "Our automation pipelines reduce delivery times for complex projects from months to weeks.",
      pillar3Title: "Scalability",
      pillar3Desc: "Architectures designed to grow with your business, from seed-stage startups to global corporations.",

      service5Title: "Cognitive Data Protocol",
      service5Subtitle: "Intellectual Asset Optimization",
      service5Desc: "We turn your business data into intelligent decisions and profitable growth. We implement neural architectures that analyze your sales, performance and operations to find hidden growth nodes.",
      service5Features: ["Predictive Analytics", "Real-time Dashboards", "Data Infrastructure", "Conversion Optimization"],
      service5Pain: "Raw data is just noise. Most companies drown in information but die of thirst for actionable knowledge. Don't collect data, generate intelligence.",
      service5Stack: [
        { item: "AI Data Audit & Pipelines", value: "$3,500" },
        { item: "Real-time Intelligence Dashboard", value: "$2,000" },
        { item: "Predictive Sales Models", value: "$4,500" },
        { item: "AI-Powered Funnel Optimization", value: "$1,800" }
      ],
      service5Bonus: "EXCLUSIVE BONUS: Industry Benchmarking Report compared to AI efficiency standards.",
      service5Guarantee: "Value Guarantee: If our first analysis doesn't discover a 15% saving or growth opportunity, there's no commitment.",


      // Landing Page Specific Content
      service1: {
        subtitle: "Visual Domination Protocol",
        desc: "We don't sell videos. We build massive attention machines that force the algorithm to favor your brand.",
        // Hero
        heroTitle1: "CONTENT THAT",
        heroTitleHighlight: "DOMINATES",
        heroTitle2: "THE ALGORITHM",
        heroCta: "Start Transmission",
        heroShowreel: "Watch Showreel 2026",
        // Pain
        painTitle1: "IS YOUR CONTENT",
        painTitleHighlight: "SYNTHESIZED OR",
        painTitle2: "IGNORED?",
        painItems: [
          "Traditional agencies are slow and expensive.",
          "Generic content that no one remembers.",
          "Lack of visual consistency on social media.",
          "Productions that don't generate real ROI."
        ],
        painScanLabel: "LIVE DATA SCAN",
        // Stack
        stackLabel: "Investment Protocol",
        stackTitle1: "THE ELEVATION",
        stackTitleHighlight: "SYSTEM",
        stackTitle2: "",
        offerLabel: "Total Value Locked",
        offerTitle: "OFFER",
        offerHighlight: "DYNAMIC INTENSITY",
        priceFrom: "From",
        priceConsult: "Consult",
        // Specific content
        stack: [
          { item: "Viral Retention Strategy", value: "$1,500" },
          { item: "High-Impact Editing (Premium)", value: "$2,500" },
          { item: "AI-Powered Thumbnail Optimization", value: "$800" },
          { item: "Psychological Sales Scriptwriting", value: "$1,200" }
        ],
        promo: { 
          badge: "PROMO",
          title: "PILOT",
          highlight: "VIRAL", 
          body: "We will produce a pilot video for your brand using our 'Dynamic Intensity' methodology at zero cost if we don't beat your current best performing ad.", 
          btn: "Claim Pilot Video" 
        },
        bonus: {
          badge: "Exclusive",
          title1: "AUTHORITY",
          titleHighlight: "BONUS",
          title2: "",
          desc: "Receive a 30-minute Content Audit where we breakdown your competition and give you a 90-day Roadmap.",
          value: "Valued at $850 USD"
        },
        guarantee: {
          badge: "Insomnia Guarantee",
          title1: "ABSOLUTE",
          titleHighlight: "ZERO RISK",
          title2: "",
          desc: "If after 30 days you don't see a real increase in your engagement metrics, we'll return 100% of your investment.",
          commitment: "Success Commitment"
        },
        // Features
        feats: [
          { title: "Neural Ops", desc: "4K AI Upscaling and neural color correction." },
          { title: "Multi-Format", desc: "Intelligent adaptation for Reels, YouTube and TikTok." },
          { title: "Ultra Fast", desc: "Delivery cycles reduced by 400% vs agencies." },
          { title: "Synthetics", desc: "Digital asset generation via AI engines." }
        ],
        // Final CTA
        finalTitle1: "YOUR BRAND",
        finalTitleHighlight: "WILL BECOME",
        finalTitle2: "IMMORTAL",
        finalBadge: "Limited Capacity Protocol: 3 Missions per Week",
        finalBtn: "Reserve My Spot",
        finalBg: "INSOMNIA",
        painQuote: "WE DESIGN THE VISUAL ARMAMENT FOR THE WAR OF ATTENTION.",
        priceValue: "$2,499"
      },
      service2: {
        subtitle: "Identity Intelligence",
        desc: "A brand without a soul is just a logo. We build identities that breathe, speak, and dominate their category.",
        // Hero
        heroTitle1: "YOUR BRAND",
        heroTitleHighlight: "NEEDS",
        heroTitle2: "A BRAIN",
        heroCta: "Identity Protocol",
        heroShowreel: "View Identity",
        // Pain
        painTitle1: "VOICELESS",
        painTitleHighlight: "BRANDS ARE",
        painTitle2: "INVISIBLE.",
        painItems: [
          "Inconsistency in voice tone.",
          "Generic and cold visual identity.",
          "Lack of a strategic mythology.",
          "Disconnection from the digital customer."
        ],
        painScanLabel: "LIVE DATA SCAN",
        // Stack
        stackLabel: "Investment Protocol",
        stackTitle1: "THE ELEVATION",
        stackTitleHighlight: "SYSTEM",
        stackTitle2: "",
        offerLabel: "Total Value Locked",
        offerTitle: "OFFER",
        offerHighlight: "BRAND GENESIS",
        priceFrom: "From",
        priceConsult: "Consult",
        // Specific content
        stack: [
          { item: "Visual Identity Manual (AI Enhanced)", value: "$2,800" },
          { item: "Voice Tone & Messaging Architecture", value: "$1,800" },
          { item: "High-Level Digital Asset Design", value: "$1,500" },
          { item: "Premium Positioning Consulting", value: "$1,200" }
        ],
        promo: { 
          badge: "PROMO",
          title: "REBRANDING",
          highlight: "IDENTITY", 
          body: "Get a free brand audit and a prototype of your home page designed for maximum conversion.", 
          btn: "Claim" 
        },
        bonus: {
          badge: "Exclusive",
          title1: "AUTHORITY",
          titleHighlight: "BONUS",
          title2: "",
          desc: "Brand Deployment Guide: How to maintain consistency without hiring an army.",
          value: "Valued at $850 USD"
        },
        guarantee: {
          badge: "Insomnia Guarantee",
          title1: "ABSOLUTE",
          titleHighlight: "ZERO RISK",
          title2: "",
          desc: "Differentiation Guarantee: If your new identity doesn't feel drastically superior to your competition, we keep working until it does.",
          commitment: "Success Commitment"
        },
        // Features
        feats: [
          { title: "Neuro-Tone", desc: "Voice tone definition via large language models." },
          { title: "Visual DNA", desc: "Generative visual systems that evolve with the brand." },
          { title: "Psych-Copy", desc: "High-conversion copywriting based on deep psychology." },
          { title: "Meta-Docs", desc: "Living brand guides that integrate with your AI agents." }
        ],
        // Final CTA
        finalTitle1: "YOUR BRAND",
        finalTitleHighlight: "WILL NO LONGER",
        finalTitle2: "BE MUTE",
        finalBadge: "Limited Capacity Protocol",
        finalBtn: "Start Audit",
        finalBg: "BRANDING",
        painQuote: "IDENTITY IS THE ULTIMATE DIFFERENTIATOR IN THE DARK.",
        priceValue: "$1,899"
      },
      service3: {
        subtitle: "Cognitive Automation",
        desc: "Your best employees are now digital. Autonomous agents that capture, qualify, and close leads while you scale.",
        // Hero
        heroTitle1: "GIVE YOUR",
        heroTitleHighlight: "BUSINESS",
        heroTitle2: "A BRAIN",
        heroCta: "Build My Kraken",
        heroShowreel: "View Protocol",
        // Pain
        painTitle1: "THE COST",
        painTitleHighlight: "OF",
        painTitle2: "REPETITION.",
        painItems: [
          "Inflated operational costs for manual tasks.",
          "Lead leakage due to slow response times.",
          "Human talent wasted on mechanical tasks.",
          "Inability to scale without hiring more staff."
        ],
        painScanLabel: "SCANNING INEFFICIENCIES",
        // Stack
        stackLabel: "Investment Protocol",
        stackTitle1: "INVESTMENT IN",
        stackTitleHighlight: "AUTONOMY",
        stackTitle2: "",
        offerLabel: "Total Value Locked",
        offerTitle: "OFFER",
        offerHighlight: "KRAKEN CORE",
        priceFrom: "From",
        priceConsult: "Consult",
        // Specific content
        stack: [
          { item: "24/7 Lead Capture Agent Deployment", value: "$2,200" },
          { item: "AI Brain Integration with CRM", value: "$1,500" },
          { item: "Model Training with Local Data", value: "$1,800" },
          { item: "Real-Time Performance Dashboard", value: "$900" }
        ],
        promo: { 
          badge: "PROMO",
          title: "AGENT",
          highlight: "EFFICIENCY", 
          body: "We will build a lead capture agent for your business and integrate it into your website free for the first month.", 
          btn: "Deploy Agent" 
        },
        bonus: {
          badge: "Exclusive",
          title1: "SECURITY",
          titleHighlight: "AUDIT",
          title2: "",
          desc: "Terminal Prime Technical Support for 3 months: Human monitoring of your agents to ensure perfection.",
          value: "Valued at $1,200 USD"
        },
        guarantee: {
          badge: "Insomnia Guarantee",
          title1: "CONCRETE",
          titleHighlight: "OPTIMIZATION",
          title2: "",
          desc: "Efficiency Guarantee: If the agent doesn't reduce your response time by 90%, the deployment is on us.",
          commitment: "Guaranteed ROI"
        },
        // Features
        feats: [
          { title: "24/7 Ops", desc: "Mission execution without rest or constant supervision." },
          { title: "Native Tools", desc: "Access to CRM, Gmail, WhatsApp and internal databases." },
          { title: "Deep Logic", desc: "Autonomous reasoning architectures for complex tasks." },
          { title: "Self-Evolution", desc: "Agents that learn from every interaction and human feedback." }
        ],
        // Final CTA
        finalTitle1: "THE FUTURE",
        finalTitleHighlight: "NEVER",
        finalTitle2: "SLEEPS",
        finalBadge: "Autonomous Labor Deployment",
        finalBtn: "Start Protocol",
        finalBg: "KRAKEN",
        painQuote: "CHAOS IS THE MOST EXPENSIVE TAX YOUR BUSINESS PAYS.",
        priceValue: "$3,499"
      },
      service4: {
        subtitle: "Terminal Infrastructure",
        desc: "Websites that don't just load, they convert. High-performance infrastructure designed for the AI era.",
        // Hero
        heroTitle1: "HIGH-PERF",
        heroTitleHighlight: "DIGITAL",
        heroTitle2: "TERMINALS",
        heroCta: "Deploy Now",
        heroShowreel: "View Structure",
        // Pain
        painTitle1: "A DEAD WEB",
        painTitleHighlight: "IS A DEAD",
        painTitle2: "BUSINESS.",
        painItems: [
          "Slow loading speeds that kill trust.",
          "Obsolete interfaces that don't convert.",
          "Lack of integration with modern AI systems.",
          "Poor performance in search engine ranking."
        ],
        painScanLabel: "NODE AUDIT",
        // Stack
        stackLabel: "Infrastructure Protocol",
        stackTitle1: "SYSTEM",
        stackTitleHighlight: "UPGRADE",
        stackTitle2: "",
        offerLabel: "Total Value Locked",
        offerTitle: "OFFER",
        offerHighlight: "CORE ARCHITECT",
        priceFrom: "From",
        priceConsult: "Consult",
        // Specific content
        stack: [
          { item: "High-Performance Next.js Architecture", value: "$4,500" },
          { item: "Edge Computing Speed Optimization", value: "$1,200" },
          { item: "Secure Payment System Integration", value: "$1,000" },
          { item: "Technical SEO & Conversion Structure", value: "$1,500" }
        ],
        promo: { 
          badge: "PROMO",
          title: "WEB",
          highlight: "PERFORMANCE", 
          body: "Migrate your current site to our high-performance infrastructure and get 30% off dev costs.", 
          btn: "Upgrade Now" 
        },
        bonus: {
          badge: "Exclusive",
          title1: "CLOUD",
          titleHighlight: "PREMIUM",
          title2: "",
          desc: "1 year of free 'Insomnia Cloud' Premium Hosting and Military-Grade SSL certificate.",
          value: "Valued at $1,100 USD"
        },
        guarantee: {
          badge: "Insomnia Guarantee",
          title1: "SPEED",
          titleHighlight: "ABSOLUTE",
          title2: "",
          desc: "Speed Guarantee: If your new site doesn't exceed 95 points in PageSpeed Insights, you don't pay the final balance.",
          commitment: "Instant Loading"
        },
        // Features
        feats: [
          { title: "Edge Perf", desc: "Global edge deployment for minimum latency." },
          { title: "Predictive UI", desc: "Interfaces that anticipate user navigation." },
          { title: "Secure Ops", desc: "Security layers and encryption against external attacks." },
          { title: "Scalable", desc: "Modular code prepared for millions of users." }
        ],
        // Final CTA
        finalTitle1: "UPGRADE",
        finalTitleHighlight: "YOUR",
        finalTitle2: "INFRASTRUCTURE",
        finalBadge: "Terminal Access: Protocol Open",
        finalBtn: "Reserve Deployment",
        finalBg: "TERMINAL",
        painQuote: "YOUR WEBSITE SHOULD BE YOUR BEST SALESPERSON, NOT YOUR BIGGEST EXPENSE.",
        priceValue: "$4,500"
      },
      service5: {
        subtitle: "Algorithm Domination",
        desc: "We don't publish, we dominate. Viral content strategies, hook engineering, and community management that turn followers into assets.",
        // Hero
        heroTitle1: "DOMINATE THE",
        heroTitleHighlight: "SOCIAL",
        heroTitle2: "ALGORITHM",
        heroCta: "Activate Domain",
        heroShowreel: "View Virality",
        // Pain
        painTitle1: "ORGANIC REACH",
        painTitleHighlight: "IS NOT",
        painTitle2: "LUCK.",
        painItems: [
          "Low engagement and lack of real growth.",
          "Over-reliance on paid advertising.",
          "Content ignored due to lack of effective hooks.",
          "Inactive communities and lack of social conversion."
        ],
        painScanLabel: "SOCIAL SCANNER",
        // Stack
        stackLabel: "Viral Protocol",
        stackTitle1: "ALGORITHMIC",
        stackTitleHighlight: "STRATEGY",
        stackTitle2: "",
        offerLabel: "Total Value Locked",
        offerTitle: "OFFER",
        offerHighlight: "VIRAL GROWTH",
        priceFrom: "From",
        priceConsult: "Consult",
        // Specific content
        stack: [
          { item: "Algorithmic Virality Strategy", value: "$1,800" },
          { item: "Psychological Hook Design", value: "$1,200" },
          { item: "Proactive Community Management", value: "$1,500" },
          { item: "IA-Powered Trend Analysis", value: "$900" }
        ],
        promo: { 
          badge: "PROMO",
          title: "SOCIAL",
          highlight: "VIRAL", 
          body: "We will design your next 30-day campaign with IA-validated hooks to triple your organic reach.", 
          btn: "Dominate Algorithm" 
        },
        bonus: {
          badge: "Exclusive",
          title1: "HOOK",
          titleHighlight: "VAULT",
          title2: "",
          desc: "Receive a 'Vault' of 100 hook templates that have generated millions of views.",
          value: "Valued at $450 USD"
        },
        guarantee: {
          badge: "Insomnia Guarantee",
          title1: "MULTIPLIED",
          titleHighlight: "REACH",
          title2: "",
          desc: "If we don't increase your impressions by 50% in the first cycle, we refine the strategy for free.",
          commitment: "Social Growth"
        },
        // Features
        feats: [
          { title: "Hook Design", desc: "First 3-second engineering for maximum retention." },
          { title: "Trend Scan", desc: "Trend monitoring via AI crawlers." },
          { title: "Community", desc: "Proactive management that builds loyalty and fan-support." },
          { title: "Viral Loops", desc: "Sharing mechanisms integrated into every piece." }
        ],
        // Final CTA
        finalTitle1: "START",
        finalTitleHighlight: "YOUR",
        finalTitle2: "DOMINION",
        finalBadge: "Social Siege: Active Transmission",
        finalBtn: "Expansion Protocol",
        finalBg: "VIRAL",
        painQuote: "ARE YOU POSTING OR ARE YOU GROWING?",
        priceValue: "$1,200"
      },
      service6: {
        subtitle: "Operational Excellence",
        desc: "Systems that work while you create. We automate your heaviest workflows so human error is a thing of the past.",
        // Hero
        heroTitle1: "OPERATIONAL",
        heroTitleHighlight: "EFFICIENCY",
        heroTitle2: "MACHINES",
        heroCta: "Maximize Performance",
        heroShowreel: "View Flows",
        // Pain
        painTitle1: "INEFFICIENCY",
        painTitleHighlight: "IS THE MOST",
        painTitle2: "EXPENSIVE TAX.",
        painItems: [
          "Human talent wasted on repetitive tasks.",
          "Process errors causing loss of money.",
          "Information silos and lack of communication.",
          "Inability to scale without increasing chaos."
        ],
        painScanLabel: "AUDIT SYSTEM",
        // Stack
        stackLabel: "Efficiency Protocol",
        stackTitle1: "CONCRETE",
        stackTitleHighlight: "OPTIMIZATION",
        stackTitle2: "",
        offerLabel: "Total Value Locked",
        offerTitle: "OFFER",
        offerHighlight: "AUTO-SYSTEM",
        priceFrom: "From",
        priceConsult: "Consult",
        // Specific content
        stack: [
          { item: "Process Mapping and Optimization", value: "$2,500" },
          { item: "No-Code/Code Ecosystem Integration", value: "$3,500" },
          { item: "Operational Backend Automation", value: "$4,000" },
          { item: "Alert and Monitoring Systems", value: "$1,200" }
        ],
        promo: { 
          badge: "PROMO",
          title: "AUTO",
          highlight: "EFFICIENCY", 
          body: "We will perform a heat map of your operational inefficiencies and deliver the first automated flow at no cost.", 
          btn: "Automate Now" 
        },
        bonus: {
          badge: "Exclusive",
          title1: "MONITORING",
          titleHighlight: "MONTH",
          title2: "",
          desc: "1 Month of preventive maintenance and free flow optimization.",
          value: "Valued at $950 USD"
        },
        guarantee: {
          badge: "Insomnia Guarantee",
          title1: "GUARANTEED",
          titleHighlight: "SAVINGS",
          title2: "",
          desc: "We guarantee a minimum savings of 10 hours per week in your operational load after implementation.",
          commitment: "Operational ROI"
        },
        // Features
        feats: [
          { title: "Flow Engine", desc: "Pipeline design that connects all your tools." },
          { title: "Zero Error", desc: "Drastic minimization of human error in data capture." },
          { title: "Dashboard", desc: "Real-time visualization of your process health." },
          { title: "Agile Scale", desc: "Ability to increase volume without increasing headcount." }
        ],
        // Final CTA
        finalTitle1: "MAXIMIZE",
        finalTitleHighlight: "YOUR",
        finalTitle2: "PERFORMANCE",
        finalBadge: "Operational Protocol: System Ready",
        finalBtn: "Start Audit",
        finalBg: "EFFICIENCY",
        painQuote: "CHAOS IS THE MOST EXPENSIVE TAX.",
        priceValue: "$2,499"
      },
      service7: {
        subtitle: "Narrative Engineering",
        desc: "Words that sell, stories that last. We elevate your communication through deep storytelling and high-level strategic writing.",
        // Hero
        heroTitle1: "PREMIUM",
        heroTitleHighlight: "NARRATIVE",
        heroTitle2: "ENGINEERING",
        heroCta: "Tell My Story",
        heroShowreel: "View Narratives",
        // Pain
        painTitle1: "IF YOUR MESSAGE",
        painTitleHighlight: "DOESN'T RESONATE,",
        painTitle2: "YOU'RE NOISE.",
        painItems: [
          "Boring and soul-less corporate texts.",
          "Lack of emotional connection with the audience.",
          "Confusing and weak value propositions.",
          "Inability to tell a story that sells."
        ],
        painScanLabel: "DISCOURSE ANALYSIS",
        // Stack
        stackLabel: "Narrative Protocol",
        stackTitle1: "BRAND",
        stackTitleHighlight: "ARCHITECTURE",
        stackTitle2: "",
        offerLabel: "Total Value Locked",
        offerTitle: "OFFER",
        offerHighlight: "STORY ARCHITECT",
        priceFrom: "From",
        priceConsult: "Consult",
        // Specific content
        stack: [
          { item: "Brand Storytelling Architecture", value: "$2,200" },
          { item: "High-Conversion Copywriting", value: "$1,800" },
          { item: "Whitepaper and Report Creation", value: "$1,500" },
          { item: "Editorial Communication Strategy", value: "$1,200" }
        ],
        promo: { 
          badge: "PROMO",
          title: "STORY",
          highlight: "NARRATIVE", 
          body: "We will write your 'Brand Story' or a set of 5 sales emails using our narrative persuasion methodology for free.", 
          btn: "Start Now" 
        },
        bonus: {
          badge: "Exclusive",
          title1: "TONE OF",
          titleHighlight: "VOICE GUIDE",
          title2: "",
          desc: "Tone of Voice Guide so your entire team writes with the same authority.",
          value: "Valued at $550 USD"
        },
        guarantee: {
          badge: "Insomnia Guarantee",
          title1: "DEEP",
          titleHighlight: "CONNECTION",
          title2: "",
          desc: "If our texts don't achieve a deeper connection with your audience (measurable), we rewrite them.",
          commitment: "Ethical Persuasion"
        },
        // Features
        feats: [
          { title: "Myth Design", desc: "Creation of the mystique and values that surround your brand." },
          { title: "NLP Optimized", desc: "Texts designed to resonate with psychological hooks." },
          { title: "Ghostwriting", desc: "Elevation of personal authority of CEOs and founders." },
          { title: "Visual Copy", desc: "Perfect integration between visual design and written word." }
        ],
        // Final CTA
        finalTitle1: "MAKE YOUR",
        finalTitleHighlight: "MESSAGE",
        finalTitle2: "IMMORTAL",
        finalBadge: "Narrative Siege: Mission Open",
        finalBtn: "Transmit Story",
        finalBg: "NARRATIVE",
        painQuote: "IF YOUR MESSAGE DOESN'T RESONATE, YOU ARE SIMPLY NOISE.",
        priceValue: "$1,200"
      }
    },

    // ----------------------------------------------------------
    // Chat
    // ----------------------------------------------------------
    chat: {
      welcome: "Hi! I'm the Insomnia Studio assistant. How can I help you today?",
      placeholder: "What's on your mind?",
      submit: "Send",
      processing: "Processing idea...",
      error: "It seems my connection is a bit unstable. Can we try again?",
      errorGeneral: "Sorry, there was an error in the connection.",
      quickActions: {
        idea: "Give me a viral idea",
        automation: "How do I automate my business?",
        branding: "Help with my Branding"
      },
      quickActionsPrompts: {
        idea: "Give me a viral idea for my content",
        automation: "How can I automate my business with AI?",
        branding: "How can you help me with my brand's branding?"
      },
      systemInstruction: "You are the assistant of Insomnia Studio, a leading agency in AI, Creativity, and Automation. Your tone is professional, inspiring, direct, and friendly. Use simple but elegant language (Apple style). Your brand color is Yellow #fcf200."
    },



    // ----------------------------------------------------------
    // Audit
    // ----------------------------------------------------------
    audit: {
      badge: "AI AUDIT PROTOCOL",
      systemVersion: "v4.2.0-CORE",
      prevBtn: "BACK",
      nextBtn: "NEXT",
      submitBtn: "TRANSMIT DATA",
      successTitle: "MISSION RECEIVED",
      successMsg: "Your data is being processed by our systems. The opportunity to dominate your market has begun.",
      successCta: "SCHEDULE RESULTS SESSION",
      steps: [
        { 
          title: "Identity", 
          description: "Establishing secure connection. Identify yourself.",
          label1: "Name / Alias",
          placeholder1: "e.g., John Matrix",
          label2: "LinkedIn Profile / Company URL",
          placeholder2: "linkedin.com/in/name"
        },
        { 
          title: "Scale", 
          description: "What is your current operation volume?",
          options: ["Solo / < 5 People", "Team 5 - 20", "Company 20+"]
        },
        { 
          title: "Maturity", 
          description: "How integrated is AI in your workflow today?",
          options: ["Initial Level (No automation)", "Mid Level (GPTs/Claude usage)", "Advanced Level (APIs/Agents)", "Expert (Looking to optimize)"]
        },
        { 
          title: "Investment", 
          description: "Projected monthly investment range for AI.",
          options: ["<$500 USD", "$500 - $2,000 USD", "$2,000+ USD"]
        },
        { 
          title: "Challenge", 
          description: "What is your main bottleneck?",
          options: ["Content Production (Scale)", "Operations Automation", "Customer Service (IA Agents)", "Sales Closing / Prospecting"]
        }
      ]
    },

    // ----------------------------------------------------------
    // Portfolio
    // ----------------------------------------------------------
    portfolio: {
      badge: "/ Work Archive",
      title: "Records",
      highlight: "Successful",
      subtitle: "Explore completed missions where human-machine symbiosis achieved unprecedented results.",
      stat1: "42 Active Projects",
      stat2: "98% AI Efficiency",
      stat3: "$8.2M Operational Savings",
      ctaTitle: "Ready to be the next success case?",
      ctaSubtitle: "Our deployment capacity is limited to ensure excellence in every mission. We only accept 2 new projects per quarter.",
      ctaBtn: "Book Consultancy",
    },

    // ----------------------------------------------------------
    // Privacy Policy
    // ----------------------------------------------------------
    privacy: {
      badge: "Legal Document",
      title1: "Privacy",
      title2: "Notice",
      lastUpdated: "Last updated:",
      intro: "In compliance with the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP) and its Regulations, Insomnia AI Studio makes this Privacy Notice available to you.",
    },

    // ----------------------------------------------------------
    // Terms & Conditions
    // ----------------------------------------------------------
    terms: {
      badge: "Legal Document",
      title1: "Terms &",
      title2: "Conditions",
      lastUpdated: "Last updated:",
      intro: "Use of the services, platforms and website of Insomnia AI Studio implies full and unconditional acceptance of these Terms and Conditions. Read them carefully before hiring or using our services.",
    },
    // ----------------------------------------------------------
    // Common Elements
    // ----------------------------------------------------------
    common: {
      whatsappMsg: "Hello Insomnia, I'm requesting strategic information about your AI protocols.",
      whatsappCta: "Direct Connection"
    },
    successBooking: {
      badge: "SESSION CONFIRMED",
      title: "SESSION",
      highlight: "CONFIRMED",
      subtitle: "Your strategic diagnosis has been successfully scheduled.",
      checkEmail: "Check your inbox for connection details.",
      nextSteps: "NEXT STEPS",
      step1: "Add to calendar",
      step2: "Prepare questions",
      step3: "Explore portfolio",
      ctaHome: "BACK TO HOME",
      ctaPortfolio: "VIEW PORTFOLIO",
      ctaCalendar: "ADD TO GOOGLE CALENDAR",
      labelMission: "Mission",
      labelDate: "Date",
      labelTime: "Time",
    },
    roi: {
      title: "Kraken ROI Calculator",
      monthlyOpEx: "Monthly Operational Expense (USD)",
      efficiencyGain: "Efficiency Gain (%)",
      investment: "Kraken Investment (USD)",
      yearlySavings: "Estimated Yearly Savings",
      breakEven: "Break-even Point",
      threeYearROI: "3-Year ROI",
      months: "months",
      cta: "Schedule Strategy Session",
      benchmarks: {
        title: "Industry Benchmarks",
        standard: "Standard Efficiency: 15-20%",
        kraken: "Kraken Core: 60-85%"
      },
      summary: {
        title: "Executive Summary",
        template: "In just {months} months, your investment pays for itself. You are projecting a {return} return over the next 3 years by liberating your human capital from repetitive labor."
      },
      whatsappMessage: "Hi! I just calculated my ROI with Kraken and here are the results:\n- Yearly Savings: {yearlySavings}\n- Break-even: {breakEven} months\n- 3-Year ROI: {roi}\nI want to request my audit!",
      disclaimer: "Based on average industry benchmarks. Actual results may vary depending on the final implementation."
    },
    contact: {
      badge: "Command Center / Contact",
      title1: "START THE",
      title2: "PROTOCOL",
      subtitle: "You're one connection away from transforming your operational reality. Deploy your message.",
      infoTitle: "Direct Channels",
      infoMail: "Email Address",
      infoPhone: "Direct WhatsApp",
      infoLocation: "Location",
      commitmentsTitle: "Our Commitments",
      commitment1: "Technical response in less than 12 hours.",
      commitment2: "Initial architecture diagnosis at no cost.",
      commitment3: "Absolute confidentiality and data security.",
      scheduleBtn: "Schedule Meeting",
      whatsappMsg: "Hi, I want to schedule a strategy session for my business."
    },
    notfound: {
      badge: "Error 404 // Nav Protocol Interrupted",
      title1: "PAGE",
      highlight: "NOT FOUND",
      title2: "",
      body: "The requested route was not found in our neural database or has been encrypted. Please return to the command center.",
      cta: "BACK TO HOME"
    }
  },
};

export type TranslationType = typeof translations.es;
export type AnyTranslations = TranslationType;
