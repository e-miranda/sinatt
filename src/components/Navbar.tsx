import React, { useState } from 'react';
import { ShieldCheck, PhoneCall, Code2, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/corporateData';

interface NavbarProps {
  onOpenPhpModal: () => void;
  onOpenDiagnosticModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPhpModal, onOpenDiagnosticModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0A0F1D]/95 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element Brand Wordmark */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-black text-white text-xl tracking-tighter shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-white leading-none">
                SINATT
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 font-mono uppercase mt-1">
                Redes & TI Corporativo
              </span>
            </div>
          </a>
        </div>

        {/* Zone 2: 4-6 Clean text navigation links (Strict Top Bar Contract) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#galeria-ti" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Galería TI</span>
          </a>
          <a href="#servicios" className="hover:text-white transition-colors">
            Servicios
          </a>
          <a href="#infraestructura" className="hover:text-white transition-colors">
            Infraestructura
          </a>
          <a href="#cotizador" className="hover:text-white transition-colors">
            Cotizador
          </a>
          <a href="#testimonios" className="hover:text-white transition-colors">
            Casos de Éxito
          </a>
          <a href="#ubicacion" className="hover:text-white transition-colors">
            Ubicación & Sede
          </a>
          <a href="#contacto" className="hover:text-white transition-colors">
            Contacto
          </a>
        </nav>

        {/* Zone 3: Primary Actions (Single-line controls) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* PHP Code Export Trigger */}
          <button
            onClick={onOpenPhpModal}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-cyan-300 bg-slate-900/90 hover:bg-slate-800 border border-cyan-700/60 rounded-xl transition-all shadow-sm hover:shadow-cyan-950/40 whitespace-nowrap cursor-pointer"
            title="Ver y descargar código PHP para ejecutar desde GitHub"
          >
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Código PHP GitHub</span>
          </button>

          {/* Emergency 24/7 Phone */}
          <a
            href={`tel:${COMPANY_INFO.phoneEmergency247.replace(/[^0-9+]/g, '')}`}
            className="hidden xl:flex items-center gap-2 px-3 py-2 text-xs font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-800/60 rounded-xl hover:bg-emerald-900/50 transition-colors whitespace-nowrap"
            title="Línea directa de guardia NOC 24/7"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>NOC: {COMPANY_INFO.phoneEmergency247}</span>
          </a>

          {/* Primary CTA */}
          <button
            onClick={onOpenDiagnosticModal}
            className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 rounded-xl transition-all whitespace-nowrap shadow-lg shadow-blue-600/30 active:translate-y-0.5 cursor-pointer"
          >
            Solicitar Diagnóstico
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenPhpModal}
            className="p-2 text-slate-300 hover:text-white bg-slate-800/80 rounded-lg border border-slate-700 text-xs flex items-center gap-1"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="hidden xs:inline">PHP</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D1527] border-b border-slate-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60 hover:text-blue-400"
            >
              Servicios Destacados
            </a>
            <a
              href="#infraestructura"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60 hover:text-blue-400"
            >
              Infraestructura & Certificaciones
            </a>
            <a
              href="#cotizador"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60 hover:text-blue-400"
            >
              Cotizador Interactivo de Red
            </a>
            <a
              href="#testimonios"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60 hover:text-blue-400"
            >
              Casos de Éxito Corporativo
            </a>
            <a
              href="#ubicacion"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-800/60 hover:text-blue-400"
            >
              Ubicación & Google Maps
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-blue-400"
            >
              Formulario de Contacto & Tickets
            </a>
          </nav>
          
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                NOC 24/7 de Guardia
              </span>
              <a href={`tel:${COMPANY_INFO.phoneEmergency247.replace(/[^0-9+]/g, '')}`} className="font-bold underline">
                {COMPANY_INFO.phoneEmergency247}
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhpModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 rounded-lg border border-slate-700 hover:bg-slate-700"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Ver Código PHP para GitHub</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnosticModal();
              }}
              className="w-full py-3 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 shadow-md shadow-blue-600/30"
            >
              Solicitar Diagnóstico Técnico
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
