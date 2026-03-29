export const WHATSAPP_URL = "WHATSAPP_URL";
export const NUMERO_WHATSAPP = "NUMERO_WHATSAPP";
export const ENLACE_GOOGLE_MAPS = "ENLACE_GOOGLE_MAPS";
export const ENLACE_GOOGLE_MAPS_EMBED = "ENLACE_GOOGLE_MAPS_EMBED";
export const ENLACE_GOOGLE_MAPS_EMBED_GENERICO =
  "https://www.google.com/maps?q=La%20Reja%20Moreno%20Buenos%20Aires&output=embed";

const MENSAJE_WHATSAPP_PREDETERMINADO =
  "Hola Guardog, quiero conocer más sobre la guardería canina.";

function obtenerNumeroNormalizado(numeroWhatsApp) {
  return numeroWhatsApp.replace(/\D/g, "");
}

function esPlaceholder(valor, placeholder) {
  return valor === placeholder;
}

export function construirEnlaceWhatsApp() {
  if (!esPlaceholder(WHATSAPP_URL, "WHATSAPP_URL")) {
    return WHATSAPP_URL;
  }

  const numeroNormalizado = obtenerNumeroNormalizado(NUMERO_WHATSAPP);
  const numeroFinal =
    numeroNormalizado.length > 0 ? numeroNormalizado : NUMERO_WHATSAPP;

  return `https://wa.me/${numeroFinal}?text=${encodeURIComponent(
    MENSAJE_WHATSAPP_PREDETERMINADO,
  )}`;
}

export const enlaceWhatsApp = construirEnlaceWhatsApp();

export const datosMarca = {
  nombre: "Guardog",
  rubro: "Guardería canina",
  ubicacion: "La Reja - Moreno",
  logo: "/logo-guardog.jpg",
  textoBaseIdentidad:
    "En Guardog cuidamos a los peludos hace más de 10 años.\n\nNuestro camino comenzó con el adiestramiento, y con el tiempo evolucionó hasta convertirnos en una guardería donde cada mascota encuentra compañía, seguridad y un hogar mientras su familia no está.\n\nEstamos presentes todo el año para brindarles cuidado real, atención y mucho cariño.\n\n¡Los esperamos!",
};

export const enlacesNavegacion = [
  { id: "inicio", etiqueta: "Inicio" },
  { id: "quienes-somos", etiqueta: "Quiénes somos" },
  { id: "beneficios", etiqueta: "Beneficios" },
  { id: "experiencia", etiqueta: "Experiencia" },
  { id: "requisitos", etiqueta: "Ingreso" },
  { id: "ubicacion", etiqueta: "Ubicación" },
  { id: "contacto", etiqueta: "Contacto" },
];

export const destacadosPortada = [
  "Cuidamos a los peludos como en casa",
  "Supervisión las 24 hs",
  "Espacios naturales",
  "Todo el año",
];

export const historiaMarca = [
  {
    titulo: "Más de 10 años acompañando familias",
    descripcion:
      "Nuestra experiencia nace del trabajo diario con mascotas y familias que buscan confianza, tranquilidad y una atención amorosa.",
  },
  {
    titulo: "Comenzamos desde el adiestramiento",
    descripcion:
      "Ese camino nos enseñó a comprender cada etapa y necesidad de los peludos, creando una base sólida de cuidado responsable.",
  },
  {
    titulo: "Evolucionamos hacia una guardería integral",
    descripcion:
      "Hoy ofrecemos un espacio seguro, cómodo y acompañado, donde cada mascota puede sentirse contenida mientras su familia no está.",
  },
];

export const beneficiosPrincipales = [
  {
    titulo: "Supervisión las 24 hs",
    descripcion:
      "Presencia y cuidado constante para que cada peludo esté acompañado en todo momento.",
  },
  {
    titulo: "Espacios naturales",
    descripcion:
      "Ambientes abiertos y agradables para disfrutar, moverse y relajarse con tranquilidad.",
  },
  {
    titulo: "Cuidado real, atención y cariño",
    descripcion:
      "Un trato cercano y profesional, pensado para el bienestar físico y emocional de cada mascota.",
  },
  {
    titulo: "Guardería canina todo el año",
    descripcion:
      "Estamos presentes durante todo el año para acompañarte cuando más lo necesitás.",
  },
  {
    titulo: "Entorno seguro y cómodo",
    descripcion:
      "Un lugar preparado para que se sientan protegidos, contenidos y como en casa.",
  },
];

export const experienciaGuardog = [
  {
    titulo: "Acompañamiento cercano",
    descripcion:
      "Cada jornada se vive con presencia activa, observando y acompañando con calidez.",
  },
  {
    titulo: "Bienestar y supervisión",
    descripcion:
      "Priorizamos la seguridad y el cuidado constante para que estén cómodos y tranquilos.",
  },
  {
    titulo: "Socialización y descanso",
    descripcion:
      "Un equilibrio entre momentos de compañía, movimiento y pausas necesarias para su bienestar.",
  },
  {
    titulo: "Un hogar mientras su familia no está",
    descripcion:
      "Nos enfocamos en que cada peludo reciba cariño real en un espacio seguro y amoroso.",
  },
];

export const informacionIngreso = {
  aptos: {
    titulo: "¿Quiénes son aptos?",
    resumen: "Todas las edades y razas. Cachorros y adultos mayores.",
    detalle:
      "Para los más pequeños o de edad avanzada contamos con un sector especial en nuestra casa para que puedan descansar como lo merecen.",
  },
  documentacion: {
    titulo: "Documentación",
    requisitos: [
      "Calendario de vacunación al día: quíntuple y rabia, desparasitación externa e interna al día.",
    ],
    instruccion:
      "Enviá foto del carnet y resultados vía WhatsApp al reservar la estadía.",
  },
};
