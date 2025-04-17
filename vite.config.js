import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            external: [
                /^node:.*/,
            ]
        }
    },
    server: {
        host: '0.0.0.0'
    },
})
