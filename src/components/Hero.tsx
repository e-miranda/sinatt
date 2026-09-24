import React, { useState } from 'react';
import { ShieldCheck, Cpu, ArrowRight, Activity, CheckCircle2, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/corporateData';
import heroDatacenterImg from '../assets/images/hero_network_datacenter_1790185251323.jpg';

interface HeroProps {
  onOpenDiagnostic: () => void;
  onOpenChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiagnostic, onOpenChat }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#0A0F1D] border-b border-slate-800/80 pt-8 pb-20 lg:pt-14 lg:pb-28">
      {/* Background ambient lighting with rich executive colors */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 pointer-events-none blur-[120px] -z-10 rounded-full" />
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-indigo-600/15 pointer-events-none blur-[100px] -z-10 rounded-full" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-cyan-500/10 pointer-events-none blur-[140px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7">
            {/* Zero-Pill Unboxed Metadata with Typographic Separators and Executive Color Glow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900/90 border border-cyan-800/50 text-cyan-300 mb-6 shadow-sm shadow-cyan-950">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Certificación Fluke DSX-8000</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 font-semibold">SLA &lt; 15 min</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-amber-300">Garantía 25 Años</span>
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6"
              style={{ textWrap: 'balance' }}
            >
              Infraestructura de Redes, <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Cableado y Soporte Crítico</span> para Empresas
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
              En <strong className="text-white font-semibold">SINATT</strong> garantizamos la continuidad operativa de tu empresa con diseño, certificación y soporte 24/7 en cableado estructurado, salas de servidores, ciberseguridad perimetral y switching corporativo.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#cotizador"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 group cursor-pointer"
              >
                <span>Cotizar Proyecto Corporativo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenChat}
                className="px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/90 hover:border-emerald-500/50 rounded-xl transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Activity className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Mesa de Ayuda NOC 24/7</span>
              </button>
            </div>

            {/* Trust bullet features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Garantía de 25 años en cableado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Certificados Cisco y Fortinet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Atención técnica en sitio 24/7</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Enterprise Datacenter Visual + Telemetry Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0E1628] shadow-2xl shadow-blue-950/40">
              {/* Image Container with Fallback Scrim */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden bg-slate-900">
                <img
                  src={heroDatacenterImg}
                  alt="Centro de datos e infraestructura de telecomunicaciones corporativa SINATT"
                  className={`w-full h-full object-cover transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-90'}`}
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImgLoaded(true)}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('unsplash')) {
                      target.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1628] via-[#0E1628]/30 to-transparent" />
                
                {/* Floating Operational Indicator */}
                <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md border border-emerald-500/40 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-mono shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-300 font-semibold">NOC OPERATIVO 24/7</span>
                </div>
              </div>

              {/* Telemetry Metrics Panel with Executive Colors */}
              <div className="p-6 bg-[#0E1628] border-t border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">INDICADORES DE NIVEL DE SERVICIO (SLA)</span>
                  <span className="text-emerald-400 font-mono">AUDITADO 2026</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-950/70 p-3.5 rounded-xl border border-emerald-800/40 hover:border-emerald-600/70 transition-colors">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 tabular-nums tracking-tight">
                      99.98%
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5 leading-snug">
                      Disponibilidad de Red
                    </div>
                  </div>

                  <div className="bg-slate-950/70 p-3.5 rounded-xl border border-cyan-800/40 hover:border-cyan-600/70 transition-colors">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 tabular-nums tracking-tight">
                      &lt; 15 min
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5 leading-snug">
                      Tiempo de Respuesta NOC
                    </div>
                  </div>

                  <div className="bg-slate-950/70 p-3.5 rounded-xl border border-indigo-800/40 hover:border-indigo-600/70 transition-colors">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-indigo-300 tabular-nums tracking-tight">
                      +1,450
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5 leading-snug">
                      Racks Certificados
                    </div>
                  </div>

                  <div className="bg-slate-950/70 p-3.5 rounded-xl border border-amber-800/40 hover:border-amber-600/70 transition-colors">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400 tabular-nums tracking-tight">
                      25 Años
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5 leading-snug">
                      Garantía en Cableado
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Brand Hardware Alliances Strip (No Pill, subtle and refined) */}
        <div className="mt-16 pt-8 border-t border-slate-800/60">
          <div className="text-center text-xs font-mono text-slate-500 uppercase tracking-wider mb-6">
            Ecosistema Tecnológico Homologado e Instalaciones Certificadas
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all text-xs sm:text-sm font-semibold text-slate-400 tracking-wider">
            <span>PANDUIT</span>
            <span aria-hidden="true" className="text-slate-700">/</span>
            <span>CISCO SYSTEMS</span>
            <span aria-hidden="true" className="text-slate-700">/</span>
            <span>FORTINET NGFW</span>
            <span aria-hidden="true" className="text-slate-700">/</span>
            <span>FLUKE NETWORKS</span>
            <span aria-hidden="true" className="text-slate-700">/</span>
            <span>FURUKAWA ELECTRIC</span>
            <span aria-hidden="true" className="text-slate-700">/</span>
            <span>SCHNEIDER APC</span>
          </div>
        </div>

      </div>
    </section>
  );
};
