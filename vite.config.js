import {dirname, resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {defineConfig} from "vite";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/main.ts"),
            name: "main",
            fileName: "main"
        }
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src")
        }
    },
    plugins: [dts({rollupTypes: true})]
});