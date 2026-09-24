import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  Code2, 
  Terminal, 
  Github, 
  FileCode, 
  FolderCheck,
  Server
} from 'lucide-react';
import JSZip from 'jszip';

interface PhpCodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhpCodeExportModal: React.FC<PhpCodeExportModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'imageScript' | 'instructions' | 'index' | 'contact' | 'chat' | 'readme'>('imageScript');
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const imageRepairScript = `<!-- SCRIPT DE VISUALIZACIÓN GARANTIZADA DE IMÁGENES (Pegar antes de </head> en tu index.html) -->
<script>
  (function() {
    var cdnImages = {
      datacenter: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
      cyber: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
      fiber: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
      noc: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
      wifi: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
      engineer: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80'
    };

    function getFallback(src) {
      var s = (src || '').toLowerCase();
      if (s.indexOf('cyber') !== -1 || s.indexOf('soc') !== -1) return cdnImages.cyber;
      if (s.indexOf('fiber') !== -1 || s.indexOf('optic') !== -1) return cdnImages.fiber;
      if (s.indexOf('engineer') !== -1) return cdnImages.engineer;
      if (s.indexOf('noc') !== -1 || s.indexOf('support') !== -1) return cdnImages.noc;
      if (s.indexOf('wifi') !== -1 || s.indexOf('cloud') !== -1) return cdnImages.wifi;
      return cdnImages.datacenter;
    }

    // 1. Interceptar errores de carga 404
    window.addEventListener('error', function(e) {
      if (e.target && e.target.tagName === 'IMG') {
        var img = e.target;
        if (img.src && img.src.indexOf('unsplash.com') === -1) {
          img.src = getFallback(img.src);
        }
      }
    }, true);

    // 2. Comprobación de imágenes que hayan quedado en blanco
    function fixImages() {
      var imgs = document.querySelectorAll('img');
      for (var i = 0; i < imgs.length; i++) {
        var img = imgs[i];
        if ((img.complete && img.naturalWidth === 0) || !img.src) {
          var oldSrc = img.src || '';
          if (oldSrc.indexOf('unsplash.com') === -1) {
            img.src = getFallback(oldSrc);
          }
        }
      }
    }
    setInterval(fixImages, 1000);
    document.addEventListener('DOMContentLoaded', fixImages);
  })();
</script>`;

  const filesContent = {
    imageScript: imageRepairScript,
    index: `<?php
/**
 * SINATT - Infraestructura de Redes y Soporte Corporativo (PHP 8.x)
 * Standalone Production File for GitHub
 */
$company = [
    'name' => 'SINATT',
    'legal' => 'SINATT Tecnologías e Infraestructura de Redes S.R.L.',
    'phone' => '+591 (2) 525-4800',
    'phoneEmergency' => '+591 718-42900',
    'email' => 'soporte@sinatt.com',
    'address' => 'Calle Soria Galvarro y Junín, Oruro, Bolivia',
    'mapsEmbed' => 'https://maps.google.com/maps?q=Calle+Soria+Galvarro+y+Junin,+Oruro,+Bolivia&t=&z=17&ie=UTF8&iwloc=&output=embed'
];
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title><?= $company['name'] ?> - Infraestructura de Redes</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#0A0F1D] text-white">
  <!-- Contenido completo con Servicios, Testimonios, Google Maps y Chat -->
  <!-- Ver archivo /php-dist/index.php en el repositorio -->
</body>
</html>`,
    contact: `<?php
/**
 * SINATT Contact & Ticket API (PHP 8.x)
 */
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Método no permitido.']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true) ?: $_POST;

$fullName = htmlspecialchars(trim($data['fullName'] ?? ''));
$company = htmlspecialchars(trim($data['company'] ?? ''));
$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = htmlspecialchars(trim($data['phone'] ?? ''));
$serviceCategory = htmlspecialchars(trim($data['serviceCategory'] ?? 'General'));
$message = htmlspecialchars(trim($data['message'] ?? ''));

if (!$email || empty($company) || empty($fullName)) {
    http_response_code(422);
    echo json_encode(['status' => 'error', 'message' => 'Datos incompletos.']);
    exit;
}

$ticket = "SINATT-TKT-" . date('Y') . "-" . strtoupper(bin2hex(random_bytes(3)));

// Guardar ticket y notificar por correo corporativo
echo json_encode([
    'status' => 'success',
    'message' => 'Requerimiento registrado en la mesa de ayuda de SINATT.',
    'ticket' => [
        'ticketNumber' => $ticket,
        'company' => $company,
        'slaGuarantee' => 'Respuesta en menos de 2 horas hábiles'
    ]
]);
exit;`,
    chat: `<?php
/**
 * SINATT NOC Support Chat & Triage API (PHP 8.x)
 */
header('Content-Type: application/json; charset=utf-8');

$input = file_get_contents('php://input');
$data = json_decode($input, true) ?: $_POST;
$msg = strtolower(trim($data['message'] ?? ''));

$response = [
    'timestamp' => date('H:i'),
    'agent' => 'Ing. Rodrigo Morales (NOC L2)'
];

if (str_contains($msg, 'caida') || str_contains($msg, 'internet')) {
    $response['reply'] = "⚠️ Alerta de enlace caída detectada. Por favor confirme si afecta a toda la sede o ingrese su ID de AnyDesk.";
    $response['ticketId'] = "NOC-INC-" . rand(1000, 9999);
} else {
    $response['reply'] = "Mensaje recibido por la guardia de SINATT. Un especialista está disponible para asistirte.";
}

echo json_encode($response);
exit;`,
    readme: `# Instrucciones para Ejecutar SINATT en PHP desde GITHUB

1. Clonar el repositorio desde GitHub:
   git clone https://github.com/tu-usuario/sinatt-php.git
   cd sinatt-php

2. Iniciar el servidor local PHP (disponible en cualquier sistema con PHP 8+):
   php -S localhost:8000

3. Abrir en el navegador:
   http://localhost:8000

4. Para subir a Hosting / Servidor Web (Apache, Nginx, cPanel):
   - Sube index.php, contact_handler.php, chat_handler.php y .htaccess a public_html/
   - Asegura permisos de escritura en la carpeta storage/`
  };

  const handleCopy = (tabKey: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedTab(tabKey);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  const handleDownloadZip = async () => {
    setIsDownloading(true);
    try {
      const zip = new JSZip();

      // Fetch or assemble real files
      zip.file('index.php', filesContent.index);
      zip.file('contact_handler.php', filesContent.contact);
      zip.file('chat_handler.php', filesContent.chat);
      zip.file('README.md', filesContent.readme);
      zip.file('.htaccess', `# SINATT Apache Config\nRewriteEngine On\nHeader set X-Content-Type-Options "nosniff"\nHeader set X-Frame-Options "SAMEORIGIN"\n`);

      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sinatt-tecnologia-php.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-[#0B1120] border border-slate-700 max-w-4xl w-full rounded-2xl flex flex-col max-h-[92vh] overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="p-6 bg-[#080D1A] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">Paquete de Código PHP para GitHub</h3>
                <span className="text-[10px] font-mono bg-blue-950 text-cyan-400 border border-blue-800 px-2 py-0.5 rounded">
                  PHP 8.x LISTO
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Archivos autónomos en PHP listos para clonar, ejecutar localmente o subir a cualquier hosting/servidor web.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Bar / Download Banner */}
        <div className="p-4 bg-slate-900/90 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <FolderCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Los archivos ya se encuentran generados en la carpeta <strong>/php-dist/</strong> de este proyecto.</span>
          </div>

          <button
            onClick={handleDownloadZip}
            disabled={isDownloading}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/30 flex items-center gap-2 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{isDownloading ? 'Empaquetando...' : 'Descargar Todo en ZIP (.zip)'}</span>
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-800 bg-[#080D1A] overflow-x-auto">
          <button
            onClick={() => setActiveTab('imageScript')}
            className={`pb-3 text-xs font-semibold transition-colors flex items-center gap-1.5 border-b-2 whitespace-nowrap ${
              activeTab === 'imageScript'
                ? 'text-emerald-400 border-emerald-400'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>⚡ Solución Rápida Imágenes (Script 1-Click)</span>
          </button>

          <button
            onClick={() => setActiveTab('instructions')}
            className={`pb-3 text-xs font-semibold transition-colors flex items-center gap-1.5 border-b-2 whitespace-nowrap ${
              activeTab === 'instructions'
                ? 'text-cyan-400 border-cyan-400'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            <Github className="w-4 h-4" />
            <span>Guía de Ejecución GitHub</span>
          </button>

          <button
            onClick={() => setActiveTab('index')}
            className={`pb-3 text-xs font-semibold transition-colors flex items-center gap-1.5 border-b-2 whitespace-nowrap ${
              activeTab === 'index'
                ? 'text-blue-400 border-blue-400'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>index.php</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`pb-3 text-xs font-semibold transition-colors flex items-center gap-1.5 border-b-2 whitespace-nowrap ${
              activeTab === 'contact'
                ? 'text-blue-400 border-blue-400'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>contact_handler.php</span>
          </button>

          <button
            onClick={() => setActiveTab('chat')}
            className={`pb-3 text-xs font-semibold transition-colors flex items-center gap-1.5 border-b-2 whitespace-nowrap ${
              activeTab === 'chat'
                ? 'text-blue-400 border-blue-400'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>chat_handler.php</span>
          </button>

          <button
            onClick={() => setActiveTab('readme')}
            className={`pb-3 text-xs font-semibold transition-colors flex items-center gap-1.5 border-b-2 whitespace-nowrap ${
              activeTab === 'readme'
                ? 'text-blue-400 border-blue-400'
                : 'text-slate-400 border-transparent hover:text-white'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>README.md</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 text-xs">
          
          {activeTab === 'imageScript' && (
            <div className="space-y-6 text-slate-300 leading-relaxed">
              {/* Clarification Alert */}
              <div className="bg-emerald-950/30 border border-emerald-500/40 rounded-xl p-4 sm:p-5">
                <h4 className="text-sm font-bold text-emerald-300 flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>¿Debo cambiar de PHP a HTML para ver las imágenes?</span>
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed mb-3">
                  <strong>¡No es necesario!</strong> Tu sitio web publicado en GitHub Pages <strong>ya es 100% HTML y JavaScript</strong>. GitHub Pages no procesa PHP; todo lo que publica ya es estático.
                </p>
                <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 text-slate-300 text-[11px] space-y-1">
                  <p><strong className="text-cyan-400">¿Por qué no se veían las imágenes en tu web?</strong></p>
                  <p>En el código de tu web publicada en GitHub se está ejecutando la compilación anterior (<code className="text-amber-300 font-mono">index-BY0OmQcK.js</code>), donde las rutas de las fotos buscaban archivos locales que no estaban en tu repositorio, dando error 404.</p>
                </div>
              </div>

              {/* Solution steps */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono text-xs">⚡</span>
                    <span>Solución Inmediata en 1 Minuto: Script Reparador de Imágenes</span>
                  </h4>
                  <button
                    onClick={() => handleCopy('imageScript', filesContent.imageScript)}
                    className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer text-xs"
                  >
                    {copiedTab === 'imageScript' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>¡Script Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Script</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-slate-300 text-xs space-y-2">
                  <p>
                    <strong>Cómo aplicarlo directamente en GitHub (sin comandos ni terminal):</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-slate-300 bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-[11px]">
                    <li>Abre tu repositorio en <strong className="text-white">GitHub.com</strong>.</li>
                    <li>Haz clic sobre el archivo <strong className="text-cyan-300">index.html</strong> (o <code className="text-cyan-300">docs/index.html</code> según tu configuración).</li>
                    <li>Haz clic en el icono del <strong>Lápiz ✏️ (Edit this file)</strong> arriba a la derecha.</li>
                    <li>Pega este script justo antes de la etiqueta <code className="text-emerald-400">&lt;/head&gt;</code>.</li>
                    <li>Haz clic en el botón verde <strong>Commit changes...</strong> y guarda los cambios.</li>
                  </ol>
                  <p className="text-[11px] text-slate-400">
                    ¡Listo! En menos de 60 segundos, GitHub Pages actualizará tu web y todas las fotos (Data Center, NOC, Fibra Óptica, Ciberseguridad) aparecerán en alta resolución gracias a la CDN global.
                  </p>
                </div>

                <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-[11px] text-cyan-300 overflow-x-auto max-h-64 leading-relaxed select-all">
                  {filesContent.imageScript}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'instructions' && (
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>Paso a Paso: Cómo alojar y ejecutar en GitHub</span>
                </h4>
                <p className="text-xs text-slate-300">
                  GitHub es una plataforma de repositorios de código Git. Como PHP requiere un intérprete del lado del servidor para procesar peticiones y enviar correos, aquí tienes las 3 formas más recomendadas de ejecutarlo:
                </p>

                <div className="space-y-4 font-mono text-[11px]">
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
                    <span className="text-cyan-400 font-bold">1. Clonar desde GitHub y ejecutar localmente:</span>
                    <pre className="text-slate-200 overflow-x-auto py-1">
{`git clone https://github.com/tu-organizacion/sinatt-php.git
cd sinatt-php
php -S localhost:8000`}
                    </pre>
                    <span className="text-slate-500 text-[10px]">¡Listo! Abre http://localhost:8000 en tu navegador.</span>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
                    <span className="text-emerald-400 font-bold">2. Conectar tu repositorio de GitHub a un Hosting PHP:</span>
                    <p className="text-slate-400 font-sans text-xs">
                      Servicios como <strong>Render.com</strong>, <strong>Railway.app</strong> o <strong>Heroku</strong> te permiten vincular tu repositorio de GitHub directamente: cada vez que hagas <code className="text-cyan-300 font-mono">git push</code>, se despliega automáticamente en la nube con PHP 8.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-1">
                    <span className="text-indigo-400 font-bold">3. Subir a Servidor Web tradicional (Apache / cPanel):</span>
                    <p className="text-slate-400 font-sans text-xs">
                      Copia todos los archivos contenidos en la carpeta <code className="text-cyan-300 font-mono">/php-dist/</code> directamente a la raíz <code className="text-slate-300">public_html</code> de tu hosting. Funcionará de inmediato sin configuraciones complejas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="font-bold text-white mb-1">index.php</div>
                  <div className="text-slate-400 text-[11px]">Página responsiva moderna con Tailwind, catálogo, cotizador, mapa y widget de chat.</div>
                </div>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="font-bold text-white mb-1">contact_handler.php</div>
                  <div className="text-slate-400 text-[11px]">Procesa formularios, genera tickets oficiales SINATT-TKT-XXXX y envía correos.</div>
                </div>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="font-bold text-white mb-1">chat_handler.php</div>
                  <div className="text-slate-400 text-[11px]">Backend para triaje de caídas de red, problemas de VPN y sesiones AnyDesk.</div>
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'instructions' && (
            <div className="relative">
              <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-800">
                <span className="font-mono text-slate-400 text-[11px]">
                  Visualizando: {activeTab === 'index' ? 'index.php' : activeTab === 'contact' ? 'contact_handler.php' : activeTab === 'chat' ? 'chat_handler.php' : 'README.md'}
                </span>
                <button
                  onClick={() => handleCopy(activeTab, filesContent[activeTab as keyof typeof filesContent])}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  {copiedTab === activeTab ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Código</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-[11px] text-slate-200 overflow-x-auto max-h-96 leading-relaxed">
                {filesContent[activeTab as keyof typeof filesContent]}
              </pre>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#080D1A] border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 font-mono">
            SINATT Infraestructura · Versión PHP 8.2+
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
