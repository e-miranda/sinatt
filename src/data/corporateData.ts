import { ServiceItem, TestimonialItem } from '../types';

export const COMPANY_INFO = {
  name: 'SINATT',
  legalName: 'SINATT Tecnologías e Infraestructura de Redes S.R.L.',
  tagline: 'Infraestructura Tecnológica, Redes y Soporte Crítico Corporativo',
  address: 'Calle Soria Galvarro y Junín, Zona Central',
  city: 'Oruro, Bolivia (Cobertura Nacional e Internacional)',
  phoneDirect: '+591 (2) 525-4800',
  phoneEmergency247: '+591 718-42900',
  whatsapp: '+591 718 42 900',
  emailGeneral: 'contacto@sinatt.com',
  emailSupport: 'soporte@sinatt.com',
  emailNOC: 'noc@sinatt.com',
  workingHours: 'Lunes a Viernes: 08:00 - 18:30 (Soporte NOC y Emergencias 24 horas, 7 días a la semana)',
  // Google Maps embed URL with exact location at Soria Galvarro and Junin, Oruro, Bolivia
  mapsEmbedUrl: 'https://maps.google.com/maps?q=Calle+Soria+Galvarro+y+Junin,+Oruro,+Bolivia&t=&z=17&ie=UTF8&iwloc=&output=embed',
  googleMapsDirectionsUrl: 'https://maps.google.com/?q=Calle+Soria+Galvarro+y+Junin,+Oruro,+Bolivia',
  metrics: [
    { value: '99.98%', label: 'Disponibilidad de Red SLA' },
    { value: '< 15 min', label: 'Tiempo de Respuesta NOC' },
    { value: '+1,450', label: 'Racks y Enlaces Certificados' },
    { value: '25 Años', label: 'Garantía en Cableado Fluke' },
  ],
  certifications: [
    'TIA/EIA-568-D & ISO/IEC 11801',
    'Fluke Networks CCTT Certified',
    'Cisco CCNA / CCNP Enterprise',
    'Fortinet Network Security Expert (NSE)',
    'MikroTik MTCNA / MTCRE',
    'Panduit & Furukawa Certified Partner'
  ]
};

