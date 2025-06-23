// biome-ignore assist/source/organizeImports: import order handled manually
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), tailwindcss()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
			"@components": fileURLToPath(new URL("./src/components", import.meta.url)),
			"@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
			"@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
			"@views": fileURLToPath(new URL("./src/views", import.meta.url)),
			"@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
			"@types": fileURLToPath(new URL("./src/types", import.meta.url)),
			"@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
		},
	},
});
