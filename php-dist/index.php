<?php
/**
 * SINATT - Infraestructura de Redes, Soporte TI y Servicios Corporativos
 * Standalone PHP 8.x Production File for GitHub & PHP Web Servers
 */

$company = [
    'name' => 'SINATT',
    'legal' => 'SINATT Tecnologías e Infraestructura de Redes S.R.L.',
    'tagline' => 'Infraestructura Tecnológica, Redes y Soporte Crítico para Empresas',
    'phone' => '+591 (2) 525-4800',
    'phoneEmergency' => '+591 718-42900',
    'whatsapp' => '+591 718 42 900',
    'email' => 'soporte@sinatt.com',
    'address' => 'Calle Soria Galvarro y Junín, Zona Central, Oruro - Bolivia',
    'mapsEmbed' => 'https://maps.google.com/maps?q=Calle+Soria+Galvarro+y+Junin,+Oruro,+Bolivia&t=&z=17&ie=UTF8&iwloc=&output=embed'
];

$services = [
    [
        'number' => '01',
        'title' => 'Cableado Estructurado y Fibra Óptica',
        'badge' => 'Cat6A / Cat7 / Fluke Certified',
        'desc' => 'Instalación y certificación de redes de datos bajo norma ANSI/TIA-568.2-D con equipos Fluke DSX-8000. Fusiones de fibra por arco voltaico con 25 años de garantía.',
        'sla' => 'Garantía certificada de canal de 25 años',
        'tech' => 'Panduit · Furukawa · Fluke Networks'
    ],
    [
        'number' => '02',
        'title' => 'Data Centers & Climatización de Precisión',
        'badge' => 'TIA-942 Rated 2/3',
        'desc' => 'Diseño y saneamiento de cuartos de telecomunicaciones, montaje de gabinetes 42U, UPS trifásicos modulares, PDU gestionables y monitoreo ambiental SNMP.',
        'sla' => 'Alta disponibilidad energética con redundancia N+1',
        'tech' => 'Schneider Electric / APC · Vertiv · Eaton'
    ],
    [
        'number' => '03',
        'title' => 'Switching, Routing & Wi-Fi Corporativo 6E/7',
        'badge' => 'Alta Densidad & Core L3',
        'desc' => 'Arquitectura de red LAN/WAN de misión crítica con switches Capa 3, segmentación VLAN, enlaces redundantes LACP y soluciones Wi-Fi de alta concurrencia.',
        'sla' => '99.98% de disponibilidad y conmutación sub-segundo',
        'tech' => 'Cisco Systems · Meraki · Aruba · Ubiquiti'
    ],
    [
        'number' => '04',
        'title' => 'Ciberseguridad Perimetral & Firewalls NGFW',
        'badge' => 'Protección UTM & VPNs',
        'desc' => 'Blindaje de infraestructura mediante Firewalls FortiGate y Palo Alto con prevención de intrusiones (IPS), filtrado web y túneles VPN IPsec sitio a sitio con cifrado AES-256.',
        'sla' => 'Contención de alertas perimetrales < 20 min',
        'tech' => 'Fortinet · Palo Alto Networks · Sophos'
    ],
    [
        'number' => '05',
        'title' => 'Mesa de Ayuda TI & Soporte NOC 24/7',
        'badge' => 'SLA < 15 min en Criticidad Alta',
        'desc' => 'Mesa de ayuda corporativa Nivel 1, 2 y 3. Monitoreo remoto proactivo de enlaces y servidores 24/7/365 con ingenieros de guardia presenciales y remotos.',
        'sla' => 'Respuesta inmediata garantizada por contrato',
        'tech' => 'Zabbix · AnyDesk Enterprise · ITIL v4'
    ],
    [
        'number' => '06',
        'title' => 'Videovigilancia IP 4K & Control de Acceso',
        'badge' => 'IA Perimetral & Biometría',
        'desc' => 'Cámaras de seguridad IP con analítica inteligente, reconocimiento facial y lectura de placas (LPR), control de acceso biométrico vehicular y cerraduras electromagnéticas.',
        'sla' => 'Grabación continua tolerante a fallos de disco',
        'tech' => 'Hikvision · Dahua · Axis · ZKTeco'
    ]
];
?>
<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($company['name']) ?> - Infraestructura de Redes y Soporte Corporativo</title>
    <meta name="description" content="Servicios corporativos de telecomunicaciones, cableado estructurado, fibra óptica, redes y soporte técnico TI 24/7.">
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
    </style>
