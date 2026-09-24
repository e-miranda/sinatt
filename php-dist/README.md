# SINATT - Infraestructura de Redes y Soporte Corporativo (Proyecto PHP)

Proyecto web corporativo moderno para **SINATT**, desarrollado en **PHP 8.x** con arquitectura responsiva moderna (Tailwind CSS, JavaScript Vanilla para chat de soporte y cotizador en tiempo real, e integración backend para procesamiento de formularios y tickets).

---

## 🚀 Cómo ejecutar desde GITHUB

GitHub aloja repositorios de código. Para ejecutar PHP:

### Opción 1: Ejecutar localmente con PHP integrado (Inmediato)
Si clonaste este repositorio desde GitHub:
```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/sinatt-php.git
cd sinatt-php

# 2. Iniciar el servidor web local integrado de PHP (puerto 8000)
php -S localhost:8000

# 3. Abrir en tu navegador
# http://localhost:8000
```

### Opción 2: Despliegue con Docker / GitHub Actions
Puedes incluir un `Dockerfile` simple en tu repositorio GitHub:
```dockerfile
FROM php:8.2-apache
COPY . /var/www/html/
RUN a2enmod rewrite
EXPOSE 80
```
Y desplegar automáticamente con un workflow de GitHub Actions hacia cualquier nube (Render, Railway, AWS, DigitalOcean o Google Cloud Run).

### Opción 3: Subir a Servidor Web / Hosting PHP (Apache / Nginx / cPanel)
1. Sube todos los archivos de esta carpeta (`index.php`, `contact_handler.php`, `chat_handler.php`, `.htaccess`) a tu carpeta `public_html` o raíz de tu servidor web.
2. Asegúrate de que el directorio `storage/` tenga permisos de escritura (`chmod 755 storage`) para el guardado local de tickets.
3. Configura el correo de destino en `contact_handler.php` en la variable `$toCorporate`.

---

## 📁 Estructura del Proyecto PHP

| Archivo | Descripción |
|---|---|
| `index.php` | Página principal completa con diseño corporativo moderno, catálogo de servicios empresariales, cotizador interactivo, mapa de Google Maps, testimonios y widget de chat integrado. |
| `contact_handler.php` | API backend en PHP que procesa formularios de contacto, valida datos corporativos, genera tickets con prefijo oficial `SINATT-TKT-YYYY-XXXX`, envía notificaciones y registra las incidencias. |
| `chat_handler.php` | Endpoint backend para el widget de soporte técnico en tiempo real con triaje automático (caídas de enlace, VPNs, cableado, AnyDesk/TeamViewer). |
| `.htaccess` | Reglas de seguridad Apache y cabeceras de protección (X-Frame-Options, X-Content-Type-Options). |

---

## 🏢 Datos Corporativos de SINATT
- **Razón Social:** SINATT Tecnologías e Infraestructura de Redes S.R.L.
- **Dirección:** Calle Soria Galvarro y Junín, Zona Central, Oruro - Bolivia
- **Central Telefónica:** +591 (2) 525-4800
- **Emergencias NOC 24/7:** +591 718-42900
- **WhatsApp Empresas:** +591 718 42 900
- **Email Corporativo:** soporte@sinatt.com / contacto@sinatt.com
