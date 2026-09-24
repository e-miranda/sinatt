import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  ShieldCheck, 
  WifiOff, 
  Lock, 
  Server, 
  HelpCircle, 
  UserCheck, 
  Clock, 
  ExternalLink,
  ChevronDown,
  Minimize2
} from 'lucide-react';
import { ChatMessage } from '../types';
import { COMPANY_INFO } from '../data/corporateData';

interface LiveSupportChatProps {
  isOpen: boolean;
  onToggle: () => void;
  onOpenContactWithService?: (service: string) => void;
}

export const LiveSupportChat: React.FC<LiveSupportChatProps> = ({
  isOpen,
  onToggle,
  onOpenContactWithService
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'bot',
      text: '¡Hola! Bienvenido a la Mesa de Ayuda y Centro de Operaciones de Red (NOC) de SINATT. Soy el asistente técnico automatizado.',
      timestamp: 'Ahora'
    },
    {
      id: 'msg-status',
      sender: 'agent',
      agentName: 'Ing. Rodrigo Morales',
      agentRole: 'Especialista de Guardia NOC L2',
      text: 'Actualmente estamos atendiendo en tiempo real. ¿En qué podemos apoyar la infraestructura tecnológica de tu empresa?',
      timestamp: 'Ahora',
      options: [
        '⚠️ Caída de enlace / Internet corporativo',
        '🔒 Falla en túnel VPN o Firewall FortiGate',
        '🔌 Soporte técnico presencial o AnyDesk',
        '📋 Cotización de Cableado Cat6A o Fibra'
      ]
    }
  ]);

  const [inputVal, setInputVal] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendOption = (optionText: string) => {
    handleSendMessage(optionText);
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    // Analyze intent and respond
    setTimeout(() => {
      const lower = text.toLowerCase();
      let reply = '';
      let options: string[] | undefined = undefined;
      let ticketId: string | undefined = undefined;

      if (lower.includes('caída') || lower.includes('caida') || lower.includes('internet') || lower.includes('enlace')) {
        ticketId = `NOC-INC-${Math.floor(1000 + Math.random() * 9000)}`;
        reply = `⚠️ Alerta de conectividad registrada con Ticket [${ticketId}]. Para priorizar la atención con el operador de fibra:\n1) ¿El fallo afecta a toda la sede o solo a una VLAN de oficinas?\n2) ¿Las luces del módem/ONT de enlace dedicado están fijas o en rojo?`;
        options = [
          'Afecta a toda la sede (Enlace caído)',
          'Solo una VLAN / Área de usuarios',
          'Ingresar ID de AnyDesk para diagnóstico'
        ];
      } else if (lower.includes('vpn') || lower.includes('firewall') || lower.includes('fortigate')) {
        ticketId = `SEC-VPN-${Math.floor(1000 + Math.random() * 9000)}`;
        reply = `🔒 Entendido. Revisamos el estado de túneles IPsec y políticas NGFW. ¿El usuario remoto recibe error de 'Fase 1 Negotiation Timeout' o fallo de autenticación LDAP/MFA?`;
        options = [
          'Error de negociación Timeout',
          'Problema con certificado SSL',
          'Reiniciar túnel IPsec entre sedes'
        ];
      } else if (lower.includes('anydesk') || lower.includes('remoto') || /\d{6,10}/.test(lower)) {
        ticketId = `REMOTE-TKT-${Math.floor(1000 + Math.random() * 9000)}`;
        reply = `ID de conexión remota o solicitud en proceso. Hemos asignado la sesión con Ticket [${ticketId}]. Un ingeniero NOC se conectará en breve bajo canal cifrado TLS 1.3. Por favor mantenga la aplicación abierta y acepte la solicitud.`;
      } else if (lower.includes('cotiz') || lower.includes('cableado') || lower.includes('precio')) {
        reply = `Con gusto. En SINATT ejecutamos tendidos de cableado estructurado Cat6A y fibra óptica con certificación oficial Fluke DSX-8000 y garantía de 25 años. Puedes usar nuestro cotizador de red en esta página o agendar una visita técnica sin costo.`;
        options = [
          'Ir al Cotizador Interactivo',
          'Solicitar Visita Técnica en Sitio',
          'Hablar con Asesor Comercial'
        ];
      } else if (lower.includes('llamada') || lower.includes('telefono') || lower.includes('urgente')) {
        reply = `Para emergencias de red de máxima severidad, puedes marcar inmediatamente a nuestra guardia técnica 24/7 al ${COMPANY_INFO.phoneEmergency247}. Un ingeniero L2 te atenderá directamente.`;
      } else {
        reply = `Gracias por escribir a la Mesa de Ayuda de SINATT. Tu requerimiento ha sido recibido y estamos listos para asistirte. Si necesitas una cotización o visita técnica en sitio, podemos canalizarla de inmediato.`;
        options = [
          'Solicitar llamada de un Ingeniero',
          'Verificar estado de un Ticket',
          'Enviar detalles por formulario'
        ];
      }

      const botReply: ChatMessage = {
        id: 'reply-' + Date.now(),
        sender: 'agent',
        agentName: 'Ing. Rodrigo Morales',
        agentRole: 'Especialista de Guardia NOC L2',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options,
        ticketId
      };

      setMessages(prev => [...prev, botReply]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Toggle Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={onToggle}
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0A0F1D]"
            aria-label="Abrir chat de soporte técnico"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold tracking-tight">Soporte Técnico 24/7</span>
              <span className="text-[10px] text-blue-200 font-mono">Ingeniero NOC en Línea</span>
            </div>
          </button>
        )}
      </div>

      {/* Chat Window / Drawer */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[92vw] sm:w-96 max-w-md bg-[#0D1527] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-[#0B1120] border-b border-slate-800 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
                  NOC
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0B1120]" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Mesa de Ayuda SINATT</span>
                  <span className="text-[9px] font-mono text-cyan-400 bg-cyan-950/60 px-1.5 py-0.2 rounded border border-cyan-800/40">
                    SLA ACTIVO
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <span>Ing. Rodrigo Morales (Nivel 2)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={onToggle}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Minimizar chat"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Emergency direct phone notice inside chat */}
          <div className="bg-slate-900/90 px-3.5 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-300 flex items-center justify-between">
            <span className="text-slate-400">¿Emergencia crítica?</span>
            <a
              href={`tel:${COMPANY_INFO.phoneEmergency247.replace(/[^0-9+]/g, '')}`}
              className="text-cyan-400 font-bold hover:underline"
            >
              Llamar 24/7: {COMPANY_INFO.phoneEmergency247}
            </a>
          </div>

          {/* Messages Container */}
          <div className="p-4 h-80 sm:h-96 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                {msg.sender === 'agent' && (
                  <div className="text-[10px] text-slate-400 mb-1 flex items-center gap-1">
                    <span className="font-semibold text-slate-300">{msg.agentName}</span>
                    <span>·</span>
                    <span className="text-cyan-400">{msg.agentRole}</span>
                  </div>
                )}

                <div
                  className={`max-w-[85%] p-3 rounded-xl leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none shadow-md'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}

                  {msg.ticketId && (
                    <div className="mt-2 pt-2 border-t border-slate-800 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Ticket Registrado: {msg.ticketId}</span>
                    </div>
                  )}
                </div>

                <span className="text-[9px] font-mono text-slate-500 mt-1 px-1">
                  {msg.timestamp}
                </span>

                {/* Quick Action Options */}
                {msg.options && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSendOption(opt)}
                        className="text-left text-[11px] bg-slate-900/90 hover:bg-blue-600 hover:text-white text-slate-300 px-2.5 py-1.5 rounded-lg border border-slate-700/80 transition-all active:scale-95"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs py-1">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] font-mono">Ingeniero analizando reporte...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#0B1120] border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Describa la falla o ingrese ID AnyDesk..."
              className="flex-1 bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="p-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 text-white rounded-xl transition-colors shadow-md shadow-blue-600/20"
              aria-label="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
