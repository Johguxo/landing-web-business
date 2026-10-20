/**
 * Configuración central del sitio.
 * Todo lo que necesites cambiar (nombre, contacto, textos, analítica) está aquí.
 * Los valores entre corchetes [ ] son marcadores pendientes: reemplázalos por datos reales.
 */

const name = "LinkUs";

export const site = {
  /** Nombre comercial. Se usa en el logo, títulos, textos y la imagen para redes. */
  name,
  /** Subtítulo de marca: acompaña al nombre en el footer, el título de la página y la imagen para redes. */
  tagline: "Soluciones digitales",
  /** Razón social que aparece en el footer. */
  legalName: name,
  /** RUC (opcional). Déjalo vacío para no mostrarlo. */
  ruc: "",
  city: "Lima, Perú",

  /**
   * Dominio final, sin barra al final. Se usa para el sitemap, la URL canónica y Open Graph.
   * Debe ser una URL válida.
   */
  url: "https://www.linkus.pe",

  contact: {
    email: "linkusempresarial@gmail.com",
    /** Número de WhatsApp con código de país, solo dígitos. Ej: 51987654321 */
    whatsapp: "51954604517",
    /** Mensaje que aparece escrito al abrir WhatsApp. */
    whatsappMessage: `Hola, vi la web de ${name} y quiero agendar la llamada de 30 minutos para descubrir qué automatizar primero.`,
    /**
     * Enlace de tu evento de Calendly (ej. https://calendly.com/tu-usuario/diagnostico-30-min).
     * Si lo dejas vacío, la sección final muestra solo el formulario, WhatsApp y correo.
     */
    calendlyUrl: "",
    /** Página de empresa en LinkedIn. Vacío = no se muestra. */
    linkedin: "",
  },

  seo: {
    title: `${name} | Soluciones digitales y automatización de procesos`,
    description:
      "Automatizamos y conectamos ventas, inventario, compras y finanzas con las herramientas que ya usas. Descubre en 30 minutos qué automatizar primero.",
    /** Frase de valor bajo el logo en la imagen para compartir (og-image.png). Una línea corta. */
    ogValue: "Automatizamos y conectamos tu operación",
    /** Dominio que aparece al pie de la imagen para compartir. */
    ogDomain: "linkus.pe",
    /** Texto alternativo de la imagen para compartir. */
    ogImageAlt: `Logo de ${name}: soluciones digitales para automatizar y conectar tu operación`,
    /**
     * Verificación de Google Search Console (opcional): el código del método "Etiqueta HTML",
     * solo el valor de content="...". Vacío = no se agrega.
     */
    googleVerification: "",
  },

  /**
   * Analítica. Desactivada mientras el valor esté vacío.
   * GA4: ID de medición, ej. "G-XXXXXXXXXX". Meta Pixel: ID numérico, ej. "123456789012345".
   */
  analytics: {
    ga4Id: "",
    metaPixelId: "",
  },

  /* ------------------------------------------------------------------ */
  /* Textos de la página                                                 */
  /* ------------------------------------------------------------------ */

  cta: {
    /** Botón corto del header (debe caber en celular). */
    header: "Agendar 30 min",
    /** Botón principal en el resto de la página: orientado al beneficio. */
    primary: "Descubre qué automatizar primero",
    /** Línea bajo los botones principales. */
    note: "30 min · Gratis · Sin compromiso",
  },

  nav: [
    { label: "Problemas", href: "#problemas" },
    { label: "Qué hacemos", href: "#que-hacemos" },
    { label: "Cómo trabajamos", href: "#como-trabajamos" },
    { label: "Para quién", href: "#para-quien" },
  ],

  hero: {
    title: "Tu empresa corre en Excel y WhatsApp. Hagamos que corra sola.",
    subtitle:
      "Automatizamos y conectamos tus procesos de ventas, inventario, compras y finanzas, para que la información fluya sola y tú tengas el control.",
    secondary: "Ver qué automatizamos",
  },

  problems: {
    title: "¿Tu empresa también funciona así?",
    intro:
      "Marca los que reconozcas. Ninguno se arregla contratando más gente para pasar datos de un lado a otro.",
    /** Mensajes del contador del checklist. {n} se reemplaza por la cantidad marcada. */
    counterEmpty: "Marca los que te pasen y te decimos por dónde empezar.",
    counterSome: "Marcaste {n} de 6. Eso es justo lo que revisamos en la llamada de 30 minutos.",
    items: [
      {
        icon: "boxes",
        title: "El inventario no cuadra",
        text: "El sistema dice una cosa, el almacén otra y nadie sabe cuál es la real hasta que falta un producto.",
      },
      {
        icon: "chat",
        title: "Los pedidos llegan por WhatsApp",
        text: "Cada vendedor anota a su manera. Los pedidos se pierden entre mensajes y audios, y nadie ve el total del día.",
      },
      {
        icon: "document",
        title: "Las cotizaciones se arman a mano",
        text: "Copiar precios, revisar stock y armar el PDF toma horas. El cliente espera y a veces compra a otro.",
      },
      {
        icon: "chart",
        title: "Los reportes tardan días",
        text: "Para saber cuánto vendiste o cuánto ganaste alguien tiene que juntar varios Excel. Cuando llega el dato, ya es tarde.",
      },
      {
        icon: "wallet",
        title: "Las cobranzas están desordenadas",
        text: "No tienes claro quién te debe, cuánto ni desde cuándo. El seguimiento depende de la memoria de una persona.",
      },
      {
        icon: "layers",
        title: "“Tenemos ERP, pero seguimos en Excel”",
        text: "Pagaste un sistema que nadie usa completo. Los datos se exportan, se arreglan en Excel y se vuelven a cargar.",
      },
    ],
  },

  /** Antes → Después: el flujo actual frente al flujo conectado. */
  beforeAfter: {
    title: "Así cambia tu operación",
    intro: "Hoy la información salta de persona en persona y de archivo en archivo. Después, cada paso alimenta al siguiente.",
    before: {
      label: "Antes",
      flow: ["Excel", "WhatsApp", "Vendedor", "Almacén", "Contador", "Excel"],
      points: ["Información duplicada", "Errores al copiar datos", "Trabajo manual", "Información atrasada"],
    },
    after: {
      label: "Después",
      flow: ["Cliente", "Venta", "Inventario", "Despacho", "Facturación", "Dashboard"],
      points: ["Información conectada", "Tareas automatizadas", "Trazabilidad de cada pedido", "Indicadores en tiempo real"],
    },
  },

  /** Qué podemos automatizar, por área. */
  services: {
    title: "Convertimos procesos manuales en operaciones digitales",
    intro: "Algunos de los procesos que automatizamos y conectamos:",
    areas: [
      { icon: "tag", title: "Ventas", items: ["Cotizaciones automáticas", "Seguimiento de oportunidades", "Pedidos desde WhatsApp"] },
      { icon: "boxes", title: "Inventario", items: ["Stock en tiempo real", "Alertas de reposición", "Inventario por almacén"] },
      { icon: "cart", title: "Compras", items: ["Solicitudes de compra", "Aprobaciones", "Seguimiento de proveedores"] },
      { icon: "wallet", title: "Finanzas", items: ["Cobranzas", "Conciliaciones", "Reportes financieros"] },
      { icon: "chart", title: "Datos", items: ["Dashboards en Power BI", "KPIs", "Reportes automáticos"] },
      {
        icon: "cpu",
        title: "IA",
        items: ["Clasificación de documentos", "Asistentes internos", "Análisis de información", "Automatización de tareas"],
      },
    ],
  },

  process: {
    title: "Cómo lo hacemos",
    intro: "Trabajamos con lo que ya tienes y solo agregamos herramientas cuando el ahorro lo justifica.",
    steps: [
      {
        title: "Diagnóstico",
        text: "Revisamos contigo cómo fluyen hoy los pedidos, el inventario, las compras y el dinero. Identificamos dónde se pierde tiempo y dónde se pierde control.",
        result: "Mapa de tu operación y lista priorizada de mejoras.",
      },
      {
        title: "Primera automatización",
        text: "Empezamos por el proceso que más duele y que se resuelve más rápido. Ves resultados antes de comprometer un proyecto grande.",
        result: "Un proceso funcionando sin trabajo manual.",
      },
      {
        title: "Integración",
        text: "Conectamos ERP, CRM, WhatsApp Business, Power BI y automatizaciones para que la información pase de un área a otra sin copiar y pegar.",
        result: "Ventas, inventario, compras y finanzas en un mismo flujo.",
      },
      {
        title: "Mejora continua",
        text: "Ajustamos lo que cambia en tu negocio, capacitamos a tu equipo y medimos el impacto. Tú decides si continuar cada mes.",
        result: "Soporte, mejoras e indicadores al día.",
      },
    ],
  },

  /** Por qué nosotros + tecnologías. */
  why: {
    title: "Por qué trabajar con nosotros",
    cards: [
      {
        icon: "target",
        title: "Enfocados en resultados",
        text: "No automatizamos por automatizar. Priorizamos los procesos con impacto económico.",
      },
      {
        icon: "plug",
        title: "Independientes de tecnología",
        text: "Elegimos la herramienta según el problema, no al revés.",
      },
      {
        icon: "flag",
        title: "Empezamos pequeño",
        text: "Primero demostramos valor con una mejora puntual.",
      },
      {
        icon: "coins",
        title: "Medimos el retorno",
        text: "Cada proyecto tiene indicadores, ahorro estimado y periodo de recuperación.",
      },
    ],
    techTitle: "La tecnología se adapta a tu negocio. No al revés.",
    techText:
      "No estamos casados con ninguna tecnología. Trabajamos con el ERP, CRM y herramientas que ya tienes. Si necesitas algo nuevo, elegimos la solución que tenga más sentido para tu operación.",
    /** Herramientas con las que trabajas. Se muestran como nombres, sin logos. */
    tech: ["Odoo", "Power BI", "Power Automate", "n8n", "HubSpot", "WhatsApp Business", "APIs", "IA"],
  },

  roi: {
    title: "No te vendemos horas. Te mostramos cuánto puedes ahorrar.",
    text: "Cada propuesta llega con el ahorro estimado y el tiempo de recuperación de cada mejora, antes de que inviertas un sol. Si los números no cierran, te lo decimos.",
    docTitle: "Así calculamos tu retorno",
    docLabel: "Ejemplo ilustrativo",
    /** Supuestos del ejemplo, visibles para que el cálculo sea transparente. */
    assumptions: "Empresa ficticia de 40 personas. Costo por hora de trabajo: S/ 25.",
    formulas: ["Ahorro mensual = horas liberadas × costo por hora", "Recuperación = inversión ÷ ahorro mensual"],
    caption:
      "Ejemplo con cifras ilustrativas para mostrar el método: no corresponde a un cliente real. En tu propuesta, los valores salen de los datos de tu empresa.",
    totalLabel: "Total",
    columns: ["Proceso", "Horas al mes hoy", "Horas al mes después", "Ahorro mensual", "Inversión", "Recuperación"],
    rows: [
      ["Armado de cotizaciones", "60 h", "12 h", "S/ 1,200", "S/ 4,800", "4 meses"],
      ["Registro de pedidos de WhatsApp", "80 h", "20 h", "S/ 1,500", "S/ 7,500", "5 meses"],
      ["Reporte semanal de ventas", "24 h", "2 h", "S/ 550", "S/ 1,650", "3 meses"],
      ["Seguimiento de cobranzas", "40 h", "12 h", "S/ 700", "S/ 4,200", "6 meses"],
    ],
    total: ["204 h", "46 h", "S/ 3,950", "S/ 18,150", "≈ 5 meses"],
  },

  audience: {
    title: "Para quién es",
    headline: "Para empresas que ya crecieron, pero todavía operan con Excel, WhatsApp y procesos desconectados.",
    sub: "Especialmente importadoras, distribuidoras, empresas industriales y servicios B2B.",
    notForTitle: "Probablemente no somos para ti si…",
    notFor: [
      "Buscas comprar un software y que alguien lo instale, sin revisar cómo trabajan.",
      "Tu equipo es de menos de 10 personas y todo pasa por una sola persona.",
      "Necesitas un desarrollo a medida desde cero.",
    ],
    sectors: [
      {
        icon: "ship",
        title: "Importadoras",
        text: "Costeo de importaciones, seguimiento de contenedores, listas de precios y stock por llegar.",
      },
      {
        icon: "truck",
        title: "Distribuidoras",
        text: "Pedidos de muchos clientes, rutas de despacho, stock en movimiento y cobranza a crédito.",
      },
      {
        icon: "factory",
        title: "Empresas industriales",
        text: "Órdenes de producción, consumo de insumos, compras a proveedores y costos reales por producto.",
      },
      {
        icon: "briefcase",
        title: "Servicios B2B",
        text: "Cotizaciones, contratos, horas del equipo, facturación recurrente y seguimiento de cobranzas.",
      },
    ],
  },

  /** Quiénes están detrás: los socios. Una consultoría se elige por las personas. */
  team: {
    title: "Quiénes están detrás",
    intro:
      "Dos socios con perfiles complementarios: uno viene de la operación y la gestión, el otro de la ingeniería y el software. Combinamos procesos, tecnología y gestión para que la automatización genere resultados medibles.",
    people: [
      {
        name: "Erick Villanueva",
        role: "Socio fundador · Procesos y negocio",
        credentials: "Ingeniero Mecánico · MBA",
        /** Ruta de la foto dentro de public/, ej. "/equipo/erick-villanueva.jpg" (cuadrada, 400×400 en .webp). Vacío = marcador. */
        photo: "/equipo/erick-villanueva.webp",
        bio: "Más de 9 años trabajando con empresas B2B e industriales, traduciendo necesidades operativas en soluciones de negocio. Se asegura de que cada automatización ataque un problema real y tenga un retorno medible.",
        /** Perfil de LinkedIn (opcional). Vacío = no se muestra. */
        linkedin: "https://www.linkedin.com/in/erickvillanuevaq/",
      },
      {
        name: "Johann Gonzales",
        role: "Socio fundador · Tecnología y software",
        credentials: "Ingeniero Mecatrónico · Senior Software Developer · Diplomado en Gerencia de TI",
        photo: "/equipo/johann-gonzales.webp",
        bio: "Más de 8 años construyendo software. Diseña las integraciones que conectan tu ERP, CRM, WhatsApp y Power BI, y aplica inteligencia artificial para automatizar tareas y sacar provecho de tu información, con la solidez de un desarrollo profesional y el criterio de gestión de TI.",
        linkedin: "https://www.linkedin.com/in/johann-gustavo-gonzales-inca-001a0b175/",
      },
    ],
  },

  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Tengo que cambiar mi ERP o comprar un sistema nuevo?",
        a: "No necesariamente. Primero sacamos provecho de lo que ya tienes: tu ERP, tus Excel, WhatsApp Business. Si hace falta algo nuevo, elegimos la herramienta según tu operación, no según una marca.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "La llamada de 30 minutos es gratis. Los proyectos se cotizan según su alcance, y cada propuesta llega con la inversión, el ahorro estimado y el tiempo de recuperación, para que decidas con números.",
      },
      {
        q: "¿Cuánto tiempo toma ver resultados?",
        a: "Empezamos por una automatización puntual para que veas resultados antes de comprometer un proyecto grande. El plazo concreto depende del proceso y te lo indicamos en la propuesta, antes de empezar.",
      },
      {
        q: "¿Qué pasa con la información de mi empresa?",
        a: "En la primera llamada no necesitamos acceso a tus sistemas: basta con que nos cuentes cómo trabajan. Si luego trabajamos juntos, acordamos por escrito cómo se maneja y protege tu información antes de empezar.",
      },
      {
        q: "Mi equipo no es técnico. ¿Igual funciona?",
        a: "Sí. Diseñamos los procesos junto con las personas que los usan y las capacitamos. La mejora continua incluye ajustes y soporte cuando algo cambia.",
      },
      {
        q: "¿Qué pasa después de la llamada?",
        a: "Si vemos que podemos ayudarte, te enviamos una propuesta con alcance, inversión y retorno estimado. Si no, te lo decimos, y te llevas igual las recomendaciones de la conversación.",
      },
    ],
  },

  /** CTA final: formulario de 3 campos que abre WhatsApp con el mensaje armado. */
  booking: {
    title: "¿Qué proceso de tu empresa debería automatizarse primero?",
    text: "En 30 minutos lo identificamos contigo. Sales con una idea clara de por dónde empezar, aunque no trabajemos juntos.",
    agendaTitle: "Qué pasa en esos 30 minutos",
    agenda: [
      { time: "Min 0–10", text: "Nos cuentas cómo fluyen hoy ventas, inventario, compras y finanzas." },
      { time: "Min 10–25", text: "Identificamos las dos o tres tareas manuales que más te cuestan." },
      { time: "Min 25–30", text: "Te decimos qué automatizar primero y si podemos ayudarte. Sin presión de venta." },
    ],
    form: {
      title: "Cuéntanos en 1 minuto",
      nameLabel: "Tu nombre",
      companyLabel: "Empresa",
      problemLabel: "¿Qué proceso te genera más problemas?",
      problemPlaceholder: "Ej.: los pedidos llegan por WhatsApp y se pierden…",
      submit: "Quiero descubrirlo",
      helper: "Se abrirá WhatsApp con tu mensaje listo para enviar.",
      /** Mensaje que se arma con los datos del formulario. */
      messageIntro: `Hola, vi la web de ${name} y quiero descubrir qué automatizar primero.`,
    },
    altTitle: "¿Prefieres escribir directo?",
    whatsappLabel: "WhatsApp",
    calendarTitle: "¿Prefieres elegir el horario tú mismo?",
    calendarLoading: "Cargando calendario…",
    calendarFallback: "Abrir el calendario en una pestaña nueva",
  },

  /** Página 404 (también la ven quienes lleguen con enlaces de la plataforma anterior no redirigidos). */
  notFound: {
    title: "Esta página ya no existe",
    text: `${name} evolucionó: ahora ayudamos a empresas en crecimiento a conectar y automatizar su operación.`,
    cta: "Ir al inicio",
  },

  /** Botón flotante de WhatsApp (aparece al bajar de la portada). */
  stickyCta: {
    whatsappLabel: "Escribir por WhatsApp",
  },
} as const;

/** Enlace de WhatsApp con mensaje prellenado. Si aún no hay número, abre WhatsApp para elegir contacto. */
export function whatsappHref(): string {
  const digits = site.contact.whatsapp.replace(/\D/g, "");
  const text = encodeURIComponent(site.contact.whatsappMessage);
  return digits ? `https://wa.me/${digits}?text=${text}` : `https://wa.me/?text=${text}`;
}

/** Número de WhatsApp legible, ej. "+51 954 604 517". */
export function whatsappDisplay(): string {
  const d = site.contact.whatsapp.replace(/\D/g, "");
  if (!d) return site.contact.whatsapp;
  const local = d.startsWith("51") ? d.slice(2) : d;
  return `+51 ${local.replace(/(\d{3})(?=\d)/g, "$1 ")}`;
}

export function mailtoHref(): string {
  const subject = encodeURIComponent(`Llamada de 30 minutos – ${site.name}`);
  return `mailto:${site.contact.email}?subject=${subject}`;
}
