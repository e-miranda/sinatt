<?php
/**
 * SINATT Tecnologías e Infraestructura de Redes
 * Contact & Support Ticket Handler (PHP 8.x)
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');

// Allow CORS if hosted on different origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: POST, OPTIONS");
    }
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'message' => 'Método no permitido. Utilice POST.'
    ]);
    exit;
}

// Read raw JSON or form-data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    $data = $_POST;
}

// Sanitize inputs
$fullName = trim(htmlspecialchars($data['fullName'] ?? $data['nombre'] ?? ''));
$company = trim(htmlspecialchars($data['company'] ?? $data['empresa'] ?? ''));
$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = trim(htmlspecialchars($data['phone'] ?? $data['telefono'] ?? ''));
$serviceCategory = trim(htmlspecialchars($data['serviceCategory'] ?? $data['servicio'] ?? 'General'));
$networkPoints = trim(htmlspecialchars($data['networkPoints'] ?? $data['puntos_red'] ?? 'No especificado'));
$urgency = trim(htmlspecialchars($data['urgency'] ?? $data['urgencia'] ?? 'planificado'));
$message = trim(htmlspecialchars($data['message'] ?? $data['mensaje'] ?? ''));

// Validate required fields
if (empty($fullName) || empty($company) || !$email || empty($phone) || empty($message)) {
    http_response_code(422);
    echo json_encode([
        'status' => 'error',
        'message' => 'Por favor complete todos los campos requeridos: Nombre, Empresa, Email corporativo válido, Teléfono y Mensaje.'
    ]);
    exit;
}

// Generate unique SINATT Ticket Number
$year = date('Y');
$randomCode = strtoupper(bin2hex(random_bytes(3)));
$ticketNumber = "SINATT-TKT-{$year}-{$randomCode}";
$timestamp = date('Y-m-d H:i:s');

// Determine SLA based on urgency
$slaResponseTime = match ($urgency) {
    'emergencia_critica' => 'Atención inmediata NOC < 15 minutos (Llamada de guardia directa)',
    'prioridad' => 'Contacto de ingeniero especialista < 2 horas',
    default => 'Diagnóstico y cotización formal en menos de 24 horas hábiles'
};

$ticketRecord = [
    'ticket' => $ticketNumber,
    'fecha' => $timestamp,
    'contacto' => $fullName,
    'empresa' => $company,
    'email' => $email,
    'telefono' => $phone,
    'servicio' => $serviceCategory,
    'puntos_red' => $networkPoints,
    'urgencia' => $urgency,
    'sla_comprometido' => $slaResponseTime,
    'mensaje' => $message,
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'Desconocida'
];

// Optional: Log ticket to local json database file for record keeping
$logDir = __DIR__ . '/storage';
if (!is_dir($logDir)) {
    @mkdir($logDir, 0755, true);
}
$logFile = $logDir . '/tickets.json';
$existingTickets = [];
if (file_exists($logFile)) {
    $content = @file_get_contents($logFile);
    if ($content) {
        $existingTickets = json_decode($content, true) ?: [];
    }
}
$existingTickets[] = $ticketRecord;
@file_put_contents($logFile, json_encode($existingTickets, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// Optional: Send corporate notification via PHP mail()
$toCorporate = "soporte@sinatt.com";
$emailSubject = "[TICKET {$ticketNumber}] Nuevo Requerimiento - {$company} ({$serviceCategory})";
$emailBody = "TICKET CORPORATIVO SINATT\n"
    . "----------------------------------------\n"
    . "Ticket N°: {$ticketNumber}\n"
    . "Fecha: {$timestamp}\n"
    . "Empresa: {$company}\n"
    . "Contacto: {$fullName}\n"
    . "Email: {$email}\n"
    . "Teléfono: {$phone}\n"
    . "Servicio: {$serviceCategory}\n"
    . "Puntos de Red / Escala: {$networkPoints}\n"
    . "Nivel de Urgencia: {$urgency}\n"
    . "SLA Comprometido: {$slaResponseTime}\n\n"
    . "Mensaje / Requerimiento Técnico:\n{$message}\n"
    . "----------------------------------------\n";

$headers = "From: noreply@sinatt.com\r\n"
    . "Reply-To: {$email}\r\n"
    . "X-Mailer: PHP/" . phpversion();

// Suppress mail error in local test environments without sendmail
@mail($toCorporate, $emailSubject, $emailBody, $headers);

http_response_code(200);
echo json_encode([
    'status' => 'success',
    'message' => 'Requerimiento corporativo registrado exitosamente en el sistema de SINATT.',
    'ticket' => [
        'ticketNumber' => $ticketNumber,
        'createdAt' => $timestamp,
        'company' => $company,
        'fullName' => $fullName,
        'serviceCategory' => $serviceCategory,
        'urgency' => $urgency,
        'slaGuarantee' => $slaResponseTime
    ]
], JSON_UNESCAPED_UNICODE);
exit;
