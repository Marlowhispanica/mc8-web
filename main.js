const imageMap = {
  hero: "assets/exterior-building-garden_1.jpg",
  terrace: "assets/foto%20terraza%20sol.png",
  exterior: "assets/render-terrace.jpg",
  interior: "assets/INTERIOR.jpg",
  map: "assets/rooftop-terrace-view.jpg",
  logo: "assets/Logo.jpg",
  planPb: "assets/Plano%20planta%20Baja.jpg",
  planP1: "assets/Plano%20planta%20primera%20.jpg",
  exteriorV2: "assets/exterior-v2.jpg"
};

const TURNSTILE_SITE_KEY = "YOUR_TURNSTILE_SITE_KEY";

const imgIds = {
  hero: "img-hero",
  terrace: "img-terrace",
  exterior: "img-exterior",
  interior: "img-interior",
  map: "img-map",
  logo: "img-logo",
  planPb: "img-plan-pb",
  planP1: "img-plan-p1",
  exteriorV2: "img-exterior-v2"
};

const i18n = {
  es: {
    meta: {
      title: "MC8 · Málaga TechPark — Sede corporativa",
      description: "Alquiler de edificio de oficinas premium en Málaga TechPark. Flexibilidad total, sostenibilidad, espacios exteriores y bienestar. Solicita información",
      ogTitle: "MC8 · Málaga TechPark — Sede corporativa",
      ogDescription: "Edificio corporativo premium en Málaga TechPark. Flexibilidad, bienestar y sostenibilidad. Solicita información"
    },
    hero: {
      eyebrow: "OFICINA corporativa premium",
      h1: "Una nueva forma de entender la oficina",
      subline: "Un edificio singular, flexible y preparado para evolucionar con tu empresa",
      sub: "",
      cta1: "Solicitar información",
      cta2: "Agendar visita",
      cta3: "Planos a medida",
      address: "Calle Marie Curie 8, Málaga",
      trust1: { value: "2.082 m²", label: "superficie total" },
      trust2: { value: "1.482 m²", label: "SBA" },
      trust3: { value: "600 m²", label: "terraza" },
      trust4: { value: "Dic 2025", label: "disponibilidad" }
    },
    header: { cta: "Solicitar información" },
    nav: { home: "Inicio", specs: "Edificio", garden: "Jardín y terrazas", ecosystem: "Ecosistema", flex: "Flexibilidad", gallery: "Galería" },
    design: {
      h2: "Diseñado para trabajar mejor",
      p1: "Un edificio que combina eficiencia operativa y bienestar: luz natural, ventilación, terrazas y distribuciones que priorizan el rendimiento y la retención del talento",
      li1: "Plantas profundas, flexibles y muy eficientes",
      li2: "Espacios colaborativos y zonas de concentración",
      li3: "Imagen corporativa premium y representativa",
      stat1: { value: "600 m²", label: "terraza cubierta" },
      stat2: { value: "6", label: "cargadores eléctricos" },
      stat3: { value: "51", label: "plazas de parking" }
    },
    outdoor: {
      h2: "Trabajar al aire libre forma parte de la experiencia MC8",
      sub: "El proyecto incorpora espacios exteriores de alto valor añadido que amplían la oficina más allá de sus límites tradicionales. Jardines y terrazas se integran como espacios de trabajo, encuentro y descanso",
      card1: {
        title: "Terraza principal",
        l1: "600–700 m² de terraza en cubierta",
        l2: "Vistas abiertas a los Montes de Málaga",
        l3: "Espacio ideal para eventos, reuniones informales o trabajo outdoor"
      },
      card2: {
        title: "Jardines y zonas exteriores",
        l1: "Zonas ajardinadas en planta primera",
        l2: "Relación directa interior–exterior",
        l3: "Luz natural y ventilación como elementos centrales del diseño"
      },
      card3: {
        title: "Valor para la empresa",
        l1: "Mejora del bienestar y la productividad",
        l2: "Atractivo para captación y retención de talento",
        l3: "Refuerzo de cultura corporativa y employer branding"
      }
    },
    flex: {
      h2: "Espacios que se adaptan a tu forma de trabajar",
      p1: "MC8 se entrega como espacio diáfano, permitiendo a cada empresa diseñar su oficina a medida. El edificio ha sido concebido para evolucionar con el inquilino y adaptarse a los cambios del negocio",
      plan1: "Plano planta baja",
      plan2: "Plano planta primera",
      b1: {
        title: "Flexibilidad operativa",
        l1: "Posibilidad de alquilar edificio completo o por plantas",
        l2: "Configuración flexible de salas y espacios",
        l3: "Sistemas que permiten cambios sin obras complejas"
      },
      b2: {
        title: "Solución llave en mano",
        l1: "Opción de proyecto llave en mano",
        l2: "Planos y layouts diseñados a medida del cliente"
      },
      b3: {
        title: ""
      }
    },
    esg: {
      h2: "ESG / Sostenibilidad",
      p1: "Un activo alineado con políticas ESG: movilidad eléctrica, eficiencia energética y espacios saludables para el talento",
      li1: "Infraestructura para vehículos eléctricos",
      li2: "Diseño orientado a eficiencia y confort térmico",
      li3: "Bienestar como ventaja competitiva"
    },
    mtp: {
      h2: "Málaga TechPark",
      p1: "Un ecosistema empresarial líder en el sur de Europa, con fuerte presencia internacional y talento tecnológico. Un entorno empresarial consolidado, con fuerte presencia internacional y un crecimiento sostenido en empleo e inversión",
      m1: { value: "+680", label: "empresas" },
      m2: { value: "+70", label: "compañías internacionales" },
      m3: { value: "+25.100", label: "empleados" },
      m4: { value: "+3.400 M€", label: "facturados/año" }
    },
    services: {
      h2: "Servicios del edificio",
      s1: "Parking interior 38 + exterior 13",
      s2: "6 cargadores eléctricos",
      s3: "Bicis + duchas + vestuarios",
      s4: "Accesibilidad universal",
      s5: "Seguridad / control de accesos",
      s6: "Posibilidad de recepción / cafetería"
    },
    tabs: {
      specs: "Edificio",
      garden: "Jardín y terrazas",
      ecosystem: "Ecosistema Málaga TechPark",
      flex: "Flexibilidad"
    },
    building: {
      h2: "Un edificio que redefine los estándares de oficina",
      p1: "MC8 renace mediante una reforma integral que actualiza el edificio a los estándares más exigentes del mercado de oficinas. El proyecto combina eficiencia energética, confort interior y una arquitectura pensada para el uso real de las empresas actuales",
      b1: {
        title: "Arquitectura y diseño",
        l1: "Proyecto firmado por Ruiz Granados Arquitectos",
        l2: "Diseño sobrio, atemporal y representativo",
        l3: "Imagen corporativa sólida para empresas que buscan posicionamiento"
      },
      b2: {
        title: "Prestaciones técnicas",
        l1: "Instalaciones de última generación",
        l2: "Climatización eficiente y regulación independiente",
        l3: "Iluminación LED autorregulable",
        l4: "Suelos técnicos con mejoras acústicas"
      },
      b3: {
        title: "Sostenibilidad",
        l1: "Certificación LEED",
        l2: "Mejora del aislamiento pasivo",
        l3: "Placas fotovoltaicas",
        l4: "Movilidad sostenible (bicicletas, cargadores eléctricos)"
      },
      kpiTitle: "Datos clave",
      k1: { title: "Plantas", p1: "PB", p2: "P1", p3: "Terraza" },
      k2: "Superficie total: 2.082 m²",
      k3: "SBA oficinas: 1.482 m²",
      k4: { title: "Parking", p1: "13 exteriores", p2: "38 interiores" }
    },
    news: {
      h2: "Noticias actualidad",
      sourceLabel: "Fuente:",
      n1: "IMEC recibe autorización para construir en Málaga TechPark (17/01/2025)",
      s1: "Ministerio de Ciencia",
      n2: "Acuerdo para el centro de innovación de chips de IMEC en Málaga TechPark (16/07/2024)",
      s2: "Ministerio de Ciencia",
      n3: "Kadans transformará el edificio NODE II en Málaga TechPark (05/02/2024)",
      s3: "Kadans Science Partner",
      n4: "Málaga TechPark: impacto económico del 2,3% del PIB andaluz (25/11/2025)",
      s4: "Junta de Andalucía",
      n5: "Gobierno, Junta e IMEC firman un MoU para una nueva línea de chips (13/03/2024)",
      s5: "imec",
      n6: "Kadans confirma una inversión de 30 millones en Málaga TechPark (05/12/2024)",
      s6: "Cadena SER"
    },
    ecosystemLogos: {
      h2: "Empresas del ecosistema",
      sub: "Algunas compañías con presencia en Málaga TechPark"
    },
    testi: {
      quote: "“Un edificio que combina imagen corporativa, bienestar y flexibilidad real para equipos en crecimiento.”",
      author: "Director de Real Estate - Marlow Hispánica SL"
    },
    plans: {
      h2: "Solicitar planos a medida",
      sub: "Cuéntanos tu necesidad y te prepararemos una propuesta de planos adaptada",
      name: "Nombre y apellidos",
      company: "Empresa",
      role: "Cargo en la empresa",
      employees: "Número estimado de trabajadores",
      email: "Email corporativo",
      phone: "Teléfono",
      area: "m² aproximados",
      date: "Fecha objetivo de entrada",
      typology: "Tipología de oficinas",
      typologyOpt0: "Selecciona",
      typologyOpt1: "Pradera",
      typologyOpt2: "Colaborativo",
      typologyOpt3: "Mixto",
      typologyOpt4: "Despachos",
      needs: "Necesidades y uso previsto",
      submit: "Solicitar planos"
    },
    schedule: {
      h2: "Agendar visita",
      sub: "Déjanos tu disponibilidad y organizaremos la visita",
      name: "Nombre y apellidos",
      company: "Empresa",
      email: "Email corporativo",
      phone: "Teléfono",
      date: "Fecha preferida",
      time: "Franja horaria",
      timeOpt0: "Selecciona",
      timeOpt1: "Mañana (9:00-12:00)",
      timeOpt2: "Mediodía (12:00-15:00)",
      timeOpt3: "Tarde (15:00-18:00)",
      notes: "Notas",
      submit: "Solicitar visita"
    },
    cta: {
      h2: "Solicita información",
      p1: "Te enviamos el dossier completo y toda la informacion del inmueble",
      btn1: "Solicitar información",
      btn2: "Agendar visita"
    },
    form: {
      name: "Nombre y apellidos",
      company: "Empresa",
      email: "Email corporativo",
      phone: "Teléfono",
      area: "m² aproximados",
      date: "Fecha objetivo de entrada",
      message: "Mensaje",
      rgpd: "Acepto la política de privacidad (RGPD)",
      rgpdLink: "Ver política",
      submit: "Enviar solicitud",
      dossier: "Descargar dossier"
    },
    footer: { rights: "Todos los derechos reservados" },
    gallery: {
      h2: "Galería",
      sub: "Recorre los espacios interiores y exteriores del edificio",
      alt1: "Terraza exterior con mobiliario y pérgola, vista panorámica",
      alt2: "Exterior del edificio con acceso y zonas ajardinadas",
      alt3: "Terraza cubierta con suelo de hormigón y celosía",
      alt4: "Terraza cubierta con cerramientos de vidrio y vistas",
      alt5: "Interior con tabiques acristalados y techo de lamas",
      alt6: "Interior con cerramiento de vidrio y zona diáfana",
      alt7: "Interior con techo naranja y ventanales hacia terraza",
      alt8: "Planta diáfana con columnas y múltiples ventanas",
      alt9: "Detalle de celosía con vegetación exterior",
      alt10: "Zona diáfana con columnas y vidrio al fondo",
      alt11: "Azotea/terraza exterior con vistas a la montaña",
      alt12: "Interior con columnas y luz natural",
      alt13: "Interior con persona caminando junto a ventanales",
      alt14: "Fachada exterior del edificio y jardín",
      alt15: "Detalle interior de ventanas y columna",
      alt16: "Vista interior hacia celosía y vegetación"
    },
    errors: {
      required: "Campo obligatorio",
      email: "Introduce un email corporativo válido",
      rgpd: "Debes aceptar la política de privacidad",
      turnstile: "Completa la verificación anti-spam"
    },
    status: {
      loading: "Enviando…",
      success: "Solicitud enviada. Te contactaremos en breve",
      error: "No se pudo enviar. Inténtalo de nuevo",
      offline: "No se pudo enviar. Guardamos tu solicitud localmente"
    },
    alts: {
      hero: "Fachada exterior del edificio con jardines",
      terrace: "Terraza cubierta con suelo de hormigón y celosía",
      exterior: "Render exterior del edificio",
      interior: "Planta diáfana con columnas y múltiples ventanas",
      map: "Azotea con vistas del entorno",
      logo: "Logotipo MC8",
      planPb: "Plano de planta baja",
      planP1: "Plano de planta primera",
      exteriorV2: "Exterior del edificio (imagen principal)"
    }
  },
  en: {
    meta: {
      title: "MC8 · Málaga TechPark — Corporate Headquarters",
      description: "Premium office building for lease in Málaga TechPark. Total flexibility, sustainability, outdoor spaces, and wellbeing. Request information",
      ogTitle: "MC8 · Málaga TechPark — Corporate Headquarters",
      ogDescription: "Premium corporate building in Málaga TechPark. Flexibility, wellbeing, and sustainability. Request information"
    },
    hero: {
      eyebrow: "Premium corporate headquarters",
      h1: "THE NEW WAY TO WORK",
      subline: "A singular, flexible building designed to evolve with your company",
      sub: "",
      cta1: "Request information",
      cta2: "Schedule a tour",
      cta3: "Custom plans",
      address: "Calle Marie Curie 8, Málaga",
      trust1: { value: "2,082 m²", label: "total area" },
      trust2: { value: "1,482 m²", label: "GFA" },
      trust3: { value: "600 m²", label: "terrace" },
      trust4: { value: "Dec 2025", label: "availability" }
    },
    header: { cta: "Request information" },
    nav: { home: "Home", specs: "Building", garden: "Garden & terraces", ecosystem: "Ecosystem", flex: "Flexibility", gallery: "Gallery" },
    design: {
      h2: "Designed to work better",
      p1: "A building that combines operational efficiency and wellbeing: natural light, ventilation, terraces, and layouts that prioritize performance and talent retention",
      li1: "Deep, flexible, highly efficient floors",
      li2: "Collaborative areas and focus zones",
      li3: "Premium, representative corporate image",
      stat1: { value: "600 m²", label: "covered terrace" },
      stat2: { value: "6", label: "EV chargers" },
      stat3: { value: "51", label: "parking spaces" }
    },
    outdoor: {
      h2: "Working outdoors is part of the MC8 experience",
      sub: "The project includes high‑value outdoor areas that extend the office beyond traditional limits. Gardens and terraces become places to work, meet and recharge",
      card1: {
        title: "Main terrace",
        l1: "600–700 m² rooftop terrace",
        l2: "Open views of the Málaga mountains",
        l3: "Ideal for events, informal meetings or outdoor work"
      },
      card2: {
        title: "Gardens and outdoor areas",
        l1: "Landscaped areas on the first floor",
        l2: "Direct indoor–outdoor relationship",
        l3: "Natural light and ventilation as core design elements"
      },
      card3: {
        title: "Value for the company",
        l1: "Improves wellbeing and productivity",
        l2: "Attractive for talent acquisition and retention",
        l3: "Strengthens corporate culture and employer branding"
      }
    },
    flex: {
      h2: "Spaces that adapt to how you work",
      p1: "MC8 is delivered as open-plan space, allowing each company to design a tailored office. The building is conceived to evolve with the tenant and adapt to business changes",
      plan1: "Ground floor plan",
      plan2: "First floor plan",
      b1: {
        title: "Operational flexibility",
        l1: "Lease the full building or by floors",
        l2: "Flexible configuration of rooms and spaces",
        l3: "Systems that enable changes without complex works"
      },
      b2: {
        title: "Turnkey solution",
        l1: "Turnkey project option",
        l2: "Custom plans and layouts designed for the client"
      },
      b3: {
        title: ""
      }
    },
    esg: {
      h2: "ESG / Sustainability",
      p1: "An asset aligned with ESG policies: e-mobility, energy efficiency, and healthy spaces for talent",
      li1: "EV-ready infrastructure",
      li2: "Design focused on efficiency and thermal comfort",
      li3: "Wellbeing as a competitive advantage"
    },
    mtp: {
      h2: "Málaga TechPark",
      p1: "A leading business ecosystem in southern Europe with strong international presence and tech talent",
      m1: { value: "+680", label: "companies" },
      m2: { value: "+70", label: "international companies" },
      m3: { value: "+25,100", label: "employees" },
      m4: { value: "+€3.4B", label: "annual turnover" }
    },
    services: {
      h2: "Building services",
      s1: "Indoor parking 38 + outdoor 13",
      s2: "6 EV chargers",
      s3: "Bikes + showers + locker rooms",
      s4: "Universal accessibility",
      s5: "Security / access control",
      s6: "Reception / café option"
    },
    tabs: {
      specs: "Building",
      garden: "Garden & terraces",
      ecosystem: "Málaga TechPark ecosystem",
      flex: "Flexibility"
    },
    building: {
      h2: "A building that redefines office standards",
      p1: "MC8 is reborn through a full renovation that upgrades the building to the most demanding office-market standards. The project combines energy efficiency, interior comfort, and architecture designed for today’s real business needs",
      b1: {
        title: "Architecture & design",
        l1: "Project by Ruiz Granados Arquitectos",
        l2: "Sober, timeless and representative design",
        l3: "Strong corporate image for positioning-focused companies"
      },
      b2: {
        title: "Technical features",
        l1: "State-of-the-art installations",
        l2: "Efficient HVAC with independent control",
        l3: "Self-regulating LED lighting",
        l4: "Technical floors with acoustic upgrades"
      },
      b3: {
        title: "Sustainability",
        l1: "LEED certification",
        l2: "Improved passive insulation",
        l3: "Photovoltaic panels",
        l4: "Sustainable mobility (bikes, EV chargers)"
      },
      kpiTitle: "Key facts",
      k1: { title: "Floors", p1: "GF", p2: "L1", p3: "Terrace" },
      k2: "Total area: 2,082 m²",
      k3: "Office GFA: 1,482 m²",
      k4: { title: "Parking", p1: "13 outdoor", p2: "38 indoor" }
    },
    news: {
      h2: "News update",
      sourceLabel: "Source:",
      n1: "IMEC receives authorization to build at Málaga TechPark (Jan 17, 2025)",
      s1: "Spanish Ministry of Science",
      n2: "Agreement for IMEC’s chip innovation center in Málaga TechPark (Jul 16, 2024)",
      s2: "Spanish Ministry of Science",
      n3: "Kadans will transform the NODE II building in Málaga TechPark (Feb 5, 2024)",
      s3: "Kadans Science Partner",
      n4: "Málaga TechPark: economic impact equals 2.3% of Andalusia’s GDP (Nov 25, 2025)",
      s4: "Regional Government of Andalusia",
      n5: "Government, Andalusia and imec sign MoU for a new chip pilot line (Mar 13, 2024)",
      s5: "imec",
      n6: "Kadans confirms a €30M investment in Málaga TechPark (Dec 5, 2024)",
      s6: "Cadena SER"
    },
    ecosystemLogos: {
      h2: "Ecosystem companies",
      sub: "A selection of companies present in Málaga TechPark"
    },
    testi: {
      quote: "“A building that combines corporate image, wellbeing, and real flexibility for growing teams.”",
      author: "Real Estate Director - Marlow Hispánica SL"
    },
    plans: {
      h2: "Request custom plans",
      sub: "Tell us your needs and we will prepare a tailored plan proposal",
      name: "Full name",
      company: "Company",
      role: "Job title",
      employees: "Estimated number of employees",
      email: "Corporate email",
      phone: "Phone",
      area: "Approx. m²",
      date: "Target move-in date",
      typology: "Office typology",
      typologyOpt0: "Select",
      typologyOpt1: "Meadow",
      typologyOpt2: "Collaborative",
      typologyOpt3: "Mixed",
      typologyOpt4: "Private offices",
      needs: "Needs and intended use",
      submit: "Request plans"
    },
    schedule: {
      h2: "Schedule a visit",
      sub: "Share your availability and we will arrange the tour",
      name: "Full name",
      company: "Company",
      email: "Corporate email",
      phone: "Phone",
      date: "Preferred date",
      time: "Time slot",
      timeOpt0: "Select",
      timeOpt1: "Morning (9:00-12:00)",
      timeOpt2: "Midday (12:00-15:00)",
      timeOpt3: "Afternoon (15:00-18:00)",
      notes: "Notes",
      submit: "Request visit"
    },
    cta: {
      h2: "Request information",
      p1: "We’ll send you the full dossier and help define the ideal configuration for your team",
      btn1: "Request information",
      btn2: "Schedule a tour"
    },
    form: {
      name: "Full name",
      company: "Company",
      email: "Corporate email",
      phone: "Phone",
      area: "Approx. m²",
      date: "Target move-in date",
      message: "Message",
      rgpd: "I accept the privacy policy (GDPR)",
      rgpdLink: "View policy",
      submit: "Send request",
      dossier: "Download dossier"
    },
    footer: { rights: "All rights reserved" },
    gallery: {
      h2: "Gallery",
      sub: "Explore interior and exterior spaces of the building",
      alt1: "Outdoor terrace with furniture and pergola, panoramic view",
      alt2: "Building exterior with access and landscaped areas",
      alt3: "Covered terrace with polished concrete floor and lattice",
      alt4: "Covered terrace with glass enclosures and views",
      alt5: "Interior with glass partitions and slatted ceiling",
      alt6: "Interior with glass enclosure and open-plan area",
      alt7: "Interior with orange ceiling and large windows to the terrace",
      alt8: "Open-plan floor with columns and many windows",
      alt9: "Lattice detail with exterior vegetation",
      alt10: "Open-plan area with columns and glass at the back",
      alt11: "Rooftop terrace with mountain views",
      alt12: "Interior with columns and natural light",
      alt13: "Interior with a person walking near the windows",
      alt14: "Building exterior facade and garden",
      alt15: "Interior detail of windows and column",
      alt16: "Interior view toward lattice and vegetation"
    },
    errors: {
      required: "This field is required",
      email: "Please enter a valid corporate email",
      rgpd: "You must accept the privacy policy",
      turnstile: "Please complete the anti-spam verification"
    },
    status: {
      loading: "Sending…",
      success: "Request sent. We will contact you shortly",
      error: "Could not send. Please try again",
      offline: "Could not send. We saved your request locally"
    },
    alts: {
      hero: "Building exterior facade with gardens",
      terrace: "Covered terrace with polished concrete floor and lattice",
      exterior: "Exterior render of the building",
      interior: "Open-plan floor with columns and multiple windows",
      map: "Rooftop terrace with surrounding views",
      logo: "MC8 logo",
      planPb: "Ground floor plan",
      planP1: "First floor plan",
      exteriorV2: "Building exterior (main image)"
    }
  }
};

