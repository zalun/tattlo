import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		// Widget tests opt into happy-dom per file with `// @vitest-environment happy-dom`
		environment: "node",
		passWithNoTests: true,
	},
});
