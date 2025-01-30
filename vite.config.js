import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                contacto: resolve(__dirname, 'src/pages/contacto.html'),
                editor: resolve(__dirname, 'src/pages/editor.html'),
                tutoriales: resolve(__dirname, 'src/pages/tutoriales.html'),
            },
        },
    },
    server: {
        open: true,
    },
})