const galleryImages = [
  { id: "img-gallery-1", src: "assets/exterior-building-garden.jpg", altKey: "alt14" },
  { id: "img-gallery-2", src: "assets/rooftop-terrace-view.jpg", altKey: "alt11" },
  { id: "img-gallery-3", src: "assets/terrace-covered.jpg", altKey: "alt3" },
  { id: "img-gallery-4", src: "assets/terrace-covered-angle.jpg", altKey: "alt4" },
  { id: "img-gallery-5", src: "assets/interior-open-space.jpg", altKey: "alt8" },
  { id: "img-gallery-6", src: "assets/interior-glass-partition.jpg", altKey: "alt5" },
  { id: "img-gallery-7", src: "assets/interior-glass-wide.jpg", altKey: "alt6" },
  { id: "img-gallery-8", src: "assets/interior-orange-ceiling.jpg", altKey: "alt7" },
  { id: "img-gallery-9", src: "assets/interior-open-space-glass.jpg", altKey: "alt10" },
  { id: "img-gallery-10", src: "assets/interior-columns-windows.jpg", altKey: "alt12" },
  { id: "img-gallery-11", src: "assets/interior-person-walking.jpg", altKey: "alt13" },
  { id: "img-gallery-12", src: "assets/interior-windows-column-detail.jpg", altKey: "alt15" },
  { id: "img-gallery-13", src: "assets/interior-window-lattice.jpg", altKey: "alt16" },
  { id: "img-gallery-14", src: "assets/detail-lattice-vegetation.jpg", altKey: "alt9" }
];

