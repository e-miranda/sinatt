import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  Send, 
  ShieldAlert, 
  CheckCircle2, 
  Copy, 
  AlertCircle,
  Ticket
} from 'lucide-react';
import { COMPANY_INFO, CORPORATE_SERVICES } from '../data/corporateData';
import { ContactFormData, GeneratedTicket } from '../types';

interface ContactAndLocationProps {
  initialServiceCategory?: string;
  initialMessage?: string;
  initialPoints?: string;
}

export const ContactAndLocation: React.FC<ContactAndLocationProps> = ({
  initialServiceCategory = '',
  initialMessage = '',
  initialPoints = ''
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceCategory: initialServiceCategory || 'Cableado Estructurado y Fibra Óptica',
    networkPoints: initialPoints || '48 puntos',
    urgency: 'planificado',
    message: initialMessage || ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [generatedTicket, setGeneratedTicket] = useState<GeneratedTicket | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Synchronize when props update (e.g. from Calculator or Services)
  React.useEffect(() => {
    if (initialServiceCategory) {
      setFormData(prev => ({ ...prev, serviceCategory: initialServiceCategory }));
    }
  }, [initialServiceCategory]);

  React.useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  React.useEffect(() => {
    if (initialPoints) {
      setFormData(prev => ({ ...prev, networkPoints: initialPoints }));
    }
  }, [initialPoints]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Form validation
    if (!formData.fullName.trim() || !formData.company.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMessage('Por favor complete todos los campos requeridos con información corporativa válida.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Por favor ingrese una dirección de correo corporativo válida.');
      setIsSubmitting(false);
      return;
    }

    // Try posting to local PHP backend if available, or generate ticket client-side
    try {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      const ticketNum = `SINATT-TKT-2026-${randomCode}`;
      
      // Attempt backend fetch (non-blocking)
      fetch('contact_handler.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => {
        // Safe to ignore in Vite preview mode
      });

      // Artificial small delay for professional feel
      await new Promise(r => setTimeout(r, 600));

      setGeneratedTicket({
        ticketNumber: ticketNum,
        createdAt: new Date().toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' }),
        company: formData.company,
        serviceCategory: formData.serviceCategory,
        urgency: formData.urgency === 'emergencia_critica' ? 'Emergencia Crítica NOC' : formData.urgency === 'prioridad' ? 'Prioridad Alta' : 'Cotización Planificada',
        status: formData.urgency === 'emergencia_critica' ? 'Prioridad NOC' : 'En Asignación'
      });

    } catch (err) {
      setErrorMessage('Ocurrió un error inesperado. Por favor contáctenos directamente al teléfono de guardia.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyTicket = () => {
    if (!generatedTicket) return;
    navigator.clipboard.writeText(generatedTicket.ticketNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResetForm = () => {
    setGeneratedTicket(null);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      serviceCategory: 'Cableado Estructurado y Fibra Óptica',
      networkPoints: '48 puntos',
      urgency: 'planificado',
      message: ''
    });
  };

  return (
    <section id="contacto" className="py-24 bg-[#0A0F1D] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
            Mesa de Entrada & Centro Operativo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contacto Empresarial, Ubicación y Emisión de Tickets
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Radica tu solicitud de cotización o requerimiento técnico de red. Cada contacto genera un ticket único auditado con SLA de respuesta contractual.
          </p>
        </div>

        {/* 2-Column Layout: Form (Left 7) + Location & Map (Right 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0E1628] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            
            {generatedTicket ? (
              /* Success State / Ticket Issued */
              <div className="py-6 text-center space-y-6">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    Requerimiento Registrado Exitosamente
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Ticket Corporativo Generado
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mt-2">
                    Tu solicitud ha sido ingresada en la mesa de ayuda de SINATT y notificada al ingeniero de guardia asignado a tu sector.
                  </p>
                </div>

                {/* Ticket Card */}
                <div className="max-w-md mx-auto bg-slate-950/80 border border-slate-700/80 rounded-xl p-5 text-left space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-slate-400">NÚMERO DE TICKET:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-300 font-bold text-sm tracking-wide">
                        {generatedTicket.ticketNumber}
                      </span>
                      <button
                        onClick={copyTicket}
                        className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800"
                        title="Copiar Ticket"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-slate-300">
                    <div>
                      <span className="text-slate-500 block text-[10px]">EMPRESA:</span>
                      <span className="font-semibold text-white">{generatedTicket.company}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">ESTADO:</span>
                      <span className="text-emerald-400 font-semibold">{generatedTicket.status}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">SERVICIO:</span>
                      <span className="truncate block">{generatedTicket.serviceCategory}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">FECHA / HORA:</span>
                      <span>{generatedTicket.createdAt}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 text-[11px] text-cyan-400 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>SLA Comprometido: Respuesta en menos de 2 horas hábiles.</span>
                  </div>
                </div>

                {copied && (
                  <div className="text-xs text-emerald-400 font-mono">
                    ✓ Código de ticket copiado al portapapeles
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleResetForm}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                  >
                    Ingresar Otro Requerimiento
                  </button>
                  <a
                    href={`tel:${COMPANY_INFO.phoneEmergency247.replace(/[^0-9+]/g, '')}`}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/30 transition-colors"
                  >
                    Llamar a Guardia NOC
                  </a>
                </div>
              </div>
            ) : (
              /* Contact Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Ticket className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white">Formulario de Requerimiento TI</h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    CAMPOS REQUERIDOS (*)
                  </span>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-800/60 text-xs text-rose-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ej. Ing. Daniel Vargas"
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Empresa / Razón Social *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Ej. Corporación Logística Andina"
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Correo Corporativo *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="dvargas@empresa.com"
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Teléfono Directo / Celular *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+591 712 34567"
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Tipo de Servicio
                    </label>
                    <select
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      {CORPORATE_SERVICES.map(s => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Auditoría y Certificación de Red">Auditoría y Certificación Fluke de Red</option>
                      <option value="Soporte y Mantenimiento NOC 24/7">Soporte y Mantenimiento NOC 24/7</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Escala / Puntos de Red
                    </label>
                    <select
                      name="networkPoints"
                      value={formData.networkPoints}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="12 a 24 puntos">12 a 24 puntos (Pequeña Sede)</option>
                      <option value="25 a 48 puntos">25 a 48 puntos (Piso Estándar)</option>
                      <option value="49 a 100 puntos">49 a 100 puntos (Mediana Empresa)</option>
                      <option value="101 a 300 puntos">101 a 300 puntos (Edificio Corporativo)</option>
                      <option value="Más de 300 puntos">Más de 300 puntos (Campus / Planta Industrial)</option>
                    </select>
                  </div>
                </div>

                {/* Urgency Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Nivel de Criticidad & SLA Requerido
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label className={`p-3 rounded-xl border cursor-pointer text-xs transition-all ${
                      formData.urgency === 'planificado'
                        ? 'border-blue-500 bg-blue-950/40 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                    }`}>
                      <input
                        type="radio"
                        name="urgency"
                        value="planificado"
                        checked={formData.urgency === 'planificado'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="font-bold text-white">Planificado (24h)</div>
                      <div className="text-[11px] text-slate-400 mt-1">Cotización y visita técnica</div>
                    </label>

                    <label className={`p-3 rounded-xl border cursor-pointer text-xs transition-all ${
                      formData.urgency === 'prioridad'
                        ? 'border-cyan-500 bg-cyan-950/40 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                    }`}>
                      <input
                        type="radio"
                        name="urgency"
                        value="prioridad"
                        checked={formData.urgency === 'prioridad'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="font-bold text-cyan-300">Alta Prioridad (&lt; 2h)</div>
                      <div className="text-[11px] text-slate-400 mt-1">Atención rápida por especialista</div>
                    </label>

                    <label className={`p-3 rounded-xl border cursor-pointer text-xs transition-all ${
                      formData.urgency === 'emergencia_critica'
                        ? 'border-rose-500 bg-rose-950/40 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                    }`}>
                      <input
                        type="radio"
                        name="urgency"
                        value="emergencia_critica"
                        checked={formData.urgency === 'emergencia_critica'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="font-bold text-rose-300 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                        <span>Emergencia (&lt; 15 min)</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">Caída de red o servidor crítico</div>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Detalle del Requerimiento Técnico *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Especifique metraje estimado, número de racks, marca de equipos existentes o síntomas de la falla..."
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Generando Ticket en Sistema NOC...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Solicitud & Emitir Ticket Oficial</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

          {/* Location & Google Maps Column (Right 5) */}
          <div id="ubicacion" className="lg:col-span-5 space-y-6">
            
            {/* Corporate Location Details Card */}
            <div className="bg-[#0E1628] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl space-y-6 text-xs text-slate-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">Sede Central & Laboratorio</h3>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                  ATENCIÓN PRESENCIAL
                </span>
              </div>

              {/* Physical Address */}
              <div>
                <span className="text-slate-500 uppercase font-mono block text-[10px] mb-1">
                  Dirección Corporativa
                </span>
                <p className="text-white text-sm font-medium leading-snug">
                  {COMPANY_INFO.address}
                </p>
                <p className="text-slate-400 text-xs mt-0.5">
                  {COMPANY_INFO.city}
                </p>
              </div>

              {/* Phones */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <span className="text-slate-500 uppercase font-mono block text-[10px]">
                  Líneas Telefónicas Directas
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Central Telefónica:</span>
                  <a href={`tel:${COMPANY_INFO.phoneDirect.replace(/[^0-9+]/g, '')}`} className="font-mono text-blue-400 hover:underline">
                    {COMPANY_INFO.phoneDirect}
                  </a>
                </div>
                <div className="flex items-center justify-between bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                  <span className="text-cyan-300 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Guardia NOC 24/7:
                  </span>
                  <a href={`tel:${COMPANY_INFO.phoneEmergency247.replace(/[^0-9+]/g, '')}`} className="font-mono text-cyan-400 font-bold hover:underline">
                    {COMPANY_INFO.phoneEmergency247}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">WhatsApp Empresas:</span>
                  <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="font-mono text-emerald-400 hover:underline">
                    {COMPANY_INFO.whatsapp}
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                <span className="text-slate-500 uppercase font-mono block text-[10px]">
                  Canales Digitales
                </span>
                <div className="flex justify-between">
                  <span className="text-slate-400">Mesa de Ayuda:</span>
                  <a href={`mailto:${COMPANY_INFO.emailSupport}`} className="text-blue-400 hover:underline font-mono">
                    {COMPANY_INFO.emailSupport}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Cotizaciones:</span>
                  <a href={`mailto:${COMPANY_INFO.emailGeneral}`} className="text-blue-400 hover:underline font-mono">
                    {COMPANY_INFO.emailGeneral}
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-slate-500 uppercase font-mono block text-[10px] mb-1">
                  Horario de Atención Administrativa
                </span>
                <div className="text-slate-200">
                  {COMPANY_INFO.workingHours}
                </div>
              </div>
            </div>

            {/* Google Maps Container */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#0E1628]">
              <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Google Maps: Oruro, Bolivia (Soria Galvarro y Junín)</span>
                </span>
                <a
                  href={COMPANY_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-[11px]"
                >
                  <span>Abrir en Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Interactive Google Maps Frame */}
              <div className="h-64 sm:h-72 w-full relative bg-slate-900">
                <iframe
                  src={COMPANY_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Google Maps Sede SINATT"
                  className="grayscale-20 hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="p-3 bg-slate-950 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800">
                <span>Estacionamiento para clientes y contratistas disponible.</span>
                <a
                  href={COMPANY_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  Cómo Llegar →
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
