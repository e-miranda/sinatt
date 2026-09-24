import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, Layers, Clock, Shield, Sparkles } from 'lucide-react';

interface ProjectCalculatorProps {
  onTransferQuote: (summary: string, category: string, points: string) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ onTransferQuote }) => {
  const [pointsCount, setPointsCount] = useState<number>(48);
  const [cableType, setCableType] = useState<'cat6' | 'cat6a' | 'fiber'>('cat6a');
  const [hardwareTier, setHardwareTier] = useState<'cisco_fortinet' | 'ubiquiti' | 'mikrotik'>('cisco_fortinet');
  const [slaTier, setSlaTier] = useState<'basic' | 'critical' | 'premium'>('critical');
  const [includeWifi, setIncludeWifi] = useState<boolean>(true);
  const [includeUps, setIncludeUps] = useState<boolean>(true);
  const [includeCctv, setIncludeCctv] = useState<boolean>(false);

  // Estimations calculation
  const estimation = useMemo(() => {
    // Days
    let days = Math.ceil(pointsCount / 16) + 2;
    if (cableType === 'cat6a') days += 2;
    if (cableType === 'fiber') days += 3;
    if (includeWifi) days += 1;

    // Rack Units
    const patchPanelsNeeded = Math.ceil(pointsCount / 24);
    const switchesNeeded = Math.ceil(pointsCount / 48) || 1;
    const rackUnitsNeeded = patchPanelsNeeded * 2 + switchesNeeded * 2 + 6; // with organizers, UPS, cable management

    // Cable description
    const cableLabel = cableType === 'cat6a' 
      ? 'Cat 6A F/UTP Blindado 10 Gbps (Norma TIA-568.2-D)'
      : cableType === 'fiber'
      ? 'Backbone Fibra Óptica OM4/OS2 + Cat 6A'
      : 'Cat 6 UTP Gigabits';

    const hardwareLabel = hardwareTier === 'cisco_fortinet'
      ? 'Cisco Catalyst Capa 3 + Fortinet FortiGate NGFW'
      : hardwareTier === 'ubiquiti'
      ? 'Ubiquiti UniFi Pro Max 10G PoE++'
      : 'MikroTik RouterOS + Switches Cloud Smart';

    const slaLabel = slaTier === 'premium'
      ? 'Premium NOC Dedicado (< 15 min de respuesta 24/7)'
      : slaTier === 'critical'
      ? 'Crítico 24/7 (< 2 horas de respuesta)'
      : 'Estándar Corporativo 8x5';

    return {
      estimatedDays: days,
      rackUnits: rackUnitsNeeded > 24 ? '42U (Gabinete de piso cerrado)' : '24U (Gabinete de piso/mural)',
      patchPanels: patchPanelsNeeded,
      switches: switchesNeeded,
      cableLabel,
      hardwareLabel,
      slaLabel,
      certType: 'Fluke DSX-8000 LinkWare Certificado'
    };
  }, [pointsCount, cableType, hardwareTier, slaTier, includeWifi, includeUps, includeCctv]);

  const handleApplyToContact = () => {
    const summary = `Cotización Calculada para ${pointsCount} puntos de red. Tipo: ${estimation.cableLabel}. Equipamiento: ${estimation.hardwareLabel}. SLA Requerido: ${estimation.slaLabel}. Extras: ${includeWifi ? 'Wi-Fi 6E/7, ' : ''}${includeUps ? 'Sistema UPS Redundante, ' : ''}${includeCctv ? 'CCTV IP Integrado' : ''}. Tiempo estimado: ~${estimation.estimatedDays} días hábiles.`;
    onTransferQuote(summary, 'Cableado Estructurado y Fibra', `${pointsCount} puntos`);
    
    // Scroll smoothly to contact
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cotizador" className="py-24 bg-[#080D1A] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            Estimador Técnico para Gerentes de TI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculadora de Infraestructura de Red y Nivel de Servicio (SLA)
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Configura las especificaciones técnicas de tu sede u oficina para proyectar dimensionamiento de hardware, tiempos de tendido y nivel de soporte requerido.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0E1628] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
            
            {/* 1. Network Points Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-white">
                  1. Cantidad de Puestos de Trabajo / Puntos de Red
                </label>
                <span className="font-mono text-cyan-400 text-lg font-bold tabular-nums">
                  {pointsCount} {pointsCount >= 500 ? '+ Puntos' : 'Puntos'}
                </span>
              </div>
              <input
                type="range"
                min="12"
                max="500"
                step="12"
                value={pointsCount}
                onChange={(e) => setPointsCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                <span>12 Puntos (Pyme)</span>
                <span>48 (Piso Oficina)</span>
                <span>192 (Edificio)</span>
                <span>500+ (Planta / Campus)</span>
              </div>
            </div>

            {/* 2. Cabling Category */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                2. Categoría y Medio de Transmisión
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setCableType('cat6')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    cableType === 'cat6'
                      ? 'border-blue-500 bg-blue-950/40 text-white'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold font-mono">Cat 6 UTP</div>
                  <div className="text-[11px] text-slate-400 mt-1">1 Gbps estándar, oficinas comerciales</div>
                </button>

                <button
                  type="button"
                  onClick={() => setCableType('cat6a')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    cableType === 'cat6a'
                      ? 'border-cyan-500 bg-cyan-950/40 text-white shadow-sm'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold font-mono flex items-center justify-between">
                    <span>Cat 6A F/UTP</span>
                    <span className="text-[10px] text-cyan-400">Recomendado</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">10 Gbps blindado, cero interferencia</div>
                </button>

                <button
                  type="button"
                  onClick={() => setCableType('fiber')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    cableType === 'fiber'
                      ? 'border-indigo-500 bg-indigo-950/40 text-white'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold font-mono">Backbone Fibra</div>
                  <div className="text-[11px] text-slate-400 mt-1">Fibra OM4/OS2 + Racks distribuidores</div>
                </button>
              </div>
            </div>

            {/* 3. Hardware Ecosystem Tier */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                3. Ecosistema de Switching & Firewall
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setHardwareTier('cisco_fortinet')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    hardwareTier === 'cisco_fortinet'
                      ? 'border-blue-500 bg-blue-950/40 text-white'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">Cisco + Fortinet</div>
                  <div className="text-[11px] text-slate-400 mt-1">Enterprise Core L3, NGFW FortiGate</div>
                </button>

                <button
                  type="button"
                  onClick={() => setHardwareTier('ubiquiti')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    hardwareTier === 'ubiquiti'
                      ? 'border-blue-500 bg-blue-950/40 text-white'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">Ubiquiti UniFi Pro</div>
                  <div className="text-[11px] text-slate-400 mt-1">Cloud Controller, PoE++ 90W</div>
                </button>

                <button
                  type="button"
                  onClick={() => setHardwareTier('mikrotik')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    hardwareTier === 'mikrotik'
                      ? 'border-blue-500 bg-blue-950/40 text-white'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">MikroTik RouterOS</div>
                  <div className="text-[11px] text-slate-400 mt-1">Enrutamiento ágil y switches CSS</div>
                </button>
              </div>
            </div>

            {/* 4. SLA Tier */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                4. Nivel de Soporte y SLA de Mantenimiento
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setSlaTier('basic')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    slaTier === 'basic'
                      ? 'border-blue-500 bg-blue-950/40 text-white'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">Estándar 8x5</div>
                  <div className="text-[11px] text-slate-400 mt-1">Horario de oficina, MTTR &lt; 8h</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSlaTier('critical')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    slaTier === 'critical'
                      ? 'border-cyan-500 bg-cyan-950/40 text-white'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">Crítico 24/7</div>
                  <div className="text-[11px] text-slate-400 mt-1">Guardia continua, MTTR &lt; 2h</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSlaTier('premium')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    slaTier === 'premium'
                      ? 'border-emerald-500 bg-emerald-950/40 text-white'
                      : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold flex items-center justify-between">
                    <span>NOC Dedicado</span>
                    <span className="text-emerald-400 text-[10px]">&lt; 15 min</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Ingeniero asignado y monitoreo proactivo</div>
                </button>
              </div>
            </div>

            {/* 5. Extras Checkboxes */}
            <div className="pt-2 border-t border-slate-800/80">
              <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Sistemas Complementarios
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <input
                    type="checkbox"
                    checked={includeWifi}
                    onChange={(e) => setIncludeWifi(e.target.checked)}
                    className="rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-0"
                  />
                  <span>Wi-Fi 6E/7 Site Survey</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <input
                    type="checkbox"
                    checked={includeUps}
                    onChange={(e) => setIncludeUps(e.target.checked)}
                    className="rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-0"
                  />
                  <span>UPS On-line Trifásico</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <input
                    type="checkbox"
                    checked={includeCctv}
                    onChange={(e) => setIncludeCctv(e.target.checked)}
                    className="rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-0"
                  />
                  <span>CCTV IP 4K Analítico</span>
                </label>
              </div>
            </div>

          </div>

          {/* Results Blueprint Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0B1324] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Dimensionamiento Técnico</h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                ESPECIFICACIÓN
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                <div className="text-slate-400 font-mono uppercase text-[10px]">Tiempo Estimado de Ejecución en Sitio</div>
                <div className="text-xl font-bold font-mono text-white mt-1 tabular-nums">
                  ~{estimation.estimatedDays} Días Hábiles
                </div>
                <div className="text-slate-500 text-[11px] mt-0.5">Incluye tendido, conectorización, peinado y certificación Fluke.</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                  <div className="text-slate-400 font-mono uppercase text-[10px]">Gabinete Recomendado</div>
                  <div className="text-sm font-bold text-cyan-300 mt-1">{estimation.rackUnits}</div>
                </div>
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80">
                  <div className="text-slate-400 font-mono uppercase text-[10px]">Patch Panels / Switches</div>
                  <div className="text-sm font-bold text-white mt-1 font-mono">{estimation.patchPanels} PP / {estimation.switches} SW</div>
                </div>
              </div>

              <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-2">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">Medio de Cableado:</span>
                  <span className="text-slate-200 font-medium">{estimation.cableLabel}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">Ecosistema Activo:</span>
                  <span className="text-slate-200 font-medium">{estimation.hardwareLabel}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">Nivel de SLA:</span>
                  <span className="text-emerald-400 font-medium">{estimation.slaLabel}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 bg-blue-950/40 rounded-lg border border-blue-900/50 text-[11px] text-blue-200">
                <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Incluye certificación oficial Fluke Networks con garantía de canal de 25 años.</span>
              </div>
            </div>

            <button
              onClick={handleApplyToContact}
              className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Transferir a Formulario de Cotización</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-[11px] text-center text-slate-500">
              Genera de inmediato un Ticket Oficial de Proyecto SINATT sin compromiso comercial.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
