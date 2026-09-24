export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'cableado' | 'redes' | 'datacenter' | 'ciberseguridad' | 'soporte' | 'seguridad_electronica';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  standards: string[];
  deliverables: string[];
  slaGuarantee: string;
  equipmentPartners: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  metrics: {
    label: string;
    value: string;
  };
}

export interface ChatMessage {
  id: string;
  sender: 'system' | 'bot' | 'agent' | 'user';
  text: string;
  timestamp: string;
  agentName?: string;
  agentRole?: string;
  options?: string[];
  ticketId?: string;
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  serviceCategory: string;
  networkPoints: string;
  urgency: 'planificado' | 'prioridad' | 'emergencia_critica';
  message: string;
}

export interface GeneratedTicket {
  ticketNumber: string;
  createdAt: string;
  company: string;
  serviceCategory: string;
  urgency: string;
  status: 'Abierto' | 'En Asignación' | 'Prioridad NOC';
}