let currentLang = "es";

function enableDragScroll(track) {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  track.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.style.cursor = "grabbing";
  });

  track.addEventListener("mouseleave", () => {
    isDown = false;
    track.style.cursor = "grab";
  });

  track.addEventListener("mouseup", () => {
    isDown = false;
    track.style.cursor = "grab";
  });

  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.2;
    track.scrollLeft = scrollLeft - walk;
  });
}

function setImage(id, src) {
  const img = document.getElementById(id);
  if (!img) return;
  img.src = src;

  img.addEventListener("error", () => {
    const frame = img.closest(".img-frame");
    if (frame) frame.classList.add("is-fallback");
    img.style.opacity = "0";
  });
}

function applyImages() {
  setImage(imgIds.hero, imageMap.hero);
  setImage(imgIds.terrace, imageMap.terrace);
  setImage(imgIds.exterior, imageMap.exterior);
  setImage(imgIds.interior, imageMap.interior);
  setImage(imgIds.map, imageMap.map);
  setImage(imgIds.logo, imageMap.logo);
  setImage(imgIds.planPb, imageMap.planPb);
  setImage(imgIds.planP1, imageMap.planP1);
  setImage(imgIds.exteriorV2, imageMap.exteriorV2);
  galleryImages.forEach(item => setImage(item.id, item.src));
}

