# 🐾 Mimados · Peluquería Canina

Sitio web oficial de **Mimados**, peluquería y estética canina profesional situada en el centro de **Alhama de Murcia**.

## 🌐 Ver en línea

> **URL del sitio:** `https://<tu-usuario>.github.io/mimados/`
> *(sustituye `<tu-usuario>` por tu nombre de usuario de GitHub)*

---

## 📋 Contenido del sitio

- **Hero** con imagen de fachada y valoración ⭐ 9.8/10
- **Servicios**: baño, corte, estética completa, accesorios, antiparasitarios y asesoramiento
- **Sección "Nosotros"**: historia y valores del negocio
- **Diplomas**: acreditaciones oficiales de Isabel Soria Melgarejo
- **Galería** fotográfica con lightbox
- **Horarios** de atención semanales
- **Formulario de reserva** → envía directamente a WhatsApp 660 29 49 79
- **Ubicación** con mapa de Google Maps embebido
- **Botón flotante de WhatsApp** siempre visible

---

## 🚀 Publicar en GitHub Pages (paso a paso)

### 1. Crear repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión (o crea una cuenta gratuita)
2. Haz clic en **"New repository"** (botón verde, arriba a la derecha)
3. Nombre del repositorio: `mimados` *(o el que prefieras)*
4. Déjalo **público** (Public)
5. **NO** marques "Add a README file" (ya tenemos uno)
6. Haz clic en **"Create repository"**

### 2. Subir los archivos

#### Opción A — Arrastrar y soltar (más fácil, sin terminal)

1. En la página del repositorio recién creado, haz clic en **"uploading an existing file"**
2. Arrastra TODOS los archivos de la carpeta `proyecto-mimados`:
   - `index.html`
   - `style.css`
   - `main.js`
   - `README.md`
   - Todas las imágenes (`.jpg`, `.webp`, `.png`)
3. Escribe un mensaje de commit: `Primer commit: sitio web Mimados`
4. Haz clic en **"Commit changes"**

#### Opción B — Terminal (si tienes Git instalado)

```bash
# Navega a la carpeta del proyecto
cd ~/Desktop/proyecto-mimados

# Inicializa Git y sube
git init
git add .
git commit -m "Primer commit: sitio web Mimados"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/mimados.git
git push -u origin main
```

### 3. Activar GitHub Pages

1. En tu repositorio, ve a **Settings** (pestaña superior)
2. En el menú izquierdo, haz clic en **Pages**
3. En "Source", selecciona **Deploy from a branch**
4. Branch: **main** / Carpeta: **/ (root)**
5. Haz clic en **Save**
6. Espera 1-2 minutos y recarga la página
7. Aparecerá el enlace: `https://<tu-usuario>.github.io/mimados/` ✅

---

## 📁 Estructura de archivos

```
proyecto-mimados/
├── index.html              ← Página principal
├── style.css               ← Estilos
├── main.js                 ← JavaScript (WhatsApp, menú, animaciones)
├── README.md               ← Este archivo
├── mimados-fachada.jpg     ← Fachada del local (hero)
├── mimados-belleza.jpg     ← Interior / productos
├── mimados-diploma.jpg     ← Diploma Idea Institut
├── mimados-diploma2.jpg    ← Diploma CCC Centro de Estudios
├── mimados-datos.png       ← Datos del negocio
├── accesorios-perros.jpg   ← Galería: accesorios
├── juguetes-piensos.jpg    ← Galería: juguetes y piensos
├── equipo.jpg              ← Galería: clientes felices
├── dulce.jpg               ← Imagen adicional
├── tierno.jpg              ← Galería: mascota tierna
├── rey.jpg                 ← Galería: resultado
└── peludin.webp            ← Imagen flotante sección "Nosotros"
```

---

## 📞 Datos de contacto

| Campo       | Valor                         |
|-------------|-------------------------------|
| Teléfono    | 660 29 49 79                  |
| WhatsApp    | +34 660 29 49 79              |
| Dirección   | C. Azorín, Nº 34              |
| Ciudad      | Alhama de Murcia, 30840       |
| Provincia   | Murcia, España                |

---

*Sitio web creado con HTML, CSS y JavaScript puro. Sin dependencias externas, listo para GitHub Pages.*
