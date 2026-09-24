import React from 'react';
import { ShieldCheck, Activity, Terminal, CheckCircle2, Server, Radio } from 'lucide-react';
import { COMPANY_INFO } from '../data/corporateData';
import fiberOpticImg from '../assets/images/fiber_optic_cabling_1790185262882.jpg';
import nocSupportImg from '../assets/images/noc_support_center_1790185272915.jpg';

export const InfrastructureShowcase: React.FC = () => {
  return (
    <section id="infraestructura" className="py-24 bg-gradient-to-b from-[#0A0F1D] to-[#0E1628] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            Capacidad Operativa & Certificación
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Infraestructura de Clase Empresarial y Laboratorio de Ensayos Fluke
          </h2>
          <p className="text-slate-400 mt-3 text-base leading-relaxed">
            Contamos con instrumental de laboratorio propio y especialistas titulados con credenciales oficiales de los principales fabricantes del mundo de telecomunicaciones.
          </p>
        </div>

        {/* Dual Asymmetric Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Fiber Optic & Precision Structured Cabling (7 cols) */}
          <div className="lg:col-span-7 bg-[#0B1324] border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
              <img
                src={fiberOpticImg}
                alt="Fusiones de fibra óptica y certificación de cableado Fluke en rack de comunicaciones"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1324] via-[#0B1324]/40 to-transparent" />
              
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-3 py-1 rounded-lg text-xs font-mono text-cyan-300">
                LABORATORIO FLUKE DSX-8000
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Certificación de Enlaces Físicos & Reflectometría OTDR
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Cada punto de red implementado por SINATT es sometido a barridos de frecuencia de hasta 2 GHz para certificar cumplimiento con Categorías 6, 6A, 7 y enlaces de fibra monomodo OS2 o multimodo OM4. Los reportes emitidos garantizan que la red no presentará diafonía (NEXT) ni pérdidas por retorno durante décadas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Fusiones por arco voltaico &lt; 0.02 dB</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Pruebas de atenuación bidireccional</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Certificación de canal y enlace permanente</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Entrega de archivos nativos Fluke LinkWare</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 24/7 NOC Monitoring Center (5 cols) */}
          <div className="lg:col-span-5 bg-[#0B1324] border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
              <img
                src={nocSupportImg}
                alt="Centro de Operaciones de Red NOC 24/7 SINATT"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1324] via-[#0B1324]/40 to-transparent" />
              
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-3 py-1 rounded-lg text-xs font-mono text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>NOC ACTIVO 24/7/365</span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Mesa de Ayuda & Centro de Operaciones (NOC)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Vigilancia proactiva constante mediante sondas SNMP y telemetría de latencia. Si un enlace redundante conmuta o un switch sobrepasa el umbral térmico, el NOC interviene antes de que los usuarios noten interrupciones.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase">
                  Protocolo de Escalabilidad ITIL:
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div><strong>Nivel 1:</strong> Atención y diagnóstico remoto &lt; 15 min.</div>
                  <div><strong>Nivel 2:</strong> Ingeniero especialista en switching / Fortinet.</div>
                  <div><strong>Nivel 3:</strong> Cuadrilla técnica en sitio con repuestos homologados.</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Official Certifications Ribbon with Executive Distinct Colors */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B1324] border border-slate-800/80 shadow-xl">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4 flex items-center justify-between">
            <span>Certificaciones Oficiales y Estándares de Ingeniería Acreditados</span>
            <span className="text-slate-500 hidden sm:inline">VIGENCIA 2026</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {COMPANY_INFO.certifications.map((cert, i) => {
              const borderColors = [
                'border-cyan-800/50 hover:border-cyan-400/80 text-cyan-300',
                'border-blue-800/50 hover:border-blue-400/80 text-blue-300',
                'border-indigo-800/50 hover:border-indigo-400/80 text-indigo-300',
                'border-violet-800/50 hover:border-violet-400/80 text-violet-300',
                'border-amber-800/50 hover:border-amber-400/80 text-amber-300',
                'border-emerald-800/50 hover:border-emerald-400/80 text-emerald-300'
              ];
              const colorClass = borderColors[i % borderColors.length];
              return (
                <div key={i} className={`bg-slate-950/70 p-3 rounded-xl border ${colorClass} text-xs font-mono transition-all flex items-center gap-2 shadow-sm`}>
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span className="truncate">{cert}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