function setMeta(lang) {
  const meta = i18n[lang].meta;
  document.title = meta.title;

  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", meta.description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", meta.ogTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", meta.ogDescription);
}

function setAlts(lang) {
  const alts = i18n[lang].alts;
  const mapping = [
    [imgIds.hero, alts.hero],
    [imgIds.terrace, alts.terrace],
    [imgIds.exterior, alts.exterior],
    [imgIds.interior, alts.interior],
    [imgIds.map, alts.map],
    [imgIds.logo, alts.logo],
    [imgIds.planPb, alts.planPb],
    [imgIds.planP1, alts.planP1],
    [imgIds.exteriorV2, alts.exteriorV2]
  ];
  mapping.forEach(([id, alt]) => {
    const img = document.getElementById(id);
    if (img) img.alt = alt;
  });
}

function setGalleryAlts(lang) {
  const gallery = i18n[lang].gallery;
  galleryImages.forEach(item => {
    const img = document.getElementById(item.id);
    const alt = gallery[item.altKey];
    if (img && alt) img.alt = alt;
  });
}

function applyLang(lang) {
  const dict = i18n[lang];
  if (!dict) return;

  currentLang = lang;
  try { localStorage.setItem("mc8_lang", lang); } catch (e) {}
  document.documentElement.lang = lang;
  setMeta(lang);
  setAlts(lang);
  setGalleryAlts(lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const path = el.getAttribute("data-i18n");
    const parts = path.split(".");
    let val = dict;

    for (const p of parts) {
      if (val && typeof val === "object") val = val[p];
    }

    if (typeof val === "string") el.textContent = val;
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  updateNavLinks(lang);
  stylizeMC8();
}

function getLangFromHash() {
  const hash = window.location.hash.replace("#", "");
  if (hash === "en" || hash === "es") return hash;
  try {
    const stored = localStorage.getItem("mc8_lang");
    if (stored === "en" || stored === "es") return stored;
  } catch (e) {}
  return "es";
}

function updateNavLinks(lang) {
  document.querySelectorAll("[data-nav]").forEach(link => {
    const href = link.getAttribute("href") || "";
    if (!href) return;
    const base = href.split("#")[0];
    link.setAttribute("href", `${base}#${lang}`);
  });
}

window.setLang = function(lang) {
  const target = lang === "en" ? "en" : "es";
  window.location.hash = `#${target}`;
  applyLang(target);
  // Ensure re-apply after any DOM transformations
  setTimeout(() => applyLang(target), 0);
};

window.openLightbox = function(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-image");
  if (!lightbox || !lightboxImg || !img) return;
  const idx = galleryImages.findIndex(item => item.id === img.id);
  lightboxImg.dataset.index = idx >= 0 ? String(idx) : "0";
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt || "";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
};

window.closeLightbox = function() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-image");
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
};

