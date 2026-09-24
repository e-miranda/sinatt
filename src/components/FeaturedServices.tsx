import React, { useState } from 'react';
import { 
  Network, 
  Server, 
  Cpu, 
  ShieldCheck, 
  Headphones, 
  Eye, 
  ArrowRight, 
  Check, 
  X, 
  FileText, 
  Award,
  Zap
} from 'lucide-react';
import { CORPORATE_SERVICES } from '../data/corporateData';
import { ServiceItem } from '../types';

interface FeaturedServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({ onSelectServiceForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedModalService, setSelectedModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los Servicios' },
    { id: 'cableado', label: 'Cableado & Fibra' },
    { id: 'datacenter', label: 'Data Centers' },
    { id: 'redes', label: 'Switching & Wi-Fi' },
    { id: 'ciberseguridad', label: 'Ciberseguridad & VPN' },
    { id: 'soporte', label: 'Mesa de Ayuda 24/7' },
    { id: 'seguridad_electronica', label: 'CCTV & Biometría' }
  ];

  const filteredServices = activeCategory === 'all'
    ? CORPORATE_SERVICES
    : CORPORATE_SERVICES.filter(s => s.category === activeCategory);

  const getServiceColorScheme = (category: string) => {
    switch (category) {
      case 'cableado':
        return {
          cardBorder: 'border-cyan-800/40 hover:border-cyan-400/80 hover:shadow-cyan-950/40',
          badge: 'text-cyan-300 bg-cyan-950/80 border-cyan-700/60',
          iconBg: 'bg-cyan-950/60 border-cyan-800/80 text-cyan-400',
          accentText: 'text-cyan-400',
          ctaBtn: 'text-cyan-300 hover:text-white bg-cyan-950/60 hover:bg-cyan-600 border-cyan-800/60',
          bulletColor: 'text-cyan-400'
        };
      case 'datacenter':
        return {
          cardBorder: 'border-blue-800/40 hover:border-blue-400/80 hover:shadow-blue-950/40',
          badge: 'text-blue-300 bg-blue-950/80 border-blue-700/60',
          iconBg: 'bg-blue-950/60 border-blue-800/80 text-blue-400',
          accentText: 'text-blue-400',
          ctaBtn: 'text-blue-300 hover:text-white bg-blue-950/60 hover:bg-blue-600 border-blue-800/60',
          bulletColor: 'text-blue-400'
        };
      case 'redes':
        return {
          cardBorder: 'border-indigo-800/40 hover:border-indigo-400/80 hover:shadow-indigo-950/40',
          badge: 'text-indigo-300 bg-indigo-950/80 border-indigo-700/60',
          iconBg: 'bg-indigo-950/60 border-indigo-800/80 text-indigo-400',
          accentText: 'text-indigo-400',
          ctaBtn: 'text-indigo-300 hover:text-white bg-indigo-950/60 hover:bg-indigo-600 border-indigo-800/60',
          bulletColor: 'text-indigo-400'
        };
      case 'ciberseguridad':
        return {
          cardBorder: 'border-violet-800/40 hover:border-violet-400/80 hover:shadow-violet-950/40',
          badge: 'text-violet-300 bg-violet-950/80 border-violet-700/60',
          iconBg: 'bg-violet-950/60 border-violet-800/80 text-violet-400',
          accentText: 'text-violet-400',
          ctaBtn: 'text-violet-300 hover:text-white bg-violet-950/60 hover:bg-violet-600 border-violet-800/60',
          bulletColor: 'text-violet-400'
        };
      case 'soporte':
        return {
          cardBorder: 'border-emerald-800/40 hover:border-emerald-400/80 hover:shadow-emerald-950/40',
          badge: 'text-emerald-300 bg-emerald-950/80 border-emerald-700/60',
          iconBg: 'bg-emerald-950/60 border-emerald-800/80 text-emerald-400',
          accentText: 'text-emerald-400',
          ctaBtn: 'text-emerald-300 hover:text-white bg-emerald-950/60 hover:bg-emerald-600 border-emerald-800/60',
          bulletColor: 'text-emerald-400'
        };
      case 'seguridad_electronica':
        return {
          cardBorder: 'border-amber-800/40 hover:border-amber-400/80 hover:shadow-amber-950/40',
          badge: 'text-amber-300 bg-amber-950/80 border-amber-700/60',
          iconBg: 'bg-amber-950/60 border-amber-800/80 text-amber-400',
          accentText: 'text-amber-400',
          ctaBtn: 'text-amber-300 hover:text-white bg-amber-950/60 hover:bg-amber-600 border-amber-800/60',
          bulletColor: 'text-amber-400'
        };
      default:
        return {
          cardBorder: 'border-blue-800/40 hover:border-blue-400/80',
          badge: 'text-cyan-300 bg-cyan-950/80 border-cyan-700/60',
          iconBg: 'bg-slate-900 border-slate-800 text-blue-400',
          accentText: 'text-cyan-400',
          ctaBtn: 'text-blue-400 hover:text-white bg-blue-950/40 hover:bg-blue-600 border-blue-800/50',
          bulletColor: 'text-cyan-400'
        };
    }
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Network': return <Network className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-violet-400" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-emerald-400" />;
      case 'Eye': return <Eye className="w-5 h-5 text-amber-400" />;
      default: return <Zap className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-[#0A0F1D] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Soluciones Corporativas Homologadas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Servicios Destacados de Infraestructura y Redes
            </h2>
            <p className="text-slate-400 mt-3 text-base leading-relaxed">
              Diseño, aprovisionamiento e ingeniería en sitio para sedes centrales, plantas industriales y sucursales distribuidas con SLA contractual.
            </p>
          </div>

          {/* Interactive Category Filter (Tab buttons with executive colors) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl self-start md:self-auto overflow-x-auto max-w-full shadow-inner">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const colors = getServiceColorScheme(service.category);
            return (
              <div
                key={service.id}
                className={`bg-[#0E1628] border ${colors.cardBorder} rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group relative shadow-xl hover:-translate-y-0.5`}
              >
                <div>
                  {/* Card Top: Number + Category Badge */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl border ${colors.iconBg} transition-colors shadow-sm`}>
                        {renderIcon(service.iconName)}
                      </div>
                      <span className="text-xs font-mono text-slate-500 font-bold">{service.number}</span>
                    </div>
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${colors.badge}`}>
                      {service.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Deliverables Bullet Preview */}
                  <div className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className={`w-3.5 h-3.5 ${colors.bulletColor} mt-0.5 shrink-0`} />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer with Actions */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 mb-3 flex items-center justify-between">
                    <span>SLA COMPROMETIDO</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>GARANTIZADO</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedModalService(service)}
                      className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Ficha técnica & SLA</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${colors.accentText}`} />
                    </button>

                    <button
                      onClick={() => onSelectServiceForQuote(service.title)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${colors.ctaBtn}`}
                    >
                      Cotizar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal: Service Technical Specification & SLA Details */}
      {selectedModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0E1628] border border-slate-700 max-w-2xl w-full rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                  {renderIcon(selectedModalService.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {selectedModalService.categoryLabel} · Item {selectedModalService.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {selectedModalService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedModalService(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6 text-sm text-slate-300 leading-relaxed">
              <div>
                <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider mb-2">
                  Descripción del Servicio & Alcance
                </h4>
                <p className="text-slate-200">
                  {selectedModalService.fullDescription}
                </p>
              </div>

              {/* Normas y Estándares Aplicados */}
              <div>
                <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>Estándares Técnicos & Normativas Cumplidas</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedModalService.standards.map((st, i) => (
                    <div key={i} className="p-2.5 bg-slate-950/80 rounded-lg border border-slate-800/80 text-xs font-mono text-slate-300">
                      {st}
                    </div>
                  ))}
                </div>
              </div>

              {/* Entregables de Ingeniería */}
              <div>
                <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Entregables Técnicos & Documentación Final</span>
                </h4>
                <div className="space-y-2">
                  {selectedModalService.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Garantía SLA */}
              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40">
                <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1">
                  Compromiso de Nivel de Servicio (SLA)
                </div>
                <div className="text-sm font-semibold text-white">
                  {selectedModalService.slaGuarantee}
                </div>
              </div>

              {/* Marcas Homologadas */}
              <div>
                <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider mb-2">
                  Fabricantes y Marcas Homologadas
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-300">
                  {selectedModalService.equipmentPartners.map((brand, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-900 rounded-md border border-slate-800">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={() => setSelectedModalService(null)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  onSelectServiceForQuote(selectedModalService.title);
                  setSelectedModalService(null);
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/30"
              >
                Cotizar este Servicio
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
