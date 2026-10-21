# Joyeria Leo

Landing page de Joyeria Leo, construida con Astro y preparada para desplegarse en Vercel.

## Desarrollo local

Requiere Node.js 22.23.4 o superior.

```bash
npm install
npm run dev
```

Luego abre la URL que muestra Astro (normalmente `http://localhost:4321`).

## Ejecutar con Docker

El contenedor usa Node.js 22 para compilar Astro y Nginx para servir el sitio:

```bash
docker compose up --build
```

Luego abre [http://localhost:4321](http://localhost:4321). Para detenerlo:

```bash
docker compose down
```

## Deploy en Vercel

La configuración de Vercel ya está incluida en `vercel.json`. El proyecto usa Node.js 22, compila con `npm run build` y publica la carpeta `dist/`.

### Opción 1: desde GitHub

1. Sube este proyecto a un repositorio de GitHub.
2. Entra a [vercel.com](https://vercel.com) e inicia sesión.
3. Selecciona **Add New → Project** y elige el repositorio.
4. Vercel detectará Astro automáticamente. Usa `npm run build` como comando de build y deja la carpeta de salida que propone Astro.
5. Presiona **Deploy**.

### Opción 2: usando Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Para un deploy de producción:

```bash
vercel --prod
```

La landing usa el modo estático de Astro, ideal para Vercel: el resultado final queda en `dist/` y no requiere adaptador adicional. Si más adelante conviertes el formulario de contacto en uno real, agrega sus variables de entorno desde **Project Settings → Environment Variables** en Vercel.