function lightboxStep(delta) {
  const lightboxImg = document.getElementById("lightbox-image");
  if (!lightboxImg) return;
  const current = parseInt(lightboxImg.dataset.index || "0", 10);
  const nextIndex = (current + delta + galleryImages.length) % galleryImages.length;
  const next = galleryImages[nextIndex];
  const imgEl = document.getElementById(next.id);
  lightboxImg.dataset.index = String(nextIndex);
  lightboxImg.src = next.src;
  lightboxImg.alt = imgEl ? imgEl.alt : "";
}

function stylizeMC8() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const skipTags = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "INPUT", "SELECT"]);

  const nodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parent = node.parentElement;
    if (!parent) continue;
    if (skipTags.has(parent.tagName)) continue;
    if (parent.classList.contains("no-mc8")) continue;
    if (!node.nodeValue || !node.nodeValue.includes("MC8")) continue;
    nodes.push(node);
  }

  nodes.forEach(node => {
    const parent = node.parentNode;
    const parts = node.nodeValue.split("MC8");
    const frag = document.createDocumentFragment();
    parts.forEach((part, idx) => {
      if (part) frag.appendChild(document.createTextNode(part));
      if (idx < parts.length - 1) {
        const span = document.createElement("span");
        span.className = "mc8-inline";
        span.innerHTML = 'MC<span class="brand-accent">8</span>';
        frag.appendChild(span);
      }
    });
    parent.replaceChild(frag, node);
  });
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isCorporateEmail(value) {
  const freeDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "proton.me", "protonmail.com"];
  const domain = value.split("@")[1] || "";
  return domain && !freeDomains.includes(domain.toLowerCase());
}

