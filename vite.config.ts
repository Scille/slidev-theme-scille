import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
    plugins: [svgLoader()],
	slidev: {
		vue: {
			template: {
				compilerOptions: {
					isCustomElement: (tag) => ['e'].includes(tag),
				},
			},
		},
	},
})
