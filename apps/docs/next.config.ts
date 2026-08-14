import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.join(fileURLToPath(new URL(".", import.meta.url)), "../..");

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: repoRoot,
  images: { unoptimized: true },
  trailingSlash: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  transpilePackages: ["@sable/ui", "@sable/tokens"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