function applyTurnstileSiteKey() {
  if (!TURNSTILE_SITE_KEY) return;
  document.querySelectorAll(".cf-turnstile").forEach((el) => {
    el.setAttribute("data-sitekey", TURNSTILE_SITE_KEY);
  });
}

applyTurnstileSiteKey();

function getTurnstileToken(form) {
  const input = form.querySelector("input[name='cf-turnstile-response']");
  return input ? input.value.trim() : "";
}

function resetTurnstile(form) {
  if (!window.turnstile) return;
  const widget = form.querySelector(".cf-turnstile");
  if (!widget) return;
  try {
    window.turnstile.reset(widget);
  } catch (e) {}
}

function saveLocal(storageKey, data) {
  try {
    const records = JSON.parse(localStorage.getItem(storageKey) || "[]");
    records.push({ ...data, ts: Date.now() });
    localStorage.setItem(storageKey, JSON.stringify(records));
  } catch (e) {}
}

async function postForm(url, data, storageKey) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data)
    });
    if (!res.ok) return { ok: false, saved: false };
    return { ok: true, saved: false };
  } catch (err) {
    saveLocal(storageKey, data);
    return { ok: false, saved: true, error: err };
  }
}

let formInitialized = false;
function setupForm() {
  if (formInitialized) return;
  const form = document.getElementById("lead-form");
  if (!form) return;
  const status = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");
  const dossierLink = document.getElementById("dossier-link");

  function setError(name, message) {
    const error = document.querySelector(`[data-error-for="${name}"]`);
    if (error) error.textContent = message || "";
  }

  function clearErrors() {
    ["name", "company", "email", "rgpd"].forEach(name => setError(name, ""));
  }

  function validate() {
    clearErrors();
    let ok = true;

    const name = form.name.value.trim();
    const company = form.company.value.trim();
    const email = form.email.value.trim();
    const rgpd = form.rgpd.checked;

    if (!name) {
      setError("name", i18n[currentLang].errors.required);
      ok = false;
    }
    if (!company) {
      setError("company", i18n[currentLang].errors.required);
      ok = false;
    }
    if (!email || !validateEmail(email) || !isCorporateEmail(email)) {
      setError("email", i18n[currentLang].errors.email);
      ok = false;
    }
    if (!rgpd) {
      setError("rgpd", i18n[currentLang].errors.rgpd);
      ok = false;
    }

    return ok;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";
    dossierLink.classList.add("hidden");

    if (!validate()) return;

    submitBtn.disabled = true;
    status.textContent = i18n[currentLang].status.loading;

    const data = Object.fromEntries(new FormData(form).entries());
    data.rgpd = !!form.rgpd.checked;
    data.turnstileToken = getTurnstileToken(form);
    if (!data.turnstileToken) {
      status.textContent = i18n[currentLang].errors.turnstile;
      submitBtn.disabled = false;
      return;
    }

    postForm("/api/lead", data, "mc8_leads")
      .then((result) => {
        if (result.ok) {
          status.textContent = i18n[currentLang].status.success;
          dossierLink.classList.remove("hidden");
          dossierLink.setAttribute("href", "#");
          form.reset();
          resetTurnstile(form);
        } else if (result.saved) {
          status.textContent = i18n[currentLang].status.offline;
        } else {
          status.textContent = i18n[currentLang].status.error;
        }
      })
      .catch(() => {
        status.textContent = i18n[currentLang].status.error;
      })
      .finally(() => {
        submitBtn.disabled = false;
      });
  });

  formInitialized = true;
}

