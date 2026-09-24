# 🌐 Guía Rápida: Solución de Imágenes y Publicación en GitHub

---

## ❓ ¿Debo cambiar de PHP a HTML para que se vean las imágenes?

**NO, no es necesario.**
- Tu sitio web publicado en GitHub Pages **ya es 100% HTML + CSS + JavaScript**.
- GitHub Pages **no ejecuta PHP** (es un servidor estático). El botón "Código PHP" de la barra superior es únicamente para quien desee descargar el código backend para cPanel o servidores Apache.
- La razón por la que no se ven las fotos es que tu `index.html` en GitHub tiene una compilación anterior (`index-BY0OmQcK.js`) que busca las fotos en rutas locales que dan error 404.

---

## ⚡ SOLUCIÓN RÁPIDA 1: Pega este Script en tu `index.html` (1 Minuto)

No tienes que descargar programas ni usar la terminal. Puedes solucionarlo directamente desde el navegador en GitHub:

1. Entra a tu repositorio en **GitHub.com**.
2. Haz clic en el archivo **`index.html`** (o `docs/index.html` si publicas desde `/docs`).
3. Haz clic en el icono del **Lápiz ✏️ (Edit this file)** arriba a la derecha.
4. Pega el siguiente script justo antes de `</head>`:

```html
<!-- SCRIPT DE VISUALIZACIÓN INMEDIATA DE IMÁGENES CDN (SINATT) -->
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

    // Intercepta errores 404 al instante
    window.addEventListener('error', function(e) {
      if (e.target && e.target.tagName === 'IMG') {
        var img = e.target;
        if (img.src && img.src.indexOf('unsplash.com') === -1) {
          img.src = getFallback(img.src);
        }
      }
    }, true);

    // Repara imágenes que hayan cargado vacías
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
</script>
```

5. Baja y haz clic en el botón verde **Commit changes...**
6. Espera 1 minuto y recarga tu página web en GitHub Pages (**Ctrl + F5**):  
   **¡Todas las imágenes de Data Center, NOC, Fibra Óptica, Ciberseguridad y Wi-Fi aparecerán inmediatamente en alta resolución!**

---

## 🚀 SOLUCIÓN 2: Actualizar la Compilación Completa (Si usas Git en tu PC)

Si tienes el repositorio clonado en tu computadora:
```bash
git add .
git commit -m "Actualizar fotos e incluir script de contingencia CDN"
git push origin main
```
*(o `git push origin master` si tu rama se llama master)*.

---

## 📁 SOLUCIÓN 3: Si subes archivos manualmente a GitHub

Asegúrate de que la carpeta **`assets/`** se encuentre subida junto con `index.html`. La nueva carpeta `docs/assets/` contiene tanto el script como las 6 fotografías originales optimizadas.

---

## ⚡ Solución Directa para Publicar en GitHub Pages

Si en GitHub estás viendo este mensaje:
> **Build and deployment**  
> **Source**  
> *Use a suggested workflow, browse all workflows, or create your own.*

Tienes **2 soluciones rápidas**:

---

### 👉 OPCIÓN 1 (La más fácil y recomendada - Sin configurar workflows):
Usa la carpeta pre-compilada `/docs` que ya dejamos lista en el proyecto:

1. En el selector **Source**, haz clic y elige:  
   👉 **`Deploy from a branch`**
2. Aparecerá debajo una opción llamada **Branch**:
   - En el primer botón desplegable, selecciona tu rama: **`main`** (o `master`).
   - En el segundo botón desplegable que dice `/(root)`, cámbialo a:  
     👉 **`/docs`** *(ya contiene todo el sitio web compilado con imágenes y estilos).*
3. Haz clic en el botón azul **Save** (Guardar).
4. Espera 1 minuto, recarga la página de Settings -> Pages y verás tu URL en verde:  
   `"Your site is live at https://<tu-usuario>.github.io/<repositorio>/"`

---

### 👉 OPCIÓN 2 (Si quieres usar GitHub Actions):
Si mantienes seleccionado **Source: GitHub Actions**:
Ese mensaje aparece porque GitHub te invita a elegir un archivo de workflow o aún no se ha detectado el archivo `.github/workflows/deploy-pages.yml` en la rama principal.

1. Asegúrate de haber subido todos los cambios a GitHub:
   ```bash
   git add .
   git commit -m "Agregar carpeta docs y workflow de github actions"
   git push origin main
   ```
2. O bien, si estás en la página de GitHub donde dice *"create your own"*, haz clic en **`create your own`**, borra lo que haya y pega el contenido del archivo `.github/workflows/deploy-pages.yml`, luego haz clic en **Commit changes**.
3. Al guardarlo, GitHub Actions compilará y desplegará tu web automáticamente.

---

## 🐘 Método 2: Publicar la Versión PHP en la Nube (Gratis conectado a GitHub)

GitHub Pages es un servidor de contenido estático (HTML, CSS, JS). **GitHub Pages NO ejecuta PHP directamente** porque no cuenta con un intérprete PHP en sus servidores de páginas.

Para que tu código **PHP** (`/php-dist/index.php`, `contact_handler.php`, etc.) se ejecute con su backend en la nube cada vez que hagas `git push`:

### Opción A: Usar Render.com (Plan Gratuito)
1. Crea una cuenta gratuita en [Render.com](https://render.com) iniciando sesión con tu GitHub.
2. Haz clic en **New +** y selecciona **Web Service**.
3. Selecciona tu repositorio de GitHub.
4. En **Root Directory**, escribe: `php-dist`
5. En **Runtime**, selecciona **Docker** o **PHP**.
6. Haz clic en **Create Web Service**.
7. Render te entregará una URL pública y segura (con HTTPS) como:
   `https://sinatt-bolivia.onrender.com`

### Opción B: Usar Railway.app o Koyeb
1. Conéctate a [Railway.app](https://railway.app) con tu GitHub.
2. Añade tu repositorio y selecciona la carpeta `php-dist`.
3. Se desplegará automáticamente.

### Opción C: Subir a cualquier Hosting cPanel (Apache / Nginx)
1. En la barra de navegación superior de la web, haz clic en el botón **"Código PHP GitHub"**.
2. Haz clic en **"Descargar Paquete ZIP Completo"**.
3. Descomprime los archivos dentro de la carpeta `public_html` de tu hosting.

---

## 💻 Método 3: Ver la Página en tu Computadora (Localmente)

Si clonaste el repositorio en tu máquina y quieres probarlo:

### Para probar la versión PHP:
```bash
cd php-dist
php -S localhost:8000
```
Abre tu navegador en: [http://localhost:8000](http://localhost:8000)

### Para probar la versión interactiva completa:
```bash
npm install
npm run dev
```
Abre tu navegador en: [http://localhost:3000](http://localhost:3000)