export const CORPORATE_SERVICES: ServiceItem[] = [
  {
    id: 'cableado-estructurado',
    number: '01',
    title: 'Cableado Estructurado y Fibra Óptica Certificada',
    category: 'cableado',
    categoryLabel: 'Infraestructura Física',
    shortDescription: 'Diseño, tendido y certificación de redes Cat6A, Cat7 y enlaces de fibra monomodo/multimodo con equipos Fluke DSX-8000.',
    fullDescription: 'Implementación integral de redes de telecomunicaciones para edificios corporativos, plantas industriales y sedes bancarias. Tendido de cableado estructurado blindado F/UTP y S/FTP, canalización técnica, peinado de racks y fusiones de fibra óptica por arco voltaico con reflectometría óptica (OTDR). Entregamos informe certificado con garantía de fábrica extendida hasta 25 años.',
    iconName: 'Network',
    standards: ['ANSI/TIA-568.2-D', 'ISO/IEC 11801 Class EA', 'IEEE 802.3an (10GBASE-T)', 'TIA-606-C (Etiquetado)'],
    deliverables: [
      'Reporte de certificación Fluke Networks con reflectometría y atenuación punto a punto',
      'Planos As-Built en AutoCAD y diagrama unifilar de parcheo',
      'Etiquetado normativo de puertos, patch panels y tomas terminales',
      'Garantía de rendimiento de canal de 25 años con marcas homologadas'
    ],
    slaGuarantee: 'Cumplimiento 100% de márgenes de Next, Return Loss y Atenuación en informe oficial Fluke.',
    equipmentPartners: ['Panduit', 'Furukawa Electric', 'Siemon', 'Fluke Networks']
  },
  {
    id: 'datacenter-servidores',
    number: '02',
    title: 'Diseño y Acondicionamiento de Data Centers',
    category: 'datacenter',
    categoryLabel: 'Servidores & Gabinetes',
    shortDescription: 'Racks de alta densidad, sistemas de energía ininterrumpida (UPS trifásicos), PDU monitoreables y climatización de precisión.',
    fullDescription: 'Soluciones de infraestructura física para salas de servidores y cuartos de telecomunicaciones (MDF / IDF). Montaje y reordenamiento de gabinetes de 42U y 45U, contención de pasillo frío/caliente, conmutación automática de transferencia (ATS), sistemas de puesta a tierra equipotencial y sensores ambientales SNMP.',
    iconName: 'Server',
    standards: ['TIA-942 Rated 2 / Rated 3', 'ASHRAE TC 9.9 (Climatización)', 'NFPA 75 (Protección contra Incendios)'],
    deliverables: [
      'Balanceo de fases eléctricas en tableros de cómputo y UPS',
      'Reordenamiento y saneamiento de racks con cero interrupción en producción',
      'Monitoreo ambiental de temperatura y humedad en tiempo real vía alertas SNMP',
      'Protocolo de pruebas de autonomía de respaldo eléctrico ante cortes'
    ],
    slaGuarantee: 'Operación continua bajo estándares TIA-942 y mantenimiento preventivo trimestral.',
    equipmentPartners: ['Schneider Electric / APC', 'Vertiv', 'Eaton', 'Legrand']
  },
  {
    id: 'switching-routing',
    number: '03',
    title: 'Redes Corporativas, Switching y Conectividad Wi-Fi 6E/7',
    category: 'redes',
    categoryLabel: 'Conectividad & Enlaces',
    shortDescription: 'Arquitectura de red LAN/WAN de alta disponibilidad, segmentación VLAN, enlaces redundantes y Wi-Fi de alta densidad.',
    fullDescription: 'Diseño e implementación de topologías de red empresariales con switches de capa 3 (Core, Distribución y Acceso), redundancia LACP, enrutamiento dinámico BGP/OSPF y soluciones Wi-Fi corporativas con roaming transparente 802.11k/v/r para cientos de clientes simultáneos.',
    iconName: 'Cpu',
    standards: ['IEEE 802.1Q (VLANs)', 'IEEE 802.11ax/be (Wi-Fi 6E/7)', 'IEEE 802.3bt (PoE++ 90W)'],
    deliverables: [
      'Estudio de cobertura RF previo y mapa de calor posterior (Site Survey)',
      'Segmentación de red por áreas críticas, invitados y telefonía IP con QoS priorizado',
      'Configuración de switches redundantes con Spanning Tree Protocol (RSTP/MSTP)',
      'Consola de gestión centralizada en la nube con telemetría de tráfico'
    ],
    slaGuarantee: 'Disponibilidad de switching 99.98% con conmutación automática en menos de 1 segundo.',
    equipmentPartners: ['Cisco Systems', 'Cisco Meraki', 'Aruba Networks', 'Ubiquiti UniFi']
  },
  {
    id: 'ciberseguridad-firewalls',
    number: '04',
    title: 'Ciberseguridad Perimetral, Firewalls NGFW y VPNs',
    category: 'ciberseguridad',
    categoryLabel: 'Seguridad Perimetral',
    shortDescription: 'Protección UTM perimetral, prevención de intrusiones (IPS), túneles VPN IPsec sitio a sitio y filtrado de contenido corporativo.',
    fullDescription: 'Blindaje de la red corporativa contra amenazas avanzadas y ataques de día cero. Implementación de Firewalls de Próxima Generación (NGFW), inspección profunda SSL/TLS, autenticación multifactor (MFA) para trabajadores remotos y auditorías de vulnerabilidades de puertos e interfaces expuestas.',
    iconName: 'ShieldCheck',
    standards: ['ISO/IEC 27001', 'NIST Cybersecurity Framework', 'PCI-DSS v4.0'],
    deliverables: [
      'Políticas de acceso por usuario y grupo integradas con Active Directory / LDAP',
      'Configuración de túneles VPN IPsec cifrados AES-256 para interconexión de sucursales',
      'Reporte mensual de amenazas bloqueadas y consumo de ancho de banda',
      'Actualización continua de firmas antivirus de red y reglas de filtrado web'
    ],
    slaGuarantee: 'Tiempo de contención ante alertas de intrusión perimetral < 20 minutos.',
    equipmentPartners: ['Fortinet FortiGate', 'Palo Alto Networks', 'SonicWall', 'Sophos']
  },
  {
    id: 'soporte-noc-24-7',
    number: '05',
    title: 'Soporte Técnico TI y Mesa de Ayuda Corporativa 24/7',
    category: 'soporte',
    categoryLabel: 'Mesa de Ayuda & NOC',
    shortDescription: 'Gestión proactiva de infraestructura, soporte presencial y remoto, con SLA garantizado de hasta 15 minutos en criticidad alta.',
    fullDescription: 'Mesa de ayuda TI para usuarios corporativos y gestión integral de la infraestructura tecnológica. Monitoreo remoto 24/7/365 desde nuestro Centro de Operaciones de Red (NOC), resolución de incidentes Nivel 1, 2 y 3, mantenimiento preventivo programado y visitas técnicas de emergencia en sitio.',
    iconName: 'Headphones',
    standards: ['ITIL v4 Service Management', 'SLA Contractual Escalonado', 'ISO 20000'],
    deliverables: [
      'Portal web y canal WhatsApp corporativo para radicación de tickets de soporte',
      'Monitoreo SNMP proactivo de routers, enlaces y servidores con alertas automáticas',
      'Ingeniero de campo asignado y visitas técnicas preventivas mensuales',
      'Reportes ejecutivos mensuales de disponibilidad, MTTR y cumplimiento de SLAs'
    ],
    slaGuarantee: 'Tiempo de primera respuesta < 15 min en fallas críticas; atención técnica presencial inmediata.',
    equipmentPartners: ['Zabbix', 'PRTG Network Monitor', 'AnyDesk Enterprise', 'SolarWinds']
  },
  {
    id: 'cctv-control-acceso',
    number: '06',
    title: 'Sistemas de Videovigilancia IP y Control de Acceso',
    category: 'seguridad_electronica',
    categoryLabel: 'Seguridad Electrónica',
    shortDescription: 'Cámaras de seguridad 4K con IA analítica perimetral, NVRs redundantes y control de acceso biométrico vehicular y peatonal.',
    fullDescription: 'Integración de seguridad física sobre la red IP corporativa. Instalación de cámaras PTZ y fijas con visión nocturna DarkFighter/ColorVu, reconocimiento facial, lectura de placas (LPR), control de acceso por tarjeta de proximidad Mifare o biometría facial, y cerrojos electromagnéticos con botón de evacuación de emergencia.',
    iconName: 'Eye',
    standards: ['ONVIF Profile S/G/T', 'Norma Técnica de Seguridad Física', 'PoE 802.3af/at'],
    deliverables: [
      'Cálculo de almacenamiento en disco para retención de grabación de 30, 60 o 90 días',
      'Acceso remoto seguro encriptado desde dispositivos móviles y centros de control',
      'Integración del software de control de acceso con registro de asistencia laboral',
      'Capacitación al personal de seguridad y entrega de manuales de operación'
    ],
    slaGuarantee: 'Grabación ininterrumpida con respaldo en RAID y tolerancia a fallas de disco.',
    equipmentPartners: ['Hikvision Enterprise', 'Dahua Technology', 'Axis Communications', 'ZKTeco']
  }
];