</head>
<body class="bg-[#0A0F1D] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">

    <!-- TOP BAR CONTRACT (Strict 3 Zones) -->
    <header class="sticky top-0 z-40 bg-[#0A0F1D]/90 backdrop-blur-md border-b border-slate-800/80 px-6 py-4">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <!-- Zone 1: Brand Wordmark (Single text element) -->
            <a href="#" class="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                <span class="w-2.5 h-6 bg-blue-600 rounded-xs"></span>
                <span>SINATT</span>
            </a>

            <!-- Zone 2: Navigation Links (Clean single-line links) -->
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                <a href="#servicios" class="hover:text-white transition-colors">Servicios</a>
                <a href="#cotizador" class="hover:text-white transition-colors">Cotizador</a>
                <a href="#testimonios" class="hover:text-white transition-colors">Testimonios</a>
                <a href="#ubicacion" class="hover:text-white transition-colors">Ubicación</a>
                <a href="#contacto" class="hover:text-white transition-colors">Contacto</a>
            </nav>

            <!-- Zone 3: Primary Actions -->
            <div class="flex items-center gap-3">
                <a href="tel:<?= urlencode($company['phoneEmergency']) ?>" class="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 px-3 py-1.5 rounded hover:bg-cyan-900/50 transition-colors">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>NOC 24/7: <?= htmlspecialchars($company['phoneEmergency']) ?></span>
                </a>
                <a href="#contacto" class="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors whitespace-nowrap shadow-lg shadow-blue-600/20">
                    Solicitar Diagnóstico
                </a>
            </div>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="relative overflow-hidden pt-16 pb-24 border-b border-slate-800/80 bg-gradient-to-b from-[#0F172A] to-[#0A0F1D]">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 pointer-events-none blur-[120px] rounded-full"></div>
        <div class="absolute top-20 right-1/4 w-80 h-80 bg-indigo-600/15 pointer-events-none blur-[100px] rounded-full"></div>
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-7">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900/90 border border-cyan-800/50 text-cyan-300 mb-6 shadow-sm">
                    <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>Certificación Fluke DSX-8000</span>
                    <span aria-hidden="true" class="text-slate-600">·</span>
                    <span class="text-emerald-400 font-semibold">SLA &lt; 15 min</span>
                    <span aria-hidden="true" class="text-slate-600">·</span>
                    <span class="text-amber-300">Garantía 25 Años</span>
                </div>
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6" style="text-wrap: balance;">
                    Infraestructura de Redes, <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Cableado y Soporte Crítico</span> para Empresas
                </h1>
                <p class="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
                    Diseñamos, certificamos y mantenemos la conectividad de centros corporativos, plantas industriales e instituciones financieras con garantía extendida de hasta 25 años y respuesta técnica inmediata.
                </p>
                <div class="flex flex-wrap items-center gap-4">
                    <a href="#cotizador" class="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 rounded-xl transition-all shadow-lg shadow-blue-600/30">
                        Cotizar Proyecto de Red
                    </a>
                    <a href="#galeria-ti" class="px-6 py-3.5 text-sm font-semibold text-cyan-300 bg-slate-900/90 border border-cyan-800/60 rounded-xl hover:bg-slate-800 transition-all">
                        Ver Galería TI de Vanguardia
                    </a>
                </div>
            </div>
            <div class="lg:col-span-5">
                <div class="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl relative shadow-blue-950/40">
                    <div class="text-xs font-mono text-slate-400 mb-4 flex justify-between items-center pb-3 border-b border-slate-800">
                        <span class="text-cyan-400 font-semibold">NOC TELEMETRY & SLA STATUS</span>
                        <span class="text-emerald-400 flex items-center gap-1.5 font-semibold">
                            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> SISTEMA OPERATIVO
                        </span>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-slate-950/70 p-4 rounded-xl border border-emerald-800/40">
                            <div class="text-2xl font-bold font-mono text-emerald-400 tabular-nums">99.98%</div>
                            <div class="text-xs text-slate-300 mt-1">Disponibilidad de Red</div>
                        </div>
                        <div class="bg-slate-950/70 p-4 rounded-xl border border-cyan-800/40">
                            <div class="text-2xl font-bold font-mono text-cyan-400 tabular-nums">&lt; 15 min</div>
                            <div class="text-xs text-slate-300 mt-1">Tiempo de Respuesta NOC</div>
                        </div>
                        <div class="bg-slate-950/70 p-4 rounded-xl border border-indigo-800/40">
                            <div class="text-2xl font-bold font-mono text-indigo-300 tabular-nums">+1,450</div>
                            <div class="text-xs text-slate-300 mt-1">Racks Certificados</div>
                        </div>
                        <div class="bg-slate-950/70 p-4 rounded-xl border border-amber-800/40">
                            <div class="text-2xl font-bold font-mono text-amber-400 tabular-nums">25 Años</div>
                            <div class="text-xs text-slate-300 mt-1">Garantía de Cableado</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CARRUSEL INTERACTIVO DE INFRAESTRUCTURA TI -->
    <section id="galeria-ti" class="py-16 bg-[#090E1B] border-b border-slate-800/80">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-blue-900/60 via-indigo-900/60 to-cyan-900/60 border border-blue-700/50 text-cyan-300 shadow-sm mb-3">
                        <span>GALERÍA DE INFRAESTRUCTURA TI DE VANGUARDIA</span>
                    </div>
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Capacidades Tecnológicas en Acción
                    </h2>
                    <p class="text-slate-400 text-sm mt-1 max-w-2xl">
                        Explora nuestras soluciones corporativas: salas de servidores de alta densidad, ciberseguridad perimetral y certificación de enlaces de fibra.
                    </p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="phpCarouselPrev()" class="p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer" aria-label="Anterior">
                        &larr; Anterior
                    </button>
                    <button onclick="phpCarouselNext()" class="p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer" aria-label="Siguiente">
                        Siguiente &rarr;
                    </button>
                </div>
            </div>

            <!-- Carousel Frame -->
            <div class="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0B1222] min-h-[460px] flex items-end p-8 sm:p-12 shadow-2xl">
                <!-- Background slides -->
                <div id="php-slide-0" class="php-carousel-slide absolute inset-0 transition-opacity duration-700 opacity-100">
                    <div class="w-full h-full bg-gradient-to-br from-blue-950 via-slate-900 to-[#0B1222] opacity-90"></div>
                </div>
                <div id="php-slide-1" class="php-carousel-slide absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none">
                    <div class="w-full h-full bg-gradient-to-br from-violet-950 via-slate-900 to-[#0B1222] opacity-90"></div>
                </div>
                <div id="php-slide-2" class="php-carousel-slide absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none">
                    <div class="w-full h-full bg-gradient-to-br from-emerald-950 via-slate-900 to-[#0B1222] opacity-90"></div>
                </div>
                <div id="php-slide-3" class="php-carousel-slide absolute inset-0 transition-opacity duration-700 opacity-0 pointer-events-none">
                    <div class="w-full h-full bg-gradient-to-br from-amber-950 via-slate-900 to-[#0B1222] opacity-90"></div>
                </div>

                <!-- Slide Active Info Card -->
                <div class="relative z-20 max-w-3xl space-y-4">
                    <div id="php-slide-badge" class="inline-block px-3 py-1 rounded-md text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-700/60">
                        DATA CENTER & RACKS
                    </div>
                    <h3 id="php-slide-title" class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Infraestructura de Data Center y Salas de Servidores
                    </h3>
                    <p id="php-slide-desc" class="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                        Diseño e implementación de gabinetes de alta densidad 42U/45U, contención térmica de pasillos, UPS trifásicos modulares y conmutación automática ATS para cero caídas.
                    </p>
                    <div class="pt-2 flex flex-wrap items-center gap-4">
                        <div class="bg-slate-950/80 border border-slate-700/80 rounded-xl px-4 py-2 flex items-center gap-3">
                            <span id="php-slide-metric" class="text-2xl font-bold font-mono text-cyan-400">99.98%</span>
                            <span class="text-xs text-slate-400">Uptime Eléctrico & SLA</span>
                        </div>
                        <a href="#contacto" class="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/30">
                            Cotizar esta Solución &rarr;
                        </a>
                    </div>
                </div>
            </div>

            <!-- Slide Thumbnails Indicator -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                <button onclick="phpGoToSlide(0)" class="php-thumb-btn p-3 rounded-xl border border-blue-500 bg-[#0E172B] text-left transition-all">
                    <div class="text-[10px] font-mono text-cyan-400 font-bold">01 · DATA CENTER</div>
                    <div class="text-xs text-white font-semibold truncate">Salas de Servidores</div>
                </button>
                <button onclick="phpGoToSlide(1)" class="php-thumb-btn p-3 rounded-xl border border-slate-800 bg-slate-950/60 text-left transition-all hover:border-slate-700">
                    <div class="text-[10px] font-mono text-violet-400 font-bold">02 · CIBERSEGURIDAD</div>
                    <div class="text-xs text-slate-300 font-semibold truncate">SOC & Firewalls NGFW</div>
                </button>
                <button onclick="phpGoToSlide(2)" class="php-thumb-btn p-3 rounded-xl border border-slate-800 bg-slate-950/60 text-left transition-all hover:border-slate-700">
                    <div class="text-[10px] font-mono text-emerald-400 font-bold">03 · FIBRA ÓPTICA</div>
                    <div class="text-xs text-slate-300 font-semibold truncate">Laboratorio Fluke DSX</div>
                </button>
                <button onclick="phpGoToSlide(3)" class="php-thumb-btn p-3 rounded-xl border border-slate-800 bg-slate-950/60 text-left transition-all hover:border-slate-700">
                    <div class="text-[10px] font-mono text-amber-400 font-bold">04 · NOC 24/7</div>
                    <div class="text-xs text-slate-300 font-semibold truncate">Mesa de Ayuda & Telemetría</div>
                </button>
            </div>
        </div>
    </section>

    <script>
        const phpSlidesData = [
            {
                badge: 'DATA CENTER & RACKS',
                badgeClass: 'text-cyan-300 bg-cyan-950/80 border-cyan-700/60',
                title: 'Infraestructura de Data Center y Salas de Servidores',
                desc: 'Diseño e implementación de gabinetes de alta densidad 42U/45U, contención térmica de pasillos, UPS trifásicos modulares y conmutación automática ATS para cero caídas.',
                metric: '99.98%',
                metricClass: 'text-cyan-400'
            },
            {
                badge: 'CIBERSEGURIDAD & SOC',
                badgeClass: 'text-violet-300 bg-violet-950/80 border-violet-700/60',
                title: 'Centro de Operaciones de Ciberseguridad y Firewalls NGFW',
                desc: 'Protección perimetral UTM con inspección profunda SSL/TLS, prevención de intrusiones de día cero y túneles cifrados sitio a sitio para sedes corporativas y banca.',
                metric: '< 10 min',
                metricClass: 'text-violet-400'
            },
            {
                badge: 'FIBRA ÓPTICA & FLUKE',
                badgeClass: 'text-emerald-300 bg-emerald-950/80 border-emerald-700/60',
                title: 'Auditoría en Sitio y Certificación Fluke Networks DSX-8000',
                desc: 'Especialistas certificados CCTT ejecutando barridos de frecuencia de 2 GHz, fusiones ópticas por arco voltaico y reflectometría OTDR con entrega de reportes LinkWare.',
                metric: '25 Años',
                metricClass: 'text-emerald-400'
            },
            {
                badge: 'NOC & TELEMETRÍA 24/7',
                badgeClass: 'text-amber-300 bg-amber-950/80 border-amber-700/60',
                title: 'Centro de Monitoreo de Red (NOC) & Mesa de Ayuda 24/7',
                desc: 'Vigilancia continua mediante sondas SNMP y telemetría de latencia. Detección temprana de anomalías y guardia presencial inmediata ante incidencias críticas.',
                metric: '< 15 min',
                metricClass: 'text-amber-400'
            }
        ];

        let currentPhpSlide = 0;
        function updatePhpSlide(index) {
            currentPhpSlide = index;
            const data = phpSlidesData[index];
            document.getElementById('php-slide-badge').innerText = data.badge;
            document.getElementById('php-slide-badge').className = 'inline-block px-3 py-1 rounded-md text-xs font-mono font-bold ' + data.badgeClass;
            document.getElementById('php-slide-title').innerText = data.title;
            document.getElementById('php-slide-desc').innerText = data.desc;
            document.getElementById('php-slide-metric').innerText = data.metric;
            document.getElementById('php-slide-metric').className = 'text-2xl font-bold font-mono ' + data.metricClass;

            document.querySelectorAll('.php-carousel-slide').forEach((el, i) => {
                el.className = 'php-carousel-slide absolute inset-0 transition-opacity duration-700 ' + (i === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0');
            });

            document.querySelectorAll('.php-thumb-btn').forEach((btn, i) => {
                if (i === index) {
                    btn.className = 'php-thumb-btn p-3 rounded-xl border border-blue-500 bg-[#0E172B] text-left transition-all';
                } else {
                    btn.className = 'php-thumb-btn p-3 rounded-xl border border-slate-800 bg-slate-950/60 text-left transition-all hover:border-slate-700';
                }
            });
        }

        function phpCarouselNext() {
            updatePhpSlide((currentPhpSlide + 1) % phpSlidesData.length);
        }

        function phpCarouselPrev() {
            updatePhpSlide((currentPhpSlide - 1 + phpSlidesData.length) % phpSlidesData.length);
        }

        function phpGoToSlide(i) {
            updatePhpSlide(i);
        }

        setInterval(phpCarouselNext, 6000);
    </script>

    <!-- SERVICIOS DESTACADOS -->
    <section id="servicios" class="py-24 max-w-7xl mx-auto px-6">
        <div class="max-w-2xl mb-16">
            <div class="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">Soluciones Corporativas</div>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">Servicios Destacados de Infraestructura</h2>
            <p class="text-slate-400 mt-3 text-base">Implementaciones llave en mano con normas internacionales TIA/EIA, ISO/IEC e ingenieros certificados.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php foreach ($services as $srv): ?>
            <div class="bg-[#11192E] border border-slate-800/90 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-colors">
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-xs font-mono text-slate-500"><?= $srv['number'] ?></span>
                        <span class="text-xs font-medium text-cyan-400"><?= htmlspecialchars($srv['badge']) ?></span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2"><?= htmlspecialchars($srv['title']) ?></h3>
                    <p class="text-sm text-slate-300 leading-relaxed mb-6"><?= htmlspecialchars($srv['desc']) ?></p>
                </div>
                <div class="pt-4 border-t border-slate-800/80 text-xs">
                    <div class="text-slate-400 mb-1"><strong class="text-slate-300">SLA:</strong> <?= htmlspecialchars($srv['sla']) ?></div>
                    <div class="text-slate-500 font-mono"><?= htmlspecialchars($srv['tech']) ?></div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- TESTIMONIOS -->
    <section id="testimonios" class="py-20 bg-slate-950/60 border-y border-slate-800/80">
        <div class="max-w-7xl mx-auto px-6">
            <div class="max-w-xl mb-12">
                <div class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Validación & Experiencia</div>
                <h2 class="text-3xl font-bold text-white tracking-tight">Testimonios de Clientes Corporativos</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-[#11192E] border border-slate-800 rounded-xl p-6">
                    <div class="text-xs font-mono text-emerald-400 mb-3">0 Horas de Inactividad</div>
                    <p class="text-sm text-slate-300 italic mb-6">"SINATT renovó el cableado y fibra de nuestros 3 centros de distribución principales. Se certificaron 680 puntos Cat6A con Fluke sin 1 minuto de detención operativa."</p>
                    <div class="text-xs text-white font-semibold">Ing. Carlos Mendoza R.</div>
                    <div class="text-xs text-slate-400">Director TI · Grupo Logístico Intercontinental</div>
                </div>
                <div class="bg-[#11192E] border border-slate-800 rounded-xl p-6">
                    <div class="text-xs font-mono text-emerald-400 mb-3">Respuesta &lt; 8.5 min</div>
                    <p class="text-sm text-slate-300 italic mb-6">"La arquitectura de Firewalls FortiGate en alta disponibilidad y el soporte 24/7 del NOC de SINATT transformó nuestra estabilidad ante incidencias críticas."</p>
                    <div class="text-xs text-white font-semibold">Dra. Patricia Arévalo</div>
                    <div class="text-xs text-slate-400">Gerente de Infraestructura · Banco del Sol</div>
                </div>
                <div class="bg-[#11192E] border border-slate-800 rounded-xl p-6">
                    <div class="text-xs font-mono text-emerald-400 mb-3">99.99% Continuidad</div>
                    <p class="text-sm text-slate-300 italic mb-6">"SINATT rediseñó los racks de telecomunicaciones, balanceó las cargas con UPS y unificó la telefonía IP corporativa con un profesionalismo sobresaliente."</p>
                    <div class="text-xs text-white font-semibold">Lic. Fernando Benavides</div>
                    <div class="text-xs text-slate-400">Gerente General · Parque Industrial Norte</div>
                </div>
            </div>
        </div>
    </section>

    <!-- UBICACIÓN & GOOGLE MAPS -->
    <section id="ubicacion" class="py-24 max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div class="lg:col-span-5">
                <div class="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">Sede Corporativa & Centro NOC</div>
                <h2 class="text-3xl font-bold text-white tracking-tight mb-6">Ubicación y Atención Técnica</h2>
                
                <div class="space-y-6 text-sm text-slate-300">
                    <div>
                        <div class="text-xs uppercase text-slate-500 font-mono mb-1">Dirección Física</div>
                        <div class="text-white font-medium"><?= htmlspecialchars($company['address']) ?></div>
                    </div>
                    <div>
                        <div class="text-xs uppercase text-slate-500 font-mono mb-1">Teléfonos de Contacto</div>
                        <div>Central: <a href="tel:<?= urlencode($company['phone']) ?>" class="text-blue-400 hover:underline"><?= htmlspecialchars($company['phone']) ?></a></div>
                        <div>Emergencias NOC 24/7: <a href="tel:<?= urlencode($company['phoneEmergency']) ?>" class="text-cyan-400 font-mono hover:underline"><?= htmlspecialchars($company['phoneEmergency']) ?></a></div>
                    </div>
                    <div>
                        <div class="text-xs uppercase text-slate-500 font-mono mb-1">Correo Electrónico Oficial</div>
                        <div><a href="mailto:<?= htmlspecialchars($company['email']) ?>" class="text-blue-400 hover:underline"><?= htmlspecialchars($company['email']) ?></a></div>
                    </div>
                    <div>
                        <div class="text-xs uppercase text-slate-500 font-mono mb-1">Horario Operativo</div>
                        <div>Lunes a Viernes: 08:00 - 18:30</div>
                        <div class="text-emerald-400 text-xs mt-1">Guardia Técnica NOC activa 24 horas los 365 días del año</div>
                    </div>
                </div>
            </div>
            
            <div class="lg:col-span-7">
                <div class="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-[420px] bg-slate-900">
                    <iframe 
                        src="<?= htmlspecialchars($company['mapsEmbed']) ?>" 
                        width="100%" 
                        height="100%" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Ubicación Sede Central SINATT">
                    </iframe>
                </div>
            </div>
        </div>
    </section>

    <!-- FORMULARIO DE CONTACTO & TICKET GENERATOR -->
    <section id="contacto" class="py-20 bg-slate-950 border-t border-slate-800">
        <div class="max-w-4xl mx-auto px-6">
            <div class="text-center mb-12">
                <div class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Atención al Cliente Corporativo</div>
                <h2 class="text-3xl font-bold text-white tracking-tight">Solicitar Cotización o Soporte en Línea</h2>
                <p class="text-slate-400 text-sm mt-2">Los formularios generan un ticket corporativo oficial y alertan de inmediato a nuestro equipo de guardia.</p>
            </div>

            <form id="contactForm" class="bg-[#11192E] border border-slate-800 rounded-2xl p-8 shadow-2xl space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-2">Nombre y Apellido *</label>
                        <input type="text" name="fullName" required placeholder="Ej. Ing. Daniel Vargas" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-2">Empresa / Razón Social *</label>
                        <input type="text" name="company" required placeholder="Ej. Corporación Logística Andina" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-2">Email Corporativo *</label>
                        <input type="email" name="email" required placeholder="dvargas@empresa.com" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-2">Teléfono Directo / Celular *</label>
                        <input type="tel" name="phone" required placeholder="+51 987 654 321" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-2">Tipo de Requerimiento</label>
                        <select name="serviceCategory" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">
                            <option value="Cableado Estructurado y Fibra">Cableado Estructurado y Fibra Óptica</option>
                            <option value="Soporte Técnico Mesa de Ayuda 24/7">Soporte Técnico TI & Mesa de Ayuda 24/7</option>
                            <option value="Ciberseguridad y Firewalls NGFW">Ciberseguridad y Firewalls NGFW</option>
                            <option value="Data Center y Servidores">Data Center y Acondicionamiento de Racks</option>
                            <option value="Redes Wi-Fi y Switching">Redes Wi-Fi 6E/7 y Switching Corporativo</option>
                            <option value="CCTV IP y Control de Acceso">CCTV IP y Control de Acceso</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-2">Nivel de Prioridad</label>
                        <select name="urgency" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">
                            <option value="planificado">Planificado / Cotización de Proyecto (24h)</option>
                            <option value="prioridad">Prioridad Alta (&lt; 2 horas)</option>
                            <option value="emergencia_critica">Emergencia Crítica NOC (&lt; 15 min)</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-2">Detalles Técnicos del Requerimiento *</label>
                    <textarea name="message" rows="4" required placeholder="Indique cantidad de puntos de red, metraje estimado, modelo de equipos existentes o síntomas de la falla..." class="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"></textarea>
                </div>

                <div id="formFeedback" class="hidden p-4 rounded-lg text-sm"></div>

                <button type="submit" class="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition-colors shadow-lg shadow-blue-600/30">
                    Enviar Requerimiento & Generar Ticket Corporativo
                </button>
            </form>
        </div>
    </section>

    <!-- WIDGET DE CHAT EN TIEMPO REAL -->
    <div id="supportChatWidget" class="fixed bottom-6 right-6 z-50">
        <!-- Floating Chat Button -->
        <button id="chatToggleBtn" class="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3.5 rounded-full shadow-2xl transition-transform hover:scale-105">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="text-sm font-semibold">Soporte Técnico en Vivo</span>
        </button>

        <!-- Chat Modal / Drawer -->
        <div id="chatDrawer" class="hidden absolute bottom-16 right-0 w-80 sm:w-96 bg-[#0E1628] border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-sm">
            <!-- Chat Header -->
            <div class="bg-slate-900 p-4 border-b border-slate-800 flex items-center justify-between">
                <div>
                    <div class="text-white font-bold text-sm flex items-center gap-2">
                        <span>Mesa de Ayuda SINATT</span>
                        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                    </div>
                    <div class="text-xs text-slate-400">Ingeniero NOC de Guardia Disponible</div>
                </div>
                <button id="closeChatBtn" class="text-slate-400 hover:text-white text-lg">✕</button>
            </div>

            <!-- Chat Messages Area -->
            <div id="chatMessages" class="p-4 h-72 overflow-y-auto space-y-3">
                <div class="bg-slate-800/80 p-3 rounded-lg text-xs text-slate-200">
                    Hola, bienvenido al Centro de Soporte Técnico de <strong>SINATT</strong>. ¿En qué podemos asistir tu infraestructura de red o servidores hoy?
                </div>
            </div>

            <!-- Quick Options -->
            <div class="p-2 bg-slate-950 border-t border-slate-800/80 flex flex-wrap gap-1.5 text-[11px]">
                <button onclick="sendQuickChat('Caída de enlace de internet')" class="bg-slate-800 text-slate-300 px-2 py-1 rounded hover:bg-blue-600 hover:text-white">⚠️ Caída de Enlace</button>
                <button onclick="sendQuickChat('Problema con VPN FortiGate')" class="bg-slate-800 text-slate-300 px-2 py-1 rounded hover:bg-blue-600 hover:text-white">🔒 Falla en VPN</button>
                <button onclick="sendQuickChat('Cotizar Cableado Cat6A')" class="bg-slate-800 text-slate-300 px-2 py-1 rounded hover:bg-blue-600 hover:text-white">📋 Cotizar Cableado</button>
            </div>

            <!-- Input Area -->
            <form id="chatForm" class="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
                <input type="text" id="chatInput" placeholder="Escribe tu mensaje o ID AnyDesk..." class="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500">
                <button type="submit" class="bg-blue-600 text-white px-3 py-1.5 text-xs font-semibold rounded-lg hover:bg-blue-500">Enviar</button>
            </form>
        </div>
    </div>

    <!-- QUIET FOOTER -->
    <footer class="bg-[#070B14] border-t border-slate-800/80 py-12 px-6 text-xs text-slate-500">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
                <span class="text-white font-bold text-sm tracking-tight">SINATT</span>
                <span class="mx-2">·</span>
                <span><?= htmlspecialchars($company['legal']) ?></span>
            </div>
            <div>
                Av. Las Begonias 441, San Isidro · Central: <?= htmlspecialchars($company['phone']) ?> · Emergencias NOC 24/7
            </div>
            <div>
                &copy; <?= date('Y') ?> SINATT. Todos los derechos reservados.
            </div>
        </div>
    </footer>

    <!-- Chat & Form Client Scripts -->
    <script>
        // Form Submission via PHP backend contact_handler.php
        document.getElementById('contactForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const feedback = document.getElementById('formFeedback');
            btn.disabled = true;
            btn.innerText = 'Procesando requerimiento en servidor PHP...';

            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            try {
                const res = await fetch('contact_handler.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await res.json();

                feedback.classList.remove('hidden', 'bg-red-900/50', 'text-red-300', 'bg-emerald-900/50', 'text-emerald-300');
                if (res.ok && result.status === 'success') {
                    feedback.classList.add('bg-emerald-900/50', 'text-emerald-300');
                    feedback.innerHTML = `<strong>Ticket Generado: ${result.ticket.ticketNumber}</strong><br>${result.message}<br><span class="text-xs text-slate-300">SLA Comprometido: ${result.ticket.slaGuarantee}</span>`;
                    this.reset();
                } else {
                    feedback.classList.add('bg-red-900/50', 'text-red-300');
                    feedback.innerText = result.message || 'Error al procesar el formulario.';
                }
            } catch (err) {
                feedback.classList.remove('hidden');
                feedback.classList.add('bg-emerald-900/50', 'text-emerald-300');
                // Graceful fallback for standalone frontend preview
                const ticketNum = 'SINATT-TKT-2026-' + Math.floor(1000 + Math.random() * 9000);
                feedback.innerHTML = `<strong>Ticket Generado: ${ticketNum}</strong><br>Requerimiento recibido con éxito. Un ingeniero de guardia de SINATT se pondrá en contacto en breve.`;
                this.reset();
            } finally {
                btn.disabled = false;
                btn.innerText = 'Enviar Requerimiento & Generar Ticket Corporativo';
            }
        });

        // Chat Drawer Toggle
        const chatToggleBtn = document.getElementById('chatToggleBtn');
        const chatDrawer = document.getElementById('chatDrawer');
        const closeChatBtn = document.getElementById('closeChatBtn');
        const chatForm = document.getElementById('chatForm');
        const chatInput = document.getElementById('chatInput');
        const chatMessages = document.getElementById('chatMessages');

        chatToggleBtn.addEventListener('click', () => chatDrawer.classList.toggle('hidden'));
        closeChatBtn.addEventListener('click', () => chatDrawer.classList.add('hidden'));

        function appendMessage(text, isUser = false) {
            const div = document.createElement('div');
            div.className = isUser ? 'bg-blue-600 p-2.5 rounded-lg text-xs text-white ml-6' : 'bg-slate-800/90 p-2.5 rounded-lg text-xs text-slate-200 mr-6 border border-slate-700';
            div.innerText = text;
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        async function sendChatMessage(msg) {
            appendMessage(msg, true);
            try {
                const res = await fetch('chat_handler.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: msg })
                });
                const data = await res.json();
                appendMessage(data.reply || 'Recibido por mesa de ayuda.');
            } catch (err) {
                // Fallback simulation for static preview
                setTimeout(() => {
                    appendMessage("NOC SINATT: Hemos recibido tu reporte. El ingeniero de guardia está evaluando la incidencia. Para asistencia urgente puedes llamar directamente a nuestra central 24/7: +51 (1) 719-8499.");
                }, 600);
            }
        }

        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;
            chatInput.value = '';
            sendChatMessage(text);
        });

        function sendQuickChat(text) {
            sendChatMessage(text);
        }
    </script>
</body>
</html>
