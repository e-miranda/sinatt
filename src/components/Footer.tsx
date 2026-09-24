import React from 'react';
import { ShieldCheck, PhoneCall, Mail, MapPin, ExternalLink, Code2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/corporateData';

interface FooterProps {
  onOpenPhpModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPhpModal }) => {
  return (
    <footer className="bg-[#070B14] border-t border-slate-800/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Legal */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white text-base">
                S
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">SINATT</span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {COMPANY_INFO.legalName}. Especialistas en diseño, tendido, certificación Fluke y soporte 24/7 de infraestructura de redes críticas y conectividad empresarial.
            </p>

            <div className="pt-2 text-[11px] font-mono text-slate-500 space-y-1">
              <div>NIT / ID Corporativo: 394812028</div>
              <div>Centro de Operaciones de Red (NOC): Oruro, Bolivia (Soria Galvarro y Junín)</div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenPhpModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 rounded-lg text-xs transition-colors"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Exportar Código PHP para GitHub</span>
              </button>
            </div>
          </div>

          {/* Col 3: Soluciones */}
          <div className="space-y-3">
            <div className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Soluciones
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#servicios" className="hover:text-white transition-colors">Cableado Estructurado Cat6A</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Fibra Óptica & OTDR</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Salas de Servidores & Racks</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Firewalls NGFW & VPNs</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Redes Wi-Fi 6E/7 Corporativo</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">CCTV IP 4K & Biometría</a></li>
            </ul>
          </div>

          {/* Col 4: Enlaces Rápidos */}
          <div className="space-y-3">
            <div className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Navegación
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#cotizador" className="hover:text-white transition-colors">Cotizador de Red</a></li>
              <li><a href="#infraestructura" className="hover:text-white transition-colors">Infraestructura & Fluke</a></li>
              <li><a href="#testimonios" className="hover:text-white transition-colors">Casos de Éxito</a></li>
              <li><a href="#ubicacion" className="hover:text-white transition-colors">Ubicación Google Maps</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Generar Ticket de Soporte</a></li>
            </ul>
          </div>

          {/* Col 5: Guardia & Emergencias */}
          <div className="space-y-3">
            <div className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Atención Inmediata
            </div>
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>NOC 24/7 ACTIVO</span>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneEmergency247.replace(/[^0-9+]/g, '')}`}
                className="block text-white font-mono font-bold text-xs hover:underline"
              >
                {COMPANY_INFO.phoneEmergency247}
              </a>
              <div className="text-[10px] text-slate-500">
                Guardia técnica para emergencias críticas y cortes de enlace.
              </div>
            </div>

            <div className="text-[11px] text-slate-400 space-y-1">
              <div>Central: {COMPANY_INFO.phoneDirect}</div>
              <div>Mesa de Ayuda: {COMPANY_INFO.emailSupport}</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>TIA/EIA-568-D Compliant</span>
            <span>·</span>
            <span>ISO/IEC 11801</span>
            <span>·</span>
            <span>Fluke Networks LinkWare</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