let carouselInitialized = false;
function setupCarousel() {
  if (carouselInitialized) return;
  const track = document.getElementById("gallery-track");
  if (!track) return;
  enableDragScroll(track);
  carouselInitialized = true;
}

let newsCarouselInitialized = false;
function setupNewsCarousel() {
  if (newsCarouselInitialized) return;
  const track = document.getElementById("news-track");
  if (!track) return;
  enableDragScroll(track);

  const prev = document.querySelector(".news-btn.prev");
  const next = document.querySelector(".news-btn.next");
  const firstItem = track.querySelector(".service-card");
  if (!firstItem || !prev || !next) return;

  const getScrollAmount = () => {
    const rect = firstItem.getBoundingClientRect();
    return rect.width + 16;
  };

  prev.addEventListener("click", () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  });

  newsCarouselInitialized = true;
}

let scheduleInitialized = false;
function setupScheduleModal() {
  if (scheduleInitialized) return;
  const modal = document.getElementById("schedule-modal");
  const form = document.getElementById("schedule-form");
  if (!modal || !form) return;
  const status = document.getElementById("visit-status");
  const submitBtn = document.getElementById("visit-submit");

  function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  document.querySelectorAll("[data-open='schedule']").forEach(btn => {
    btn.addEventListener("click", openModal);
  });

  document.querySelectorAll("[data-close='schedule']").forEach(btn => {
    btn.addEventListener("click", closeModal);
  });

  function setError(name, message) {
    const error = document.querySelector(`[data-error-for="${name}"]`);
    if (error) error.textContent = message || "";
  }

  function clearErrors() {
    ["visit_name", "visit_company", "visit_email", "visit_date", "visit_time"].forEach(name => setError(name, ""));
  }

  function validate() {
    clearErrors();
    let ok = true;
    const name = form.visit_name.value.trim();
    const company = form.visit_company.value.trim();
    const email = form.visit_email.value.trim();
    const date = form.visit_date.value.trim();
    const time = form.visit_time.value.trim();

    if (!name) { setError("visit_name", i18n[currentLang].errors.required); ok = false; }
    if (!company) { setError("visit_company", i18n[currentLang].errors.required); ok = false; }
    if (!email || !validateEmail(email) || !isCorporateEmail(email)) { setError("visit_email", i18n[currentLang].errors.email); ok = false; }
    if (!date) { setError("visit_date", i18n[currentLang].errors.required); ok = false; }
    if (!time) { setError("visit_time", i18n[currentLang].errors.required); ok = false; }

    return ok;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";
    if (!validate()) return;
    submitBtn.disabled = true;
    status.textContent = i18n[currentLang].status.loading;

    const data = Object.fromEntries(new FormData(form).entries());
    data.turnstileToken = getTurnstileToken(form);
    if (!data.turnstileToken) {
      status.textContent = i18n[currentLang].errors.turnstile;
      submitBtn.disabled = false;
      return;
    }

    postForm("/api/visit", data, "mc8_visits")
      .then((result) => {
        if (result.ok) {
          status.textContent = i18n[currentLang].status.success;
          form.reset();
          resetTurnstile(form);
          return;
        }
        status.textContent = result.saved ? i18n[currentLang].status.offline : i18n[currentLang].status.error;
      })
      .catch(() => {
        status.textContent = i18n[currentLang].status.error;
      })
      .finally(() => {
        submitBtn.disabled = false;
      });
  });

  const today = new Date().toISOString().split("T")[0];
  const dateInput = document.getElementById("visit-date");
  if (dateInput) dateInput.setAttribute("min", today);

  scheduleInitialized = true;
}


