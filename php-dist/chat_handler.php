<?php
/**
 * SINATT Tecnologías e Infraestructura de Redes
 * Real-time Support Chat & NOC Incident Dispatcher (PHP 8.x)
 */

header('Content-Type: application/json; charset=utf-8');

$input = file_get_contents('php://input');
$data = json_decode($input, true) ?: $_POST;

$action = $data['action'] ?? 'message';
$query = strtolower(trim($data['message'] ?? ''));
$company = htmlspecialchars(trim($data['company'] ?? 'Empresa Corporativa'));

$response = [
    'status' => 'success',
    'timestamp' => date('H:i'),
    'agent' => [
        'name' => 'Ing. Rodrigo Morales',
        'role' => 'Especialista en Redes & NOC L2',
        'badge' => 'Certificado Cisco CCNP / Fortinet NSE'
    ]
];

if (empty($query)) {
    $response['reply'] = "Hola, bienvenido al Centro de Operaciones de Red (NOC) de SINATT. ¿En qué podemos apoyar la infraestructura tecnológica de tu empresa hoy?";
    $response['quickOptions'] = [
        'Caída de enlace / Internet caído',
        'Falla en VPN o Firewall FortiGate',
        'Cotización de Cableado Cat6A o Fibra',
        'Soporte Remoto para Servidores'
    ];
} elseif (str_contains($query, 'caída') || str_contains($query, 'internet') || str_contains($query, 'enlace') || str_contains($query, 'caido')) {
    $ticketId = 'NOC-' . rand(1000, 9999);
    $response['reply'] = "⚠️ Alerta de conectividad detectada. Hemos generado el prefijo de incidencia {$ticketId}. Por favor indícanos: 1) ¿Afecta a toda la sede o solo a un departamento? 2) ¿Las luces del módem/ONT o router principal parpadean en rojo? Nuestro ingeniero de guardia puede acceder ahora mismo vía OOBM o AnyDesk.";
    $response['ticketId'] = $ticketId;
    $response['quickOptions'] = ['Afecta a toda la sede', 'Solo un segmento de VLAN', 'Ingresar ID de AnyDesk / TeamViewer'];
} elseif (str_contains($query, 'vpn') || str_contains($query, 'firewall') || str_contains($query, 'fortigate') || str_contains($query, 'ciberseguridad')) {
    $response['reply'] = "Entendido. Para soporte sobre túneles VPN IPsec o políticas de Firewall FortiGate / Cisco: verificamos el estado del túnel fase 1 y fase 2. ¿El usuario remoto recibe timeout o error de negociación IKE?";
    $response['quickOptions'] = ['Error de negociación IKE', 'Túnel caído entre sedes', 'Solicitar reseteo de credenciales VPN'];
} elseif (str_contains($query, 'cableado') || str_contains($query, 'fibra') || str_contains($query, 'cotizar') || str_contains($query, 'rack')) {
    $response['reply'] = "Excelente. En SINATT ejecutamos tendidos certificados con equipos Fluke DSX-8000 Cat6A/Cat7 y fusiones ópticas por arco voltaico con 25 años de garantía. ¿Cuántos puntos de red aproximados requiere tu proyecto?";
    $response['quickOptions'] = ['Menos de 30 puntos', 'De 30 a 100 puntos', 'Más de 100 puntos corporativos'];
} elseif (str_contains($query, 'anydesk') || str_contains($query, 'teamviewer') || preg_match('/\d{6,10}/', $query)) {
    $ticketId = 'NOC-REMOTE-' . rand(1000, 9999);
    $response['reply'] = "ID de conexión remota recibido. Un ingeniero de guardia de SINATT está iniciando la sesión segura bajo protocolo cifrado TLS 1.3 con Ticket {$ticketId}. Por favor mantén abierta la ventana y autoriza el acceso.";
    $response['ticketId'] = $ticketId;
} else {
    $response['reply'] = "Mensaje recibido por la Mesa de Ayuda de SINATT. Uno de nuestros ingenieros de infraestructura está disponible para atender tu consulta técnica o cotizar tu requerimiento. También puedes comunicarte de inmediato a nuestra línea de emergencia 24/7: +51 (1) 719-8499.";
    $response['quickOptions'] = ['Llamar a Guardia NOC 24/7', 'Llenar Formulario de Cotización', 'Hablar con Especialista de Redes'];
}

echo json_encode($response, JSON_UNESCAPED_UNICODE);
exit;
