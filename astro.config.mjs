import { defineConfig } from 'astro/config';

// Landing estática: Vercel sirve automáticamente la carpeta dist.
export default defineConfig({
  output: 'static',
});
