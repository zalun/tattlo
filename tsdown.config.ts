import { defineConfig } from "tsdown";

export default defineConfig({
	entry: {
		"widget/index": "src/widget/index.ts",
		"server/index": "src/server/index.ts",
		"github/index": "src/github/index.ts",
		"sheets/index": "src/sheets/index.ts",
		"s3/index": "src/s3/index.ts",
		"identity/cloudflare-access": "src/identity/cloudflare-access.ts",
	},
	format: "esm",
	dts: true,
	clean: true,
});
