import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  ShieldCheck, 
  Zap, 
  Server, 
  Activity, 
  ArrowRight,
  Wifi,
  Sparkles
} from 'lucide-react';
import slideDatacenterImg from '../assets/images/hero_network_datacenter_1790185251323.jpg';
import slideCybersecurityImg from '../assets/images/carousel_cybersecurity_soc_1790208916222.jpg';
import slideEngineerImg from '../assets/images/carousel_engineer_datacenter_1790208926167.jpg';
import slideNocImg from '../assets/images/noc_support_center_1790185272915.jpg';
import slideWifiImg from '../assets/images/carousel_enterprise_wifi_cloud_1790208937401.jpg';

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  tagColor: string; // Tailwind color class for executive badge
  badgeBorder: string;
  description: string;
  image: string;
  metricValue: string;
  metricLabel: string;
  metricColor: string;
  serviceId: string;
}

interface ITShowcaseCarouselProps {
  onSelectSlideAction?: (serviceTitle: string) => void;
}

export const ITShowcaseCarousel: React.FC<ITShowcaseCarouselProps> = ({ onSelectSlideAction }) => {
  const slides: Slide[] = [
    {
      id: 'datacenter-tier3',
      title: 'Infraestructura de Data Center y Salas de Servidores',
      subtitle: 'ALTA DISPONIBILIDAD TIER III & ENERGÍA REDUNDANTE',
      tag: 'Data Center & Racks',
      tagColor: 'text-blue-400 bg-blue-950/70 border-blue-600/50',
      badgeBorder: 'from-blue-600 to-cyan-500',
      description: 'Diseño e implementación de gabinetes de alta densidad 42U/45U, contención térmica de pasillos, UPS trifásicos modulares y conmutación automática ATS para cero caídas.',
      image: slideDatacenterImg,
      metricValue: '99.98%',
      metricLabel: 'Uptime Eléctrico y Térmico',
      metricColor: 'text-cyan-400',
      serviceId: 'Diseño y Acondicionamiento de Data Centers'
    },
    {
      id: 'cybersecurity-soc',
      title: 'Centro de Operaciones de Ciberseguridad y Firewalls NGFW',
      subtitle: 'DEFENSA PERIMETRAL EN TIEMPO REAL & VPN IPSEC',
      tag: 'Ciberseguridad & SOC',
      tagColor: 'text-violet-400 bg-violet-950/70 border-violet-600/50',
      badgeBorder: 'from-violet-600 to-indigo-500',
      description: 'Protección perimetral UTM con inspección profunda SSL/TLS, prevención de intrusiones de día cero y túneles cifrados sitio a sitio para sedes corporativas y banca.',
      image: slideCybersecurityImg,
      metricValue: '< 10 min',
      metricLabel: 'Contención de Amenazas',
      metricColor: 'text-violet-400',
      serviceId: 'Ciberseguridad Perimetral, Firewalls NGFW y VPNs'
    },
    {
      id: 'telecom-engineering',
      title: 'Auditoría en Sitio y Certificación Fluke Networks DSX-8000',
      subtitle: 'PRECISIÓN DE LABORATORIO & 25 AÑOS DE GARANTÍA',
      tag: 'Fibra Óptica & Cat6A',
      tagColor: 'text-emerald-400 bg-emerald-950/70 border-emerald-600/50',
      badgeBorder: 'from-emerald-500 to-teal-500',
      description: 'Especialistas certificados CCTT ejecutando barridos de frecuencia de 2 GHz, fusiones ópticas por arco voltaico y reflectometría OTDR con entrega de reportes LinkWare.',
      image: slideEngineerImg,
      metricValue: '25 Años',
      metricLabel: 'Garantía Oficial de Canal',
      metricColor: 'text-emerald-400',
      serviceId: 'Cableado Estructurado y Fibra Óptica Certificada'
    },
    {
      id: 'noc-monitoring-24-7',
      title: 'Centro de Monitoreo de Red (NOC) & Mesa de Ayuda 24/7',
      subtitle: 'TELEMETRÍA PROACTIVA Y RESOLUCIÓN NIVEL 1, 2 Y 3',
      tag: 'NOC & Soporte TI',
      tagColor: 'text-amber-400 bg-amber-950/70 border-amber-600/50',
      badgeBorder: 'from-amber-500 to-orange-500',
      description: 'Vigilancia continua mediante sondas SNMP y telemetría de latencia. Detección temprana de anomalías y guardia presencial inmediata ante incidencias críticas.',
      image: slideNocImg,
      metricValue: '< 15 min',
      metricLabel: 'Respuesta NOC Garantizada',
      metricColor: 'text-amber-400',
      serviceId: 'Soporte Técnico TI y Mesa de Ayuda Corporativa 24/7'
    },
    {
      id: 'enterprise-wifi-cloud',
      title: 'Conectividad Inteligente Wi-Fi 7 & Switching Capa 3',
      subtitle: 'ROAMING TRANSPARENTE & REDES CORPORATIVAS MULTI-SEDE',
      tag: 'Redes LAN/WAN & Wi-Fi',
      tagColor: 'text-cyan-400 bg-cyan-950/70 border-cyan-600/50',
      badgeBorder: 'from-cyan-500 to-blue-600',
      description: 'Topologías redundantes LACP, segmentación VLAN por áreas y despliegue de access points Wi-Fi 7 de alta densidad con control centralizado en la nube.',
      image: slideWifiImg,
      metricValue: '10 Gbps',
      metricLabel: 'Velocidad de Backbone Troncal',
      metricColor: 'text-cyan-300',
      serviceId: 'Redes Corporativas, Switching y Conectividad Wi-Fi 6E/7'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setTouchStartX(null);
  };

  const activeSlide = slides[currentIndex];

  return (
    <section 
      className="py-16 bg-[#090E1B] border-b border-slate-800/80 relative overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      aria-label="Carrusel interactivo de infraestructura TI"
    >
      {/* Dynamic ambient color glow according to active slide */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 opacity-20 blur-3xl pointer-events-none transition-colors duration-1000 ${
        currentIndex === 0 ? 'bg-blue-600' :
        currentIndex === 1 ? 'bg-violet-600' :
        currentIndex === 2 ? 'bg-emerald-600' :
        currentIndex === 3 ? 'bg-amber-600' : 'bg-cyan-600'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Executive Color Palette */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-blue-900/60 via-indigo-900/60 to-cyan-900/60 border border-blue-700/50 text-cyan-300 shadow-sm mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>GALERÍA DE INFRAESTRUCTURA TI DE VANGUARDIA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Capacidades Tecnológicas en Acción
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Explora nuestras implementaciones corporativas: desde salas de servidores de alta densidad hasta centros de operaciones de ciberseguridad y certificación de enlaces.
            </p>
          </div>

          {/* Controls: Play/Pause & Slide Count */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors text-xs flex items-center gap-1.5 font-mono"
              aria-label={isPlaying ? 'Pausar carrusel' : 'Reproducir carrusel'}
              title={isPlaying ? 'Pausar rotación' : 'Iniciar rotación'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span className="hidden sm:inline">{isPlaying ? 'Pausa' : 'Auto'}</span>
            </button>

            <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 rounded-lg px-3 py-1.5 text-xs font-mono text-slate-300">
              <span className="text-white font-bold tabular-nums">0{currentIndex + 1}</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-500 tabular-nums">0{slides.length}</span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={prevSlide}
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-all active:scale-95"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-all active:scale-95"
                aria-label="Slide siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Carousel Viewport */}
        <div 
          className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0B1222] shadow-2xl group min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-end"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slide Image with Smooth Transition */}
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                loading={idx === 0 ? 'eager' : 'lazy'}
                referrerPolicy="no-referrer"
              />
              
              {/* Measured contrast scrim with vibrant executive tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090E1B] via-[#090E1B]/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#090E1B]/80 via-[#090E1B]/40 to-transparent" />
            </div>
          ))}

          {/* Slide Content Overlay */}
          <div className="relative z-20 p-6 sm:p-10 lg:p-12 w-full">
            <div className="max-w-3xl space-y-4">
              
              {/* Category Badge + Subtitle */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold border ${activeSlide.tagColor}`}>
                  {activeSlide.tag}
                </span>
                <span className="text-[11px] font-mono tracking-wider uppercase text-slate-300">
                  {activeSlide.subtitle}
                </span>
              </div>

              {/* Title with Executive Impact */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {activeSlide.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                {activeSlide.description}
              </p>

              {/* Metrics & Action Bar */}
              <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-8">
                {/* Highlighted Metric Card */}
                <div className="bg-slate-950/80 backdrop-blur-md border border-slate-700/80 rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-lg">
                  <div className={`text-2xl sm:text-3xl font-bold font-mono ${activeSlide.metricColor} tabular-nums`}>
                    {activeSlide.metricValue}
                  </div>
                  <div className="text-xs text-slate-300 leading-tight">
                    <span className="block text-slate-400 text-[10px] uppercase font-mono">SLA Auditado</span>
                    <span className="font-semibold text-white">{activeSlide.metricLabel}</span>
                  </div>
                </div>

                {/* Primary CTA */}
                <button
                  onClick={() => {
                    if (onSelectSlideAction) {
                      onSelectSlideAction(activeSlide.serviceId);
                    } else {
                      const el = document.getElementById('contacto');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-5 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 group/btn cursor-pointer"
                >
                  <span>Cotizar Solución de Red</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>

          {/* Progress Bar along the top of viewport */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800/80 z-30">
            <div 
              className={`h-full transition-all duration-300 ease-linear bg-gradient-to-r ${activeSlide.badgeBorder}`}
              style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
            />
          </div>

          {/* Left/Right Floating Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-950/70 border border-slate-700 text-white hover:bg-blue-600 hover:border-blue-500 transition-all opacity-80 hover:opacity-100 shadow-xl hidden sm:flex items-center justify-center"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-950/70 border border-slate-700 text-white hover:bg-blue-600 hover:border-blue-500 transition-all opacity-80 hover:opacity-100 shadow-xl hidden sm:flex items-center justify-center"
            aria-label="Slide siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Interactive Thumbnail Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
          {slides.map((slide, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden group ${
                  isCurrent
                    ? 'border-blue-500 bg-[#0E172B] shadow-md shadow-blue-500/10'
                    : 'border-slate-800/90 bg-slate-950/50 hover:bg-slate-900/60 hover:border-slate-700 text-slate-400'
                }`}
              >
                {/* Active Indicator Top Line */}
                {isCurrent && (
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${slide.badgeBorder}`} />
                )}

                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className={isCurrent ? 'text-cyan-400 font-bold' : 'text-slate-500'}>
                    0{idx + 1}
                  </span>
                  <span className={`text-[9px] uppercase ${isCurrent ? 'text-white' : 'text-slate-500'}`}>
                    {slide.tag.split('&')[0]}
                  </span>
                </div>

                <div className={`text-xs font-semibold truncate ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                  {slide.title}
                </div>

                <div className="text-[11px] font-mono mt-0.5 text-slate-400 flex items-center gap-1">
                  <span className={slide.metricColor}>{slide.metricValue}</span>
                  <span className="text-[10px] text-slate-500 truncate">{slide.metricLabel}</span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
