import React from 'react';
import { Quote, Building2, TrendingUp, CheckCircle2 } from 'lucide-react';
import { CORPORATE_TESTIMONIALS } from '../data/corporateData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 bg-[#0A0F1D] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            Casos de Éxito & Validación
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Testimonios de Directores de TI y Operaciones
          </h2>
          <p className="text-slate-400 mt-3 text-base leading-relaxed">
            Resultados auditados en proyectos de misión crítica para corporaciones que no pueden permitirse un solo minuto de inactividad de red.
          </p>
        </div>

        {/* Testimonials Grid with Executive Color Accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORPORATE_TESTIMONIALS.map((test, idx) => {
            const cardStyles = [
              {
                border: 'border-cyan-800/40 hover:border-cyan-400/80 shadow-cyan-950/20',
                industryBadge: 'text-cyan-400',
                metricColor: 'text-cyan-300',
                metricBg: 'bg-cyan-950/50 border-cyan-800/60',
                roleColor: 'text-cyan-400'
              },
              {
                border: 'border-emerald-800/40 hover:border-emerald-400/80 shadow-emerald-950/20',
                industryBadge: 'text-emerald-400',
                metricColor: 'text-emerald-300',
                metricBg: 'bg-emerald-950/50 border-emerald-800/60',
                roleColor: 'text-emerald-400'
              },
              {
                border: 'border-amber-800/40 hover:border-amber-400/80 shadow-amber-950/20',
                industryBadge: 'text-amber-400',
                metricColor: 'text-amber-300',
                metricBg: 'bg-amber-950/50 border-amber-800/60',
                roleColor: 'text-amber-400'
              }
            ][idx % 3];

            return (
              <div
                key={test.id}
                className={`bg-[#0E1628] border ${cardStyles.border} rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative transition-all duration-300 hover:-translate-y-1`}
              >
                <div>
                  {/* Metric Badge */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                      <Building2 className={`w-3.5 h-3.5 ${cardStyles.industryBadge}`} />
                      <span>{test.industry}</span>
                    </div>
                    <div className={`text-xs font-mono ${cardStyles.metricColor} font-bold flex items-center gap-1 px-2.5 py-0.5 rounded-full ${cardStyles.metricBg} border`}>
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{test.metrics.value}</span>
                    </div>
                  </div>

                  {/* Quote Text */}
                  <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                    "{test.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="font-bold text-white text-sm">
                    {test.name}
                  </div>
                  <div className={`text-xs font-medium ${cardStyles.roleColor}`}>
                    {test.role}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {test.company}
                  </div>

                  <div className={`mt-3 text-[11px] font-mono text-slate-300 ${cardStyles.metricBg} p-2 rounded-lg border flex items-center gap-2`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{test.metrics.label}: <strong className="text-white">{test.metrics.value}</strong></span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Social Proof Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B1324] border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-300">
            ¿Tu empresa requiere migrar racks, enlaces troncales o auditoría de cableado con certificación Fluke?
          </div>
          <a
            href="#contacto"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shadow-md shadow-blue-600/20"
          >
            Agendar Visita Técnica en Sitio
          </a>
        </div>

      </div>
    </section>
  );
};
