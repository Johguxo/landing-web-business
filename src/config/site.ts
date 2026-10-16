/**
 * Configuración central del sitio.
 * Todo lo que necesites cambiar (nombre, contacto, textos, analítica) está aquí.
 * Los valores entre corchetes [ ] son marcadores pendientes: reemplázalos por datos reales.
 */

const name = "Operia";

export const site = {
  /** Nombre comercial. Se usa en el logo, títulos, textos y la imagen para redes. */
  name,
  /** Razón social que aparece en el footer. */
  legalName: "[RAZÓN SOCIAL S.A.C.]",
  /** RUC (opcional). Déjalo vacío para no mostrarlo. */
  ruc: "",
  city: "Lima, Perú",

  /**
   * Dominio final, sin barra al final. Se usa para el sitemap, la URL canónica y Open Graph.
   * Debe ser una URL válida; cámbiala por tu dominio real (ej. https://www.tuempresa.pe).
   */
  url: "https://tu-dominio.pe",

  contact: {
    email: "[TU CORREO]",
    /** Número de WhatsApp con código de país, solo dígitos. Ej: 51987654321 */
    whatsapp: "[TU NÚMERO]",
    /** Mensaje que aparece escrito al abrir WhatsApp. */
    whatsappMessage: `Hola, vi la web de ${name} y quiero agendar el diagnóstico gratuito de 30 minutos para mi empresa.`,
    /**
     * Enlace de tu evento de Calendly (ej. https://calendly.com/tu-usuario/diagnostico-30-min).
     * Si lo dejas vacío, la sección de agenda muestra solo WhatsApp y correo.
     */
    calendlyUrl: "",
  },

  seo: {
    title: `${name} | Transformación operativa para PYMES en Lima`,
    description:
      "Conectamos ventas, inventario, compras y finanzas con las herramientas que ya usas para eliminar trabajo manual. Agenda un diagnóstico gratuito de 30 min.",
    /** Texto corto que acompaña al nombre en la imagen para compartir (og-image.png). */
    ogTagline: "Tu empresa corre en Excel y WhatsApp. Hagamos que corra sola.",
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
    primary: "Agendar diagnóstico",
    primaryLong: "Agendar diagnóstico gratuito",
  },

  nav: [
    { label: "Problemas", href: "#problemas" },
    { label: "Cómo trabajamos", href: "#como-trabajamos" },
    { label: "Para quién", href: "#para-quien" },
  ],

  hero: {
    title: "Tu empresa corre en Excel y WhatsApp. Hagamos que corra sola.",
    subtitle:
      "Analizamos cómo opera tu empresa hoy y conectamos ventas, inventario, compras y finanzas con las herramientas que ya tienes o que de verdad necesitas. Menos trabajo manual, más control.",
    secondary: "Ver cómo trabajamos",
    /** Puntos de confianza bajo los botones. Solo hechos verificables. */
    trust: ["30 minutos, sin costo ni compromiso", "No vendemos software ni licencias", "Para empresas de 10 a 100 personas"],
    flowToday: ["Ventas", "WhatsApp", "Excel", "Almacén", "Contador"],
    flowIntegrated: ["Cotización", "Pedido", "Inventario", "Despacho", "Facturación"],
  },

  problems: {
    title: "¿Cuáles de estos pasan en tu empresa?",
    intro:
      "Marca los que reconozcas. Ninguno se arregla contratando más gente para pasar datos de un lado a otro.",
    /** Mensajes del contador del checklist. {n} se reemplaza por la cantidad marcada. */
    counterEmpty: "Marca los que te pasen para ver si el diagnóstico te sirve.",
    counterSome: "Marcaste {n} de 6. Justo eso es lo que revisamos en el diagnóstico gratuito.",
    counterCta: "Revisarlo en 30 minutos",
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

  process: {
    title: "Cómo trabajamos",
    intro:
      "No vendemos software. Trabajamos con lo que ya tienes y solo agregamos herramientas cuando el ahorro lo justifica.",
    steps: [
      {
        title: "Diagnóstico",
        text: "Revisamos contigo cómo fluyen hoy los pedidos, el inventario, las compras y el dinero. Identificamos dónde se pierde tiempo y dónde se pierde control.",
        result: "Mapa de tu operación y lista priorizada de mejoras.",
      },
      {
        title: "Automatización puntual",
        text: "Empezamos por el proceso que más duele y que se resuelve más rápido. Ves resultados antes de comprometer un proyecto grande.",
        result: "Un proceso funcionando sin trabajo manual.",
      },
      {
        title: "Operación integrada",
        text: "Conectamos ERP, CRM, WhatsApp Business, Power BI y automatizaciones para que la información pase de un área a otra sin copiar y pegar.",
        result: "Ventas, inventario, compras y finanzas en un mismo flujo.",
      },
      {
        title: "Acompañamiento mensual",
        text: "Ajustamos lo que cambia en tu negocio, capacitamos a tu equipo y medimos el impacto. Tú decides si continuar cada mes.",
        result: "Soporte, mejoras continuas e indicadores al día.",
      },
    ],
  },

  audience: {
    title: "Para quién es",
    size: "De 10 a 100 personas",
    sizeText:
      "Empresas que ya crecieron lo suficiente para que el desorden cueste dinero, pero que todavía dependen de que pocas personas sepan dónde está cada cosa.",
    notForTitle: "Probablemente no somos para ti si…",
    notFor: [
      "Buscas comprar un software y que alguien lo instale, sin revisar cómo trabajan.",
      "Tu equipo es de menos de 10 personas y todo pasa por una sola persona.",
      "Necesitas un desarrollo a medida desde cero.",
    ],
    sectorsTitle: "Rubros con los que trabajamos",
    sectors: [
      {
        icon: "truck",
        title: "Distribuidoras",
        text: "Pedidos de muchos clientes, rutas de despacho, stock en movimiento y cobranza a crédito.",
      },
      {
        icon: "ship",
        title: "Importadoras",
        text: "Costeo de importaciones, seguimiento de contenedores, listas de precios y stock por llegar.",
      },
      {
        icon: "factory",
        title: "Industria pequeña y mediana",
        text: "Órdenes de producción, consumo de insumos, compras a proveedores y costos reales por producto.",
      },
      {
        icon: "briefcase",
        title: "Servicios B2B",
        text: "Cotizaciones, contratos, horas del equipo, facturación recurrente y seguimiento de cobranzas.",
      },
    ],
  },

  roi: {
    title: "Cada propuesta llega con el ahorro estimado y el tiempo de recuperación",
    text: "Antes de que inviertas un sol, te mostramos cuántas horas y cuánto dinero libera cada mejora, y en cuántos meses se paga. Si los números no cierran, te lo decimos.",
    docTitle: "Propuesta de mejora operativa",
    docLabel: "Ejemplo de formato",
    caption: "Así se ve la propuesta que recibes. Los valores se calculan con los datos reales de tu empresa.",
    totalLabel: "Total",
    total: ["[X h]", "[X h]", "S/ [X]", "S/ [X]", "[X] meses"],
    columns: ["Proceso", "Horas al mes hoy", "Horas al mes después", "Ahorro mensual", "Inversión", "Recuperación"],
    rows: [
      ["Armado de cotizaciones", "[X h]", "[X h]", "S/ [X]", "S/ [X]", "[X] meses"],
      ["Registro de pedidos de WhatsApp", "[X h]", "[X h]", "S/ [X]", "S/ [X]", "[X] meses"],
      ["Reporte semanal de ventas", "[X h]", "[X h]", "S/ [X]", "S/ [X]", "[X] meses"],
      ["Seguimiento de cobranzas", "[X h]", "[X h]", "S/ [X]", "S/ [X]", "[X] meses"],
    ],
  },

  booking: {
    title: "Agenda tu diagnóstico gratuito de 30 minutos",
    text: "Una conversación directa sobre cómo opera tu empresa hoy. Sales con una idea clara de qué automatizar primero, aunque no trabajemos juntos.",
    agendaTitle: "Qué pasa en esos 30 minutos",
    agenda: [
      { time: "Min 0–10", text: "Nos cuentas cómo fluyen hoy ventas, inventario, compras y finanzas." },
      { time: "Min 10–25", text: "Identificamos las dos o tres tareas manuales que más te cuestan." },
      { time: "Min 25–30", text: "Te decimos qué automatizar primero y si podemos ayudarte. Sin presión de venta." },
    ],
    whatsappLabel: "Escríbenos por WhatsApp",
    emailLabel: "¿Prefieres correo? Escríbenos a",
    /** Tarjeta de contacto que se muestra cuando no hay enlace de Calendly. */
    contactTitle: "Coordina tu diagnóstico",
    contactText: "Escríbenos con el nombre de tu empresa y el mejor horario para ti. Te respondemos para confirmar la fecha.",
    calendarLoading: "Cargando calendario…",
    calendarFallback: "Abrir el calendario en una pestaña nueva",
  },
  /** Quién te atiende. Una consultoría se elige por las personas: completa con datos reales. */
  team: {
    title: "Quién te atiende",
    intro: "Hablas directamente con quien va a analizar tu operación, no con un vendedor.",
    people: [
      {
        name: "[TU NOMBRE]",
        role: "[TU CARGO], fundador de Operia",
        /** Ruta de la foto dentro de public/, ej. "/equipo/nombre.jpg" (cuadrada, mín. 400×400). Vacío = marcador. */
        photo: "",
        bio: "[2–3 LÍNEAS SOBRE TU EXPERIENCIA REAL: años en operaciones, sectores, herramientas que dominas]",
        /** Perfil de LinkedIn (opcional). Vacío = no se muestra. */
        linkedin: "",
      },
    ],
    principlesTitle: "Cómo trabajamos contigo",
    principles: [
      {
        icon: "scale",
        title: "Independientes de cualquier marca",
        text: "No vendemos software ni licencias. Recomendamos lo que conviene a tu operación, empezando por lo que ya pagas.",
      },
      {
        icon: "target",
        title: "Empezamos por algo pequeño",
        text: "Primero una mejora puntual con resultado visible. Recién después, si tiene sentido, un proyecto más grande.",
      },
      {
        icon: "coins",
        title: "Hablamos en soles y en horas",
        text: "Cada propuesta dice cuánto cuesta, cuánto ahorras y en cuántos meses se paga.",
      },
      {
        icon: "users",
        title: "Tu equipo se queda con el conocimiento",
        text: "Capacitamos a quienes usan los procesos todos los días para que no dependas de nosotros.",
      },
    ],
  },

  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Tengo que cambiar mi ERP o comprar un sistema nuevo?",
        a: "No necesariamente. Primero sacamos provecho de lo que ya tienes: tu ERP, tus Excel, WhatsApp Business. Solo recomendamos una herramienta nueva si el ahorro la justifica, y como no vendemos software, esa recomendación no depende de ninguna marca.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "El diagnóstico de 30 minutos es gratis. Los proyectos se cotizan según su alcance, y cada propuesta llega con la inversión, el ahorro estimado y el tiempo de recuperación, para que decidas con números.",
      },
      {
        q: "¿Cuánto tiempo toma ver resultados?",
        a: "Empezamos por una automatización puntual para que veas resultados antes de comprometer un proyecto grande. El plazo típico de esa primera mejora es de [PLAZO REAL, ej. 2 a 4 semanas].",
      },
      {
        q: "¿Qué pasa con la información de mi empresa?",
        a: "En la llamada de diagnóstico no necesitamos acceso a tus sistemas: basta con que nos cuentes cómo trabajan. Si luego trabajamos juntos, [CÓMO PROTEGES LA INFORMACIÓN, ej. firmamos un acuerdo de confidencialidad].",
      },
      {
        q: "Mi equipo no es técnico. ¿Igual funciona?",
        a: "Sí. Diseñamos los procesos junto con las personas que los usan y las capacitamos. El acompañamiento mensual incluye ajustes y soporte cuando algo cambia.",
      },
      {
        q: "¿Qué pasa después de la llamada?",
        a: "Si vemos que podemos ayudarte, te enviamos una propuesta con alcance, inversión y retorno estimado. Si no, te lo decimos, y te llevas igual las recomendaciones de la conversación.",
      },
    ],
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

export function mailtoHref(): string {
  const subject = encodeURIComponent(`Diagnóstico gratuito – ${site.name}`);
  return `mailto:${site.contact.email}?subject=${subject}`;
}