let leadModalInitialized = false;
function setupLeadModal() {
  if (leadModalInitialized) return;
  const modal = document.getElementById("lead-modal");
  if (!modal) return;

  function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  document.querySelectorAll("[data-open='lead']").forEach(btn => {
    btn.addEventListener("click", openModal);
  });

  document.querySelectorAll("[data-close='lead']").forEach(btn => {
    btn.addEventListener("click", closeModal);
  });

  leadModalInitialized = true;
}

let plansModalInitialized = false;
function setupPlansModal() {
  if (plansModalInitialized) return;
  const modal = document.getElementById("plans-modal");
  const form = document.getElementById("plans-form");
  if (!modal || !form) return;
  const status = document.getElementById("plans-status");
  const submitBtn = document.getElementById("plans-submit");

  function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  document.querySelectorAll("[data-open='plans']").forEach(btn => {
    btn.addEventListener("click", openModal);
  });

  document.querySelectorAll("[data-close='plans']").forEach(btn => {
    btn.addEventListener("click", closeModal);
  });

  function setError(name, message) {
    const error = document.querySelector(`[data-error-for="${name}"]`);
    if (error) error.textContent = message || "";
  }

  function clearErrors() {
    ["plans_name", "plans_company", "plans_role", "plans_employees", "plans_email", "plans_typology", "plans_rgpd"].forEach(name => setError(name, ""));
  }

  function validate() {
    clearErrors();
    let ok = true;
    const name = form.plans_name.value.trim();
    const company = form.plans_company.value.trim();
    const email = form.plans_email.value.trim();
    const role = form.plans_role.value.trim();
    const employees = form.plans_employees.value.trim();
    const typology = form.plans_typology.value.trim();
    const rgpd = form.plans_rgpd.checked;

    if (!name) { setError("plans_name", i18n[currentLang].errors.required); ok = false; }
    if (!company) { setError("plans_company", i18n[currentLang].errors.required); ok = false; }
    if (!role) { setError("plans_role", i18n[currentLang].errors.required); ok = false; }
    if (!employees) { setError("plans_employees", i18n[currentLang].errors.required); ok = false; }
    if (!email || !validateEmail(email) || !isCorporateEmail(email)) { setError("plans_email", i18n[currentLang].errors.email); ok = false; }
    if (!typology) { setError("plans_typology", i18n[currentLang].errors.required); ok = false; }
    if (!rgpd) { setError("plans_rgpd", i18n[currentLang].errors.rgpd); ok = false; }

    return ok;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";
    if (!validate()) return;
    submitBtn.disabled = true;
    status.textContent = i18n[currentLang].status.loading;

    const data = Object.fromEntries(new FormData(form).entries());
    data.plans_rgpd = !!form.plans_rgpd.checked;
    data.turnstileToken = getTurnstileToken(form);
    if (!data.turnstileToken) {
      status.textContent = i18n[currentLang].errors.turnstile;
      submitBtn.disabled = false;
      return;
    }

    postForm("/api/plans", data, "mc8_plans")
      .then((result) => {
        if (result.ok) {
          status.textContent = i18n[currentLang].status.success;
          form.reset();
          resetTurnstile(form);
          return;
        }
        status.textContent = result.saved ? i18n[currentLang].status.offline : i18n[currentLang].status.error;
      })
      .catch(() => {
        status.textContent = i18n[currentLang].status.error;
      })
      .finally(() => {
        submitBtn.disabled = false;
      });
  });

  plansModalInitialized = true;
}

let tabsInitialized = false;
function setupTabs() {
  if (tabsInitialized) return;
  const tabs = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");
  if (!tabs.length || !panels.length) return;

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;
      tabs.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      panels.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      const panel = document.getElementById(`tab-${target}`);
      if (panel) panel.classList.add("active");
    });
  });

  tabsInitialized = true;
}

let lightboxInitialized = false;
function setupLightbox() {
  if (lightboxInitialized) return;
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-image");
  if (!lightbox || !lightboxImg) return;

  function open(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function close() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-close='lightbox']")) {
      close();
      return;
    }
    if (e.target.closest("[data-lightbox='prev']")) {
      lightboxStep(-1);
      return;
    }
    if (e.target.closest("[data-lightbox='next']")) {
      lightboxStep(1);
      return;
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") lightboxStep(-1);
    if (e.key === "ArrowRight") lightboxStep(1);
  });

  lightboxInitialized = true;
}

function init() {
  applyImages();
  applyTurnstileSiteKey();
  const lang = getLangFromHash();
  window.setLang(lang);
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-btn");
    if (!btn) return;
    e.preventDefault();
    const target = btn.dataset.lang === "en" ? "en" : "es";
    window.setLang(target);
  });
  setupForm();
  setupCarousel();
  setupNewsCarousel();
  setupScheduleModal();
  setupLeadModal();
  setupPlansModal();
  setupTabs();
  setupLightbox();
  updateNavLinks(lang);

  const navSelect = document.getElementById("nav-index");
  if (navSelect) {
    navSelect.addEventListener("change", (e) => {
      const target = e.target.value;
      if (target) {
        window.location.hash = target.replace("#", "");
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        navSelect.value = "";
      }
    });
  }

  window.addEventListener("hashchange", () => {
    const current = getLangFromHash();
    applyLang(current);
  });
}

document.addEventListener("DOMContentLoaded", init);















