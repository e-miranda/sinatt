# 🌐 Guía para Ver y Publicar tu Página SINATT desde GitHub

---

## 🖼️ Solución: ¿Por qué no se veían las imágenes en tu GitHub Pages?

En el código fuente que compartiste se lee:
```html
<script type="module" crossorigin src="./assets/index-BY0OmQcK.js"></script>
```

**La causa exacta**:  
El archivo `index-BY0OmQcK.js` corresponde a una **compilación anterior** en tu repositorio donde las imágenes no estaban empaquetadas.

En la **nueva compilación** (`index-CUEDUhLd.js`):
1. Todas las 6 fotografías profesionales de infraestructura, NOC, fibra y data centers están empaquetadas en `docs/assets/` (y `dist/assets/`).
2. Se agregaron controladores automáticos de contingencia (`onError`) para que nunca aparezca un icono roto.

---

## 🚀 Cómo actualizar tu GitHub Pages para que aparezcan las imágenes:

### Caso A: Si usas la terminal con Git (Lo más rápido)
Ejecuta estos 3 comandos en la carpeta de tu proyecto:
```bash
git add .
git commit -m "Actualizar imágenes y compilación de producción"
git push origin main
```
*(Si tu rama principal es `master`, escribe `git push origin master`)*.

---

### Caso B: Si usas GitHub Actions (`.github/workflows/deploy.yml`)
1. Asegúrate de haber subido la carpeta `src/` actualizada a tu repositorio en GitHub para que GitHub Actions compile la versión correcta.
2. Ve a la pestaña **Actions** en tu repositorio de GitHub para confirmar que el workflow `Deploy to GitHub Pages` terminó con check verde (✅).
3. Una vez terminado, abre tu enlace de GitHub Pages y presiona **Ctrl + F5** (o **Cmd + Shift + R** en Mac) para forzar la recarga sin caché.

---

### Caso C: Si usas "Deploy from a branch" -> carpeta `/docs`
1. Sube o reemplaza la carpeta **`docs/`** en tu repositorio de GitHub con los nuevos archivos:
   - `docs/index.html`
   - `docs/assets/` (con todos los archivos `.jpg`, `.css` y `.js`)
   - `docs/.nojekyll`
2. En GitHub: ve a **Settings** -> **Pages**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (o `master`) y carpeta: `/docs`
   - Haz clic en **Save**.
3. En 1 minuto tu web estará lista con todas las fotos visibles.

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