export const CORPORATE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Ing. Carlos Mendoza R.',
    role: 'Director de Tecnologías de la Información',
    company: 'Grupo Logístico Intercontinental',
    industry: 'Logística & Comercio Exterior',
    quote: 'SINATT ejecutó la renovación completa del cableado estructurado y la red de fibra óptica de nuestros 3 centros de distribución principales. Se certificaron 680 puntos Cat6A con Fluke y la migración se realizó sin un solo minuto de detención operativa en nuestros almacenes.',
    metrics: {
      label: 'Tiempo de inactividad operativa durante migración',
      value: '0 horas'
    }
  },
  {
    id: 'test-2',
    name: 'Dra. Patricia Arévalo',
    role: 'Gerente de Infraestructura y Ciberseguridad',
    company: 'Banco del Sol Corporativo',
    industry: 'Sector Financiero & Banca',
    quote: 'La implementación de la arquitectura de Firewalls FortiGate en alta disponibilidad y el soporte 24/7 del NOC de SINATT transformó nuestra estabilidad. Ante cualquier alerta perimetral recibimos notificación y contención en menos de 10 minutos.',
    metrics: {
      label: 'Tiempo de respuesta a incidencias críticas',
      value: '8.5 min'
    }
  },
  {
    id: 'test-3',
    name: 'Lic. Fernando Benavides',
    role: 'Gerente General de Operaciones',
    company: 'Parque Industrial & Tecnológico Norte',
    industry: 'Manufactura & Parques Industriales',
    quote: 'Teníamos graves problemas de caídas de enlace y desorden en los cuartos de telecomunicaciones de nuestras plantas. SINATT rediseñó los racks, balanceó las cargas eléctricas con UPS y unificó la telefonía IP corporativa con un profesionalismo excepcional.',
    metrics: {
      label: 'Continuidad de red anual alcanzada',
      value: '99.99%'
    }
  }
];
